import { ObjectIdentifier } from "asn1-ts";

/**
 * `AttributeIdentifier ::= ATTRIBUTE.&id({AttributeIDs})`
 */
type AttributeIdentifier = ObjectIdentifier;
export default AttributeIdentifier;
