import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
    ASN1UniversalType,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";
import TelephoneNumber from "./TelephoneNumber";
import G3FacsimileNonBasicParameters from "../PkiPmiExternalDataTypes/G3FacsimileNonBasicParameters";

/**
 * `FacsimileTelephoneNumber ::= SEQUENCE {
 *   telephoneNumber  TelephoneNumber,
 *   parameters       G3FacsimileNonBasicParameters OPTIONAL,
 *   ... }`
 */
export default
class FacsimileTelephoneNumber {
    constructor (
        readonly telephoneNumber: TelephoneNumber,
        readonly parameters: G3FacsimileNonBasicParameters | undefined,
    ) {}

    public static fromElement (value: DERElement): FacsimileTelephoneNumber {
        let telephoneNumber!: TelephoneNumber;
        let parameters!: G3FacsimileNonBasicParameters;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "telephoneNumber",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.printableString,
                callback: (el: ASN1Element): void => {
                    telephoneNumber = el.printableString;
                },
            },
            {
                name: "parameters",
                optional: true,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.bitString,
                callback: (el: ASN1Element): void => {
                    parameters = el.bitString;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new FacsimileTelephoneNumber(telephoneNumber, parameters);
    }

    public toElement (): DERElement {
        const telephoneNumberElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.printableString,
        );
        telephoneNumberElement.printableString = this.telephoneNumber;
        let parametersElement: DERElement | undefined = undefined;
        if (this.parameters) {
            parametersElement = new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.bitString,
            );
            parametersElement.bitString = this.parameters;
        }
        return DERElement.fromSequence([
            telephoneNumberElement,
            parametersElement,
        ]);
    }

    public static fromBytes (value: Uint8Array): FacsimileTelephoneNumber {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return FacsimileTelephoneNumber.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
