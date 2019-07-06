export class RecipeService {
    recipes: { name: string, description: string, ingredients: string[], colorAssigned: string[], madeBy: string, 
        timeRequired: string, servings: number  } [] = [];
    // backgroundColors: string[] = [ 'primary', 'success', 'warning', 'info', 'danger' ];
    backgroundColors: string[] = [ '#EF9A9A', '#CE93D8', '#B39DDB', '#9FA8DA', '#90CAF9', '#81D4FA', '#80DEEA', '#DCEDC8', '#C8E6C9', '#F0F4C3', '#FFE0B2', '#FFCCBC' ];
    homeRecipeImageName: { images: string, names: string } [] = [];

    recipeImages: string[] = [ 
        'https://www.cookwithmanali.com/wp-content/uploads/2019/05/Paneer-Butter-Masala-310x470.jpg',
        'https://www.cookwithmanali.com/wp-content/uploads/2019/05/Sambar-Recipe-310x470.jpg', 
        'https://www.cookwithmanali.com/wp-content/uploads/2015/01/Kashmiri-Dum-Aloo-Recipe-310x517.jpg',
        'https://www.cookwithmanali.com/wp-content/uploads/2019/04/Restaurant-Style-Dal-Makhani-310x470.jpg',
        'https://www.cookwithmanali.com/wp-content/uploads/2019/04/Aloo-Methi-310x470.jpg',
        'https://www.cookwithmanali.com/wp-content/uploads/2018/05/Sabudana-Khichdi-310x470.jpg',
        'https://www.cookwithmanali.com/wp-content/uploads/2017/03/Litti-Chokha-310x470.jpg' ];

        fnAddHomeRecipeImageName( homeRecipe: { images: string, names: string }) {
            this.homeRecipeImageName.push( homeRecipe );
        }

    fnAddNewRecipe( newRecipe: { name: string, description: string, ingredients: string[], 
        colorAssigned: string[], madeBy: string, timeRequired: string, servings: number }) {
        this.recipes.push( newRecipe );

        console.log( this.recipes );
    }

    fnGenerateRandomNumberForColors(): number {
        let randomNumber = Math.floor( Math.random() * this.backgroundColors.length );

        console.log( "Random number: " +randomNumber+ ", Len: " +this.backgroundColors.length );

        return randomNumber;
    }
}