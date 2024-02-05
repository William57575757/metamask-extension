import React, { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { MESSAGE_TYPE } from '../../../../../shared/constants/app';
import {
  BackgroundColor,
  BorderRadius,
} from '../../../../helpers/constants/design-system';
import { hexToText } from '../../../../helpers/utils/util';
import { useI18nContext } from '../../../../hooks/useI18nContext';
import { currentConfirmationSelector } from '../../../../selectors';
import { Box } from '../../../component-library';
import { ConfirmInfo, ConfirmInfoRowType } from '../info/info';

const SignatureMessage: React.FC = memo(() => {
  const t = useI18nContext();
  const currentConfirmation = useSelector(currentConfirmationSelector);

  const args = useMemo(() => {
    if (
      !currentConfirmation ||
      currentConfirmation.type !== MESSAGE_TYPE.PERSONAL_SIGN ||
      !currentConfirmation.msgParams?.data
    ) {
      return null;
    }
    return {
      rowConfigs: [
        {
          label: t('message'),
          type: ConfirmInfoRowType.Text,
          rowProps: {
            text: hexToText(currentConfirmation.msgParams?.data),
          },
        },
      ],
    };
  }, [currentConfirmation]);

  if (!args) {
    return null;
  }

  return (
    <Box
      backgroundColor={BackgroundColor.backgroundDefault}
      borderRadius={BorderRadius.MD}
      padding={2}
      marginBottom={4}
    >
      <ConfirmInfo {...args} />
    </Box>
  );
});

export default SignatureMessage;