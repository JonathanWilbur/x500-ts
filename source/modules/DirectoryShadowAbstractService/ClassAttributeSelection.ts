import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    ObjectIdentifier,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import ClassAttributes from "./ClassAttributes";

/**
 * `ClassAttributeSelection ::= SEQUENCE {
 *   class            OBJECT IDENTIFIER OPTIONAL,
 *   classAttributes  ClassAttributes DEFAULT allAttributes:NULL }`
 */
export default
class ClassAttributeSelection {
    constructor (
        readonly class_: ObjectIdentifier | undefined,
        readonly classAttributes: ClassAttributes,
    ) {}

    public static fromElement (value: DERElement): ClassAttributeSelection {
        let class_: ObjectIdentifier | undefined = undefined;
        let classAttributes: ClassAttributes = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.nill,
        );
        const specification: ConstructedElementSpecification[] = [
            {
                name: "class",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    class_ = el.objectIdentifier;
                },
            },
            {
                name: "classAttributes",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    classAttributes = el;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new ClassAttributeSelection(class_, classAttributes);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.class_
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.objectIdentifier,
                    this.class_,
                )
                : undefined,
            this.classAttributes as DERElement,
        ]);
    }
}
