import { configure, addDecorator, storiesOf } from "@storybook/react";
import 'storybook-chromatic';

const req = require.context("../src/stories", true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
