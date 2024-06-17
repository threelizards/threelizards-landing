import React, { useMemo, useState } from 'react';
import { Input, InputProps } from '@nextui-org/input';
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/modal';
import { useI18NContext } from '@/i18n/context';
import { Listbox, ListboxItem } from '@nextui-org/listbox';
import { CountryCode, getCountryCallingCode, isSupportedCountry, AsYouType } from 'libphonenumber-js';
import { Selection } from '@nextui-org/react';
import { useTranslationClient } from '@/i18n/client';
import { SearchIcon } from '@/assets/icons/components/search-icon';
import { fallbackCountry } from '@/lib/config';

export interface PhoneInputProps extends InputProps {
  initialCountry: CountryCode;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ initialCountry, onChange, ...props }) => {
  const { t } = useTranslationClient('phone-input');
  const [country, setCountry] = useState(isSupportedCountry(initialCountry) ? initialCountry : fallbackCountry);
  const [search, setSearch] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getLocales } = useI18NContext();
  const { countries } = getLocales();

  const supportedCountries = useMemo(
    () => Object.entries(countries).filter(([code]) => isSupportedCountry(code)),
    [countries]
  );

  const handleSelectionCountryChange = (keys: Selection) => {
    setCountry((keys as unknown as { anchorKey: CountryCode }).anchorKey);
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

  const filteredCountries = useMemo(
    () =>
      orderedCountries.filter(
        ([code, name]) =>
          code.toLowerCase().includes(search.toLowerCase()) || name.toLowerCase().includes(search.toLowerCase())
      ),
    [orderedCountries, search]
  );

  return (
    <>
      <Input
        {...props}
        maxLength={20}
        type='tel'
        startContent={
          <div className='flex gap-2 items-center text-default-800 text-small'>
            <div className='cursor-pointer' onClick={onOpen}>
              {country.toString()}
            </div>
            <span>+{callingCode}</span>
          </div>
        }
        onKeyDown={(e) => {
          if ((e.key !== 'Backspace' && !(Number(e.key) + 1)) || e.key === ' ') {
            e.preventDefault();
          }
        }}
        value={phoneNumber}
        onChange={handleFormatNumber}
      />
      <Modal {...{ isOpen, onClose }}>
        <ModalContent>
          <ModalHeader className='flex flex-col gap-1'>{t('modal.title')}</ModalHeader>
          <ModalBody>
            <Input
              size='sm'
              startContent={
                <div className='flex justify-center items-center w-5 h-5'>
                  <SearchIcon width={14} height={14} />
                </div>
              }
              placeholder={t('modal.search_placeholder')}
              label={t('modal.search')}
              value={search}
              onValueChange={setSearch}
            />
            <Listbox
              className='overflow-auto h-60'
              selectionMode='single'
              disallowEmptySelection
              selectedKeys={[country]}
              aria-label='Countries'
              emptyContent={t('modal.empty')}
              onSelectionChange={handleSelectionCountryChange}>
              {filteredCountries.map(([code, name]) => (
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
