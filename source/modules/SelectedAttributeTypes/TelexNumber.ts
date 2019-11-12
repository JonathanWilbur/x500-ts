import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
    ASN1UniversalType,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";

/**
 * `TelexNumber ::= SEQUENCE {
 *   telexNumber  PrintableString(SIZE (1..ub-telex-number)),
 *   countryCode  PrintableString(SIZE (1..ub-country-code)),
 *   answerback   PrintableString(SIZE (1..ub-answerback)),
 *   ... }`
 */
export default
class TelexNumber {
    constructor (
        readonly telexNumber: string,
        readonly countryCode: string,
        readonly answerback: string,
    ) {}

    public static fromElement (value: ASN1Element): TelexNumber {
        let telexNumber!: string;
        let countryCode!: string;
        let answerback!: string;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "telexNumber",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.printableString,
                callback: (el: ASN1Element): void => {
                    telexNumber = el.printableString;
                },
            },
            {
                name: "countryCode",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.printableString,
                callback: (el: ASN1Element): void => {
                    countryCode = el.printableString;
                },
            },
            {
                name: "answerback",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.printableString,
                callback: (el: ASN1Element): void => {
                    answerback = el.printableString;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new TelexNumber(
            telexNumber,
            countryCode,
            answerback,
        );
    }

    public toElement (): DERElement {
        const telexNumberElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.printableString,
        );
        telexNumberElement.printableString = this.telexNumber;
        const countryCodeElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.printableString,
        );
        countryCodeElement.printableString = this.countryCode;
        const answerbackElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.printableString,
        );
        answerbackElement.printableString = this.answerback;
        return DERElement.fromSequence([
            telexNumberElement,
            countryCodeElement,
            answerbackElement,
        ]);
    }

    public static fromBytes (value: Uint8Array): TelexNumber {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return TelexNumber.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
