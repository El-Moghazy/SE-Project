/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input } from '@angular/core';
/**
 * Badge is a simple labeling component.
 * It can be used to add additional information to any content or highlight unread items.
 *
 * Element is absolute positioned, so parent should be
 * [positioned element](https://developer.mozilla.org/en-US/docs/Web/CSS/position).
 * It means parent `position` should be set to anything except `static`, e.g. `relative`,
 * `absolute`, `fixed`, or `sticky`.
 *
 *
 * @example Badge with default position and status(color):
 *
 * ```
 * <nb-badge text="badgeText"></nb-badge>
 * ```
 *
 * @example Badge located on the bottom right with warning status:
 *
 * ```
 * <nb-badge text="badgeText" status="warning" position="bottom right">
 * </nb-badge>
 * ```
 *
 * @styles
 *
 * badge-fg-text:
 * badge-primary-bg-color:
 * badge-success-bg-color:
 * badge-info-bg-color:
 * badge-warning-bg-color:
 * badge-danger-bg-color:
 */
var NbBadgeComponent = /** @class */ (function () {
    function NbBadgeComponent() {
        this.positionClass = NbBadgeComponent.TOP_RIGHT;
        this.colorClass = NbBadgeComponent.STATUS_PRIMARY;
        /**
           * Text to display
           * @type string
           */
        this.text = '';
    }
    Object.defineProperty(NbBadgeComponent.prototype, "position", {
        set: /**
           * Badge position
           *
           * Can be set to any class or to one of predefined positions:
           * 'top left', 'top right', 'bottom left', 'bottom right'
           * @type string
           */
        function (value) {
            if (value) {
                this.positionClass = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NbBadgeComponent.prototype, "status", {
        set: /**
           * Badge status (adds specific styles):
           * 'primary', 'info', 'success', 'warning', 'danger'
           * @param {string} val
           * @type string
           */
        function (value) {
            if (value) {
                this.colorClass = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    NbBadgeComponent.TOP_LEFT = 'top left';
    NbBadgeComponent.TOP_RIGHT = 'top right';
    NbBadgeComponent.BOTTOM_LEFT = 'bottom left';
    NbBadgeComponent.BOTTOM_RIGHT = 'bottom right';
    NbBadgeComponent.STATUS_PRIMARY = 'primary';
    NbBadgeComponent.STATUS_INFO = 'info';
    NbBadgeComponent.STATUS_SUCCESS = 'success';
    NbBadgeComponent.STATUS_WARNING = 'warning';
    NbBadgeComponent.STATUS_DANGER = 'danger';
    NbBadgeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nb-badge',
                    styles: [".nb-badge{position:absolute;padding:0.25em 0.4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:0.25rem}.nb-badge.top{top:0}.nb-badge.right{right:0}.nb-badge.bottom{bottom:0}.nb-badge.left{left:0} "],
                    template: "\n    <span class=\"nb-badge {{positionClass}} nb-badge-{{colorClass}}\">{{text}}</span>\n  ",
                },] },
    ];
    /** @nocollapse */
    NbBadgeComponent.ctorParameters = function () { return []; };
    NbBadgeComponent.propDecorators = {
        "text": [{ type: Input },],
        "position": [{ type: Input },],
        "status": [{ type: Input },],
    };
    return NbBadgeComponent;
}());
export { NbBadgeComponent };
//# sourceMappingURL=badge.component.js.map