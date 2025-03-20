export class ItemType {
  public name: string;
  public categories: string[]; 
  public constructor(
    name: string,
    categories: string[]
  ) {
    this.name = name;
    this.categories = categories;
  }
}