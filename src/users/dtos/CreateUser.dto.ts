import { IsEmail, IsNotEmpty } from "class-validator"

export class CreateUserDto {

    @IsNotEmpty()
    username: string;

    @IsEmail()
    @IsNotEmpty()
    email: string
}
export class CreateUserDto2 {
    id: string
    postId: string
}