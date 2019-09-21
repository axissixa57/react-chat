import React from "react";
import PropTypes from "prop-types";
import { Empty, Spin } from "antd";
import classNames from "classnames";

import './Messages.scss';

import { Message } from "../../components";

const Messages = ({ isLoading, items }) => {
  return (
    <div className={classNames("messages", { "messages--loading": isLoading })}>
      {isLoading ? ( // загрузка идёт (true) и сообщений нет - идёт загрузка
        <Spin size="large" tip="Загрузка сообщений..."></Spin>
      ) : items && !isLoading ? ( // если загрузка не идёт (false) и есть сообщения
        items.map(item => <Message {...item} />)
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
