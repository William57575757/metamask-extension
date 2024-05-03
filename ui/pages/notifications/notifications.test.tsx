import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Notifications from './notifications';

jest.mock('../../store/actions', () => ({
  deleteExpiredNotifications: jest.fn(() => () => null),
}));

jest.mock(
  '../../contexts/metamask-notifications/metamask-notifications',
  () => ({
    useMetamaskNotificationsContext: () => ({
      isLoading: false,
      error: null,
    }),
  }),
);

const initialState = {
  metamask: {
    theme: 'light',
    isMetamaskNotificationsEnabled: true,
    isSnapNotificationsEnabled: false,
    isFeatureAnnouncementsEnabled: true,
    metamaskNotifications: [],
    notifications: [],
    internalAccounts: {
      accounts: [
        {
          address: '0x123',
          id: 'account1',
          metadata: {},
          options: {},
          methods: [],
          type: 'eip155:eoa',
          balance: '100',
          keyring: { type: 'type1' },
          label: 'Account 1',
        },
      ],
    },
  },
};

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

describe('Notifications Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Notifications />
        </MemoryRouter>
      </Provider>,
    );

    expect(getByTestId('notifications-page')).toBeInTheDocument();
  });

  it('navigates to default route on back button click', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Notifications />
        </MemoryRouter>
      </Provider>,
    );

    fireEvent.click(getByTestId('back-button'));
  });

  it('navigates to settings on settings button click', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Notifications />
        </MemoryRouter>
      </Provider>,
    );

    fireEvent.click(getByTestId('notifications-settings-button'));
  });
});
