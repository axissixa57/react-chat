import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Popover, Button } from "antd";
import reactStringReplace from 'react-string-replace';
import { Emoji } from "emoji-mart";

import { Time, IconReaded, Avatar, AudioMessage } from "../";

import "./Message.scss";

const Message = ({
  avatar,
  user,
  text,
  date,
  isMe,
  isReaded,
  attachments,
  isTyping,
  audio,
  onRemoveMessage
}) => {
  return (
    <div
      className={classNames("message", {
        "message--isme": isMe,
        "message--is-typing": isTyping,
        "message--image": attachments && attachments.length === 1,
        "message--is-audio": audio
      })}
    >
      <div className="message__content">
        <IconReaded isMe={isMe} isReaded={isReaded} />
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
            {(audio || text || isTyping) && ( // если есть текст сообщения или он печатается или аудио есть, то бабл (оболочка сообщения) - есть
              <div className="message__bubble">
                {text && <p className="message__text">{reactStringReplace(text, /:(.+?):/g, (match, i) => <Emoji emoji={match} set='apple' size={16}></Emoji>)}</p>}
                {isTyping && (
                  <div className="message__typing">
                    <span />
                    <span />
                    <span />
                  </div>
                )}
                {audio && <AudioMessage audioSrc={audio} />}
              </div>
            )}

            {attachments && (
              <div className="message__attachments">
                {attachments.map((item, index) => (
                  <div key={index} className="message__attachments-item">
                    <img src={item.url} alt={item.filename} />
                  </div>
                ))}
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
