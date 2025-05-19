import { Stack, Typography } from '@mui/material';
import MessageBody, {type MessageBodyProps} from './MessageBody';
import { Link } from 'react-router-dom';

interface LinkMessageProps extends Omit<MessageBodyProps, 'children'> {
    preview: string;
    message: string;
    to: string;
}

const LinkMessage = ({theme, incoming, message, preview, to, showMenu}:LinkMessageProps) => {
    return (
        <MessageBody theme={theme} incoming={incoming} showMenu={showMenu}>
            <Stack spacing={2}>
                <Stack p={2} spacing={3} alignItems='start'
                    sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }}>
                    <img src={preview} alt={message} style={{ maxHeight: 210, borderRadius: '10px' }} />
                    <Stack spacing={2}>
                        <Typography variant='subtitle2'>Creating Chat App</Typography>
                        <Typography variant='subtitle2' sx={{ color: theme.palette.primary.main }}
                            component={Link} to={to}>www.youtube.com</Typography>
                    </Stack>
                    <Typography variant='body2' color={incoming ? theme.palette.text.secondary : '#fff'}>
                        {message}
                    </Typography>
                </Stack>
            </Stack>
        </MessageBody>
    )
}

export default LinkMessage;