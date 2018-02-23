import { EventEmitter, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { NodeMenuService } from './node-menu.service';
import { NodeMenuItemAction, NodeMenuItemSelectedEvent } from './menu.events';
export declare class NodeMenuComponent implements OnInit, OnDestroy {
    private renderer;
    private nodeMenuService;
    menuItemSelected: EventEmitter<NodeMenuItemSelectedEvent>;
    menuItems: NodeMenuItem[];
    menuContainer: any;
    availableMenuItems: NodeMenuItem[];
    private disposersForGlobalListeners;
    constructor(renderer: Renderer2, nodeMenuService: NodeMenuService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onMenuItemSelected(e: MouseEvent, selectedMenuItem: NodeMenuItem): void;
    private closeMenu(e);
}
export interface NodeMenuItem {
    name: string;
    action: NodeMenuItemAction;
    cssClass?: string;
}
