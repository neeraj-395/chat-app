import { useState } from 'react';
import Header from './Header';
import { Bell, CaretRight, Prohibit, Star, Trash, X } from 'phosphor-react';
import { toggleSidebar, updateSidebarType } from '../../features/SidebarSlice';
import { useAppDispatch } from '../../app/hook';
import { faker } from '@faker-js/faker';
import AntSwitch from '../AntSwitch';
import ConfirmDialog from '../ConfirmDialog';
import {
  Avatar, Box,
  Button, Divider,
  IconButton, Stack,
  Typography
} from '@mui/material'

const Contact = () => {
  const dispatch = useAppDispatch();
  const [openBlock, setOpenBlock] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  return (
    <>
      <Stack height={'100%'}>
        <Header title={'Member Info'} icon={<X />} onEsc={() => dispatch(toggleSidebar())} />

        {/* Body */}
        <Stack className='scrollbar' p={3} spacing={3} sx={{
          height: '100%', position: 'relative',
          flexGrow: 1, overflowY: 'scroll'
        }}>
          <Stack alignItems={'center'} direction='row' spacing={2}>
            <Avatar src={faker.image.avatar()} alt={''} sx={{ height: 64, width: 64 }} />
            <Stack spacing={0.5}>
              <Typography fontWeight={600}>
                {faker.person.fullName()}
              </Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={0.5}>
            <Typography fontWeight={700}>About</Typography>
            <Typography variant='body2'>Hi I'm working</Typography>
          </Stack>
          <Divider />
          <Stack direction='row' alignItems={'center'} justifyContent='space-between' >
            <Typography variant='subtitle2'>Media, Links & Docs</Typography>
            <Button endIcon={<CaretRight />} onClick={
              () => dispatch(updateSidebarType('shared'))
            }>401</Button>
          </Stack>
          <Stack direction='row' spacing={2} alignItems={'center'}>
            {[1, 2, 3].map((el) => (
              <Box key={el}>
                <img key={el} src={faker.image.url({ height: 180, width: 180 })} alt={faker.person.fullName()} />
              </Box>
            ))}
          </Stack>
          <Divider />
          <Stack direction='row' alignItems={'center'} justifyContent='space-between'>
            <Stack direction='row' spacing={2} alignItems={'center'}>
              <Star size={21} />
              <Typography variant='subtitle2'>Starred Messages</Typography>
            </Stack>
            <IconButton onClick={() => {
              dispatch(updateSidebarType('starred'))
            }}><CaretRight /></IconButton>
          </Stack>
          <Divider />
          <Stack direction='row' alignItems={'center'} justifyContent='space-between'>
            <Stack direction='row' spacing={2} alignItems={'center'}>
              <Bell size={21} />
              <Typography variant='subtitle2'>Mute Notifications</Typography>
            </Stack>
            <AntSwitch />
          </Stack>
          <Divider />
          <Typography>1 group in common</Typography>
          <Stack direction='row' spacing={2} alignItems={'center'}>
            <Avatar src={faker.image.avatar()} alt={''} />
            <Stack spacing={0.5}>
              <Typography variant='subtitle2' >React Developers</Typography>
              <Typography variant='caption' >Kaveena, Pavithra, Ayesha, You</Typography>
            </Stack>
          </Stack>
          <Stack direction='row' alignItems={'center'} spacing={2}>
            <Button onClick={() => { setOpenBlock(true) }} startIcon={<Prohibit />} fullWidth variant='outlined'>
              Block
            </Button >
            <Button onClick={() => { setOpenDelete(true) }} startIcon={<Trash />} fullWidth variant='outlined'>
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack >
      { openBlock && ( <ConfirmDialog title={'Block this contact'}
        open={openBlock} onClose={() => setOpenBlock(false)}>
        Are you sure you want to block this contact?
      </ConfirmDialog> )}

      { openDelete && ( <ConfirmDialog title={'Delete this chat'}
          open={openDelete} onClose={() => setOpenDelete(false)}>
          Are you sure you want to delete this chat?
        </ConfirmDialog> )}
    </>
  )
}

export default Contact;