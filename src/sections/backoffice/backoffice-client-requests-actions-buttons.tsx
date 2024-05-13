'use client';

import { useTranslationClient } from '@/i18n/client';
import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';
import React from 'react';

const BackofficeClientRequestsActionsButtons = () => {
  const router = useRouter();
  const { t } = useTranslationClient('backoffice');
  return (
    <div>
      <Button color='secondary' variant='faded' onClick={router.refresh}>
        {t('refresh')}
      </Button>
    </div>
  );
};

export default BackofficeClientRequestsActionsButtons;
