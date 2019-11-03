import CommonResultsSeq from "./CommonResultsSeq";

/**
 * `RemoveEntryResultData ::= SEQUENCE {
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResultsSeq }`
 */
export default
class RemoveEntryResultData {
    constructor (
        readonly commonResultsSeq: CommonResultsSeq,
    ) {}
}
