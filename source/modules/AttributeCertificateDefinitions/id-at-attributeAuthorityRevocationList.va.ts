/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_at } from "../UsefulDefinitions/id-at.va";
export { id_at } from "../UsefulDefinitions/id-at.va";

/* START_OF_SYMBOL_DEFINITION id_at_attributeAuthorityRevocationList */
/**
 * @summary id_at_attributeAuthorityRevocationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-attributeAuthorityRevocationList   OBJECT IDENTIFIER ::= {id-at 63}
 * ```
 *
 * @constant
 */
export const id_at_attributeAuthorityRevocationList: OBJECT_IDENTIFIER = new _OID(
    [63],
    id_at
);
/* END_OF_SYMBOL_DEFINITION id_at_attributeAuthorityRevocationList */

/* eslint-enable */
