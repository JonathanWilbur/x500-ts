import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
    ObjectIdentifier,
    ASN1UniversalType,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";
import RequestAttribute from "./RequestAttribute";
import AttributeCombination from "./AttributeCombination";
import ResultAttribute from "./ResultAttribute";
import ControlOptions from "./ControlOptions";
import FamilyGrouping from "../DirectoryAbstractService/FamilyGrouping";
import FamilyReturn from "../DirectoryAbstractService/FamilyReturn";
import RelaxationPolicy from "./RelaxationPolicy";
import AttributeType from "../InformationFramework/AttributeType";
import AllowedSubset from "./AllowedSubset";
import ImposedSubset from "./ImposedSubset";
import EntryLimit from "./EntryLimit";
import validateTag from "../../validateTag";

/**
 * `SearchRule ::= SEQUENCE {
 *   COMPONENTS OF SearchRuleId,
 *   serviceType           [1]  OBJECT IDENTIFIER                          OPTIONAL,
 *   userClass             [2]  INTEGER                                    OPTIONAL,
 *   inputAttributeTypes   [3]  SEQUENCE SIZE (0..MAX) OF RequestAttribute OPTIONAL,
 *   attributeCombination  [4]  AttributeCombination                       DEFAULT and:{},
 *   outputAttributeTypes  [5]  SEQUENCE SIZE (1..MAX) OF ResultAttribute  OPTIONAL,
 *   defaultControls       [6]  ControlOptions                             OPTIONAL,
 *   mandatoryControls     [7]  ControlOptions                             OPTIONAL,
 *   searchRuleControls    [8]  ControlOptions                             OPTIONAL,
 *   familyGrouping        [9]  FamilyGrouping                             OPTIONAL,
 *   familyReturn          [10] FamilyReturn                               OPTIONAL,
 *   relaxation            [11] RelaxationPolicy                           OPTIONAL,
 *   additionalControl     [12] SEQUENCE SIZE (1..MAX) OF AttributeType    OPTIONAL,
 *   allowedSubset         [13] AllowedSubset                              DEFAULT ''111''B,
 *   imposedSubset         [14] ImposedSubset                              OPTIONAL,
 *   entryLimit            [15] EntryLimit                                 OPTIONAL,
 *   ... }`
 */
export default
class SearchRule {
    constructor (
        readonly id: number,
        readonly dmdId: ObjectIdentifier,
        readonly serviceType: ObjectIdentifier | undefined,
        readonly userClass: number | undefined,
        readonly inputAttributeTypes: RequestAttribute | undefined,
        readonly attributeCombination: AttributeCombination,
        readonly outputAttributeTypes: ResultAttribute[] | undefined,
        readonly defaultControls: ControlOptions | undefined,
        readonly mandatoryControls: ControlOptions | undefined,
        readonly searchRuleControls: ControlOptions | undefined,
        readonly familyGrouping: FamilyGrouping | undefined,
        readonly familyReturn: FamilyReturn | undefined,
        readonly relaxation: RelaxationPolicy | undefined,
        readonly additionalControl: AttributeType[] | undefined,
        readonly allowedSubset: AllowedSubset,
        readonly imposedSubset: ImposedSubset | undefined,
        readonly entryLimit: EntryLimit | undefined,
    ) {}

