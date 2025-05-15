import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ChatController } from './chat/chat.controller';
import { ChatModule } from './chat/chat.module';
import { FileController } from './file/file.controller';
import { FileService } from './file/file.service';
import { FileModule } from './file/file.module';

@Module({
  imports: [PrismaModule, UserModule, AuthModule, ChatModule, FileModule],
  controllers: [AppController, ChatController, FileController],
  providers: [AppService, FileService],
})
export class AppModule {}
