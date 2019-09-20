import React from "react";
import PropTypes from "prop-types";
import { Empty } from "antd";

import { Message } from "../../components";

const Messages = ({ items }) => {
  return items ? (
    <div>
      <Message
        avatar="https://sun9-45.userapi.com/c638730/v638730378/5c974/6BLDqLPys7I.jpg?ava=1"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝 🖐🏻"
        date={new Date("Wed Aug 28 2019 14:13:05")}
        attachments={[
          // /?random 1,2,3 - чтобы в кэше браузера не выводило одни и те же картинки
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=1&nature,water"
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=2&nature,water"
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=3&nature,water"
          }
        ]} // прикрепления к сообщению
      />
      <Message
        avatar="https://sun2.velcom-by-minsk.userapi.com/c849428/v849428171/1ae02f/Qerht2ksCGY.jpg?ava=1"
        text="Hello World 🖐🏻"
        date={new Date("Wed Aug 28 2019 14:20:05")}
        isMe={true}
        isReaded={false}
      />
      <Message
        avatar="https://sun9-45.userapi.com/c638730/v638730378/5c974/6BLDqLPys7I.jpg?ava=1"
        attachments={[
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=1&nature,water"
          }
        ]}
      />{" "}
      <Message
        avatar="https://sun9-45.userapi.com/c638730/v638730378/5c974/6BLDqLPys7I.jpg?ava=1"
        date={new Date("Wed Aug 28 2019 14:20:05")}
        audio="https://notificationsounds.com/soundfiles/38913e1d6a7b94cb0f55994f679f5956/file-6c_early-sunrise-song.mp3"
      />
      <Message
        avatar="https://sun9-45.userapi.com/c638730/v638730378/5c974/6BLDqLPys7I.jpg?ava=1"
        isTyping // сообщение печатается
      />
      <Message
        avatar="https://sun9-45.userapi.com/c638730/v638730378/5c974/6BLDqLPys7I.jpg?ava=1"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝 🖐🏻"
        date={new Date("Wed Aug 28 2019 14:13:05")}
      />
      <Message
        avatar="https://sun9-45.userapi.com/c638730/v638730378/5c974/6BLDqLPys7I.jpg?ava=1"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝 🖐🏻"
        date={new Date("Wed Aug 28 2019 14:13:05")}
      />
      <Message
        avatar="https://sun9-45.userapi.com/c638730/v638730378/5c974/6BLDqLPys7I.jpg?ava=1"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝 🖐🏻"
        date={new Date("Wed Aug 28 2019 14:13:05")}
      />
      <Message
        avatar="https://sun9-45.userapi.com/c638730/v638730378/5c974/6BLDqLPys7I.jpg?ava=1"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝 🖐🏻"
        date={new Date("Wed Aug 28 2019 14:13:05")}
      />
      <Message
        avatar="https://sun9-45.userapi.com/c638730/v638730378/5c974/6BLDqLPys7I.jpg?ava=1"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝 🖐🏻"
        date={new Date("Wed Aug 28 2019 14:13:05")}
      />
      <Message
        avatar="https://sun9-45.userapi.com/c638730/v638730378/5c974/6BLDqLPys7I.jpg?ava=1"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝 🖐🏻"
        date={new Date("Wed Aug 28 2019 14:13:05")}
      />
      <Message
        avatar="https://sun9-45.userapi.com/c638730/v638730378/5c974/6BLDqLPys7I.jpg?ava=1"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝 🖐🏻"
        date={new Date("Wed Aug 28 2019 14:13:05")}
      />
      <Message
        avatar="https://sun9-45.userapi.com/c638730/v638730378/5c974/6BLDqLPys7I.jpg?ava=1"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝 🖐🏻"
        date={new Date("Wed Aug 28 2019 14:13:05")}
      />
      <Message
        avatar="https://sun9-45.userapi.com/c638730/v638730378/5c974/6BLDqLPys7I.jpg?ava=1"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝 🖐🏻"
        date={new Date("Wed Aug 28 2019 14:13:05")}
      />
    </div>
  ) : (
    <Empty description="Откройте диалог" />
  );
};

Messages.propTypes = {
  items: PropTypes.array
};

export default Messages;
