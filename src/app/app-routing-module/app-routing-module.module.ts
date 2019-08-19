import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from '../recipes/recipes.component';
import {ShoppingListComponent} from '../shopping-list/shopping-list.component';
import {RecipeStartComponent} from '../recipes/recipe-start/recipe-start.component';
import {ReipeDetailComponent} from '../recipes/reipe-detail/reipe-detail.component';
import {RecipeEditeComponent} from '../recipes/recipe-edite/recipe-edite.component';


const appRoutes: Routes = [

  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new' , component:RecipeEditeComponent},
      {path: ':id' , component:ReipeDetailComponent},
      {path: ':id/edit' , component:RecipeEditeComponent},


    ]
  },
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
    //RouterModule.forRoot(appRoutes, {useHash: true})

  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModuleModule {
}
