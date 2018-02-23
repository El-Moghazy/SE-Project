/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input, HostBinding } from '@angular/core';
/**
 * Component intended to be used within  the `<nb-card>` component.
 * It adds styles for a preset header section.
 *
 * @styles
 *
 * card-header-font-family:
 * card-header-font-size:
 * card-header-font-weight:
 * card-header-fg:
 * card-header-fg-heading:
 * card-header-active-bg:
 * card-header-active-fg:
 * card-header-disabled-bg:
 * card-header-primary-bg:
 * card-header-info-bg:
 * card-header-success-bg:
 * card-header-warning-bg:
 * card-header-danger-bg:
 */
var NbCardHeaderComponent = /** @class */ (function () {
    function NbCardHeaderComponent() {
    }
    NbCardHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nb-card-header',
                    template: "<ng-content></ng-content>",
                },] },
    ];
    /** @nocollapse */
    NbCardHeaderComponent.ctorParameters = function () { return []; };
    return NbCardHeaderComponent;
}());
export { NbCardHeaderComponent };
/**
 * Component intended to be used within  the `<nb-card>` component.
 * Adds styles for a preset body section.
 */
var NbCardBodyComponent = /** @class */ (function () {
    function NbCardBodyComponent() {
    }
    NbCardBodyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nb-card-body',
                    template: "<ng-content></ng-content>",
                },] },
    ];
    /** @nocollapse */
    NbCardBodyComponent.ctorParameters = function () { return []; };
    return NbCardBodyComponent;
}());
export { NbCardBodyComponent };
/**
 * Component intended to be used within  the `<nb-card>` component.
 * Adds styles for a preset footer section.
 */
var NbCardFooterComponent = /** @class */ (function () {
    function NbCardFooterComponent() {
    }
    NbCardFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nb-card-footer',
                    template: "<ng-content></ng-content>",
                },] },
    ];
    /** @nocollapse */
    NbCardFooterComponent.ctorParameters = function () { return []; };
    return NbCardFooterComponent;
}());
export { NbCardFooterComponent };
/**
 * Basic content container component.
 *
 * @example While this component can be used alone, it also provides a number
 * of child components for common card sections:
 *
 * ```
 * <nb-card-header></nb-card-header>
 * <nb-card-body></nb-card-body>
 * <nb-card-footer></nb-card-footer>
 * ```
 *
 * @styles
 *
 * card-line-height:
 * card-font-weight:
 * card-fg-text:
 * card-bg:
 * card-height-xxsmall:
 * card-height-xsmall:
 * card-height-small:
 * card-height-medium:
 * card-height-large:
 * card-height-xlarge:
 * card-height-xxlarge:
 * card-shadow:
 * card-border-radius:
 * card-padding:
 * card-margin:
 * card-separator:
 *
 */
