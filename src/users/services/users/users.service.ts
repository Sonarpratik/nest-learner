import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
    private fakeUsers = [
        { username: "John Doe" },
        { username: "Hello" },
        { username: "Mans " },
    ]
    fetchUsers() {
        return this.fakeUsers
    }

    createUser(userDetails: CreateUserType) {
        this.fakeUsers.push(userDetails)
        return;
    }
    getUserById(id: number) {
        return {id:id,usename:"Dummy"}
        // return null
    }
}
