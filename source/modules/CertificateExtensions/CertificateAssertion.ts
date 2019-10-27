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
import CertificateSerialNumber from "../AuthenticationFramework/CertificateSerialNumber";
import Name from "../InformationFramework/Name";
import SubjectKeyIdentifier from "./SubjectKeyIdentifier";
import AuthorityKeyIdentifier from "./AuthorityKeyIdentifier";
import KeyUsage from "./KeyUsage";
import AltNameType from "./AltNameType";
import CertPolicySet from "./CertPolicySet";
import NameConstraintsSyntax from "./NameConstraintsSyntax";
import validateTag from "../../validateTag";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";

/**
 * `CertificateAssertion ::= SEQUENCE {
 *   serialNumber            [0]  CertificateSerialNumber OPTIONAL,
 *   issuer                  [1]  Name OPTIONAL,
 *   subjectKeyIdentifier    [2]  SubjectKeyIdentifier OPTIONAL,
 *   authorityKeyIdentifier  [3]  AuthorityKeyIdentifier OPTIONAL,
 *   certificateValid        [4]  Time OPTIONAL,
 *   privateKeyValid         [5]  GeneralizedTime OPTIONAL,
 *   subjectPublicKeyAlgID   [6]  OBJECT IDENTIFIER OPTIONAL,
 *   keyUsage                [7]  KeyUsage OPTIONAL,
 *   subjectAltName          [8]  AltNameType OPTIONAL,
 *   policy                  [9]  CertPolicySet OPTIONAL,
 *   pathToName              [10]  Name OPTIONAL,
 *   subject                 [11]  Name OPTIONAL,
 *   nameConstraints         [12]  NameConstraintsSyntax OPTIONAL,
 *   ... }`
 */
export default
class CertificateAssertion {
    constructor (
        readonly serialNumber: CertificateSerialNumber | undefined,
        readonly issuer: Name | undefined,
        readonly subjectKeyIdentifier: SubjectKeyIdentifier | undefined,
        readonly authorityKeyIdentifier: AuthorityKeyIdentifier | undefined,
        readonly certificateValid: Date | undefined,
        readonly privateKeyValid: Date | undefined,
        readonly subjectPublicKeyAlgID: ObjectIdentifier | undefined,
        readonly keyUsage: KeyUsage | undefined,
        readonly subjectAltName: AltNameType | undefined,
        readonly policy: CertPolicySet | undefined,
        readonly pathToName: Name | undefined,
        readonly subject: Name | undefined,
        readonly nameConstraints: NameConstraintsSyntax | undefined,
    ) {}

