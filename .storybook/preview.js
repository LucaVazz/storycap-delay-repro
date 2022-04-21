import { setCompodocJson } from "@storybook/addon-docs/angular";
import { withScreenshot } from 'storycap';

import docJson from "../documentation.json";
setCompodocJson(docJson);

export const decorators = [withScreenshot];

export const parameters = {
  layout: 'centered',
  controls: {
    expanded: true
  },
  docs: { inlineStories: true },
  screenshot: {
    viewport: {
      // half full HD: (complete full HD adds way too much whitespace around components)
      width: 960,
      height: 540
    }
  }
}
