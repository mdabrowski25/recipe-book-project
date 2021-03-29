import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {PathNotFoundComponent} from './path-not-found/path-not-found.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  {
    component: RecipesComponent,
    path: 'recipes'
  }, {
    component: ShoppingListComponent,
    path: 'shopping-list'
  }, {
    component: PathNotFoundComponent,
    path: 'path-not-found'
  }, {
    path: '**',
    redirectTo: 'path-not-found'
  }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {
}
