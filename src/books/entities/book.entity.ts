import { Category } from '../enums/book.enums';
import { Author } from '../../authors/entities/author.entity';

export class Book {
  rank: number;
  name: string;
  author: Author;
  category: Category;
}
