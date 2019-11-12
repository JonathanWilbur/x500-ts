import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import validateTag from "../../validateTag";
import Attribute from "../InformationFramework/Attribute";

/**
 * `SubentryInfo ::= SEQUENCE {
 *   rdn   [0]  RelativeDistinguishedName,
 *   info  [1]  SET OF Attribute{{SupportedAttributes}},
 *   ... }`
 */
export default
class SubentryInfo {
    constructor (
        readonly rdn: RelativeDistinguishedName,
        readonly info: Attribute[],
    ) {}

    public static fromElement (value: ASN1Element): SubentryInfo {
        let rdn!: RelativeDistinguishedName;
        let info!: Attribute[];
        const specification: ConstructedElementSpecification[] = [
            {
                name: "rdn",
                optional: false,
                tagClass: ASN1TagClass.context,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    rdn = el.sizeConstrainedSetOf(1)
                        .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                            validateTag(atavElement as DERElement, `rdn[${atavIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.sequence ],
                            );
                            return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                        });
                },
            },
            {
                name: "info",
                optional: false,
                tagClass: ASN1TagClass.context,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    info = el.set.map((attr) => Attribute.fromElement(attr as DERElement));
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new SubentryInfo(rdn, info);
    }

    public toElement (): DERElement {
        const rdnElement: DERElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.constructed,
            0,
        );
        rdnElement.set = this.rdn.map((atav) => atav.toElement());

        const infoElement: DERElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.constructed,
            1,
        );
        infoElement.set = this.info.map((attr) => attr.toElement());

        return DERElement.fromSequence([
            rdnElement,
            infoElement,
        ]);
    }
}
