/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_doa } from "../UsefulDefinitions/id-doa.va";
export { id_doa } from "../UsefulDefinitions/id-doa.va";

/* START_OF_SYMBOL_DEFINITION id_doa_specificKnowledge */
/**
 * @summary id_doa_specificKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-doa-specificKnowledge        OBJECT IDENTIFIER ::= {id-doa 3}
 * ```
 *
 * @constant
 */
export const id_doa_specificKnowledge: OBJECT_IDENTIFIER = new _OID(
    [3],
    id_doa
);
/* END_OF_SYMBOL_DEFINITION id_doa_specificKnowledge */

/* eslint-enable */
