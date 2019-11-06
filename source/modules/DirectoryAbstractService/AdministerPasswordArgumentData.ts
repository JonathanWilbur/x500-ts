import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import DistinguishedName from "../InformationFramework/DistinguishedName";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import validateTag from "../../validateTag";
import UserPwd from "../PasswordPolicy/UserPwd";

/**
 * `AdministerPasswordArgumentData ::= SEQUENCE {
 *   object  [0]  DistinguishedName,
 *   newPwd  [1]  UserPwd,
 *   ... }`
 */
export default
class AdministerPasswordArgumentData {
    constructor (
        readonly object: DistinguishedName,
        readonly newPwd: UserPwd,
    ) {}

    public static fromElement (value: DERElement): AdministerPasswordArgumentData {
        let object!: DistinguishedName;
        let newPwd!: UserPwd;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "object",
                optional: false,
                tagClass: ASN1TagClass.context,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    object = el.sizeConstrainedSequenceOf(1)
                        .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                            validateTag(rdnElement as DERElement, `object[${rdnIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.set ],
                            );
                            return rdnElement.sizeConstrainedSetOf(1)
                                .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                    validateTag(atavElement as DERElement, `object[${rdnIndex}][${atavIndex}]`,
                                        [ ASN1TagClass.universal ],
                                        [ ASN1Construction.constructed ],
                                        [ ASN1UniversalType.sequence ],
                                    );
                                    return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                                });
                        });
                },
            },
            {
                name: "newPwd",
                optional: false,
                tagClass: ASN1TagClass.context,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    newPwd = el;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new AdministerPasswordArgumentData(object, newPwd);
    }

    public toElement (): DERElement {
        const objectElement: DERElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.constructed,
            0,
        );
        objectElement.sequence = this.object
            .map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())));
        return DERElement.fromSequence([
            objectElement,
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
                this.newPwd,
            ),
        ]);
    }
}
