import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-reipe-list',
  templateUrl: './reipe-list.component.html',
  styleUrls: ['./reipe-list.component.css']
})
export class ReipeListComponent implements OnInit {

  //@Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [];


  constructor(private recipesServices: RecipeService, private router: Router, private route :ActivatedRoute) {
  }


  ngOnInit() {
    this.recipes = this.recipesServices.getRecipes();
  }

  onShow() {
  }

  onNewRecipe() {
      this.router.navigate(['new'],{relativeTo: this.route})
  }

  /*onRecipeSelected(event: Recipe){
     this.recipeWasSelected.emit(event);
  }*/
}
