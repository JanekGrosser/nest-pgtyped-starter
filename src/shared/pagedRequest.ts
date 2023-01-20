import { Type } from 'class-transformer';
import { IsInt, Max, Min } from 'class-validator';

export class PagedRequest {
  @IsInt()
  @Type(() => Number)
  @Min(0)
  public skip = 0;

  @IsInt()
  @Type(() => Number)
  @Min(0)
  @Max(100)
  public take!: number;
}
