import Header from './Header';
import Footer from './Footer';
import Messages from '../message';
import { Box, Stack } from '@mui/material';
import { useAppSelector } from '../../app/hook';
import ChatHistory from '../../assets/chat-history';

const Conversation = () => {
    const sidebar = useAppSelector(state => state.sidebar);
    return (
        <Box sx={{
            height: '100%', width: sidebar.open ? 'calc(100vw - 740px)' : 'calc(100vw - 420px)',
            backgroundColor: (theme) => theme.palette.mode === 'light' ? '#F0F4FA' : theme.palette.background.default
        }}>
            <Stack height={'100%'} maxHeight={'100vh'} width={'auto'}>

                {/* Chat header */}
                <Header />

                {/* Messages */}
                <Box className="scrollbar" sx={{ width: '100%', height: '100%', flexGrow: 1, overflowY: 'scroll' }}>
                    <Messages data={ChatHistory(1,2,3,2,1)} showMenu={true}/>
                </Box>

                {/* Chat footer */}
                <Footer />
            </Stack>
        </Box>
    )
}

export default Conversation