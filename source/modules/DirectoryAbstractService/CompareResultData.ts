import CommonResults from "./CommonResults";
import Name from "../InformationFramework/Name";
import AttributeType from "../InformationFramework/AttributeType";

/**
 * `CompareResultData ::= SET {
 *   name                 Name OPTIONAL,
 *   matched         [0]  BOOLEAN,
 *   fromEntry       [1]  BOOLEAN DEFAULT TRUE,
 *   matchedSubtype  [2]  AttributeType OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF        CommonResults }`
 */
export default
class CompareResultData {
    constructor (
        readonly name: Name,
        readonly matched: boolean,
        readonly fromEntry: boolean,
        readonly matchedSubtype: AttributeType | undefined,
        readonly commonResults: CommonResults,
    ) {}
}
