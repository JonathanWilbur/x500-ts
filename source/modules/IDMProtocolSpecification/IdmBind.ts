import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
    ObjectIdentifier,
} from "asn1-ts";
import GeneralName from "../CertificateExtensions/GeneralName";

/**
 * `IdmBind{IDM-PROTOCOL:Protocols} ::= SEQUENCE {
 *   protocolID           IDM-PROTOCOL.&id({Protocols}),
 *   callingAETitle  [0]  GeneralName OPTIONAL,
 *   calledAETitle   [1]  GeneralName OPTIONAL,
 *   argument        [2]  IDM-PROTOCOL.&bind-operation.&ArgumentType
 *                          ({Protocols}{@protocolID}),
 *   ... }`
 */
export default
class IdmBind {
    constructor (
        readonly protocolID: ObjectIdentifier,
        readonly callingAETitle: GeneralName | undefined,
        readonly calledAETitle: GeneralName | undefined,
        readonly argument: ASN1Element,
    ) {}

    public static fromElement (value: ASN1Element): IdmBind {
        let protocolID!: ObjectIdentifier;
        let callingAETitle: GeneralName | undefined = undefined;
        let calledAETitle: GeneralName | undefined = undefined;
        let argument!: ASN1Element;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "protocolID",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    protocolID = el.objectIdentifier;
                },
            },
            {
                name: "callingAETitle",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    callingAETitle = (el as DERElement).inner;
                },
            },
            {
                name: "calledAETitle",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    calledAETitle = (el as DERElement).inner;
                },
            },
            {
                name: "argument",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    argument = el as DERElement;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new IdmBind(protocolID, callingAETitle, calledAETitle, argument);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.protocolID,
            ),
            this.callingAETitle
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.constructed,
                    0,
                    this.callingAETitle,
                )
                : undefined,
            this.calledAETitle
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.constructed,
                    1,
                    this.calledAETitle,
                )
                : undefined,
            this.argument as DERElement,
        ]);
    }
}
