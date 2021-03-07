import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from '../shared/models/recipe.model';
import {Ingredient} from '../shared/models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  constructor() {
  }

  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
      'A super-tasty Schnitzel',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
