import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes: Recipe[]=[
    new Recipe('A Test Recipe','This is simply a test','https://tse2.mm.bing.net/th?id=OIP.1VKUAtE4bCAIT8tSxITcwAHaKX&pid=Api&P=0&w=300&h=300'),
    new Recipe('A Test Recipe','This is simply a test','https://tse2.mm.bing.net/th?id=OIP.1VKUAtE4bCAIT8tSxITcwAHaKX&pid=Api&P=0&w=300&h=300')
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
