import { useState, type SetStateAction } from "react";
import styled from "@emotion/styled";
import { TextField, Stack, InputAdornment, IconButton } from "@mui/material";
import { Camera, Image, Sticker, File, LinkSimple, Smiley } from "phosphor-react";
import ChatTooltip from "./ChatTooltip";

interface ChatInputProps { setOpenPicker: (value: SetStateAction<boolean>) => void; }

const StyledInput = styled(TextField)(() => ({
    "& .MuiInputBase-input": { paddingTop: '12px', paddingBottom: '12px' }
}));

const ChatInput = ({ setOpenPicker }: ChatInputProps) => {
    const [openAction, setOpenAction] = useState(false);
    return (
        <StyledInput fullWidth placeholder='Write a message...' variant='filled' slotProps={{
            input: {
                disableUnderline: true,
                startAdornment:
                    <Stack sx={{ width: 'max-content' }}>
                        <Stack sx={{ position: 'relative', display: openAction ? 'inline-block' : 'none' }}>
                            <ChatTooltip title={'Photo/Video'} icon={<Image size={24} />} style={{ backgroundColor: "#4da5fe", top: -102 }} />
                            <ChatTooltip title={'Stickers'} icon={<Sticker size={24} />} style={{ backgroundColor: "#1b8cfe", top: -172 }} />
                            <ChatTooltip title={'Image'} icon={<Camera size={24} />} style={{ backgroundColor: "#0172e4", top: -242 }} />
                            <ChatTooltip title={'Document'} icon={<File size={24} />} style={{ backgroundColor: "#0159b2", top: -312 }} />
                        </Stack>
                        <InputAdornment position="start">
                            <IconButton onClick={() => setOpenAction(prev => !prev)}>
                                <LinkSimple />
                            </IconButton>
                        </InputAdornment>
                    </Stack>
                ,
                endAdornment:
                    <InputAdornment position="end">
                        <IconButton onClick={() => setOpenPicker(prev => !prev)}>
                            <Smiley />
                        </IconButton>
                    </InputAdornment>
            }
        }} />
    )
}

export default ChatInput;