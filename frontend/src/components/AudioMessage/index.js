import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Time, IconReaded } from "../";

import "./AudioMessage.scss";

const AudioMessage = ({
  avatar,
  user,
  text,
  date,
  isMe,
  isReaded,
  attachments,
  isTyping,
}) => (
  <div
    className={classNames("message", {
      "message--isme": isMe,
      "message--is-typing": isTyping,
      "message--image": attachments && attachments.length === 1
    })}
  >
    <div className="message__content">
      <IconReaded isMe={isMe} isReaded={isReaded} />
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user.fullName}`} />
      </div>
      <div>
        <div className="message__info">
          {(text || isTyping) && ( // если есть текст сообщения или он печатается, то бабл (оболочка сообщения) - есть
            <div className="message__bubble">
              {text && <p className="message__text">{text}</p>}
              {isTyping && (
                <div className="message__typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
            </div>
          )}
          <div className="message__attachments">
            {attachments &&
              attachments.map(item => (
                <div className="message__attachments-item">
                  <img src={item.url} alt={item.filename} />
                </div>
              ))}
          </div>
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

AudioMessage.defaultProps = {
  user: {}
};

AudioMessage.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.object,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool, // вводит ли человек текст или нет
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,

};

export default AudioMessage;
