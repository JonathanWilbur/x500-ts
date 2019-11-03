import CommonResults from "./CommonResults";
import NameProblem from "./NameProblem";
import Name from "../InformationFramework/Name";

/**
 * `NameErrorData ::= SET {
 *   problem  [0]  NameProblem,
 *   matched  [1]  Name,
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResults }`
 */
export default
class NameErrorData {
    constructor (
        readonly problem: NameProblem,
        readonly matched: Name,
        readonly commonResults: CommonResults,
    ) {}
}
