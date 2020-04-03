import Hop from './Hop';
import Fermentable from './Fermentable';

export default class Recipe {
  constructor(data?: any) {
    Object.assign(this, data);
  }

  public id: string = '';
  public name: string = '';
  public author: string|undefined;
  public style: string|undefined;
  public batchSize: number = 0;
  public createdAt: Date|null = null;
  public updatedAt: Date|null = null;
  public hops: Hop[] = [];
  public fermentables: Fermentable[] = [];
  public ibu: number|undefined;
  public color: number|undefined;
  public abv: number|undefined;
  public colorName: string|undefined;
}
