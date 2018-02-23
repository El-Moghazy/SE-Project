var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../lib/grid';
import { DataSource } from '../../lib/data-source/data-source';
var Ng2SmartTableTheadComponent = (function () {
    function Ng2SmartTableTheadComponent() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
        this.create = new EventEmitter();
        this.filter = new EventEmitter();
    }
    Ng2SmartTableTheadComponent.prototype.ngOnChanges = function () {
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
    };
    return Ng2SmartTableTheadComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Grid)
], Ng2SmartTableTheadComponent.prototype, "grid", void 0);
__decorate([
    Input(),
    __metadata("design:type", DataSource)
], Ng2SmartTableTheadComponent.prototype, "source", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], Ng2SmartTableTheadComponent.prototype, "isAllSelected", void 0);
__decorate([
    Input(),
    __metadata("design:type", EventEmitter)
], Ng2SmartTableTheadComponent.prototype, "createConfirm", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTheadComponent.prototype, "sort", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTheadComponent.prototype, "selectAllRows", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTheadComponent.prototype, "create", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTheadComponent.prototype, "filter", void 0);
Ng2SmartTableTheadComponent = __decorate([
    Component({
        selector: '[ng2-st-thead]',
        template: "<tr ng2-st-thead-titles-row *ngIf=\"!isHideHeader\" class=\"ng2-smart-titles\" [grid]=\"grid\" [isAllSelected]=\"isAllSelected\" [source]=\"source\" (sort)=\"sort.emit($event)\" (selectAllRows)=\"selectAllRows.emit($event)\"></tr><tr ng2-st-thead-filters-row *ngIf=\"!isHideSubHeader\" class=\"ng2-smart-filters\" [grid]=\"grid\" [source]=\"source\" (create)=\"create.emit($event)\" (filter)=\"filter.emit($event)\"></tr><tr ng2-st-thead-form-row *ngIf=\"grid.createFormShown\" [grid]=\"grid\" [createConfirm]=\"createConfirm\"></tr>",
    })
], Ng2SmartTableTheadComponent);
export { Ng2SmartTableTheadComponent };
//# sourceMappingURL=thead.component.js.map