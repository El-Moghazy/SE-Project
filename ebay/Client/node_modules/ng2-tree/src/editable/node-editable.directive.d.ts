import { ElementRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { NodeEditableEvent } from './editable.events';
export declare class NodeEditableDirective implements OnInit {
    private renderer;
    private elementRef;
    nodeValue: string;
    valueChanged: EventEmitter<NodeEditableEvent>;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    ngOnInit(): void;
    applyNewValue(newNodeValue: string): void;
    applyNewValueByLoosingFocus(newNodeValue: string): void;
    cancelEditing(): void;
}
