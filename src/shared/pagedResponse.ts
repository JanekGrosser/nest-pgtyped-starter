import { IsArray, IsInt, Min } from 'class-validator';

export class PagedResponse<T> {
  @IsInt()
  @Min(0)
  public count!: number;

  @IsArray()
  public items!: Array<T>;

  @IsInt()
  public next: number | null;
}
