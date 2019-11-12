import Presentation_selector from "./Presentation-selector";
import Context_list from "./Context-list";
import { ObjectIdentifier, ASN1Element } from "asn1-ts";

/**
 * This does not actually have any definition in this ASN.1 module. This was
 * created to deduplicate similar members of `OsiBind` and `OsiBindResult`.
 *
 * `NormalModeParameters ::= SEQUENCE {
 *     protocol-version                            [0]  IMPLICIT BIT STRING {version-1(0)} DEFAULT {version-1},
 *     calling-presentation-selector               [1]  IMPLICIT Presentation-selector OPTIONAL,
 *     called-presentation-selector                [2]  IMPLICIT Presentation-selector OPTIONAL,
 *     responding-presentation-selector            [3] IMPLICIT Presentation-selector OPTIONAL,
 *     presentation-context-definition-list        [4]  IMPLICIT Context-list OPTIONAL,
 *     presentation-context-definition-result-list [5] IMPLICIT SEQUENCE SIZE (2) OF SEQUENCE {
 *       result                                [0] IMPLICIT Result(acceptance),
 *       transfer-syntax-name                  [1] IMPLICIT Transfer-syntax-name } OPTIONAL,
 *     user-data                           CHOICE {
 *       fully-encoded-data  [APPLICATION 1] IMPLICIT SEQUENCE SIZE (1) OF SEQUENCE {
 *         transfer-syntax-name              Transfer-syntax-name OPTIONAL,
 *         presentation-context-identifier   Presentation-context-identifier,
 *         presentation-data-values          CHOICE {
 *           single-ASN1-type             [0]  ABSTRACT-SYNTAX.&Type(AARQ-apdu{{Protocols}})}}}}`
 */
export default
class NormalModeParameters {
    constructor (
        readonly protocolVersion: [ boolean ],
        readonly callingPresentationSelector: Presentation_selector | undefined,
        readonly calledPresentationSelector: Presentation_selector | undefined,
        readonly respondingPresentationSelector: Presentation_selector | undefined,
        readonly presentationContextDefinitionList: Context_list | undefined,
        readonly presentationContextDefinitionResultList: ObjectIdentifier[] | undefined,
        readonly userData: ASN1Element,
    ) {}
}