    public static fromElement (value: DERElement): SearchRule {
        let id!: number;
        let dmdId!: ObjectIdentifier;
        let serviceType: ObjectIdentifier | undefined = undefined;
        let userClass: number | undefined = undefined;
        let inputAttributeTypes: RequestAttribute | undefined = undefined;
        let attributeCombination: AttributeCombination = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.constructed,
            1,
        );
        let outputAttributeTypes: ResultAttribute[] | undefined = undefined;
        let defaultControls: ControlOptions | undefined = undefined;
        let mandatoryControls: ControlOptions | undefined = undefined;
        let searchRuleControls: ControlOptions | undefined = undefined;
        let familyGrouping: FamilyGrouping | undefined = undefined;
        let familyReturn: FamilyReturn | undefined = undefined;
        let relaxation: RelaxationPolicy | undefined = undefined;
        let additionalControl: AttributeType[] | undefined = undefined;
        let allowedSubset: AllowedSubset = new AllowedSubset(true, true, true);
        let imposedSubset: ImposedSubset | undefined = undefined;
        let entryLimit: EntryLimit | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "id",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    id = el.integer;
                },
            },
            {
                name: "dmdId",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    dmdId = el.objectIdentifier;
                },
            },
            {
                name: "serviceType",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    serviceType = el.objectIdentifier;
                },
            },
            {
                name: "userClass",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    userClass = el.integer;
                },
            },
            {
                name: "inputAttributeTypes",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 3,
                callback: (el: ASN1Element): void => {
                    inputAttributeTypes = RequestAttribute.fromElement(el as DERElement);
                },
            },
            {
                name: "attributeCombination",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 4,
                callback: (el: ASN1Element): void => {
                    attributeCombination = (el as DERElement).inner;
                },
            },
            {
                name: "outputAttributeTypes",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 5,
                callback: (el: ASN1Element): void => {
                    outputAttributeTypes = el.sizeConstrainedSequenceOf(1)
                        .map((oat) => ResultAttribute.fromElement(oat as DERElement));
                },
            },
            {
                name: "defaultControls",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 6,
                callback: (el: ASN1Element): void => {
                    defaultControls = ControlOptions.fromElement(el as DERElement);
                },
            },
            {
                name: "mandatoryControls",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 7,
                callback: (el: ASN1Element): void => {
                    mandatoryControls = ControlOptions.fromElement(el as DERElement);
                },
            },
            {
                name: "searchRuleControls",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 8,
                callback: (el: ASN1Element): void => {
                    searchRuleControls = ControlOptions.fromElement(el as DERElement);
                },
            },
            {
                name: "familyGrouping",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 9,
                callback: (el: ASN1Element): void => {
                    familyGrouping = el.enumerated;
                },
            },
            {
                name: "familyReturn",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 10,
                callback: (el: ASN1Element): void => {
                    familyReturn = FamilyReturn.fromElement(el as DERElement);
                },
            },
            {
                name: "relaxation",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 11,
                callback: (el: ASN1Element): void => {
                    relaxation = RelaxationPolicy.fromElement(el as DERElement);
                },
            },
            {
                name: "additionalControl",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 12,
                callback: (el: ASN1Element): void => {
                    additionalControl = el.sizeConstrainedSequenceOf(1)
                        .map((ac) => {
                            validateTag(ac as DERElement, "SearchRule.additionalControl",
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.primitive ],
                                [ ASN1UniversalType.objectIdentifier ],
                            );
                            return ac.objectIdentifier;
                        });
                },
            },
            {
                name: "allowedSubset",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 13,
                callback: (el: ASN1Element): void => {
                    allowedSubset = AllowedSubset.fromElement(el as DERElement);
                },
            },
            {
                name: "imposedSubset",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 14,
                callback: (el: ASN1Element): void => {
                    imposedSubset = el.enumerated;
                },
            },
            {
                name: "entryLimit",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 15,
                callback: (el: ASN1Element): void => {
                    entryLimit = EntryLimit.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new SearchRule(
            id,
            dmdId,
            serviceType,
            userClass,
            inputAttributeTypes,
            attributeCombination,
            outputAttributeTypes,
            defaultControls,
            mandatoryControls,
            searchRuleControls,
            familyGrouping,
            familyReturn,
            relaxation,
            additionalControl,
            allowedSubset,
            imposedSubset,
            entryLimit,
        );
    }

    public toElement (): DERElement {
        const searchRuleElements: DERElement[] = [
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
                this.id,
            ),
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.dmdId,
            ),
        ];

        if (this.serviceType) {
            const serviceTypeElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
            );
            serviceTypeElement.objectIdentifier = this.serviceType;
            searchRuleElements.push(serviceTypeElement);
        }

        if (this.userClass) {
            const userClassElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                2,
            );
            userClassElement.integer = this.userClass;
            searchRuleElements.push(userClassElement);
        }

        if (this.inputAttributeTypes) {
            const inputAttributeTypesElement: DERElement = this.inputAttributeTypes.toElement();
            inputAttributeTypesElement.tagClass = ASN1TagClass.context;
            inputAttributeTypesElement.construction = ASN1Construction.constructed;
            inputAttributeTypesElement.tagNumber = 3;
            searchRuleElements.push(inputAttributeTypesElement);
        }

        if (this.attributeCombination) {
            const attributeCombinationElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                4,
            );
            attributeCombinationElement.inner = this.attributeCombination;
            searchRuleElements.push(attributeCombinationElement);
        }

        if (this.outputAttributeTypes) {
            const outputAttributeTypesElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                5,
            );
            outputAttributeTypesElement.sequence = this.outputAttributeTypes
                .map((oat) => oat.toElement());
            searchRuleElements.push(outputAttributeTypesElement);
        }

        if (this.defaultControls) {
            const defaultControlsElement: DERElement = this.defaultControls.toElement();
            defaultControlsElement.tagClass = ASN1TagClass.context;
            defaultControlsElement.construction = ASN1Construction.constructed;
            defaultControlsElement.tagNumber = 6;
            searchRuleElements.push(defaultControlsElement);
        }

        if (this.mandatoryControls) {
            const mandatoryControlsElement: DERElement = this.mandatoryControls.toElement();
            mandatoryControlsElement.tagClass = ASN1TagClass.context;
            mandatoryControlsElement.construction = ASN1Construction.constructed;
            mandatoryControlsElement.tagNumber = 7;
            searchRuleElements.push(mandatoryControlsElement);
        }

        if (this.searchRuleControls) {
            const searchRuleControlsElement: DERElement = this.searchRuleControls.toElement();
            searchRuleControlsElement.tagClass = ASN1TagClass.context;
            searchRuleControlsElement.construction = ASN1Construction.constructed;
            searchRuleControlsElement.tagNumber = 8;
            searchRuleElements.push(searchRuleControlsElement);
        }

        if (this.familyGrouping) {
            const familyGroupingElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                9,
                this.familyGrouping,
            );
            searchRuleElements.push(familyGroupingElement);
        }

        if (this.familyReturn) {
            const familyReturnElement: DERElement = this.familyReturn.toElement();
            familyReturnElement.tagClass = ASN1TagClass.context;
            familyReturnElement.construction = ASN1Construction.constructed;
            familyReturnElement.tagNumber = 10;
            searchRuleElements.push(familyReturnElement);
        }

        if (this.relaxation) {
            const relaxationElement: DERElement = this.relaxation.toElement();
            relaxationElement.tagClass = ASN1TagClass.context;
            relaxationElement.construction = ASN1Construction.constructed;
            relaxationElement.tagNumber = 11;
            searchRuleElements.push(relaxationElement);
        }

        if (this.additionalControl) {
            const additionalControlElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                12,
            );
            additionalControlElement.sequence = this.additionalControl.map((ac) => new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                ac,
            ));
            searchRuleElements.push(additionalControlElement);
        }

        if (this.allowedSubset) {
            const allowedSubsetElement: DERElement = this.allowedSubset.toElement();
            allowedSubsetElement.tagClass = ASN1TagClass.context;
            allowedSubsetElement.construction = ASN1Construction.constructed;
            allowedSubsetElement.tagNumber = 13;
            searchRuleElements.push(allowedSubsetElement);
        }

        if (this.imposedSubset) {
            const imposedSubsetElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                14,
                this.imposedSubset,
            );
            searchRuleElements.push(imposedSubsetElement);
        }

        if (this.entryLimit) {
            const entryLimitElement: DERElement = this.entryLimit.toElement();
            entryLimitElement.tagClass = ASN1TagClass.context;
            entryLimitElement.construction = ASN1Construction.constructed;
            entryLimitElement.tagNumber = 15;
            searchRuleElements.push(entryLimitElement);
        }

        return DERElement.fromSequence(searchRuleElements);
    }

    public static fromBytes (value: Uint8Array): SearchRule {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return SearchRule.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
