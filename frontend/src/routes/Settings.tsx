import { Avatar, Box, Divider, IconButton, Stack, Typography } from '@mui/material'
import { Bell, CaretLeft, Image, Info, Key, Keyboard, Lock, Note, PencilCircle } from 'phosphor-react';
import { faker } from '@faker-js/faker';
import { useTheme } from "@mui/material/styles";
import SettingsOption from '../components/settings/SettingsOption';

const Settings = () => {
	const theme = useTheme();
	const bgColor = theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.paper;

	return (
		<Box className='scrollbar' sx={{
			overflowY: 'scroll', height: '100vh', width: 320,
			backgroundColor: bgColor, boxShadow: '0px 0px 2px rgba(0)'
		}}>
			<Stack p={4} spacing={5}>
				{/* Header */}
				<Stack direction={'row'} alignItems='center' spacing={3}>
					<IconButton>
						<CaretLeft size={24} color='#4B4B4B' />
					</IconButton>
					<Typography variant='h6'>Settings</Typography>
				</Stack>
				{/* Profile */}
				<Stack direction='row' spacing={3}>
					<Avatar sx={{ height: 56, width: 56 }} src={faker.image.avatar()} alt={faker.person.fullName()} />
					<Stack spacing={0.5}>
						<Typography variant='body1'>
							{faker.person.fullName()}
						</Typography>
						<Typography variant='body2'>
							{faker.word.words()}
						</Typography>
					</Stack>
				</Stack>
				{/* List of options */}
				<Stack spacing={4}>
					<SettingsOption title={'Notification'} icon={<Bell size={20} />} onClick={() => { }} />
					<Divider />
					<SettingsOption title={'Privacy'} icon={<Lock size={20} />} onClick={() => { }} />
					<Divider />
					<SettingsOption title={'Security'} icon={<Key size={20} />} onClick={() => { }} />
					<Divider />
					<SettingsOption title={'Theme'} icon={<PencilCircle size={20} />} onClick={() => { }} />
					<Divider />
					<SettingsOption title={'Chat Wallpaper'} icon={<Image size={20} />} onClick={() => { }} />
					<Divider />
					<SettingsOption title={'Request Account Info'} icon={<Note size={20} />} onClick={() => { }} />
					<Divider />
					<SettingsOption title={'Keyboard Shotcuts'} icon={<Keyboard size={20} />} onClick={() => { }} />
					<Divider />
					<SettingsOption title={'Help'} icon={<Info size={20} />} onClick={() => { }} />
				</Stack>
			</Stack>
		</Box>
	)
}

export default Settings;
