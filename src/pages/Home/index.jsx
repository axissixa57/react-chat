import React from "react";
import { Icon, Input } from "antd";

import { Dialogs, Message } from "../../components";
import "./Home.scss";

const Home = () => (
  <section className="home">
    <div className="chat">
      <div className="chat__sidebar">
        <div className="chat__sidebar-header">
          <div>
            <Icon type="team" />
            <span>Список диалогов</span>
          </div>
          <Icon type="form" />
        </div>

        <div className="chat__sidebar-search">
          <Input.Search
            placeholder="Поиск по контактов"
            onSearch={value => console.log(value)}
            // style={{ width: 200 }}
          />
        </div>

        <div className="chat__sidebar-dialogs">
          <Dialogs
            userId={0}
            items={[
              {
                _id: Math.random(),
                text:
                  "Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша",
                created_at:
                  "Sun Aug 31 2019 01:53:10 GMT+0300 (Moscow Summer Time)",
                user: {
                  _id: "d95b28d46ebc689284bb1e90692f8d4",
                  fullname: "Фёдор Достоевский",
                  avatar:
                    "https://sun9-45.userapi.com/c638730/v638730378/5c974/6BLDqLPys7I.jpg?ava=1",
                  isOnline: true
                }
              },
              {
                _id: Math.random(),
                text:
                  "Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша",
                created_at:
                  "Sun Aug 15 2019 01:53:10 GMT+0300 (Moscow Summer Time)",
                user: {
                  _id: "202cb962ac59075b964b07152d234b70",
                  fullname: "Гай Юлий Цезарь",
                  avatar: null,
                  isOnline: true
                }
              },
              {
                _id: "21f09bfd77a0474298648a7b5599f4d3",
                text:
                  "Duis do eu culpa ad mollit sit minim quis sunt esse anim. Ex velit sint consequat ipsum fugiat irure consequat ut. Do tempor voluptate magna ipsum id pariatur.",
                created_at: "Sun Nov 03 1974 18:49:32 GMT+0000 (UTC)",
                user: {
                  _id: "21f09bfd77a0474298648a7b5599f4d3",
                  fullname: "Perez Jacobson",
                  avatar: null
                }
              },
              {
                _id: "41b4cc8ffc01aef863dfa8afcbbd0986",
                text:
                  "Lorem aute in culpa adipisicing aute aliquip nulla quis irure ea enim ullamco sunt. Consequat deserunt ipsum officia ut officia officia ut tempor tempor qui velit voluptate aliqua. Ad aliquip tempor tempor sint commodo esse deserunt et elit aute Lorem in et.",
                created_at: "Thu Apr 21 1977 23:23:36 GMT+0000 (UTC)",
                user: {
                  _id: "41b4cc8ffc01aef863dfa8afcbbd0986",
                  fullname: "Fitzgerald Eaton",
                  avatar: null
                }
              },
              {
                _id: "e079c8cddf392c639c7e77481717352a",
                text:
                  "Irure proident consequat ipsum dolore do Lorem mollit ad sit id. Consequat non exercitation sunt nostrud laborum consequat quis ea. Eiusmod occaecat excepteur do occaecat elit id aliqua dolore deserunt ea.",
                created_at: "Wed May 15 1985 16:40:53 GMT+0000 (UTC)",
                user: {
                  _id: "e079c8cddf392c639c7e77481717352a",
                  fullname: "Stanton Alford",
                  avatar: null
                }
              },
              {
                _id: "6e68d13b2678d793d340b5fb0c79297d",
                text:
                  "Ut elit enim enim cupidatat ut velit eiusmod. Duis sint labore non velit elit qui do sunt in non nisi. Consectetur deserunt irure magna mollit aute.",
                created_at: "Wed Sep 19 1979 20:02:43 GMT+0000 (UTC)",
                user: {
                  _id: "6e68d13b2678d793d340b5fb0c79297d",
                  fullname: "Preston Cohen",
                  avatar: null
                }
              },
              {
                _id: "f31af49941293524c86c746c10e72f0d",
                text:
                  "Eiusmod commodo velit proident sint enim. Commodo cupidatat laboris anim nisi id dolor fugiat sint adipisicing. Anim exercitation enim consequat duis.",
                created_at: "Sun Jun 25 2017 16:15:58 GMT+0000 (UTC)",
                user: {
                  _id: "f31af49941293524c86c746c10e72f0d",
                  fullname: "Lenore Vinson",
                  avatar: null
                }
              },
              {
                _id: "2f0405c6a12d20a5acbd91db41c016b8",
                text:
                  "Minim ad consectetur consectetur laborum do consequat Lorem nisi mollit ex aute anim consectetur voluptate. Nostrud Lorem velit duis ut esse cillum exercitation occaecat. Adipisicing labore aliqua in ut fugiat labore magna.",
                created_at: "Wed Apr 01 1970 14:35:56 GMT+0000 (UTC)",
                user: {
                  _id: "2f0405c6a12d20a5acbd91db41c016b8",
                  fullname: "Audrey Lopez",
                  avatar: null
                }
              },
              {
                _id: "24c931d4acbec73f8d5f0265c8f1d413",
                text:
                  "Mollit officia amet commodo labore laborum exercitation irure. Excepteur reprehenderit occaecat ipsum nisi consequat duis consectetur mollit occaecat qui officia. Et consequat eiusmod duis eu eiusmod veniam cupidatat mollit laboris est.",
                created_at: "Sun Jun 25 2006 06:37:23 GMT+0000 (UTC)",
                user: {
                  _id: "24c931d4acbec73f8d5f0265c8f1d413",
                  fullname: "Mona Benton",
                  avatar: null
                }
              },
              {
                _id: "cb20a36a653a59a3854c00d6c61ab3c8",
                text:
                  "Quis cillum cillum pariatur Lorem excepteur proident consectetur sit elit est quis eu in. Sint qui labore quis quis cupidatat dolore laborum commodo dolore nisi dolor commodo et incididunt. Proident reprehenderit Lorem occaecat nisi laborum tempor est incididunt.",
                created_at: "Wed Apr 24 2013 15:52:05 GMT+0000 (UTC)",
                user: {
                  _id: "cb20a36a653a59a3854c00d6c61ab3c8",
                  fullname: "Bethany Oconnor",
                  avatar: null
                }
              },
              {
                _id: "140ed62cb052f591a5f2999288357281",
                text:
                  "Ad proident amet minim officia consectetur aliqua minim exercitation. Quis dolor pariatur eu excepteur. Sit adipisicing laboris sit nostrud in velit enim occaecat ipsum.",
                created_at: "Thu Sep 23 1982 04:11:53 GMT+0000 (UTC)",
                user: {
                  _id: "140ed62cb052f591a5f2999288357281",
                  fullname: "Tisha Duke",
                  avatar: null
                }
              },
              {
                _id: "fa568cb4abc8dbb53f03432442481e22",
                text:
                  "Ipsum nulla et in cillum ea commodo cupidatat proident. Id ipsum consequat minim ullamco reprehenderit quis aliqua duis quis. Anim eu aliquip laboris velit aliquip ea.",
                created_at: "Mon May 02 1983 03:30:11 GMT+0000 (UTC)",
                user: {
                  _id: "fa568cb4abc8dbb53f03432442481e22",
                  fullname: "Irma Lester",
                  avatar: null
                }
              }
            ]}
          />
        </div>
      </div>
      <div className="chat__dialog">
        <div className="chat__dialog-header">
          <div className="chat__dialog-header-center">
            <b className="chat__dialog-header-username">Гай Юлий Цезарь</b>
            <div className="chat__dialog-header-status">
              <div className="status status--online">онлайн</div>
            </div>
          </div>
          <Icon type="ellipsis" />
        </div>
      </div>
    </div>

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
    {/* <Message
      avatar="https://sun2.velcom-by-minsk.userapi.com/c849428/v849428171/1ae02f/Qerht2ksCGY.jpg?ava=1"
      date={new Date("Wed Aug 28 2019 14:20:05")}
      audio="https://notificationsounds.com/soundfiles/38913e1d6a7b94cb0f55994f679f5956/file-6c_early-sunrise-song.mp3"
    /> */}
  </section>
);

export default Home;
