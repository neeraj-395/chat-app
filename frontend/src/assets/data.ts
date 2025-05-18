import { faker } from '@faker-js/faker';

const ChatList = Array.from({ length: 8 }, () => ({
    image: faker.image.avatar(),
    name: faker.person.firstName(),
    message: faker.music.songName(),
    time: faker.date.recent().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    unread: faker.number.int({ min: 0, max: 5 }),
    pinned: faker.datatype.boolean(),
    online: faker.datatype.boolean(),
}));

export default ChatList;
