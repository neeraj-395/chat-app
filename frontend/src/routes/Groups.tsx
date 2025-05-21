import { Box, Stack, Typography, Link, IconButton, Divider } from '@mui/material'
import { Search, SearchIconWrapper, SearchInputBase } from '../components/search'
import { MagnifyingGlass, Plus } from 'phosphor-react';
import { useTheme } from "@mui/material/styles";
import ChatList from '../assets/data';
import ChatItem from '../components/chat/ChatItem';

const Group = () => {
	const theme = useTheme();
	const bgColor = theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.paper;

	return (
		<Box className="scrollbar" sx={{
			height: '100vh', backgroundColor: bgColor, width: 320,
			boxShadow: '0px 0px 2px rgba(0,0,0,0.25)'
		}}>
			<Stack p={3} spacing={2} sx={{ maxHeight: '100vh' }}>
				<Stack>
					<Typography variant='h5'>Group</Typography>
				</Stack>
				<Stack sx={{ width: '100%' }}>
					<Search>
						<SearchIconWrapper>
							<MagnifyingGlass color="#709CE6" />
						</SearchIconWrapper>
						<SearchInputBase placeholder='Search...' inputProps={{ "aria-label": "search" }} />
					</Search>
				</Stack>
				<Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
					<Typography variant='subtitle2' component={Link}>Create New Group</Typography>
					<IconButton onClick={() => { }}>
						<Plus style={{ color: theme.palette.primary.main }} />
					</IconButton>
				</Stack>
				<Divider />
				<Stack spacing={2} className='scrollbar' direction='column'
					sx={{ flexGrow: 1, overflowY: 'scroll', height: '100%' }}
				>
					<Stack spacing={2.5}>
						<Typography variant='subtitle2' sx={{ color: '#676667' }}>Pinned</Typography>
						{/* Pinned */}
						{ChatList.filter((el) => el.pinned).map((el, i) => {
							return <ChatItem key={i}  {...el} />
						})}

						<Typography variant='subtitle2' sx={{ color: '#676667' }}>All Groups</Typography>
						{/* Group List */}
						{ChatList.filter((el) => !el.pinned).map((el, i) => {
							return <ChatItem key={i} {...el} />
						})}
					</Stack>
				</Stack>
			</Stack>
		</Box>
	)
}

export default Group