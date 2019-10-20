import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
    ASN1UniversalType,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";
import AttributeType from "../InformationFramework/AttributeType";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import Filter from "../DirectoryAbstractService/Filter";
import MaxValueCount from "./MaxValueCount";
import RestrictedValue from "./RestrictedValue";
import ContextAssertion from "../InformationFramework/ContextAssertion";
import Refinement from "../InformationFramework/Refinement";

/**
 * `ProtectedItems ::= SEQUENCE {
 *   entry                          [0]  NULL OPTIONAL,
 *   allUserAttributeTypes          [1]  NULL OPTIONAL,
 *   attributeType                  [2]  SET SIZE (1..MAX) OF AttributeType
 *                                         OPTIONAL,
 *   allAttributeValues             [3]  SET SIZE (1..MAX) OF AttributeType
 *                                         OPTIONAL,
 *   allUserAttributeTypesAndValues [4]  NULL OPTIONAL,
 *   attributeValue                 [5]  SET SIZE (1..MAX) OF AttributeTypeAndValue
 *                                         OPTIONAL,
 *   selfValue                      [6]  SET SIZE (1..MAX) OF AttributeType
 *                                         OPTIONAL,
 *   rangeOfValues                  [7]  Filter OPTIONAL,
 *   maxValueCount                  [8]  SET SIZE (1..MAX) OF MaxValueCount
 *                                         OPTIONAL,
 *   maxImmSub                      [9]  INTEGER OPTIONAL,
 *   restrictedBy                   [10] SET SIZE (1..MAX) OF RestrictedValue
 *                                         OPTIONAL,
 *   contexts                       [11] SET SIZE (1..MAX) OF ContextAssertion
 *                                         OPTIONAL,
 *   classes                        [12] Refinement OPTIONAL,
 *   ... }`
 */
export default
class ProtectedItems {
    constructor (
        readonly entry: null | undefined,
        readonly allUserAttributeTypes: null | undefined,
        readonly attributeType: AttributeType[] | undefined,
        readonly allAttributeValues: AttributeType[] | undefined,
        readonly allUserAttributeTypesAndValues: null | undefined,
        readonly attributeValue: AttributeTypeAndValue[] | undefined,
        readonly selfValue: AttributeType[] | undefined,
        readonly rangeOfValues: Filter | undefined,
        readonly maxValueCount: MaxValueCount[] | undefined,
        readonly maxImmSub: number | undefined,
        readonly restrictedBy: RestrictedValue[] | undefined,
        readonly contexts: ContextAssertion[] | undefined,
        readonly classes: Refinement | undefined,
    ) {}

