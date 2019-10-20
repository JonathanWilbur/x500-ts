import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";
import NameAndOptionalUID from "../SelectedAttributeTypes/NameAndOptionalUID";
import SubtreeSpecification from "../InformationFramework/SubtreeSpecification";

/**
 * `UserClasses ::= SEQUENCE {
 *   allUsers   [0]  NULL                                      OPTIONAL,
 *   thisEntry  [1]  NULL                                      OPTIONAL,
 *   name       [2]  SET SIZE (1..MAX) OF NameAndOptionalUID   OPTIONAL,
 *   userGroup  [3]  SET SIZE (1..MAX) OF NameAndOptionalUID   OPTIONAL,
 *                   -- dn component shall be the name of an
 *                   -- entry of GroupOfUniqueNames
 *   subtree    [4]  SET SIZE (1..MAX) OF SubtreeSpecification OPTIONAL,
 *   ... }`
 */
export default
class UserClasses {
    constructor (
        readonly allUsers: null | undefined,
        readonly thisEntry: null | undefined,
        readonly name: NameAndOptionalUID[] | undefined,
        readonly userGroup: NameAndOptionalUID[] | undefined,
        readonly subtree: SubtreeSpecification[] | undefined,
    ) {}

    public static fromElement (value: DERElement): UserClasses {
        let allUsers: null | undefined = undefined;
        let thisEntry: null | undefined = undefined;
        let name: NameAndOptionalUID[] | undefined = undefined;
        let userGroup: NameAndOptionalUID[] | undefined = undefined;
        let subtree: SubtreeSpecification[] | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "allUsers",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 0,
                callback: (): void => {
                    allUsers = null;
                },
            },
            {
                name: "thisEntry",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 1,
                callback: (): void => {
                    thisEntry = null;
                },
            },
            {
                name: "name",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    name = (el.sizeConstrainedSetOf(1) as DERElement[]).map(NameAndOptionalUID.fromElement);
                },
            },
            {
                name: "userGroup",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 3,
                callback: (el: ASN1Element): void => {
                    userGroup = (el.sizeConstrainedSetOf(1) as DERElement[]).map(NameAndOptionalUID.fromElement);
                },
            },
            {
                name: "subtree",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 4,
                callback: (el: ASN1Element): void => {
                    subtree = (el.sizeConstrainedSetOf(1) as DERElement[]).map(SubtreeSpecification.fromElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new UserClasses(
            allUsers,
            thisEntry,
            name,
            userGroup,
            subtree,
        );
    }

    public toElement (): DERElement {
        let allUsersElement: DERElement | undefined = undefined;
        let thisEntryElement: DERElement | undefined = undefined;
        let nameElement: DERElement | undefined = undefined;
        let userGroupElement: DERElement | undefined = undefined;
        let subtreeElement: DERElement | undefined = undefined;

        if (this.allUsers) {
            allUsersElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                0,
            );
        }

        if (this.thisEntry) {
            thisEntryElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                1,
            );
        }

        if (this.name) {
            nameElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                2,
            );
            nameElement.set = this.name.map((naouid) => naouid.toElement());
        }

        if (this.userGroup) {
            userGroupElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                3,
            );
            userGroupElement.set = this.userGroup.map((naouid) => naouid.toElement());
        }

        if (this.subtree) {
            subtreeElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                4,
            );
            subtreeElement.set = this.subtree.map((st) => st.toElement());
        }

        return DERElement.fromSequence([
            allUsersElement,
            thisEntryElement,
            nameElement,
            userGroupElement,
            subtreeElement,
        ]);
    }

    public static fromBytes (value: Uint8Array): UserClasses {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return UserClasses.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
