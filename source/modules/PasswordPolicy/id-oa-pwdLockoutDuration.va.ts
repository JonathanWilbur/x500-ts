/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_oa } from "../UsefulDefinitions/id-oa.va";
export { id_oa } from "../UsefulDefinitions/id-oa.va";

/* START_OF_SYMBOL_DEFINITION id_oa_pwdLockoutDuration */
/**
 * @summary id_oa_pwdLockoutDuration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-pwdLockoutDuration         OBJECT IDENTIFIER ::= {id-oa 41}
 * ```
 *
 * @constant
 */
export const id_oa_pwdLockoutDuration: OBJECT_IDENTIFIER = new _OID(
    [41],
    id_oa
);
/* END_OF_SYMBOL_DEFINITION id_oa_pwdLockoutDuration */

/* eslint-enable */
