import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
    ASN1UniversalType,
    ConstructedElementSpecification,
} from "asn1-ts";
import validateTag from "../../validateTag";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import DistinguishedName from "../InformationFramework/DistinguishedName";
import SecurityParameters from "./SecurityParameters";
import ServiceControls from "./ServiceControls";
import OperationProgress from "../DistributedOperations/OperationProgress";
import ReferenceType from "../DistributedOperations/ReferenceType";
import Exclusions from "../DistributedOperations/Exclusions";
import ContextSelection from "./ContextSelection";
import FamilyGrouping from "./FamilyGrouping";

/**
 * `CommonArgumentsSeq ::= SEQUENCE {
 *   serviceControls      [30]  ServiceControls    DEFAULT {},
 *   securityParameters   [29]  SecurityParameters OPTIONAL,
 *   requestor            [28]  DistinguishedName  OPTIONAL,
 *   operationProgress    [27]  OperationProgress
 *                              DEFAULT {nameResolutionPhase notStarted},
 *   aliasedRDNs          [26]  INTEGER            OPTIONAL,
 *   criticalExtensions   [25]  BIT STRING         OPTIONAL,
 *   referenceType        [24]  ReferenceType      OPTIONAL,
 *   entryOnly            [23]  BOOLEAN            DEFAULT TRUE,
 *   exclusions           [22]  Exclusions         OPTIONAL,
 *   nameResolveOnMaster  [21]  BOOLEAN            DEFAULT FALSE,
 *   operationContexts    [20]  ContextSelection   OPTIONAL,
 *   familyGrouping       [19]  FamilyGrouping     DEFAULT entryOnly,
 *   ... }`
 */
export default
class CommonArgumentsSeq {
    constructor (
        readonly serviceControls: ServiceControls,
        readonly securityParameters: SecurityParameters | undefined,
        readonly requestor: DistinguishedName | undefined,
        readonly operationProgress: OperationProgress,
        readonly aliasedRDNs: number | undefined,
        readonly criticalExtensions: boolean[] | undefined,
        readonly referenceType: ReferenceType | undefined,
        readonly entryOnly: boolean,
        readonly exclusions: Exclusions | undefined,
        readonly nameResolveOnMaster: boolean,
        readonly operationContexts: ContextSelection | undefined,
        readonly familyGrouping: FamilyGrouping,
    ) {}

