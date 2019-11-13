import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
    ObjectIdentifier,
} from "asn1-ts";
import GeneralName from "../CertificateExtensions/GeneralName";

/**
 * `AccessDescription ::= SEQUENCE {
 *     accessMethod    OBJECT IDENTIFIER,
 *     accessLocation  GeneralName }`
 */
export default
class AccessDescription {
    constructor (
        readonly accessMethod: ObjectIdentifier,
        readonly accessLocation: GeneralName,
    ) {}

    public static fromElement (value: DERElement): AccessDescription {
        let accessMethod!: ObjectIdentifier;
        let accessLocation!: GeneralName;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "accessMethod",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    accessMethod = el.objectIdentifier;
                },
            },
            {
                name: "accessLocation",
                optional: false,
                callback: (el: ASN1Element): void => {
                    accessLocation = el;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new AccessDescription(accessMethod, accessLocation);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.accessMethod,
            ),
            this.accessLocation,
        ]);
    }
}
