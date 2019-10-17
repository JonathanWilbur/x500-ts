import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
    ASN1UniversalType,
} from "asn1-ts";

/**
 * BasicAttConstraintsSyntax ::= SEQUENCE {
 *   authority          BOOLEAN DEFAULT FALSE,
 *   pathLenConstraint  INTEGER(0..MAX) OPTIONAL,
 *   ... }
 */
export default
class BasicAttConstraintsSyntax {
    constructor (
        readonly authority: boolean,
        readonly pathLenConstraint: number | undefined,
    ) {}

    public static fromElement (value: DERElement): BasicAttConstraintsSyntax {
        const bacsElements: DERElement[] = value.sequence;
        let authority: boolean = false;
        let pathLenConstraint: number | undefined = undefined;

        const specification = [
            {
                name: "authority",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.boolean,
                callback: (el: ASN1Element): void => {
                    authority = el.boolean;
                },
            },
            {
                name: "authority",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    pathLenConstraint = el.integer;
                },
            },
        ];
        validateConstruction(bacsElements, specification);
        return new BasicAttConstraintsSyntax(
            authority,
            pathLenConstraint,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.boolean,
                this.authority,
            ),
            this.pathLenConstraint
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.integer,
                    this.pathLenConstraint,
                )
                : undefined,
        ]);
    }

    public static fromBytes (value: Uint8Array): BasicAttConstraintsSyntax {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return BasicAttConstraintsSyntax.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
