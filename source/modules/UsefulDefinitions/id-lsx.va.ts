/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta";
import { ldap_syntax } from "../UsefulDefinitions/ldap-syntax.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";
export { ldap_syntax } from "../UsefulDefinitions/ldap-syntax.va";

/* START_OF_SYMBOL_DEFINITION id_lsx */
/**
 * @summary id_lsx
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx                                   ID ::= ldap-syntax
 * ```
 *
 * @constant
 */
export const id_lsx: ID = ldap_syntax;
/* END_OF_SYMBOL_DEFINITION id_lsx */

/* eslint-enable */
