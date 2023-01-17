/** Types generated for queries found in "src/now.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'SelectNow' parameters type */
export type ISelectNowParams = void;

/** 'SelectNow' return type */
export interface ISelectNowResult {
  myDate: Date | null;
}

/** 'SelectNow' query type */
export interface ISelectNowQuery {
  params: ISelectNowParams;
  result: ISelectNowResult;
}

const selectNowIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT NOW() AS \"myDate\""};

/**
 * Query generated from SQL:
 * ```
 * SELECT NOW() AS "myDate"
 * ```
 */
export const selectNow = new PreparedQuery<ISelectNowParams,ISelectNowResult>(selectNowIR);


