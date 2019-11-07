import {
    ASN1Element,
    ObjectIdentifier,
} from "asn1-ts";
import CommonResultsSeq from "../DirectoryAbstractService/CommonResultsSeq";

/**
 * `OpBindingErrorParam ::= SEQUENCE {
 *   problem            [0]  ENUMERATED {
 *     invalidID              (0),
 *     duplicateID            (1),
 *     unsupportedBindingType (2),
 *     notAllowedForRole      (3),
 *     parametersMissing      (4),
 *     roleAssignment         (5),
 *     invalidStartTime       (6),
 *     invalidEndTime         (7),
 *     invalidAgreement       (8),
 *     currentlyNotDecidable  (9),
 *     modificationNotAllowed (10),
 *     invalidBindingType     (11),
 *     invalidNewID           (12),
 *     ... },
 *   bindingType        [1]  OPERATIONAL-BINDING.&id({OpBindingSet}) OPTIONAL,
 *   agreementProposal  [2]  OPERATIONAL-BINDING.&Agreement
 *                           ({OpBindingSet}{@bindingType}) OPTIONAL,
 *   retryAt            [3]  Time OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF           CommonResultsSeq }`
 */
export default
class OpBindingErrorParam {
    constructor (
        readonly problem: number,
        readonly bindingType: ObjectIdentifier | undefined,
        readonly agreementProposal: ASN1Element | undefined,
        readonly retryAt: Date | undefined,
        readonly commonResultsSeq: CommonResultsSeq,
    ) {}
}
