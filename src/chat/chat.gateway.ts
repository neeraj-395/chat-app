import { 
  OnGatewayConnection, 
  SubscribeMessage, 
  WebSocketGateway, 
  WebSocketServer,
  MessageBody
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { ChatService } from './chat.service';
import { CreateMessageDto } from './chat.dto';

@WebSocketGateway({ cors: true })
export class ChatGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  constructor(private chatService: ChatService) {}

  handleConnection(client: any) {
    console.log('Client connected: ', client.id);
  }

  @SubscribeMessage('message')
  async handleMessage(@MessageBody() dto: CreateMessageDto) {
    const msg = await this.chatService.createMessage(dto);
    this.server.to(`room-${dto.conversationId}`).emit('message', msg);
  }

  handleJoinChannel(@MessageBody() data: { conversationId: string }) {
    this.server.socketsJoin(`room-${data.conversationId}`);
  }
}
