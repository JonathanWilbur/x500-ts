import CommonResults from "./CommonResults";
import Name from "../InformationFramework/Name";
import AttributeProblem from "./AttributeProblem";
import AttributeType from "../InformationFramework/AttributeType";
import AttributeValue from "../InformationFramework/AttributeValue";

/**
 * `AttributeErrorData ::= SET {
 *   object   [0]  Name,
 *   problems [1]  SET OF SEQUENCE {
 *     problem  [0]  AttributeProblem,
 *     type     [1]  AttributeType,
 *     value    [2]  AttributeValue OPTIONAL,
 *     ...},
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResults }`
 */
export default
class AttributeErrorData {
    constructor (
        readonly object: Name,
        readonly problems: {
            problem: AttributeProblem;
            type: AttributeType;
            value: AttributeValue | undefined;
        }[],
        readonly commonResults: CommonResults,
    ) {}
}
