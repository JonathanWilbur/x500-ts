/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mpa } from "../DirectoryManagement/id-mpa.va";
export { id_mpa } from "../DirectoryManagement/id-mpa.va";

/* START_OF_SYMBOL_DEFINITION id_mpa_shadowing_dop_prob */
/**
 * @summary id_mpa_shadowing_dop_prob
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa-shadowing-dop-prob OBJECT IDENTIFIER ::= {id-mpa 26}
 * ```
 *
 * @constant
 */
export const id_mpa_shadowing_dop_prob: OBJECT_IDENTIFIER = new _OID(
    [26],
    id_mpa
);
/* END_OF_SYMBOL_DEFINITION id_mpa_shadowing_dop_prob */

/* eslint-enable */
