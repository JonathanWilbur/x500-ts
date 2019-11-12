import {
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ASN1Element,
} from "asn1-ts";
import validateTag from "../../validateTag";
import * as errors from "../../errors";

/**
 * `UtmCoordinates ::= SEQUENCE {
 *   zone      PrintableString,
 *   easting   NumericString,
 *   northing  NumericString }`
 */
export default
class UtmCoordinates {
    constructor (
        readonly zone: string,
        readonly easting: string,
        readonly northing: string,
    ) {}

    public static fromElement (value: ASN1Element): UtmCoordinates {
        const utmCoordinatesElements: ASN1Element[] = value.sequence;
        if (utmCoordinatesElements.length !== 3) {
            throw new errors.X500Error(
                "Invalid number of elements in UtmCoordinates. Expected "
                + `2, but received ${utmCoordinatesElements.length}.`,
            )
        }
        validateTag(utmCoordinatesElements[0], "UtmCoordinates.zone",
            [ ASN1TagClass.universal ],
            [ ASN1Construction.primitive ],
            [ ASN1UniversalType.printableString ],
        );
        validateTag(utmCoordinatesElements[1], "UtmCoordinates.easting",
            [ ASN1TagClass.universal ],
            [ ASN1Construction.primitive ],
            [ ASN1UniversalType.numericString ],
        );
        validateTag(utmCoordinatesElements[2], "UtmCoordinates.northing",
            [ ASN1TagClass.universal ],
            [ ASN1Construction.primitive ],
            [ ASN1UniversalType.numericString ],
        );
        return new UtmCoordinates(
            utmCoordinatesElements[0].printableString,
            utmCoordinatesElements[1].numericString,
            utmCoordinatesElements[2].numericString,
        );
    }

    public toElement (): DERElement {
        const zoneElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.printableString,
        );
        zoneElement.printableString = this.zone;
        const eastingElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.numericString,
        );
        eastingElement.numericString = this.easting;
        const northingElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.numericString,
        );
        northingElement.numericString = this.northing;
        return DERElement.fromSequence([
            zoneElement,
            eastingElement,
            northingElement,
        ]);
    }

    public static fromBytes (value: Uint8Array): UtmCoordinates {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return UtmCoordinates.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
