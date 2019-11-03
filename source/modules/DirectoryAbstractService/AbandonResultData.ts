import CommonResultsSeq from "./CommonResultsSeq";
import InvokeId from "../CommonProtocolSpecifications/InvokeId";

/**
 * `AbandonResultData ::= SEQUENCE {
 *   invokeID      InvokeId,
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResultsSeq }`
 */
export default
class AbandonResultData {
    constructor (
        readonly invokeID: InvokeId,
        readonly commonResultsSeq: CommonResultsSeq,
    ) {}
}
