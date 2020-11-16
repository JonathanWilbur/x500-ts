/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta";
import { module_ } from "../UsefulDefinitions/module.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";
export { module_ } from "../UsefulDefinitions/module.va";

/* START_OF_SYMBOL_DEFINITION attributeCertificateDefinitions */
/**
 * @summary attributeCertificateDefinitions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeCertificateDefinitions          ID ::= {module attributeCertificateDefinitions(32) 9}
 * ```
 *
 * @constant
 */
export const attributeCertificateDefinitions: ID = new _OID(
    [/* attributeCertificateDefinitions */ 32, 9],
    module_
);
/* END_OF_SYMBOL_DEFINITION attributeCertificateDefinitions */

/* eslint-enable */
