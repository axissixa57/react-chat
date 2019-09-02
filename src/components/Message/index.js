import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import waveSvg from '../../assets/img/wave.svg'

import { Time, IconReaded } from "../";

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
  audio
}) => (
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
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user.fullName}`} />
      </div>
      <div>
        <div className="message__info">
          {(audio || text || isTyping) && ( // если есть текст сообщения или он печатается или аудио есть, то бабл (оболочка сообщения) - есть
            <div className="message__bubble">
              {text && <p className="message__text">{text}</p>}
              {isTyping && (
                <div className="message__typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
              {audio && (
                <div className="message__audio">
                  <div
                    className="message__audio-progress"
                    style={{ width: "50%" }}
                  ></div>
                  <div className="message__audio-info">
                    <div className="message__audio-btn">
                      <button>...</button>
                    </div>
                    <div className="message__audio-wave"></div>
                  </div>
                </div>
              )}
            </div>
          )}

          {attachments && (
            <div className="message__attachments">
              {attachments.map(item => (
                <div className="message__attachments-item">
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
