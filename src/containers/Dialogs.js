import React, { useState } from "react";

import { Dialogs as BaseDialogs } from "../components";

const Dialogs = ({
  items,
  userId
}) => {
  const [inputValue, setValue] = useState(""); // state для отображения значения input-a ввода
  const [filtred, setFiltredItems] = useState(Array.from(items)); // state для фильтрации значений из массива

  const onChangeInput = (value = "") => { // e.target.value придёт сюда
    setFiltredItems(
      items.filter(
        dialog =>
          dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0 // indexOf - позиция символа
      )
    );
    
    setValue(value);
  };

  return (
    <BaseDialogs
      userId={userId}
      items={filtred}
      onSearch={onChangeInput}
      inputValue={inputValue}
    />
  );
};

export default Dialogs;
