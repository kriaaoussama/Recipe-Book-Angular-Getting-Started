import {Component, OnChanges, OnInit, SimpleChange} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {query} from '@angular/animations';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-reipe-detail',
  templateUrl: './reipe-detail.component.html',
  styleUrls: ['./reipe-detail.component.css']
})
export class ReipeDetailComponent implements OnInit, OnChanges {

  recipeDeatail: Recipe;
  idRecipe: number;
  paramsSubscription: Subscription;

  constructor(private  recipesServices: RecipeService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.idRecipe = parseInt(params['id']);
        this.recipeDeatail = this.recipesServices.findById(this.idRecipe);
        console.log(this.recipeDeatail);
      }
    );

  }

  // @ts-ignore
  ngOnChanges(changes: SimpleChange) {
    console.log(changes);
  }

  onAddToShoppingList() {
    this.recipesServices.onAddIngredientsToShoppingList(this.recipeDeatail.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['../', this.idRecipe, 'edit'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
