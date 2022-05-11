import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'This is a simply test',
      'https://c.stocksy.com/a/xym500/z9/1379931.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://media-cdn.tripadvisor.com/media/photo-p/0c/9f/b4/11/kimchi-burger-with-bacon.jpg',
      [
        new Ingredient('Bread', 1),
        new Ingredient('Bacon', 1),
        new Ingredient('Egg', 1),
        new Ingredient('Pork', 0.5),
        new Ingredient('Burger Meat',1),
        new Ingredient('Cheese', 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
