import { Stack, Typography, Divider, type Theme } from "@mui/material";

interface MsgTimeLineProps { theme: Theme; text: string; }

const MsgTimeLine = ({theme, text}: MsgTimeLineProps) => {
    return (
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Divider sx={{width: 46}} />
            <Typography variant='caption' sx={{ color: theme.palette.text.primary }}>
                {text}
            </Typography>
            <Divider sx={{width: 46}} />
        </Stack>
    )

}

export default MsgTimeLine;