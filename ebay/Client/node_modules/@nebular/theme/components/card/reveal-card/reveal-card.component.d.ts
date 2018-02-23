/**
 * Reveal card component.
 *
 * ![image](assets/images/components/reveal-card.gif)
 *
 * @example
 *
 * ```
 * <nb-reveal-card>
 *   <nb-card-front>
 *     <nb-card><nb-card-body>Front Card</nb-card-body></nb-card>
 *   </nb-card-front>
 *   <nb-card-back>
 *     <nb-card><nb-card-body>Back Card</nb-card-body></nb-card>
 *   </nb-card-back>
 * </nb-reveal-card>
 * ```
 */
export declare class NbRevealCardComponent {
    /**
     * Reveal state
     * @type boolean
     */
    revealed: boolean;
    toggleReveal(): void;
}
