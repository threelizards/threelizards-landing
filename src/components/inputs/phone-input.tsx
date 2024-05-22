import React, { useMemo, useState } from 'react';
import { Input, InputProps } from '@nextui-org/input';
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/modal';
import { useI18NContext } from '@/i18n/context';
import { Listbox, ListboxItem } from '@nextui-org/listbox';
import { CountryCode, getCountryCallingCode, isSupportedCountry, AsYouType } from 'libphonenumber-js';
import { Selection } from '@nextui-org/react';

const PhoneInput: React.FC<InputProps> = ({ onChange, ...props }) => {
  const [country, setCountry] = useState('CU');
  const [phoneNumber, setPhoneNumber] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getLocales } = useI18NContext();
  const { countries } = getLocales();
  const supportedCountries = useMemo(
    () => Object.entries(countries).filter(([code]) => isSupportedCountry(code)),
    [countries]
  );

  const handleSelectionCountryChange = (keys: Selection) => {
    setCountry((keys as unknown as { anchorKey: string }).anchorKey);
    onClose();
  };

  const callingCode = useMemo(() => getCountryCallingCode(country as CountryCode), [country]);

  const handleFormatNumber: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const formatted = new AsYouType(country as CountryCode).input(event.target.value);
    if (formatted !== phoneNumber) {
      setPhoneNumber(formatted);
      event.target.value = formatted ? `+${callingCode} ${formatted}` : '';
    } else {
      setPhoneNumber((prev) => prev.substring(0, prev.length - 2));
      const newPhoneFormatted = event.target.value.substring(0, event.target.value.length - 1);
      event.target.value = newPhoneFormatted ? `+${callingCode} ${newPhoneFormatted}` : '';
    }
    onChange?.(event);
  };

  const orderedCountries = useMemo(
    () =>
      supportedCountries.sort(([_, prev], [__, current]) => {
        if (prev < current) return -1;
        else if (prev > current) return 1;
        return 0;
      }),
    [supportedCountries]
  );

  return (
    <>
      <Input
        {...props}
        maxLength={20}
        startContent={
          <div className='flex gap-2 items-center text-default-800 text-small'>
            <div className='cursor-pointer' onClick={onOpen}>
              {country.toString()}
            </div>
            <span>+{callingCode}</span>
          </div>
        }
        onKeyDown={(e) => {
          if (e.key !== 'Backspace' && !(Number(e.key) + 1)) e.preventDefault();
        }}
        value={phoneNumber}
        onChange={handleFormatNumber}
      />
      <Modal scrollBehavior='inside' {...{ isOpen, onClose }}>
        <ModalContent>
          <ModalHeader className='flex flex-col gap-1'>{'modal.title'}</ModalHeader>
          <ModalBody>
            <Listbox
              selectionMode='single'
              disallowEmptySelection
              selectedKeys={[country]}
              aria-label='Countries'
              onSelectionChange={handleSelectionCountryChange}>
              {orderedCountries.map(([code, name]) => (
                <ListboxItem key={code}>{name}</ListboxItem>
              ))}
            </Listbox>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PhoneInput;
