import AbandonedProblem from "./AbandonedProblem";
import CommonResults from "./CommonResults";
import InvokeId from "../CommonProtocolSpecifications/InvokeId";

/**
 * `AbandonFailedData ::= SET {
 *   problem    [0]  AbandonProblem,
 *   operation  [1]  InvokeId,
 *   ...,
 *   ...,
 *   COMPONENTS OF   CommonResults }`
 */
export default
class AbandonFailedData {
    constructor (
        readonly problem: AbandonedProblem,
        readonly operation: InvokeId,
        readonly commonResults: CommonResults,
    ) {}
}
