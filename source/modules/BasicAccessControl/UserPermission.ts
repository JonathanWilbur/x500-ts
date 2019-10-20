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
import ProtectedItems from "./ProtectedItems";
import GrantsAndDenials from "./GrantsAndDenials";

/**
 * `UserPermission ::= SEQUENCE {
 *   precedence        Precedence OPTIONAL,
 *              -- defaults to precedence in ACIItem
 *   protectedItems    ProtectedItems,
 *   grantsAndDenials  GrantsAndDenials,
 *   ... }`
 */
export default
class UserPermission {
    constructor (
        readonly precedence: Precedence | undefined,
        readonly protectedItems: ProtectedItems,
        readonly grantsAndDenials: GrantsAndDenials,
    ) {}

    public static fromElement (value: DERElement): UserPermission {
        let precedence: Precedence | undefined = undefined;
        let protectedItems!: ProtectedItems;
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
                name: "protectedItems",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    protectedItems = ProtectedItems.fromElement(el as DERElement);
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
        return new UserPermission(
            precedence,
            protectedItems,
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
            this.protectedItems.toElement(),
            this.grantsAndDenials.toElement(),
        ]);
    }

    public static fromBytes (value: Uint8Array): UserPermission {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return UserPermission.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
