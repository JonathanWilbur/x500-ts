import CommonArguments from "./CommonArguments";
import AttributeValueAssertion from "../InformationFramework/AttributeValueAssertion";
import Name from "../InformationFramework/Name";

/**
 * `CompareArgumentData ::= SET {
 *   object       [0]  Name,
 *   purported    [1]  AttributeValueAssertion,
 *   ...,
 *   ...,
 *   COMPONENTS OF     CommonArguments }`
 */
export default
class CompareArgumentData {
    constructor (
        readonly object: Name,
        readonly purported: AttributeValueAssertion,
        readonly commonArguments: CommonArguments,
    ) {}
}
