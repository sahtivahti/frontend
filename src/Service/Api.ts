import config from './AppConfig';
import Recipe from '../Model/Recipe';
import { getTokenSilently } from '../Auth0Connect';
import axios, { AxiosInstance } from 'axios';

class Api {
  private client: any = null;

  public async getRecipes(): Promise<Recipe[]> {
    const client: AxiosInstance = await this.createClient();

    const response = await client.get<Recipe[]>('/v1/recipe');
    
    return response.data.map((x: any) => new Recipe(x));
  }

  public async createRecipe(recipe: Recipe): Promise<Recipe> {
    const client: AxiosInstance = await this.createClient();

    const response = await client.post<Recipe>('/v1/recipe', recipe);

    return new Recipe(response.data);
  }

  public async getRecipeDetailsById(id: number): Promise<Recipe> {
    const client: AxiosInstance = await this.createClient();
    
    const response = await client.get<Recipe>('/v1/recipe/' + id);

    return new Recipe(response.data);
  }

  public async removeRecipeById(id: number): Promise<void> {
    const client: AxiosInstance = await this.createClient();

    await client.delete('/v1/recipe/' + id);
  }

  private async createClient(): Promise<any> {
    if (!this.client) {
      const token = await getTokenSilently();
    
      this.client = axios.create({
        baseURL: config.api.baseUri,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return Promise.resolve(this.client);
  }
}

const api = new Api();

export default api;