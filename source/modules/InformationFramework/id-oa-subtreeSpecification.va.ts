/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_oa } from "../UsefulDefinitions/id-oa.va";
export { id_oa } from "../UsefulDefinitions/id-oa.va";

/* START_OF_SYMBOL_DEFINITION id_oa_subtreeSpecification */
/**
 * @summary id_oa_subtreeSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa-subtreeSpecification             OBJECT IDENTIFIER ::= {id-oa 6}
 * ```
 *
 * @constant
 */
export const id_oa_subtreeSpecification: OBJECT_IDENTIFIER = new _OID(
    [6],
    id_oa
);
/* END_OF_SYMBOL_DEFINITION id_oa_subtreeSpecification */

/* eslint-enable */
