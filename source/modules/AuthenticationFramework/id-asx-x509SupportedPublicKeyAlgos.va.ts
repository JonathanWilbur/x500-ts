/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_asx } from "../UsefulDefinitions/id-asx.va";
export { id_asx } from "../UsefulDefinitions/id-asx.va";

/* START_OF_SYMBOL_DEFINITION id_asx_x509SupportedPublicKeyAlgos */
/**
 * @summary id_asx_x509SupportedPublicKeyAlgos
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-x509SupportedPublicKeyAlgos  OBJECT IDENTIFIER ::= {id-asx 10}
 * ```
 *
 * @constant
 */
export const id_asx_x509SupportedPublicKeyAlgos: OBJECT_IDENTIFIER = new _OID(
    [10],
    id_asx
);
/* END_OF_SYMBOL_DEFINITION id_asx_x509SupportedPublicKeyAlgos */

/* eslint-enable */
