/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_oc } from "../UsefulDefinitions/id-oc.va";
export { id_oc } from "../UsefulDefinitions/id-oc.va";

/* START_OF_SYMBOL_DEFINITION id_oc_certificationAuthority */
/**
 * @summary id_oc_certificationAuthority
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-certificationAuthority   OBJECT IDENTIFIER ::= {id-oc 16}
 * ```
 *
 * @constant
 */
export const id_oc_certificationAuthority: OBJECT_IDENTIFIER = new _OID(
    [16],
    id_oc
);
/* END_OF_SYMBOL_DEFINITION id_oc_certificationAuthority */

/* eslint-enable */
