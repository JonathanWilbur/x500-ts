import TeletexDomainDefinedAttribute from "./TeletexDomainDefinedAttribute";

/**
 * `TeletexDomainDefinedAttributes ::=
 *   SEQUENCE SIZE (1..ub-domain-defined-attributes) OF TeletexDomainDefinedAttribute`
 */
type TeletexDomainDefinedAttributes = TeletexDomainDefinedAttribute[];
export default TeletexDomainDefinedAttributes;
