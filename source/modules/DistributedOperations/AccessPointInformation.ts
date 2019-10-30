import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    BERElement,
} from "asn1-ts";
import AccessPoint from "./AccessPoint";
import Name from "../InformationFramework/Name";
import PresentationAddress from "../SelectedAttributeTypes/PresentationAddress";
import ProtocolInformation from "../SelectedAttributeTypes/ProtocolInformation";
import validateTag from "../../validateTag";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import * as errors from "../../errors";
import MasterOrShadowAccessPoint from "./MasterOrShadowAccessPoint";
import MasterAndShadowAccessPoints from "./MasterAndShadowAccessPoints";

/**
 * `AccessPointInformation ::= SET {
 *   COMPONENTS OF          MasterOrShadowAccessPoint,
 *   additionalPoints  [4]  MasterAndShadowAccessPoints OPTIONAL,
 *   ... }`
 */
export default
class AccessPointInformation {
    constructor (
        readonly masterOrShadowAccessPoint: MasterOrShadowAccessPoint,
        readonly additionalPoints: MasterAndShadowAccessPoints | undefined,
    ) {}

    public static fromElement (value: DERElement): AccessPointInformation {
        let aeTitle: Name | undefined = undefined;
        let address: PresentationAddress | undefined = undefined;
        let protocolInformation: ProtocolInformation[] | undefined = undefined;
        let category!: number;
        let additionalPoints: MasterAndShadowAccessPoints | undefined = undefined;
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
            case (4): {
                additionalPoints = element.sizeConstrainedSetOf(1)
                    .map((ap) => MasterOrShadowAccessPoint.fromElement(ap as BERElement));
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

        const masterOrShadowAccessPoint: MasterOrShadowAccessPoint = new MasterOrShadowAccessPoint(
            accessPoint,
            category,
            chainingRequired,
        );

        return new AccessPointInformation(
            masterOrShadowAccessPoint,
            additionalPoints,
        );
    }

    public toElement (): DERElement {
        const aeTitleElement: DERElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.primitive,
            0,
        );
        aeTitleElement.sequence = this.masterOrShadowAccessPoint.accessPoint.aeTitle
            .map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())));

        const addressElement: DERElement = this.masterOrShadowAccessPoint.accessPoint.address.toElement();
        addressElement.tagClass = ASN1TagClass.context;
        addressElement.tagNumber = 1;

        let protocolInformationElement: DERElement | undefined = undefined;
        if (this.masterOrShadowAccessPoint.accessPoint.protocolInformation) {
            protocolInformationElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                2,
            );
            protocolInformationElement.set = this.masterOrShadowAccessPoint.accessPoint.protocolInformation
                .map((pi) => pi.toElement());
        }

        let additionalPointsElement: DERElement | undefined = undefined;
        if (this.additionalPoints) {
            additionalPointsElement = DERElement.fromSet(this.additionalPoints.map((ap) => ap.toElement()));
            additionalPointsElement.tagClass = ASN1TagClass.context;
            additionalPointsElement.tagNumber = 4;
        }

        return DERElement.fromSet([
            aeTitleElement,
            addressElement,
            protocolInformationElement,
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                3,
                this.masterOrShadowAccessPoint.category,
            ),
            additionalPointsElement,
            this.masterOrShadowAccessPoint.chainingRequired
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    5,
                    this.masterOrShadowAccessPoint.chainingRequired,
                )
                : undefined,
        ]);
    }
}
