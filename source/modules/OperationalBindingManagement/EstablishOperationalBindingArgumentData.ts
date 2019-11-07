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
import Validity from "./Validity";
import SecurityParameters from "../DirectoryAbstractService/SecurityParameters";

/**
 * `EstablishOperationalBindingArgumentData ::= SEQUENCE {
 *   bindingType        [0]  OPERATIONAL-BINDING.&id({OpBindingSet}),
 *   bindingID          [1]  OperationalBindingID OPTIONAL,
 *   accessPoint        [2]  AccessPoint,
 *                -- symmetric, Role A initiates, or Role B initiates
 *   initiator               CHOICE {
 *     symmetric          [3]  OPERATIONAL-BINDING.&both.&EstablishParam
 *                             ({OpBindingSet}{@bindingType}),
 *     roleA-initiates    [4]  OPERATIONAL-BINDING.&roleA.&EstablishParam
 *                             ({OpBindingSet}{@bindingType}),
 *     roleB-initiates    [5]  OPERATIONAL-BINDING.&roleB.&EstablishParam
 *                               ({OpBindingSet}{@bindingType})},
 *   agreement          [6]  OPERATIONAL-BINDING.&Agreement
 *                             ({OpBindingSet}{@bindingType}),
 *   valid              [7]  Validity DEFAULT {},
 *   securityParameters [8]  SecurityParameters OPTIONAL,
 *   ... }`
 */
export default
class EstablishOperationalBindingArgumentData {
    constructor (
        readonly bindingType: ObjectIdentifier,
        readonly bindingID: OperationalBindingID | undefined,
        readonly accessPoint: AccessPoint,
        readonly initiator: ASN1Element,
        readonly agreement: ASN1Element,
        readonly valid: Validity,
        readonly securityParameters: SecurityParameters | undefined,
    ) {}

    public static fromElement (value: DERElement): EstablishOperationalBindingArgumentData {
        let bindingType!: ObjectIdentifier;
        let bindingID: OperationalBindingID | undefined = undefined;
        let accessPoint!: AccessPoint;
        let initiator!: ASN1Element;
        let agreement!: ASN1Element;
        let valid: Validity = new Validity(undefined, undefined);
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
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    bindingID = OperationalBindingID.fromElement(el as DERElement);
                },
            },
            {
                name: "accessPoint",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    accessPoint = AccessPoint.fromElement(el as DERElement);
                },
            },
            {
                name: "initiator",
                optional: false,
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
                name: "agreement",
                optional: false,
                tagClass: ASN1TagClass.context,
                tagNumber: 6,
                callback: (el: ASN1Element): void => {
                    agreement = el;
                },
            },
            {
                name: "valid",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 7,
                callback: (el: ASN1Element): void => {
                    valid = Validity.fromElement(el as DERElement);
                },
            },
            {
                name: "securityParameters",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 8,
                callback: (el: ASN1Element): void => {
                    securityParameters = SecurityParameters.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new EstablishOperationalBindingArgumentData(
            bindingType,
            bindingID,
            accessPoint,
            initiator,
            agreement,
            valid,
            securityParameters,
        );
    }

    public toElement (): DERElement {
        let bindingIDElement: DERElement | undefined = undefined;
        if (this.bindingID !== undefined) {
            bindingIDElement = this.bindingID.toElement();
            bindingIDElement.tagClass = ASN1TagClass.context;
            bindingIDElement.tagNumber = 1;
        }

        const accessPointElement: DERElement = this.accessPoint.toElement();
        accessPointElement.tagClass = ASN1TagClass.context;
        accessPointElement.tagNumber = 2;

        const validityElement: DERElement = this.valid.toElement();
        validityElement.tagClass = ASN1TagClass.context;
        validityElement.tagNumber = 7;

        let securityParametersElement: DERElement | undefined = undefined;
        if (this.securityParameters !== undefined) {
            securityParametersElement = this.securityParameters.toElement();
            securityParametersElement.tagClass = ASN1TagClass.context;
            securityParametersElement.tagNumber = 8;
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
            this.agreement as DERElement,
            validityElement,
            securityParametersElement,
        ]);
    }
}
