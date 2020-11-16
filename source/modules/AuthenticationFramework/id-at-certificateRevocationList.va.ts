/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_at } from "../UsefulDefinitions/id-at.va";
export { id_at } from "../UsefulDefinitions/id-at.va";

/* START_OF_SYMBOL_DEFINITION id_at_certificateRevocationList */
/**
 * @summary id_at_certificateRevocationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-certificateRevocationList     OBJECT IDENTIFIER ::= {id-at 39}
 * ```
 *
 * @constant
 */
export const id_at_certificateRevocationList: OBJECT_IDENTIFIER = new _OID(
    [39],
    id_at
);
/* END_OF_SYMBOL_DEFINITION id_at_certificateRevocationList */

/* eslint-enable */
