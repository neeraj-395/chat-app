import { Box, IconButton, Stack } from '@mui/material';
import { useState } from 'react';
import { useTheme } from "@mui/material/styles";
import { PaperPlaneTilt } from 'phosphor-react';
import ChatInput from '../chat/ChatInput';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

const Footer = () => {
    const theme = useTheme();
    const [message, setMessage] = useState('');
    const [openPicker, setOpenPicker] = useState(false);
    const bgColor = theme.palette.mode === 'light' ? '#F8FAFF': theme.palette.background.paper;
    
    return (
        <Box p={2} sx={{  width: '100%', backgroundColor: bgColor, 
            boxShadow: '0px 0px 2px rgba(0,0,0,0.25)'
        }}>
            <Stack direction='row' alignItems={'center'} spacing={3}>

                {/* Chat Input */}
                <Stack sx={{ width: '100%' }}>
                    <Box sx={{ display: openPicker ? 'inline' : 'none', zIndex: 10, position: 'fixed', bottom: 81, right: 100 }}>
                        <Picker theme={theme.palette.mode} data={data} onEmojiSelect={
                            (emoji: any) => setMessage(prev => prev + emoji.native)
                        }/>
                    </Box>
                    <ChatInput value={message} setOpenPicker={setOpenPicker} onChange={
                        (event) => setMessage(event.target.value)
                    }/>
                </Stack>

                <Box sx={{ height: 48, width: 48, borderRadius: 1.5,
                    backgroundColor: theme.palette.primary.main
                }}>
                    <Stack sx={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <IconButton>
                            <PaperPlaneTilt color='#fff' />
                        </IconButton>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

export default Footer;