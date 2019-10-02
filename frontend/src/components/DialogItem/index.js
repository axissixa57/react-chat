import React from "react";
import className from "classnames";
import format from "date-fns/format"; // Return the formatted date string in the given format.
import isToday from "date-fns/isToday"; // Is the given date today?

import { IconReaded, Avatar } from "../";

const getMessageTime = created_at => {
  if (isToday(created_at)) { 
    return format(created_at, "HH:mm");
  } else {
    return format(created_at, "dd.MM.yyyy");
  }
};

const DialogItem = ({ _id, user, unreaded, isMe, created_at, text, onSelect, currentDialogId }) => (
  <div></div>
  
  // <div
  //   className={className("dialogs__item", {
  //     "dialogs__item--online": user.isOnline,
  //     "dialogs__item--selected": currentDialogId === _id
  //   })}
  //   onClick={onSelect.bind(this, _id)} // привязка контекста к onSelect
  // >
  //   <div className="dialogs__item-avatar">
  //     <Avatar user={user} />
  //   </div>
  //   <div className="dialogs__item-info">
  //     <div className="dialogs__item-info-top">
  //       <b>{user.fullname}</b>
  //       <span>{getMessageTime(new Date(created_at))}</span>
  //     </div>
  //     <div className="dialogs__item-info-bottom">
  //       <p>{text}</p>
  //       {isMe && <IconReaded isMe={true} isReaded={false} />}
  //       {unreaded > 0 && (
  //         <div className="dialogs__item-info-bottom-count">
  //           {unreaded > 9 ? "+9" : unreaded}
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // </div>
);

export default DialogItem;
