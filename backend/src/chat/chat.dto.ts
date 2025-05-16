import { ParticipantType } from '@prisma/client';
import { MessageType } from '@prisma/client';
import { IsEnum, IsInt, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateConversationDto {
    @IsString()
    title: string;

    @IsInt()
    creatorId: number;
}

export class CreateParticipantDto {
  @IsInt()
  conversationId: number;

  @IsInt()
  userId: number

  @IsEnum(ParticipantType)
  type: ParticipantType;
}

export class CreateMessageDto {
  @IsString()
  roomId: string;

  @IsInt()
  senderId: number;

  @IsEnum(MessageType)
  messageType: MessageType;

  @IsString()
  @IsOptional()
  @MinLength(1)
  message?: string;
}

