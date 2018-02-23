/**
 * Component intended to be used within  the `<nb-card>` component.
 * It adds styles for a preset header section.
 *
 * @styles
 *
 * card-header-font-family:
 * card-header-font-size:
 * card-header-font-weight:
 * card-header-fg:
 * card-header-fg-heading:
 * card-header-active-bg:
 * card-header-active-fg:
 * card-header-disabled-bg:
 * card-header-primary-bg:
 * card-header-info-bg:
 * card-header-success-bg:
 * card-header-warning-bg:
 * card-header-danger-bg:
 */
export declare class NbCardHeaderComponent {
}
/**
 * Component intended to be used within  the `<nb-card>` component.
 * Adds styles for a preset body section.
 */
export declare class NbCardBodyComponent {
}
/**
 * Component intended to be used within  the `<nb-card>` component.
 * Adds styles for a preset footer section.
 */
export declare class NbCardFooterComponent {
}
/**
 * Basic content container component.
 *
 * @example While this component can be used alone, it also provides a number
 * of child components for common card sections:
 *
 * ```
 * <nb-card-header></nb-card-header>
 * <nb-card-body></nb-card-body>
 * <nb-card-footer></nb-card-footer>
 * ```
 *
 * @styles
 *
 * card-line-height:
 * card-font-weight:
 * card-fg-text:
 * card-bg:
 * card-height-xxsmall:
 * card-height-xsmall:
 * card-height-small:
 * card-height-medium:
 * card-height-large:
 * card-height-xlarge:
 * card-height-xxlarge:
 * card-shadow:
 * card-border-radius:
 * card-padding:
 * card-margin:
 * card-separator:
 *
 */
export declare class NbCardComponent {
    static readonly SIZE_XXSMALL: string;
    static readonly SIZE_XSMALL: string;
    static readonly SIZE_SMALL: string;
    static readonly SIZE_MEDIUM: string;
    static readonly SIZE_LARGE: string;
    static readonly SIZE_XLARGE: string;
    static readonly SIZE_XXLARGE: string;
    static readonly STATUS_ACTIVE: string;
    static readonly STATUS_DISABLED: string;
    static readonly STATUS_PRIMARY: string;
    static readonly STATUS_INFO: string;
    static readonly STATUS_SUCCESS: string;
    static readonly STATUS_WARNING: string;
    static readonly STATUS_DANGER: string;
    static readonly ACCENT_ACTIVE: string;
    static readonly ACCENT_DISABLED: string;
    static readonly ACCENT_PRIMARY: string;
    static readonly ACCENT_INFO: string;
    static readonly ACCENT_SUCCESS: string;
    static readonly ACCENT_WARNING: string;
    static readonly ACCENT_DANGER: string;
    size: string;
    status: string;
    accent: string;
    private readonly xxsmall;
    private readonly xsmall;
    private readonly small;
    private readonly medium;
    private readonly large;
    private readonly xlarge;
    private readonly xxlarge;
    private readonly active;
    private readonly disabled;
    private readonly primary;
    private readonly info;
    private readonly success;
    private readonly warning;
    private readonly danger;
    private readonly hasAccent;
    private readonly primaryAccent;
    private readonly infoAccent;
    private readonly successAccent;
    private readonly warningAccent;
    private readonly dangerAccent;
    private readonly activeAccent;
    private readonly disabledAccent;
    /**
     * Card size, available sizes:
     * xxsmall, xsmall, small, medium, large, xlarge, xxlarge
     * @param {string} val
     */
    private setSize;
    /**
     * Card status (adds specific styles):
     * active, disabled, primary, info, success, warning, danger
     * @param {string} val
     */
    private setStatus;
    /**
     * Card accent (color of the top border):
     * active, disabled, primary, info, success, warning, danger
     * @param {string} val
     */
    private setAccent;
}
