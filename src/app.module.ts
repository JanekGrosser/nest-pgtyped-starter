import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), BooksModule, AuthorsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
