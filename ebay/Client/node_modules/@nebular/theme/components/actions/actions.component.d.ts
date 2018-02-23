/**
 * Action item, display a link with an icon, or any other content provided instead.
 */
export declare class NbActionComponent {
    disabledValue: boolean;
    /**
     * Icon class to display
     * @type string
     */
    icon: string;
    /**
     * Disables the item (changes item opacity and mouse cursor)
     * @type boolean
     */
    disabled: boolean;
    /**
     * Badge text to display
     * @type string
     */
    badgeText: string;
    /**
     * Badge status (adds specific styles):
     * 'primary', 'info', 'success', 'warning', 'danger'
     * @param {string} val
     */
    badgeStatus: string;
    /**
     * Badge position.
     * Can be set to any class or to one of predefined positions:
     * 'top left', 'top right', 'bottom left', 'bottom right'
     * @type string
     */
    badgePosition: string;
}
/**
 * Shows a horizontal list of actions, available in multiple sizes
 * Aligns items vertically.
 *
 * @styles
 *
 * actions-font-size:
 * actions-font-family:
 * actions-line-height:
 * actions-fg:
 * actions-bg:
 * actions-separator:
 * actions-padding:
 * actions-size-small:
 * actions-size-medium:
 * actions-size-large:
 */
export declare class NbActionsComponent {
    static readonly SIZE_SMALL: string;
    static readonly SIZE_MEDIUM: string;
    static readonly SIZE_LARGE: string;
    private sizeValue;
    inverseValue: boolean;
    readonly small: boolean;
    readonly medium: boolean;
    readonly large: boolean;
    private fullWidthValue;
    /**
     * Size of the component, small|medium|large
     * @type string
     */
    size: string;
    /**
     * Makes colors inverse based on current theme
     * @type boolean
     */
    inverse: boolean;
    /**
     * Component will fill full width of the container
     * @type boolean
     */
    fullWidth: boolean;
}
