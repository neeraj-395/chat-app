import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export interface LinkMessageProps { text: string; url?: string; preview?: string; }

const LinkMessage = ({ text, preview, url }: LinkMessageProps) => {
    return (
        <Stack p={2} spacing={2} alignItems='center' sx={{ 
            backgroundColor: (theme) => theme.palette.background.paper, borderRadius: 1 
        }}>
            <img src={preview} alt={text} style={{ maxHeight: 210, borderRadius: '10px', objectFit: 'cover' }} />
            <Stack spacing={1} alignItems={'center'} textAlign={'center'}>
                <Typography variant='subtitle2' sx={{ color: (theme) => theme.palette.primary.main }}
                    component={Link} to={url || ''}>{url}</Typography>
                <Typography variant='body2' sx={{ color: (theme) => theme.palette.text.primary }}>
                    {text}
                </Typography>
            </Stack>
        </Stack>
    )
}

export default LinkMessage;