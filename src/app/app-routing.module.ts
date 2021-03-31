import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';


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
        component: ErrorPageComponent,
        path: 'error',
        data: {
            message: 'Page not found!'
        }
    }, {
        path: '**',
        redirectTo: 'error'
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
