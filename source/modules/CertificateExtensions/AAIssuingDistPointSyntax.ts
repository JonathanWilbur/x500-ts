import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import DistributionPointName from "./DistributionPointName";
import ReasonFlags from "./ReasonFlags";

/**
 * `AAIssuingDistPointSyntax ::= SEQUENCE {
 *   distributionPoint           [0]  DistributionPointName OPTIONAL,
 *   onlySomeReasons             [1]  ReasonFlags OPTIONAL,
 *   indirectCRL                 [2]  BOOLEAN DEFAULT FALSE,
 *   containsUserAttributeCerts  [3]  BOOLEAN DEFAULT TRUE,
 *   containsAACerts             [4]  BOOLEAN DEFAULT TRUE,
 *   containsSOAPublicKeyCerts   [5]  BOOLEAN DEFAULT TRUE,
 *   ... }`
 */
export default
class AAIssuingDistPointSyntax {
    constructor (
        readonly distributionPoint: DistributionPointName | undefined,
        readonly onlySomeReasons: ReasonFlags | undefined,
        readonly indirectCRL: boolean,
        readonly containsUserAttributeCerts: boolean,
        readonly containsAACerts: boolean,
        readonly containsSOAPublicKeyCerts: boolean,
    ) {}

    public static fromElement (value: DERElement): AAIssuingDistPointSyntax {
        let distributionPoint: DistributionPointName | undefined = undefined;
        let onlySomeReasons: ReasonFlags | undefined = undefined;
        let indirectCRL: boolean = false;
        let containsUserAttributeCerts: boolean = true;
        let containsAACerts: boolean = true;
        let containsSOAPublicKeyCerts: boolean = true;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "distributionPoint",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    distributionPoint = el as DERElement;
                },
            },
            {
                name: "onlySomeReasons",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    onlySomeReasons = ReasonFlags.fromElement(el as DERElement);
                },
            },
            {
                name: "indirectCRL",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    indirectCRL = el.boolean;
                },
            },
            {
                name: "containsUserAttributeCerts",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 3,
                callback: (el: ASN1Element): void => {
                    containsUserAttributeCerts = el.boolean;
                },
            },
            {
                name: "containsAACerts",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 4,
                callback: (el: ASN1Element): void => {
                    containsAACerts = el.boolean;
                },
            },
            {
                name: "containsSOAPublicKeyCerts",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 5,
                callback: (el: ASN1Element): void => {
                    containsSOAPublicKeyCerts = el.boolean;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new AAIssuingDistPointSyntax(
            distributionPoint,
            onlySomeReasons,
            indirectCRL,
            containsUserAttributeCerts,
            containsAACerts,
            containsSOAPublicKeyCerts,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.distributionPoint
                ? this.distributionPoint
                : undefined,
            this.onlySomeReasons
                ? this.onlySomeReasons.toElement()
                : undefined,
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                2,
                this.indirectCRL,
            ),
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                3,
                this.containsUserAttributeCerts,
            ),
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                4,
                this.containsAACerts,
            ),
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                5,
                this.containsSOAPublicKeyCerts,
            ),
        ]);
    }
}
