export interface AuthorInput {
  id: number;
  firstName: string | null;
  lastName: string | null;
}

export class Author {
  public id: number;
  public firstName: string | null;
  public lastName: string | null;

  public constructor(input: AuthorInput) {
    this.id = input.id;
    this.firstName = input.firstName;
    this.lastName = input.lastName;
  }

  public get fullName(): string | null {
    if (!this.firstName && !this.lastName) {
      return null;
    }

    const lastName = this.lastName ? ` ${this.lastName}` : ``;

    return `${this.firstName}${lastName}`;
  }
}
