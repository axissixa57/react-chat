import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { dialogsActions } from "../redux/actions";
import { Dialogs as BaseDialogs } from "../components";

import socket from "../core/socket";

const Dialogs = ({
  items,
  userId,
  setCurrentDialogId,
  currentDialogId,
  fetchDialogs
}) => {
  // setCurrentDialogId, fetchDialogs - из dialogsActions
  const [inputValue, setValue] = useState(""); // state для отображения значения input-a ввода
  const [filtred, setFiltredItems] = useState(Array.from(items)); // state для фильтрации значений из массива

  const onChangeInput = (value = "") => {
    // e.target.value придёт сюда
    setFiltredItems(
      items.filter(
        dialog =>
          dialog.author.fullname.toLowerCase().indexOf(value.toLowerCase()) >=
            0 || // indexOf - позиция символа
          dialog.partner.fullname.toLowerCase().indexOf(value.toLowerCase()) >=
            0
      )
    );

    setValue(value);
  };

  const onNewDialog = () => {
    fetchDialogs();
  };

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
      userId={userId}
      items={filtred}
      onSearch={onChangeInput}
      inputValue={inputValue}
      onSelectDialog={setCurrentDialogId}
      currentDialogId={currentDialogId}
    />
  );
};

// с помощью деструктуризации достаём из глобального state.dialogs, далее из dialogs достаём items тоже через деструктуризацию
export default connect(
  ({ dialogs }) => dialogs,
  dialogsActions
)(Dialogs);
