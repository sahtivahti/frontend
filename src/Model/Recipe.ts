import Hop from './Hop';

export default class Recipe {
  constructor(data?: any) {
    Object.assign(this, data);
  }

  public id: number = 0;
  public name: string = '';
  public author: string = '';
  public style: string = '';
  public batchSize: number = 0;
  public createdAt: Date|null = null;
  public updatedAt: Date|null = null;
  public hops: Hop[] = [];
}