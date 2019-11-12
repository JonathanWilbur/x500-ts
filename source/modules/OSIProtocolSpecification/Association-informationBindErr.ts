import { External } from "asn1-ts";

/**
 * `Association-informationBindErr{APPLICATION-CONTEXT:Protocols} ::=
 *   SEQUENCE SIZE (1) OF
 *     EXTERNAL (
 *       WITH COMPONENTS {
 *         identification         (WITH COMPONENTS {..., syntax ABSENT}),
 *         data-value-descriptor  ABSENT,
 *         data-value             (CONTAINING TheOsiBindErr{{Protocols}})})`
 */
type Association_informationBindErr = [ External ];
export default Association_informationBindErr;
