import { External } from "asn1-ts";

/**
 * `Association-informationBindRes{APPLICATION-CONTEXT:Protocols} ::=
 *   SEQUENCE SIZE (1) OF
 *     EXTERNAL (
 *       WITH COMPONENTS {
 *         identification         (WITH COMPONENTS {..., syntax ABSENT}),
 *         data-value-descriptor  ABSENT,
 *         data-value             (CONTAINING TheOsiBindRes{{Protocols}})})`
 */
type Association_informationBindRes = [ External ];
export default Association_informationBindRes;
