import AgreementID from "./AgreementID";
import CommonResultsSeq from "../DirectoryAbstractService/CommonResultsSeq";

/**
 * `UpdateShadowResultData ::= [0]  SEQUENCE {
 *   agreementID  AgreementID,
 *   lastUpdate   Time OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResultsSeq }`
 */
export default
class TimeSpecification {
    constructor (
        readonly agreementID: AgreementID,
        readonly lastUpdate: Date | undefined,
        readonly commonResultsSeq: CommonResultsSeq,
    ) {}
}
