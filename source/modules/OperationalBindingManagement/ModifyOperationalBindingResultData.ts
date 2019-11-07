import {
    ASN1Element,
    ObjectIdentifier,
} from "asn1-ts";
import OperationalBindingID from "./OperationalBindingID";
import Validity from "./Validity";

/**
 * `ModifyOperationalBindingResultData ::= SEQUENCE {
 *     newBindingID    OperationalBindingID,
 *     bindingType     OPERATIONAL-BINDING.&id({OpBindingSet}),
 *     newAgreement    OPERATIONAL-BINDING.&Agreement ({OpBindingSet}{@.bindingType}),
 *     valid           Validity OPTIONAL,
 *     ...,
 *     ...,
 *     COMPONENTS OF   CommonResultsSeq }`
 */
export default
class ModifyOperationalBindingResultData {
    constructor (
        readonly newBindingID: OperationalBindingID,
        readonly bindingType: ObjectIdentifier,
        readonly newAgreement: ASN1Element,
        readonly valid: Validity | undefined,
    ) {}
}
