import { Post, Body, ParseIntPipe, Get, Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ChatService } from './chat.service';
import { 
    CreateConversationDto,
    CreateParticipantDto,
    CreateMessageDto,
} from './chat.dto';

@Controller('chat')
export class ChatController {
    constructor(private chatService: ChatService) {}

    @Post('conversations')
    async createConversation(@Body() dto: CreateConversationDto) {
        return this.chatService.createConversation(dto);
    }

    @Post('participants')
    async createParticipant(@Body() dto: CreateParticipantDto) {
        return this.chatService.createParticipant(dto)
    }

    @Post('messages')
    async createMessage(@Body() dto: CreateMessageDto) {
        return this.chatService.createMessage(dto);
    }

    @Get('messages/:roomId')
    async getMessages(@Param('roomId', ParseIntPipe) roomId: string) {
        return this.chatService.getMessages(roomId);
    }
}
