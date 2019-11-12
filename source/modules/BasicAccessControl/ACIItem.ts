import {
    ASN1UniversalType,
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";
import UnboundedDirectoryString from "../SelectedAttributeTypes/UnboundedDirectoryString";
import Precedence from "./Precedence";
import AuthenticationLevel from "./AuthenticationLevel";

/**
 * `ACIItem ::= SEQUENCE {
 *   identificationTag    UnboundedDirectoryString,
 *   precedence           Precedence,
 *   authenticationLevel  AuthenticationLevel,
 *   itemOrUserFirst      CHOICE {
 *     itemFirst       [0]  SEQUENCE {
 *       protectedItems       ProtectedItems,
 *       itemPermissions      SET OF ItemPermission,
 *       ...},
 *     userFirst       [1]  SEQUENCE {
 *       userClasses          UserClasses,
 *       userPermissions      SET OF UserPermission,
 *       ...},
 *     ...},
 *   ... }`
 */
export default
class ACIItem {
    constructor (
        readonly identificationTag: UnboundedDirectoryString,
        readonly precedence: Precedence,
        readonly authenticationLevel: AuthenticationLevel,
        readonly itemOrUserFirst: DERElement,
    ) {}

    public static fromElement (value: ASN1Element): ACIItem {
        let identificationTag!: UnboundedDirectoryString;
        let precedence!: Precedence;
        let authenticationLevel!: AuthenticationLevel;
        let itemOrUserFirst!: DERElement;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "identificationTag",
                optional: false,
                callback: (el: ASN1Element): void => {
                    identificationTag = UnboundedDirectoryString.fromElement(el as DERElement);
                },
            },
            {
                name: "precedence",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    precedence = el.integer;
                },
            },
            {
                name: "authenticationLevel",
                optional: false,
                callback: (el: ASN1Element): void => {
                    authenticationLevel = el as DERElement;
                },
            },
            {
                name: "itemOrUserFirst",
                optional: false,
                callback: (el: ASN1Element): void => {
                    itemOrUserFirst = el as DERElement;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new ACIItem(
            identificationTag,
            precedence,
            authenticationLevel,
            itemOrUserFirst,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.identificationTag.toElement(),
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
                this.precedence,
            ),
            this.authenticationLevel,
            this.itemOrUserFirst,
        ]);
    }

    public static fromBytes (value: Uint8Array): ACIItem {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return ACIItem.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
