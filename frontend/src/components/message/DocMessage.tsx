import { Stack, Typography, IconButton } from '@mui/material';
import MessageBody, { type MessageBodyProps } from './MessageBody';
import { Image, DownloadSimple } from 'phosphor-react';

interface DocMessageProps extends Omit<MessageBodyProps, 'children'> { message: string; caption?: string; }

const DocMessage = ({ incoming, message, caption, showMenu }: DocMessageProps) => {
    return (
        <MessageBody incoming={incoming} showMenu={showMenu}>
            <Stack spacing={2}>
                <Stack p={2} spacing={1} direction='row'
                    alignItems='center' justifyContent={'center'}
                    sx={{ backgroundColor: (theme) => theme.palette.background.paper, borderRadius: 1 }}
                >
                    <Image size={48} />
                    <Typography variant='caption'>
                        {caption && caption.length > 15 ? `${caption.slice(0, 15)}...` : caption}
                    </Typography>
                    <IconButton><DownloadSimple /></IconButton>
                </Stack>
                <Typography variant='body2' sx={{
                    color: (theme) => incoming ? theme.palette.text.primary : '#fff',
                }}
                >
                    {message}
                </Typography>
            </Stack>
        </MessageBody>
    )
}

export default DocMessage;