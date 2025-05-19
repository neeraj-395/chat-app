import { faker } from "@faker-js/faker";

// Generates text messages
function TextMessages(count: number) {
  return Array.from({ length: count }, () => ({
    type: "msg",
    subtype: "text",
    message: faker.lorem.sentence(),
    incoming: faker.datatype.boolean(),
  }));
}

// Generates image messages
function ImageMessages(count: number) {
  return Array.from({ length: count }, () => ({
    type: "msg",
    subtype: "img",
    message: faker.lorem.words(3),
    img: faker.image.urlPicsumPhotos(),
    incoming: faker.datatype.boolean()
  }));
}

// Generates document messages
function DocMessages(count: number) {
  return Array.from({ length: count }, () => ({
    type: "msg",
    subtype: "doc",
    caption: "Document: " + faker.system.fileName(),
    message: faker.lorem.lines(),
    incoming: faker.datatype.boolean(),
  }));
}

// Generates link messages
function LinkMessages(count: number) {
  return Array.from({ length: count }, () => ({
    type: "msg",
    subtype: "link",
    preview: faker.image.urlLoremFlickr(),
    message: faker.internet.url(),
    incoming: faker.datatype.boolean(),
  }));
}

// Generates reply messages
function ReplyMessages(count: number) {
  return Array.from({ length: count }, () => ({
    type: "msg",
    subtype: "reply",
    reply: faker.lorem.sentence(),
    message: faker.lorem.sentence(),
    incoming: faker.datatype.boolean(),
  }));
}

const ChatHistory = (text: number, img: number, doc: number, link: number, reply: number) => {
  const chats = [
    ...DocMessages(doc),
    ...TextMessages(text),
    ...ImageMessages(img),
    ...LinkMessages(link),
    ...ReplyMessages(reply),
  ];

  return faker.helpers.shuffle(chats);
}

export default ChatHistory;