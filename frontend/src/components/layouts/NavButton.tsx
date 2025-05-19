import { Box, IconButton, type Theme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import type { ReactNode } from "react";

export interface NavButtonProps {theme: Theme,  icon: ReactNode; to: string }

const NavButton = ({theme, icon, to}: NavButtonProps) => {
    const location = useLocation();
    const isSelected = location.pathname.includes(to);
    const bgColor = isSelected ? theme.palette.primary.main : 'transparent';
    const btColor = isSelected ? '#fff' : theme.palette.mode === 'light' ? '#000' : theme.palette.text.primary;
    return (
        <Box sx={{ borderRadius: 1.5, backgroundColor: bgColor }}>
            <IconButton component={Link} to={to}
                sx={{ width: 'max-content', color: btColor }}
            >
                {icon}
            </IconButton>
        </Box>
    )
}

export default NavButton;