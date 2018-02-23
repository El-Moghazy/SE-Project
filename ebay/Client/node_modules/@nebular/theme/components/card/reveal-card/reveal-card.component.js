import { Component, Input, HostBinding } from '@angular/core';
/**
 * Reveal card component.
 *
 * ![image](assets/images/components/reveal-card.gif)
 *
 * @example
 *
 * ```
 * <nb-reveal-card>
 *   <nb-card-front>
 *     <nb-card><nb-card-body>Front Card</nb-card-body></nb-card>
 *   </nb-card-front>
 *   <nb-card-back>
 *     <nb-card><nb-card-body>Back Card</nb-card-body></nb-card>
 *   </nb-card-back>
 * </nb-reveal-card>
 * ```
 */
var NbRevealCardComponent = /** @class */ (function () {
    function NbRevealCardComponent() {
        /**
           * Reveal state
           * @type boolean
           */
        this.revealed = false;
    }
    NbRevealCardComponent.prototype.toggleReveal = function () {
        this.revealed = !this.revealed;
    };
    NbRevealCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nb-reveal-card',
                    styles: [":host{display:block;position:relative}:host.revealed .second-card-container{top:0;transition:none}:host.revealed .second-card-container /deep/ nb-card-back{top:0}:host.revealed .reveal-button{transform:none}:host /deep/ nb-card-front{display:block;height:100%}:host .second-card-container{position:absolute;top:100%;right:0;left:0;overflow:hidden;transition:top 0s 0.5s}:host .second-card-container /deep/ nb-card-back{position:absolute;left:0;top:100%;width:100%;transition:top 0.5s}:host .reveal-button{cursor:pointer;position:absolute;right:0;bottom:0;transform:rotate(180deg);transition:transform 0.3s} "],
                    template: "\n    <ng-content select=\"nb-card-front\"></ng-content>\n    <div class=\"second-card-container\">\n      <ng-content select=\"nb-card-back\"></ng-content>\n    </div>\n    <a class=\"reveal-button\" (click)=\"toggleReveal()\">\n      <i class=\"nb-arrow-dropdown\" aria-hidden=\"true\"></i>\n    </a>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbRevealCardComponent.ctorParameters = function () { return []; };
    NbRevealCardComponent.propDecorators = {
        "revealed": [{ type: Input }, { type: HostBinding, args: ['class.revealed',] },],
    };
    return NbRevealCardComponent;
}());
export { NbRevealCardComponent };
//# sourceMappingURL=reveal-card.component.js.map