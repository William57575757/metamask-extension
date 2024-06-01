import React from 'react';
import EthOverview from './eth-overview';

export default {
  title: 'Components/Wallet Overview/Eth Overview',
  component: EthOverview,
  parameters: {
    docs: {
      description: {
        component:
          'A component that displays an overview of Ethereum wallet information.',
      },
    },
  },
};

const Template = (args) => <EthOverview {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add any necessary props here
};
