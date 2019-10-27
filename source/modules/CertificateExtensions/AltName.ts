import {
    ASN1Element,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import AltNameType from "./AltNameType";
import GeneralName from "./GeneralName";

/**
 * `AltName ::= SEQUENCE {
 *   altnameType   AltNameType,
 *   altNameValue  GeneralName OPTIONAL
 * }`
 */
export default
class AltName {
    constructor (
        readonly altnameType: AltNameType,
        readonly altNameValue: GeneralName | undefined,
    ) {}

    public static fromElement (value: DERElement): AltName {
        let altnameType!: AltNameType;
        let altNameValue: GeneralName | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "altnameType",
                optional: true,
                callback: (el: ASN1Element): void => {
                    altnameType = el as DERElement;
                },
            },
            {
                name: "altNameValue",
                optional: true,
                callback: (el: ASN1Element): void => {
                    altNameValue = el as DERElement;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new AltName(altnameType, altNameValue);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.altnameType,
            this.altNameValue,
        ]);
    }
}
