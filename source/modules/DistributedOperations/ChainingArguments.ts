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
import DistinguishedName from "../InformationFramework/DistinguishedName";
import DomainInfo from "./DomainInfo";
import SecurityParameters from "../DirectoryAbstractService/SecurityParameters";
import Exclusions from "./Exclusions";
import OperationProgress from "./OperationProgress";
import TraceInformation from "./TraceInformation";
import ReferenceType from "./ReferenceType";
import UniqueIdentifier from "../SelectedAttributeTypes/UniqueIdentifier";
import AuthenticationLevel from "../BasicAccessControl/AuthenticationLevel";
import SearchRuleId from "../ServiceAdministration/SearchRuleId";
import MRMapping from "../ServiceAdministration/MRMapping";
import * as errors from "../../errors";
import TraceItem from "./TraceItem";

/**
 * `ChainingArguments ::= SET {
 *   originator                 [0]  DistinguishedName OPTIONAL,
 *   targetObject               [1]  DistinguishedName OPTIONAL,
 *   operationProgress          [2]  OperationProgress
 *                                DEFAULT {nameResolutionPhase notStarted},
 *   traceInformation           [3]  TraceInformation,
 *   aliasDereferenced          [4]  BOOLEAN DEFAULT FALSE,
 *   aliasedRDNs                [5]  INTEGER OPTIONAL,
 *            -- only present in first edition systems
 *   returnCrossRefs            [6]  BOOLEAN DEFAULT FALSE,
 *   referenceType              [7]  ReferenceType DEFAULT superior,
 *   info                       [8]  DomainInfo OPTIONAL,
 *   timeLimit                  [9]  Time OPTIONAL,
 *   securityParameters         [10] SecurityParameters DEFAULT {},
 *   entryOnly                  [11] BOOLEAN DEFAULT FALSE,
 *   uniqueIdentifier           [12] UniqueIdentifier OPTIONAL,
 *   authenticationLevel        [13] AuthenticationLevel OPTIONAL,
 *   exclusions                 [14] Exclusions OPTIONAL,
 *   excludeShadows             [15] BOOLEAN DEFAULT FALSE,
 *   nameResolveOnMaster        [16] BOOLEAN DEFAULT FALSE,
 *   operationIdentifier        [17] INTEGER OPTIONAL,
 *   searchRuleId               [18] SearchRuleId OPTIONAL,
 *   chainedRelaxation          [19] MRMapping OPTIONAL,
 *   relatedEntry               [20] INTEGER OPTIONAL,
 *   dspPaging                  [21] BOOLEAN DEFAULT FALSE,
 *   --                         [22] Not to be used
 *   --                         [23] Not to be used
 *   excludeWriteableCopies     [24] BOOLEAN DEFAULT FALSE,
 *   ... }`
 */
export default
class ChainingArguments {
    constructor (
        readonly originator: DistinguishedName | undefined,
        readonly targetObject: DistinguishedName | undefined,
        readonly operationProgress: OperationProgress,
        readonly traceInformation: TraceInformation,
        readonly aliasDereferenced: boolean,
        readonly aliasedRDNs: number | undefined,
        readonly returnCrossRefs: boolean,
        readonly referenceType: ReferenceType,
        readonly info: DomainInfo | undefined,
        readonly timeLimit: Date | undefined,
        readonly securityParameters: SecurityParameters,
        readonly entryOnly: boolean,
        readonly uniqueIdentifier: UniqueIdentifier | undefined,
        readonly authenticationLevel: AuthenticationLevel | undefined,
        readonly exclusions: Exclusions | undefined,
        readonly excludeShadows: boolean,
        readonly nameResolveOnMaster: boolean,
        readonly operationIdentifier: number | undefined,
        readonly searchRuleId: SearchRuleId | undefined,
        readonly chainedRelaxation: MRMapping | undefined,
        readonly relatedEntry: number | undefined,
        readonly dspPaging: boolean,
        readonly excludeWriteableCopies: boolean,
    ) {}

