import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { dialogsActions } from "../redux/actions";
import { Dialogs as BaseDialogs } from "../components";

const Dialogs = ({ items, userId, setCurrentDialogId, fetchDialogs }) => { // setCurrentDialog - из dialogsActions
  const [inputValue, setValue] = useState(""); // state для отображения значения input-a ввода
  const [filtred, setFiltredItems] = useState(Array.from(items)); // state для фильтрации значений из массива

  const onChangeInput = (value = "") => {
    // e.target.value придёт сюда
    setFiltredItems(
      items.filter(
        dialog =>
          dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0 // indexOf - позиция символа
      )
    );

    setValue(value);
  };

  useEffect(() => {
    if(!items.length) {
      fetchDialogs();
    } else {
      setFiltredItems(items);
    }
  }, [items]);

  return (
    <BaseDialogs
      userId={userId}
      items={filtred}
      onSearch={onChangeInput}
      inputValue={inputValue}
      onSelectDialog={setCurrentDialogId}
    />
  );
};

// с помощью деструктуризации достаём из глобального state.dialogs, далее из dialogs достаём items тоже через деструктуризацию
export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs);
