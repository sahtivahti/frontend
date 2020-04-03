export default class Hop {
  constructor(data?: any) {
    Object.assign(this, data);
  }

  public id: string = '';
  public name: string = '';
  public quantity: number = 0.0;
  public time: number = 0;
}
