import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "asn1-ts";
import * as errors from "../../errors";
import validateTag from "../../validateTag";
import ValidationParms from "./ValidationParms";

/**
 * `DomainParameters ::= SEQUENCE {
 *   p               INTEGER, -- odd prime, p=jq+1
 *   g               INTEGER, -- generator, g
 *   q               INTEGER, -- factor of p-1
 *   j               INTEGER  OPTIONAL, -- subgroup factor
 *   validationParms ValidationParms OPTIONAL,
 *   ... }`
 */
export default
class DomainParameters {
    constructor (
        // These INTEGERs are represented as Uint8Arrays, because
        // they could be enormous.
        readonly p: Uint8Array,
        readonly g: Uint8Array,
        readonly q: Uint8Array,
        readonly j: Uint8Array | undefined,
        readonly validationParms: ValidationParms | undefined,
    ) {}

    public static fromElement (value: DERElement): DomainParameters {
        const domainParametersElements: DERElement[] = value.sequence;
        if (domainParametersElements.length < 3) {
            throw new errors.X500Error("Too few elements in DomainParameters.");
        }
        validateTag(domainParametersElements[0], "DomainParameters.p",
            [ ASN1TagClass.universal ],
            [ ASN1Construction.primitive ],
            [ ASN1UniversalType.integer ],
        );
        validateTag(domainParametersElements[1], "DomainParameters.g",
            [ ASN1TagClass.universal ],
            [ ASN1Construction.primitive ],
            [ ASN1UniversalType.integer ],
        );
        validateTag(domainParametersElements[2], "DomainParameters.q",
            [ ASN1TagClass.universal ],
            [ ASN1Construction.primitive ],
            [ ASN1UniversalType.integer ],
        );

        let j: Uint8Array | undefined = undefined;
        let validationParms: ValidationParms | undefined = undefined;

        if (
            domainParametersElements.length > 3
            && domainParametersElements[3].tagClass === ASN1TagClass.universal
        ) {
            if (
                domainParametersElements[3].construction === ASN1Construction.primitive
                && domainParametersElements[3].tagNumber === ASN1UniversalType.integer
            ) {
                j = domainParametersElements[3].value;
            } else if (
                domainParametersElements[3].construction === ASN1Construction.constructed
                && domainParametersElements[3].tagNumber === ASN1UniversalType.sequence
            ) {
                validationParms = ValidationParms.fromElement(domainParametersElements[3]);
            }
        }

        if (
            typeof validationParms === "undefined"
            && domainParametersElements.length > 4
            && domainParametersElements[4].tagClass === ASN1TagClass.universal
            && domainParametersElements[4].construction === ASN1Construction.constructed
            && domainParametersElements[4].tagNumber === ASN1UniversalType.sequence
        ) {
            validationParms = ValidationParms.fromElement(domainParametersElements[4]);
        }

        return new DomainParameters(
            domainParametersElements[0].value,
            domainParametersElements[1].value,
            domainParametersElements[2].value,
            j,
            validationParms,
        );
    }

    public toElement (): DERElement {
        const domainParametersElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.constructed,
            ASN1UniversalType.sequence,
        );
        const domainParametersElements: DERElement[] = [];

        const pElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.integer,
        );
        pElement.value = this.p;
        domainParametersElements.push(pElement);

        const gElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.integer,
        );
        gElement.value = this.g;
        domainParametersElements.push(gElement);

        const qElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.integer,
        );
        qElement.value = this.q;
        domainParametersElements.push(qElement);

        if (this.j) {
            const jElement: DERElement = new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
            );
            jElement.value = this.j;
            domainParametersElements.push(jElement);
        }

        if (this.validationParms) {
            domainParametersElements.push(this.validationParms.toElement());
        }

        domainParametersElement.sequence = domainParametersElements;
        return domainParametersElement;
    }

    public static fromBytes (value: Uint8Array): DomainParameters {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return DomainParameters.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
