import React from "react";
import orderBy from 'lodash/orderBy';
import isToday from "date-fns/isToday";

import { DialogItem } from "../";

import "./Dialogs.scss";

const Dialogs = ({ items, userId }) => ( 
  <div className="dialogs">
    {orderBy(items, ['created_at'], ['desc']).map(item => ( // orderBy сортирует объекты по конкретному полю (можно несколько)
        <DialogItem
          key={item._id}
          // проверка id из бд и id из redux state для проставки галочки прочтения
          isMe={item.user._id === userId}
          {...item}
        />
      ))}
  </div>
);

export default Dialogs;
