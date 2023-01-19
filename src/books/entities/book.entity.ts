import { Category } from 'src/enums/book.enums';
import { Author } from './author.entity';

export class Book {
  rank: number;
  name: string;
  author: Author;
  category: Category;
}
