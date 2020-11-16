/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_lsx } from "../UsefulDefinitions/id-lsx.va";
export { id_lsx } from "../UsefulDefinitions/id-lsx.va";

/* START_OF_SYMBOL_DEFINITION id_lsx_x509CertificatePair */
/**
 * @summary id_lsx_x509CertificatePair
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx-x509CertificatePair          OBJECT IDENTIFIER ::= {id-lsx 10}
 * ```
 *
 * @constant
 */
export const id_lsx_x509CertificatePair: OBJECT_IDENTIFIER = new _OID(
    [10],
    id_lsx
);
/* END_OF_SYMBOL_DEFINITION id_lsx_x509CertificatePair */

/* eslint-enable */
