import { useTranslationClient } from '@/i18n/client';
import { Textarea, TextAreaProps } from '@nextui-org/input';
import { Controller, useFormContext } from 'react-hook-form';

// ----------------------------------------------------------------------

interface FormInputProps extends TextAreaProps {
  name: string;
  translateFile?: string;
}

export default function FormTextArea({ name, label, isRequired, translateFile, ...props }: FormInputProps) {
  const formContext = useFormContext();
  const { control } = formContext;
  const { t } = useTranslationClient(translateFile);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Textarea
          {...field}
          label={
            <>
              <span>{label}</span>
              {isRequired && <span className='text-red-500'>*</span>}
            </>
          }
          isInvalid={!!error}
          errorMessage={t(error?.message ?? '')}
          {...props}
        />
      )}
    />
  );
}
