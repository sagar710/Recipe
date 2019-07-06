import { Component } from '@angular/core';

/**
 *  The selector 'app-root' is declared in the index.html file which is start 
 *  of our project.
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/**
 * This is the root component which is invoked initially.
 */
export class AppComponent {
  title = 'RecipeAssignment';
}