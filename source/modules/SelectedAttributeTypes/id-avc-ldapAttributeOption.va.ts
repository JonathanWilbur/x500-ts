/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_avc } from "../UsefulDefinitions/id-avc.va";
export { id_avc } from "../UsefulDefinitions/id-avc.va";

/* START_OF_SYMBOL_DEFINITION id_avc_ldapAttributeOption */
/**
 * @summary id_avc_ldapAttributeOption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-avc-ldapAttributeOption                OBJECT IDENTIFIER ::= {id-avc 5}
 * ```
 *
 * @constant
 */
export const id_avc_ldapAttributeOption: OBJECT_IDENTIFIER = new _OID(
    [5],
    id_avc
);
/* END_OF_SYMBOL_DEFINITION id_avc_ldapAttributeOption */

/* eslint-enable */
