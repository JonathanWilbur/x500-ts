
import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import GeneralName from "./GeneralName";
import DeltaRefInfo from "./DeltaRefInfo";
import CRLScopeSyntax from "./CRLScopeSyntax";
import PerAuthorityScope from "./PerAuthorityScope";

/**
 * `CRLReferral ::= SEQUENCE {
 *   issuer          [0]  GeneralName OPTIONAL,
 *   location        [1]  GeneralName OPTIONAL,
 *   deltaRefInfo    [2]  DeltaRefInfo OPTIONAL,
 *   cRLScope        CRLScopeSyntax,
 *   lastUpdate      [3]  GeneralizedTime OPTIONAL,
 *   lastChangedCRL  [4]  GeneralizedTime OPTIONAL,
 *   ... }`
 */
export default
class CRLReferral {
    constructor (
        readonly issuer: GeneralName | undefined,
        readonly location: GeneralName | undefined,
        readonly deltaRefInfo: DeltaRefInfo | undefined,
        readonly cRLScope: CRLScopeSyntax,
        readonly lastUpdate: Date | undefined,
        readonly lastChangedCRL: Date | undefined,
    ) {}

    public static fromElement (value: DERElement): CRLReferral {
        let issuer: GeneralName | undefined = undefined;
        let location: GeneralName | undefined = undefined;
        let deltaRefInfo: DeltaRefInfo | undefined = undefined;
        let cRLScope!: CRLScopeSyntax;
        let lastUpdate: Date | undefined = undefined;
        let lastChangedCRL: Date | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "issuer",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    issuer = (el as DERElement).inner;
                },
            },
            {
                name: "location",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    location = (el as DERElement).inner;
                },
            },
            {
                name: "deltaRefInfo",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    deltaRefInfo = DeltaRefInfo.fromElement(el as DERElement);
                },
            },
            {
                name: "cRLScope",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    cRLScope = el.sizeConstrainedSequenceOf(1)
                        .map((cs) => PerAuthorityScope.fromElement(cs as DERElement));
                },
            },
            {
                name: "lastUpdate",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 3,
                callback: (el: ASN1Element): void => {
                    lastUpdate = el.generalizedTime;
                },
            },
            {
                name: "lastChangedCRL",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 4,
                callback: (el: ASN1Element): void => {
                    lastChangedCRL = el.generalizedTime;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new CRLReferral(
            issuer,
            location,
            deltaRefInfo,
            cRLScope,
            lastUpdate,
            lastChangedCRL,
        );
    }

    public toElement (): DERElement {
        let issuerElement: DERElement | undefined = undefined;
        if (this.issuer) {
            issuerElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                0,
            );
            issuerElement.inner = this.issuer;
        }

        let locationElement: DERElement | undefined = undefined;
        if (this.location) {
            locationElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
            );
            locationElement.inner = this.location;
        }

        let deltaRefInfoElement: DERElement | undefined = undefined;
        if (this.deltaRefInfo) {
            deltaRefInfoElement = this.deltaRefInfo.toElement();
            deltaRefInfoElement.tagClass = ASN1TagClass.context;
            deltaRefInfoElement.tagNumber = 2;
        }

        let cRLScopeElement: DERElement | undefined = undefined;
        if (this.cRLScope) {
            cRLScopeElement = DERElement.fromSequence(this.cRLScope.map((pea) => pea.toElement()));
        }

        let lastUpdateElement: DERElement | undefined = undefined;
        if (this.lastUpdate) {
            lastUpdateElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                3,
            );
            lastUpdateElement.generalizedTime = this.lastUpdate;
        }

        let lastChangedCRLElement: DERElement | undefined = undefined;
        if (this.lastChangedCRL) {
            lastChangedCRLElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                4,
            );
            lastChangedCRLElement.generalizedTime = this.lastChangedCRL;
        }

        return DERElement.fromSequence([
            issuerElement,
            locationElement,
            deltaRefInfoElement,
            cRLScopeElement,
            lastUpdateElement,
            lastChangedCRLElement,
        ]);
    }
}
