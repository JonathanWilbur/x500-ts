/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_acScheme } from "../UsefulDefinitions/id-acScheme.va";
export { id_acScheme } from "../UsefulDefinitions/id-acScheme.va";

/* START_OF_SYMBOL_DEFINITION rule_and_simple_access_control */
/**
 * @summary rule_and_simple_access_control
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rule-and-simple-access-control OBJECT IDENTIFIER ::= {id-acScheme 5}
 * ```
 *
 * @constant
 */
export const rule_and_simple_access_control: OBJECT_IDENTIFIER = new _OID(
    [5],
    id_acScheme
);
/* END_OF_SYMBOL_DEFINITION rule_and_simple_access_control */

/* eslint-enable */
