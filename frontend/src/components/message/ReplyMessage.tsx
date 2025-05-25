import { Stack, Typography, } from "@mui/material";

export interface ReplyMessageProps {incoming: boolean; text: string; reply?: string; }

const ReplyMessage = ({ incoming, text, reply }: ReplyMessageProps) => {
    return (
        <Stack spacing={1}>
            <Stack p={2} spacing={2} direction='column' alignItems='center' sx={{ 
                backgroundColor: (theme) => theme.palette.background.neutral, borderRadius: 1 
            }}>
                <Typography variant='body2' sx={{
                    color: (theme) => theme.palette.text.primary
                }}>{text}</Typography>
            </Stack>
            
            <Typography variant='body2' sx={{
                color: (theme) => incoming ? theme.palette.text.primary : '#fff'
            }}>{reply}</Typography>
        </Stack>
    )

}

export default ReplyMessage;