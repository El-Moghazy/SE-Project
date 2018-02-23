/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { share } from 'rxjs/operators/share';
/**
 * Search component service, connects you code to a page-level search component.
 */
var NbSearchService = /** @class */ (function () {
    function NbSearchService() {
        this.searchSubmittings$ = new Subject();
        this.searchActivations$ = new Subject();
        this.searchDeactivations$ = new Subject();
    }
    /***
     * Activate (open) search component
     * @param {string} searchType
     * @param {string} tag
     */
    /***
       * Activate (open) search component
       * @param {string} searchType
       * @param {string} tag
       */
    NbSearchService.prototype.activateSearch = /***
       * Activate (open) search component
       * @param {string} searchType
       * @param {string} tag
       */
    function (searchType, tag) {
        this.searchActivations$.next({ searchType: searchType, tag: tag });
    };
    /**
     * Deactibate (close) search component
     * @param {string} searchType
     * @param {string} tag
     */
    /**
       * Deactibate (close) search component
       * @param {string} searchType
       * @param {string} tag
       */
    NbSearchService.prototype.deactivateSearch = /**
       * Deactibate (close) search component
       * @param {string} searchType
       * @param {string} tag
       */
    function (searchType, tag) {
        this.searchDeactivations$.next({ searchType: searchType, tag: tag });
    };
    /**
     * Trigger search submit
     * @param {string} term
     * @param {string} tag
     */
    /**
       * Trigger search submit
       * @param {string} term
       * @param {string} tag
       */
    NbSearchService.prototype.submitSearch = /**
       * Trigger search submit
       * @param {string} term
       * @param {string} tag
       */
    function (term, tag) {
        this.searchSubmittings$.next({ term: term, tag: tag });
    };
    /**
     * Subscribe to 'activate' event
     * @returns Observable<{searchType: string; tag?: string}>
     */
    /**
       * Subscribe to 'activate' event
       * @returns Observable<{searchType: string; tag?: string}>
       */
    NbSearchService.prototype.onSearchActivate = /**
       * Subscribe to 'activate' event
       * @returns Observable<{searchType: string; tag?: string}>
       */
    function () {
        return this.searchActivations$.pipe(share());
    };
    /**
     * Subscribe to 'deactivate' event
     * @returns Observable<{searchType: string; tag?: string}>
     */
    /**
       * Subscribe to 'deactivate' event
       * @returns Observable<{searchType: string; tag?: string}>
       */
    NbSearchService.prototype.onSearchDeactivate = /**
       * Subscribe to 'deactivate' event
       * @returns Observable<{searchType: string; tag?: string}>
       */
    function () {
        return this.searchDeactivations$.pipe(share());
    };
    /**
     * Subscribe to 'submit' event (when submit button clicked)
     * @returns Observable<{term: string; tag?: string}>
     */
    /**
       * Subscribe to 'submit' event (when submit button clicked)
       * @returns Observable<{term: string; tag?: string}>
       */
    NbSearchService.prototype.onSearchSubmit = /**
       * Subscribe to 'submit' event (when submit button clicked)
       * @returns Observable<{term: string; tag?: string}>
       */
    function () {
        return this.searchSubmittings$.pipe(share());
    };
    NbSearchService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NbSearchService.ctorParameters = function () { return []; };
    return NbSearchService;
}());
export { NbSearchService };
//# sourceMappingURL=search.service.js.map