import ExtensionAttribute from "./ExtensionAttribute";

/**
 * `ExtensionAttributes ::= SET SIZE (1..ub-extension-attributes) OF ExtensionAttribute`
 */
type ExtensionAttributes = ExtensionAttribute[];
export default ExtensionAttributes;
