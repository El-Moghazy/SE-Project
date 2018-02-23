/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { nbBuiltInJSThemesToken, nbMediaBreakpointsToken, nbThemeOptionsToken, nbJSThemesToken, } from './theme.options';
import { NbThemeService } from './services/theme.service';
import { NbSpinnerService } from './services/spinner.service';
import { BUILT_IN_THEMES, NbJSThemesRegistry } from './services/js-themes-registry.service';
import { DEFAULT_MEDIA_BREAKPOINTS, NbMediaBreakpointsService, } from './services/breakpoints.service';
var NbThemeModule = /** @class */ (function () {
    function NbThemeModule() {
    }
    // TODO: check the options (throw exception?)
    /**
     * Main Theme Module
     *
     * @param nbThemeOptions {NbThemeOptions} Main theme options
     * @param nbJSThemes {NbJSThemeOptions[]} List of JS Themes, will be merged with default themes
     * @param nbMediaBreakpoints {NbMediaBreakpoint} Available media breakpoints
     *
     * @returns {ModuleWithProviders}
     */
    // TODO: check the options (throw exception?)
    /**
       * Main Theme Module
       *
       * @param nbThemeOptions {NbThemeOptions} Main theme options
       * @param nbJSThemes {NbJSThemeOptions[]} List of JS Themes, will be merged with default themes
       * @param nbMediaBreakpoints {NbMediaBreakpoint} Available media breakpoints
       *
       * @returns {ModuleWithProviders}
       */
    NbThemeModule.forRoot = 
    // TODO: check the options (throw exception?)
    /**
       * Main Theme Module
       *
       * @param nbThemeOptions {NbThemeOptions} Main theme options
       * @param nbJSThemes {NbJSThemeOptions[]} List of JS Themes, will be merged with default themes
       * @param nbMediaBreakpoints {NbMediaBreakpoint} Available media breakpoints
       *
       * @returns {ModuleWithProviders}
       */
    function (nbThemeOptions, nbJSThemes, nbMediaBreakpoints) {
        return {
            ngModule: NbThemeModule,
            providers: [
                { provide: nbThemeOptionsToken, useValue: nbThemeOptions || {} },
                { provide: nbBuiltInJSThemesToken, useValue: BUILT_IN_THEMES },
                { provide: nbJSThemesToken, useValue: nbJSThemes || [] },
                { provide: nbMediaBreakpointsToken, useValue: nbMediaBreakpoints || DEFAULT_MEDIA_BREAKPOINTS },
                NbJSThemesRegistry,
                NbThemeService,
                NbMediaBreakpointsService,
                NbSpinnerService,
            ],
        };
    };
    NbThemeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    exports: [],
                },] },
    ];
    /** @nocollapse */
    NbThemeModule.ctorParameters = function () { return []; };
    return NbThemeModule;
}());
export { NbThemeModule };
//# sourceMappingURL=theme.module.js.map