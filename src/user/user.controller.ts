import { Body, Controller, Get, Post, Param, ParseIntPipe, UseGuards} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() userData: CreateUserDto) {
        return this.userService.create(userData);
    }

    @Get()
    @UseGuards(AuthGuard('jwt'))
    async findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    @UseGuards(AuthGuard('jwt'))
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findOne(id);
    }

}
