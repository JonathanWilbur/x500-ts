import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import GeneralName from "./GeneralName";
import GeneralNames from "./GeneralNames";
import DistributionPointName from "./DistributionPointName";
import ReasonFlags from "./ReasonFlags";
import BaseRevocationInfo from "./BaseRevocationInfo";
import OnlyCertificateTypes from "./OnlyCertificateTypes";
import NumberRange from "./NumberRange";

/**
 * `PerAuthorityScope ::= SEQUENCE {
 *   authorityName       [0]  GeneralName OPTIONAL,
 *   distributionPoint   [1]  DistributionPointName OPTIONAL,
 *   onlyContains        [2]  OnlyCertificateTypes OPTIONAL,
 *   onlySomeReasons     [4]  ReasonFlags OPTIONAL,
 *   serialNumberRange   [5]  NumberRange OPTIONAL,
 *   subjectKeyIdRange   [6]  NumberRange OPTIONAL,
 *   nameSubtrees        [7]  GeneralNames OPTIONAL,
 *   baseRevocationInfo  [9]  BaseRevocationInfo OPTIONAL,
 *   ... }`
 */
export default
class PerAuthorityScope {
    constructor (
        readonly authorityName: GeneralName | undefined,
        readonly distributionPoint: DistributionPointName | undefined,
        readonly onlyContains: OnlyCertificateTypes | undefined,
        readonly onlySomeReasons: ReasonFlags | undefined,
        readonly serialNumberRange: NumberRange | undefined,
        readonly subjectKeyIdRange: NumberRange | undefined,
        readonly nameSubtrees: GeneralNames | undefined,
        readonly baseRevocationInfo: BaseRevocationInfo | undefined,
    ) {}

    public static fromElement (value: DERElement): PerAuthorityScope {
        let authorityName: GeneralName | undefined = undefined;
        let distributionPoint: DistributionPointName | undefined = undefined;
        let onlyContains: OnlyCertificateTypes | undefined = undefined;
        let onlySomeReasons: ReasonFlags | undefined = undefined;
        let serialNumberRange: NumberRange | undefined = undefined;
        let subjectKeyIdRange: NumberRange | undefined = undefined;
        let nameSubtrees: GeneralNames | undefined = undefined;
        let baseRevocationInfo: BaseRevocationInfo | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "authorityName",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    authorityName = (el as DERElement).inner;
                },
            },
            {
                name: "distributionPoint",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    distributionPoint = (el as DERElement).inner;
                },
            },
            {
                name: "onlyContains",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    onlyContains = OnlyCertificateTypes.fromElement(el as DERElement);
                },
            },
            {
                name: "onlySomeReasons",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 4,
                callback: (el: ASN1Element): void => {
                    onlySomeReasons = ReasonFlags.fromElement(el as DERElement);
                },
            },
            {
                name: "serialNumberRange",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 5,
                callback: (el: ASN1Element): void => {
                    serialNumberRange = NumberRange.fromElement(el as DERElement);
                },
            },
            {
                name: "subjectKeyIdRange",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 6,
                callback: (el: ASN1Element): void => {
                    subjectKeyIdRange = NumberRange.fromElement(el as DERElement);
                },
            },
            {
                name: "nameSubtrees",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 7,
                callback: (el: ASN1Element): void => {
                    nameSubtrees = el.sizeConstrainedSequenceOf(1) as DERElement[];
                },
            },
            {
                name: "baseRevocationInfo",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 9,
                callback: (el: ASN1Element): void => {
                    baseRevocationInfo = BaseRevocationInfo.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new PerAuthorityScope(
            authorityName,
            distributionPoint,
            onlyContains,
            onlySomeReasons,
            serialNumberRange,
            subjectKeyIdRange,
            nameSubtrees,
            baseRevocationInfo,
        );
    }

    public toElement (): DERElement {
        let authorityNameElement: DERElement | undefined = undefined;
        if (this.authorityName) {
            authorityNameElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                0,
            );
            authorityNameElement.inner = this.authorityName;
        }

        let distributionPointElement: DERElement | undefined = undefined;
        if (this.distributionPoint) {
            distributionPointElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
            );
            distributionPointElement.inner = this.distributionPoint;
        }

        let onlyContainsElement: DERElement | undefined = undefined;
        if (this.onlyContains) {
            onlyContainsElement = this.onlyContains.toElement();
            onlyContainsElement.tagClass = ASN1TagClass.context;
            onlyContainsElement.tagNumber = 2;
        }

        let onlySomeReasonsElement: DERElement | undefined = undefined;
        if (this.onlySomeReasons) {
            onlySomeReasonsElement = this.onlySomeReasons.toElement();
            onlySomeReasonsElement.tagClass = ASN1TagClass.context;
            onlySomeReasonsElement.tagNumber = 4;
        }

        let serialNumberRangeElement: DERElement | undefined = undefined;
        if (this.serialNumberRange) {
            serialNumberRangeElement = this.serialNumberRange.toElement();
            serialNumberRangeElement.tagClass = ASN1TagClass.context;
            serialNumberRangeElement.tagNumber = 5;
        }

        let subjectKeyIdRangeElement: DERElement | undefined = undefined;
        if (this.subjectKeyIdRange) {
            subjectKeyIdRangeElement = this.subjectKeyIdRange.toElement();
            subjectKeyIdRangeElement.tagClass = ASN1TagClass.context;
            subjectKeyIdRangeElement.tagNumber = 6;
        }

        let nameSubtreesElement: DERElement | undefined = undefined;
        if (this.nameSubtrees) {
            nameSubtreesElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                7,
            );
            nameSubtreesElement.sequence = this.nameSubtrees;
        }

        let baseRevocationInfoElement: DERElement | undefined = undefined;
        if (this.baseRevocationInfo) {
            baseRevocationInfoElement = this.baseRevocationInfo.toElement();
            baseRevocationInfoElement.tagClass = ASN1TagClass.context;
            baseRevocationInfoElement.tagNumber = 9;
        }

        return DERElement.fromSequence([
            authorityNameElement,
            distributionPointElement,
            onlyContainsElement,
            onlySomeReasonsElement,
            serialNumberRangeElement,
            subjectKeyIdRangeElement,
            nameSubtreesElement,
            baseRevocationInfoElement,
        ]);
    }
}
