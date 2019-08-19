import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingService} from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;

  @ViewChild('amountInput') amountInputRef: ElementRef;

  //@Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingServices: ShoppingService) { }

  ngOnInit() {
  }


  onAddItem () {
       let ingredient = new Ingredient(this.nameInputRef.nativeElement.value,parseInt(this.amountInputRef.nativeElement.value));
       this.shoppingServices.addIngredient(ingredient);
  }
}
