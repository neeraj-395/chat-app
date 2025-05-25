import Header from './Header';
import Message from '../message';
import { CaretLeft } from 'phosphor-react';
import { useAppDispatch } from '../../app/hook';
import ChatHistory from '../../assets/chat-history';
import { updateSidebarType } from '../../features/SidebarSlice';
import { Stack } from '@mui/material';

const StarredMessages = () => {
	const dispatch = useAppDispatch();

	return (
		<Stack sx={{ height: '100%' }}>
			<Header title={'Starred Messages'} icon={<CaretLeft />} onEsc={
				() => dispatch(updateSidebarType('contact'))
			} />

			<Stack className='scrollbar' p={3} spacing={3} sx={{
				height: '100%', position: 'relative',
				flexGrow: 1, overflowY: 'scroll',
				backgroundColor: (theme) => theme.palette.background.neutral
			}}>
				{ChatHistory(1, 1, 1, 1, 1).map((msg, i) => (
					<Message key={i} message={msg} position='center' showMenu={false} sx={{
						maxWidth: 'max-content'
					}} />
				))}
			</Stack>
		</Stack>
	)
}

export default StarredMessages;