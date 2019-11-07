import { ObjectIdentifier } from "asn1-ts";
import OperationalBindingID from "./OperationalBindingID";
import CommonResultsSeq from "../DirectoryAbstractService/CommonResultsSeq";

/**
 * `TerminateOperationalBindingResultData ::= SEQUENCE {
 *   bindingID       OperationalBindingID,
 *   bindingType     OPERATIONAL-BINDING.&id({OpBindingSet}),
 *   terminateAt     GeneralizedTime OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF   CommonResultsSeq }`
 */
export default
class TerminateOperationalBindingResultData {
    constructor (
        readonly bindingID: OperationalBindingID,
        readonly bindingType: ObjectIdentifier,
        readonly terminateAt: Date | undefined,
        readonly commonResultsSeq: CommonResultsSeq,
    ) {}
}
