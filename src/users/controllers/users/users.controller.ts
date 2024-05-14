import { Body, Controller, Get, Param, ParseBoolPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('/users')
export class UsersController {
    // @Get('fetch')
    @Get()
    getUsers(@Query('sortBy',ParseBoolPipe) sortBy:boolean) {
        console.log(sortBy)
        return [{ usename: sortBy}]
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
        console.log(userData)
        return {...userData}
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
    getUserById(@Param('id') id:number) {
        console.log(id)
        return {id}
    }
 
}
