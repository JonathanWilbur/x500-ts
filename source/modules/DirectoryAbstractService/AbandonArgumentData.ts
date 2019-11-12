import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import InvokeId from "../CommonProtocolSpecifications/InvokeId";

/**
 * `AbandonArgumentData ::= SEQUENCE {
 *   invokeID  [0]  InvokeId,
 *   ... }`
 */
export default
class AbandonArgumentData {
    constructor (
        readonly invokeId: InvokeId,
    ) {}

    public static fromElement (value: ASN1Element): AbandonArgumentData {
        let invokeId!: InvokeId;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "invokeId",
                optional: false,
                tagClass: ASN1TagClass.context,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    invokeId = (el as DERElement).inner;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new AbandonArgumentData(invokeId);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                0,
                this.invokeId,
            ),
        ]);
    }
}
