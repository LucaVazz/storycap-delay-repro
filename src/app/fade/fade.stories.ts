import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { FadeComponent } from './fade.component';

export default {
  title: 'components/FadeComponent',
  component: FadeComponent,
  decorators: [
    moduleMetadata({
      imports: []
    })
  ]
} as Meta;

const Template: Story<FadeComponent> = (args) => ({
  props: args,
  template: `
  <app-fade></app-fade>
  `
});

export const Basic: Story<FadeComponent> = Template.bind({});
Basic.parameters = {
  screenshot: {
    delay: 1100
  }
}
