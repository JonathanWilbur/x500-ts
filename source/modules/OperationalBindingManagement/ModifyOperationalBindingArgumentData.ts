import {
    ObjectIdentifier,
    ASN1Element,
    ASN1TagClass,
    ASN1Construction,
    ConstructedElementSpecification,
    validateConstruction,
    DERElement,
} from "asn1-ts";
import OperationalBindingID from "./OperationalBindingID";
import AccessPoint from "../DistributedOperations/AccessPoint";
import ModifiedValidity from "./ModifiedValidity";
import SecurityParameters from "../DirectoryAbstractService/SecurityParameters";

/**
 * `ModifyOperationalBindingArgumentData ::= SEQUENCE {
 *   bindingType       [0]  OPERATIONAL-BINDING.&id({OpBindingSet}),
 *   bindingID         [1]  OperationalBindingID,
 *   accessPoint       [2]  AccessPoint OPTIONAL,
 *   -- symmetric, Role A initiates, or Role B initiates
 *   initiator              CHOICE {
 *     symmetric         [3]  OPERATIONAL-BINDING.&both.&ModifyParam
 *                           ({OpBindingSet}{@bindingType}),
 *     roleA-initiates   [4]  OPERATIONAL-BINDING.&roleA.&ModifyParam
 *                           ({OpBindingSet}{@bindingType}),
 *     roleB-initiates   [5]  OPERATIONAL-BINDING.&roleB.&ModifyParam
 *                           ({OpBindingSet}{@bindingType})} OPTIONAL,
 *   newBindingID      [6]  OperationalBindingID,
 *   newAgreement      [7]  OPERATIONAL-BINDING.&Agreement
 *                        ({OpBindingSet}{@bindingType}) OPTIONAL,
 *   valid               [8]  ModifiedValidity OPTIONAL,
 *   securityParameters  [9]  SecurityParameters OPTIONAL,
 *   ...}`
 */
export default
class ModifyOperationalBindingArgumentData {
    constructor (
        readonly bindingType: ObjectIdentifier,
        readonly bindingID: OperationalBindingID,
        readonly accessPoint: AccessPoint | undefined,
        readonly initiator: ASN1Element | undefined,
        readonly newBindingID: OperationalBindingID,
        readonly newAgreement: ASN1Element | undefined,
        readonly valid: ModifiedValidity | undefined,
        readonly securityParameters: SecurityParameters | undefined,
    ) {}

    public static fromElement (value: ASN1Element): ModifyOperationalBindingArgumentData {
        let bindingType!: ObjectIdentifier;
        let bindingID!: OperationalBindingID;
        let accessPoint: AccessPoint | undefined = undefined;
        let initiator!: ASN1Element;
        let newBindingID!: OperationalBindingID;
        let newAgreement!: ASN1Element | undefined;
        let valid: ModifiedValidity = new ModifiedValidity(undefined, undefined);
        let securityParameters: SecurityParameters | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "bindingType",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    bindingType = el.objectIdentifier;
                },
            },
            {
                name: "bindingID",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    bindingID = OperationalBindingID.fromElement(el as DERElement);
                },
            },
            {
                name: "accessPoint",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    accessPoint = AccessPoint.fromElement(el as DERElement);
                },
            },
            {
                name: "initiator",
                optional: true,
                choice: [
                    {
                        name: "initiator",
                        optional: true,
                        tagClass: ASN1TagClass.context,
                        tagNumber: 3,
                        callback: (el: ASN1Element): void => {
                            initiator = el;
                        },
                    },
                    {
                        name: "initiator",
                        optional: true,
                        tagClass: ASN1TagClass.context,
                        tagNumber: 4,
                        callback: (el: ASN1Element): void => {
                            initiator = el;
                        },
                    },
                    {
                        name: "initiator",
                        optional: true,
                        tagClass: ASN1TagClass.context,
                        tagNumber: 5,
                        callback: (el: ASN1Element): void => {
                            initiator = el;
                        },
                    },
                ],
            },
            {
                name: "newBindingID",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 6,
                callback: (el: ASN1Element): void => {
                    newBindingID = OperationalBindingID.fromElement(el as DERElement);
                },
            },
            {
                name: "newAgreement",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 7,
                callback: (el: ASN1Element): void => {
                    newAgreement = el;
                },
            },
            {
                name: "valid",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 8,
                callback: (el: ASN1Element): void => {
                    valid = ModifiedValidity.fromElement(el as DERElement);
                },
            },
            {
                name: "securityParameters",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 9,
                callback: (el: ASN1Element): void => {
                    securityParameters = SecurityParameters.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new ModifyOperationalBindingArgumentData(
            bindingType,
            bindingID,
            accessPoint,
            initiator,
            newBindingID,
            newAgreement,
            valid,
            securityParameters,
        );
    }

    public toElement (): DERElement {
        const bindingIDElement: DERElement = this.bindingID.toElement();
        bindingIDElement.tagClass = ASN1TagClass.context;
        bindingIDElement.tagNumber = 1;

        let accessPointElement: DERElement | undefined = undefined;
        if (this.accessPoint !== undefined) {
            accessPointElement = this.accessPoint.toElement();
            accessPointElement.tagClass = ASN1TagClass.context;
            accessPointElement.tagNumber = 2;
        }

        const newBindingIDElement: DERElement = this.newBindingID.toElement();
        newBindingIDElement.tagClass = ASN1TagClass.context;
        newBindingIDElement.tagNumber = 6;

        // let newAgreementElement: DERElement | undefined = undefined;
        // if (this.newAgreement !== undefined) {
        //     newAgreementElement = this.newAgreement;
        // }

        let validityElement: DERElement | undefined = undefined;
        if (this.valid !== undefined) {
            validityElement = this.valid.toElement();
            validityElement.tagClass = ASN1TagClass.context;
            validityElement.tagNumber = 8;
        }

        let securityParametersElement: DERElement | undefined = undefined;
        if (this.securityParameters !== undefined) {
            securityParametersElement = this.securityParameters.toElement();
            securityParametersElement.tagClass = ASN1TagClass.context;
            securityParametersElement.tagNumber = 9;
        }

        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                0,
                this.bindingType,
            ),
            bindingIDElement,
            accessPointElement,
            this.initiator as DERElement,
            newBindingIDElement,
            this.newAgreement as DERElement | undefined,
            validityElement,
            securityParametersElement,
        ]);
    }
}
