/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Type } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NbJSThemeOptions } from './js-themes/theme.options';
import { NbJSThemesRegistry } from './js-themes-registry.service';
import { NbMediaBreakpointsService, NbMediaBreakpoint } from './breakpoints.service';
/**
 * Main Nebular service. Includes various helper methods.
 */
export declare class NbThemeService {
    protected options: any;
    private breakpointService;
    private jsThemesRegistry;
    currentTheme: string;
    private themeChanges$;
    private appendToLayoutTop$;
    private createLayoutTop$;
    private appendLayoutClass$;
    private removeLayoutClass$;
    private changeWindowWidth$;
    constructor(options: any, breakpointService: NbMediaBreakpointsService, jsThemesRegistry: NbJSThemesRegistry);
    changeTheme(name: string): void;
    changeWindowWidth(width: number): void;
    appendToLayoutTop<T>(component: Type<T>): Observable<any>;
    /**
     * Returns a theme object with variables (color/paddings/etc) on a theme change.
     * Once subscribed - returns current theme.
     *
     * @returns {Observable<NbJSThemeOptions>}
     */
    getJsTheme(): Observable<NbJSThemeOptions>;
    clearLayoutTop(): Observable<any>;
    /**
     * Triggers media query breakpoint change
     * Returns a pair where the first item is previous media breakpoint and the second item is current breakpoit.
     * ```
     *  [{ name: 'xs', width: 0 }, { name: 'md', width: 768 }] // change from `xs` to `md`
     * ```
     * @returns {Observable<[NbMediaBreakpoint, NbMediaBreakpoint]>}
     */
    onMediaQueryChange(): Observable<NbMediaBreakpoint[]>;
    onThemeChange(): Observable<any>;
    onAppendToTop(): Observable<any>;
    onClearLayoutTop(): Observable<any>;
    appendLayoutClass(className: string): void;
    onAppendLayoutClass(): Observable<any>;
    removeLayoutClass(className: string): void;
    onRemoveLayoutClass(): Observable<any>;
}
