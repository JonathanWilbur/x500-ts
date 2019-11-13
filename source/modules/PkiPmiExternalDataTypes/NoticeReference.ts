import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import DisplayText from "./DisplayText";

/**
 * `NoticeReference ::= SEQUENCE {
 *   organization   DisplayText,
 *   noticeNumbers  SEQUENCE OF INTEGER }`
 */
export default
class NoticeReference {
    constructor (
        readonly organization: DisplayText,
        readonly noticeNumbers: number[],
    ) {}

    public static fromElement (value: DERElement): NoticeReference {
        let organization!: DisplayText;
        let noticeNumbers!: number[];
        const specification: ConstructedElementSpecification[] = [
            {
                name: "organization",
                optional: false,
                tagClass: ASN1TagClass.universal,
                callback: (el: ASN1Element): void => {
                    switch (el.tagNumber) {
                    case (ASN1UniversalType.visibleString): {
                        organization = el.visibleString;
                        break;
                    }
                    case (ASN1UniversalType.bmpString): {
                        organization = el.bmpString;
                        break;
                    }
                    case (ASN1UniversalType.utf8String): {
                        organization = el.utf8String;
                        break;
                    }
                    default: { break; }
                    }
                },
            },
            {
                name: "noticeNumbers",
                optional: false,
                tagClass: ASN1TagClass.universal,
                callback: (el: ASN1Element): void => {
                    noticeNumbers = el.sequence.map((nn) => nn.integer);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new NoticeReference(organization, noticeNumbers);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.utf8String,
                this.organization,
            ),
            DERElement.fromSequence(this.noticeNumbers.map((nn) => new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
                nn,
            ))),
        ]);
    }
}
