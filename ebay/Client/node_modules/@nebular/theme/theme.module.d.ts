/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ModuleWithProviders } from '@angular/core';
import { NbThemeOptions } from './theme.options';
import { NbJSThemeOptions } from './services/js-themes/theme.options';
import { NbMediaBreakpoint } from './services/breakpoints.service';
export declare class NbThemeModule {
    /**
     * Main Theme Module
     *
     * @param nbThemeOptions {NbThemeOptions} Main theme options
     * @param nbJSThemes {NbJSThemeOptions[]} List of JS Themes, will be merged with default themes
     * @param nbMediaBreakpoints {NbMediaBreakpoint} Available media breakpoints
     *
     * @returns {ModuleWithProviders}
     */
    static forRoot(nbThemeOptions: NbThemeOptions, nbJSThemes?: NbJSThemeOptions[], nbMediaBreakpoints?: NbMediaBreakpoint[]): ModuleWithProviders;
}
