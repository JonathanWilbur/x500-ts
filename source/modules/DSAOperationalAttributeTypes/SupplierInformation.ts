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
import OperationalBindingID from "../OperationalBindingManagement/OperationalBindingID";
import * as errors from "../../errors";
import AccessPoint from "../DistributedOperations/AccessPoint";

/**
 * `SupplierInformation ::= SET {
 *   COMPONENTS OF              SupplierOrConsumer, -- supplier
 *   supplier-is-master    [4]  BOOLEAN DEFAULT TRUE,
 *   non-supplying-master  [5]  AccessPoint OPTIONAL,
 *   ... }`
 */
export default
class SupplierInformation {
    constructor (
        readonly aeTitle: Name,
        readonly address: PresentationAddress,
        readonly protocolInformation: ProtocolInformation[] | undefined,
        readonly agreementID: OperationalBindingID,
        readonly supplierIsMaster: boolean,
        readonly nonSupplyingMaster: AccessPoint | undefined,
    ) {}

    public static fromElement (value: DERElement): SupplierInformation {
        let aeTitle: Name | undefined = undefined;
        let address: PresentationAddress | undefined = undefined;
        let protocolInformation: ProtocolInformation[] | undefined = undefined;
        let agreementID: OperationalBindingID | undefined = undefined;
        let supplierIsMaster: boolean = true;
        let nonSupplyingMaster: AccessPoint | undefined = undefined;
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
                agreementID = OperationalBindingID.fromElement(element);
                break;
            }
            case (4): {
                supplierIsMaster = element.boolean;
                break;
            }
            case (5): {
                nonSupplyingMaster = AccessPoint.fromElement(element);
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
            throw new errors.X500Error("ae-title not defined for SupplierOrConsumer.");
        }

        if (typeof address === "undefined") {
            throw new errors.X500Error("address not defined for SupplierOrConsumer.");
        }

        if (typeof agreementID === "undefined") {
            throw new errors.X500Error("agreementID not defined for SupplierOrConsumer.");
        }

        return new SupplierInformation(
            aeTitle,
            address,
            protocolInformation,
            agreementID,
            supplierIsMaster,
            nonSupplyingMaster,
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

        const agreementIDElement: DERElement = this.agreementID.toElement();
        agreementIDElement.tagClass = ASN1TagClass.context;
        agreementIDElement.tagNumber = 3;

        let supplierIsMasterElement: DERElement | undefined = undefined;
        if (this.supplierIsMaster === false) {
            supplierIsMasterElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                4,
                this.supplierIsMaster,
            );
        }

        let nonSupplyingMasterElement: DERElement | undefined = undefined;
        if (this.nonSupplyingMaster) {
            nonSupplyingMasterElement = this.nonSupplyingMaster.toElement();
            nonSupplyingMasterElement.tagClass = ASN1TagClass.context;
            nonSupplyingMasterElement.tagNumber = 5;
        }

        return DERElement.fromSet([
            aeTitleElement,
            addressElement,
            protocolInformationElement,
            agreementIDElement,
            supplierIsMasterElement,
            nonSupplyingMasterElement,
        ]);
    }

    public static fromBytes (value: Uint8Array): SupplierInformation {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return SupplierInformation.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
