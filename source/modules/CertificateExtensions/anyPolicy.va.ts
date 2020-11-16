/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_ce_certificatePolicies } from "../CertificateExtensions/id-ce-certificatePolicies.va";
export { id_ce_certificatePolicies } from "../CertificateExtensions/id-ce-certificatePolicies.va";

/* START_OF_SYMBOL_DEFINITION anyPolicy */
/**
 * @summary anyPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * anyPolicy OBJECT IDENTIFIER ::= {id-ce-certificatePolicies 0}
 * ```
 *
 * @constant
 */
export const anyPolicy: OBJECT_IDENTIFIER = new _OID(
    [0],
    id_ce_certificatePolicies
);
/* END_OF_SYMBOL_DEFINITION anyPolicy */

/* eslint-enable */
