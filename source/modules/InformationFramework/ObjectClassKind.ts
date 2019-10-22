/**
 * `ObjectClassKind ::= ENUMERATED {
 *   abstract   (0),
 *   structural (1),
 *   auxiliary  (2)}`
 */
export enum ObjectClassKind {
    abstract = 0,
    structural = 1,
    auxiliary = 2,
}