import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, Stack, Typography, Alert } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import RHFTextField from '../components/form/RHFTextField';
import AuthSocials from '../components/form/AuthSocials';
import PasswordField from '../components/form/PasswordField';
import SubmitButton from '../components/form/SubmitButton';
import RHFormProvider from '../components/form/RHFormProvider';


const SignUpSchema = z.object({
	firstname: z.string().min(1, 'First Name is required.'),
	lastname: z.string().min(1, 'Last Name is required.'),
	username: z.string().min(1, 'Username is required.'),
	password: z.string().min(1, 'Password is required.'),
	email: z.string().min(1, 'Email is required.').email('Not a valid email address.'),
});

type SignUpFormValues = z.infer<typeof SignUpSchema>;

const SignUp = () => {

	const methods = useForm<SignUpFormValues>({
		resolver: zodResolver(SignUpSchema),
	});

	const onSubmit = async (data: SignUpFormValues) => {
		return { ...data }
	}

	return (
		<Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
			<Typography variant='h4'>
				Get Started With ChatApp
			</Typography>
			<Stack direction={'row'} spacing={0.5}>
				<Typography variant='body2'>Already have an account?</Typography>
				<Link component={RouterLink} to='/auth/signin' variant='subtitle2'>Sign in</Link>
			</Stack>

			{/* SingUp Form */}
			<RHFormProvider methods={methods} onSubmit={onSubmit}>
				<Stack spacing={3}>
					{!!methods.formState.errors.root && <Alert severity='error'>{
						methods.formState.errors.root.message
					}</Alert>}

					<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
						<RHFTextField name='firstname' label='First Name' />
						<RHFTextField name='lastname' label='Last Name' />
					</Stack>

					<RHFTextField name='username' label='Username' />

					<RHFTextField name='email' label='Email address' />

					<PasswordField name='password' label='Password' />

					<SubmitButton>Create Account</SubmitButton>
				</Stack>
			</RHFormProvider>

			<Typography component={'div'} sx={{
				color: 'text.secondary', mt: 3,
				typography: 'caption',
				textAlign: 'center'
			}}>
				{'By signing up, I agree to '}
				<Link underline='always' color='text.primary'>Terms of service</Link>{' and '}
				<Link underline='always' color='text.primary'>Privacy policy</Link>
			</Typography>

			{/* Auth Socials */}
			<AuthSocials />
		</Stack>
	)
}

export default SignUp;