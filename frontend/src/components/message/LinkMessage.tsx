import { Stack, Typography } from '@mui/material';
import MessageBody, { type MessageBodyProps } from './MessageBody';
import { Link } from 'react-router-dom';

interface LinkMessageProps extends Omit<MessageBodyProps, 'children'> { message: string; url?: string; preview?: string; }

const LinkMessage = ({ incoming, message, preview, url, showMenu }: LinkMessageProps) => {
    return (
        <MessageBody incoming={incoming} showMenu={showMenu}>
                <Stack p={2} spacing={2} alignItems='center'
                    sx={{ backgroundColor: (theme) => theme.palette.background.paper, borderRadius: 1 }}>
                    <img src={preview} alt={message} style={{ maxHeight: 210, borderRadius: '10px', objectFit: 'cover' }} />
                    <Stack spacing={1} alignItems={'center'} textAlign={'center'}>
                        <Typography variant='subtitle2' sx={{ color: (theme) => theme.palette.primary.main }}
                            component={Link} to={url || ''}>{url}</Typography>
                        <Typography variant='body2' sx={{color: (theme) => theme.palette.text.primary }}>
                            {message}
                        </Typography>
                    </Stack>
                </Stack>
        </MessageBody>
    )
}

export default LinkMessage;