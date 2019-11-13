import UniversalOrBMPString from "./UniversalOrBMPString";
import {
    ASN1TagClass,
    DERElement,
} from "asn1-ts";
import * as errors from "../../errors";

/**
 * `UniversalPersonalName ::= SET {
 *   surname
 *     [0]  UniversalOrBMPString{ub-universal-surname-length},
 *   -- If a language is specified within surname, then that language applies to each of the
 *   -- following optional components unless the component specifies another language.
 *   given-name
 *     [1]  UniversalOrBMPString{ub-universal-given-name-length} OPTIONAL,
 *   initials
 *     [2]  UniversalOrBMPString{ub-universal-initials-length} OPTIONAL,
 *   generation-qualifier
 *     [3]  UniversalOrBMPString{ub-universal-generation-qualifier-length} OPTIONAL }`
 */
export default
class UniversalPersonalName {
    constructor (
        readonly surname: UniversalOrBMPString,
        readonly givenName: UniversalOrBMPString | undefined,
        readonly initials: UniversalOrBMPString | undefined,
        readonly generationQualifier: UniversalOrBMPString | undefined,
    ) {}

    public static fromElement (value: DERElement): UniversalPersonalName {
        let surname: UniversalOrBMPString | undefined = undefined;
        let givenName: UniversalOrBMPString | undefined = undefined;
        let initials: UniversalOrBMPString | undefined = undefined;
        let generationQualifier: UniversalOrBMPString | undefined = undefined;
        value.set.forEach((el) => {
            if (el.tagClass !== ASN1TagClass.context) {
                return;
            }
            switch (el.tagNumber) {
            case (0): {
                surname = UniversalOrBMPString.fromElement(el as DERElement);
                break;
            }
            case (1): {
                givenName = UniversalOrBMPString.fromElement(el as DERElement);
                break;
            }
            case (2): {
                initials = UniversalOrBMPString.fromElement(el as DERElement);
                break;
            }
            case (3): {
                generationQualifier = UniversalOrBMPString.fromElement(el as DERElement);
                break;
            }
            default: { break; }
            }
        });
        if (!surname) {
            throw new errors.X500Error("No UniversalPersonalName.surname defined.");
        }
        return new UniversalPersonalName(
            surname,
            givenName,
            initials,
            generationQualifier,
        );
    }

    public toElement (): DERElement {
        let surnameElement: DERElement | undefined = undefined;
        if (this.surname) {
            surnameElement = this.surname.toElement();
            surnameElement.tagClass = ASN1TagClass.context;
            surnameElement.tagNumber = 0;
        }

        let givenNameElement: DERElement | undefined = undefined;
        if (this.givenName) {
            givenNameElement = this.givenName.toElement();
            givenNameElement.tagClass = ASN1TagClass.context;
            givenNameElement.tagNumber = 1;
        }

        let initialsElement: DERElement | undefined = undefined;
        if (this.initials) {
            initialsElement = this.initials.toElement();
            initialsElement.tagClass = ASN1TagClass.context;
            initialsElement.tagNumber = 2;
        }

        let generationQualifierElement: DERElement | undefined = undefined;
        if (this.generationQualifier) {
            generationQualifierElement = this.generationQualifier.toElement();
            generationQualifierElement.tagClass = ASN1TagClass.context;
            generationQualifierElement.tagNumber = 3;
        }

        return DERElement.fromSequence([
            surnameElement,
            givenNameElement,
            initialsElement,
            generationQualifierElement,
        ]);
    }
}
