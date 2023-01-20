/** Types generated for queries found in "src/books/books.sql" */
import { PreparedQuery } from '@pgtyped/query';

export type category = 'novel' | 'science-fiction' | 'thriller';

export type categoryArray = (category)[];

/** 'FindBooks' parameters type */
export type IFindBooksParams = void;

/** 'FindBooks' return type */
export interface IFindBooksResult {
  author_id: number | null;
  categories: categoryArray | null;
  id: number;
  name: string | null;
  rank: number | null;
}

/** 'FindBooks' query type */
export interface IFindBooksQuery {
  params: IFindBooksParams;
  result: IFindBooksResult;
}

const findBooksIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT * FROM books AS \"books!\""};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM books AS "books!"
 * ```
 */
export const findBooks = new PreparedQuery<IFindBooksParams,IFindBooksResult>(findBooksIR);


/** 'FindBooksById' parameters type */
export interface IFindBooksByIdParams {
  bookId: number;
}

/** 'FindBooksById' return type */
export interface IFindBooksByIdResult {
  author_id: number | null;
  categories: categoryArray | null;
  id: number;
  name: string | null;
  rank: number | null;
}

/** 'FindBooksById' query type */
export interface IFindBooksByIdQuery {
  params: IFindBooksByIdParams;
  result: IFindBooksByIdResult;
}

const findBooksByIdIR: any = {"usedParamSet":{"bookId":true},"params":[{"name":"bookId","required":true,"transform":{"type":"scalar"},"locs":[{"a":31,"b":38}]}],"statement":"SELECT * FROM books WHERE id = :bookId!"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM books WHERE id = :bookId!
 * ```
 */
export const findBooksById = new PreparedQuery<IFindBooksByIdParams,IFindBooksByIdResult>(findBooksByIdIR);


