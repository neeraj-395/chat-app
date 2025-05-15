import { IsAlphanumeric, IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  @Length(8, 28)
  username: string;

  @IsNotEmpty()
  @IsString()
  @Length(6, 40)
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
}
