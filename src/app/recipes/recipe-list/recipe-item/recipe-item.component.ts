import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../../shared/models/recipe.model';
import {RecipesService} from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipesService) {
  }

  ngOnInit(): void {
  }

  onSelected(): void {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
