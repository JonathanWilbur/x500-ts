import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
} from "asn1-ts";
import Name from "../InformationFramework/Name";
import PresentationAddress from "../SelectedAttributeTypes/PresentationAddress";
import ProtocolInformation from "../SelectedAttributeTypes/ProtocolInformation";
import validateTag from "../../validateTag";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import AccessPoint from "../DistributedOperations/AccessPoint";
import * as errors from "../../errors";

/**
 * `SupplierAndConsumers ::= SET {
 *   COMPONENTS OF         AccessPoint, -- supplier
 *   consumers        [3]  SET OF AccessPoint,
 *   ... }`
 */
export default
class SupplierAndConsumers {
    constructor (
        readonly aeTitle: Name,
        readonly address: PresentationAddress,
        readonly protocolInformation: ProtocolInformation[] | undefined,
        readonly consumers: AccessPoint[],
    ) {}

    public static fromElement (value: DERElement): SupplierAndConsumers {
        let aeTitle: Name | undefined = undefined;
        let address: PresentationAddress | undefined = undefined;
        let protocolInformation: ProtocolInformation[] | undefined = undefined;
        let consumers: AccessPoint[] | undefined = undefined;
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
                consumers = (element.set.map((consumer) => AccessPoint.fromElement(consumer)));
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
            throw new errors.X500Error("ae-title not defined for SupplierAndConsumers.");
        }

        if (typeof address === "undefined") {
            throw new errors.X500Error("address not defined for SupplierAndConsumers.");
        }

        if (typeof consumers === "undefined") {
            throw new errors.X500Error("consumers not defined for SupplierAndConsumers.");
        }

        return new SupplierAndConsumers(
            aeTitle,
            address,
            protocolInformation,
            consumers,
        );
    }

    public toElement (): DERElement {
        const aeTitleElement: DERElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.primitive,
            0,
        );
        aeTitleElement.sequence = this.aeTitle.map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())));

        const addressElement: DERElement = this.address.toElement();
        addressElement.tagClass = ASN1TagClass.context;
        addressElement.tagNumber = 1;

        let protocolInformationElement: DERElement | undefined = undefined;
        if (this.protocolInformation) {
            protocolInformationElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                2,
            );
            protocolInformationElement.set = this.protocolInformation.map((pi) => pi.toElement());
        }

        let consumersElement: DERElement | undefined = undefined;
        if (this.protocolInformation) {
            consumersElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                3,
            );
            consumersElement.set = this.consumers.map((consumer) => consumer.toElement());
        }

        return DERElement.fromSet([
            aeTitleElement,
            addressElement,
            protocolInformationElement,
            consumersElement,
        ]);
    }

    public static fromBytes (value: Uint8Array): SupplierAndConsumers {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return SupplierAndConsumers.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
