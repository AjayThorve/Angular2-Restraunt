"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ShoppingEditComponent = (function () {
    function ShoppingEditComponent() {
        this.newIngredient = new core_1.EventEmitter();
    }
    ShoppingEditComponent.prototype.ngOnInit = function () {
    };
    ShoppingEditComponent.prototype.onClickAdd = function (name, amount) {
        this.newIngredient.emit({
            name: name,
            amount: amount
        });
    };
    return ShoppingEditComponent;
}());
__decorate([
    core_1.Output()
], ShoppingEditComponent.prototype, "newIngredient", void 0);
ShoppingEditComponent = __decorate([
    core_1.Component({
        selector: 'app-shopping-edit',
        templateUrl: './shopping-edit.component.html',
        styleUrls: ['./shopping-edit.component.css']
    })
], ShoppingEditComponent);
exports.ShoppingEditComponent = ShoppingEditComponent;
