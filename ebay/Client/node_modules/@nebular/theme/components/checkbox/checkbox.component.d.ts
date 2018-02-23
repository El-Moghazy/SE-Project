import { ControlValueAccessor } from '@angular/forms';
/**
 * Styled checkbox component
 *
 * @example Basic example
 *
 * ```
 *  <nb-checkbox [(ngModel)]="enabled">Enabled?</nb-checkbox>
 * ```
 *
 * @example Example with status
 *
 * ```
 *  <nb-checkbox [(ngModel)]="enabled" status="danger">Enabled?</nb-checkbox>
 * ```
 *
 * @styles
 *
 * checkbox-bg:
 * checkbox-size:
 * checkbox-border-size:
 * checkbox-border-color:
 * checkbox-selected-border-color:
 * checkbox-fg:
 * radio-fg:
 */
export declare class NbCheckboxComponent implements ControlValueAccessor {
    status: string;
    /**
     * Checkbox value
     * @type {boolean}
     * @private
     */
    _value: boolean;
    disabled: boolean;
    setDisabled: boolean;
    /**
     * Checkbox status (success, warning, danger)
     * @param {string} val
     */
    private setStatus;
    private readonly success;
    private readonly warning;
    private readonly danger;
    onChange: any;
    onTouched: any;
    value: boolean;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(val: any): void;
}
