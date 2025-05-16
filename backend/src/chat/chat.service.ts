import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { 
    CreateConversationDto,
    CreateParticipantDto,
    CreateMessageDto,
} from './chat.dto';


@Injectable()
export class ChatService {
    constructor(private prisma: PrismaService) {}

    async createConversation({ title, creatorId }: CreateConversationDto) {
        return this.prisma.conversation.create({
            data: {title, creatorId, roomId: `room-${crypto.randomUUID()}`}
        })
    }

    async createParticipant({conversationId, userId, type}: CreateParticipantDto) {
        const existing = await this.prisma.participant.findUnique({
            where: { conversationId_userId: { conversationId, userId } }
        })

        if (existing) {
            throw new BadRequestException('Participant already exists in this conversation');
        }

        return this.prisma.participant.create({data: { conversationId, userId, type }});
    }

    async createMessage({roomId, senderId, message, messageType}: CreateMessageDto) {
        return this.prisma.message.create({
            data: { roomId, senderId, message, messageType, guid: crypto.randomUUID() },
        });
    }

    async getMessages(roomId: string) {
        return this.prisma.message.findMany({
            where: {roomId},
            orderBy: {createdAt: 'asc'}
        });
    }
}
