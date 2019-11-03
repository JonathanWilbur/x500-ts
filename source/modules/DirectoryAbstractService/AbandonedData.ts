import AbandonedProblem from "./AbandonedProblem";
import CommonResults from "./CommonResults";

/**
 * `AbandonedData ::= SET {
 *     problem       AbandonedProblem OPTIONAL,
 *     ...,
 *     ...,
 *     COMPONENTS OF CommonResults }`
 */
export default
class AbandonedData {
    constructor (
        readonly problem: AbandonedProblem,
        readonly commonResults: CommonResults,
    ) {}
}
