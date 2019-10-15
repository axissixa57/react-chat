import React, { useState } from "react";
import { connect } from "react-redux";

import { messagesActions } from "../redux/actions";
import { filesApi } from "../utils/api";
import { ChatInput } from "../components";

const ChatInputContainer = ({ fetchSendMessage, currentDialogId }) => {
  const [value, setValue] = useState("");
  const [emojiPickerVisible, setShowEmojiPicker] = useState(false);
  const [attachments, setAttachments] = useState([]);

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!emojiPickerVisible);
  };

  const addEmoji = ({ colons }) => {
    setValue(`${value} ${colons}`.trim());
  };

  const handleSendMessage = e => {
    if (e.keyCode === 13) {
      // на Enter
      fetchSendMessage(value, currentDialogId);
      setValue("");
    }
  };

  const sendMessage = () => {
    fetchSendMessage(value, currentDialogId);
    setValue("");
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
    />
  );
};

export default connect(
  ({ dialogs }) => dialogs,
  messagesActions
)(ChatInputContainer);
