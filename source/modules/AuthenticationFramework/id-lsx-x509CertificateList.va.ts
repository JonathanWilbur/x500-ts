/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_lsx } from "../UsefulDefinitions/id-lsx.va";
export { id_lsx } from "../UsefulDefinitions/id-lsx.va";

/* START_OF_SYMBOL_DEFINITION id_lsx_x509CertificateList */
/**
 * @summary id_lsx_x509CertificateList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-x509CertificateList          OBJECT IDENTIFIER ::= {id-lsx 9}
 * ```
 *
 * @constant
 */
export const id_lsx_x509CertificateList: OBJECT_IDENTIFIER = new _OID(
    [9],
    id_lsx
);
/* END_OF_SYMBOL_DEFINITION id_lsx_x509CertificateList */

/* eslint-enable */
