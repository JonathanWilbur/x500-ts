/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { ldapTransport } from "../DirectoryAbstractService/ldapTransport.oa";
import { chained } from "../DistributedOperations/chained.oa";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { ldapTransport } from "../DirectoryAbstractService/ldapTransport.oa";
export { chained } from "../DistributedOperations/chained.oa";

/* START_OF_SYMBOL_DEFINITION chainedLdapTransport */
/**
 * @summary chainedLdapTransport
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedLdapTransport      OPERATION ::= chained{ldapTransport}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedLdapTransport: OPERATION = chained(ldapTransport);
/* END_OF_SYMBOL_DEFINITION chainedLdapTransport */

/* eslint-enable */
