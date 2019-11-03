import CommonResultsSeq from "./CommonResultsSeq";

/**
 * `ChangePasswordResultData ::= SEQUENCE {
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResultsSeq }`
 */
export default
class ChangePasswordResultData {
    constructor (
        readonly commonResultsSeq: CommonResultsSeq,
    ) {}
}
