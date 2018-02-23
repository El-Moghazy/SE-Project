/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbTabsetComponent, NbTabComponent } from './tabset.component';
import { NbBadgeModule } from '../badge/badge.module';
var NB_TABSET_COMPONENTS = [
    NbTabsetComponent,
    NbTabComponent,
];
var NbTabsetModule = /** @class */ (function () {
    function NbTabsetModule() {
    }
    NbTabsetModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        NbSharedModule,
                        NbBadgeModule,
                    ],
                    declarations: NB_TABSET_COMPONENTS.slice(),
                    exports: NB_TABSET_COMPONENTS.slice(),
                },] },
    ];
    /** @nocollapse */
    NbTabsetModule.ctorParameters = function () { return []; };
    return NbTabsetModule;
}());
export { NbTabsetModule };
//# sourceMappingURL=tabset.module.js.map