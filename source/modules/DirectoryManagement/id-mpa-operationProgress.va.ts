/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mpa } from "../DirectoryManagement/id-mpa.va";
export { id_mpa } from "../DirectoryManagement/id-mpa.va";

/* START_OF_SYMBOL_DEFINITION id_mpa_operationProgress */
/**
 * @summary id_mpa_operationProgress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa-operationProgress OBJECT IDENTIFIER ::= {id-mpa 19}
 * ```
 *
 * @constant
 */
export const id_mpa_operationProgress: OBJECT_IDENTIFIER = new _OID(
    [19],
    id_mpa
);
/* END_OF_SYMBOL_DEFINITION id_mpa_operationProgress */

/* eslint-enable */
