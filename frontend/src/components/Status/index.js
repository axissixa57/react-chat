import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Button } from "antd";

import "./Status.scss";

const Status = ({ online, fullname }) => (
  <div className="chat__dialog-header">
    <div />
    <div className="chat__dialog-header-center">
      <b className="chat__dialog-header-username">{fullname}</b>
      <div className="chat__dialog-header-status">
        <span className={classNames("status", { "status--online": online })}>
          {online ? "онлан" : "офлайн"}
        </span>
      </div>
    </div>
    <Button type="link" shape="circle" icon="ellipsis" />
  </div>
);

Status.propTypes = {
  online: PropTypes.bool
};

export default Status;
