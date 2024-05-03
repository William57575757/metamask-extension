import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { I18nContext } from '../../../../contexts/i18n';
import { useModalProps } from '../../../../hooks/useModalProps';
import { useMetamaskNotificationsContext } from '../../../../contexts/metamask-notifications/metamask-notifications';
import {
  selectIsMetamaskNotificationsEnabled,
  selectIsCreatingMetamaskNotifications,
} from '../../../../selectors/metamask-notifications/metamask-notifications';
import { useCreateNotifications } from '../../../../hooks/metamask-notifications/useNotifications';
import { NOTIFICATIONS_ROUTE } from '../../../../helpers/constants/routes';

import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Text,
  ModalFooter,
} from '../../../component-library';
import {
  AlignItems,
  BlockSize,
  BorderRadius,
  FlexDirection,
  FontWeight,
  TextColor,
} from '../../../../helpers/constants/design-system';

export default function TurnOnMetamaskNotifications() {
  const { hideModal } = useModalProps();
  const history = useHistory();

  const isNotificationEnabled = useSelector(
    selectIsMetamaskNotificationsEnabled,
  );

  const isCreatingMetamaskNotifications = useSelector(
    selectIsCreatingMetamaskNotifications,
  );

  const t = useContext(I18nContext);

  const { listNotifications } = useMetamaskNotificationsContext();

  const { createNotifications, loading, error } = useCreateNotifications();

  const handleTurnOnNotifications = async () => {
    await createNotifications();
  };

  const handleHideModal = () => {
    hideModal();
  };

  useEffect(() => {
    if (isNotificationEnabled && !loading && !error) {
      history.push(NOTIFICATIONS_ROUTE);
      hideModal();
      listNotifications();
    }
  }, [isNotificationEnabled, loading, error]);

  const privacyLink = (
    <Text
      as="a"
      href="https://metamask.io/privacy.html"
      target="_blank"
      rel="noopener noreferrer"
      key="privacy-link"
      color={TextColor.infoDefault}
    >
      {t('turnOnMetamaskNotificationsMessagePrivacyLink')}
    </Text>
  );

  const strongText = (
    <Text as="span" fontWeight={FontWeight.Bold} key="strong-text">
      {t('turnOnMetamaskNotificationsMessagePrivacyBold')}
    </Text>
  );

  return (
    <Modal isOpen onClose={() => handleHideModal()}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader onClose={() => handleHideModal()}>
          {t('turnOnMetamaskNotifications')}
        </ModalHeader>
        <ModalBody>
          <Box
            as="img"
            src="./images/turn-on-metamask-notifications.png"
            width={BlockSize.Full}
            borderRadius={BorderRadius.MD}
            marginBottom={4}
          />
          <Text as="p">{t('turnOnMetamaskNotificationsMessageFirst')}</Text>
          <Text as="p" paddingTop={4}>
            {
              // @ts-expect-error: Expected 0-1 arguments, but got an array.
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              t('turnOnMetamaskNotificationsMessageSecond', [privacyLink])
            }
          </Text>
          <Text as="p" paddingTop={4}>
            {
              // @ts-expect-error: Expected 0-1 arguments, but got an array.
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              t('turnOnMetamaskNotificationsMessageThird', [strongText])
            }
          </Text>
        </ModalBody>
        <ModalFooter
          paddingTop={4}
          onSubmit={() => handleTurnOnNotifications()}
          containerProps={{
            flexDirection: FlexDirection.Column,
            alignItems: AlignItems.stretch,
          }}
          submitButtonProps={{
            children: t('turnOnMetamaskNotificationsButton'),
            loading: isCreatingMetamaskNotifications,
            disabled: isCreatingMetamaskNotifications,
            'data-testid': 'turn-on-notifications-button',
          }}
        />
        {error && (
          <Box paddingLeft={4} paddingRight={4}>
            <Text as="p" color={TextColor.errorDefault} paddingTop={4}>
              {t('turnOnMetamaskNotificationsError')}
            </Text>
          </Box>
        )}
      </ModalContent>
    </Modal>
  );
}
