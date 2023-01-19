import { Controller, Get, Param } from '@nestjs/common';
import { AuthorsService } from './authors.service';

@Controller('authors')
export class AuthorsConstroller {
  constructor(private readonly authorsService: AuthorsService) {}

  @Get()
  public findBooks(): Promise<any> {
    return this.authorsService.findAuthors();
  }

  @Get(':authorId')
  public findBooksById(@Param('authorId') authorId: string): Promise<any> {
    return this.authorsService.findAuthorsById(Number.parseInt(authorId));
  }
}
