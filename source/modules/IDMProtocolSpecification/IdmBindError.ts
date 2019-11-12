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
 * `IdmBindError{IDM-PROTOCOL:Protocols} ::= SEQUENCE {
 *   protocolID              IDM-PROTOCOL.&id({Protocols}),
 * --errcode                 IDM-PROTOCOL.&bind-operation.&Errors.&errorCode OPTIONAL
 *   respondingAETitle  [0]  GeneralName OPTIONAL,
 *   aETitleError            ENUMERATED {
 *     callingAETitleNotAccepted  (0),
 *     calledAETitleNotRecognized (1),
 *     ...} OPTIONAL,
 *   error              [1]  IDM-PROTOCOL.&bind-operation.&Errors.&ParameterType
 *                             ({Protocols}{@protocolID}),
 *   ... }`
 */
export default
class IdmBindError {
    constructor (
        readonly protocolID: ObjectIdentifier,
        readonly respondingAETitle: GeneralName | undefined,
        readonly aETitleError: number | undefined,
        readonly error: ASN1Element,
    ) {}

    public static fromElement (value: ASN1Element): IdmBindError {
        let protocolID!: ObjectIdentifier;
        let respondingAETitle: GeneralName | undefined = undefined;
        let aETitleError: number | undefined = undefined;
        let error!: ASN1Element;
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
                name: "respondingAETitle",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    respondingAETitle = (el as DERElement).inner;
                },
            },
            {
                name: "aETitleError",
                optional: true,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.enumerated,
                callback: (el: ASN1Element): void => {
                    aETitleError = el.enumerated;
                },
            },
            {
                name: "error",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    error = (el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new IdmBindError(protocolID, respondingAETitle, aETitleError, error);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.protocolID,
            ),
            this.respondingAETitle
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.constructed,
                    0,
                    this.respondingAETitle,
                )
                : undefined,
            this.aETitleError
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.enumerated,
                    this.aETitleError,
                )
                : undefined,
            this.error
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.constructed,
                    1,
                    this.error,
                )
                : undefined,
        ]);
    }
}
