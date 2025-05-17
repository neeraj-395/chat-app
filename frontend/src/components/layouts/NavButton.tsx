import { Box, IconButton, useTheme } from "@mui/material";
import type { ReactNode } from "react";

export interface NavButtonProps { icon: ReactNode; onClick: () => void; isSelected: boolean; }

const NavButton = ({icon, onClick, isSelected}: NavButtonProps) => {
    const theme = useTheme();
    const bgColor = isSelected ? theme.palette.primary.main : 'transparent';
    const btColor = isSelected ? '#fff' : theme.palette.mode === 'light' ? '#000' : theme.palette.text.primary;
    return (
        <Box sx={{ borderRadius: 1.5, backgroundColor: bgColor }}>
            <IconButton onClick={onClick} sx={{ width: 'max-content', color: btColor }}>
                {icon}
            </IconButton>
        </Box>
    )
}

export default NavButton;