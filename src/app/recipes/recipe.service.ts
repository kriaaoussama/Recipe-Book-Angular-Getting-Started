import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingService} from '../shopping-list/shopping.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(1, 'Recipe A', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [new Ingredient('meat', 1), new Ingredient('French Fries', 20)]),
    new Recipe(2, 'Recipe B', 'This is another simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [new Ingredient('Buns', 5), new Ingredient('Meat', 10)]),
    new Recipe(3, 'Recipe C', 'This is another simply a test V2', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/crab-asparagus-pappardelle.jpg', [new Ingredient('dishes', 15), new Ingredient('Meat', 10)])
  ];

  constructor(private shoppingServices: ShoppingService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }


  onAddIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingServices.addIngredientByShop(ingredients);
  }

  findById(id: number) {
   const recipe:Recipe = this.recipes.find(
     (rec) => { return rec.id === id;}
    );
   return recipe;
  }


}

