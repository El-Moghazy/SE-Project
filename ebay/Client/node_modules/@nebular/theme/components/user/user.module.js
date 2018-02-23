/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbUserComponent, } from './user.component';
import { NbBadgeModule } from '../badge/badge.module';
var NB_USER_COMPONENTS = [
    NbUserComponent,
];
var NbUserModule = /** @class */ (function () {
    function NbUserModule() {
    }
    NbUserModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        NbSharedModule,
                        NbBadgeModule,
                    ],
                    declarations: NB_USER_COMPONENTS.slice(),
                    exports: NB_USER_COMPONENTS.slice(),
                },] },
    ];
    /** @nocollapse */
    NbUserModule.ctorParameters = function () { return []; };
    return NbUserModule;
}());
export { NbUserModule };
//# sourceMappingURL=user.module.js.map