/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Inject, Injectable } from '@angular/core';
import { DEFAULT_THEME } from './js-themes/default.theme';
import { COSMIC_THEME } from './js-themes/cosmic.theme';
import { nbBuiltInJSThemesToken, nbJSThemesToken } from '../theme.options';
export var BUILT_IN_THEMES = [
    DEFAULT_THEME,
    COSMIC_THEME,
];
/**
 * Js Themes registry - provides access to the JS themes' variables.
 * Usually shouldn't be used directly, but through the NbThemeService class methods (getJsTheme).
 */
var NbJSThemesRegistry = /** @class */ (function () {
    function NbJSThemesRegistry(builtInThemes, newThemes) {
        if (newThemes === void 0) { newThemes = []; }
        var _this = this;
        this.themes = {};
        var themes = this.combineByNames(newThemes, builtInThemes);
        themes.forEach(function (theme) {
            _this.register(theme, theme.name, theme.base);
        });
    }
    /**
     * Registers a new JS theme
     * @param config any
     * @param themeName string
     * @param baseTheme string
     */
    /**
       * Registers a new JS theme
       * @param config any
       * @param themeName string
       * @param baseTheme string
       */
    NbJSThemesRegistry.prototype.register = /**
       * Registers a new JS theme
       * @param config any
       * @param themeName string
       * @param baseTheme string
       */
    function (config, themeName, baseTheme) {
        var base = this.has(baseTheme) ? this.get(baseTheme) : {};
        this.themes[themeName] = this.mergeDeep({}, base, config);
    };
    /**
     * Checks whether the theme is registered
     * @param themeName
     * @returns boolean
     */
    /**
       * Checks whether the theme is registered
       * @param themeName
       * @returns boolean
       */
    NbJSThemesRegistry.prototype.has = /**
       * Checks whether the theme is registered
       * @param themeName
       * @returns boolean
       */
    function (themeName) {
        return !!this.themes[themeName];
    };
    /**
     * Return a theme
     * @param themeName
     * @returns NbJSThemeOptions
     */
    /**
       * Return a theme
       * @param themeName
       * @returns NbJSThemeOptions
       */
    NbJSThemesRegistry.prototype.get = /**
       * Return a theme
       * @param themeName
       * @returns NbJSThemeOptions
       */
    function (themeName) {
        if (!this.themes[themeName]) {
            throw Error("NbThemeConfig: no theme '" + themeName + "' found registered.");
        }
        return JSON.parse(JSON.stringify(this.themes[themeName]));
    };
    NbJSThemesRegistry.prototype.combineByNames = function (newThemes, oldThemes) {
        var _this = this;
        if (newThemes) {
            var mergedThemes_1 = [];
            newThemes.forEach(function (theme) {
                var sameOld = oldThemes.find(function (tm) { return tm.name === theme.name; })
                    || {};
                var mergedTheme = _this.mergeDeep({}, sameOld, theme);
                mergedThemes_1.push(mergedTheme);
            });
            oldThemes.forEach(function (theme) {
                if (!mergedThemes_1.find(function (tm) { return tm.name === theme.name; })) {
                    mergedThemes_1.push(theme);
                }
            });
            return mergedThemes_1;
        }
        return oldThemes;
    };
    NbJSThemesRegistry.prototype.isObject = function (item) {
        return item && typeof item === 'object' && !Array.isArray(item);
    };
    // TODO: move to helpers
    // TODO: move to helpers
    NbJSThemesRegistry.prototype.mergeDeep = 
    // TODO: move to helpers
    function (target) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        if (!sources.length) {
            return target;
        }
        var source = sources.shift();
        if (this.isObject(target) && this.isObject(source)) {
            for (var key in source) {
                if (this.isObject(source[key])) {
                    if (!target[key]) {
                        Object.assign(target, (_a = {}, _a[key] = {}, _a));
                    }
                    this.mergeDeep(target[key], source[key]);
                }
                else {
                    Object.assign(target, (_b = {}, _b[key] = source[key], _b));
                }
            }
        }
        return this.mergeDeep.apply(this, [target].concat(sources));
        var _a, _b;
    };
    NbJSThemesRegistry.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NbJSThemesRegistry.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Inject, args: [nbBuiltInJSThemesToken,] },] },
        { type: Array, decorators: [{ type: Inject, args: [nbJSThemesToken,] },] },
    ]; };
    return NbJSThemesRegistry;
}());
export { NbJSThemesRegistry };
//# sourceMappingURL=js-themes-registry.service.js.map