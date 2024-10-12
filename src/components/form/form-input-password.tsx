import { useTranslationClient } from '@/i18n/client';
import { Controller, useFormContext } from 'react-hook-form';
import InputPassword, { InputPasswordProps } from '../inputs/input-password';

// ----------------------------------------------------------------------

interface FormInputPasswordProps extends InputPasswordProps {
  name: string;
  translateFile?: string;
}

export default function FormInputPassword({
  name,
  label,
  isRequired,
  translateFile,
  ...props
}: FormInputPasswordProps) {
  const formContext = useFormContext();
  const { control } = formContext;
  const { t } = useTranslationClient(translateFile);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <InputPassword
          label={
            <>
              <span>{typeof label === 'string' ? t(label) : label}</span>
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
