/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbMenuComponent, NbMenuItemComponent } from './menu.component';
import { NbMenuService, NbMenuInternalService } from './menu.service';
var nbMenuComponents = [NbMenuComponent, NbMenuItemComponent];
var NB_MENU_PROVIDERS = [NbMenuService, NbMenuInternalService];
var NbMenuModule = /** @class */ (function () {
    function NbMenuModule() {
    }
    NbMenuModule.forRoot = function () {
        return {
            ngModule: NbMenuModule,
            providers: NB_MENU_PROVIDERS.slice(),
        };
    };
    NbMenuModule.decorators = [
        { type: NgModule, args: [{
                    imports: [NbSharedModule],
                    declarations: nbMenuComponents.slice(),
                    exports: nbMenuComponents.slice(),
                },] },
    ];
    /** @nocollapse */
    NbMenuModule.ctorParameters = function () { return []; };
    return NbMenuModule;
}());
export { NbMenuModule };
//# sourceMappingURL=menu.module.js.map