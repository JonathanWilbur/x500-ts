import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import NoticeReference from "./NoticeReference";
import DisplayText from "./DisplayText";

/**
 * `UserNotice ::= SEQUENCE {
 *   noticeRef     NoticeReference OPTIONAL,
 *   explicitText  DisplayText OPTIONAL }`
 */
export default
class UserNotice {
    constructor (
        readonly noticeRef: NoticeReference | undefined,
        readonly explicitText: DisplayText | undefined,
    ) {}

    public static fromElement (value: DERElement): UserNotice {
        let noticeRef: NoticeReference | undefined = undefined;
        let explicitText: DisplayText | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "noticeRef",
                optional: true,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    noticeRef = NoticeReference.fromElement(el as DERElement);
                },
            },
            {
                name: "explicitText",
                optional: true,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    switch (el.tagNumber) {
                    case (ASN1UniversalType.visibleString): {
                        explicitText = el.visibleString;
                        break;
                    }
                    case (ASN1UniversalType.bmpString): {
                        explicitText = el.bmpString;
                        break;
                    }
                    case (ASN1UniversalType.utf8String): {
                        explicitText = el.utf8String;
                        break;
                    }
                    default: { break; }
                    }
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new UserNotice(noticeRef, explicitText);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.noticeRef
                ? this.noticeRef.toElement()
                : undefined,
            this.explicitText
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.utf8String,
                    this.explicitText,
                )
                : undefined,
        ]);
    }
}
