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
import ObjectClassKind from "../InformationFramework/ObjectClassKind";

/**
 * `ObjectClassInformation ::= SEQUENCE {
 *   subclassOf        SET SIZE (1..MAX) OF OBJECT-CLASS.&id OPTIONAL,
 *   kind              ObjectClassKind                       DEFAULT structural,
 *   mandatories  [3]  SET SIZE (1..MAX) OF ATTRIBUTE.&id    OPTIONAL,
 *   optionals    [4]  SET SIZE (1..MAX) OF ATTRIBUTE.&id    OPTIONAL,
 *   ... }`
 */
export default
class ObjectClassInformation {
    constructor (
        readonly subclassOf: ObjectIdentifier[] | undefined,
        readonly kind: ObjectClassKind,
        readonly mandatories: ObjectIdentifier[] | undefined,
        readonly optionals: ObjectIdentifier[] | undefined,
    ) {}

    public static fromElement (value: DERElement): ObjectClassInformation {
        let subclassOf: ObjectIdentifier[] | undefined = undefined;
        let kind: ObjectClassKind = ObjectClassKind.structural;
        let mandatories: ObjectIdentifier[] | undefined = undefined;
        let optionals: ObjectIdentifier[] | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "subclassOf",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.set,
                callback: (el: ASN1Element): void => {
                    subclassOf = el.sizeConstrainedSetOf(1)
                        .map((so) => so.objectIdentifier);
                },
            },
            {
                name: "kind",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.enumerated,
                callback: (el: ASN1Element): void => {
                    kind = el.enumerated;
                },
            },
            {
                name: "mandatories",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 3,
                callback: (el: ASN1Element): void => {
                    mandatories = el.sizeConstrainedSetOf(1)
                        .map((so) => so.objectIdentifier);
                },
            },
            {
                name: "optionals",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 4,
                callback: (el: ASN1Element): void => {
                    optionals = el.sizeConstrainedSetOf(1)
                        .map((so) => so.objectIdentifier);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new ObjectClassInformation(
            subclassOf,
            kind,
            mandatories,
            optionals,
        );
    }

    public toElement (): DERElement {
        let subclassOfElement: DERElement | undefined = undefined;
        if (this.subclassOf !== undefined) {
            subclassOfElement = new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.constructed,
                ASN1UniversalType.set,
            );
            subclassOfElement.set = this.subclassOf.map((sco) => new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                sco,
            ));
        }
        let kindElement: DERElement | undefined = undefined;
        if (this.kind !== undefined) {
            kindElement = new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.enumerated,
            );
            kindElement.enumerated = this.kind;
        }
        let mandatoriesElement: DERElement | undefined = undefined;
        if (this.mandatories !== undefined) {
            mandatoriesElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                3,
            );
            mandatoriesElement.set = this.mandatories.map((m) => new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                m,
            ));
        }
        let optionalsElement: DERElement | undefined = undefined;
        if (this.optionals !== undefined) {
            optionalsElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                4,
            );
            optionalsElement.set = this.optionals.map((o) => new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                o,
            ));
        }
        return DERElement.fromSequence([
            subclassOfElement,
            kindElement,
            mandatoriesElement,
            optionalsElement,
        ]);
    }
}
