import { MenuItem, Stack } from "@mui/material";
import type { ReactNode } from "react";

export interface NavMenuItem { title: string; icon: ReactNode; onClick: () => void; }

const NavMenuItem = ({ title, icon, onClick }: NavMenuItem) => {
    return (
        <MenuItem onClick={onClick}>
            <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ width: 100 }}>
                <span>{title}</span>
                {icon}
            </Stack>
        </MenuItem>
    )
}

export default NavMenuItem;