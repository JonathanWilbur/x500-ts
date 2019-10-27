import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import { Name, RelativeDistinguishedName, AttributeTypeAndValue } from "../InformationFramework";
import CRLNumber from "./CRLNumber";
import ReasonFlags from "./ReasonFlags";
import DistributionPointName from "./DistributionPointName";
import AuthorityKeyIdentifier from "./AuthorityKeyIdentifier";
import validateTag from "../../validateTag";

/**
 * `CertificateListAssertion ::= SEQUENCE {
 *   issuer                  Name OPTIONAL,
 *   minCRLNumber            [0]  CRLNumber OPTIONAL,
 *   maxCRLNumber            [1]  CRLNumber OPTIONAL,
 *   reasonFlags             ReasonFlags OPTIONAL,
 *   dateAndTime             Time OPTIONAL,
 *   distributionPoint       [2]  DistributionPointName OPTIONAL,
 *   authorityKeyIdentifier  [3]  AuthorityKeyIdentifier OPTIONAL,
 *   ... }`
 */
export default
class CertificateListAssertion {
    constructor (
        readonly issuer: Name | undefined,
        readonly minCRLNumber: CRLNumber | undefined,
        readonly maxCRLNumber: CRLNumber | undefined,
        readonly reasonFlags: ReasonFlags | undefined,
        readonly dateAndTime: Date | undefined,
        readonly distributionPoint: DistributionPointName | undefined,
        readonly authorityKeyIdentifier: AuthorityKeyIdentifier | undefined,
    ) {}

    public static fromElement (value: DERElement): CertificateListAssertion {
        let issuer: Name | undefined = undefined;
        let minCRLNumber: CRLNumber | undefined = undefined;
        let maxCRLNumber: CRLNumber | undefined = undefined;
        let reasonFlags: ReasonFlags | undefined = undefined;
        let dateAndTime: Date | undefined = undefined;
        let distributionPoint: DistributionPointName | undefined = undefined;
        let authorityKeyIdentifier: AuthorityKeyIdentifier | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "issuer",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
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
                name: "minCRLNumber",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    minCRLNumber = el.octetString;
                },
            },
            {
                name: "maxCRLNumber",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    maxCRLNumber = el.octetString;
                },
            },
            {
                name: "reasonFlags",
                optional: true,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.bitString,
                callback: (el: ASN1Element): void => {
                    reasonFlags = ReasonFlags.fromElement(el as DERElement);
                },
            },
            {
                name: "dateAndTime",
                optional: true,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.bitString,
                callback: (el: ASN1Element): void => {
                    const innerElement: DERElement = (el as DERElement).inner;
                    if (innerElement.tagNumber === ASN1UniversalType.generalizedTime) {
                        dateAndTime = innerElement.generalizedTime;
                    } else {
                        dateAndTime = innerElement.utcTime;
                    }
                },
            },
            {
                name: "distributionPoint",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    distributionPoint = el as DERElement;
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
        ];
        validateConstruction(value.sequence, specification);
        return new CertificateListAssertion(
            issuer,
            minCRLNumber,
            maxCRLNumber,
            reasonFlags,
            dateAndTime,
            distributionPoint,
            authorityKeyIdentifier,
        );
    }

    public toElement (): DERElement {
        let issuerElement: DERElement | undefined = undefined;
        if (this.issuer) {
            issuerElement = DERElement.fromSequence(
                this.issuer.map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())))
            );
        }

        let minCRLNumberElement: DERElement | undefined = undefined;
        if (this.minCRLNumber) {
            minCRLNumberElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                0,
                this.minCRLNumber,
            );
        }

        let maxCRLNumberElement: DERElement | undefined = undefined;
        if (this.maxCRLNumber) {
            maxCRLNumberElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                1,
                this.maxCRLNumber,
            );
        }

        let reasonFlagsElement: DERElement | undefined = undefined;
        if (this.reasonFlags) {
            reasonFlagsElement = this.reasonFlags.toElement();
        }

        let dateAndTimeElement: DERElement | undefined = undefined;
        if (this.dateAndTime) {
            dateAndTimeElement = new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.generalizedTime,
                this.dateAndTime,
            );
        }

        let distributionPointElement: DERElement | undefined = undefined;
        if (this.distributionPoint) {
            distributionPointElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                2,
            );
            distributionPointElement.inner = this.distributionPoint;
        }

        let authorityKeyIdentifierElement: DERElement | undefined = undefined;
        if (this.authorityKeyIdentifier) {
            authorityKeyIdentifierElement = this.authorityKeyIdentifier.toElement();
            authorityKeyIdentifierElement.tagClass = ASN1TagClass.context;
            authorityKeyIdentifierElement.tagNumber = 3;
        }

        return DERElement.fromSequence([
            issuerElement,
            minCRLNumberElement,
            maxCRLNumberElement,
            reasonFlagsElement,
            dateAndTimeElement,
            distributionPointElement,
            authorityKeyIdentifierElement,
        ]);
    }
}
