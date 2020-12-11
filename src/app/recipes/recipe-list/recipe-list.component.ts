import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Simple test', 'https://memy.pl/show/big/uploads/Post/1456/14342964622259.jpg'),
    new Recipe('Test Recipe', 'Simple test', 'https://memy.pl/show/big/uploads/Post/1456/14342964622259.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
