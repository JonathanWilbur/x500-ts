import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
} from "asn1-ts";
import AccessPoint from "./AccessPoint";
import Name from "../InformationFramework/Name";
import PresentationAddress from "../SelectedAttributeTypes/PresentationAddress";
import ProtocolInformation from "../SelectedAttributeTypes/ProtocolInformation";
import validateTag from "../../validateTag";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import * as errors from "../../errors";

/**
 * `MasterOrShadowAccessPoint ::= SET {
 *   COMPONENTS OF          AccessPoint,
 *   category          [3]  ENUMERATED {
 *     master            (0),
 *     shadow            (1),
 *     writeableCopy     (2),
 *     ... } DEFAULT master,
 *   chainingRequired  [5]  BOOLEAN DEFAULT FALSE,
 *   ... }`
 */
export default
class MasterOrShadowAccessPoint {
    constructor (
        readonly accessPoint: AccessPoint,
        readonly category: number,
        readonly chainingRequired: boolean,
    ) {}

    public static fromElement (value: ASN1Element): MasterOrShadowAccessPoint {
        let aeTitle: Name | undefined = undefined;
        let address: PresentationAddress | undefined = undefined;
        let protocolInformation: ProtocolInformation[] | undefined = undefined;
        let category!: number;
        let chainingRequired: boolean = false;

        value.set.forEach((element) => {
            if (element.tagClass !== ASN1TagClass.context) {
                return;
            }
            switch (element.tagNumber) {
            case (0): {
                aeTitle = element.sizeConstrainedSequenceOf(1)
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
                address = PresentationAddress.fromElement(element);
                break;
            }
            case (2): {
                protocolInformation = (element.sizeConstrainedSetOf(1) as DERElement[])
                    .map((pi) => ProtocolInformation.fromElement(pi));
                break;
            }
            case (3): {
                category = element.enumerated;
                break;
            }
            case (5): {
                chainingRequired = element.boolean;
                break;
            }
            case (6): {
                throw new errors.X500Error(
                    "Context-specific tag number 6 is prohibited in AccessPoint.",
                );
            }
            default: { break; }
            }
        });

        if (typeof aeTitle === "undefined") {
            throw new errors.X500Error("ae-title not defined for AccessPoint.");
        }

        if (typeof address === "undefined") {
            throw new errors.X500Error("address not defined for AccessPoint.");
        }

        const accessPoint: AccessPoint = new AccessPoint(
            aeTitle,
            address,
            protocolInformation,
        );

        return new MasterOrShadowAccessPoint(
            accessPoint,
            category,
            chainingRequired,
        );
    }

    public toElement (): DERElement {
        const aeTitleElement: DERElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.primitive,
            0,
        );
        aeTitleElement.sequence = this.accessPoint.aeTitle
            .map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())));

        const addressElement: DERElement = this.accessPoint.address.toElement();
        addressElement.tagClass = ASN1TagClass.context;
        addressElement.tagNumber = 1;

        let protocolInformationElement: DERElement | undefined = undefined;
        if (this.accessPoint.protocolInformation) {
            protocolInformationElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                2,
            );
            protocolInformationElement.set = this.accessPoint.protocolInformation
                .map((pi) => pi.toElement());
        }

        return DERElement.fromSet([
            aeTitleElement,
            addressElement,
            protocolInformationElement,
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                3,
                this.category,
            ),
            this.chainingRequired
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    5,
                    this.chainingRequired,
                )
                : undefined,
        ]);
    }
}
