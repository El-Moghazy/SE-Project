/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbActionComponent, NbActionsComponent } from './actions.component';
import { NbBadgeModule } from '../badge/badge.module';
var NB_ACTIONS_COMPONENTS = [
    NbActionComponent,
    NbActionsComponent,
];
var NbActionsModule = /** @class */ (function () {
    function NbActionsModule() {
    }
    NbActionsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        NbSharedModule,
                        NbBadgeModule,
                    ],
                    declarations: NB_ACTIONS_COMPONENTS.slice(),
                    exports: NB_ACTIONS_COMPONENTS.slice(),
                },] },
    ];
    /** @nocollapse */
    NbActionsModule.ctorParameters = function () { return []; };
    return NbActionsModule;
}());
export { NbActionsModule };
//# sourceMappingURL=actions.module.js.map