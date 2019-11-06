import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import GeneralName from "../CertificateExtensions/GeneralName";
import CertificateSerialNumber from "../AuthenticationFramework/CertificateSerialNumber";

/**
 * `SpecificallyIdentified ::= SEQUENCE {
 *   name    GeneralName,
 *   issuer  GeneralName OPTIONAL,
 *   serial  CertificateSerialNumber OPTIONAL }
 *   (WITH COMPONENTS { ..., issuer PRESENT, serial PRESENT } |
 *   (WITH COMPONENTS { ..., issuer ABSENT, serial ABSENT }))`
 */
export default
class SpecificallyIdentified {
    constructor (
        readonly name: GeneralName,
        readonly issuer: GeneralName | undefined,
        readonly serial: CertificateSerialNumber | undefined,
    ) {}

    public static fromElement (value: DERElement): SpecificallyIdentified {
        let name!: GeneralName;
        let issuer: GeneralName | undefined = undefined;
        let serial: CertificateSerialNumber | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "name",
                optional: false,
                tagClass: ASN1TagClass.context,
                callback: (el: ASN1Element): void => {
                    name = el as DERElement;
                },
            },
            {
                name: "issuer",
                optional: true,
                tagClass: ASN1TagClass.context,
                callback: (el: ASN1Element): void => {
                    issuer = el as DERElement;
                },
            },
            {
                name: "serial",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    serial = el.octetString;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new SpecificallyIdentified(name, issuer, serial);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.name,
            this.issuer,
            this.serial
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.integer,
                    this.serial,
                )
                : undefined,
        ]);
    }
}
