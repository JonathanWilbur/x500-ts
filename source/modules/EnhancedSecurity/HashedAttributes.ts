import Attribute from "../InformationFramework/Attribute";

/**
 * `HashedAttributes ::= SEQUENCE SIZE (1..MAX) OF Attribute{{SupportedAttributes}}`
 */
type HashedAttributes = Attribute[];
export default HashedAttributes;
