import { useState } from 'react';
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import NavButton from './NavButton';
import AntSwitch from "../AntSwitch";
import NavMenuItem from "./NavMenuItem";
import { useAppDispatch } from '../../app/hook';
import { toggleMode } from '../../features/SettingsSlice';
import {
    Avatar, Box, Divider,
    Menu, MenuList, Stack
} from '@mui/material';
import {
    ChatCircleDots, Users,
    GearSix, Gear, User, SignOut
} from "phosphor-react";


const DashboardLayout = () => {
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleNavMenu = () => setAnchorEl(null);
    const showMenu = Boolean(anchorEl);

    return (
        <Stack direction='row'>
            {/* SideBar */}
            <Box p={2}
                sx={{
                    backgroundColor: theme.palette.background.paper,
                    boxShadow: '0px 0px 2px rgb(0, 0, 0, 0.25)',
                    height: '100vh', width: 100, display: 'flex'
                }}
            >
                <Stack direction={'column'} alignItems={'center'}
                    justifyContent={'space-between'} spacing={3}
                    sx={{ width: '100%', height: '100%' }}
                >
                    {/* Top Section */}
                    <Stack alignItems={'center'} spacing={4}>
                        <Box
                            sx={{
                                backgroundColor: theme.palette.primary.main,
                                height: 64,
                                width: 64,
                                borderRadius: 1.5,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <img src='./vite.svg' alt='logo' height={40} />
                        </Box>

                        <Stack direction='column' alignItems='center' spacing={3}>
                            <NavButton theme={theme} icon={<ChatCircleDots />} to={'/chats'} />
                            <NavButton theme={theme} icon={<Users />} to={'/groups'} />
                            <Divider sx={{ width: 48 }} />
                            <NavButton theme={theme} icon={<GearSix />} to={'/settings'} />
                        </Stack>
                    </Stack>

                    {/* Botton section */}
                    <Stack spacing={4}>
                        <AntSwitch onChange={() => dispatch(toggleMode())} defaultChecked />

                        <Avatar
                            id='basic-button'
                            sx={{ cursor: 'pointer' }}
                            src={''}
                            onClick={(e) => setAnchorEl(e.currentTarget)}
                            aria-controls={showMenu ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={showMenu ? 'true' : undefined}
                        />

                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={showMenu}
                            aria-hidden={!showMenu}
                            onClose={() => setAnchorEl(null)}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            transformOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        >
                            <MenuList aria-labelledby='basic-button' sx={{ outline: 'none' }}>
                                <Stack spacing={1} px={1}>
                                    <NavMenuItem title='Profile' to={'/profile'} icon={<User />} onClick={handleNavMenu} />
                                    <NavMenuItem title='Settings' to={'/settings'} icon={<Gear />} onClick={handleNavMenu} />
                                    <NavMenuItem title='Logout' to={'/logout'} icon={<SignOut />} onClick={handleNavMenu} />
                                </Stack>
                            </MenuList>
                        </Menu>
                    </Stack>
                </Stack>
            </Box>
            <Outlet />
        </Stack>
    );
};



export default DashboardLayout;