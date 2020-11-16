/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mpa } from "../DirectoryManagement/id-mpa.va";
export { id_mpa } from "../DirectoryManagement/id-mpa.va";

/* START_OF_SYMBOL_DEFINITION id_mpa_extensions */
/**
 * @summary id_mpa_extensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa-extensions OBJECT IDENTIFIER ::= {id-mpa 15}
 * ```
 *
 * @constant
 */
export const id_mpa_extensions: OBJECT_IDENTIFIER = new _OID([15], id_mpa);
/* END_OF_SYMBOL_DEFINITION id_mpa_extensions */

/* eslint-enable */
