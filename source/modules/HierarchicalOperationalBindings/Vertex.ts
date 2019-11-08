import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import SubentryInfo from "./SubentryInfo";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import validateTag from "../../validateTag";
import Attribute from "../InformationFramework/Attribute";
import MasterAndShadowAccessPoints from "../DistributedOperations/MasterAndShadowAccessPoints";
import MasterOrShadowAccessPoint from "../DistributedOperations/MasterOrShadowAccessPoint";

/**
 * `Vertex ::= SEQUENCE {
 *   rdn           [0]  RelativeDistinguishedName,
 *   admPointInfo  [1]  SET SIZE (1..MAX) OF Attribute{{SupportedAttributes}} OPTIONAL,
 *   subentries    [2]  SET SIZE (1..MAX) OF SubentryInfo OPTIONAL,
 *   accessPoints  [3]  MasterAndShadowAccessPoints OPTIONAL,
 *   ... }`
 */
export default
class Vertex {
    constructor (
        readonly rdn: RelativeDistinguishedName,
        readonly admPointInfo: Attribute[] | undefined,
        readonly subentries: SubentryInfo[] | undefined,
        readonly accessPoints: MasterAndShadowAccessPoints | undefined,
    ) {}

    public static fromElement (value: DERElement): Vertex {
        let rdn!: RelativeDistinguishedName;
        let admPointInfo: Attribute[] | undefined = undefined;
        let subentries: SubentryInfo[] | undefined = undefined;
        let accessPoints: MasterAndShadowAccessPoints | undefined = undefined;
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
                name: "admPointInfo",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    admPointInfo = el.sizeConstrainedSetOf(1)
                        .map((attr) => Attribute.fromElement(attr as DERElement));
                },
            },
            {
                name: "subentries",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    subentries = el.sizeConstrainedSetOf(1)
                        .map((sei) => SubentryInfo.fromElement(sei as DERElement));
                },
            },
            {
                name: "accessPoints",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 3,
                callback: (el: ASN1Element): void => {
                    accessPoints = el.sizeConstrainedSetOf(1)
                        .map((ap) => MasterOrShadowAccessPoint.fromElement(ap as DERElement));
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new Vertex(rdn, admPointInfo, subentries, accessPoints);
    }

    public toElement (): DERElement {
        const rdnElement: DERElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.constructed,
            0,
        );
        rdnElement.set = this.rdn.map((atav) => atav.toElement());

        let admPointInfoElement: DERElement | undefined = undefined;
        if (this.admPointInfo) {
            admPointInfoElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
            );
            admPointInfoElement.set = this.admPointInfo.map((attr) => attr.toElement());
        }

        let subentriesElement: DERElement | undefined = undefined;
        if (this.subentries) {
            subentriesElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                2,
            );
            subentriesElement.set = this.subentries.map((se) => se.toElement());
        }

        let accessPointsElement: DERElement | undefined = undefined;
        if (this.accessPoints) {
            accessPointsElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                3,
            );
            accessPointsElement.set = this.accessPoints.map((ap) => ap.toElement());
        }

        return DERElement.fromSequence([
            rdnElement,
            admPointInfoElement,
            subentriesElement,
            accessPointsElement,
        ]);
    }
}
