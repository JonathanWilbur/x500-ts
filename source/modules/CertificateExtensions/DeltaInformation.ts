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
 * `DeltaInformation ::= SEQUENCE {
 *   deltaLocation  GeneralName,
 *   nextDelta      GeneralizedTime OPTIONAL,
 *   ... }`
 */
export default
class DeltaInformation {
    constructor (
        readonly deltaLocation: GeneralName,
        readonly nextDelta: Date | undefined,
    ) {}

    public static fromElement (value: ASN1Element): DeltaInformation {
        let deltaLocation!: GeneralName;
        let nextDelta: Date | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "deltaLocation",
                optional: false,
                callback: (el: ASN1Element): void => {
                    deltaLocation = el as DERElement;
                },
            },
            {
                name: "nextDelta",
                optional: true,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.generalizedTime,
                callback: (el: ASN1Element): void => {
                    nextDelta = el.generalizedTime;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new DeltaInformation(deltaLocation, nextDelta);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.deltaLocation,
            this.nextDelta
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.generalizedTime,
                    this.nextDelta,
                )
                : undefined,
        ]);
    }
}
