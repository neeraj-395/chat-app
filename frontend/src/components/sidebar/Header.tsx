import { Box, Stack, IconButton, Typography } from "@mui/material";
import type { ReactElement } from "react";


const Header = ({title, icon, onEsc}: {title: string, icon: ReactElement, onEsc: () => void}) => {
    return (
        <Box sx={{ 
            width: '100%', boxShadow: '0px 0px 2px rgba(0.25)',
            backgroundColor: (theme) => theme.palette.mode === 'light' ? 
            '#F8FAFF' : theme.palette.background.paper
        }}>
          <Stack sx={{height: '100%', p:2 }} direction='row' alignItems='center'
           justifyContent='space-between' spacing={2}>
            <Typography variant='subtitle1'>{title}</Typography>
            <IconButton onClick={onEsc}>{icon}</IconButton>
          </Stack>
        </Box>
    )
}

export default Header;