import React from "react";
import PropTypes from "prop-types";
import { Empty, Spin, Modal } from "antd";
import classNames from "classnames";

import "./Messages.scss";

import { Message } from "../../components";

const Messages = ({
  isLoading,
  items,
  blockRef,
  user,
  onRemoveMessage,
  blockHeight,
  previewImage,
  setPreviewImage,
  partner,
  isTyping
}) => {
  return (
    <div
      className="chat__dialog-messages"
      style={{ height: `calc(100% - ${blockHeight}px)` }}
    >
      <div
        ref={blockRef} // т.к. блок с классом messages имеет scroll, то им можно манипулировать
        className={classNames("messages", { "messages--loading": isLoading })}
      >
        {isLoading && !user ? ( // загрузка идёт (true) и сообщений нет - идёт загрузка
          <Spin size="large" tip="Загрузка сообщений..."></Spin>
        ) : items && !isLoading ? ( // если загрузка не идёт (false) и есть сообщения
          items.length > 0 ? (
            items.map(item => {
              return (
                <Message
                  key={item._id}
                  isMe={user._id === item.user._id}
                  onRemoveMessage={onRemoveMessage.bind(this, item._id)}
                  setPreviewImage={setPreviewImage}
                  {...item}
                />
              );
            })
          ) : (
            <Empty description="Диалог пуст" />
          )
        ) : (
          // если нет сообщений
          <Empty description="Откройте диалог" />
        )}
        {isTyping && <Message isTyping={true} user={partner} />}
        <Modal
          visible={!!previewImage}
          onCancel={() => setPreviewImage(null)}
          footer={null}
        >
          <img style={{ width: "100%" }} src={previewImage} alt="Preview"></img>
        </Modal>
      </div>
    </div>
  );
};

Messages.propTypes = {
  items: PropTypes.array
};

export default Messages;
