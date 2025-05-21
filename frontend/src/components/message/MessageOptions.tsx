import { DotsThreeVertical } from "phosphor-react";
import { Menu, MenuList, MenuItem, Stack } from "@mui/material";
import { useState } from "react";

const MessageOptions = () => {
    const [anchorEl, setAnchorEl] = useState<SVGSVGElement | null>(null);
    const showOptions = Boolean(anchorEl);
    const handleClick = (event: any) => setAnchorEl(event.currentTarget);

    return (
        <>
            <DotsThreeVertical 
                id="basic-button"
                size={20}
                aria-haspopup="true"
                aria-controls={showOptions ? 'basic-menu' : undefined}
                aria-expanded={showOptions ? 'true' : undefined}
                onClick={handleClick}
            />

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={showOptions}
                onClose={() => setAnchorEl(null)}
            >   
                <MenuList aria-labelledby="basic-button" sx={{ outline: 'none' }}>
                    <Stack spacing={1} px={1} >
                        <MenuItem onClick={handleClick}>Reply</MenuItem>
                        <MenuItem onClick={handleClick}>React to message</MenuItem>
                        <MenuItem onClick={handleClick}>Forward message</MenuItem>
                        <MenuItem onClick={handleClick}>Star message</MenuItem>
                        <MenuItem onClick={handleClick}>Report</MenuItem>
                        <MenuItem onClick={handleClick}>Delete message</MenuItem>
                    </Stack>
                </MenuList>
            </Menu> 
        </>
    )
}

export default MessageOptions;