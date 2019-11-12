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
import SubtreeSpecification from "../InformationFramework/SubtreeSpecification";

/**
 * `AreaSpecification ::= SEQUENCE {
 *   contextPrefix    DistinguishedName,
 *   replicationArea  SubtreeSpecification,
 *   ... }`
 */
export default
class AreaSpecification {
    constructor (
        readonly contextPrefix: DistinguishedName,
        readonly replicationArea: SubtreeSpecification,
    ) {}

    public static fromElement (value: ASN1Element): AreaSpecification {
        let contextPrefix!: DistinguishedName;
        let replicationArea!: SubtreeSpecification;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "contextPrefix",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    contextPrefix = el.sizeConstrainedSequenceOf(1)
                        .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                            validateTag(rdnElement as DERElement, `contextPrefix[${rdnIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.set ],
                            );
                            return rdnElement.sizeConstrainedSetOf(1)
                                .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                    validateTag(atavElement as DERElement, `contextPrefix[${rdnIndex}][${atavIndex}]`,
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
                name: "replicationArea",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    replicationArea = SubtreeSpecification.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new AreaSpecification(contextPrefix, replicationArea);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            DERElement.fromSequence(
                this.contextPrefix.map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement()))),
            ),
            this.replicationArea.toElement(),
        ]);
    }
}
