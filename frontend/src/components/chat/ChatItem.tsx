import { Avatar, Badge as  MUIBadge, Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ChatBadge from './ChatBadge';

interface ChatItemProps {
    name: string; time: string; image: string;
    message: string; online: boolean; unread: number;
}

const ChatItem = ({ name, image, message, time, online, unread }: ChatItemProps) => {
    const theme = useTheme();
    const bgColor = theme.palette.mode === 'light' ? "#fff" : theme.palette.background.default;
    return (
        <Box p={2} sx={{ width: "100%", borderRadius: 1, backgroundColor: bgColor }}>
            <Stack direction="row" alignItems='center' justifyContent='space-between'>
                <Stack direction='row' spacing={2}>

                    {online ? <ChatBadge theme={theme} overlap='circular' variant="dot" anchorOrigin={{
                        vertical: 'bottom', horizontal: 'right'
                    }}> <Avatar src={image} /> </ChatBadge> : <Avatar src={image} />}

                    <Stack spacing={0.3}>
                        <Typography variant='subtitle2'>{name}</Typography>
                        <Typography variant='caption'>{message}</Typography>
                    </Stack>

                </Stack>
                <Stack spacing={2} alignItems='center'>
                    <Typography sx={{ fontWeight: 600 }} variant='caption'>{time}</Typography>
                    <MUIBadge color='primary' badgeContent={unread}></MUIBadge>
                </Stack>
            </Stack>
        </Box>
    )
};

export default ChatItem