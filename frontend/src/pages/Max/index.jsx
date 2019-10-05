import React from "react";
import {Link} from "react-router-dom";

import "./Max.scss";
import {HumburgerMenu, NavBar} from "../../components";

const Max = () => {
  return (
    <div className="max">
      <HumburgerMenu/>
      <NavBar/>
    </div>
  );
};

export default Max;
