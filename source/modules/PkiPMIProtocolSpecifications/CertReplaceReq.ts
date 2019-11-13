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
import Certificate from "../AuthenticationFramework/Certificate";
import CertificateSerialNumber from "../AuthenticationFramework/CertificateSerialNumber";

/**
 * `CertReplaceReq ::= SEQUENCE {
 *   COMPONENTS OF CASPcommonComponents,
 *   certs         SEQUENCE (SIZE (1..MAX)) OF SEQUENCE {
 *     old           CertificateSerialNumber,
 *     new           Certificate,
 *     ... },
 *   ... }`
 */
export default
class CertReplaceReq {
    constructor (
        readonly caspCommonComponents: CASPcommonComponents,
        readonly certs: {
            old: CertificateSerialNumber;
            new_: Certificate;
        }[],
    ) {}

    public static fromElement (value: DERElement): CertReplaceReq {
        let version: CASPversion = CASPversion.v1;
        let sequence!: CASPsequence;
        let certs!: {
            old: CertificateSerialNumber;
            new_: Certificate;
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
                            let old!: CertificateSerialNumber;
                            let new_!: Certificate;
                            const certSpecification: ConstructedElementSpecification[] = [
                                {
                                    name: "old",
                                    optional: false,
                                    tagClass: ASN1TagClass.universal,
                                    tagNumber: ASN1UniversalType.integer,
                                    callback: (el2: ASN1Element): void => {
                                        old = el2.octetString;
                                    },
                                },
                            ];
                            validateConstruction(cert.sequence, certSpecification);
                            return {
                                old,
                                new_,
                            };
                        });
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new CertReplaceReq(
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
                    new DERElement(
                        ASN1TagClass.universal,
                        ASN1Construction.primitive,
                        ASN1UniversalType.integer,
                        cert.old,
                    ),
                    cert.new_.toElement(),
                ])),
            ),
        ]);
    }
}
