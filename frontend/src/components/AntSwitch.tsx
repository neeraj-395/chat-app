import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: 'flex',

  '&:active .MuiSwitch-thumb': {
    width: 15,
  },

  '&:active .MuiSwitch-switchBase.Mui-checked': {
    transform: 'translateX(9px)',
  },

  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        opacity: 1,
      },
    },
  },

  '& .MuiSwitch-thumb': {
    width: 16,
    height: 16,
    borderRadius: 8,
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    transition: theme.transitions.create('width', { duration: 200 }),
  },

  '& .MuiSwitch-track': {
    borderRadius: 10,
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark'
      ? 'rgba(255,255,255,0.35)'
      : 'rgba(0,0,0,0.25)',
    boxSizing: 'border-box',
  },
}));

export default AntSwitch;
