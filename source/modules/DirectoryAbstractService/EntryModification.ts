import { BERElement } from "asn1-ts";

/**
 * `EntryModification ::= CHOICE {
 *   addAttribute     [0]  Attribute{{SupportedAttributes}},
 *   removeAttribute  [1]  AttributeType,
 *   addValues        [2]  Attribute{{SupportedAttributes}},
 *   removeValues     [3]  Attribute{{SupportedAttributes}},
 *   alterValues      [4]  AttributeTypeAndValue,
 *   resetValue       [5]  AttributeType,
 *   replaceValues    [6]  Attribute{{SupportedAttributes}},
 *   ... }`
 */
type EntryModification = BERElement;
export default EntryModification;
