import AgreementID from "./AgreementID";
import Time from "./Time";

/**
 * `CoordinateShadowUpdateResultData ::= [0]  SEQUENCE {
 *   agreementID  AgreementID,
 *   lastUpdate   Time OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResultsSeq }`
 */
export default
class CoordinateShadowUpdateResultData {
    constructor (
        readonly agreementID: AgreementID,
        readonly lastUpdate: Time | undefined,
    ) {}
}