    public static fromElement (value: DERElement): ChainingArguments {
        let originator: DistinguishedName | undefined = undefined;
        let targetObject: DistinguishedName | undefined = undefined;
        let operationProgress: OperationProgress = new OperationProgress(1, undefined);
        let traceInformation: TraceInformation | undefined = undefined;
        let aliasDereferenced: boolean = false;
        let aliasedRDNs: number | undefined = undefined;
        let returnCrossRefs: boolean = false;
        let referenceType: ReferenceType = ReferenceType.superior;
        let info: DomainInfo | undefined = undefined;
        let timeLimit: Date | undefined = undefined;
        let securityParameters: SecurityParameters = new SecurityParameters(
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
        );
        let entryOnly: boolean = false;
        let uniqueIdentifier: UniqueIdentifier | undefined = undefined;
        let authenticationLevel: AuthenticationLevel | undefined = undefined;
        let exclusions: Exclusions | undefined = undefined;
        let excludeShadows: boolean = false;
        let nameResolveOnMaster: boolean = false;
        let operationIdentifier: number | undefined = undefined;
        let searchRuleId: SearchRuleId | undefined = undefined;
        let chainedRelaxation: MRMapping | undefined = undefined;
        let relatedEntry: number | undefined = undefined;
        let dspPaging: boolean = false;
        let excludeWriteableCopies: boolean = false;
        value.set.forEach((element) => {
            if (element.tagClass !== ASN1TagClass.context) {
                return;
            }
            switch (element.tagNumber) {
            case (0): {
                originator = element.sizeConstrainedSequenceOf(1)
                    .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                        validateTag(rdnElement as DERElement, `originator[${rdnIndex}]`,
                            [ ASN1TagClass.universal ],
                            [ ASN1Construction.constructed ],
                            [ ASN1UniversalType.set ],
                        );
                        return rdnElement.sizeConstrainedSetOf(1)
                            .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                validateTag(atavElement as DERElement, `originator[${rdnIndex}][${atavIndex}]`,
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
                targetObject = element.sizeConstrainedSequenceOf(1)
                    .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                        validateTag(rdnElement as DERElement, `targetObject[${rdnIndex}]`,
                            [ ASN1TagClass.universal ],
                            [ ASN1Construction.constructed ],
                            [ ASN1UniversalType.set ],
                        );
                        return rdnElement.sizeConstrainedSetOf(1)
                            .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                validateTag(atavElement as DERElement, `targetObject[${rdnIndex}][${atavIndex}]`,
                                    [ ASN1TagClass.universal ],
                                    [ ASN1Construction.constructed ],
                                    [ ASN1UniversalType.sequence ],
                                );
                                return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                            });
                    });
                break;
            }
            case (2): {
                operationProgress = OperationProgress.fromElement(element);
                break;
            }
            case (3): {
                traceInformation = element.sequence.map((ti) => TraceItem.fromElement(ti));
                break;
            }
            case (4): {
                aliasDereferenced = element.boolean;
                break;
            }
            case (5): {
                aliasedRDNs = element.integer;
                break;
            }
            case (6): {
                returnCrossRefs = element.boolean;
                break;
            }
            case (7): {
                referenceType = element.enumerated;
                break;
            }
            case (8): {
                info = element.inner;
                break;
            }
            case (9): {
                const innerElement = element.inner;
                validateTag(innerElement, "time",
                    [ ASN1TagClass.universal ],
                    [ ASN1Construction.primitive ],
                    [ ASN1UniversalType.utcTime, ASN1UniversalType.generalizedTime ],
                );
                if (innerElement.tagNumber === ASN1UniversalType.utcTime) {
                    timeLimit = innerElement.utcTime;
                } else {
                    timeLimit = innerElement.generalizedTime;
                }
                break;
            }
            case (10): {
                securityParameters = SecurityParameters.fromElement(element);
                break;
            }
            case (11): {
                entryOnly = element.boolean;
                break;
            }
            case (12): {
                uniqueIdentifier = element.bitString;
                break;
            }
            case (13): {
                authenticationLevel = element;
                break;
            }
            case (14): {
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
            case (15): {
                excludeShadows = element.boolean;
                break;
            }
            case (16): {
                nameResolveOnMaster = element.boolean;
                break;
            }
            case (17): {
                operationIdentifier = element.integer;
                break;
            }
            case (18): {
                searchRuleId = SearchRuleId.fromElement(element);
                break;
            }
            case (19): {
                chainedRelaxation = MRMapping.fromElement(element);
                break;
            }
            case (20): {
                relatedEntry = element.integer;
                break;
            }
            case (21): {
                dspPaging = element.boolean;
                break;
            }
            case (24): {
                excludeWriteableCopies = element.boolean;
                break;
            }
            default: { break; }
            }
        });

        if (typeof traceInformation === "undefined") {
            throw new errors.X500Error("traceInformation not defined for ChainingArguments.");
        }

        return new ChainingArguments(
            originator,
            targetObject,
            operationProgress,
            traceInformation,
            aliasDereferenced,
            aliasedRDNs,
            returnCrossRefs,
            referenceType,
            info,
            timeLimit,
            securityParameters,
            entryOnly,
            uniqueIdentifier,
            authenticationLevel,
            exclusions,
            excludeShadows,
            nameResolveOnMaster,
            operationIdentifier,
            searchRuleId,
            chainedRelaxation,
            relatedEntry,
            dspPaging,
            excludeWriteableCopies,
        );
    }

    public toElement (): DERElement {
        let originatorElement: DERElement | undefined = undefined;
        if (this.originator) {
            originatorElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                0,
            );
            originatorElement.sequence = this.originator
                .map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())));
        }

        let targetObjectElement: DERElement | undefined = undefined;
        if (this.targetObject) {
            targetObjectElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
            );
            targetObjectElement.sequence = this.targetObject
                .map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())));
        }

        let operationProgressElement: DERElement | undefined = undefined;
        if (this.operationProgress) {
            operationProgressElement = this.operationProgress.toElement();
            operationProgressElement.tagClass = ASN1TagClass.context;
            operationProgressElement.tagNumber = 2;
        }

        const traceInformationElement: DERElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.constructed,
            3,
        );
        traceInformationElement.sequence = this.traceInformation.map((ti) => ti.toElement());

        let aliasDereferencedElement: DERElement | undefined = undefined;
        if (this.aliasDereferenced) {
            aliasDereferencedElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                4,
                this.aliasDereferenced,
            );
        }

        let aliasedRDNsElement: DERElement | undefined = undefined;
        if (this.aliasedRDNs) {
            aliasedRDNsElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                5,
                this.aliasedRDNs,
            );
        }

        let returnCrossRefsElement: DERElement | undefined = undefined;
        if (this.returnCrossRefs) {
            returnCrossRefsElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                6,
                this.returnCrossRefs,
            );
        }

        let referenceTypeElement: DERElement | undefined = undefined;
        if (this.referenceType) {
            referenceTypeElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                7,
                this.referenceType,
            );
        }

        let infoElement: DERElement | undefined = undefined;
        if (this.info) {
            infoElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                8,
                this.info,
            );
        }

        let timeLimitElement: DERElement | undefined = undefined;
        if (this.timeLimit) {
            timeLimitElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                9,
                this.timeLimit,
            );
        }

        let securityParametersElement: DERElement | undefined = undefined;
        if (this.securityParameters) {
            securityParametersElement = this.securityParameters.toElement();
            securityParametersElement.tagClass = ASN1TagClass.context;
            securityParametersElement.tagNumber = 10;
        }

        let entryOnlyElement: DERElement | undefined = undefined;
        if (this.entryOnly) {
            entryOnlyElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                11,
                this.entryOnly,
            );
        }

        let uniqueIdentifierElement: DERElement | undefined = undefined;
        if (this.uniqueIdentifier) {
            uniqueIdentifierElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                12,
            );
            uniqueIdentifierElement.bitString = this.uniqueIdentifier;
        }

        let authenticationLevelElement: DERElement | undefined = undefined;
        if (this.authenticationLevel) {
            authenticationLevelElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                13,
                this.authenticationLevel,
            );
        }

        let exclusionsElement: DERElement | undefined = undefined;
        if (this.exclusions) {
            exclusionsElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                14,
            );
            exclusionsElement.set = this.exclusions
                .map((x) => DERElement.fromSet(x
                    .map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())))));
        }

        let excludeShadowsElement: DERElement | undefined = undefined;
        if (this.excludeShadows) {
            excludeShadowsElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                15,
                this.excludeShadows,
            );
        }

        let nameResolveOnMasterElement: DERElement | undefined = undefined;
        if (this.nameResolveOnMaster) {
            nameResolveOnMasterElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                16,
                this.nameResolveOnMaster,
            );
        }

        let operationIdentifierElement: DERElement | undefined = undefined;
        if (this.operationIdentifier) {
            operationIdentifierElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                17,
                this.operationIdentifier,
            );
        }

        let searchRuleIdElement: DERElement | undefined = undefined;
        if (this.searchRuleId) {
            searchRuleIdElement = this.searchRuleId.toElement();
            searchRuleIdElement.tagClass = ASN1TagClass.context;
            searchRuleIdElement.tagNumber = 18;
        }

        let chainedRelaxationElement: DERElement | undefined = undefined;
        if (this.chainedRelaxation) {
            chainedRelaxationElement = this.chainedRelaxation.toElement();
            chainedRelaxationElement.tagClass = ASN1TagClass.context;
            chainedRelaxationElement.tagNumber = 19;
        }

        let relatedEntryElement: DERElement | undefined = undefined;
        if (this.relatedEntry) {
            relatedEntryElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                20,
                this.relatedEntry,
            );
        }

        let dspPagingElement: DERElement | undefined = undefined;
        if (this.dspPaging) {
            dspPagingElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                21,
                this.dspPaging,
            );
        }

        let excludeWriteableCopiesElement: DERElement | undefined = undefined;
        if (this.excludeWriteableCopies) {
            excludeWriteableCopiesElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                24,
                this.excludeWriteableCopies,
            );
        }

        return DERElement.fromSet([
            originatorElement,
            targetObjectElement,
            operationProgressElement,
            traceInformationElement,
            aliasDereferencedElement,
            aliasedRDNsElement,
            returnCrossRefsElement,
            referenceTypeElement,
            infoElement,
            timeLimitElement,
            securityParametersElement,
            entryOnlyElement,
            uniqueIdentifierElement,
            authenticationLevelElement,
            exclusionsElement,
            excludeShadowsElement,
            nameResolveOnMasterElement,
            operationIdentifierElement,
            searchRuleIdElement,
            chainedRelaxationElement,
            relatedEntryElement,
            dspPagingElement,
            excludeWriteableCopiesElement,
        ]);
    }
}
