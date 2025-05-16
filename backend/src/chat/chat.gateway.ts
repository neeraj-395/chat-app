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
    this.server.to(dto.roomId).emit('message', msg);
  }

  handleJoinChannel(@MessageBody() data: { roomId: string }) {
    this.server.socketsJoin(data.roomId);
  }
}
