import type { ReactElement } from "react";
import { Stack, Box } from "@mui/material";
import MessageOptions from "./MessageOptions";

export interface MessageBodyProps { 
    children: ReactElement;
    incoming: boolean; 
    showMenu: boolean; 
}

const MessageBody = ({children, incoming, showMenu}: MessageBodyProps) => {
    return (
        <Stack direction='row' justifyContent={incoming ? 'start' : 'end'}>
            <Box p={1.5} justifyContent={'center'} sx={{
                backgroundColor: (theme) => incoming ? theme.palette.background.paper :
                theme.palette.primary.main, borderRadius: 1.5, maxWidth: '40%'
            }}>
                {children}
            </Box>
            {showMenu && <MessageOptions/>}
        </Stack>
    )
}

export default MessageBody;