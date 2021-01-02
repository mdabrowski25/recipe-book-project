import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Simple test', 'assets/img/gessler.jpg'),
    new Recipe('Test Recipe', 'Simple test', 'assets/img/gessler.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
