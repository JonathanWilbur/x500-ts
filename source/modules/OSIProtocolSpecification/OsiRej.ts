import {
    ASN1Element,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import InvokeId from "../CommonProtocolSpecifications/InvokeId";

/**
 * `OsiRej ::= [4] IMPLICIT SEQUENCE {
 *   invokeId          InvokeId,
 *   problem           CHOICE {
 *     general      [0]  IMPLICIT GeneralProblem,
 *     invoke       [1]  IMPLICIT InvokeProblem,
 *     returnResult [2]  IMPLICIT ReturnResultProblem,
 *     returnError  [3]  IMPLICIT ReturnErrorProblem,
 *     ... },
 *   ... }`
 */
export default
class OsiRej {
    constructor (
        readonly invokeId: InvokeId,
        readonly problem: ASN1Element,
    ) {}

    public static fromElement (value: ASN1Element): OsiRej {
        let invokeId!: InvokeId;
        let problem!: ASN1Element;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "problem",
                optional: false,
                callback: (el: ASN1Element): void => {
                    invokeId = el;
                },
            },
            {
                name: "problem",
                optional: false,
                callback: (el: ASN1Element): void => {
                    invokeId = el;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new OsiRej(invokeId, problem);
    }

    public toElement (): DERElement {
        const ret = DERElement.fromSequence([
            this.invokeId as DERElement,
            this.problem as DERElement,
        ]);
        ret.tagClass = ASN1TagClass.context;
        ret.tagNumber = 4;
        return ret;
    }
}
