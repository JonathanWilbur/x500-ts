import { ObjectIdentifier } from "asn1-ts";

/**
 * `ProtRestriction ::= SEQUENCE (SIZE (1..MAX)) OF OBJECT IDENTIFIER`
 */
type ProtRestriction = ObjectIdentifier[];
export default ProtRestriction;
