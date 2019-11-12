import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import GeneralName from "./GeneralName";

/**
 * `DeltaRefInfo ::= SEQUENCE {
 *   deltaLocation  GeneralName,
 *   lastDelta      GeneralizedTime OPTIONAL,
 *   ... }`
 */
export default
class DeltaRefInfo {
    constructor (
        readonly deltaLocation: GeneralName,
        readonly lastDelta: Date | undefined,
    ) {}

    public static fromElement (value: ASN1Element): DeltaRefInfo {
        let deltaLocation!: GeneralName;
        let lastDelta: Date | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "deltaLocation",
                optional: false,
                callback: (el: ASN1Element): void => {
                    deltaLocation = el as DERElement;
                },
            },
            {
                name: "lastDelta",
                optional: true,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.generalizedTime,
                callback: (el: ASN1Element): void => {
                    lastDelta = el.generalizedTime;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new DeltaRefInfo(deltaLocation, lastDelta);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.deltaLocation,
            this.lastDelta
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.generalizedTime,
                    this.lastDelta,
                )
                : undefined,
        ]);
    }
}
