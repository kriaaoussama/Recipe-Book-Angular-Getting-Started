import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  public recipeArrival:any = false;

  constructor(private recipesServices: RecipeService) {


  }

  ngOnInit() {
    this.recipesServices.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.recipeArrival=recipe;
      }
    );
  }


}
