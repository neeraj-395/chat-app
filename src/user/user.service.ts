import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './create-user.dto';
import * as bcrypt from 'bcrypt';

const userSelectFields = { 
    id: true, 
    username: true, email: true, password: false,
    firstName: true, lastName: true, isActive: true,
    isBlocked: true, createdAt: true, updatedAt: true 
}

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async create(userData: CreateUserDto) {
        const { username, email, password } = userData;

        const userExist = await this.prisma.user.findFirst({
            where: { OR: [{username}, {email}] },
        });

        if(userExist) {
            throw new ConflictException('User with this username or email already exists');
        }

        userData.password = await bcrypt.hash(password, 10);

        return await this.prisma.user.create({ 
            data: { ...userData },
            select: userSelectFields
        });
    }

    async findAll() { 
        return this.prisma.user.findMany(
            {select: userSelectFields}
        ); 
    }

    async findOne(id: number) {
        return this.prisma.user.findUnique({ 
            where: { id },
            select: userSelectFields
        });
    }
}