import { Input, InputProps } from '@nextui-org/input';
import { Controller, useFormContext } from 'react-hook-form';

// ----------------------------------------------------------------------

interface FormInputProps extends InputProps {
  name: string;
}

export default function FormInput({ name, ...props }: FormInputProps) {
  const formContext = useFormContext();
  const { control } = formContext;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Input {...field} isInvalid={!!error} errorMessage={error?.message} {...props} />
      )}
    />
  );
}
