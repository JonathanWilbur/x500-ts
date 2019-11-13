import {
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
} from "asn1-ts";
import * as errors from "../../errors";

/**
 * `UniversalOrBMPString{INTEGER:ub-string-length} ::= SET {
 *   character-encoding     CHOICE {
 *     two-octets             BMPString(SIZE (1..ub-string-length)),
 *     four-octets            UniversalString(SIZE (1..ub-string-length))},
 *   iso-639-language-code  PrintableString(SIZE (2 | 5)) OPTIONAL }`
 */
export default
class UniversalOrBMPString {
    constructor (
        readonly characterEncoding: string,
        readonly iso639LanguageCode: string | undefined,
    ) {}

    public static fromElement (value: DERElement): UniversalOrBMPString {
        let characterEncoding!: string;
        let iso639LanguageCode: string | undefined = undefined;
        value.set.forEach((el) => {
            if (el.tagClass !== ASN1TagClass.universal) {
                return;
            }
            switch (el.tagNumber) {
            case (ASN1UniversalType.bmpString): {
                characterEncoding = el.bmpString;
                break;
            }
            case (ASN1UniversalType.universalString): {
                characterEncoding = el.universalString;
                break;
            }
            case (ASN1UniversalType.printableString): {
                iso639LanguageCode = el.printableString;
                break;
            }
            default: { break; }
            }
        });
        if (!characterEncoding) {
            throw new errors.X500Error("UniversalOrBMPString.characterEncoding not defined.");
        }
        return new UniversalOrBMPString(characterEncoding, iso639LanguageCode);
    }

    public toElement (): DERElement {
        const characterEncodingElement: DERElement = new DERElement();
        characterEncodingElement.tagClass = ASN1TagClass.universal;
        characterEncodingElement.tagNumber = ASN1UniversalType.universalString;
        characterEncodingElement.universalString = this.characterEncoding;
        let iso639LanguageCodeElement: DERElement | undefined = undefined;
        if (this.iso639LanguageCode) {
            iso639LanguageCodeElement = new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.printableString,
            );
            iso639LanguageCodeElement.printableString = this.iso639LanguageCode;
        }
        return DERElement.fromSequence([
            characterEncodingElement,
            iso639LanguageCodeElement,
        ]);
    }
}