var NbCardComponent = /** @class */ (function () {
    function NbCardComponent() {
    }
    Object.defineProperty(NbCardComponent.prototype, "xxsmall", {
        get: function () {
            return this.size === NbCardComponent.SIZE_XXSMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "xsmall", {
        get: function () {
            return this.size === NbCardComponent.SIZE_XSMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "small", {
        get: function () {
            return this.size === NbCardComponent.SIZE_SMALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "medium", {
        get: function () {
            return this.size === NbCardComponent.SIZE_MEDIUM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "large", {
        get: function () {
            return this.size === NbCardComponent.SIZE_LARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "xlarge", {
        get: function () {
            return this.size === NbCardComponent.SIZE_XLARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "xxlarge", {
        get: function () {
            return this.size === NbCardComponent.SIZE_XXLARGE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "active", {
        get: function () {
            return this.status === NbCardComponent.STATUS_ACTIVE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "disabled", {
        get: function () {
            return this.status === NbCardComponent.STATUS_DISABLED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "primary", {
        get: function () {
            return this.status === NbCardComponent.STATUS_PRIMARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "info", {
        get: function () {
            return this.status === NbCardComponent.STATUS_INFO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "success", {
        get: function () {
            return this.status === NbCardComponent.STATUS_SUCCESS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "warning", {
        get: function () {
            return this.status === NbCardComponent.STATUS_WARNING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "danger", {
        get: function () {
            return this.status === NbCardComponent.STATUS_DANGER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "hasAccent", {
        get: function () {
            return this.accent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "primaryAccent", {
        get: function () {
            return this.accent === NbCardComponent.ACCENT_PRIMARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "infoAccent", {
        get: function () {
            return this.accent === NbCardComponent.ACCENT_INFO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "successAccent", {
        get: function () {
            return this.accent === NbCardComponent.ACCENT_SUCCESS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "warningAccent", {
        get: function () {
            return this.accent === NbCardComponent.ACCENT_WARNING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "dangerAccent", {
        get: function () {
            return this.accent === NbCardComponent.ACCENT_DANGER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "activeAccent", {
        get: function () {
            return this.accent === NbCardComponent.ACCENT_ACTIVE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "disabledAccent", {
        get: function () {
            return this.accent === NbCardComponent.ACCENT_DISABLED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "setSize", {
        set: /**
           * Card size, available sizes:
           * xxsmall, xsmall, small, medium, large, xlarge, xxlarge
           * @param {string} val
           */
        function (val) {
            this.size = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "setStatus", {
        set: /**
           * Card status (adds specific styles):
           * active, disabled, primary, info, success, warning, danger
           * @param {string} val
           */
        function (val) {
            this.status = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbCardComponent.prototype, "setAccent", {
        set: /**
           * Card accent (color of the top border):
           * active, disabled, primary, info, success, warning, danger
           * @param {string} val
           */
        function (val) {
            this.accent = val;
        },
        enumerable: true,
        configurable: true
    });
    NbCardComponent.SIZE_XXSMALL = 'xxsmall';
    NbCardComponent.SIZE_XSMALL = 'xsmall';
    NbCardComponent.SIZE_SMALL = 'small';
    NbCardComponent.SIZE_MEDIUM = 'medium';
    NbCardComponent.SIZE_LARGE = 'large';
    NbCardComponent.SIZE_XLARGE = 'xlarge';
    NbCardComponent.SIZE_XXLARGE = 'xxlarge';
    NbCardComponent.STATUS_ACTIVE = 'active';
    NbCardComponent.STATUS_DISABLED = 'disabled';
    NbCardComponent.STATUS_PRIMARY = 'primary';
    NbCardComponent.STATUS_INFO = 'info';
    NbCardComponent.STATUS_SUCCESS = 'success';
    NbCardComponent.STATUS_WARNING = 'warning';
    NbCardComponent.STATUS_DANGER = 'danger';
    NbCardComponent.ACCENT_ACTIVE = 'active';
    NbCardComponent.ACCENT_DISABLED = 'disabled';
    NbCardComponent.ACCENT_PRIMARY = 'primary';
    NbCardComponent.ACCENT_INFO = 'info';
    NbCardComponent.ACCENT_SUCCESS = 'success';
    NbCardComponent.ACCENT_WARNING = 'warning';
    NbCardComponent.ACCENT_DANGER = 'danger';
    NbCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nb-card',
                    styles: [":host{display:flex;flex-direction:column} "],
                    template: "\n    <ng-content></ng-content>\n    <ng-content select=\"nb-card-header\"></ng-content>\n    <ng-content select=\"nb-card-body\"></ng-content>\n    <ng-content select=\"nb-card-footer\"></ng-content>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbCardComponent.ctorParameters = function () { return []; };
    NbCardComponent.propDecorators = {
        "xxsmall": [{ type: HostBinding, args: ['class.xxsmall-card',] },],
        "xsmall": [{ type: HostBinding, args: ['class.xsmall-card',] },],
        "small": [{ type: HostBinding, args: ['class.small-card',] },],
        "medium": [{ type: HostBinding, args: ['class.medium-card',] },],
        "large": [{ type: HostBinding, args: ['class.large-card',] },],
        "xlarge": [{ type: HostBinding, args: ['class.xlarge-card',] },],
        "xxlarge": [{ type: HostBinding, args: ['class.xxlarge-card',] },],
        "active": [{ type: HostBinding, args: ['class.active-card',] },],
        "disabled": [{ type: HostBinding, args: ['class.disabled-card',] },],
        "primary": [{ type: HostBinding, args: ['class.primary-card',] },],
        "info": [{ type: HostBinding, args: ['class.info-card',] },],
        "success": [{ type: HostBinding, args: ['class.success-card',] },],
        "warning": [{ type: HostBinding, args: ['class.warning-card',] },],
        "danger": [{ type: HostBinding, args: ['class.danger-card',] },],
        "hasAccent": [{ type: HostBinding, args: ['class.accent',] },],
        "primaryAccent": [{ type: HostBinding, args: ['class.accent-primary',] },],
        "infoAccent": [{ type: HostBinding, args: ['class.accent-info',] },],
        "successAccent": [{ type: HostBinding, args: ['class.accent-success',] },],
        "warningAccent": [{ type: HostBinding, args: ['class.accent-warning',] },],
        "dangerAccent": [{ type: HostBinding, args: ['class.accent-danger',] },],
        "activeAccent": [{ type: HostBinding, args: ['class.accent-active',] },],
        "disabledAccent": [{ type: HostBinding, args: ['class.accent-disabled',] },],
        "setSize": [{ type: Input, args: ['size',] },],
        "setStatus": [{ type: Input, args: ['status',] },],
        "setAccent": [{ type: Input, args: ['accent',] },],
    };
    return NbCardComponent;
}());
export { NbCardComponent };
//# sourceMappingURL=card.component.js.map