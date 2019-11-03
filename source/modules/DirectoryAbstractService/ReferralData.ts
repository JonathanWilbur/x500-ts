import CommonResults from "./CommonResults";
import ContinuationReference from "../DistributedOperations/ContinuationReference";
/**
 * `ReferralData ::= SET {
 *   candidate  [0] ContinuationReference,
 *   ...,
 *   ...,
 *   COMPONENTS OF  CommonResults }`
 */
export default
class ReferralData {
    constructor (
        readonly candidate: ContinuationReference,
        readonly commonResults: CommonResults,
    ) {}
}
