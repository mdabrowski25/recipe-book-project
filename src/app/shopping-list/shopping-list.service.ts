import { Injectable } from '@angular/core';
import {ShoppingListModule} from './shopping-list.module';

@Injectable({
  providedIn: ShoppingListModule
})
export class ShoppingListService {

  constructor() { }
}
