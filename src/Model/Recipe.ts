export default class Recipe {
  constructor(data?: any) {
    Object.assign(this, data);
  }

  public id: number = 0;
  public name: string = '';
  public author: string = '';
}