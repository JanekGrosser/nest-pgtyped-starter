import { Injectable } from '@nestjs/common';
import { DatabaseProvider } from '../../src/database/database.provider';
import {
  IFindBooksByIdResult,
  IFindBooksParams,
  IFindBooksResult,
  findBooks,
  IFindBooksByIdParams,
  findBooksById,
} from '../../src/books/generated/books.queries';
import { Test } from '@nestjs/testing';
import { BooksService } from '../../src/books/books.service';

jest.mock('../../src/database/database.provider');

describe('test BooksService', () => {
  let booksService: BooksService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [],
      providers: [BooksService, DatabaseProvider],
    }).compile();

    booksService = moduleRef.get<BooksService>(BooksService);
  });

  test('BooksService business', async () => {
    expect(booksService).toBeDefined();
  });
});
