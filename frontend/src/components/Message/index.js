import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Popover, Button, Icon } from "antd";
import reactStringReplace from "react-string-replace";
import { Emoji } from "emoji-mart";

import { Time, IconReaded, Avatar, AudioMessage } from "../";
import { isAudio } from "../../utils/helpers";

import "./Message.scss";

const Message = ({
  user,
  text,
  date,
  isMe,
  read,
  attachments,
  isTyping,
  onRemoveMessage,
  setPreviewImage
}) => {
  const renderAttachment = item => {
    if (item.ext !== "webm") {
      return (
        <div
          key={item._id}
          onClick={() => setPreviewImage(item.url)}
          className="message__attachments-item"
        >
          <div className="message__attachments-item-overlay">
            <Icon type="eye" style={{ color: "white", fontSize: 18 }} />
          </div>
          <img src={item.url} alt={item.filename} />
        </div>
      );
    } else {
      return <AudioMessage key={item._id} audioSrc={item.url} />;
    }
  };

  return (
    <div
      className={classNames("message", {
        "message--isme": isMe,
        "message--is-typing": isTyping,
        "message--is-audio": isAudio(attachments),
        "message--image":
          !isAudio(attachments) &&
          attachments &&
          attachments.length === 1 &&
          !text
      })}
    >
      <div className="message__content">
        <IconReaded isMe={isMe} isReaded={read} />
        <Popover
          content={
            <div>
              <Button onClick={onRemoveMessage}>Удалить сообщение</Button>
            </div>
          }
          trigger="click"
        >
          <div className="message__icon-actions">
            <Button type="link" shape="circle" icon="ellipsis" />
          </div>
        </Popover>
        <div className="message__avatar">
          <Avatar user={user} />
        </div>
        <div>
          <div className="message__info">
            {(text || isTyping) && ( // если есть текст сообщения или он печатается или аудио есть, то бабл (оболочка сообщения) - есть
              <div className="message__bubble">
                {text && (
                  <p className="message__text">
                    {reactStringReplace(text, /:(.+?):/g, (match, i) => (
                      <Emoji key={i} emoji={match} set="apple" size={16}></Emoji>
                    ))}
                  </p>
                )}
                {isTyping && (
                  <div className="message__typing">
                    <span />
                    <span />
                    <span />
                  </div>
                )}
                {false && <AudioMessage audioSrc={null} />}
              </div>
            )}

            {attachments && (
              <div className="message__attachments">
                {attachments.map(item => renderAttachment(item))}
              </div>
            )}

            {date && (
              <span className="message__date">
                <Time date={date} />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Message.defaultProps = {
  user: {}
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.object,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool, // вводит ли человек текст или нет
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
  audio: PropTypes.string
};

export default Message;
