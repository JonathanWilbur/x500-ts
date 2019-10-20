import Attribute from "../InformationFramework/Attribute";

/**
 * `AttributesSyntax ::= SEQUENCE SIZE (1..MAX) OF Attribute{{SupportedAttributes}}`
 */
type AttributesSyntax = Attribute[];
export default AttributesSyntax;
