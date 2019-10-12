import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "asn1-ts";
import * as errors from "../../errors";
import validateTag from "../../validateTag";

/**
 * `DSS-Parms ::= SEQUENCE {
 *   p   INTEGER,
 *   q   INTEGER,
 *   g   INTEGER,
 *   ... }`
 */
export default
class DSSParms {
    constructor (
        // These INTEGERs are represented as Uint8Arrays, because
        // they could be enormous.
        readonly p: Uint8Array,
        readonly q: Uint8Array,
        readonly g: Uint8Array,
    ) {}

    public static fromElement (value: DERElement): DSSParms {
        const dssParmsElements: DERElement[] = value.sequence;
        if (dssParmsElements.length < 3) {
            throw new errors.X500Error("Too few elements in DSS-Parms.");
        }
        validateTag(dssParmsElements[0], "DSS-Parms.p",
            [ ASN1TagClass.universal ],
            [ ASN1Construction.primitive ],
            [ ASN1UniversalType.integer ],
        );
        validateTag(dssParmsElements[1], "DSS-Parms.q",
            [ ASN1TagClass.universal ],
            [ ASN1Construction.primitive ],
            [ ASN1UniversalType.integer ],
        );
        validateTag(dssParmsElements[2], "DSS-Parms.g",
            [ ASN1TagClass.universal ],
            [ ASN1Construction.primitive ],
            [ ASN1UniversalType.integer ],
        );
        return new DSSParms(
            dssParmsElements[0].value,
            dssParmsElements[1].value,
            dssParmsElements[2].value,
        );
    }

    public toElement (): DERElement {
        const dssParmsElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.constructed,
            ASN1UniversalType.sequence,
        );

        const pElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.integer,
        );
        pElement.value = this.p;

        const qElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.integer,
        );
        qElement.value = this.q;

        const gElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.integer,
        );
        gElement.value = this.g;

        dssParmsElement.sequence = [
            pElement,
            qElement,
            gElement,
        ];
        return dssParmsElement;
    }

    public static fromBytes (value: Uint8Array): DSSParms {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return DSSParms.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
