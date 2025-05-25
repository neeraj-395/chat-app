import { Typography } from "@mui/material";

export interface TextMessageProps { incoming: boolean, text: string; }

const TextMessage = ({ incoming, text }: TextMessageProps) => {
    return (
        <Typography variant='body2' sx={{
            color: (theme) => incoming ? theme.palette.text.primary : '#fff'
        }}>{text}</Typography>
    )
}

export default TextMessage;