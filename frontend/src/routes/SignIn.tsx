import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import AuthSocials from '../components/form/AuthSocials';
import RHFormProvider from '../components/form/RHFormProvider';
import RHFTextField from '../components/form/RHFTextField';
import PasswordField from '../components/form/PasswordField';
import SubmitButton from '../components/form/SubmitButton';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Stack, Typography, Alert } from '@mui/material'

const SignInSchema = z.object({
	username: z.string().min(1, 'Username is required.'),
	password: z.string().min(1, 'Password is required.'),
});

type SignInFormValues = z.infer<typeof SignInSchema>;

const SignIn = () => {

	const methods = useForm<SignInFormValues>({ resolver: zodResolver(SignInSchema) });

	const onSubmit = async (data: SignInFormValues) => {
		return { ...data }
	}

	return (
		<Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
			<Typography variant='h4'>
				Login to ChatApp
			</Typography>
			<Stack direction='row' spacing={0.5}>
				<Typography variant='body2'>New User?</Typography>
				<Link to='/auth/signup' component={RouterLink} variant='subtitle2'>Create an account</Link>
			</Stack>

			{/* SignIn Form */}
			<RHFormProvider methods={methods} onSubmit={onSubmit}>
				<Stack spacing={3}>
					{!!methods.formState.errors.root && <Alert severity='error'>{
						methods.formState.errors.root.message
					}</Alert>}

					<RHFTextField name='username' label='Username' />
					<PasswordField name='password' label='Password' />

					<SubmitButton>Login</SubmitButton>
				</Stack>
			</RHFormProvider>

			{/* Auth Socials */}
			<AuthSocials />
		</Stack>
	)
}

export default SignIn;
