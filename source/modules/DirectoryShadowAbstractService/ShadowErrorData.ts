import ShadowProblem from "./ShadowProblem";
import Time from "./Time";
import UpdateWindow from "./UpdateWindow";
import CommonResultsSeq from "../DirectoryAbstractService/CommonResultsSeq";

/**
 * `ShadowErrorData ::= SEQUENCE {
 *   problem       ShadowProblem,
 *   lastUpdate    Time OPTIONAL,
 *   updateWindow  UpdateWindow OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResultsSeq }`
 */
export default
class ShadowErrorData {
    constructor (
        readonly problem: ShadowProblem,
        readonly lastUpdate: Time | undefined,
        readonly updateWindow: UpdateWindow | undefined,
        readonly commonResultsSeq: CommonResultsSeq,
    ) {}
}
