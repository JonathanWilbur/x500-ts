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
 * `WrappedPDUInfo ::= SEQUENCE {
 *   pduType      WRAPPED-PDU.&id ({SupportedPduSet}),
 *   pduInfo      WRAPPED-PDU.&Type ({SupportedPduSet}{@pduType}),
 *   ... }`
 */
export default
class WrappedPDUInfo {
    constructor (
        readonly pduType: ObjectIdentifier,
        readonly pduInfo: DERElement,
    ) {}

    public static fromElement (value: DERElement): WrappedPDUInfo {
        let pduType!: ObjectIdentifier;
        let pduInfo!: DERElement;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "pduType",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    pduType = el.objectIdentifier;
                },
            },
            {
                name: "pduInfo",
                optional: true,
                callback: (el: ASN1Element): void => {
                    pduInfo = el as DERElement;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new WrappedPDUInfo(pduType, pduInfo);
    }

    public toElement (): DERElement {
        const algorithmElement: DERElement = new DERElement();
        algorithmElement.tagNumber = ASN1UniversalType.objectIdentifier;
        algorithmElement.objectIdentifier = this.pduType;
        return DERElement.fromSequence([algorithmElement, this.pduInfo]);
    }

    public static fromBytes (value: Uint8Array): WrappedPDUInfo {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return WrappedPDUInfo.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
