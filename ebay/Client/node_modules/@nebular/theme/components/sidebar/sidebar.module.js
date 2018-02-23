/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbSidebarComponent, NbSidebarFooterComponent, NbSidebarHeaderComponent, } from './sidebar.component';
import { NbSidebarService } from './sidebar.service';
var NB_SIDEBAR_COMPONENTS = [
    NbSidebarComponent,
    NbSidebarFooterComponent,
    NbSidebarHeaderComponent,
];
var NB_SIDEBAR_PROVIDERS = [
    NbSidebarService,
];
var NbSidebarModule = /** @class */ (function () {
    function NbSidebarModule() {
    }
    NbSidebarModule.forRoot = function () {
        return {
            ngModule: NbSidebarModule,
            providers: NB_SIDEBAR_PROVIDERS.slice(),
        };
    };
    NbSidebarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        NbSharedModule,
                    ],
                    declarations: NB_SIDEBAR_COMPONENTS.slice(),
                    exports: NB_SIDEBAR_COMPONENTS.slice(),
                },] },
    ];
    /** @nocollapse */
    NbSidebarModule.ctorParameters = function () { return []; };
    return NbSidebarModule;
}());
export { NbSidebarModule };
//# sourceMappingURL=sidebar.module.js.map