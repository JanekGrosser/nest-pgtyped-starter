import { BooksService } from 'src/books/books.service';
import { BaseUseCase } from 'src/shared';
import { GetBooksRequest } from '../getBooks.request';

export class GetBooksUseCase implements BaseUseCase {
  public constructor(private readonly booksService: BooksService) {}

  public execute(requestParams: GetBooksRequest): ReturnType<BooksService['findAll']> {
    return this.booksService.findAll(requestParams);
  }
}
