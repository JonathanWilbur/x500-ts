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
import ClassList from "./ClassList";
import SecurityCategory from "./SecurityCategory";

/**
 * `Clearance ::= SEQUENCE {
 *   policyId            OBJECT IDENTIFIER,
 *   classList           ClassList DEFAULT {unclassified},
 *   securityCategories  SET SIZE (1..MAX) OF SecurityCategory OPTIONAL,
 *   ... }`
 */
export default
class Clearance {
    constructor (
        readonly policyId: ObjectIdentifier,
        readonly classList: ClassList,
        readonly securityCategories: SecurityCategory[] | undefined,
    ) {}

    public static fromElement (value: ASN1Element): Clearance {
        let policyId!: ObjectIdentifier;
        let classList: ClassList = new ClassList(false, true, false, false, false, false);
        let securityCategories: SecurityCategory[] | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "policyId",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    policyId = el.objectIdentifier;
                },
            },
            {
                name: "classList",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.bitString,
                callback: (el: ASN1Element): void => {
                    classList = ClassList.fromElement(el as DERElement);
                },
            },
            {
                name: "securityCategories",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.set,
                callback: (el: ASN1Element): void => {
                    securityCategories = el.sizeConstrainedSetOf(1)
                        .map((sc) => SecurityCategory.fromElement(sc as DERElement));
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new Clearance(
            policyId,
            classList,
            securityCategories,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.policyId,
            ),
            this.classList.toElement(),
            this.securityCategories
                ? DERElement.fromSet(this.securityCategories.map((sc) => sc.toElement()))
                : undefined,
        ]);
    }
}
