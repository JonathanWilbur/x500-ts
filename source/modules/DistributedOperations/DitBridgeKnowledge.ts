/**
 * `DitBridgeKnowledge ::= SEQUENCE {
 *   domainLocalID  UnboundedDirectoryString OPTIONAL,
 *   accessPoints   MasterAndShadowAccessPoints,
 *   ... }`
 */
import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import UnboundedDirectoryString from "../SelectedAttributeTypes/UnboundedDirectoryString";
import MasterAndShadowAccessPoints from "./MasterAndShadowAccessPoints";
import MasterOrShadowAccessPoint from "./MasterOrShadowAccessPoint";

export default
class DitBridgeKnowledge {
    constructor (
        readonly domainLocalID: UnboundedDirectoryString | undefined,
        readonly accessPoints: MasterAndShadowAccessPoints,
    ) {}

    public static fromElement (value: DERElement): DitBridgeKnowledge {
        let domainLocalID: UnboundedDirectoryString | undefined = undefined;
        let accessPoints!: MasterAndShadowAccessPoints;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "domainLocalID",
                optional: false,
                tagClass: ASN1TagClass.universal,
                callback: (el: ASN1Element): void => {
                    domainLocalID = UnboundedDirectoryString.fromElement(el as DERElement);
                },
            },
            {
                name: "accessPoints",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.set,
                callback: (el: ASN1Element): void => {
                    accessPoints = el.sizeConstrainedSetOf(1)
                        .map((ap) => MasterOrShadowAccessPoint.fromElement(ap as DERElement));
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new DitBridgeKnowledge(
            domainLocalID,
            accessPoints,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.domainLocalID
                ? this.domainLocalID.toElement()
                : undefined,
            DERElement.fromSet(this.accessPoints.map((ap) => ap.toElement())),
        ]);
    }
}
