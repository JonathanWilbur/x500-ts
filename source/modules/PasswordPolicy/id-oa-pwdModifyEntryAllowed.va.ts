/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_oa } from "../UsefulDefinitions/id-oa.va";
export { id_oa } from "../UsefulDefinitions/id-oa.va";

/* START_OF_SYMBOL_DEFINITION id_oa_pwdModifyEntryAllowed */
/**
 * @summary id_oa_pwdModifyEntryAllowed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-pwdModifyEntryAllowed      OBJECT IDENTIFIER ::= {id-oa 30}
 * ```
 *
 * @constant
 */
export const id_oa_pwdModifyEntryAllowed: OBJECT_IDENTIFIER = new _OID(
    [30],
    id_oa
);
/* END_OF_SYMBOL_DEFINITION id_oa_pwdModifyEntryAllowed */

/* eslint-enable */
