import UniversalDomainDefinedAttribute from "./UniversalDomainDefinedAttribute";

/**
 * `UniversalDomainDefinedAttributes ::=
 *   SEQUENCE SIZE (1..ub-domain-defined-attributes) OF UniversalDomainDefinedAttribute`
 */
type UniversalDomainDefinedAttributes = UniversalDomainDefinedAttribute[];
export default UniversalDomainDefinedAttributes;
