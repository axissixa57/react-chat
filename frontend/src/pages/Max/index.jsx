import React from "react";
import { Link } from "react-router-dom";

import "./Max.scss";
import { NavBar } from "../../components";
// import { Menu } from '../../components/Menu';

const Max = () => {
  const navbarItems = [
    1,2,3
  ];

  return (
    <div className="">
      <NavBar items={navbarItems} />
      <Link className="" to="/im">
        Go to Axis!
      </Link>
      <div className="">
        <li>Aaa</li>
        <li>Bbb</li>
        <li>Ccc</li>
        <li>Ddd</li>
      </div>
    </div>
  );
};

export default Max;
