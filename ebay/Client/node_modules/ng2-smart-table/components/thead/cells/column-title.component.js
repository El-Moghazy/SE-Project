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
import { Column } from '../../../lib/data-set/column';
import { DataSource } from '../../../lib/data-source/data-source';
var ColumnTitleComponent = (function () {
    function ColumnTitleComponent() {
        this.sort = new EventEmitter();
    }
    return ColumnTitleComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Column)
], ColumnTitleComponent.prototype, "column", void 0);
__decorate([
    Input(),
    __metadata("design:type", DataSource)
], ColumnTitleComponent.prototype, "source", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ColumnTitleComponent.prototype, "sort", void 0);
ColumnTitleComponent = __decorate([
    Component({
        selector: 'ng2-st-column-title',
        template: "\n    <div class=\"ng2-smart-title\">\n      <ng2-smart-table-title [source]=\"source\" [column]=\"column\" (sort)=\"sort.emit($event)\"></ng2-smart-table-title>\n    </div>\n  ",
    })
], ColumnTitleComponent);
export { ColumnTitleComponent };
//# sourceMappingURL=column-title.component.js.map