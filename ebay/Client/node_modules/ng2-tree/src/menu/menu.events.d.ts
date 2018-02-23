export declare enum NodeMenuItemAction {
    NewFolder = 0,
    NewTag = 1,
    Rename = 2,
    Remove = 3,
    Custom = 4,
}
export declare enum NodeMenuAction {
    Close = 0,
}
export interface NodeMenuEvent {
    sender: HTMLElement;
    action: NodeMenuAction;
}
export interface NodeMenuItemSelectedEvent {
    nodeMenuItemAction: NodeMenuItemAction;
    nodeMenuItemSelected?: string;
}
