/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input, HostBinding, } from '@angular/core';
import { convertToBoolProperty } from '../helpers';
/**
 * Action item, display a link with an icon, or any other content provided instead.
 */
var NbActionComponent = /** @class */ (function () {
    function NbActionComponent() {
        this.disabledValue = false;
    }
    Object.defineProperty(NbActionComponent.prototype, "disabled", {
        set: /**
           * Disables the item (changes item opacity and mouse cursor)
           * @type boolean
           */
        function (val) {
            this.disabledValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    NbActionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nb-action',
                    template: "\n    <a class=\"icon-container\" href=\"#\" *ngIf=\"icon; else showContent\" (click)=\"$event.preventDefault()\">\n      <i class=\"control-icon {{ icon }}\"></i>\n    </a>\n    <ng-template #showContent>\n      <ng-content></ng-content>\n    </ng-template>\n    <nb-badge *ngIf=\"badgeText\" [text]=\"badgeText\" [status]=\"badgeStatus\" [position]=\"badgePosition\"></nb-badge>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbActionComponent.ctorParameters = function () { return []; };
    NbActionComponent.propDecorators = {
        "disabledValue": [{ type: HostBinding, args: ['class.disabled',] },],
        "icon": [{ type: Input },],
        "disabled": [{ type: Input },],
        "badgeText": [{ type: Input },],
        "badgeStatus": [{ type: Input },],
        "badgePosition": [{ type: Input },],
    };
    return NbActionComponent;
}());
export { NbActionComponent };
/**
 * Shows a horizontal list of actions, available in multiple sizes
 * Aligns items vertically.
 *
 * @styles
 *
 * actions-font-size:
 * actions-font-family:
 * actions-line-height:
 * actions-fg:
 * actions-bg:
 * actions-separator:
 * actions-padding:
 * actions-size-small:
 * actions-size-medium:
 * actions-size-large:
 */
var NbActionsComponent = /** @class */ (function () {
    function NbActionsComponent() {
        this.fullWidthValue = false;
    }
    Object.defineProperty(NbActionsComponent.prototype, "small", {
        get: function () {
            return this.sizeValue === NbActionsComponent.SIZE_SMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "medium", {
        get: function () {
            return this.sizeValue === NbActionsComponent.SIZE_MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "large", {
        get: function () {
            return this.sizeValue === NbActionsComponent.SIZE_LARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "size", {
        set: /**
           * Size of the component, small|medium|large
           * @type string
           */
        function (val) {
            this.sizeValue = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "inverse", {
        set: /**
           * Makes colors inverse based on current theme
           * @type boolean
           */
        function (val) {
            this.inverseValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbActionsComponent.prototype, "fullWidth", {
        set: /**
           * Component will fill full width of the container
           * @type boolean
           */
        function (val) {
            this.fullWidthValue = convertToBoolProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    NbActionsComponent.SIZE_SMALL = 'small';
    NbActionsComponent.SIZE_MEDIUM = 'medium';
    NbActionsComponent.SIZE_LARGE = 'large';
    NbActionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nb-actions',
                    styles: [":host{display:flex;align-items:center}:host /deep/ nb-action{display:flex;flex-wrap:wrap;align-items:center;position:relative}:host /deep/ nb-action:first-child{border-left:none !important}:host /deep/ nb-action i.control-icon:hover{cursor:pointer}:host /deep/ nb-action.disabled{cursor:not-allowed}:host /deep/ nb-action.disabled>*{opacity:0.5}:host /deep/ nb-action.disabled a,:host /deep/ nb-action.disabled i{cursor:not-allowed !important} "],
                    template: "\n    <ng-content select=\"nb-action\"></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbActionsComponent.ctorParameters = function () { return []; };
    NbActionsComponent.propDecorators = {
        "inverseValue": [{ type: HostBinding, args: ['class.inverse',] },],
        "small": [{ type: HostBinding, args: ['class.small',] },],
        "medium": [{ type: HostBinding, args: ['class.medium',] },],
        "large": [{ type: HostBinding, args: ['class.large',] },],
        "fullWidthValue": [{ type: HostBinding, args: ['class.full-width',] },],
        "size": [{ type: Input },],
        "inverse": [{ type: Input },],
        "fullWidth": [{ type: Input },],
    };
    return NbActionsComponent;
}());
export { NbActionsComponent };
//# sourceMappingURL=actions.component.js.map