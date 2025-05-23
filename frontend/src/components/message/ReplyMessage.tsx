import { Stack, Typography, } from "@mui/material";
import MessageBody, { type MessageBodyProps } from "./MessageBody";

interface ReplyMessageProps extends Omit<MessageBodyProps, 'children'> { message: string; reply?: string; }

const ReplyMessage = ({incoming, message, reply, showMenu}: ReplyMessageProps) => {
    return (
        <MessageBody incoming={incoming} showMenu={showMenu}>
            <Stack spacing={2}>
                <Stack p={2} direction='column' spacing={3} alignItems='center'
                    sx={{ backgroundColor: (theme) => theme.palette.background.neutral, borderRadius: 1 }}
                >
                    <Typography variant='body2' sx={{
                        color: (theme) => theme.palette.text.primary
                    }}>
                        {message}
                    </Typography>
                </Stack>
                <Typography variant='body2' sx={{
                    color: (theme) => incoming ? theme.palette.text.primary : '#fff'
                }}>
                    {reply}
                </Typography>
            </Stack>
        </MessageBody>
    )

}

export default ReplyMessage;