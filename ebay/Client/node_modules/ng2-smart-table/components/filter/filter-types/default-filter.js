var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Input, Output, EventEmitter } from '@angular/core';
import { Column } from '../../../lib/data-set/column';
var DefaultFilter = (function () {
    function DefaultFilter() {
        this.delay = 300;
        this.filter = new EventEmitter();
    }
    DefaultFilter.prototype.ngOnDestroy = function () {
        if (this.changesSubscription) {
            this.changesSubscription.unsubscribe();
        }
    };
    DefaultFilter.prototype.setFilter = function () {
        this.filter.emit(this.query);
    };
    return DefaultFilter;
}());
export { DefaultFilter };
__decorate([
    Input(),
    __metadata("design:type", String)
], DefaultFilter.prototype, "query", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DefaultFilter.prototype, "inputClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Column)
], DefaultFilter.prototype, "column", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DefaultFilter.prototype, "filter", void 0);
//# sourceMappingURL=default-filter.js.map