import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PreparedQuery } from '@pgtyped/query';
import { Pool, PoolConfig } from 'pg';

@Injectable()
export class DatabaseProvider implements OnModuleDestroy {
  private config: PoolConfig;
  private clientPool: Pool;

  public constructor(private readonly configService: ConfigService) {
    this.config = {
      connectionString: process.env.DATABASE_URL,
      // LF TODO:: figure out if this will be a thing
      ssl: process.env.NODE_ENV !== 'development',
      max: Number.parseInt(process.env.DATABASE_MAX_CONNECTIONS ?? '4'),
    };
    this.clientPool = new Pool(this.config);
  }

  // LF TODO:: figure out if we really need this
  onModuleDestroy() {
    return;
  }

  public runQuery<QParams, QResult>(
    queryFn: PreparedQuery<QParams, QResult>,
    queryParameters?: QParams,
  ): Promise<QResult[]> {
    const params: QParams = queryParameters ?? ({} as QParams);
    return queryFn.run(params, this.clientPool);
  }

  private runRawQuery(sql: string): unknown {
    return this.clientPool.query(sql);
  }

  public async migrate(): Promise<void> {
    // // File Paths go here after searching for *.sql files in a given directory
    // const fileList: Array<string> = [];
    // return Promise.all(
    //   fileList.map(async (fileName: string) => {
    //     return this.runRawQuery('BEGIN').then(() => {
    //       // Open file here (get contents)
    //       return this.runRawQuery();
    //     });
    //   }),
    // );
  }
}
