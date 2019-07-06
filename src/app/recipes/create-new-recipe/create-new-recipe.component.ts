import { Component, ViewChild, ElementRef } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router } from '@angular/router';

@Component({
    'selector': 'app-create-new-recipe',
    'templateUrl': './create-new-recipe.component.html',
    'styleUrls': [ './create-new-recipe.component.css' ]
})

/**
 *  
 * The below component is responsible to create a new recipe.
 * 
 */


export class CreateNewRecipeComponent {
    @ViewChild( "inputRecipeName" ) inputRecipeNameRef: ElementRef;
    @ViewChild( "inputRecipeDescription" ) inputRecipeDescriptionRef: ElementRef;
    @ViewChild( "inputRecipeIngredients" ) inputRecipeIngredientsRef: ElementRef;
    @ViewChild( "inputRecipeMadeBy" ) inputRecipeMadeByRef: ElementRef;
    @ViewChild( "inputRecipeTimeRequired" ) inputRecipeTimeRequiredRef: ElementRef;
    @ViewChild( "inputRecipeServings" ) inputRecipeServingsRef: ElementRef;

    recipe: { name: string, description: string, ingredients: string[], colorAssigned: string[], 
        madeBy: string,  timeRequired: string, servings: number };
    recipeName: string;
    recipeDescription: string;
    recipeIngredients: string;
    recipeMadeBy: string;
    recipeTimeRequired: string;
    recipeServings: number;

    recipeIngredientsChips: string[] = [];
    colorAssignedToChips: string[] = [];

    constructor( private recipeService: RecipeService, private router: Router ) {
    }

    fnAddIngredient() {
        this.recipeIngredients = this.inputRecipeIngredientsRef.nativeElement.value;

        if( this.recipeIngredients.trim().length > 0  ) {
            this.recipeIngredientsChips.push( this.recipeIngredients );
            this.colorAssignedToChips.push( this.recipeService.backgroundColors[ 
                this.recipeService.fnGenerateRandomNumberForColors() ]);

            // Clearing the input value.
            this.inputRecipeIngredientsRef.nativeElement.value = "";
        }
    }

    fnClearIngredient( indexToDelete: number ) {
        this.recipeIngredientsChips.splice( indexToDelete, 1 );
        this.colorAssignedToChips.splice( indexToDelete, 1 );
    }

    fnCreateNewRecipe() {
        console.log( "Recipe name: " +this.inputRecipeNameRef.nativeElement.value );

        this.recipeName = this.inputRecipeNameRef.nativeElement.value;
        this.recipeDescription = this.inputRecipeDescriptionRef.nativeElement.value;
        // this.recipeIngredients = this.inputRecipeIngredientsRef.nativeElement.value;
        this.recipeMadeBy = this.inputRecipeMadeByRef.nativeElement.value;
        this.recipeTimeRequired = this.inputRecipeTimeRequiredRef.nativeElement.value;
        this.recipeServings = this.inputRecipeServingsRef.nativeElement.value;

        if( this.recipeName.trim().length == 0 ) {
            alert( "Please enter Recipe Name..." );
        } else if( this.recipeDescription.trim().length == 0 ) {
            alert( "Please enter Recipe Description..." );
        } /* else if( this.recipeIngredients.trim().length == 0 ) {
            alert( "Please enter Recipe Ingredients..." );
        } */ else if( this.recipeMadeBy.trim().length == 0 ) {
            alert( "Please enter Recipe Made by..." );
        } else if( this.recipeTimeRequired.trim().length == 0 ) {
            alert( "Please enter Recipe Time required..." );
        } else if( this.recipeServings == null || this.recipeServings < 1 ) {
            alert( "Please enter Recipe Servings..." );
        } else {
            /* var enteredIngredients: string[] = this.recipeIngredients.split( ',' );
            var storingIngredients: string[] = [];
            var colorAssigned: string[] = [];

            for( let i = 0; i < enteredIngredients.length; i++ ) {
                if( enteredIngredients[ i ].trim().length > 0 ) {
                    storingIngredients.push( enteredIngredients[ i ]);
                    colorAssigned.push( this.recipeService.backgroundColors[ 
                        this.recipeService.fnGenerateRandomNumberForColors() ]);
                }
            }

            console.log( colorAssigned ); */

            this.recipe = {
                name: this.recipeName,
                description: this.recipeDescription,
                ingredients: this.recipeIngredientsChips,
                madeBy: this.recipeMadeBy,
                colorAssigned: this.colorAssignedToChips,
                timeRequired: this.recipeTimeRequired,
                servings: this.recipeServings
            }
    
            this.recipeService.fnAddNewRecipe( this.recipe );
    
            this.fnClearFields();

            alert( "Hurray, your Recipe has been added..." );
    
            this.router.navigate([ '/recipes' ]);
        }
    }

    fnClearFields() {
        this.inputRecipeNameRef.nativeElement.value = "";
        this.inputRecipeDescriptionRef.nativeElement.value = "";
        this.inputRecipeIngredientsRef.nativeElement.value = "";
        this.inputRecipeMadeByRef.nativeElement.value = "";
        this.inputRecipeTimeRequiredRef.nativeElement.value = "";
        this.inputRecipeServingsRef.nativeElement.value = "";
    }
}