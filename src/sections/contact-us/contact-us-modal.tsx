import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/modal';
import { Button } from '@nextui-org/button';
import { useTranslationClient } from '@/i18n/client';
import { P } from '@/theme/typography';

interface ContactUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactUsModal: React.FC<ContactUsModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslationClient('contact-us');
  return (
    <>
      <Modal {...{ isOpen, onClose }}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>{t('modal.title')}</ModalHeader>
              <ModalBody>
                <P>{t('modal.text')}</P>
              </ModalBody>
              <ModalFooter>
                <Button color='primary' onPress={onClose}>
                  {t('modal.accept')}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContactUsModal;
