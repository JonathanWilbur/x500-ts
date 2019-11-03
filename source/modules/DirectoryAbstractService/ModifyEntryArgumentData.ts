import CommonArguments from "./CommonArguments";
import Name from "../InformationFramework/Name";
import EntryModification from "./EntryModification";
import EntryInformationSelection from "./EntryInformationSelection";

/**
 * `ModifyEntryArgumentData ::= SET {
 *   object     [0]  Name,
 *   changes    [1]  SEQUENCE OF EntryModification,
 *   selection  [2]  EntryInformationSelection OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF   CommonArguments }`
 */
export default
class ModifyEntryArgumentData {
    constructor (
        readonly object: Name,
        readonly changes: EntryModification[],
        readonly selection: EntryInformationSelection,
        readonly commonArguments: CommonArguments,
    ) {}
}
