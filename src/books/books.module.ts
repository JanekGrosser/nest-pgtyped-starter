import { Module } from '@nestjs/common';
import { DatabaseProvider } from 'src/infrastructure/database/database.provider';
import { BooksService } from './books.service';
import { GetBooksController } from './getBooks/getBooks.controller';

@Module({
  controllers: [GetBooksController],
  providers: [BooksService, DatabaseProvider],
})
export class BooksModule {}
