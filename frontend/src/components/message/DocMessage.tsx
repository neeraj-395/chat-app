import { Stack, Typography, IconButton } from '@mui/material';
import { Image, DownloadSimple } from 'phosphor-react';

export interface DocMessageProps { incoming: boolean; text: string; caption?: string; }

const DocMessage = ({ incoming, text, caption }: DocMessageProps) => {
    return (
        <Stack spacing={1}>
            <Stack p={2} spacing={2} direction='row' alignItems='center' sx={{
                borderRadius: 1, justifyContent: 'center',
                backgroundColor: (theme) => theme.palette.background.neutral
            }}>
                <Image size={48} />
                <Typography variant='caption'>
                    {caption && caption.length > 15 ? `${caption.slice(0, 15)}...` : caption}
                </Typography>
                <IconButton><DownloadSimple /></IconButton>
            </Stack>
            <Typography variant='body2' sx={{
                textWrap: 'pretty',
                color: (theme) => incoming ? theme.palette.text.primary : '#fff',
            }}>{text}</Typography>
        </Stack>
    )
}

export default DocMessage;