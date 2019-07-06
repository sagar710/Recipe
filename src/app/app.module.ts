import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './dashboard/recipe-list/recipe-list.component';
import { RecipeComponent } from './recipes/recipe.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { CreateNewRecipeComponent } from './recipes/create-new-recipe/create-new-recipe.component';
import { UpdateRecipeComponent } from './recipes/update-recipe/update-recipe.component';
import { RecipeService } from './services/recipe.service';
import { HomeComponent } from './home/home.component';


/**
 *  This file contains all the required details regarding project, such as which 
 *  components, services, etc. is being used, is declared here. It links to the 
 *  other of your project.
 */

 const appRoutes: Routes = [
  { path: '', component: HomeComponent },
   { path: 'recipes', component: RecipeListComponent },
   { path: 'recipes/add', component: CreateNewRecipeComponent },
   { path: '**', component: RecipeListComponent }
   /* { path: '**', redirectTo: '/', pathMatch: 'full' }   This line is used so that whenever user types invalid*/
 ]

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeComponent,
    RecipeDetailsComponent,
    CreateNewRecipeComponent,
    UpdateRecipeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot( appRoutes )
  ],
  providers: [
    RecipeService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
