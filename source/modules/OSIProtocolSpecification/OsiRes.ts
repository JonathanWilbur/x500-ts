import {
    ASN1Element,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import InvokeId from "../CommonProtocolSpecifications/InvokeId";
import Code from "../CommonProtocolSpecifications/Code";

/**
 * `OsiRes{OPERATION:Operations} ::= [2] IMPLICIT SEQUENCE {
 *   invokeId  InvokeId,
 *   result    SEQUENCE {
 *     opcode    OPERATION.&operationCode({Operations}),
 *     result    OPERATION.&ResultType({Operations}{@.opcode}) }}`
 */
export default
class OsiRes {
    constructor (
        readonly invokeId: InvokeId,
        readonly result: {
            opcode: Code;
            result: ASN1Element;
        },
    ) {}

    public static fromElement (value: ASN1Element): OsiRes {
        let invokeId!: InvokeId;
        let result!: {
            opcode: Code;
            result: ASN1Element;
        };
        const specification: ConstructedElementSpecification[] = [
            {
                name: "invokeId",
                optional: false,
                callback: (el: ASN1Element): void => {
                    invokeId = el;
                },
            },
            {
                name: "result",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    let opcode!: Code;
                    let result_!: ASN1Element;
                    const resultSpecification: ConstructedElementSpecification[] = [
                        {
                            name: "opcode",
                            optional: false,
                            callback: (el2: ASN1Element): void => {
                                opcode = el2;
                            },
                        },
                        {
                            name: "result",
                            optional: false,
                            callback: (el2: ASN1Element): void => {
                                result_ = el2;
                            },
                        },
                    ];
                    validateConstruction(el.sequence as DERElement[], resultSpecification);
                    result = {
                        opcode,
                        result: result_,
                    };
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new OsiRes(invokeId, result);
    }

    public toElement (): DERElement {
        const ret = DERElement.fromSequence([
            this.invokeId as DERElement,
            DERElement.fromSequence([
                this.result.opcode as DERElement,
                this.result.result as DERElement,
            ]),
        ]);
        ret.tagClass = ASN1TagClass.context;
        ret.tagNumber = 2;
        return ret;
    }
}
