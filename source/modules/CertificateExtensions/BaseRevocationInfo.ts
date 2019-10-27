/**
 * `BaseRevocationInfo ::= SEQUENCE {
 *   cRLStreamIdentifier  [0]  CRLStreamIdentifier OPTIONAL,
 *   cRLNumber            [1]  CRLNumber,
 *   baseThisUpdate       [2]  GeneralizedTime,
 *   ... }`
 */
import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import CRLStreamIdentifier from "./CRLStreamIdentifier";
import CRLNumber from "./CRLNumber";

export default
class TimeSpecification {
    constructor (
        readonly cRLStreamIdentifier: CRLStreamIdentifier | undefined,
        readonly cRLNumber: CRLNumber,
        readonly baseThisUpdate: Date,
    ) {}

    public static fromElement (value: DERElement): TimeSpecification {
        let cRLStreamIdentifier: CRLStreamIdentifier | undefined = undefined;
        let cRLNumber!: CRLNumber;
        let baseThisUpdate!: Date;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "cRLStreamIdentifier",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    cRLStreamIdentifier = el.integer;
                },
            },
            {
                name: "cRLNumber",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    cRLNumber = el.octetString;
                },
            },
            {
                name: "baseThisUpdate",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    baseThisUpdate = el.generalizedTime;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new TimeSpecification(
            cRLStreamIdentifier,
            cRLNumber,
            baseThisUpdate,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.cRLStreamIdentifier
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    0,
                    this.cRLStreamIdentifier,
                )
                : undefined,
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                1,
                this.cRLNumber,
            ),
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                2,
                this.baseThisUpdate,
            ),
        ]);
    }
}
