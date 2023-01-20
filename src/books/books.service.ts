import { Injectable } from '@nestjs/common';
import { Author } from 'src/authors/entities/author.entity';
import { DatabaseProvider } from 'src/infrastructure/database/database.provider';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { GetBooksRequest } from './getBooks/getBooks.request';
import { BookWithAuthorNameDto, GetBooksResponse } from './getBooks/getBooks.response';
import {
  getAuthorById,
  getBooksCount,
  getBooksPage,
  IGetAuthorByIdParams,
  IGetAuthorByIdResult,
  IGetBooksCountParams,
  IGetBooksCountResult,
  IGetBooksPageParams,
  IGetBooksPageResult,
} from './getBooks/__generated__/getBooks.queries.queries';

@Injectable()
export class BooksService {
  public constructor(private readonly databaseProvider: DatabaseProvider) {}

  create(createBookDto: CreateBookDto) {
    return 'This action adds a new book';
  }

  public async findAll(input: GetBooksRequest): Promise<GetBooksResponse> {
    const { skip = 0, take = 30 } = input;

    const getBooksCountResult = (
      await this.databaseProvider.runQuery<IGetBooksCountParams, IGetBooksCountResult>(
        getBooksCount,
      )
    )[0];

    const count = getBooksCountResult.count ?? 0;

    if (!count) {
      return {
        count,
        items: [],
        next: null,
      };
    }

    const getBooksResult = await this.databaseProvider.runQuery<
      IGetBooksPageParams,
      IGetBooksPageResult
    >(getBooksPage, {
      skip,
      take,
    });

    const next: number = Math.min(count, skip + take);
    const hasNext: boolean = skip + take < count;

    const booksWithAuthorNames = await Promise.all(
      getBooksResult.map(async (bookRow) => {
        const book: Book = new Book(bookRow);
        let author: Author | null = null;

        const authorResult = (
          await this.databaseProvider.runQuery<IGetAuthorByIdParams, IGetAuthorByIdResult>(
            getAuthorById,
            {
              authorId: book.authorId,
            },
          )
        )[0];

        if (authorResult) {
          author = new Author(authorResult);
        }

        return new BookWithAuthorNameDto(book, author);
      }),
    );

    return {
      count,
      items: booksWithAuthorNames,
      next: hasNext ? next : null,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
