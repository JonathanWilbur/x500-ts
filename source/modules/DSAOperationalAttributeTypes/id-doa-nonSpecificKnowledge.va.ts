/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_doa } from "../UsefulDefinitions/id-doa.va";
export { id_doa } from "../UsefulDefinitions/id-doa.va";

/* START_OF_SYMBOL_DEFINITION id_doa_nonSpecificKnowledge */
/**
 * @summary id_doa_nonSpecificKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-doa-nonSpecificKnowledge     OBJECT IDENTIFIER ::= {id-doa 4}
 * ```
 *
 * @constant
 */
export const id_doa_nonSpecificKnowledge: OBJECT_IDENTIFIER = new _OID(
    [4],
    id_doa
);
/* END_OF_SYMBOL_DEFINITION id_doa_nonSpecificKnowledge */

/* eslint-enable */
