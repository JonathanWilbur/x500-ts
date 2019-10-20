import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    validateConstruction,
} from "asn1-ts";
import NoticeReference from "./NoticeReference";
import DisplayText from "./DisplayText";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";
import * as errors from "../../errors";

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
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    noticeRef = NoticeReference.fromElement(el as DERElement);
                },
            },
            {
                name: "explicitText",
                optional: true,
                tagClass: ASN1TagClass.universal,
                callback: (el: ASN1Element): void => {
                    explicitText = ((): string => {
                        switch (el.tagNumber) {
                        case (ASN1UniversalType.visibleString): {
                            return el.visibleString;
                        }
                        case (ASN1UniversalType.utf8String): {
                            return el.utf8String;
                        }
                        case (ASN1UniversalType.bmpString): {
                            return el.bmpString;
                        }
                        default: {
                            throw new errors.X500Error("Invalid CHOICE for DisplayText.");
                        }
                        }
                    })();
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

    public static fromBytes (value: Uint8Array): UserNotice {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return UserNotice.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
