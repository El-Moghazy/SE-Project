import { ElementRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CapturedNode } from './captured-node';
import { NodeDraggableEvent } from './draggable.events';
export declare class NodeDraggableService {
    draggableNodeEvents$: Subject<NodeDraggableEvent>;
    private capturedNode;
    fireNodeDragged(captured: CapturedNode, target: ElementRef): void;
    captureNode(node: CapturedNode): void;
    getCapturedNode(): CapturedNode;
    releaseCapturedNode(): void;
}
