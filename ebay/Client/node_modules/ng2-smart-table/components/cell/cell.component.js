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
import { Cell } from '../../lib/data-set/cell';
import { Row } from '../../lib/data-set/row';
var CellComponent = (function () {
    function CellComponent() {
        this.inputClass = '';
        this.mode = 'inline';
        this.isInEditing = false;
        this.edited = new EventEmitter();
    }
    CellComponent.prototype.onEdited = function (event) {
        if (this.isNew) {
            this.grid.create(this.grid.getNewRow(), this.createConfirm);
        }
        else {
            this.grid.save(this.row, this.editConfirm);
        }
    };
    return CellComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Grid)
], CellComponent.prototype, "grid", void 0);
__decorate([
    Input(),
    __metadata("design:type", Row)
], CellComponent.prototype, "row", void 0);
__decorate([
    Input(),
    __metadata("design:type", EventEmitter)
], CellComponent.prototype, "editConfirm", void 0);
__decorate([
    Input(),
    __metadata("design:type", EventEmitter)
], CellComponent.prototype, "createConfirm", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CellComponent.prototype, "isNew", void 0);
__decorate([
    Input(),
    __metadata("design:type", Cell)
], CellComponent.prototype, "cell", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CellComponent.prototype, "inputClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CellComponent.prototype, "mode", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CellComponent.prototype, "isInEditing", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CellComponent.prototype, "edited", void 0);
CellComponent = __decorate([
    Component({
        selector: 'ng2-smart-table-cell',
        template: "\n    <table-cell-view-mode *ngIf=\"!isInEditing\" [cell]=\"cell\"></table-cell-view-mode>\n    <table-cell-edit-mode *ngIf=\"isInEditing\" [cell]=\"cell\"\n                          [inputClass]=\"inputClass\"\n                          (edited)=\"onEdited($event)\">\n    </table-cell-edit-mode>\n  ",
    })
], CellComponent);
export { CellComponent };
//# sourceMappingURL=cell.component.js.map