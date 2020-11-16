/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_contract } from "../UsefulDefinitions/id-contract.va";
export { id_contract } from "../UsefulDefinitions/id-contract.va";

/* START_OF_SYMBOL_DEFINITION id_contract_shadowConsumer */
/**
 * @summary id_contract_shadowConsumer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-contract-shadowConsumer OBJECT IDENTIFIER ::= {id-contract 3}
 * ```
 *
 * @constant
 */
export const id_contract_shadowConsumer: OBJECT_IDENTIFIER = new _OID(
    [3],
    id_contract
);
/* END_OF_SYMBOL_DEFINITION id_contract_shadowConsumer */

/* eslint-enable */
