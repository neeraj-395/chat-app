import Header from './Header';
import Footer from './Footer';
import { Box, Stack } from '@mui/material';
import { useAppSelector } from '../../app/hook';
import ChatHistory from '../../assets/chat-history';
import Message from '../message';

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
                <Box p={3} className="scrollbar" sx={{ 
                    width: '100%', height: '100%', flexGrow: 1, overflowY: 'scroll' 
                }}>
                    <Stack spacing={3}>
                        {ChatHistory(3, 2, 1, 2, 3).map((message, i) => (
                            <Message key={i} message={message} position='auto' showMenu={true} sx={{
                                maxWidth: '40%'
                            }} />
                        ))}
                    </Stack>
                </Box>

                {/* Chat footer */}
                <Footer />

            </Stack>
        </Box>
    )
}

export default Conversation