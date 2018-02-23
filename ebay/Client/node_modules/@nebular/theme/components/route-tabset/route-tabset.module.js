/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbRouteTabsetComponent } from './route-tabset.component';
var NbRouteTabsetModule = /** @class */ (function () {
    function NbRouteTabsetModule() {
    }
    NbRouteTabsetModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        NbSharedModule,
                    ],
                    declarations: [
                        NbRouteTabsetComponent,
                    ],
                    exports: [
                        NbRouteTabsetComponent,
                    ],
                },] },
    ];
    /** @nocollapse */
    NbRouteTabsetModule.ctorParameters = function () { return []; };
    return NbRouteTabsetModule;
}());
export { NbRouteTabsetModule };
//# sourceMappingURL=route-tabset.module.js.map