import { Component } from '@angular/core';
/**
 * Component intended to be used within the `<nb-flip-card>` and `<nb-reveal-card>` components.
 *
 * Use it as a container for the front card.
 */
var NbCardFrontComponent = /** @class */ (function () {
    function NbCardFrontComponent() {
    }
    NbCardFrontComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nb-card-front',
                    template: '<ng-content select="nb-card"></ng-content>',
                },] },
    ];
    /** @nocollapse */
    NbCardFrontComponent.ctorParameters = function () { return []; };
    return NbCardFrontComponent;
}());
export { NbCardFrontComponent };
/**
 * Component intended to be used within the `<nb-flip-card>` and `<nb-reveal-card>` components.
 *
 * Use it as a container for the back card.
 */
var NbCardBackComponent = /** @class */ (function () {
    function NbCardBackComponent() {
    }
    NbCardBackComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nb-card-back',
                    template: '<ng-content select="nb-card"></ng-content>',
                },] },
    ];
    /** @nocollapse */
    NbCardBackComponent.ctorParameters = function () { return []; };
    return NbCardBackComponent;
}());
export { NbCardBackComponent };
//# sourceMappingURL=shared.component.js.map