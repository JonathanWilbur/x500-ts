import CommonResults from "./CommonResults";
import ServiceProblem from "./ServiceProblem";

/**
 * `ServiceErrorData ::= SET {
 *   problem   [0]  ServiceProblem,
 *   ...,
 *   ...,
 *   COMPONENTS OF  CommonResults }`
 */
export default
class ServiceErrorData {
    constructor (
        readonly problem: ServiceProblem,
        readonly commonResults: CommonResults,
    ) {}
}
