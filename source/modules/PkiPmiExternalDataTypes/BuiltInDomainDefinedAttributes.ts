import BuiltInDomainDefinedAttribute from "./BuiltInDomainDefinedAttribute";

/**
 * `BuiltInDomainDefinedAttributes ::= SEQUENCE SIZE (1..ub-domain-defined-attributes) OF
 *    BuiltInDomainDefinedAttribute`
 */
type BuiltInDomainDefinedAttributes = BuiltInDomainDefinedAttribute[];
export default BuiltInDomainDefinedAttributes;
