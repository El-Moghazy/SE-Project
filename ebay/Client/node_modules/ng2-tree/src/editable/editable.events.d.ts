export declare type NodeEditableEventType = 'blur' | 'keyup';
export declare enum NodeEditableEventAction {
    Cancel = 0,
}
export interface NodeEditableEvent {
    value: string;
    type: NodeEditableEventType;
    action?: NodeEditableEventAction;
}
