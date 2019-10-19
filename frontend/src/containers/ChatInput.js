import React, { useState } from "react";
import { connect } from "react-redux";

import { messagesActions } from "../redux/actions";
import { filesApi } from "../utils/api";
import { ChatInput } from "../components";

const ChatInputContainer = ({ fetchSendMessage, currentDialogId }) => {
  window.navigator.getUserMedia =
    window.navigator.getUserMedia ||
    window.navigator.mozGetUserMedia ||
    window.navigator.msGetUserMedia ||
    window.navigator.webkitGetUserMedia;

  const [value, setValue] = useState("");
  const [emojiPickerVisible, setShowEmojiPicker] = useState(false);
  const [attachments, setAttachments] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!emojiPickerVisible);
  };

  const addEmoji = ({ colons }) => {
    setValue(`${value} ${colons}`.trim());
  };

  const handleSendMessage = e => {
    if (e.keyCode === 13) {
      if(value || attachments.length) {
        fetchSendMessage({
          text: value,
          dialogId: currentDialogId,
          attachments: attachments.map(file => file.uid)
        });
        setValue("");
        setAttachments([]);
      }
    }
  };

  const sendMessage = () => {
    if (isRecording) {
      mediaRecorder.stop();
    } else if (value || attachments.length) {
      fetchSendMessage({
        text: value,
        dialogId: currentDialogId,
        attachments: attachments.map(file => file.uid)
      });
      setValue("");
      setAttachments([]);
    }
  };

  const onSelectFiles = async files => {
    let uploaded = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      const uid = Math.round(Math.random() * 1000);

      uploaded = [
        ...uploaded,
        {
          uid,
          name: file.name,
          status: "uploading"
        }
      ];

      setAttachments(uploaded);

      await filesApi.upload(file).then(({ data }) => {
        uploaded = uploaded.map(item => {
          if (item.uid === uid) {
            return {
              status: "done",
              uid: data.file._id,
              name: data.file.filename,
              url: data.file.url
            };
          }
          return item;
        });
      });
    }

    setAttachments(uploaded);
  };

  const onRecord = () => {
    if (navigator.getUserMedia) {
      navigator.getUserMedia({ audio: true }, onRecording, onError);
    }
  };

  const onRecording = stream => {
    const recorder = new MediaRecorder(stream);
    setMediaRecorder(recorder);

    recorder.start();

    recorder.onstart = () => {
      setIsRecording(true);
    };

    recorder.onstop = () => { // сработает, когда вызовится mediaRecorder.stop(), следом выполнится событие ondataavailable
      setIsRecording(false);
    };

    recorder.ondataavailable = (e) => {
      const file = new File([e.data], "audio.webm");
      
      setLoading(true);

      filesApi.upload(file).then(({ data }) => {
        sendAudio(data.file._id).then(() => {
          setLoading(false);
        });
      });
    };
  };

  const onError = err => {
    console.log("The following error occured: " + err);
  };

  const onHideRecording = () => {
    setIsRecording(false);
  };

  const sendAudio = audioId => {
    return fetchSendMessage({
      text: null,
      dialogId: currentDialogId,
      attachments: [audioId]
    });
  };

  return !currentDialogId ? null : (
    <ChatInput
      value={value}
      setValue={setValue}
      emojiPickerVisible={emojiPickerVisible}
      toggleEmojiPicker={toggleEmojiPicker}
      addEmoji={addEmoji}
      handleSendMessage={handleSendMessage}
      sendMessage={sendMessage}
      attachments={attachments}
      onSelectFiles={onSelectFiles}
      onRecord={onRecord}
      isRecording={isRecording}
      onHideRecording={onHideRecording}
      isLoading={isLoading}
    />
  );
};

export default connect(
  ({ dialogs }) => dialogs,
  messagesActions
)(ChatInputContainer);
