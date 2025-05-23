import { faker } from "@faker-js/faker";

function TextMessages(count: number) {
  return Array.from({ length: count }, () => ({
    type: "msg",
    subtype: "text",
    message: faker.lorem.sentence(),
    incoming: faker.datatype.boolean(),
  }));
}

function ImageMessages(count: number) {
  return Array.from({ length: count }, () => ({
    type: "msg",
    subtype: "img",
    message: faker.lorem.words(3),
    image: faker.image.personPortrait(),
    incoming: faker.datatype.boolean(),
  }));
}

function DocMessages(count: number) {
  return Array.from({ length: count }, () => ({
    type: "msg",
    subtype: "doc",
    caption: faker.system.fileName(),
    message: faker.lorem.sentence(),
    incoming: faker.datatype.boolean(),
  }));
}

function LinkMessages(count: number) {
  return Array.from({ length: count }, () => ({
    type: "msg",
    subtype: "link",
    preview: faker.image.url({width: 360, height: 360}),
    url: faker.internet.url(),
    message: faker.lorem.sentence(),
    incoming: faker.datatype.boolean(),
  }));
}

function ReplyMessages(count: number) {
  return Array.from({ length: count }, () => ({
    type: "msg",
    subtype: "reply",
    reply: faker.lorem.sentence(),
    message: faker.lorem.sentence(),
    incoming: faker.datatype.boolean(),
  }));
}

interface ChatHistoryOptions {
  type: "msg" | string;
  subtype: "text" | "img" | "doc" | "link" | "reply" | string;
  message: string;
  incoming: boolean;
  url?: string;
  image?: string;
  reply?: string;
  caption?: string;
  preview?: string;
}

const ChatHistory = (
  text: number, 
  img: number, 
  doc: number, 
  link: number, 
  reply: number
): ChatHistoryOptions[] => {
  const chats: ChatHistoryOptions[] = [
    ...DocMessages(doc),
    ...TextMessages(text),
    ...ImageMessages(img),
    ...LinkMessages(link),
    ...ReplyMessages(reply),
  ];

  return faker.helpers.shuffle(chats);
}

export { DocMessages, LinkMessages, ImageMessages, ReplyMessages, TextMessages }

export default ChatHistory;