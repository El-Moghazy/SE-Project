var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { Grid } from '../../lib/grid';
import { DataSource } from '../../lib/data-source/data-source';
var Ng2SmartTableTbodyComponent = (function () {
    function Ng2SmartTableTbodyComponent() {
        this.save = new EventEmitter();
        this.cancel = new EventEmitter();
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.custom = new EventEmitter();
        this.edited = new EventEmitter();
        this.userSelectRow = new EventEmitter();
        this.editRowSelect = new EventEmitter();
        this.multipleSelectRow = new EventEmitter();
        this.rowHover = new EventEmitter();
    }
    Ng2SmartTableTbodyComponent.prototype.ngOnChanges = function () {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.mode = this.grid.getSetting('mode');
        this.editInputClass = this.grid.getSetting('edit.inputClass');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.noDataMessage = this.grid.getSetting('noDataMessage');
    };
    return Ng2SmartTableTbodyComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Grid)
], Ng2SmartTableTbodyComponent.prototype, "grid", void 0);
__decorate([
    Input(),
    __metadata("design:type", DataSource)
], Ng2SmartTableTbodyComponent.prototype, "source", void 0);
__decorate([
    Input(),
    __metadata("design:type", EventEmitter)
], Ng2SmartTableTbodyComponent.prototype, "deleteConfirm", void 0);
__decorate([
    Input(),
    __metadata("design:type", EventEmitter)
], Ng2SmartTableTbodyComponent.prototype, "editConfirm", void 0);
__decorate([
    Input(),
    __metadata("design:type", Function)
], Ng2SmartTableTbodyComponent.prototype, "rowClassFunction", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "save", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "cancel", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "edit", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "delete", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "custom", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "edited", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "userSelectRow", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "editRowSelect", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "multipleSelectRow", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "rowHover", void 0);
Ng2SmartTableTbodyComponent = __decorate([
    Component({
        selector: '[ng2-st-tbody]',
        styles: [":host .ng2-smart-row.selected{background:rgba(0,0,0,.05)}:host .ng2-smart-row .ng2-smart-actions.ng2-smart-action-multiple-select{text-align:center} /*# sourceMappingURL=tbody.component.css.map */ "],
        template: "<tr *ngFor=\"let row of grid.getRows()\" (click)=\"userSelectRow.emit(row)\" (mouseover)=\"rowHover.emit(row)\" class=\"ng2-smart-row\" [className]=\"rowClassFunction(row)\" [ngClass]=\"{selected: row.isSelected}\"><td *ngIf=\"isMultiSelectVisible\" class=\"ng2-smart-actions ng2-smart-action-multiple-select\" (click)=\"multipleSelectRow.emit(row)\"><input type=\"checkbox\" class=\"form-control\" [ngModel]=\"row.isSelected\"></td><td *ngIf=\"!row.isInEditing && showActionColumnLeft\" class=\"ng2-smart-actions\"><ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom><ng2-st-tbody-edit-delete [grid]=\"grid\" [deleteConfirm]=\"deleteConfirm\" [editConfirm]=\"editConfirm\" (edit)=\"edit.emit(row)\" (delete)=\"delete.emit(row)\" (editRowSelect)=\"editRowSelect.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-edit-delete></td><td *ngIf=\"row.isInEditing && showActionColumnLeft\" class=\"ng2-smart-actions\"><ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel></td><td *ngFor=\"let cell of row.cells\"><ng2-smart-table-cell [cell]=\"cell\" [grid]=\"grid\" [row]=\"row\" [isNew]=\"false\" [mode]=\"mode\" [editConfirm]=\"editConfirm\" [inputClass]=\"editInputClass\" [isInEditing]=\"row.isInEditing\"></ng2-smart-table-cell></td><td *ngIf=\"row.isInEditing && showActionColumnRight\" class=\"ng2-smart-actions\"><ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel></td><td *ngIf=\"!row.isInEditing && showActionColumnRight\" class=\"ng2-smart-actions\"><ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom><ng2-st-tbody-edit-delete [grid]=\"grid\" [deleteConfirm]=\"deleteConfirm\" [editConfirm]=\"editConfirm\" [row]=\"row\" [source]=\"source\" (edit)=\"edit.emit(row)\" (delete)=\"delete.emit(row)\" (editRowSelect)=\"editRowSelect.emit($event)\"></ng2-st-tbody-edit-delete></td></tr><tr *ngIf=\"grid.getRows().length == 0\"><td [attr.colspan]=\"grid.getColumns().length + (isActionAdd || isActionEdit || isActionDelete)\">{{ noDataMessage }}</td></tr>",
    })
], Ng2SmartTableTbodyComponent);
export { Ng2SmartTableTbodyComponent };
//# sourceMappingURL=tbody.component.js.map