import { Avatar, Divider, Stack, Typography } from '@mui/material'
import { Bell, Image, Info, Key, Keyboard, Lock, Note, PencilCircle } from 'phosphor-react';
import { faker } from '@faker-js/faker';
import SettingsOption from '../components/settings/SettingsOption';

const settingsItems = [
	{ title: "Notification", icon: <Bell size={20} /> },
	{ title: "Privacy", icon: <Lock size={20} /> },
	{ title: "Security", icon: <Key size={20} /> },
	{ title: "Theme", icon: <PencilCircle size={20} /> },
	{ title: "Chat Wallpaper", icon: <Image size={20} /> },
	{ title: "Request Account Info", icon: <Note size={20} /> },
	{ title: "Keyboard Shortcuts", icon: <Keyboard size={20} /> },
	{ title: "Help", icon: <Info size={20} /> },
];

const Settings = () => {
	return (
		<Stack p={4} spacing={5} sx={{ height: '100vh' }}>
			{/* Header */}
			<Stack direction={'row'} alignItems='center' spacing={3}>
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
			<Stack spacing={3}>
				{settingsItems.map((item, i) => (
					<Stack key={i} spacing={3}>
						<SettingsOption title={item.title} icon={item.icon} onClick={() => { }} />
						<Divider />
					</Stack>
				))}
			</Stack>
		</Stack>
	)
}

export default Settings;
