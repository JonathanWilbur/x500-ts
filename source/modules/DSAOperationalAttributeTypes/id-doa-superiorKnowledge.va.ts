/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_doa } from "../UsefulDefinitions/id-doa.va";
export { id_doa } from "../UsefulDefinitions/id-doa.va";

/* START_OF_SYMBOL_DEFINITION id_doa_superiorKnowledge */
/**
 * @summary id_doa_superiorKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-doa-superiorKnowledge        OBJECT IDENTIFIER ::= {id-doa 2}
 * ```
 *
 * @constant
 */
export const id_doa_superiorKnowledge: OBJECT_IDENTIFIER = new _OID(
    [2],
    id_doa
);
/* END_OF_SYMBOL_DEFINITION id_doa_superiorKnowledge */

/* eslint-enable */
