/**
 * This is represented as a `Uint8Array`, because the serial numbers are
 * typically too large to represent with native integer types.
 *
 * `AvlSerialNumber ::= INTEGER (0..MAX)`
 */
type AvlSerialNumber = Uint8Array;
export default AvlSerialNumber;
