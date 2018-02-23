var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
var CheckboxSelectAllComponent = (function () {
    function CheckboxSelectAllComponent() {
    }
    return CheckboxSelectAllComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Grid)
], CheckboxSelectAllComponent.prototype, "grid", void 0);
__decorate([
    Input(),
    __metadata("design:type", DataSource)
], CheckboxSelectAllComponent.prototype, "source", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CheckboxSelectAllComponent.prototype, "isAllSelected", void 0);
CheckboxSelectAllComponent = __decorate([
    Component({
        selector: '[ng2-st-checkbox-select-all]',
        template: "\n    <input type=\"checkbox\" [ngModel]=\"isAllSelected\">\n  ",
    })
], CheckboxSelectAllComponent);
export { CheckboxSelectAllComponent };
//# sourceMappingURL=checkbox-select-all.component.js.map