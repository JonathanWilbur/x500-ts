import {
    ASN1Element,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import InvokeId from "../CommonProtocolSpecifications/InvokeId";
import Code from "../CommonProtocolSpecifications/Code";

/**
 * `OsiErr{OPERATION:Operations} ::= [3] IMPLICIT SEQUENCE {
 *   invokeID  InvokeId,
 *   errcode   OPERATION.&Errors.&errorCode({Operations}),
 *   error     OPERATION.&Errors.&ParameterType({Operations}{@.errcode}) }`
 */
export default
class OsiErr {
    constructor (
        readonly invokeID: InvokeId,
        readonly errcode: Code,
        readonly error: ASN1Element,
    ) {}

    public static fromElement (value: ASN1Element): OsiErr {
        let invokeID!: InvokeId;
        let errcode!: Code;
        let error!: ASN1Element;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "invokeID",
                optional: false,
                callback: (el: ASN1Element): void => {
                    invokeID = el;
                },
            },
            {
                name: "errcode",
                optional: false,
                callback: (el: ASN1Element): void => {
                    errcode = el;
                },
            },
            {
                name: "error",
                optional: false,
                callback: (el: ASN1Element): void => {
                    error = el;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new OsiErr(invokeID, errcode, error);
    }

    public toElement (): DERElement {
        const ret = DERElement.fromSequence([
            this.invokeID as DERElement,
            this.errcode as DERElement,
            this.error as DERElement,
        ]);
        ret.tagClass = ASN1TagClass.context;
        ret.tagNumber = 3;
        return ret;
    }
}
