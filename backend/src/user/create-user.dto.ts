import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  IsDefined,
} from 'class-validator';

export class CreateUserDto {
  @IsDefined({ message: 'Username is required' })
  @IsNotEmpty({ message: 'Username should not be empty' })
  @IsAlphanumeric(undefined, { message: 'Username must be alphanumeric' })
  @Length(8, 28, { message: 'Username must be between 8 and 28 characters' })
  username: string;

  @IsDefined({ message: 'Password is required' })
  @IsNotEmpty({ message: 'Password should not be empty' })
  @IsString({ message: 'Password must be a string' })
  @Length(8, 40, { message: 'Password must be between 8 and 40 characters' })
  password: string;

  @IsDefined({ message: 'Email is required' })
  @IsNotEmpty({ message: 'Email should not be empty' })
  @IsEmail({}, { message: 'Email must be a valid email address' })
  email: string;

  @IsDefined({ message: 'First name is required' })
  @IsNotEmpty({ message: 'First name should not be empty' })
  @IsString({ message: 'First name must be a string' })
  firstName: string;

  @IsDefined({ message: 'Last name is required' })
  @IsNotEmpty({ message: 'Last name should not be empty' })
  @IsString({ message: 'Last name must be a string' })
  lastName: string;
}
