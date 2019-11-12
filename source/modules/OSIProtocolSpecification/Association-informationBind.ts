import { External } from "asn1-ts";

/**
 * `Association-informationBind{APPLICATION-CONTEXT:Protocols} ::=
 *   SEQUENCE SIZE (1..MAX) OF
 *     EXTERNAL
 *       (WITH COMPONENTS {
 *          identification         (WITH COMPONENTS {..., syntax ABSENT}),
 *          data-value-descriptor  ABSENT,
 *          data-value             (CONTAINING TheOsiBind{{Protocols}})})`
 */
type Association_informationBind = [ External ];
export default Association_informationBind;
