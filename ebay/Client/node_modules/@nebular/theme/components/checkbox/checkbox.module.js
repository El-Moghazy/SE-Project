/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbCheckboxComponent } from './checkbox.component';
var NbCheckboxModule = /** @class */ (function () {
    function NbCheckboxModule() {
    }
    NbCheckboxModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        NbSharedModule,
                    ],
                    declarations: [NbCheckboxComponent],
                    exports: [NbCheckboxComponent],
                },] },
    ];
    /** @nocollapse */
    NbCheckboxModule.ctorParameters = function () { return []; };
    return NbCheckboxModule;
}());
export { NbCheckboxModule };
//# sourceMappingURL=checkbox.module.js.map