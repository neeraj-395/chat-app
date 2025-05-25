import { Stack, Typography } from "@mui/material";

export interface MediaMessageProps { incoming: boolean; text: string; image?: string; }

const MediaMessage = ({ incoming, text, image }: MediaMessageProps) => {
    return (
        <Stack spacing={1}>
            <img src={image} alt={text} style={{ maxHeight: 256, borderRadius: '10px' }} />
            <Typography variant='body2'  sx={{ textWrap: "pretty",
                color: (theme) => incoming ? theme.palette.text.primary : '#fff'
            }}>{text}</Typography>
        </Stack>
    )
}

export default MediaMessage;