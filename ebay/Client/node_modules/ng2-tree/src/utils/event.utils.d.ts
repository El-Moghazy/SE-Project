export declare enum Keys {
    Escape = 27,
}
export declare enum MouseButtons {
    Left = 0,
    Right = 2,
}
export declare function isLeftButtonClicked(e: MouseEvent): boolean;
export declare function isRightButtonClicked(e: MouseEvent): boolean;
export declare function isEscapePressed(e: KeyboardEvent): boolean;
