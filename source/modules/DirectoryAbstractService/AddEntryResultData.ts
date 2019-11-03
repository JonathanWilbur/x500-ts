import CommonResultsSeq from "./CommonResultsSeq";

/**
 * `AddEntryResultData ::= SEQUENCE {
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResultsSeq }`
 */
export default
class AddEntryResultData {
    constructor (
        readonly commonResultsSeq: CommonResultsSeq,
    ) {}
}
