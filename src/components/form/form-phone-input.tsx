import { useTranslationClient } from '@/i18n/client';
import { Input, InputProps } from '@nextui-org/input';
import { Controller, useFormContext } from 'react-hook-form';
import PhoneInput from '../inputs/phone-input';

// ----------------------------------------------------------------------

interface FormPhoneInputProps extends InputProps {
  name: string;
  translateFile?: string;
}

export default function FormPhoneInput({ name, label, isRequired, translateFile, ...props }: FormPhoneInputProps) {
  const formContext = useFormContext();
  const { control } = formContext;
  const { t } = useTranslationClient(translateFile);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <PhoneInput
          label={
            <>
              <span>{label}</span>
              {isRequired && <span className='text-red-500'>*</span>}
            </>
          }
          {...field}
          isInvalid={!!error}
          errorMessage={t(error?.message ?? '')}
          {...props}
        />
      )}
    />
  );
}
