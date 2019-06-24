import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button } from "../Button";

storiesOf("Button", module)
  .add("normal", () => (
    <Button onClick={action("clicked")} text="Hello Button" />
  ))
  .add("submit", () => (
    <Button onClick={action("clicked")} text="Hello Button" type="submit" />
  ));
