import Name from "../InformationFramework/Name";
import CommonArguments from "./CommonArguments";

/**
 * `RemoveEntryArgumentData ::= SET {
 *   object     [0]  Name,
 *   ...,
 *   ...,
 *   COMPONENTS OF   CommonArguments }`
 */
export default
class RemoveEntryArgumentData {
    constructor (
        readonly object: Name,
        readonly commonArguments: CommonArguments,
    ) {}
}
