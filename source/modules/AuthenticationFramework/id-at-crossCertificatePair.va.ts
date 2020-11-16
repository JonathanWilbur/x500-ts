/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_at } from "../UsefulDefinitions/id-at.va";
export { id_at } from "../UsefulDefinitions/id-at.va";

/* START_OF_SYMBOL_DEFINITION id_at_crossCertificatePair */
/**
 * @summary id_at_crossCertificatePair
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-crossCertificatePair          OBJECT IDENTIFIER ::= {id-at 40}
 * ```
 *
 * @constant
 */
export const id_at_crossCertificatePair: OBJECT_IDENTIFIER = new _OID(
    [40],
    id_at
);
/* END_OF_SYMBOL_DEFINITION id_at_crossCertificatePair */

/* eslint-enable */
