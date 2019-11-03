import CommonArguments from "./CommonArguments";
import Name from "../InformationFramework/Name";
import Attribute from "../InformationFramework/Attribute";
import AccessPoint from "../DistributedOperations/AccessPoint";

/**
 * `AddEntryArgumentData ::= SET {
 *   object        [0]  Name,
 *   entry         [1]  SET OF Attribute{{SupportedAttributes}},
 *   targetSystem  [2]  AccessPoint OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF      CommonArguments }`
 */
export default
class AddEntryArgumentData {
    constructor (
        readonly object: Name,
        readonly entry: Attribute[],
        readonly targetSystem: AccessPoint | undefined,
        readonly commonArguments: CommonArguments,
    ) {}
}
