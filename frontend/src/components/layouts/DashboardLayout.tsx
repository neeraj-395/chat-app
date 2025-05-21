import { Outlet, useLocation } from "react-router-dom";
import { Stack } from '@mui/material';
import Navbar from "../navbar";
import Conversation from "../conversation";

const DashboardLayout = () => {
    const pathname = useLocation().pathname;
    return (
        <Stack direction='row' width={'100%'}>
            <Navbar/>
            <Outlet />
            {pathname.includes('chats') || pathname.includes('groups') ? <Conversation/> : null}
        </Stack>
    )
};

export default DashboardLayout;