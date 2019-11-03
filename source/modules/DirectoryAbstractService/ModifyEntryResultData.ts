import CommonResultsSeq from "./CommonResultsSeq";
import EntryInformation from "./EntryInformation";

/**
 * `ModifyEntryResultData ::= SEQUENCE {
 *   entry    [0]  EntryInformation OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResultsSeq }`
 */
export default
class ModifyEntryResultData {
    constructor (
        readonly entry: EntryInformation,
        readonly commonResultsSeq: CommonResultsSeq,
    ) {}
}
