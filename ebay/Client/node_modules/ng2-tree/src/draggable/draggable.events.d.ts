import { ElementRef } from '@angular/core';
import { CapturedNode } from './captured-node';
export declare class NodeDraggableEvent {
    captured: CapturedNode;
    target: ElementRef;
    constructor(captured: CapturedNode, target: ElementRef);
}
