import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType, ASN1Element } from "asn1-ts";
import * as errors from "../../errors";
import validateTag from "../../validateTag";

/**
 * `ValidationParms ::= SEQUENCE {
 *   seed         BIT STRING,
 *   pgenCounter  INTEGER,
 *   ... }`
 */
export default
class ValidationParms {
    constructor (
        // These INTEGERs are represented as Uint8Arrays, because
        // they could be enormous.
        readonly seed: boolean[],
        readonly pgenCounter: Uint8Array,
    ) {}

    public static fromElement (value: ASN1Element): ValidationParms {
        const validationParms: ASN1Element[] = value.sequence;
        if (validationParms.length < 2) {
            throw new errors.X500Error("Too few elements in ValidationParms.");
        }
        validateTag(validationParms[0], "ValidationParms.seed",
            [ ASN1TagClass.universal ],
            [ ASN1Construction.primitive, ASN1Construction.constructed ],
            [ ASN1UniversalType.bitString ],
        );
        validateTag(validationParms[1], "ValidationParms.pgenCounter",
            [ ASN1TagClass.universal ],
            [ ASN1Construction.primitive ],
            [ ASN1UniversalType.integer ],
        );
        return new ValidationParms(
            validationParms[0].bitString,
            validationParms[1].value,
        );
    }

    public toElement (): DERElement {
        const validationParmsElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.constructed,
            ASN1UniversalType.sequence,
        );

        const seedElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.bitString,
        );
        seedElement.bitString = this.seed;

        const pgenCounterElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.integer,
        );
        pgenCounterElement.value = this.pgenCounter;

        validationParmsElement.sequence = [
            seedElement,
            pgenCounterElement,
        ];
        return validationParmsElement;
    }

    public static fromBytes (value: Uint8Array): ValidationParms {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return ValidationParms.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
