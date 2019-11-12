import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import SubentryInfo from "./SubentryInfo";
import MasterAndShadowAccessPoints from "../DistributedOperations/MasterAndShadowAccessPoints";
import MasterOrShadowAccessPoint from "../DistributedOperations/MasterOrShadowAccessPoint";
import Attribute from "../InformationFramework/Attribute";

/**
 * `SubordinateToSuperior ::= SEQUENCE {
 *   accessPoints  [0]  MasterAndShadowAccessPoints OPTIONAL,
 *   alias         [1]  BOOLEAN DEFAULT FALSE,
 *   entryInfo     [2]  SET SIZE (1..MAX) OF Attribute{{SupportedAttributes}} OPTIONAL,
 *   subentries    [3]  SET SIZE (1..MAX) OF SubentryInfo OPTIONAL,
 *   ... }`
 */
export default
class SubordinateToSuperior {
    constructor (
        readonly accessPoints: MasterAndShadowAccessPoints | undefined,
        readonly alias: boolean,
        readonly entryInfo: Attribute[] | undefined,
        readonly subentries: SubentryInfo[] | undefined,
    ) {}

    public static fromElement (value: ASN1Element): SubordinateToSuperior {
        let accessPoints: MasterAndShadowAccessPoints | undefined = undefined;
        let alias: boolean = false;
        let entryInfo: Attribute[] | undefined = undefined;
        let subentries: SubentryInfo[] | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "accessPoints",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    accessPoints = el.sizeConstrainedSetOf(1)
                        .map((ap) => MasterOrShadowAccessPoint.fromElement(ap as DERElement));
                },
            },
            {
                name: "alias",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    alias = el.boolean;
                },
            },
            {
                name: "entryInfo",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    entryInfo = el.sizeConstrainedSetOf(1)
                        .map((ei) => Attribute.fromElement(ei as DERElement));
                },
            },
            {
                name: "subentries",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 3,
                callback: (el: ASN1Element): void => {
                    subentries = el.sizeConstrainedSetOf(1)
                        .map((se) => SubentryInfo.fromElement(se as DERElement));
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new SubordinateToSuperior(accessPoints, alias, entryInfo, subentries);
    }

    public toElement (): DERElement {
        let accessPointsElement: DERElement | undefined = undefined;
        if (this.accessPoints !== undefined) {
            accessPointsElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                0,
            );
            accessPointsElement.set = this.accessPoints.map((ap) => ap.toElement());
        }

        let entryInfoElement: DERElement | undefined = undefined;
        if (this.entryInfo !== undefined) {
            entryInfoElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                3,
            );
            entryInfoElement.set = this.entryInfo.map((ei) => ei.toElement());
        }

        let subentriesElement: DERElement | undefined = undefined;
        if (this.subentries !== undefined) {
            subentriesElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                3,
            );
            subentriesElement.set = this.subentries.map((se) => se.toElement());
        }

        return DERElement.fromSequence([
            accessPointsElement,
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                1,
                this.alias,
            ),
            entryInfoElement,
            subentriesElement,
        ]);
    }
}
