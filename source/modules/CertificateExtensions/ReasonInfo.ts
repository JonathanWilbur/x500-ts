import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import CRLReason from "./CRLReason";
import HoldInstruction from "./HoldInstruction";

/**
 * `ReasonInfo ::= SEQUENCE {
 *   reasonCode           CRLReason,
 *   holdInstructionCode  HoldInstruction OPTIONAL,
 *   ... }`
 */
export default
class ReasonInfo {
    constructor (
        readonly reasonCode: CRLReason,
        readonly holdInstructionCode: HoldInstruction | undefined,
    ) {}

    public static fromElement (value: DERElement): ReasonInfo {
        let reasonCode!: CRLReason;
        let holdInstructionCode: HoldInstruction | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "reasonCode",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.enumerated,
                callback: (el: ASN1Element): void => {
                    reasonCode = el.enumerated;
                },
            },
            {
                name: "holdInstructionCode",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    holdInstructionCode = el.objectIdentifier;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new ReasonInfo(reasonCode, holdInstructionCode);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.enumerated,
                this.reasonCode,
            ),
            this.holdInstructionCode
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.objectIdentifier,
                    this.holdInstructionCode,
                )
                : undefined,
        ]);
    }
}
