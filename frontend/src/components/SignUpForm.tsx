import { FormProvider, type UseFormReturn } from "react-hook-form";
import { Stack, Alert, InputAdornment, IconButton, Button} from "@mui/material";
import { Eye, EyeSlash } from 'phosphor-react';
import RHFTextField from './RHFTextField';
import { useState } from "react";

const SignUpForm = (methods: UseFormReturn, onSubmit: any) => {

    const [showPassword, setShowPassword] = useState(false);

    const {formState: { errors }} = methods;
    
    return (
        <>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <Stack spacing={3}>
                        {errors.root && <Alert severity='error'>{errors.root.message}</Alert>}
        
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                            <RHFTextField name='firstname' label='First Name' />
                            <RHFTextField name='lastname' label='Last Name' />
                        </Stack>

                        <RHFTextField name='email' label='Email address'/>

                        <RHFTextField name='password' label='Password'
                            type={showPassword ? 'text' : 'password'}
                            slotProps={{
                                input: {
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                                                {showPassword ? <Eye /> : <EyeSlash />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />

                        <Button fullWidth color="inherit" size="large" type="submit" variant="contained"
                            sx={(theme) => {
                                const textColor = theme.palette.mode === 'light' ? 'common.white' : 'grey.800';
                                return {
                                bgcolor: 'text.primary',
                                color: textColor,
                                '&:hovor': {
                                    bgcolor: 'text.primary',
                                    color: textColor,
                                }
                            }}}
                        >
                            Create Account
                        </Button>
                    </Stack>
                </form>
            </FormProvider>
        </>
    )
}

export default SignUpForm;