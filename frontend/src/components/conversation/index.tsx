import { Box, Stack, useTheme } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import ChatHistory from '../../assets/chat-history';
import ReplyMessage from '../message/ReplyMessage';
import MediaMessage from '../message/MediaMessage';
import TextMessage from '../message/TextMessage';
import LinkMessage from '../message/LinkMessage';
import DocMessage from '../message/DocMessage';
import { useAppSelector } from '../../app/hook';

const Conversation = () => {
    const theme = useTheme();
    const sidebar = useAppSelector(state => state.sidebar);
    return (
        <Box sx={{
            height: '100%', width: sidebar.open ? 'calc(100vw - 740px)' : 'calc(100vw - 420px)',
            backgroundColor: theme.palette.mode === 'light' ? '#F0F4FA' : theme.palette.background.default
        }}>
            <Stack height={'100%'} maxHeight={'100vh'} width={'auto'}>

                {/* Chat header */}
                <Header />

                {/* Messages */}
                <Box className="scrollbar" sx={{ width: '100%', height: '100%', flexGrow: 1, overflowY: 'scroll' }}>
                    <Box p={3}>
                        <Stack spacing={3}>
                            {ChatHistory(1, 2, 3, 2, 1).map((chat) => {
                                switch (chat.subtype) {
                                    case 'text': return (<TextMessage theme={theme} {...chat} showMenu={true} />)
                                    case 'doc': return (<DocMessage theme={theme} {...chat} showMenu={true} />)
                                    case 'img': return (<MediaMessage theme={theme} {...chat} showMenu={true} />)
                                    case 'link': return (<LinkMessage theme={theme} {...chat} showMenu={true} />)
                                    case 'reply': return (<ReplyMessage theme={theme} {...chat} showMenu={true} />)
                                    case 'default': return (<>Loading...</>)
                                }
                            })}
                        </Stack>
                    </Box>
                </Box>

                {/* Chat footer */}
                <Footer />
            </Stack>
        </Box>
    )
}

export default Conversation