    public static fromElement (value: DERElement): ProtectedItems {
        let entry: null | undefined = undefined;
        let allUserAttributeTypes: null | undefined = undefined;
        let attributeType: AttributeType[] | undefined = undefined;
        let allAttributeValues: AttributeType[] | undefined = undefined;
        let allUserAttributeTypesAndValues: null | undefined = undefined;
        let attributeValue: AttributeTypeAndValue[] | undefined = undefined;
        let selfValue: AttributeType[] | undefined = undefined;
        let rangeOfValues: Filter | undefined = undefined;
        let maxValueCount: MaxValueCount[] | undefined = undefined;
        let maxImmSub: number | undefined = undefined;
        let restrictedBy: RestrictedValue[] | undefined = undefined;
        let contexts: ContextAssertion[] | undefined = undefined;
        let classes: Refinement | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "entry",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 0,
                callback: (): void => {
                    entry = null;
                },
            },
            {
                name: "allUserAttributeTypes",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 1,
                callback: (): void => {
                    allUserAttributeTypes = null;
                },
            },
            {
                name: "attributeType",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    // TODO: Validate tags.
                    attributeType = (el.sizeConstrainedSetOf(1) as DERElement[])
                        .map((at) => at.objectIdentifier);
                },
            },
            {
                name: "allAttributeValues",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 3,
                callback: (el: ASN1Element): void => {
                    allAttributeValues = (el.sizeConstrainedSetOf(1) as DERElement[])
                        .map((at) => at.objectIdentifier);
                },
            },
            {
                name: "allUserAttributeTypesAndValues",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 4,
                callback: (): void => {
                    allUserAttributeTypesAndValues = null;
                },
            },
            {
                name: "attributeValue",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 5,
                callback: (el: ASN1Element): void => {
                    attributeValue = (el.sizeConstrainedSetOf(1) as DERElement[])
                        .map(AttributeTypeAndValue.fromElement);
                },
            },
            {
                name: "selfValue",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 6,
                callback: (el: ASN1Element): void => {
                    // TODO: Validate tags.
                    selfValue = (el.sizeConstrainedSetOf(1) as DERElement[])
                        .map((at) => at.objectIdentifier);
                },
            },
            {
                name: "rangeOfValues",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 7,
                callback: (el: ASN1Element): void => {
                    rangeOfValues = el as DERElement;
                },
            },
            {
                name: "maxValueCount",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 8,
                callback: (el: ASN1Element): void => {
                    maxValueCount = (el.sizeConstrainedSetOf(1) as DERElement[])
                        .map(MaxValueCount.fromElement);
                },
            },
            {
                name: "maxImmSub",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 9,
                callback: (el: ASN1Element): void => {
                    maxImmSub = el.integer;
                },
            },
            {
                name: "restrictedBy",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 10,
                callback: (el: ASN1Element): void => {
                    restrictedBy = (el.sizeConstrainedSetOf(1) as DERElement[])
                        .map(RestrictedValue.fromElement);
                },
            },
            {
                name: "contexts",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 11,
                callback: (el: ASN1Element): void => {
                    contexts = (el.sizeConstrainedSetOf(1) as DERElement[])
                        .map(ContextAssertion.fromElement);
                },
            },
            {
                name: "classes",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 12,
                callback: (el: ASN1Element): void => {
                    classes = el as DERElement;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new ProtectedItems(
            entry,
            allUserAttributeTypes,
            attributeType,
            allAttributeValues,
            allUserAttributeTypesAndValues,
            attributeValue,
            selfValue,
            rangeOfValues,
            maxValueCount,
            maxImmSub,
            restrictedBy,
            contexts,
            classes,
        );
    }

    public toElement (): DERElement {
        const protectedItemsElements: DERElement[] = [];

        if (this.entry) {
            const entryElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                0,
            );
            protectedItemsElements.push(entryElement);
        }

        if (this.allUserAttributeTypes) {
            const allUserAttributeTypesElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
            );
            protectedItemsElements.push(allUserAttributeTypesElement);
        }

        if (this.attributeType) {
            const attributeTypeElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                2,
            );
            attributeTypeElement.set = this.attributeType.map((atOID) => new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                atOID,
            ));
            protectedItemsElements.push(attributeTypeElement);
        }

        if (this.allAttributeValues) {
            const allAttributeValuesElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                3,
            );
            allAttributeValuesElement.set = this.allAttributeValues.map((avOID) => new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                avOID,
            ));
            protectedItemsElements.push(allAttributeValuesElement);
        }

        if (this.allUserAttributeTypesAndValues) {
            const allUserAttributeTypesAndValuesElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                4,
            );
            protectedItemsElements.push(allUserAttributeTypesAndValuesElement);
        }

        if (this.attributeValue) {
            const attributeValueElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                5,
            );
            attributeValueElement.set = this.attributeValue.map((atav) => atav.toElement());
            protectedItemsElements.push(attributeValueElement);
        }

        if (this.selfValue) {
            const selfValueElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                6,
            );
            selfValueElement.set = this.selfValue.map((svOID) => new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                svOID,
            ));
            protectedItemsElements.push(selfValueElement);
        }

        if (this.rangeOfValues) {
            const rangeOfValuesElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                7,
            );
            rangeOfValuesElement.inner = this.rangeOfValues;
            protectedItemsElements.push(rangeOfValuesElement);
        }

        if (this.maxValueCount) {
            const maxValueCountElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                8,
            );
            maxValueCountElement.set = this.maxValueCount.map((mvc) => mvc.toElement());
            protectedItemsElements.push(maxValueCountElement);
        }

        if (this.maxImmSub) {
            const maxImmSubElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                9,
            );
            maxImmSubElement.integer = this.maxImmSub;
            protectedItemsElements.push(maxImmSubElement);
        }

        if (this.restrictedBy) {
            const restrictedByElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                10,
            );
            restrictedByElement.set = this.restrictedBy.map((rv) => rv.toElement());
            protectedItemsElements.push(restrictedByElement);
        }

        if (this.contexts) {
            const contextsElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                11,
            );
            contextsElement.set = this.contexts.map((c) => c.toElement());
            protectedItemsElements.push(contextsElement);
        }

        if (this.classes) {
            const classesElement: DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                12,
            );
            classesElement.inner = this.classes;
            protectedItemsElements.push(classesElement);
        }

        return DERElement.fromSequence(protectedItemsElements);
    }

    public static fromBytes (value: Uint8Array): ProtectedItems {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return ProtectedItems.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
