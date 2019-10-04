import React from "react";
import { connect } from "react-redux";

import { messagesActions } from "../redux/actions";
import { ChatInput } from "../components";

export default connect(
  ({ dialogs }) => dialogs,
  messagesActions
)(ChatInput);
