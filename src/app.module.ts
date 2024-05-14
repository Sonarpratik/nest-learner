import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

// const uri = 'mongodb+srv://vmapcrm:o7q984z6CFjHcXH9@vmapcrmcluster.dipwamv.mongodb.net/?retryWrites=true&w=majority';


@Module({
  imports: [UsersModule],
  controllers: [],
})
export class AppModule {}
