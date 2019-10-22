import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";
import MRMapping from "./MRMapping";

/**
 * `RelaxationPolicy ::= SEQUENCE {
 *   basic        [0]  MRMapping DEFAULT {},
 *   tightenings  [1]  SEQUENCE SIZE (1..MAX) OF MRMapping OPTIONAL,
 *   relaxations  [2]  SEQUENCE SIZE (1..MAX) OF MRMapping OPTIONAL,
 *   maximum      [3]  INTEGER OPTIONAL, -- mandatory if tightenings is present
 *   minimum      [4]  INTEGER DEFAULT 1,
 *   ... }`
 */
export default
class RelaxationPolicy {
    constructor (
        readonly basic: MRMapping,
        readonly tightenings: MRMapping[] | undefined,
        readonly relaxations: MRMapping[] | undefined,
        readonly maximum: number | undefined,
        readonly minimum: number,
    ) {}

    public static fromElement (value: DERElement): RelaxationPolicy {
        let basic!: MRMapping;
        let tightenings: MRMapping[] | undefined = undefined;
        let relaxations: MRMapping[] | undefined = undefined;
        let maximum: number | undefined = undefined;
        let minimum: number = 1;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "basic",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    basic = MRMapping.fromElement(el as DERElement);
                },
            },
            {
                name: "tightenings",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    tightenings = el.sizeConstrainedSequenceOf(1)
                        .map((m) => MRMapping.fromElement(m as DERElement));
                },
            },
            {
                name: "relaxations",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    relaxations = el.sizeConstrainedSequenceOf(1)
                        .map((m) => MRMapping.fromElement(m as DERElement));
                },
            },
            {
                name: "maximum",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 3,
                callback: (el: ASN1Element): void => {
                    maximum = el.integer;
                },
            },
            {
                name: "minimum",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 4,
                callback: (el: ASN1Element): void => {
                    minimum = el.integer;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new RelaxationPolicy(
            basic,
            tightenings,
            relaxations,
            maximum,
            minimum,
        );
    }

    public toElement (): DERElement {
        let tighteningsElement: DERElement | undefined = undefined;
        let relaxationsElement: DERElement | undefined = undefined;
        if (this.tightenings) {
            tighteningsElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
            );
            tighteningsElement.sequence = this.tightenings.map((t) => t.toElement());
        }
        if (this.relaxations) {
            relaxationsElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                2,
            );
            relaxationsElement.sequence = this.relaxations.map((r) => r.toElement());
        }
        return DERElement.fromSequence([
            this.basic.toElement(),
            tighteningsElement,
            relaxationsElement,
            this.maximum
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    3,
                    this.maximum,
                )
                : undefined,
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                4,
                this.minimum,
            ),
        ]);
    }

    public static fromBytes (value: Uint8Array): RelaxationPolicy {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return RelaxationPolicy.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
