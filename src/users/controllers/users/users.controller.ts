import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('/users')
export class UsersController {
    constructor(private userService: UsersService) {

    }
    // @Get('fetch')
    // @Get()
    // getUsers(@Query('sortBy',ParseBoolPipe) sortBy:boolean) {
    //     console.log(sortBy)
    //     return [{ usename: sortBy}]
    // }
    @Get()
    getUsers() {

        return this.userService.fetchUsers()
    }
    // @Get('/posts')
    // getUsersPost() {
    //     return [{ usename: "prateek" },{name:"hello"}]
    // }
    @Post()
    createUserExpress(@Req() req: Request, @Res() res: Response) {
        console.log(req.body)
        res.send("created")
    }
    @Post('/create')
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData: CreateUserDto) {
        console.log(typeof userData.age)
        this.userService.createUser(userData)
        return { ...userData }
    }
    // @Get('/:id/:postId')
    // getUserById(@Param('id') id:string,@Param('postId') postId:string) {
    //     console.log(id)
    //     console.log(postId)
    //     return {id,postId}
    // }
    // @Get('/:id/:postId')
    // getUserById(@Param() data:CreateUserDto2) {
    //     console.log(data)
    //     console.log(data)
    //     return {...data}
    // }
    @Get('/:id')
    getUserById(@Param('id',ParseIntPipe) id: number) {
        
        const user= this.userService.getUserById(id)
        if(!user){
            throw new HttpException("User Not Found",HttpStatus.BAD_REQUEST)
        }else{

            return user
        }
    }

}
