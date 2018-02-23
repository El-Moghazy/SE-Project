/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
/**
 * Service to control the global page spinner.
 */
var NbSpinnerService = /** @class */ (function () {
    function NbSpinnerService() {
        this.loaders = [];
        this.selector = 'nb-global-spinner';
    }
    /**
     * Appends new loader to the list of loader to be completed before
     * spinner will be hidden
     * @param method Promise<any>
     */
    /**
       * Appends new loader to the list of loader to be completed before
       * spinner will be hidden
       * @param method Promise<any>
       */
    NbSpinnerService.prototype.registerLoader = /**
       * Appends new loader to the list of loader to be completed before
       * spinner will be hidden
       * @param method Promise<any>
       */
    function (method) {
        this.loaders.push(method);
    };
    /**
     * Clears the list of loader
     */
    /**
       * Clears the list of loader
       */
    NbSpinnerService.prototype.clear = /**
       * Clears the list of loader
       */
    function () {
        this.loaders = [];
    };
    /**
     * Start the loader process, show spinnder and execute loaders
     */
    /**
       * Start the loader process, show spinnder and execute loaders
       */
    NbSpinnerService.prototype.load = /**
       * Start the loader process, show spinnder and execute loaders
       */
    function () {
        this.showSpinner();
        this.executeAll();
    };
    NbSpinnerService.prototype.executeAll = function (done) {
        var _this = this;
        if (done === void 0) { done = function () { }; }
        Promise.all(this.loaders).then(function (values) {
            _this.hideSpinner();
            done.call(null, values);
        })
            .catch(function (error) {
            // TODO: Promise.reject
            console.error(error);
        });
    };
    // TODO is there any better way of doing this?
    // TODO is there any better way of doing this?
    NbSpinnerService.prototype.showSpinner = 
    // TODO is there any better way of doing this?
    function () {
        var el = this.getSpinnerElement();
        if (el) {
            el.style['display'] = 'block';
        }
    };
    NbSpinnerService.prototype.hideSpinner = function () {
        var el = this.getSpinnerElement();
        if (el) {
            el.style['display'] = 'none';
        }
    };
    NbSpinnerService.prototype.getSpinnerElement = function () {
        return document.getElementById(this.selector);
    };
    NbSpinnerService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NbSpinnerService.ctorParameters = function () { return []; };
    return NbSpinnerService;
}());
export { NbSpinnerService };
//# sourceMappingURL=spinner.service.js.map