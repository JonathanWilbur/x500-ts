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

/**
 * `NHOBSubordinateToSuperior ::= SEQUENCE {
 *   accessPoints  [0]  MasterAndShadowAccessPoints OPTIONAL,
 *   subentries    [3]  SET SIZE (1..MAX) OF SubentryInfo OPTIONAL,
 *   ... }`
 */
export default
class NHOBSubordinateToSuperior {
    constructor (
        readonly accessPoints: MasterAndShadowAccessPoints | undefined,
        readonly subentries: SubentryInfo[] | undefined,
    ) {}

    public static fromElement (value: ASN1Element): NHOBSubordinateToSuperior {
        let accessPoints: MasterAndShadowAccessPoints | undefined = undefined;
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
        return new NHOBSubordinateToSuperior(accessPoints, subentries);
    }

    public toElement (): DERElement {
        let accessPointsElement: DERElement | undefined = undefined;
        if (this.accessPoints) {
            accessPointsElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                0,
            );
            accessPointsElement.set = this.accessPoints.map((ap) => ap.toElement());
        }

        let subentriesElement: DERElement | undefined = undefined;
        if (this.subentries) {
            subentriesElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                3,
            );
            subentriesElement.set = this.subentries.map((se) => se.toElement());
        }

        return DERElement.fromSequence([
            accessPointsElement,
            subentriesElement,
        ]);
    }
}