    public static fromElement (value: DERElement): CommonArgumentsSeq {
        let serviceControls: ServiceControls = new ServiceControls(
            undefined,
            1,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
        );
        let securityParameters: SecurityParameters | undefined = undefined;
        let requestor: DistinguishedName | undefined = undefined;
        let operationProgress: OperationProgress = new OperationProgress(1, undefined);
        let aliasedRDNs: number | undefined = undefined;
        let criticalExtensions: boolean[] | undefined = undefined;
        let referenceType: ReferenceType | undefined = undefined;
        let entryOnly: boolean = true;
        let exclusions: Exclusions | undefined = undefined;
        let nameResolveOnMaster: boolean = false;
        let operationContexts: ContextSelection | undefined = undefined;
        let familyGrouping: FamilyGrouping = FamilyGrouping.entryOnly;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "serviceControls",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 30,
                callback: (el: ASN1Element): void => {
                    serviceControls = ServiceControls.fromElement(el as DERElement);
                },
            },
            {
                name: "securityParameters",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 29,
                callback: (el: ASN1Element): void => {
                    securityParameters = SecurityParameters.fromElement(el as DERElement);
                },
            },
            {
                name: "requestor",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 28,
                callback: (el: ASN1Element): void => {
                    requestor = el.sizeConstrainedSequenceOf(1)
                        .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                            validateTag(rdnElement as DERElement, `requestor[${rdnIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.set ],
                            );
                            return rdnElement.sizeConstrainedSetOf(1)
                                .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                    validateTag(atavElement as DERElement, `requestor[${rdnIndex}][${atavIndex}]`,
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
                name: "operationProgress",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 27,
                callback: (el: ASN1Element): void => {
                    operationProgress = OperationProgress.fromElement(el as DERElement);
                },
            },
            {
                name: "aliasedRDNs",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 26,
                callback: (el: ASN1Element): void => {
                    aliasedRDNs = el.integer;
                },
            },
            {
                name: "criticalExtensions",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 25,
                callback: (el: ASN1Element): void => {
                    criticalExtensions = el.bitString;
                },
            },
            {
                name: "referenceType",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 24,
                callback: (el: ASN1Element): void => {
                    referenceType = el.enumerated;
                },
            },
            {
                name: "entryOnly",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 23,
                callback: (el: ASN1Element): void => {
                    entryOnly = el.boolean;
                },
            },
            {
                name: "exclusions",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 22,
                callback: (el: ASN1Element): void => {
                    exclusions = el.sizeConstrainedSetOf(1).map((x, i) =>
                        x.sizeConstrainedSequenceOf(1)
                            .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                                validateTag(rdnElement as DERElement, `exclusions[${i}][${rdnIndex}]`,
                                    [ ASN1TagClass.universal ],
                                    [ ASN1Construction.constructed ],
                                    [ ASN1UniversalType.set ],
                                );
                                return rdnElement.sizeConstrainedSetOf(1)
                                    .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                        validateTag(atavElement as DERElement,
                                            `exclusions[${i}][${rdnIndex}][${atavIndex}]`,
                                            [ ASN1TagClass.universal ],
                                            [ ASN1Construction.constructed ],
                                            [ ASN1UniversalType.sequence ],
                                        );
                                        return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                                    });
                            }));
                },
            },
            {
                name: "nameResolveOnMaster",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 21,
                callback: (el: ASN1Element): void => {
                    nameResolveOnMaster = el.boolean;
                },
            },
            {
                name: "operationContexts",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 20,
                callback: (el: ASN1Element): void => {
                    operationContexts = (el as DERElement).inner;
                },
            },
            {
                name: "familyGrouping",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 19,
                callback: (el: ASN1Element): void => {
                    familyGrouping = el.enumerated;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new CommonArgumentsSeq(
            serviceControls,
            securityParameters,
            requestor,
            operationProgress,
            aliasedRDNs,
            criticalExtensions,
            referenceType,
            entryOnly,
            exclusions,
            nameResolveOnMaster,
            operationContexts,
            familyGrouping,
        );
    }

    public toElement (): DERElement {
        let serviceControlsElement: DERElement | undefined = undefined;
        if (this.serviceControls !== undefined) {
            serviceControlsElement = this.serviceControls.toElement();
            serviceControlsElement.tagClass = ASN1TagClass.context;
            serviceControlsElement.tagNumber = 30;
        }

        let securityParametersElement: DERElement | undefined = undefined;
        if (this.securityParameters !== undefined) {
            securityParametersElement = this.securityParameters.toElement();
            securityParametersElement.tagClass = ASN1TagClass.context;
            securityParametersElement.tagNumber = 29;
        }

        let requestorElement: DERElement | undefined = undefined;
        if (this.requestor !== undefined) {
            requestorElement = DERElement.fromSequence(
                this.requestor.map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement()))),
            );
            requestorElement.tagClass = ASN1TagClass.context;
            requestorElement.tagNumber = 28;
        }

        let operationProgressElement: DERElement | undefined = undefined;
        if (this.operationProgress !== undefined) {
            operationProgressElement = this.operationProgress.toElement();
            operationProgressElement.tagClass = ASN1TagClass.context;
            operationProgressElement.tagNumber = 27;
        }

        let aliasedRDNsElement: DERElement | undefined = undefined;
        if (this.aliasedRDNs !== undefined) {
            aliasedRDNsElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                26,
                this.aliasedRDNs,
            );
        }

        let criticalExtensionsElement: DERElement | undefined = undefined;
        if (this.criticalExtensions !== undefined) {
            criticalExtensionsElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                25,
            );
            criticalExtensionsElement.bitString = this.criticalExtensions;
        }

        let referenceTypeElement: DERElement | undefined = undefined;
        if (this.referenceType !== undefined) {
            referenceTypeElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                24,
                this.referenceType,
            );
        }

        let entryOnlyElement: DERElement | undefined = undefined;
        if (this.entryOnly !== undefined) {
            entryOnlyElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                23,
                this.entryOnly,
            );
        }

        let exclusionsElement: DERElement | undefined = undefined;
        if (this.exclusions !== undefined) {
            exclusionsElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                22,
            );
            exclusionsElement.set = this.exclusions
                .map((x) => DERElement.fromSet(x
                    .map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())))));
        }

        let nameResolveOnMasterElement: DERElement | undefined = undefined;
        if (this.nameResolveOnMaster !== undefined) {
            nameResolveOnMasterElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                21,
                this.nameResolveOnMaster,
            );
        }

        let operationContextsElement: DERElement | undefined = undefined;
        if (this.operationContexts !== undefined) {
            operationContextsElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                20,
                this.operationContexts,
            );
        }

        let familyGroupingElement: DERElement | undefined = undefined;
        if (this.familyGrouping !== undefined) {
            familyGroupingElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                19,
                this.familyGrouping,
            );
        }

        return DERElement.fromSequence([
            serviceControlsElement,
            securityParametersElement,
            requestorElement,
            operationProgressElement,
            aliasedRDNsElement,
            criticalExtensionsElement,
            referenceTypeElement,
            entryOnlyElement,
            exclusionsElement,
            nameResolveOnMasterElement,
            operationContextsElement,
            familyGroupingElement,
        ]);
    }
}
