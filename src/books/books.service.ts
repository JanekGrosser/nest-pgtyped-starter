import { Injectable } from '@nestjs/common';
import { DatabaseProvider } from '../database/database.provider';
import {
  IFindBooksByIdResult,
  IFindBooksParams,
  IFindBooksResult,
  findBooks,
  IFindBooksByIdParams,
  findBooksById,
} from './generated/books.queries';

@Injectable()
export class BooksService {
  public constructor(private readonly db: DatabaseProvider) {}

  public async findBooks(): Promise<IFindBooksByIdResult[]> {
    const books = await this.db.runQuery<IFindBooksParams, IFindBooksResult>(findBooks);
    return books;
  }

  public async findBooksById(bookId: number): Promise<IFindBooksByIdResult> {
    const book = await this.db.runQuery<IFindBooksByIdParams, IFindBooksByIdResult>(findBooksById, {
      bookId: bookId,
    });
    return book[0];
  }
}
