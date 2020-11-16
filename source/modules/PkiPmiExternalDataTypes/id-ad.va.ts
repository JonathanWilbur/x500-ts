/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_pkix } from "../PkiPmiExternalDataTypes/id-pkix.va";
export { id_pkix } from "../PkiPmiExternalDataTypes/id-pkix.va";

/* START_OF_SYMBOL_DEFINITION id_ad */
/**
 * @summary id_ad
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ad                     OBJECT IDENTIFIER ::= { id-pkix 48 }
 * ```
 *
 * @constant
 */
export const id_ad: OBJECT_IDENTIFIER = new _OID([48], id_pkix);
/* END_OF_SYMBOL_DEFINITION id_ad */

/* eslint-enable */
