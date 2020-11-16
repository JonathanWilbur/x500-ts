/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_oa } from "../UsefulDefinitions/id-oa.va";
export { id_oa } from "../UsefulDefinitions/id-oa.va";

/* START_OF_SYMBOL_DEFINITION id_oa_pwdFailureDuration */
/**
 * @summary id_oa_pwdFailureDuration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-pwdFailureDuration         OBJECT IDENTIFIER ::= {id-oa 40}
 * ```
 *
 * @constant
 */
export const id_oa_pwdFailureDuration: OBJECT_IDENTIFIER = new _OID(
    [40],
    id_oa
);
/* END_OF_SYMBOL_DEFINITION id_oa_pwdFailureDuration */

/* eslint-enable */
