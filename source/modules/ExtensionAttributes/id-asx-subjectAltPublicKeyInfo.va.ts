/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_ce } from "../UsefulDefinitions/id-ce.va";
export { id_ce } from "../UsefulDefinitions/id-ce.va";

/* START_OF_SYMBOL_DEFINITION id_asx_subjectAltPublicKeyInfo */
/**
 * @summary id_asx_subjectAltPublicKeyInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-subjectAltPublicKeyInfo             OBJECT IDENTIFIER ::= {id-ce 72 2}
 * ```
 *
 * @constant
 */
export const id_asx_subjectAltPublicKeyInfo: OBJECT_IDENTIFIER = new _OID(
    [72, 2],
    id_ce
);
/* END_OF_SYMBOL_DEFINITION id_asx_subjectAltPublicKeyInfo */

/* eslint-enable */
