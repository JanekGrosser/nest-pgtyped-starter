import { Injectable } from '@nestjs/common';
import { DatabaseProvider } from '../database/database.provider';
import {
  findAuthors,
  findAuthorsById,
  IFindAuthorsByIdParams,
  IFindAuthorsByIdResult,
  IFindAuthorsParams,
  IFindAuthorsResult,
} from './generated/authors.queries';

@Injectable()
export class AuthorsService {
  public constructor(private readonly db: DatabaseProvider) {}

  public async findAuthors(): Promise<IFindAuthorsResult[]> {
    const books = await this.db.runQuery<IFindAuthorsParams, IFindAuthorsResult>(findAuthors);
    return books;
  }

  public async findAuthorsById(authorId: number): Promise<IFindAuthorsByIdResult> {
    const author = await this.db.runQuery<IFindAuthorsByIdParams, IFindAuthorsByIdResult>(
      findAuthorsById,
      {
        authorId: authorId,
      },
    );
    return author[0];
  }
}
