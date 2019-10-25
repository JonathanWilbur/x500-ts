import { Attribute } from "../InformationFramework";

/**
 * `SignedAttributes ::= SET SIZE (1..MAX) OF Attribute{{SupportedSignedAttributes}}`
 */
type SignedAttributes = Attribute[];
export default SignedAttributes;
