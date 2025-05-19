import { Avatar, Box, Typography, IconButton, Divider, Stack, } from '@mui/material';
import { CaretDown, MagnifyingGlass } from 'phosphor-react';
import { useTheme } from "@mui/material/styles";
import { faker } from '@faker-js/faker';
import { useDispatch } from 'react-redux';
import ChatBadge from '../chat/ChatBadge';
import { toggleSidebar } from '../../features/SidebarSlice';

const Header = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const bgColor = theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.paper;
    return (
        <Box p={2} sx={{ width: '100%', backgroundColor: bgColor, boxShadow: '0px 0px 2px rgba(0,0,0,0.25)' }}>
            <Stack alignItems={'center'} direction='row' justifyContent={'space-between'}
                sx={{ width: '100%', height: '100%' }}>
                <Stack onClick={() => dispatch(toggleSidebar())} direction={'row'} spacing={2}>
                    <Box>
                        <ChatBadge theme={theme} overlap="circular" variant="dot"
                            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                        >
                            <Avatar alt={faker.person.fullName()} src={faker.image.avatar()} />
                        </ChatBadge>
                    </Box>

                    <Stack spacing={0.2}>
                        <Typography variant='subtitle2'>{faker.person.fullName()}</Typography>
                        <Typography variant='caption'>Online</Typography>
                    </Stack>

                </Stack>
                <Stack direction='row' alignItems='center' spacing={3}>
                    <IconButton>
                        <MagnifyingGlass />
                    </IconButton>
                    <Divider orientation='vertical' flexItem />
                    <IconButton>
                        <CaretDown />
                    </IconButton>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Header;