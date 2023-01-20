import { categoryArray } from '../getBooks/__generated__/getBooks.queries.queries';

interface IBookInput {
  rank: number | null;
  name: string | null;
  authorId: number | null;
  categories: categoryArray | null;
}
export class Book {
  public rank: number | null;
  public name: string | null;
  public authorId: number | null;
  public categories: categoryArray;

  public constructor(input: IBookInput) {
    this.rank = input.rank;
    this.name = input.name;
    this.categories = input.categories ?? [];
    this.authorId = input.authorId;
  }
}
