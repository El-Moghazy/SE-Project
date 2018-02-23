/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Inject, Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators/map';
import { filter } from 'rxjs/operators/filter';
import { pairwise } from 'rxjs/operators/pairwise';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';
import { startWith } from 'rxjs/operators/startWith';
import { share } from 'rxjs/operators/share';
import { nbThemeOptionsToken } from '../theme.options';
import { NbJSThemesRegistry } from './js-themes-registry.service';
import { NbMediaBreakpointsService } from './breakpoints.service';
/**
 * Main Nebular service. Includes various helper methods.
 */
var NbThemeService = /** @class */ (function () {
    function NbThemeService(options, breakpointService, jsThemesRegistry) {
        this.options = options;
        this.breakpointService = breakpointService;
        this.jsThemesRegistry = jsThemesRegistry;
        this.themeChanges$ = new ReplaySubject(1);
        this.appendToLayoutTop$ = new ReplaySubject();
        this.createLayoutTop$ = new Subject();
        this.appendLayoutClass$ = new Subject();
        this.removeLayoutClass$ = new Subject();
        this.changeWindowWidth$ = new ReplaySubject(2);
        if (options && options.name) {
            this.changeTheme(options.name);
        }
    }
    NbThemeService.prototype.changeTheme = function (name) {
        this.themeChanges$.next({ name: name, previous: this.currentTheme });
        this.currentTheme = name;
    };
    NbThemeService.prototype.changeWindowWidth = function (width) {
        this.changeWindowWidth$.next(width);
    };
    NbThemeService.prototype.appendToLayoutTop = function (component) {
        var subject = new ReplaySubject(1);
        this.appendToLayoutTop$.next({ component: component, listener: subject });
        return subject.asObservable();
    };
    /**
     * Returns a theme object with variables (color/paddings/etc) on a theme change.
     * Once subscribed - returns current theme.
     *
     * @returns {Observable<NbJSThemeOptions>}
     */
    /**
       * Returns a theme object with variables (color/paddings/etc) on a theme change.
       * Once subscribed - returns current theme.
       *
       * @returns {Observable<NbJSThemeOptions>}
       */
    NbThemeService.prototype.getJsTheme = /**
       * Returns a theme object with variables (color/paddings/etc) on a theme change.
       * Once subscribed - returns current theme.
       *
       * @returns {Observable<NbJSThemeOptions>}
       */
    function () {
        var _this = this;
        return this.onThemeChange().pipe(map(function (theme) {
            return _this.jsThemesRegistry.get(theme.name);
        }));
    };
    NbThemeService.prototype.clearLayoutTop = function () {
        var observable = new BehaviorSubject(null);
        this.createLayoutTop$.next({ listener: observable });
        this.appendToLayoutTop$ = new ReplaySubject();
        return observable.asObservable();
    };
    /**
     * Triggers media query breakpoint change
     * Returns a pair where the first item is previous media breakpoint and the second item is current breakpoit.
     * ```
     *  [{ name: 'xs', width: 0 }, { name: 'md', width: 768 }] // change from `xs` to `md`
     * ```
     * @returns {Observable<[NbMediaBreakpoint, NbMediaBreakpoint]>}
     */
    /**
       * Triggers media query breakpoint change
       * Returns a pair where the first item is previous media breakpoint and the second item is current breakpoit.
       * ```
       *  [{ name: 'xs', width: 0 }, { name: 'md', width: 768 }] // change from `xs` to `md`
       * ```
       * @returns {Observable<[NbMediaBreakpoint, NbMediaBreakpoint]>}
       */
    NbThemeService.prototype.onMediaQueryChange = /**
       * Triggers media query breakpoint change
       * Returns a pair where the first item is previous media breakpoint and the second item is current breakpoit.
       * ```
       *  [{ name: 'xs', width: 0 }, { name: 'md', width: 768 }] // change from `xs` to `md`
       * ```
       * @returns {Observable<[NbMediaBreakpoint, NbMediaBreakpoint]>}
       */
    function () {
        var _this = this;
        return this.changeWindowWidth$
            .pipe(startWith(undefined), pairwise(), map(function (_a) {
            var prevWidth = _a[0], width = _a[1];
            return [
                _this.breakpointService.getByWidth(prevWidth),
                _this.breakpointService.getByWidth(width),
            ];
        }), filter(function (_a) {
            var prevPoint = _a[0], point = _a[1];
            return prevPoint.name !== point.name;
        }), distinctUntilChanged(null, function (params) { return params[0].name + params[1].name; }), share());
    };
    NbThemeService.prototype.onThemeChange = function () {
        return this.themeChanges$.pipe(share());
    };
    NbThemeService.prototype.onAppendToTop = function () {
        return this.appendToLayoutTop$.pipe(share());
    };
    NbThemeService.prototype.onClearLayoutTop = function () {
        return this.createLayoutTop$.pipe(share());
    };
    NbThemeService.prototype.appendLayoutClass = function (className) {
        this.appendLayoutClass$.next(className);
    };
    NbThemeService.prototype.onAppendLayoutClass = function () {
        return this.appendLayoutClass$.pipe(share());
    };
    NbThemeService.prototype.removeLayoutClass = function (className) {
        this.removeLayoutClass$.next(className);
    };
    NbThemeService.prototype.onRemoveLayoutClass = function () {
        return this.removeLayoutClass$.pipe(share());
    };
    NbThemeService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NbThemeService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [nbThemeOptionsToken,] },] },
        { type: NbMediaBreakpointsService, },
        { type: NbJSThemesRegistry, },
    ]; };
    return NbThemeService;
}());
export { NbThemeService };
//# sourceMappingURL=theme.service.js.map