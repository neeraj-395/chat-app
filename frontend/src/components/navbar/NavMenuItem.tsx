import { MenuItem, Stack } from "@mui/material";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export interface NavMenuItem { title: string; icon: ReactNode; to: string; onClick: (e: any) => void; }

const NavMenuItem = ({ title, icon, to, onClick }: NavMenuItem) => {
    return (
        <MenuItem onClick={onClick}>
            <Stack component={Link} to={to} direction={'row'}
                sx={{
                    justifyContent: 'space-between',
                    width: 100, textDecoration: 'none', alignItems: 'center',
                    color: 'inherit', '&:hover': { textDecoration: 'none' }
                }}
            >
                <span>{title}</span>
                {icon}
            </Stack>
        </MenuItem>
    )
}

export default NavMenuItem;