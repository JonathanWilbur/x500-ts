import { ObjectIdentifier, ASN1Element } from "asn1-ts";
import OperationalBindingID from "./OperationalBindingID";
import AccessPoint from "../DistributedOperations/AccessPoint";
import CommonResultsSeq from "../DirectoryAbstractService/CommonResultsSeq";

/**
 * `EstablishOperationalBindingResultData ::= SEQUENCE {
 *   bindingType   [0]  OPERATIONAL-BINDING.&id({OpBindingSet}),
 *   bindingID     [1]  OperationalBindingID OPTIONAL,
 *   accessPoint   [2]  AccessPoint,
 *   -- symmetric, Role A replies, or Role B replies
 *   initiator          CHOICE {
 *     symmetric     [3]  OPERATIONAL-BINDING.&both.&EstablishParam
 *                          ({OpBindingSet}{@bindingType}),
 *     roleA-replies [4]  OPERATIONAL-BINDING.&roleA.&EstablishParam
 *                          ({OpBindingSet}{@bindingType}),
 *     roleB-replies [5]  OPERATIONAL-BINDING.&roleB.&EstablishParam
 *                          ({OpBindingSet}{@bindingType})},
 *   ...,
 *   ...,
 *   COMPONENTS OF      CommonResultsSeq }`
 */
export default
class EstablishOperationalBindingResultData {
    constructor (
        readonly bindingType: ObjectIdentifier,
        readonly bindingID: OperationalBindingID | undefined,
        readonly accessPoint: AccessPoint,
        readonly initiator: ASN1Element,
        readonly commonResultsSeq: CommonResultsSeq,
    ) {}
}
