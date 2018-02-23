/**
 * Badge is a simple labeling component.
 * It can be used to add additional information to any content or highlight unread items.
 *
 * Element is absolute positioned, so parent should be
 * [positioned element](https://developer.mozilla.org/en-US/docs/Web/CSS/position).
 * It means parent `position` should be set to anything except `static`, e.g. `relative`,
 * `absolute`, `fixed`, or `sticky`.
 *
 *
 * @example Badge with default position and status(color):
 *
 * ```
 * <nb-badge text="badgeText"></nb-badge>
 * ```
 *
 * @example Badge located on the bottom right with warning status:
 *
 * ```
 * <nb-badge text="badgeText" status="warning" position="bottom right">
 * </nb-badge>
 * ```
 *
 * @styles
 *
 * badge-fg-text:
 * badge-primary-bg-color:
 * badge-success-bg-color:
 * badge-info-bg-color:
 * badge-warning-bg-color:
 * badge-danger-bg-color:
 */
export declare class NbBadgeComponent {
    static readonly TOP_LEFT: string;
    static readonly TOP_RIGHT: string;
    static readonly BOTTOM_LEFT: string;
    static readonly BOTTOM_RIGHT: string;
    static readonly STATUS_PRIMARY: string;
    static readonly STATUS_INFO: string;
    static readonly STATUS_SUCCESS: string;
    static readonly STATUS_WARNING: string;
    static readonly STATUS_DANGER: string;
    positionClass: string;
    colorClass: string;
    /**
     * Text to display
     * @type string
     */
    text: string;
    /**
     * Badge position
     *
     * Can be set to any class or to one of predefined positions:
     * 'top left', 'top right', 'bottom left', 'bottom right'
     * @type string
     */
    position: any;
    /**
     * Badge status (adds specific styles):
     * 'primary', 'info', 'success', 'warning', 'danger'
     * @param {string} val
     * @type string
     */
    status: any;
}
