/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta";
import { internet } from "../UsefulDefinitions/internet.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";
export { internet } from "../UsefulDefinitions/internet.va";

/* START_OF_SYMBOL_DEFINITION ldap_enterprise */
/**
 * @summary ldap_enterprise
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldap-enterprise     ID ::= {internet private(4) enterprise(1)}
 * ```
 *
 * @constant
 */
export const ldap_enterprise: ID = new _OID(
    [/* private */ 4, /* enterprise */ 1],
    internet
);
/* END_OF_SYMBOL_DEFINITION ldap_enterprise */

/* eslint-enable */
