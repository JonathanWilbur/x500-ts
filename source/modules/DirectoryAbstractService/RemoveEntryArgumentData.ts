import { BERElement } from "asn1-ts";

/**
 * `RemoveEntryArgumentData ::= SET {
 *   object     [0]  Name,
 *   ...,
 *   ...,
 *   COMPONENTS OF   CommonArguments }`
 */
type RemoveEntryArgumentData = BERElement;
export default RemoveEntryArgumentData;
