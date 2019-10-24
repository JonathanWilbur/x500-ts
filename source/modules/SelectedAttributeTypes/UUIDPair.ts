import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import UUID from "./UUID";

/**
 * `UUIDPair ::= SEQUENCE {
 *   issuerUUID   UUID,
 *   subjectUUID  UUID,
 *   ... }`
 */
export default
class UUIDPair {
    constructor (
        readonly issuerUUID: UUID,
        readonly subjectUUID: UUID,
    ) {}

    public static fromElement (value: DERElement): UUIDPair {
        let issuerUUID!: UUID;
        let subjectUUID!: UUID;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "issuerUUID",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.octetString,
                callback: (el: ASN1Element): void => {
                    issuerUUID = el.octetString;
                },
            },
            {
                name: "subjectUUID",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.octetString,
                callback: (el: ASN1Element): void => {
                    subjectUUID = el.octetString;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new UUIDPair(
            issuerUUID,
            subjectUUID,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.octetString,
                this.issuerUUID,
            ),
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.octetString,
                this.subjectUUID,
            ),
        ]);
    }

    public static fromBytes (value: Uint8Array): UUIDPair {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return UUIDPair.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
