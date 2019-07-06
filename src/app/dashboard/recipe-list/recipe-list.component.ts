import { Component } from "@angular/core";
import { RecipeService } from 'src/app/services/recipe.service';
import { Router } from '@angular/router';

/**
 * 'selector'    -> It represents the UI tag that needs to be added to HTML file,
 * 'templateUrl' -> It represents the HTML file which this component uses.
 * 'styleUrls'   -> It represents the CSS file which this component uses.
 */

@Component ( {
    'selector': 'app-recipe-list',
    'templateUrl': './recipe-list.component.html',
    'styleUrls': ['./recipe-list.component.css' ]
})

/**
 *  
 * The below component is responsible to display the list of all the 
    recipes that have been fetched.
 * 
 */

export class RecipeListComponent {
    recipeList: { name: string, description: string, ingredients: string[], colorAssigned: string[], 
        madeBy: string, timeRequired: string, servings: number } [] = [];

    recipeImages: string[];
    ingredientColor: string;

    constructor( private recipeService: RecipeService, private router: Router ) {
        this.recipeList = this.recipeService.recipes;
        this.recipeImages = this.recipeService.recipeImages;

        console.log( "Recipe list: " +this.recipeList.length );
    }

    fnAddNewRecipeRedirect() {
        this.router.navigate([ '/recipes/add' ]);
    }
}