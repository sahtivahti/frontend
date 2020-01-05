export default class Hop {
  constructor(data?: any) {
    Object.assign(this, data);
  }

  public name: string = '';
  public quantity: number = 0.0;
}