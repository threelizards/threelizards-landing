import { Textarea, TextAreaProps } from '@nextui-org/input';
import { Controller, useFormContext } from 'react-hook-form';

// ----------------------------------------------------------------------

interface FormInputProps extends TextAreaProps {
  name: string;
}

export default function FormTextArea({ name, ...props }: FormInputProps) {
  const formContext = useFormContext();
  const { control } = formContext;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Textarea {...field} isInvalid={!!error} errorMessage={error?.message} {...props} />
      )}
    />
  );
}
