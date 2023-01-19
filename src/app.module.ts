import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), BooksModule, AuthorsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
