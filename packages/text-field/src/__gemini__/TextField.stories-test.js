import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "@hig/icon";

import TextField from "../index";

const defaultProps = {
  label: "Username",
  placeholder: "email@example.com",
  instructions: "This is typically your email address.",
  required: "Required",
  showClearButton: true
};

storiesOf("TextField", module)
  .add("basic", () => <TextField {...defaultProps} />)
  .add("disabled", () => <TextField {...defaultProps} disabled />)
  .add("with preceding icon", () => (
    <TextField {...defaultProps} icon={<Icon name="visible" />} />
  ));
