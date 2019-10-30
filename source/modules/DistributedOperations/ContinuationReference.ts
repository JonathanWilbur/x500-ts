import {
    ASN1Construction,
    ASN1UniversalType,
    ASN1TagClass,
    DERElement,
    ASN1Element,
} from "asn1-ts";
import validateTag from "../../validateTag";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import Name from "../InformationFramework/Name";
import OperationProgress from "./OperationProgress";
import ReferenceType from "./ReferenceType";
import AccessPointInformation from "./AccessPointInformation";
import Exclusions from "./Exclusions";
import * as errors from "../../errors";

/**
 * `ContinuationReference ::= SET {
 *   targetObject         [0]  Name,
 *   aliasedRDNs          [1]  INTEGER OPTIONAL, -- only present in first edition systems
 *   operationProgress    [2]  OperationProgress,
 *   rdnsResolved         [3]  INTEGER OPTIONAL,
 *   referenceType        [4]  ReferenceType,
 *   accessPoints         [5]  SET OF AccessPointInformation,
 *   entryOnly            [6]  BOOLEAN DEFAULT FALSE,
 *   exclusions           [7]  Exclusions OPTIONAL,
 *   returnToDUA          [8]  BOOLEAN DEFAULT FALSE,
 *   nameResolveOnMaster  [9]  BOOLEAN DEFAULT FALSE,
 *   ... }`
 */
export default
class ContinuationReference {
    constructor (
        readonly targetObject: Name,
        readonly aliasedRDNs: number | undefined,
        readonly operationProgress: OperationProgress,
        readonly rdnsResolved: number | undefined,
        readonly referenceType: ReferenceType,
        readonly accessPoints: AccessPointInformation[],
        readonly entryOnly: boolean,
        readonly exclusions: Exclusions | undefined,
        readonly returnToDUA: boolean,
        readonly nameResolveOnMaster: boolean,
    ) {}

    public static fromElement (value: DERElement): ContinuationReference {
        let targetObject: Name | undefined = undefined;
        let aliasedRDNs: number | undefined = undefined;
        let operationProgress: OperationProgress | undefined = undefined;
        let rdnsResolved: number | undefined = undefined;
        let referenceType: ReferenceType | undefined = undefined;
        let accessPoints: AccessPointInformation[] | undefined = undefined;
        let entryOnly: boolean = false;
        let exclusions: Exclusions | undefined = undefined;
        let returnToDUA: boolean = false;
        let nameResolveOnMaster: boolean = false;
        value.set.forEach((element) => {
            if (element.tagClass !== ASN1TagClass.context) {
                return;
            }
            switch (element.tagNumber) {
            case (0): {
                targetObject = element.sizeConstrainedSequenceOf(1)
                    .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                        validateTag(rdnElement as DERElement, `dsa[${rdnIndex}]`,
                            [ ASN1TagClass.universal ],
                            [ ASN1Construction.constructed ],
                            [ ASN1UniversalType.set ],
                        );
                        return rdnElement.sizeConstrainedSetOf(1)
                            .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                validateTag(atavElement as DERElement, `dsa[${rdnIndex}][${atavIndex}]`,
                                    [ ASN1TagClass.universal ],
                                    [ ASN1Construction.constructed ],
                                    [ ASN1UniversalType.sequence ],
                                );
                                return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                            });
                    });
                break;
            }
            case (1): {
                aliasedRDNs = element.integer;
                break;
            }
            case (2): {
                operationProgress = OperationProgress.fromElement(element);
                break;
            }
            case (3): {
                rdnsResolved = element.integer;
                break;
            }
            case (4): {
                referenceType = element.enumerated;
                break;
            }
            case (5): {
                accessPoints = element.set.map((ap) => AccessPointInformation.fromElement(ap));
                break;
            }
            case (6): {
                entryOnly = element.boolean;
                break;
            }
            case (7): {
                exclusions = element.sizeConstrainedSetOf(1)
                    .map((x) => x.sizeConstrainedSequenceOf(1)
                        .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                            validateTag(rdnElement as DERElement, `exclusions[${rdnIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.set ],
                            );
                            return rdnElement.sizeConstrainedSetOf(1)
                                .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                    validateTag(atavElement as DERElement, `exclusions[${rdnIndex}][${atavIndex}]`,
                                        [ ASN1TagClass.universal ],
                                        [ ASN1Construction.constructed ],
                                        [ ASN1UniversalType.sequence ],
                                    );
                                    return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                                });
                        }));
                break;
            }
            case (8): {
                returnToDUA = element.boolean;
                break;
            }
            case (9): {
                nameResolveOnMaster = element.boolean;
                break;
            }
            default: { break; }
            }
        });

        if (typeof targetObject === "undefined") {
            throw new errors.X500Error("targetObject not defined for ContinuationReference.");
        }

        if (typeof operationProgress === "undefined") {
            throw new errors.X500Error("operationProgress not defined for ContinuationReference.");
        }

        if (typeof referenceType === "undefined") {
            throw new errors.X500Error("referenceType not defined for ContinuationReference.");
        }

        if (typeof accessPoints === "undefined") {
            throw new errors.X500Error("accessPoints not defined for ContinuationReference.");
        }

        return new ContinuationReference(
            targetObject,
            aliasedRDNs,
            operationProgress,
            rdnsResolved,
            referenceType,
            accessPoints,
            entryOnly,
            exclusions,
            returnToDUA,
            nameResolveOnMaster,
        );
    }

    public toElement (): DERElement {
        const targetObjectElement: DERElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.constructed,
            0,
        );
        targetObjectElement.sequence = this.targetObject
            .map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())));

        const aliasedRDNsElement: DERElement | undefined = this.aliasedRDNs
            ? new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                1,
                this.aliasedRDNs,
            )
            : undefined;

        const operationProgressElement: DERElement = this.operationProgress.toElement();
        operationProgressElement.tagClass = ASN1TagClass.context;
        operationProgressElement.tagNumber = 2;

        const rdnsResolvedElement: DERElement | undefined = this.rdnsResolved
            ? new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                3,
                this.rdnsResolved,
            )
            : undefined;

        const referenceTypeElement: DERElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.primitive,
            4,
            this.referenceType,
        );

        const accessPointsElement: DERElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.constructed,
            5,
        );
        accessPointsElement.set = this.accessPoints.map((ap) => ap.toElement());

        const entryOnlyElement: DERElement | undefined = this.entryOnly === true
            ? new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                6,
                this.entryOnly,
            )
            : undefined;

        let exclusionsElement: DERElement | undefined = undefined;
        if (this.exclusions) {
            exclusionsElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                7,
            );
            exclusionsElement.set = this.exclusions
                .map((x) => DERElement.fromSet(x
                    .map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())))));
        }


        const returnToDUAElement: DERElement | undefined = this.returnToDUA === true
            ? new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                8,
                this.returnToDUA,
            )
            : undefined;

        const nameResolveOnMasterElement: DERElement | undefined = this.nameResolveOnMaster === true
            ? new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                9,
                this.nameResolveOnMaster,
            )
            : undefined;

        return DERElement.fromSet([
            targetObjectElement,
            aliasedRDNsElement,
            operationProgressElement,
            rdnsResolvedElement,
            referenceTypeElement,
            accessPointsElement,
            entryOnlyElement,
            exclusionsElement,
            returnToDUAElement,
            nameResolveOnMasterElement,
        ]);
    }
}
