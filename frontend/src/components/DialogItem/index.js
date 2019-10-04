import React from "react";
import className from "classnames";
import format from "date-fns/format"; // Return the formatted date string in the given format.
import isToday from "date-fns/isToday"; // Is the given date today?
import { Link } from 'react-router-dom';

import { IconReaded, Avatar } from "../";

const getMessageTime = created_at => {
  if (isToday(created_at)) {
    return format(created_at, "HH:mm");
  } else {
    return format(created_at, "dd.MM.yyyy");
  }
};

const DialogItem = ({
  _id,
  unreaded,
  isMe,
  onSelect,
  currentDialogId,
  lastMessage
}) => (
  <Link to={`/dialog/${_id}`}>
  <div
    className={className("dialogs__item", {
      "dialogs__item--online": lastMessage.user.isOnline,
      "dialogs__item--selected": currentDialogId === _id
    })}
    onClick={onSelect.bind(this, _id)} // привязка контекста к onSelect
  >
    <div className="dialogs__item-avatar">
      <Avatar user={lastMessage.user} />
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{lastMessage.user.fullname}</b>
        <span>{getMessageTime(new Date(lastMessage.createdAt))}</span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>{lastMessage.text}</p>
        {isMe && <IconReaded isMe={true} isReaded={false} />}
        {unreaded > 0 && (
          <div className="dialogs__item-info-bottom-count">
            {unreaded > 9 ? "+9" : unreaded}
          </div>
        )}
      </div>
    </div>
  </div>
  </Link>
);

export default DialogItem;
