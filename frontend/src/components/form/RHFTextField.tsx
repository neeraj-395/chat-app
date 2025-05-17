import { useFormContext, Controller } from 'react-hook-form';
import { TextField, type TextFieldProps } from '@mui/material';

export type RHFTextFieldProps = TextFieldProps & { name: string; };

export default function RHFTextField({ name, helperText, ...other }: RHFTextFieldProps) {
    const { control } = useFormContext();

    return (
        <Controller name={name} control={control}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    {...field}
                    fullWidth
                    value={field.value ?? ''}
                    error={!!error}
                    helperText={error?.message || helperText}
                    {...other}
                />
            )}
        />
    );
}
