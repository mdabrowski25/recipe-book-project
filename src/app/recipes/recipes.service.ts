import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from '../shared/models/recipe.model';
import {RecipesModule} from './recipes.module';

@Injectable({
  providedIn: RecipesModule
})
export class RecipesService {
  constructor() {
  }

  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Simple test', 'assets/img/kotlet.jpg'),
    new Recipe('Test Recipe 2', 'Simple test 2', 'assets/img/kotlet.jpg')
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
