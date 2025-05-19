import { Tooltip, Fab, type CSSObject } from "@mui/material";
import type { ReactNode } from "react";

interface ChatTooltipProps { title: string; icon: ReactNode; style: CSSObject; }

const ChatTooltip = ({title, icon, style}: ChatTooltipProps) => {
    return (
        <Tooltip placement='right' title={title}>
            <Fab sx={{ position: 'absolute', ...style }}>
                {icon}
            </Fab>
        </Tooltip>
    )
}

export default ChatTooltip;