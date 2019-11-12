import {
    ObjectIdentifier,
    ASN1Element,
    ASN1TagClass,
    ASN1Construction,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
    DERElement,
} from "asn1-ts";
import OperationalBindingID from "./OperationalBindingID";
import SecurityParameters from "../DirectoryAbstractService/SecurityParameters";
import validateTag from "../../validateTag";

/**
 * `TerminateOperationalBindingArgumentData ::= SEQUENCE {
 *   bindingType         [0]  OPERATIONAL-BINDING.&id({OpBindingSet}),
 *   bindingID           [1]  OperationalBindingID,
 *   -- symmetric, Role A initiates, or Role B initiates
 *   initiator                CHOICE {
 *     symmetric           [2]  OPERATIONAL-BINDING.&both.&TerminateParam
 *                             ({OpBindingSet}{@bindingType}),
 *     roleA-initiates     [3]  OPERATIONAL-BINDING.&roleA.&TerminateParam
 *                             ({OpBindingSet}{@bindingType}),
 *     roleB-initiates     [4]  OPERATIONAL-BINDING.&roleB.&TerminateParam
 *                             ({OpBindingSet}{@bindingType})} OPTIONAL,
 *   terminateAt         [5]  Time OPTIONAL,
 *   securityParameters  [6]  SecurityParameters OPTIONAL,
 *   ...}`
 */
export default
class TerminateOperationalBindingArgumentData {
    constructor (
        readonly bindingType: ObjectIdentifier,
        readonly bindingID: OperationalBindingID,
        readonly initiator: ASN1Element | undefined,
        readonly terminateAt: Date | undefined,
        readonly securityParameters: SecurityParameters | undefined,
    ) {}

    public static fromElement (value: ASN1Element): TerminateOperationalBindingArgumentData {
        let bindingType!: ObjectIdentifier;
        let bindingID!: OperationalBindingID;
        let initiator: ASN1Element | undefined = undefined;
        let terminateAt: Date | undefined = undefined;
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
                name: "initiator",
                optional: true,
                choice: [
                    {
                        name: "initiator",
                        optional: true,
                        tagClass: ASN1TagClass.context,
                        tagNumber: 2,
                        callback: (el: ASN1Element): void => {
                            initiator = el;
                        },
                    },
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
                ],
            },
            {
                name: "terminateAt",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 5,
                callback: (el: ASN1Element): void => {
                    const innerElement = (el as DERElement).inner;
                    validateTag(innerElement, "time",
                        [ ASN1TagClass.universal ],
                        [ ASN1Construction.primitive ],
                        [ ASN1UniversalType.utcTime, ASN1UniversalType.generalizedTime ],
                    );
                    if (innerElement.tagNumber === ASN1UniversalType.utcTime) {
                        terminateAt = innerElement.utcTime;
                    } else {
                        terminateAt = innerElement.generalizedTime;
                    }
                },
            },
            {
                name: "securityParameters",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 6,
                callback: (el: ASN1Element): void => {
                    securityParameters = SecurityParameters.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new TerminateOperationalBindingArgumentData(
            bindingType,
            bindingID,
            initiator,
            terminateAt,
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

        let securityParametersElement: DERElement | undefined = undefined;
        if (this.securityParameters !== undefined) {
            securityParametersElement = this.securityParameters.toElement();
            securityParametersElement.tagClass = ASN1TagClass.context;
            securityParametersElement.tagNumber = 6;
        }

        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                0,
                this.bindingType,
            ),
            bindingIDElement,
            this.initiator as DERElement,
            this.terminateAt
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.constructed,
                    5,
                    new DERElement(
                        ASN1TagClass.universal,
                        ASN1Construction.primitive,
                        ASN1UniversalType.generalizedTime,
                        this.terminateAt,
                    ),
                )
                : undefined,
            securityParametersElement,
        ]);
    }
}
