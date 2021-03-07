import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {RoutingModule} from './shared/modules/routing/routing.module';
import {FormsModule} from '@angular/forms';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {RecipesModule} from './recipes/recipes.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ShoppingListModule,
    RecipesModule,
    RoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
