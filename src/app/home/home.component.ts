import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.css' ]
})
export class HomeComponent {
    recipeImages: string[] = [
         'https://www.tasteatlas.com/Images/Dishes/02d1f86ec5cd4f0db503f0653dc0c7e2.jpg', 
         'https://2.bp.blogspot.com/-UvSdiRGj2Bg/W_piPHU2SaI/AAAAAAAAAGs/SgNHBZnJ44kqJn35JvehIPN0-Ce96sdlACLcBGAs/s1600/indian-mumbai-street-food9.png',
         'https://i2.wp.com/www.neehees.com/wp-content/uploads/2019/02/Pani-Puri-family-basket-WEB.png?fit=1200%2C720',
         'http://pngimg.com/uploads/pizza/pizza_PNG44084.png',
         'https://previews.123rf.com/images/rakeshpicholiya/rakeshpicholiya1410/rakeshpicholiya141000100/32997594-indian-rajasthani-traditional-dal-bati-thali.jpg',
         'https://cellar.gofoodpng.biz/wp-content/uploads/2017/02/Aloo-Paratha.jpg',
         'https://beingchefblog.files.wordpress.com/2016/04/img_0350-660x440.jpg?w=660&h=440',
         'https://pngimage.net/wp-content/uploads/2018/06/misal-pav-png-3.png'
    ];
    recipeNames: string[] = [
        'Masala Dosa',
        'Pav Bhaji',
        'Gol Gappa',
        'Pizza',
        'Dal Baati',
        'Aloo Paratha',
        'Sabudana Khichdi',
        'Misal Pav'
    ];

    recipeImageNameList: { images: string, names: string } [] = [];
    recipeImageNameObj: { images: string, names: string };

    constructor( private recipeService: RecipeService ) {

        /* for( let i = 0; i < this.recipeImages.length; i++ ) {
            this.recipeImageNameObj = {
                images: this.recipeImages[ i ],
                names: this.recipeNames[ i ]
            }
                
            this.recipeService.fnAddHomeRecipeImageName( this.recipeImageNameObj );
            this.recipeImageNameList.push( this.recipeImageNameObj );
        } */
        
    }
}