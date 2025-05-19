import type { ReactNode } from "react";
import { Stack, Box, type Theme } from "@mui/material";
import MessageOptions from "./MessageOptions";

export interface MessageBodyProps { 
    children: ReactNode; 
    theme: Theme; 
    incoming: boolean; 
    showMenu: boolean; 
}

const MessageBody = ({children, theme, incoming, showMenu}: MessageBodyProps) => {
    return (
        <Stack direction='row' justifyContent={incoming ? 'start' : 'end'}>
            <Box p={1.5} sx={{
                backgroundColor: incoming ? theme.palette.background.default :
                    theme.palette.primary.main, borderRadius: 1.5, width: 'max-content'
            }}>
                {children}
            </Box>
            {showMenu && <MessageOptions/>}
        </Stack>
    )
}

export default MessageBody;