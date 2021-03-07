import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from '../../../recipes/recipes.component';
import {ShoppingListComponent} from '../../../shopping-list/shopping-list.component';

const routes: Routes = [{
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
