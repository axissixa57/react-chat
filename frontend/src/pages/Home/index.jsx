import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { Empty } from "antd";

import { Messages, ChatInput, Status, Sidebar } from "../../containers";
import { dialogsActions } from "../../redux/actions";

import "./Home.scss";

const Home = props => {
  const { setCurrentDialogId, currentDialogId, user } = props;

  useEffect(() => {
    const { pathname } = props.location;
    const dialogId = pathname.split("/").pop();
    setCurrentDialogId(dialogId);
  }, [props.location.pathname]);

  return (
    <section className="home">
      <div className="chat">
        <Sidebar />
        <div className="chat__dialog">
          <Status />
          <div className="chat__dialog-messages">
            {!currentDialogId ? (
              <Empty description="Откройте диалог" />
            ) : (
              <Messages />
            )}
          </div>
          <div className="chat__dialog-input">
            <ChatInput />
          </div>
        </div>
      </div>
    </section>
  );
};

export default compose(
  connect(
    ({ user, dialogs }) => ({
      user: user.data,
      currentDialogId: dialogs.currentDialogId
    }),
    dialogsActions
  ),
  withRouter
)(Home);
