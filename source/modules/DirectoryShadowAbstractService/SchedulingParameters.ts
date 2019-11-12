import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import PeriodicStrategy from "./PeriodicStrategy";

/**
 * `SchedulingParameters ::= SEQUENCE {
 *   periodic    PeriodicStrategy OPTIONAL, -- shall be present if othertimes
 *   --                                        is set to FALSE
 *   othertimes  BOOLEAN DEFAULT FALSE,
 *   ... }`
 */
export default
class SchedulingParameters {
    constructor (
        readonly periodicStrategy: PeriodicStrategy | undefined,
        readonly othertimes: boolean,
    ) {}

    public static fromElement (value: ASN1Element): SchedulingParameters {
        let periodicStrategy: PeriodicStrategy | undefined = undefined;
        let othertimes: boolean = false;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "periodicStrategy",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    periodicStrategy = PeriodicStrategy.fromElement(el as DERElement);
                },
            },
            {
                name: "othertimes",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.boolean,
                callback: (el: ASN1Element): void => {
                    othertimes = el.boolean;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new SchedulingParameters(periodicStrategy, othertimes);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            // TODO:
        ]);
    }
}
