import {
    ASN1Construction,
    ASN1TagClass,
    DERElement,
} from "asn1-ts";
import * as errors from "../../errors";

/**
 * `PersonalName ::= SET {
 *   surname              [0] PrintableString(SIZE (1..ub-surname-length)),
 *   given-name           [1] PrintableString(SIZE (1..ub-given-name-length)) OPTIONAL,
 *   initials             [2] PrintableString(SIZE (1..ub-initials-length)) OPTIONAL,
 *   generation-qualifier [3] PrintableString(SIZE (1..ub-generation-qualifier-length)) OPTIONAL }`
 */
export default
class PersonalName {
    constructor (
        readonly surname: string,
        readonly givenName: string | undefined,
        readonly initials: string | undefined,
        readonly generationQualifier: string | undefined,
    ) {}

    public static fromElement (value: DERElement): PersonalName {
        let surname: string | undefined = undefined;
        let givenName: string | undefined = undefined;
        let initials: string | undefined = undefined;
        let generationQualifier: string | undefined = undefined;
        value.set.forEach((el) => {
            if (el.tagClass !== ASN1TagClass.context) {
                return;
            }
            switch (el.tagNumber) {
            case (0): {
                surname = el.printableString;
                break;
            }
            case (1): {
                givenName = el.printableString;
                break;
            }
            case (2): {
                initials = el.printableString;
                break;
            }
            case (3): {
                generationQualifier = el.printableString;
                break;
            }
            default: { break; }
            }
        });
        if (!surname) {
            throw new errors.X500Error("No PersonalName.surname defined.");
        }
        return new PersonalName(
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
        surnameElement.printableString = this.surname;

        let givenNameElement: DERElement | undefined = undefined;
        if (this.givenName) {
            givenNameElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                1,
            );
            givenNameElement.printableString = this.givenName;
        }

        let initialsElement: DERElement | undefined = undefined;
        if (this.initials) {
            initialsElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                2,
            );
            initialsElement.printableString = this.initials;
        }

        let generationQualifierElement: DERElement | undefined = undefined;
        if (this.generationQualifier) {
            generationQualifierElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                3,
            );
            generationQualifierElement.printableString = this.generationQualifier;
        }

        return DERElement.fromSequence([
            surnameElement,
            givenNameElement,
            initialsElement,
            generationQualifierElement,
        ]);
    }
}
