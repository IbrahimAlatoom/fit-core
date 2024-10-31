export abstract class UseCase {
  execute(...args: any): any {
    throw new Error('Method not implemented.');
  }
}
