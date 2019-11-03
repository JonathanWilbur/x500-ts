import CommonArguments from "./CommonArguments";
import Name from "../InformationFramework/Name";
import PagedResultsRequest from "./PagedResultsRequest";

/**
 * `ListArgumentData ::= SET {
 *   object        [0]  Name,
 *   pagedResults  [1]  PagedResultsRequest OPTIONAL,
 *   listFamily    [2]  BOOLEAN DEFAULT FALSE,
 *   ...,
 *   ...,
 *   COMPONENTS OF      CommonArguments }`
 */
export default
class ListArgumentData {
    constructor (
        readonly object: Name,
        readonly pagedResults: PagedResultsRequest | undefined,
        readonly listFamily: boolean,
        readonly commonArguments: CommonArguments,
    ) {}
}
