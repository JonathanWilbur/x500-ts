import AgreementID from "./AgreementID";
import Time from "./Time";

/**
 * `RequestShadowUpdateResultData ::= [0]  SEQUENCE {
 *   agreementID  AgreementID,
 *   lastUpdate   Time OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResultsSeq }`
 */
export default
class RequestShadowUpdateResultData {
    constructor (
        readonly agreementID: AgreementID,
        readonly lastUpdate: Time | undefined,
    ) {}
}
