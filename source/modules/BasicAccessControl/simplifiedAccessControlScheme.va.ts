/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_acScheme } from "../UsefulDefinitions/id-acScheme.va";
export { id_acScheme } from "../UsefulDefinitions/id-acScheme.va";

/* START_OF_SYMBOL_DEFINITION simplifiedAccessControlScheme */
/**
 * @summary simplifiedAccessControlScheme
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * simplifiedAccessControlScheme  OBJECT IDENTIFIER ::= {id-acScheme 2}
 * ```
 *
 * @constant
 */
export const simplifiedAccessControlScheme: OBJECT_IDENTIFIER = new _OID(
    [2],
    id_acScheme
);
/* END_OF_SYMBOL_DEFINITION simplifiedAccessControlScheme */

/* eslint-enable */
