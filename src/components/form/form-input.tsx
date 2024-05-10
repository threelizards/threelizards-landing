import { useTranslationClient } from '@/i18n/client';
import { Input, InputProps } from '@nextui-org/input';
import { Controller, useFormContext } from 'react-hook-form';

// ----------------------------------------------------------------------

interface FormInputProps extends InputProps {
  name: string;
  translateFile?: string;
}

export default function FormInput({ name, label, isRequired, translateFile, ...props }: FormInputProps) {
  const formContext = useFormContext();
  const { control } = formContext;
  const { t } = useTranslationClient(translateFile);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Input
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
