import DisplayText from "./DisplayText";
import {
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
} from "asn1-ts";
import * as errors from "../../errors";
import validateTag from "../../validateTag";

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
        const noticeReferenceElements: DERElement[] = value.sequence;
        if (noticeReferenceElements.length !== 2) {
            throw new errors.X500Error(
                "Invalid number of elements in NoticeReference. Expected "
                + `2, but received ${noticeReferenceElements.length}.`,
            );
        }

        validateTag(noticeReferenceElements[0], "NoticeReference.organization",
            [ ASN1TagClass.universal ],
            [ ASN1Construction.primitive, ASN1Construction.constructed ],
            [ ASN1UniversalType.visibleString, ASN1UniversalType.utf8String, ASN1UniversalType.bmpString ],
        );

        validateTag(noticeReferenceElements[1], "NoticeReference.noticeNumbers",
            [ ASN1TagClass.universal ],
            [ ASN1Construction.constructed ],
            [ ASN1UniversalType.set ],
        );

        const organization: string = ((): string => {
            switch (noticeReferenceElements[0].tagNumber) {
            case (ASN1UniversalType.visibleString): {
                return noticeReferenceElements[0].visibleString;
            }
            case (ASN1UniversalType.utf8String): {
                return noticeReferenceElements[0].utf8String;
            }
            case (ASN1UniversalType.bmpString): {
                return noticeReferenceElements[0].bmpString;
            }
            default: {
                throw new errors.X500Error("Invalid CHOICE for DisplayText.");
            }
            }
        })();

        const noticeNumbers: number[] = noticeReferenceElements[0].sequence
            .map((noticeNumber, index) => {
                validateTag(noticeNumber, `NoticeReference.noticeNumbers[${index}]`,
                    [ ASN1TagClass.universal ],
                    [ ASN1Construction.primitive ],
                    [ ASN1UniversalType.integer ],
                );
                return noticeNumber.integer;
            });

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
            DERElement.fromSequence(this.noticeNumbers.map((noticeNumber) => new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
                noticeNumber,
            ))),
        ]);
    }

    public static fromBytes (value: Uint8Array): NoticeReference {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return NoticeReference.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
