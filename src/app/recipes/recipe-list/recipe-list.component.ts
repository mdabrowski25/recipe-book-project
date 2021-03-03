import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected2 = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Simple test', 'assets/img/gessler.jpg'),
    new Recipe('Test Recipe', 'Simple test', 'assets/img/gessler.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe): void {
    this.recipeSelected2.emit(recipe);
  }
}
