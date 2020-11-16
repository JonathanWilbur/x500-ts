/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_acScheme } from "../UsefulDefinitions/id-acScheme.va";
export { id_acScheme } from "../UsefulDefinitions/id-acScheme.va";

/* START_OF_SYMBOL_DEFINITION rule_based_access_control */
/**
 * @summary rule_based_access_control
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rule-based-access-control      OBJECT IDENTIFIER ::= {id-acScheme 3}
 * ```
 *
 * @constant
 */
export const rule_based_access_control: OBJECT_IDENTIFIER = new _OID(
    [3],
    id_acScheme
);
/* END_OF_SYMBOL_DEFINITION rule_based_access_control */

/* eslint-enable */
