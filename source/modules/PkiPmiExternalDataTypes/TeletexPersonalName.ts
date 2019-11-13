import {
    ASN1Construction,
    ASN1TagClass,
    DERElement,
} from "asn1-ts";
import * as errors from "../../errors";

/**
 * `TeletexPersonalName ::= SET {
 *   surname               [0]  TeletexString(SIZE (1..ub-surname-length)),
 *   given-name
 *     [1]  TeletexString(SIZE (1..ub-given-name-length)) OPTIONAL,
 *   initials
 *     [2]  TeletexString(SIZE (1..ub-initials-length)) OPTIONAL,
 *   generation-qualifier
 *     [3]  TeletexString(SIZE (1..ub-generation-qualifier-length)) OPTIONAL }`
 */
export default
class TeletexPersonalName {
    constructor (
        readonly surname: Uint8Array,
        readonly givenName: Uint8Array | undefined,
        readonly initials: Uint8Array | undefined,
        readonly generationQualifier: Uint8Array | undefined,
    ) {}

    public static fromElement (value: DERElement): TeletexPersonalName {
        let surname: Uint8Array | undefined = undefined;
        let givenName: Uint8Array | undefined = undefined;
        let initials: Uint8Array | undefined = undefined;
        let generationQualifier: Uint8Array | undefined = undefined;
        value.set.forEach((el) => {
            if (el.tagClass !== ASN1TagClass.context) {
                return;
            }
            switch (el.tagNumber) {
            case (0): {
                surname = el.teletexString;
                break;
            }
            case (1): {
                givenName = el.teletexString;
                break;
            }
            case (2): {
                initials = el.teletexString;
                break;
            }
            case (3): {
                generationQualifier = el.teletexString;
                break;
            }
            default: { break; }
            }
        });
        if (!surname) {
            throw new errors.X500Error("No PersonalName.surname defined.");
        }
        return new TeletexPersonalName(
            surname,
            givenName,
            initials,
            generationQualifier,
        );
    }

    public toElement (): DERElement {
        const surnameElement: DERElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.primitive,
            0,
        );
        surnameElement.teletexString = this.surname;

        let givenNameElement: DERElement | undefined = undefined;
        if (this.givenName) {
            givenNameElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                1,
            );
            givenNameElement.teletexString = this.givenName;
        }

        let initialsElement: DERElement | undefined = undefined;
        if (this.initials) {
            initialsElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                2,
            );
            initialsElement.teletexString = this.initials;
        }

        let generationQualifierElement: DERElement | undefined = undefined;
        if (this.generationQualifier) {
            generationQualifierElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                3,
            );
            generationQualifierElement.teletexString = this.generationQualifier;
        }

        return DERElement.fromSequence([
            surnameElement,
            givenNameElement,
            initialsElement,
            generationQualifierElement,
        ]);
    }
}
