export abstract class AbstractRole {
  constructor(public readonly name: string) {}
  
  abstract getPermissions(): string[];
  abstract canPerform(action: string): boolean;
}
