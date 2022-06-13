import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  subscriptionIngredient: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscriptionIngredient = this.shoppingListService.ingredientChangeEvent.subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients);
  }

  onEditItem(index: number): void {
    this.shoppingListService.statedIngredientEvent.next(index);
  }

  ngOnDestroy(): void {
    this.subscriptionIngredient.unsubscribe();
  }
}
