import GeneralName from "../CertificateExtensions/GeneralName";
import GeneralNames from "../CertificateExtensions/GeneralNames";
import CertificateSerialNumber from "../AuthenticationFramework/CertificateSerialNumber";
import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
} from "asn1-ts";
import * as errors from "../../errors";

/**
 * `RoleSpecCertIdentifier ::= SEQUENCE {
 *   roleName              [0]  GeneralName,
 *   roleCertIssuer        [1]  GeneralName,
 *   roleCertSerialNumber  [2]  CertificateSerialNumber OPTIONAL,
 *   roleCertLocator       [3]  GeneralNames OPTIONAL,
 *   ... }`
 */
export default
class RoleSpecCertIdentifier {
    constructor (
        readonly roleName: GeneralName,
        readonly roleCertIssuer: GeneralName,
        readonly roleCertSerialNumber: CertificateSerialNumber | undefined,
        readonly roleCertLocator: GeneralNames | undefined,
    ) {}

    public static fromElement (value: DERElement): RoleSpecCertIdentifier {
        const rsciElements: DERElement[] = value.sequence;
        let roleName!: GeneralName;
        let roleCertIssuer!: GeneralName;
        let roleCertSerialNumber: CertificateSerialNumber | undefined = undefined;
        let roleCertLocator: GeneralNames | undefined = undefined;

        const specification = [
            {
                name: "roleName",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    const innerElements: DERElement[] = el.sequence as DERElement[];
                    if (innerElements.length !== 1) {
                        throw new errors.X500Error(
                            "RoleSpecCertIdentifier.roleName did not contain "
                            + "another single element encoded within itself "
                            + "explicitly as it should have.",
                        );
                    }
                    roleName = innerElements[0];
                },
            },
            {
                name: "roleCertIssuer",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    const innerElements: DERElement[] = el.sequence as DERElement[];
                    if (innerElements.length !== 1) {
                        throw new errors.X500Error(
                            "RoleSpecCertIdentifier.roleCertIssuer did not contain "
                            + "another single element encoded within itself "
                            + "explicitly as it should have.",
                        );
                    }
                    roleName = innerElements[0];
                },
            },
            {
                name: "roleCertSerialNumber",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    roleCertSerialNumber = (el as DERElement).octetString;
                },
            },
            {
                name: "roleCertLocator",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 3,
                callback: (el: ASN1Element): void => {
                    roleCertLocator = (el as DERElement).sequence;
                },
            },
        ];
        validateConstruction(rsciElements, specification);
        return new RoleSpecCertIdentifier(
            roleName,
            roleCertIssuer,
            roleCertSerialNumber,
            roleCertLocator,
        );
    }

    public toElement (): DERElement {
        let roleCertLocator: DERElement | undefined = undefined;
        if (this.roleCertLocator) {
            roleCertLocator = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                3,
            );
            roleCertLocator.sequence = this.roleCertLocator;
        }

        return DERElement.fromSequence(
            [
                new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.constructed,
                    0,
                    this.roleName,
                ),
                new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.constructed,
                    1,
                    this.roleCertIssuer,
                ),
                this.roleCertSerialNumber
                    ? new DERElement(
                        ASN1TagClass.context,
                        ASN1Construction.primitive,
                        2,
                        this.roleCertSerialNumber,
                    )
                    : undefined,
                roleCertLocator,
            ],
        );
    }

    public static fromBytes (value: Uint8Array): RoleSpecCertIdentifier {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return RoleSpecCertIdentifier.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
