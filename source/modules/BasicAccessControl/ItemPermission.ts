import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
    ASN1UniversalType,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";
import Precedence from "./Precedence";
import UserClasses from "./UserClasses";
import GrantsAndDenials from "./GrantsAndDenials";

/**
 * `ItemPermission ::= SEQUENCE {
 *   precedence        Precedence OPTIONAL,
 *              -- defaults to precedence in ACIItem
 *   userClasses       UserClasses,
 *   grantsAndDenials  GrantsAndDenials,
 *   ... }`
 */
export default
class ItemPermission {
    constructor (
        readonly precedence: Precedence | undefined,
        readonly userClasses: UserClasses,
        readonly grantsAndDenials: GrantsAndDenials,
    ) {}

    public static fromElement (value: DERElement): ItemPermission {
        let precedence: Precedence | undefined = undefined;
        let userClasses!: UserClasses;
        let grantsAndDenials!: GrantsAndDenials;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "precedence",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    precedence = el.integer;
                },
            },
            {
                name: "userClasses",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    userClasses = UserClasses.fromElement(el as DERElement);
                },
            },
            {
                name: "grantsAndDenials",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.bitString,
                callback: (el: ASN1Element): void => {
                    grantsAndDenials = GrantsAndDenials.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new ItemPermission(
            precedence,
            userClasses,
            grantsAndDenials,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.precedence
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.integer,
                    this.precedence,
                )
                : undefined,
            this.userClasses.toElement(),
            this.grantsAndDenials.toElement(),
        ]);
    }

    public static fromBytes (value: Uint8Array): ItemPermission {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return ItemPermission.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
