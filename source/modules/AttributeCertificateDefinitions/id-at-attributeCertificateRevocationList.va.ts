/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_at } from "../UsefulDefinitions/id-at.va";
export { id_at } from "../UsefulDefinitions/id-at.va";

/* START_OF_SYMBOL_DEFINITION id_at_attributeCertificateRevocationList */
/**
 * @summary id_at_attributeCertificateRevocationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-attributeCertificateRevocationList OBJECT IDENTIFIER ::= {id-at 59}
 * ```
 *
 * @constant
 */
export const id_at_attributeCertificateRevocationList: OBJECT_IDENTIFIER = new _OID(
    [59],
    id_at
);
/* END_OF_SYMBOL_DEFINITION id_at_attributeCertificateRevocationList */

/* eslint-enable */
