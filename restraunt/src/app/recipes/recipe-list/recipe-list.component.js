"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var recipe_model_1 = require("../recipe.model");
var RecipeListComponent = (function () {
    function RecipeListComponent() {
        this.RecipeItemEmit = new core_1.EventEmitter();
        this.recipes = [
            new recipe_model_1.Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
            new recipe_model_1.Recipe('A Test Recipe2', 'This is simply a test2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeUt6OuuuzP6rX82a66X8RrWoVbcfLOTSCmygJ9RgiwT-G0d20iw')
        ];
    }
    RecipeListComponent.prototype.ngOnInit = function () {
    };
    RecipeListComponent.prototype.onItemClick = function (recipe) {
        this.RecipeItemEmit.emit(recipe);
    };
    return RecipeListComponent;
}());
__decorate([
    core_1.Output()
], RecipeListComponent.prototype, "RecipeItemEmit", void 0);
RecipeListComponent = __decorate([
    core_1.Component({
        selector: 'app-recipe-list',
        templateUrl: './recipe-list.component.html',
        styleUrls: ['./recipe-list.component.css']
    })
], RecipeListComponent);
exports.RecipeListComponent = RecipeListComponent;
