import { Box, Stack, type SxProps, type Theme } from '@mui/material';
import MessageOptions from './MessageOptions';
import DocMessage, { type DocMessageProps } from './DocMessage';
import TextMessage, { type TextMessageProps } from './TextMessage';
import LinkMessage, { type LinkMessageProps } from './LinkMessage';
import ReplyMessage, { type ReplyMessageProps } from './ReplyMessage';
import MediaMessage, { type MediaMessageProps } from './MediaMessage';

export type MessageOptions = { type: string, subtype: string, incoming: boolean } & (
    DocMessageProps | TextMessageProps | LinkMessageProps |
    ReplyMessageProps | MediaMessageProps
);

export interface MessagesProps {
    message: MessageOptions;
    position: "center" | "auto";
    sx?: SxProps<Theme>; 
    showMenu: boolean;
}

const Message = ({ position, sx, message, showMenu }: MessagesProps) => {
    const justify = (incoming: boolean) => position == 'auto' ? incoming ? 'start' : 'end' : position;
    const bgColor = (theme: Theme) => message.incoming ? theme.palette.background.paper: theme.palette.primary.main;
    return (
        <Stack direction='row' justifyContent={justify(message.incoming)}>
            <Box p={1.5} bgcolor={bgColor} borderRadius={1.5} sx={sx}>
                {(() => {
                    switch (message.subtype) {
                        case 'text': return <TextMessage {...message} />
                        case 'img': return <MediaMessage {...message} />
                        case 'doc': return <DocMessage {...message} />
                        case 'link': return <LinkMessage {...message} />
                        case 'reply': return <ReplyMessage {...message} />
                        default: return <>No messages found...</>
                    }
                })()}
            </Box>

            {showMenu && <MessageOptions />}
        </Stack>
    )
}

export default Message;