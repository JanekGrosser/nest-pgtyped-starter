import { Injectable } from '@nestjs/common';
import { DatabaseProvider } from './database/database.provider';
import { ISelectNowParams, ISelectNowResult, selectNow } from './__generated__/now.queries';

@Injectable()
export class AppService {
  public constructor(private readonly databaseProvider: DatabaseProvider) {}

  public async getHello(): Promise<string> {
    const result = await this.databaseProvider.runQuery<ISelectNowParams, ISelectNowResult>(selectNow);
    console.log(result[0].myDate);
    return 'Hello World!';
  }
}
