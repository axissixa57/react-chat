import React from "react";
import PropTypes from "prop-types";
import { Empty, Spin } from "antd";
import classNames from "classnames";

import "./Messages.scss";

import { Message } from "../../components";

const Messages = ({ isLoading, items, blockRef, user, onRemoveMessage }) => {
  return (
    <div
      ref={blockRef} // т.к. блок с классом messages имеет scroll, то им можно манипулировать
      className={classNames("messages", { "messages--loading": isLoading })}
    >
      {isLoading ? ( // загрузка идёт (true) и сообщений нет - идёт загрузка
        <Spin size="large" tip="Загрузка сообщений..."></Spin>
      ) : items && !isLoading ? ( // если загрузка не идёт (false) и есть сообщения
        items.length > 0 ? items.map(item => <Message key={item._id} isMe={user._id === item.user._id} onRemoveMessage={onRemoveMessage.bind(this, item._id)} {...item} />) : <Empty description="Диалог пуст" />
      ) : (
        // если нет сообщений
        <Empty description="Откройте диалог" />
      )}
    </div>
  );
};

Messages.propTypes = {
  items: PropTypes.array
};

export default Messages;
