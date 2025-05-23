import { z,} from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Lock, PencilSimple } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod';
import RHFTextField from '../components/form/RHFTextField';
import RHFormProvider from '../components/form/RHFormProvider'
import { Avatar, IconButton, Stack, Typography, Alert, Button, InputAdornment } from '@mui/material'

const profileSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  about: z.string().min(1, 'About is required'),
  avatarUrl: z.string().url('Invalid URL').nullable().or(z.literal('')).optional()
});

type ProfileFormValues = z.infer<typeof profileSchema>;

const Profile = () => {

  const [isEditable, setIsEditable] = useState(false);

  const methods = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema)
  });

  const onSubmit = () => {

  }

  return (
    <Stack p={4} spacing={5}>
      <Stack direction={'row'} alignItems='center' spacing={3}>
        <Typography variant='h5'>Profile</Typography>
      </Stack>

      <RHFormProvider methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack spacing={4} alignItems="center" sx={{ maxWidth: 500, margin: 'auto' }}>
          {/* Avatar */}
          <Stack alignItems="center" spacing={1}>
            <Avatar
              alt="User Avatar"
              src={methods.watch('avatarUrl') || ''}
              sx={{ width: 96, height: 96 }}
            />
            <Typography variant="subtitle2" color="text.secondary">
              Profile Photo
            </Typography>
          </Stack>

          <Stack spacing={3} sx={{ width: '100%' }}>
            {!!methods.formState.errors.root &&  <Alert severity="error">{
               methods.formState.errors.root.message
            }</Alert>}

            <RHFTextField
              name="name"
              label="Name"
              helperText="This name is visible to your contacts"
              slotProps={{
                input: {
                readOnly: !isEditable,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setIsEditable(!isEditable)} edge="end">
                      {isEditable ? <Lock /> : <PencilSimple />}
                    </IconButton>
                  </InputAdornment>
                )
              }}}
            />

            <RHFTextField
              name="about"
              label="About"
              multiline
              rows={3}
              slotProps={{ input: { readOnly: !isEditable} }}
            />
          </Stack>

          <Stack direction="row" justifyContent="end" sx={{ width: '100%' }}>
            <Button
              color="primary"
              size="large"
              type="submit"
              variant="outlined"
              disabled={!isEditable}
            >
              Save
            </Button>
          </Stack>
        </Stack>
      </ RHFormProvider>
    </Stack>
  )
}

export default Profile