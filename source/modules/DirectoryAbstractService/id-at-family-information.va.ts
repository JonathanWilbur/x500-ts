/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_at } from "../UsefulDefinitions/id-at.va";
export { id_at } from "../UsefulDefinitions/id-at.va";

/* START_OF_SYMBOL_DEFINITION id_at_family_information */
/**
 * @summary id_at_family_information
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-family-information OBJECT IDENTIFIER ::= {id-at 64}
 * ```
 *
 * @constant
 */
export const id_at_family_information: OBJECT_IDENTIFIER = new _OID(
    [64],
    id_at
);
/* END_OF_SYMBOL_DEFINITION id_at_family_information */

/* eslint-enable */
