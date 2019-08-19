import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-recipe-edite',
  templateUrl: './recipe-edite.component.html',
  styleUrls: ['./recipe-edite.component.css']
})
export class RecipeEditeComponent implements OnInit {

  paramsSubscription: Subscription;
  idRecipe: number;
  editMode = false;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.idRecipe = parseInt(params['id']);
        if (Number.isNaN(this.idRecipe)) {
          this.editMode = false;
        } else {
          this.editMode = true;
        }
        console.log(this.editMode);
      }
    );

  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
