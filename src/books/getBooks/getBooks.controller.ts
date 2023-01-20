import { Controller, Get, Query } from '@nestjs/common';
import { BooksService } from '../books.service';
import { GetBooksRequest } from './getBooks.request';
import { GetBooksUseCase } from './useCases/getBooksUseCase';

@Controller('books')
export class GetBooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll(@Query() { skip, take }: GetBooksRequest) {
    const useCase = new GetBooksUseCase(this.booksService);

    return useCase.execute({ skip, take });
  }
}
