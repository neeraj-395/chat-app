import type { ReactNode } from "react";
import { Stack, Typography } from "@mui/material";

interface SettingsOptionProps {
    title: string;
    icon: ReactNode;
    onClick: () => void;
}

const SettingsOption = ({title, icon, onClick}: SettingsOptionProps) => {
    return (
        <Stack spacing={2} sx={{ cursor: 'pointer' }} onClick={onClick}>
            <Stack direction='row' spacing={2}>
                {icon}
                <Typography variant='body2'>{title}</Typography>
            </Stack>
        </Stack>
    )
}

export default SettingsOption;