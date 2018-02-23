/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Inject, Injectable } from '@angular/core';
import { nbMediaBreakpointsToken } from '../theme.options';
export var DEFAULT_MEDIA_BREAKPOINTS = [
    {
        name: 'xs',
        width: 0,
    },
    {
        name: 'is',
        width: 400,
    },
    {
        name: 'sm',
        width: 576,
    },
    {
        name: 'md',
        width: 768,
    },
    {
        name: 'lg',
        width: 992,
    },
    {
        name: 'xl',
        width: 1200,
    },
    {
        name: 'xxl',
        width: 1400,
    },
    {
        name: 'xxxl',
        width: 1600,
    },
];
/**
 * Manages media breakpoints
 *
 * Provides access to available media breakpoints to convert window width to a configured breakpoint,
 * e.g. 200px - *xs* breakpoint
 */
var NbMediaBreakpointsService = /** @class */ (function () {
    function NbMediaBreakpointsService(breakpoints) {
        this.breakpoints = breakpoints;
        this.breakpointsMap = this.breakpoints.reduce(function (res, b) {
            res[b.name] = b.width;
            return res;
        }, {});
    }
    /**
     * Returns a configured breakpoint by width
     * @param width number
     * @returns {Z|{name: string, width: number}}
     */
    /**
       * Returns a configured breakpoint by width
       * @param width number
       * @returns {Z|{name: string, width: number}}
       */
    NbMediaBreakpointsService.prototype.getByWidth = /**
       * Returns a configured breakpoint by width
       * @param width number
       * @returns {Z|{name: string, width: number}}
       */
    function (width) {
        var unknown = { name: 'unknown', width: width };
        var breakpoints = this.getBreakpoints();
        return breakpoints
            .find(function (point, index) {
            var next = breakpoints[index + 1];
            return width >= point.width && (!next || width < next.width);
        }) || unknown;
    };
    /**
     * Returns a configured breakpoint by name
     * @param name string
     * @returns NbMediaBreakpoint
     */
    /**
       * Returns a configured breakpoint by name
       * @param name string
       * @returns NbMediaBreakpoint
       */
    NbMediaBreakpointsService.prototype.getByName = /**
       * Returns a configured breakpoint by name
       * @param name string
       * @returns NbMediaBreakpoint
       */
    function (name) {
        var unknown = { name: 'unknown', width: NaN };
        var breakpoints = this.getBreakpoints();
        return breakpoints.find(function (point) { return name === point.name; }) || unknown;
    };
    /**
     * Returns a list of configured breakpoints for the theme
     * @returns NbMediaBreakpoint[]
     */
    /**
       * Returns a list of configured breakpoints for the theme
       * @returns NbMediaBreakpoint[]
       */
    NbMediaBreakpointsService.prototype.getBreakpoints = /**
       * Returns a list of configured breakpoints for the theme
       * @returns NbMediaBreakpoint[]
       */
    function () {
        return this.breakpoints;
    };
    /**
     * Returns a map of configured breakpoints for the theme
     * @returns {[p: string]: number}
     */
    /**
       * Returns a map of configured breakpoints for the theme
       * @returns {[p: string]: number}
       */
    NbMediaBreakpointsService.prototype.getBreakpointsMap = /**
       * Returns a map of configured breakpoints for the theme
       * @returns {[p: string]: number}
       */
    function () {
        return this.breakpointsMap;
    };
    NbMediaBreakpointsService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NbMediaBreakpointsService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [nbMediaBreakpointsToken,] },] },
    ]; };
    return NbMediaBreakpointsService;
}());
export { NbMediaBreakpointsService };
//# sourceMappingURL=breakpoints.service.js.map