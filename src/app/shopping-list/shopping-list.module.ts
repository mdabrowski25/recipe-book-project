import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';
import {ShoppingListComponent} from './shopping-list.component';



@NgModule({
  declarations: [
    ShoppingEditComponent,
    ShoppingListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShoppingListModule { }
