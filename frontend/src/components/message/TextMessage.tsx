import { Typography } from "@mui/material";
import MessageBody, { type MessageBodyProps } from "./MessageBody";

interface TextMessageProps extends Omit<MessageBodyProps, 'children'> { message: string; }

const TextMessage = ({ theme, incoming, message, showMenu }: TextMessageProps) => {
    return (
        <MessageBody theme={theme} incoming={incoming} showMenu={showMenu}>
            <Typography variant='body2' color={incoming ? theme.palette.text.primary : '#fff'}>
                {message}
            </Typography>
        </MessageBody>
    )
}

export default TextMessage;