    public static fromElement (value: DERElement): CertificateAssertion {
        let serialNumber: CertificateSerialNumber | undefined = undefined;
        let issuer: Name | undefined = undefined;
        let subjectKeyIdentifier: SubjectKeyIdentifier | undefined = undefined;
        let authorityKeyIdentifier: AuthorityKeyIdentifier | undefined = undefined;
        let certificateValid: Date | undefined = undefined;
        let privateKeyValid: Date | undefined = undefined;
        let subjectPublicKeyAlgID: ObjectIdentifier | undefined = undefined;
        let keyUsage: KeyUsage | undefined = undefined;
        let subjectAltName: AltNameType | undefined = undefined;
        let policy: CertPolicySet | undefined = undefined;
        let pathToName: Name | undefined = undefined;
        let subject: Name | undefined = undefined;
        let nameConstraints: NameConstraintsSyntax | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "serialNumber",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    serialNumber = el.octetString;
                },
            },
            {
                name: "issuer",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    issuer = el.sizeConstrainedSequenceOf(1)
                        .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                            validateTag(rdnElement as DERElement, `issuer[${rdnIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.set ],
                            );
                            return rdnElement.sizeConstrainedSetOf(1)
                                .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                    validateTag(atavElement as DERElement, `issuer[${rdnIndex}][${atavIndex}]`,
                                        [ ASN1TagClass.universal ],
                                        [ ASN1Construction.constructed ],
                                        [ ASN1UniversalType.sequence ],
                                    );
                                    return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                                });
                        });
                },
            },
            {
                name: "subjectKeyIdentifier",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    subjectKeyIdentifier = el.octetString;
                },
            },
            {
                name: "authorityKeyIdentifier",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 3,
                callback: (el: ASN1Element): void => {
                    authorityKeyIdentifier = AuthorityKeyIdentifier.fromElement(el as DERElement);
                },
            },
            {
                name: "certificateValid",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 4,
                callback: (el: ASN1Element): void => {
                    const innerElement: DERElement = (el as DERElement).inner;
                    if (innerElement.tagNumber === ASN1UniversalType.generalizedTime) {
                        certificateValid = innerElement.generalizedTime;
                    } else {
                        certificateValid = innerElement.utcTime;
                    }
                },
            },
            {
                name: "privateKeyValid",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 5,
                callback: (el: ASN1Element): void => {
                    privateKeyValid = el.generalizedTime;
                },
            },
            {
                name: "subjectPublicKeyAlgID",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 6,
                callback: (el: ASN1Element): void => {
                    subjectPublicKeyAlgID = el.objectIdentifier;
                },
            },
            {
                name: "keyUsage",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 7,
                callback: (el: ASN1Element): void => {
                    keyUsage = KeyUsage.fromElement(el as DERElement);
                },
            },
            {
                name: "subjectAltName",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 8,
                callback: (el: ASN1Element): void => {
                    subjectAltName = (el as DERElement).inner;
                },
            },
            {
                name: "policy",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 9,
                callback: (el: ASN1Element): void => {
                    policy = el.sizeConstrainedSequenceOf(1)
                        .map((p, i) => {
                            validateTag(p as DERElement, `policy[${i}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.primitive ],
                                [ ASN1UniversalType.objectIdentifier ],
                            );
                            return p.objectIdentifier;
                        });
                },
            },
            {
                name: "pathToName",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 10,
                callback: (el: ASN1Element): void => {
                    pathToName = el.sizeConstrainedSequenceOf(1)
                        .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                            validateTag(rdnElement as DERElement, `issuer[${rdnIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.set ],
                            );
                            return rdnElement.sizeConstrainedSetOf(1)
                                .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                    validateTag(atavElement as DERElement, `issuer[${rdnIndex}][${atavIndex}]`,
                                        [ ASN1TagClass.universal ],
                                        [ ASN1Construction.constructed ],
                                        [ ASN1UniversalType.sequence ],
                                    );
                                    return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                                });
                        });
                },
            },
            {
                name: "subject",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 11,
                callback: (el: ASN1Element): void => {
                    subject = el.sizeConstrainedSequenceOf(1)
                        .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                            validateTag(rdnElement as DERElement, `issuer[${rdnIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.set ],
                            );
                            return rdnElement.sizeConstrainedSetOf(1)
                                .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                    validateTag(atavElement as DERElement, `issuer[${rdnIndex}][${atavIndex}]`,
                                        [ ASN1TagClass.universal ],
                                        [ ASN1Construction.constructed ],
                                        [ ASN1UniversalType.sequence ],
                                    );
                                    return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                                });
                        });
                },
            },
            {
                name: "nameConstraints",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 12,
                callback: (el: ASN1Element): void => {
                    nameConstraints = NameConstraintsSyntax.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new CertificateAssertion(
            serialNumber,
            issuer,
            subjectKeyIdentifier,
            authorityKeyIdentifier,
            certificateValid,
            privateKeyValid,
            subjectPublicKeyAlgID,
            keyUsage,
            subjectAltName,
            policy,
            pathToName,
            subject,
            nameConstraints,
        );
    }

    public toElement (): DERElement {
        let serialNumberElement: DERElement | undefined = undefined;
        if (this.serialNumber) {
            serialNumberElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                0,
            );
            serialNumberElement.octetString = this.serialNumber;
        }

        let issuerElement: DERElement | undefined = undefined;
        if (this.issuer) {
            issuerElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
            );
            issuerElement.sequence = this.issuer
                .map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())));
        }

        let subjectKeyIdentifierElement: DERElement | undefined = undefined;
        if (this.subjectKeyIdentifier) {
            subjectKeyIdentifierElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                2,
            );
            subjectKeyIdentifierElement.octetString = this.subjectKeyIdentifier;
        }

        let authorityKeyIdentifierElement: DERElement | undefined = undefined;
        if (this.authorityKeyIdentifier) {
            authorityKeyIdentifierElement = this.authorityKeyIdentifier.toElement();
            authorityKeyIdentifierElement.tagClass = ASN1TagClass.context;
            authorityKeyIdentifierElement.tagNumber = 3;
        }

        let certificateValidElement: DERElement | undefined = undefined;
        if (this.certificateValid) {
            certificateValidElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                4,
            );
            certificateValidElement.generalizedTime = this.certificateValid;
        }

        let privateKeyValidElement: DERElement | undefined = undefined;
        if (this.privateKeyValid) {
            privateKeyValidElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                5,
            );
            privateKeyValidElement.generalizedTime = this.privateKeyValid;
        }

        let subjectPublicKeyAlgIDElement: DERElement | undefined = undefined;
        if (this.subjectPublicKeyAlgID) {
            subjectPublicKeyAlgIDElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                6,
            );
            subjectPublicKeyAlgIDElement.objectIdentifier = this.subjectPublicKeyAlgID;
        }

        let keyUsageElement: DERElement | undefined = undefined;
        if (this.keyUsage) {
            keyUsageElement = this.keyUsage.toElement();
            keyUsageElement.tagClass = ASN1TagClass.context;
            keyUsageElement.tagNumber = 7;
        }

        let subjectAltNameElement: DERElement | undefined = undefined;
        if (this.subjectAltName) {
            subjectAltNameElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                8,
            );
            subjectAltNameElement.inner = this.subjectAltName;
        }

        let policyElement: DERElement | undefined = undefined;
        if (this.policy) {
            policyElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                9,
            );
            policyElement.sequence = this.policy.map((oid) => new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                oid,
            ));
        }

        let pathToNameElement: DERElement | undefined = undefined;
        if (this.pathToName) {
            pathToNameElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                10,
            );
            pathToNameElement.sequence = this.pathToName
                .map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())));
        }

        let subjectElement: DERElement | undefined = undefined;
        if (this.subject) {
            subjectElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                11,
            );
            subjectElement.sequence = this.subject
                .map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())));
        }


        let nameConstraintsElement: DERElement | undefined = undefined;
        if (this.nameConstraints) {
            nameConstraintsElement = this.nameConstraints.toElement();
            nameConstraintsElement.tagClass = ASN1TagClass.context;
            nameConstraintsElement.tagNumber = 12;
        }

        return DERElement.fromSequence([
            serialNumberElement,
            issuerElement,
            subjectKeyIdentifierElement,
            authorityKeyIdentifierElement,
            certificateValidElement,
            privateKeyValidElement,
            subjectPublicKeyAlgIDElement,
            keyUsageElement,
            subjectAltNameElement,
            policyElement,
            pathToNameElement,
            subjectElement,
            nameConstraintsElement,
        ]);
    }
}
