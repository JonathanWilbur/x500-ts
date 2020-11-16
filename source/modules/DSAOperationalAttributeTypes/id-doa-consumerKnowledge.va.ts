/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_doa } from "../UsefulDefinitions/id-doa.va";
export { id_doa } from "../UsefulDefinitions/id-doa.va";

/* START_OF_SYMBOL_DEFINITION id_doa_consumerKnowledge */
/**
 * @summary id_doa_consumerKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-doa-consumerKnowledge        OBJECT IDENTIFIER ::= {id-doa 6}
 * ```
 *
 * @constant
 */
export const id_doa_consumerKnowledge: OBJECT_IDENTIFIER = new _OID(
    [6],
    id_doa
);
/* END_OF_SYMBOL_DEFINITION id_doa_consumerKnowledge */

/* eslint-enable */
