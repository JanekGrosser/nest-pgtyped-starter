export abstract class BaseUseCase {
  public abstract execute(requestParams: unknown): unknown;
}
