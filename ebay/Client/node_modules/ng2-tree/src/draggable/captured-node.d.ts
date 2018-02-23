import { Tree } from '../tree';
import { ElementRef } from '@angular/core';
export declare class CapturedNode {
    private anElement;
    private aTree;
    constructor(anElement: ElementRef, aTree: Tree);
    canBeDroppedAt(element: ElementRef): boolean;
    contains(other: ElementRef): boolean;
    sameAs(other: ElementRef): boolean;
    readonly element: ElementRef;
    readonly tree: Tree;
}
