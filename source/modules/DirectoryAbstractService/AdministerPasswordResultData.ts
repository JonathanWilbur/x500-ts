import CommonResultsSeq from "./CommonResultsSeq";

/**
 * `AdministerPasswordResultData ::= SEQUENCE {
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResultsSeq }`
 */
export default
class AdministerPasswordResultData {
    constructor (
        readonly commonResultsSeq: CommonResultsSeq,
    ) {}
}
