import { Box, IconButton, Stack, Typography, Button, Divider } from '@mui/material'
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react';
import { useTheme } from '@mui/material/styles';
import { Search, SearchIconWrapper, SearchInputBase } from '../components/search';
import ChatItem from '../components/chat/ChatItem';
import ChatList from '../assets/data';

const Chats = () => {
  const theme = useTheme();
  const bgColor = theme.palette.mode === 'light' ? "#F8FAFF" : theme.palette.background.paper;

  return (
    <Box className="scrollbar" sx={{
      position: "relative", width: 320, backgroundColor: bgColor, 
      boxShadow: '0px 0px 2px rgba(0,0,0,0.25)'
    }}>
      <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
        <Stack direction="row" alignItems='center' justifyContent='space-between'>
          <Typography variant='h5'>Chats</Typography>
          <IconButton><CircleDashed /></IconButton>
        </Stack>

        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <SearchInputBase placeholder='Search...' inputProps={{ "aria-label": "search" }} />
          </Search>
        </Stack>

        <Stack spacing={1}>
          <Stack direction='row' alignItems='center' spacing={1.5}>
            <ArchiveBox size={24} />
            <Button>Archive</Button>
          </Stack>
          <Divider />
        </Stack>

        <Stack className='scrollbar' spacing={2} direction='column'
          sx={{ flexGrow: 1, overflowY: 'scroll', height: '100%' }}
        >
          <Stack spacing={2.5}>
            <Typography variant='subtitle2' sx={{ color: "#676767" }}>Pinned</Typography>
            {ChatList.filter((el) => el.pinned).map((el, i) => {
              return <ChatItem key={i} {...el} />
            })}

            <Typography variant='subtitle2' sx={{ color: "#676767" }}>All Chats</Typography>
            {ChatList.filter((el) => !el.pinned).map((el, i) => {
              return <ChatItem key={i} {...el} />
            })}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Chats;