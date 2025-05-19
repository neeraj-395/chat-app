import { Stack, Typography } from "@mui/material";
import MessageBody, { type MessageBodyProps } from "./MessageBody";

interface MediaMessageProps extends Omit<MessageBodyProps, 'children'> { message: string; image: string; }

const MediaMessage = ({ theme, showMenu, incoming, message, image}: MediaMessageProps) => {
    return (
        <MessageBody theme={theme} incoming={incoming} showMenu={showMenu}>
            <Stack spacing={1}>
                <img src={image} alt={message} style={{ maxHeight: 210, borderRadius: '10px' }} />
                <Typography variant='body2' color={incoming ? theme.palette.text.primary : '#fff'}>
                    {message}
                </Typography>
            </Stack>
        </MessageBody>
    )
}

export default MediaMessage;