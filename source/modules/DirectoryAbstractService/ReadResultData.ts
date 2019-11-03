import CommonResults from "./CommonResults";
import EntryInformation from "./EntryInformation";
import ModifyRights from "./ModifyRights";

/**
 * `ReadResultData ::= SET {
 *   entry         [0]  EntryInformation,
 *   modifyRights  [1]  ModifyRights OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF      CommonResults }`
 */
export default
class ReadResultData {
    constructor (
        readonly entry: EntryInformation,
        readonly modifyRights: ModifyRights | undefined,
        readonly commonResults: CommonResults,
    ) {}
}
