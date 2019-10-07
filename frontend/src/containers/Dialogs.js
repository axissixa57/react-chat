import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { dialogsActions } from "../redux/actions";
import { Dialogs as BaseDialogs } from "../components";

import socket from "../core/socket";

const Dialogs = ({
  items,
  user,
  setCurrentDialogId,
  currentDialogId,
  fetchDialogs
}) => {
  const [inputValue, setValue] = useState(""); // state для отображения значения input-a ввода
  const [filtred, setFiltredItems] = useState([...items]); // state для фильтрации значений из массива

  const onChangeInput = (value = "") => {
    setFiltredItems(
      items.filter(
        dialog =>
          dialog.author.fullname.toLowerCase().indexOf(value.toLowerCase()) >=
            0 ||
          dialog.partner.fullname.toLowerCase().indexOf(value.toLowerCase()) >=
            0
      )
    );

    setValue(value);
  };

  const onNewDialog = () => fetchDialogs();

  useEffect(() => {
    if (items.length) {
      onChangeInput();
    }
  }, [items]);

  useEffect(() => {
    fetchDialogs();

    socket.on("SERVER:DIALOG_CREATED", onNewDialog);
    return () => socket.removeListener("SERVER:DIALOG_CREATED", onNewDialog);
  }, []);

  return (
    <BaseDialogs
      userId={user && user._id}
      items={filtred}
      onSearch={onChangeInput}
      inputValue={inputValue}
      onSelectDialog={setCurrentDialogId}
      currentDialogId={currentDialogId}
    />
  );
};

export default connect(
  ({ dialogs, user }) => ({items: dialogs.items, user: user.data}),
  dialogsActions
)(Dialogs);
