/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_at } from "../UsefulDefinitions/id-at.va";
export { id_at } from "../UsefulDefinitions/id-at.va";

/* START_OF_SYMBOL_DEFINITION id_at_protocolInformation */
/**
 * @summary id_at_protocolInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-protocolInformation                 OBJECT IDENTIFIER ::= {id-at 48}
 * ```
 *
 * @constant
 */
export const id_at_protocolInformation: OBJECT_IDENTIFIER = new _OID(
    [48],
    id_at
);
/* END_OF_SYMBOL_DEFINITION id_at_protocolInformation */

/* eslint-enable */
