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
import UnboundedDirectoryString from "../SelectedAttributeTypes/UnboundedDirectoryString";

/**
 * `FriendsDescription ::= SEQUENCE {
 *   anchor            ATTRIBUTE.&id,
 *   name              SET SIZE (1..MAX) OF UnboundedDirectoryString OPTIONAL,
 *   description       UnboundedDirectoryString OPTIONAL,
 *   obsolete          BOOLEAN DEFAULT FALSE,
 *   friends      [0]  SET SIZE (1..MAX) OF ATTRIBUTE.&id,
 *   ... }`
 */
export default
class FriendsDescription {
    constructor (
        readonly anchor: ObjectIdentifier,
        readonly name: UnboundedDirectoryString[] | undefined,
        readonly description: UnboundedDirectoryString | undefined,
        readonly obsolete: boolean,
        readonly friends: ObjectIdentifier[],
    ) {}

    public static fromElement (value: DERElement): FriendsDescription {
        let anchor!: ObjectIdentifier;
        let name: UnboundedDirectoryString[] | undefined = undefined;
        let description: UnboundedDirectoryString | undefined = undefined;
        let obsolete: boolean = false;
        let friends!: ObjectIdentifier[];
        const specification: ConstructedElementSpecification[] = [
            {
                name: "identifier",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    anchor = el.objectIdentifier;
                },
            },
            {
                name: "name",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.set,
                callback: (el: ASN1Element): void => {
                    name = el.sizeConstrainedSetOf(1)
                        .map((n) => UnboundedDirectoryString.fromElement(n as DERElement));
                },
            },
            {
                name: "description",
                optional: true,
                tagClass: ASN1TagClass.universal,
                callback: (el: ASN1Element): void => {
                    description = UnboundedDirectoryString.fromElement(el as DERElement);
                },
            },
            {
                name: "obsolete",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.boolean,
                callback: (el: ASN1Element): void => {
                    obsolete = el.boolean;
                },
            },
            {
                name: "information",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    friends = el.sizeConstrainedSetOf(1)
                        .map((f) => f.objectIdentifier);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new FriendsDescription(
            anchor,
            name,
            description,
            obsolete,
            friends,
        );
    }

    public toElement (): DERElement {
        const friendsElement: DERElement = DERElement.fromSet(this.friends.map((f) => new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.objectIdentifier,
            f,
        )));
        friendsElement.tagClass = ASN1TagClass.context;
        friendsElement.tagNumber = 0;
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.anchor,
            ),
            this.name
                ? DERElement.fromSet(this.name.map((n) => n.toElement()))
                : undefined,
            this.description
                ? this.description.toElement()
                : undefined,
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.boolean,
                this.obsolete,
            ),
            friendsElement,
        ]);
    }
}
