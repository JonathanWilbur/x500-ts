/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_ce } from "../UsefulDefinitions/id-ce.va";
export { id_ce } from "../UsefulDefinitions/id-ce.va";

/* START_OF_SYMBOL_DEFINITION id_ce_subjectAltPublicKeyInfo */
/**
 * @summary id_ce_subjectAltPublicKeyInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-subjectAltPublicKeyInfo            OBJECT IDENTIFIER ::= {id-ce 72}
 * ```
 *
 * @constant
 */
export const id_ce_subjectAltPublicKeyInfo: OBJECT_IDENTIFIER = new _OID(
    [72],
    id_ce
);
/* END_OF_SYMBOL_DEFINITION id_ce_subjectAltPublicKeyInfo */

/* eslint-enable */
