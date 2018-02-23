/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { share } from 'rxjs/operators/share';
/**
 * Sidebar service.
 *
 * Root module service to control the sidebar from any part of the app.
 */
var NbSidebarService = /** @class */ (function () {
    function NbSidebarService() {
        this.toggle$ = new Subject();
        this.expand$ = new Subject();
        this.collapse$ = new Subject();
    }
    /**
     * Subscribe to toggle events
     *
     * @returns Observable<{ compact: boolean, tag: string }>
     */
    /**
       * Subscribe to toggle events
       *
       * @returns Observable<{ compact: boolean, tag: string }>
       */
    NbSidebarService.prototype.onToggle = /**
       * Subscribe to toggle events
       *
       * @returns Observable<{ compact: boolean, tag: string }>
       */
    function () {
        return this.toggle$.pipe(share());
    };
    /**
     * Subscribe to expand events
     * @returns Observable<{ tag: string }>
     */
    /**
       * Subscribe to expand events
       * @returns Observable<{ tag: string }>
       */
    NbSidebarService.prototype.onExpand = /**
       * Subscribe to expand events
       * @returns Observable<{ tag: string }>
       */
    function () {
        return this.expand$.pipe(share());
    };
    /**
     * Subscribe to collapse evens
     * @returns Observable<{ tag: string }>
     */
    /**
       * Subscribe to collapse evens
       * @returns Observable<{ tag: string }>
       */
    NbSidebarService.prototype.onCollapse = /**
       * Subscribe to collapse evens
       * @returns Observable<{ tag: string }>
       */
    function () {
        return this.collapse$.pipe(share());
    };
    /**
     * Toggle a sidebar
     * @param {boolean} compact
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    /**
       * Toggle a sidebar
       * @param {boolean} compact
       * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
       * to specify which sidebar you want to control
       */
    NbSidebarService.prototype.toggle = /**
       * Toggle a sidebar
       * @param {boolean} compact
       * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
       * to specify which sidebar you want to control
       */
    function (compact, tag) {
        if (compact === void 0) { compact = false; }
        this.toggle$.next({ compact: compact, tag: tag });
    };
    /**
     * Expands a sidebar
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    /**
       * Expands a sidebar
       * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
       * to specify which sidebar you want to control
       */
    NbSidebarService.prototype.expand = /**
       * Expands a sidebar
       * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
       * to specify which sidebar you want to control
       */
    function (tag) {
        this.expand$.next({ tag: tag });
    };
    /**
     * Collapses a sidebar
     * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
     * to specify which sidebar you want to control
     */
    /**
       * Collapses a sidebar
       * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
       * to specify which sidebar you want to control
       */
    NbSidebarService.prototype.collapse = /**
       * Collapses a sidebar
       * @param {string} tag If you have multiple sidebars on the page, mark them with `tag` input property and pass it here
       * to specify which sidebar you want to control
       */
    function (tag) {
        this.collapse$.next({ tag: tag });
    };
    NbSidebarService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NbSidebarService.ctorParameters = function () { return []; };
    return NbSidebarService;
}());
export { NbSidebarService };
//# sourceMappingURL=sidebar.service.js.map