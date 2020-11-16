/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_acScheme } from "../UsefulDefinitions/id-acScheme.va";
export { id_acScheme } from "../UsefulDefinitions/id-acScheme.va";

/* START_OF_SYMBOL_DEFINITION basicAccessControlScheme */
/**
 * @summary basicAccessControlScheme
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * basicAccessControlScheme       OBJECT IDENTIFIER ::= {id-acScheme 1}
 * ```
 *
 * @constant
 */
export const basicAccessControlScheme: OBJECT_IDENTIFIER = new _OID(
    [1],
    id_acScheme
);
/* END_OF_SYMBOL_DEFINITION basicAccessControlScheme */

/* eslint-enable */
