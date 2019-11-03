import CommonArguments from "./CommonArguments";
import Name from "../InformationFramework/Name";
import EntryInformationSelection from "./EntryInformationSelection";

/**
 * `ReadArgumentData ::= SET {
 *   object               [0]  Name,
 *   selection            [1]  EntryInformationSelection DEFAULT {},
 *   modifyRightsRequest  [2]  BOOLEAN DEFAULT FALSE,
 *   ...,
 *   ...,
 *   COMPONENTS OF             CommonArguments }`
 */
export default
class ReadArgumentData {
    constructor (
        readonly object: Name,
        readonly selection: EntryInformationSelection,
        readonly modifyRightsRequest: boolean,
        readonly commonArguments: CommonArguments,
    ) {}
}
