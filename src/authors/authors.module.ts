import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsConstroller } from './authors.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [AuthorsService],
  controllers: [AuthorsConstroller],
})
export class AuthorsModule {}
