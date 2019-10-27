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
import DistributionPointName from "./DistributionPointName";
import validateTag from "../../validateTag";

/**
 * `CertificateListExactAssertion ::= SEQUENCE {
 *   issuer             Name,
 *   thisUpdate         Time,
 *   distributionPoint  DistributionPointName OPTIONAL
 * }`
 */
export default
class CertificateListExactAssertion {
    constructor (
        readonly issuer: Name,
        readonly thisUpdate: Date,
        readonly distributionPoint: DistributionPointName | undefined,
    ) {}

    public static fromElement (value: DERElement): CertificateListExactAssertion {
        let issuer!: Name;
        let thisUpdate!: Date;
        let distributionPoint: DistributionPointName | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "issuer",
                optional: false,
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
                name: "thisUpdate",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                callback: (el: ASN1Element): void => {
                    validateTag(el as DERElement, "thisUpdate",
                        [ ASN1TagClass.universal ],
                        [ ASN1Construction.primitive, ASN1Construction.constructed ],
                        [ ASN1UniversalType.utcTime, ASN1UniversalType.generalizedTime ],
                    );
                    if (el.tagNumber === ASN1UniversalType.utcTime) {
                        thisUpdate = el.utcTime;
                    } else {
                        thisUpdate = el.generalizedTime;
                    }
                },
            },
            {
                name: "distributionPoint",
                optional: true,
                callback: (el: ASN1Element): void => {
                    distributionPoint = (el as DERElement).inner;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new CertificateListExactAssertion(
            issuer,
            thisUpdate,
            distributionPoint,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            DERElement.fromSequence(
                this.issuer.map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())))
            ),
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.generalizedTime,
                this.thisUpdate,
            ),
            this.distributionPoint
                ? this.distributionPoint
                : undefined,
        ]);
    }
}
