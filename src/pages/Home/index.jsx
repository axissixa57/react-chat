import React from "react";

import { Dialogs, Message } from "../../components";
import "./Home.scss";

const Home = () => (
  <section className="home">
    <Dialogs
      userId={0}
      items={[
        {
          _id: Math.random(),
          text:
            "Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша",
          created_at: new Date("Mon Sep 02 2019 12:30:39"),
          user: {
            _id: 1,
            fullname: "Фёдор Достоевский",
            avatar: 'https://sun9-45.userapi.com/c638730/v638730378/5c974/6BLDqLPys7I.jpg?ava=1',
            isOnline: true
          }
        },
        {
          _id: Math.random(),
          text:
            "Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша",
          created_at: new Date("Mon Sep 01 2019 12:30:39"),
          user: {
            _id: 1,
            fullname: "Гай Юлий Цезарь",
            avatar: 'https://sun2.velcom-by-minsk.userapi.com/c849428/v849428171/1ae02f/Qerht2ksCGY.jpg?ava=1',
            isOnline: true
          }
        }
      ]}
    />
    {/* <Message
      avatar="https://sun9-45.userapi.com/c638730/v638730378/5c974/6BLDqLPys7I.jpg?ava=1"
      text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝 🖐🏻"
      date={new Date("Wed Aug 28 2019 14:13:05")}
      attachments={[
        // random 1,2,3 - чтобы в кэше браузера не выводило одни и те же картинки
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
      isTyping // сообщение печатается
    />
    <Message
      avatar="https://sun9-45.userapi.com/c638730/v638730378/5c974/6BLDqLPys7I.jpg?ava=1"
      attachments={[
        {
          filename: "image.jpg",
          url: "https://source.unsplash.com/100x100/?random=1&nature,water"
        }
      ]}
    /> */}
    <Message
      avatar="https://sun2.velcom-by-minsk.userapi.com/c849428/v849428171/1ae02f/Qerht2ksCGY.jpg?ava=1"
      date={new Date("Wed Aug 28 2019 14:20:05")}
      audio="https://notificationsounds.com/soundfiles/38913e1d6a7b94cb0f55994f679f5956/file-6c_early-sunrise-song.mp3"
    />
  </section>
);

export default Home;
