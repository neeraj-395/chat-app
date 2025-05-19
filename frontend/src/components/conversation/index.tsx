import { Box, Stack, useTheme } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import ChatHistory from '../../assets/chat-history';
import TextMessage from '../message/TextMessage';
import MediaMessage from '../message/MediaMessage';
import LinkMessage from '../message/LinkMessage';
import DocMessage from '../message/DocMessage';
import ReplyMessage from '../message/ReplyMessage';

const Conversation = () => {
    const theme = useTheme();
    return (
        <Stack height={'100%'} maxHeight={'100vh'} width={'auto'}>

            {/* Chat header */}
            <Header />

            {/* Messages */}
            <Box sx={{ width: 100, height: 100, flexGrow: 1, overflowY: 'scroll' }}>
                <Box p={3}>
                    <Stack spacing={3}>
                        {ChatHistory(1, 2, 3, 2, 1).map((chat) => {
                            switch(chat.subtype) {
                                case 'text' : return (<TextMessage theme={theme} {...chat} showMenu={true}/>)
                                case 'doc'  : return (<DocMessage theme={theme} {...chat} showMenu={true}/>)
                                case 'img'  : return (<MediaMessage theme={theme} {...chat} showMenu={true}/>)
                                case 'link' : return (<LinkMessage theme={theme} {...chat} showMenu={true}/>)
                                case 'reply': return (<ReplyMessage theme={theme} {...chat} showMenu={true}/>)
                                case 'default': return (<></>)
                            }
                        })}
                    </Stack>
                </Box>
            </Box>

            {/* Chat footer */}
            <Footer />
        </Stack>
    )
}

export default Conversation