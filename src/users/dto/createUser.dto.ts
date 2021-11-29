import { IsString, IsNotEmpty } from 'class-validator';

export class ConnectUserDto {
    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}