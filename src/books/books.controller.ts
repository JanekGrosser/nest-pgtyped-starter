import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  public findBooks(): Promise<any> {
    return this.booksService.findBooks();
  }

  @Get(':bookId')
  public findBooksById(@Param('bookId') bookId: string): Promise<any> {
    return this.booksService.findBooksById(Number.parseInt(bookId));
  }
}
