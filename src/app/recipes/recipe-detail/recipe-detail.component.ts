import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;
    id: number;
    constructor(private recipesService: RecipesService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            this.id = +paramMap.get('id');
            this.recipe = this.recipesService.getRecipe(this.id);
            if (this.recipe === undefined) {
                this.router.navigate(['/error']).then(() => alert('No recipe found'));
            }
        });
    }

    onAddToShoppingList(): void {
        this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
    }
}
