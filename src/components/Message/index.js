import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import waveSvg from "../../assets/img/wave.svg";
import playSvg from "../../assets/img/play.svg";
import pauseSvg from "../../assets/img/pause.svg";

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
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioElem = useRef(null);

  useEffect(() => {
    audioElem.current.addEventListener(
      "playing",
      () => {
        setIsPlaying(true);
      },
      false
    );

    audioElem.current.addEventListener(
      "ended",
      () => {
        setIsPlaying(false);
      },
      false
    );

    audioElem.current.addEventListener(
      "pause",
      () => {
        setIsPlaying(false);
      },
      false
    );
  }, []);

  const togglePlay = () => {
    audioElem.current.volume = "0.1";

    if (!isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  };

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
                    <audio ref={audioElem} src={audio} preload="auto"></audio>
                    <div className="message__audio-progress"></div>
                    <div className="message__audio-info">
                      <div className="message__audio-btn">
                        <button onClick={togglePlay}>
                          {isPlaying ? (
                            <img src={pauseSvg} alt="Pause svg" />
                          ) : (
                            <img src={playSvg} alt="Play svg" />
                          )}
                        </button>
                      </div>
                      <div className="message__audio-wave">
                        <img src={waveSvg} alt="Wave svg" />
                      </div>
                      <span className="message__audio-duration">00:19</span>
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
