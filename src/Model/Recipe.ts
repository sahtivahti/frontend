export default class Recipe {
  constructor(data?: any) {
    Object.assign(this, data);
  }

  public id: number = 0;
  public name: string = '';
  public author: string = '';
  public createdAt: Date|null = null;
  public updatedAt: Date|null = null;
}