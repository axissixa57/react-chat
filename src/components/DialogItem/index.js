import React from "react";
import className from "classnames";
import format from "date-fns/format"; // Return the formatted date string in the given format.
import isToday from "date-fns/isToday"; // Is the given date today?

import { IconReaded } from "../";

import "./DialogItem.scss";

const getMessageTime = created_at => {
  if (isToday(created_at)) { 
    return format(created_at, "HH:mm");
  } else {
    return format(created_at, "dd.mm.yyyy");
  }
};

const getAvatar = avatar => {
  if(avatar) {
    return (
      <img
        src={avatar}
        alt=""
      />
    )
  } else {
    
  }
}

const DialogItem = ({ user, unreaded, isMe, created_at, text }) => (
  <div
    className={className("dialogs__item", {
      "dialogs__item--online": user.isOnline
    })}
  >
    <div className="dialogs__item-avatar">
      {getAvatar(user.avatar)}
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{user.fullname}</b>
        <span>
          {getMessageTime(created_at)}
        </span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>
          {text}
        </p>
        {isMe && <IconReaded isMe={true} isReaded={false} />}
        {unreaded > 0 && (
          <div className="dialogs__item-info-bottom-count">
            {unreaded > 9 ? "+9" : unreaded}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default DialogItem;
