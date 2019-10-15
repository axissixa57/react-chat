import React from "react";
import PropTypes from "prop-types";
import readSvg from "../../assets/img/read.svg";
import unreadSvg from "../../assets/img/unread.svg";

const IconReaded = ({ isMe, isReaded }) =>
  (isMe && // если это автор сообщения и сообщение прочитано, то 2 ковычки возле сообщения, не прочитано - одни
    (isReaded ? (
      <img className="message__icon-readed" src={readSvg} alt="Readed icon" />
    ) : (
      <img
        className="message__icon-readed message__icon-readed--no"
        src={unreadSvg}
        alt="No readed icon"
      />
    ))) ||
  null;

IconReaded.propTypes = {
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool
};

export default IconReaded;