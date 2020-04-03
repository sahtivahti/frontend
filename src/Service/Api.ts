import Recipe from '../Model/Recipe';
import { getTokenSilently } from '../Auth0Connect';
import axios, { AxiosInstance } from 'axios';
import Hop from '../Model/Hop';
import Fermentable from '../Model/Fermentable';

class Api {
  private client: any = null;

  public async getRecipes(): Promise<Recipe[]> {
    const client: AxiosInstance = await this.createClient();

    const response = await client.get<Recipe[]>('/recipes');

    return response.data.map((x: any) => new Recipe(x));
  }

  public async createRecipe(recipe: Recipe): Promise<Recipe> {
    const client: AxiosInstance = await this.createClient();

    const response = await client.post<Recipe>('/recipes', recipe);

    return new Recipe(response.data);
  }

  public async updateRecipe(recipe: Recipe): Promise<Recipe> {
    const client: AxiosInstance = await this.createClient();

    recipe.batchSize = +recipe.batchSize;

    const response = await client.put<Recipe>('/recipes/' + recipe.id, recipe);

    return new Recipe(response.data);
  }

  public async getRecipeDetailsById(id: string): Promise<Recipe> {
    const client: AxiosInstance = await this.createClient();

    const response = await client.get<Recipe>('/recipes/' + id);

    return new Recipe(response.data);
  }

  public async removeRecipeById(id: string): Promise<void> {
    const client: AxiosInstance = await this.createClient();

    await client.delete('/recipes/' + id);
  }

  public async addHopToRecipe(hop: Hop, recipeId: string): Promise<Hop> {
    const client: AxiosInstance = await this.createClient();

    hop.quantity = +hop.quantity;

    const response = await client.post<Hop>('/recipes/' + recipeId + '/hop', hop);

    return new Hop(response.data);
  }

  public async removeHopFromRecipe(hopId: string, recipeId: string): Promise<Hop> {
    const client: AxiosInstance = await this.createClient();

    const response = await client.delete<Hop>('/recipes/' + recipeId + '/hop/' + hopId);

    return new Hop(response.data);
  }

  public async addFermentableToRecipe(fermentable: Fermentable, recipeId: string): Promise<Fermentable> {
    const client: AxiosInstance = await this.createClient();

    fermentable.quantity = +fermentable.quantity;
    fermentable.color = +fermentable.color;

    const response = await client.post<Fermentable>('/recipes/' + recipeId + '/fermentable', fermentable);

    return new Fermentable(response.data);
  }

  public async removeFermentableFromRecipe(fermentableId: string, recipeId: string): Promise<Fermentable> {
    const client: AxiosInstance = await this.createClient();

    const response = await client.delete<Fermentable>('/recipes/' + recipeId + '/fermentable/' + fermentableId);

    return new Fermentable(response.data);
  }

  private async createClient(): Promise<any> {
    if (!this.client) {
      const token = await getTokenSilently();

      this.client = axios.create({
        baseURL: 'https://rlylkxiomh.execute-api.eu-west-1.amazonaws.com/prod',
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
