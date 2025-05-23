import Header from './Header';
import Messages from '../message';
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
				flexGrow: 1, overflowY: 'scroll'
			}}>
				<Messages data={ChatHistory(2, 1, 1, 1, 2)} showMenu={false} />
			</Stack>
		</Stack>
	)
}

export default StarredMessages;