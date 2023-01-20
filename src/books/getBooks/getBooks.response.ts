import { Author } from 'src/authors/entities/author.entity';
import { PagedResponse } from 'src/shared/pagedResponse';
import { Book } from '../entities/book.entity';
import { categoryArray } from './__generated__/getBooks.queries.queries';

export type BookWithAuthorNameType = Pick<Book, 'categories' | 'name' | 'rank'> & {
  authorName: string | null;
};

export class BookWithAuthorNameDto implements BookWithAuthorNameType {
  public categories: categoryArray;
  public name: string | null;
  public rank: number | null;
  public authorName: string | null;

  public constructor(book: Book, author: Author | null) {
    this.categories = book.categories;
    this.name = book.name;
    this.rank = book.rank;
    this.authorName = author?.fullName ?? null;
  }
}

export class GetBooksResponse extends PagedResponse<BookWithAuthorNameType> {}
