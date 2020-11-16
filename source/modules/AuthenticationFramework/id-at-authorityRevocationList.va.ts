/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_at } from "../UsefulDefinitions/id-at.va";
export { id_at } from "../UsefulDefinitions/id-at.va";

/* START_OF_SYMBOL_DEFINITION id_at_authorityRevocationList */
/**
 * @summary id_at_authorityRevocationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-authorityRevocationList       OBJECT IDENTIFIER ::= {id-at 38}
 * ```
 *
 * @constant
 */
export const id_at_authorityRevocationList: OBJECT_IDENTIFIER = new _OID(
    [38],
    id_at
);
/* END_OF_SYMBOL_DEFINITION id_at_authorityRevocationList */

/* eslint-enable */
