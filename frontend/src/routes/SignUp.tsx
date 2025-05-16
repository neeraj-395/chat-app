import { Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
 
const SignUpSchema = z.object({
    firstName: z.string().min(1, 'First Name is required.'),
    lastName: z.string().min(1, 'Last Name is required.'),
    username: z.string().min(1, 'Username is required.'),
    password: z.string().min(1, 'Password is required.'),
    email: z.string().min(1, 'Email is required.').email('Not a valid email address.'),
});

type SignUpFormValues = z.infer<typeof SignUpSchema>;

const SignUp = () => {

    const defaultValues: SignUpFormValues = {
        firstName: 'John', lastName: 'Doe',
        username: 'johndoe7', password: 'john@123',
        email: 'johndoe7@gmail.com'
    }

    const methods = useForm<SignUpFormValues>({
        resolver: zodResolver(SignUpSchema),
        defaultValues,
    });

    const { formState } = methods;

    const onSubmit = async (data: SignUpFormValues) => {
        return {...data}
    }


    return (
        <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
            <Typography variant='h4'>
                Get Started With WeChat
            </Typography>
            <Stack direction={'row'} spacing={0.5}>
                <Typography variant='body2'>Already have an account?</Typography>
                <Link component={RouterLink} to='/auth/login' variant='subtitle2'>Sign in</Link>
            </Stack>

            {/* SingUp Form */}
            

            <Typography component={'div'} sx={{ 
                color: 'text.secondary', mt: 3, 
                typography: 'caption', 
                textAlign: 'center' 
            }}>
                {'By signing up, I agree to '}
                <Link underline='always' color='text.primary'>Terms of service</Link>{' and '}
                <Link underline='always' color='text.primary'>Privacy policy</Link>
            </Typography>

            
            <AuthSocial />
        </Stack>
    )
}

export default SignUp;