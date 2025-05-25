import { useState } from 'react';
import { faker } from '@faker-js/faker';
import { CaretLeft } from 'phosphor-react';
import { useAppDispatch } from '../../app/hook';

import Header from './Header';
import Message, { type MessageOptions } from '../message';
import { updateSidebarType } from '../../features/SidebarSlice';
import { DocMessages, LinkMessages } from '../../assets/chat-history';
import { Stack, Grid, Tab as MuiTab, Tabs as MuiTabs } from '@mui/material';

const Tabs = { MEDIA: 0, LINKS: 1, DOCS: 2 };

const SharedMessages = () => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState(Tabs.MEDIA);
    const renderMessage = (msg: MessageOptions, i: number) => (
        <Message key={i} message={msg} position='center' showMenu={false} sx={{
            maxWidth: 'max-content'
        }} />
    )

    return (
        <Stack sx={{ height: '100%' }} spacing={2} >
            <Header title={'Shared Messages'} icon={<CaretLeft />} onEsc={
                () => dispatch(updateSidebarType('contact'))
            } />

            <MuiTabs sx={{ px: 2, pt: 2 }} value={value} onChange={(_, value) => setValue(value)} centered>
                <MuiTab label="MEDIA" />
                <MuiTab label="Link" />
                <MuiTab label="DOCS" />
            </MuiTabs>

            <Stack className="scrollbar" sx={{ flexGrow: 1, overflowY: 'scroll', p: 1, }} spacing={3}>
                {(() => {
                    switch (value) {
                        case Tabs.MEDIA: return (
                            <Grid container spacing={2}>
                                {[...Array(7)].map((_, i) => (
                                    <Grid key={i} size={{ xs: 4 }}>
                                        <img src={faker.image.avatar()} alt={faker.person.fullName()} />
                                    </Grid>
                                ))}
                            </Grid>
                        );

                        case Tabs.LINKS: return LinkMessages(4).map(renderMessage);

                        case Tabs.DOCS: return DocMessages(4).map(renderMessage);

                        default: return null;
                    }
                })()}
            </Stack>
        </Stack>
    );
};

export default SharedMessages;
