/** Types generated for queries found in "src/authors/authors.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'FindAuthors' parameters type */
export type IFindAuthorsParams = void;

/** 'FindAuthors' return type */
export interface IFindAuthorsResult {
  first_name: string | null;
  id: number;
  last_name: string | null;
}

/** 'FindAuthors' query type */
export interface IFindAuthorsQuery {
  params: IFindAuthorsParams;
  result: IFindAuthorsResult;
}

const findAuthorsIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT * FROM authors AS \"authors!\""};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM authors AS "authors!"
 * ```
 */
export const findAuthors = new PreparedQuery<IFindAuthorsParams,IFindAuthorsResult>(findAuthorsIR);


/** 'FindAuthorsById' parameters type */
export interface IFindAuthorsByIdParams {
  authorId: number;
}

/** 'FindAuthorsById' return type */
export interface IFindAuthorsByIdResult {
  first_name: string | null;
  id: number;
  last_name: string | null;
}

/** 'FindAuthorsById' query type */
export interface IFindAuthorsByIdQuery {
  params: IFindAuthorsByIdParams;
  result: IFindAuthorsByIdResult;
}

const findAuthorsByIdIR: any = {"usedParamSet":{"authorId":true},"params":[{"name":"authorId","required":true,"transform":{"type":"scalar"},"locs":[{"a":33,"b":42}]}],"statement":"SELECT * FROM authors WHERE id = :authorId!"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM authors WHERE id = :authorId!
 * ```
 */
export const findAuthorsById = new PreparedQuery<IFindAuthorsByIdParams,IFindAuthorsByIdResult>(findAuthorsByIdIR);


