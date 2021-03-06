"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var CourseBoxComponent = (function () {
    function CourseBoxComponent() {
    }
    return CourseBoxComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CourseBoxComponent.prototype, "course", void 0);
CourseBoxComponent = __decorate([
    core_1.Component({
        selector: 'coursebox',
        template: "\n     <div class=\"course\">\n        <img [src]=\"course.image\">\n        <h2>{{course.name}}</h2>\n        <span class=\"price\">\n          {{course.price | currency : 'USD': true :'1.2-2'}}\n        </span>\n        <button>Agregar al carrito</button>\n      </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], CourseBoxComponent);
exports.CourseBoxComponent = CourseBoxComponent;
//# sourceMappingURL=coursebox.component.js.map