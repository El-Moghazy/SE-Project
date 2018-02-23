import { ElementRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { NodeMenuAction, NodeMenuEvent } from './menu.events';
export declare class NodeMenuService {
    nodeMenuEvents$: Subject<NodeMenuEvent>;
    fireMenuEvent(sender: HTMLElement, action: NodeMenuAction): void;
    hideMenuStream(treeElementRef: ElementRef): Observable<any>;
    hideMenuForAllNodesExcept(treeElementRef: ElementRef): void;
}
