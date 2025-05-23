import { Typography } from "@mui/material";
import MessageBody, { type MessageBodyProps } from "./MessageBody";

interface TextMessageProps extends Omit<MessageBodyProps, 'children'> { message: string; }

const TextMessage = ({ incoming, message, showMenu }: TextMessageProps) => {
    return (
        <MessageBody incoming={incoming} showMenu={showMenu}>
            <Typography variant='body2' sx={{
                color: (theme) => incoming ? theme.palette.text.primary : '#fff'
            }}>
                {message}
            </Typography>
        </MessageBody>
    )
}

export default TextMessage;