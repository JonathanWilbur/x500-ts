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
 * `OsiReq{OPERATION:Operations} ::= [1] IMPLICIT SEQUENCE {
 *   invokeId  InvokeId,
 *   opcode    OPERATION.&operationCode({Operations}),
 *   argument  OPERATION.&ArgumentType({Operations}{@opcode}) }`
 */
export default
class OsiReq {
    constructor (
        readonly invokeId: InvokeId,
        readonly opcode: Code,
        readonly argument: ASN1Element,
    ) {}

    public static fromElement (value: ASN1Element): OsiReq {
        let invokeId!: InvokeId;
        let opcode!: Code;
        let argument!: ASN1Element;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "invokeId",
                optional: false,
                callback: (el: ASN1Element): void => {
                    invokeId = el;
                },
            },
            {
                name: "opcode",
                optional: false,
                callback: (el: ASN1Element): void => {
                    opcode = el;
                },
            },
            {
                name: "argument",
                optional: false,
                callback: (el: ASN1Element): void => {
                    argument = el;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new OsiReq(invokeId, opcode, argument);
    }

    public toElement (): DERElement {
        const ret = DERElement.fromSequence([
            this.invokeId as DERElement,
            this.opcode as DERElement,
            this.argument as DERElement,
        ]);
        ret.tagClass = ASN1TagClass.context;
        ret.tagNumber = 1;
        return ret;
    }
}
