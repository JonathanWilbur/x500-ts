import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import CASPcommonComponents from "./CASPcommonComponents";
import CASPversion from "./CASPversion";
import CASPsequence from "./CASPsequence";
import Name from "../InformationFramework/Name";
import CertificateSerialNumber from "../AuthenticationFramework/CertificateSerialNumber";
import CertStatus from "./CertStatus";
import validateTag from "../../validateTag";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";

/**
 * `CertUpdateReq ::= SEQUENCE {
 *   COMPONENTS OF CASPcommonComponents,
 *   certs  SEQUENCE (SIZE (1..MAX)) OF SEQUENCE {
 *     subject      Name,
 *     serialNumber CertificateSerialNumber,
 *     certStatus   CertStatus,
 *     ... },
 *   ... }`
 */
export default
class CertUpdateReq {
    constructor (
        readonly caspCommonComponents: CASPcommonComponents,
        readonly certs: {
            subject: Name;
            serialNumber: CertificateSerialNumber;
            certStatus: CertStatus;
        }[],
    ) {}

    public static fromElement (value: DERElement): CertUpdateReq {
        let version: CASPversion = CASPversion.v1;
        let sequence!: CASPsequence;
        let certs!: {
            subject: Name;
            serialNumber: CertificateSerialNumber;
            certStatus: CertStatus;
        }[];
        const specification: ConstructedElementSpecification[] = [
            {
                name: "version",
                optional: true,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.enumerated,
                callback: (el: ASN1Element): void => {
                    version = el.enumerated;
                },
            },
            {
                name: "sequence",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    sequence = el.integer;
                },
            },
            {
                name: "certs",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    certs = el.sizeConstrainedSequenceOf(1)
                        .map((cert) => {
                            let subject!: Name;
                            let serialNumber!: CertificateSerialNumber;
                            let certStatus!: CertStatus;
                            const certSpecification: ConstructedElementSpecification[] = [
                                {
                                    name: "subject",
                                    optional: false,
                                    tagClass: ASN1TagClass.universal,
                                    tagNumber: ASN1UniversalType.sequence,
                                    callback: (el2: ASN1Element): void => {
                                        subject = el2.sizeConstrainedSequenceOf(1)
                                            .map((rdnElement: ASN1Element, i: number) => {
                                                validateTag(rdnElement as DERElement, `subject[${i}]`,
                                                    [ ASN1TagClass.universal ],
                                                    [ ASN1Construction.constructed ],
                                                    [ ASN1UniversalType.set ],
                                                );
                                                return rdnElement.sizeConstrainedSetOf(1)
                                                    .map((atavElement: ASN1Element, j: number) => {
                                                        validateTag(atavElement as DERElement, `subject[${i}][${j}]`,
                                                            [ ASN1TagClass.universal ],
                                                            [ ASN1Construction.constructed ],
                                                            [ ASN1UniversalType.sequence ],
                                                        );
                                                        return AttributeTypeAndValue.fromElement(atavElement);
                                                    });
                                            });
                                    },
                                },
                                {
                                    name: "serialNumber",
                                    optional: false,
                                    tagClass: ASN1TagClass.universal,
                                    tagNumber: ASN1UniversalType.integer,
                                    callback: (el2: ASN1Element): void => {
                                        serialNumber = el2.octetString;
                                    },
                                },
                                {
                                    name: "certStatus",
                                    optional: false,
                                    tagClass: ASN1TagClass.universal,
                                    tagNumber: ASN1UniversalType.enumerated,
                                    callback: (el2: ASN1Element): void => {
                                        certStatus = el2.enumerated;
                                    },
                                },
                            ];
                            validateConstruction(cert.sequence, certSpecification);
                            return {
                                subject,
                                serialNumber,
                                certStatus,
                            };
                        });
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new CertUpdateReq(
            new CASPcommonComponents(version, sequence),
            certs,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.enumerated,
                this.caspCommonComponents.version,
            ),
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
                this.caspCommonComponents.sequence,
            ),
            DERElement.fromSequence(
                this.certs.map((cert) => DERElement.fromSequence([
                    DERElement.fromSequence(
                        cert.subject.map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement()))),
                    ),
                    new DERElement(
                        ASN1TagClass.universal,
                        ASN1Construction.primitive,
                        ASN1UniversalType.integer,
                        cert.serialNumber,
                    ),
                    new DERElement(
                        ASN1TagClass.universal,
                        ASN1Construction.primitive,
                        ASN1UniversalType.enumerated,
                        cert.certStatus,
                    ),
                ])),
            ),
        ]);
    }
}
