import {
    DERElement,
    ObjectIdentifier,
    ASN1TagClass,
    ASN1Construction,
    ASN1UniversalType,
    validateConstruction,
    ConstructedElementSpecification,
    ASN1Element,
} from "asn1-ts";

/**
 * `AlgorithmIdentifier{ALGORITHM:SupportedAlgorithms} ::= SEQUENCE {
 *   algorithm   ALGORITHM.&id({SupportedAlgorithms}),
 *   parameters  ALGORITHM.&Type({SupportedAlgorithms}{@algorithm}) OPTIONAL,
 *   ... }`
 */
export default
class AlgorithmIdentifier {
    constructor (
        readonly algorithm: ObjectIdentifier,
        readonly parameters?: ASN1Element,
    ) {}

    public static fromElement (value: ASN1Element): AlgorithmIdentifier {
        let algorithm!: ObjectIdentifier;
        let parameters: ASN1Element | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "algorithm",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    algorithm = el.objectIdentifier;
                },
            },
            {
                name: "parameters",
                optional: true,
                callback: (el: ASN1Element): void => {
                    parameters = el;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new AlgorithmIdentifier(algorithm, parameters);
    }

    public toElement (): DERElement {
        const algorithmElement: DERElement = new DERElement();
        algorithmElement.tagNumber = ASN1UniversalType.objectIdentifier;
        algorithmElement.objectIdentifier = this.algorithm;
        return DERElement.fromSequence([algorithmElement, this.parameters]);
    }

    public static fromBytes (value: Uint8Array): AlgorithmIdentifier {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return AlgorithmIdentifier.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
