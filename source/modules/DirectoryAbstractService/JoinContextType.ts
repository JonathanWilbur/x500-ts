import { ObjectIdentifier } from "asn1-ts";

/**
 * `JoinContextType ::= CONTEXT.&id({SupportedContexts})`
 */
type JoinContextType = ObjectIdentifier;
export default JoinContextType;
