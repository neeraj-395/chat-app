import { Outlet, useLocation } from "react-router-dom";
import { Stack, Box } from '@mui/material';
import Navbar from "../navbar";
import Sidebar from "../sidebar";
import Conversation from "../conversation";

const DashboardLayout = () => {
    const pathname = useLocation().pathname;
    return (
        <Stack direction='row' width={'100%'}>
            <Navbar/>
            
            <Box className="scrollbar" sx={{ 
                width: 320, overflowY: 'scroll',
                boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
                backgroundColor: (theme) => theme.palette.mode === 'light' 
                ? "#F8FAFF" : theme.palette.background.paper, 
            }}><Outlet /></Box>

            {pathname.includes('chats') || pathname.includes('groups') ? <Conversation/> : <></>}

            <Sidebar />
        </Stack>
    )
};

export default DashboardLayout;