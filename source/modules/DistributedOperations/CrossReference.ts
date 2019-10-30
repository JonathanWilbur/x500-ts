import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
} from "asn1-ts";
import AccessPointInformation from "./AccessPointInformation";
import validateTag from "../../validateTag";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import DistinguishedName from "../InformationFramework/DistinguishedName";

/**
 * `CrossReference ::= SET {
 *   contextPrefix  [0]  DistinguishedName,
 *   accessPoint    [1]  AccessPointInformation,
 *   ... }`
 */
export default
class CrossReference {
    constructor (
        readonly contextPrefix: DistinguishedName,
        readonly accessPoint: AccessPointInformation,
    ) {}

    public static fromElement (value: DERElement): CrossReference {
        let contextPrefix!: DistinguishedName;
        let accessPoint!: AccessPointInformation;
        value.set.forEach((element) => {
            if (element.tagClass !== ASN1TagClass.context) {
                return;
            }
            switch (element.tagNumber) {
            case (0): {
                contextPrefix = element.sizeConstrainedSequenceOf(1)
                    .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                        validateTag(rdnElement as DERElement, `issuer[${rdnIndex}]`,
                            [ ASN1TagClass.universal ],
                            [ ASN1Construction.constructed ],
                            [ ASN1UniversalType.set ],
                        );
                        return rdnElement.sizeConstrainedSetOf(1)
                            .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                validateTag(atavElement as DERElement, `issuer[${rdnIndex}][${atavIndex}]`,
                                    [ ASN1TagClass.universal ],
                                    [ ASN1Construction.constructed ],
                                    [ ASN1UniversalType.sequence ],
                                );
                                return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                            });
                    });
                break;
            }
            case (1): {
                accessPoint = AccessPointInformation.fromElement(element);
                break;
            }
            default: { break; }
            }
        });

        return new CrossReference(
            contextPrefix,
            accessPoint,
        );
    }

    public toElement (): DERElement {
        const contextPrefixElement: DERElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.constructed,
            0,
        );
        contextPrefixElement.sequence = this.contextPrefix
            .map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())));

        let accessPointElement: DERElement | undefined = undefined;
        if (this.accessPoint) {
            accessPointElement = this.accessPoint.toElement();
            accessPointElement.tagClass = ASN1TagClass.context;
            accessPointElement.tagNumber = 1;
        }

        return DERElement.fromSet([
            contextPrefixElement,
            accessPointElement,
        ]);
    }
}
