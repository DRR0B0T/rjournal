import { IsEmail, Length } from 'class-validator';
import { UniqueOnDatabase } from '../../auth/validations/uniqueValidation';
import { UserEntity } from '../entities/user.entity';

export class CreateUserDto {
  @Length(3)
  fullName: string;

  @IsEmail(undefined, { message: 'Неверная почта' })
  @UniqueOnDatabase(UserEntity, {
    message: 'Такая почта уже есть',
  })
  email: string;

  @Length(6, 32, { message: 'Минимальная длина пароля 6 символов' })
  password?: string;
}
