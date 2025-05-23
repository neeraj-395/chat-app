import { Box, Stack } from '@mui/material';
import DocMessage from './DocMessage';
import TextMessage from './TextMessage';
import LinkMessage from './LinkMessage';
import ReplyMessage from './ReplyMessage';
import MediaMessage from './MediaMessage';

export interface MessageOptions {
    type: "msg" | string;
    subtype: "text" | "img" | "doc" | "link" | "reply" | string;
    message: string;
    incoming: boolean;
    url?: string;
    image?: string;
    reply?: string;
    caption?: string;
    preview?: string;
}

export interface MessagesProps { data: MessageOptions[]; showMenu: boolean; }

const Messages = ({data, showMenu}: MessagesProps) => {
    return (
        <Box p={3}>
            <Stack spacing={3} justifyContent={'center'}>
                {data.map((props, i) => {
                    switch (props.subtype) {
                        case 'text':  return <TextMessage key={i} {...props} showMenu={showMenu} />
                        case 'img':   return <MediaMessage key={i} {...props} showMenu={showMenu} />
                        case 'doc':   return <DocMessage key={i} {...props} showMenu={showMenu} />
                        case 'link':  return <LinkMessage key={i} {...props} showMenu={showMenu} />
                        case 'reply': return <ReplyMessage key={i} {...props} showMenu={showMenu} />
                        default:      return <>No messages found...</>
                    }
                })}
            </Stack>
        </Box>
    )
}

export default Messages;