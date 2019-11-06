import {
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
} from "asn1-ts";
import SecurityPolicyIdentifier from "./SecurityPolicyIdentifier";
import SecurityClassification from "./SecurityClassification";
import PrivacyMark from "./PrivacyMark";
import SecurityCategories from "./SecurityCategories";
import SecurityCategory from "./SecurityCategory";

/**
 * `SecurityLabel ::= SET {
 *   security-policy-identifier  SecurityPolicyIdentifier OPTIONAL,
 *   security-classification     SecurityClassification OPTIONAL,
 *   privacy-mark                PrivacyMark OPTIONAL,
 *   security-categories         SecurityCategories OPTIONAL,
 *   ... }
 *    (ALL EXCEPT ({ -- none, at least one component shall be present --}))`
 */
export default
class SecurityLabel {
    constructor (
        readonly securityPolicyIdentifier: SecurityPolicyIdentifier | undefined,
        readonly securityClassification: SecurityClassification | undefined,
        readonly privacyMark: PrivacyMark | undefined,
        readonly securityCategories: SecurityCategories | undefined,
    ) {}

    public static fromElement (value: DERElement): SecurityLabel {
        let securityPolicyIdentifier: SecurityPolicyIdentifier | undefined = undefined;
        let securityClassification: SecurityClassification | undefined = undefined;
        let privacyMark: PrivacyMark | undefined = undefined;
        let securityCategories: SecurityCategories | undefined = undefined;

        value.set.forEach((element) => {
            if (element.tagClass !== ASN1TagClass.universal) {
                return;
            }
            switch (element.tagNumber) {
            case (ASN1UniversalType.objectIdentifier): {
                securityPolicyIdentifier = element.objectIdentifier;
                break;
            }
            case (ASN1UniversalType.integer): {
                securityClassification = element.integer;
                break;
            }
            case (ASN1UniversalType.printableString): {
                privacyMark = element.printableString;
                break;
            }
            case (ASN1UniversalType.set): {
                securityCategories = element.sizeConstrainedSetOf(1)
                    .map((sc) => SecurityCategory.fromElement(sc as DERElement));
                break;
            }
            default: { break; }
            }
        });

        return new SecurityLabel(
            securityPolicyIdentifier,
            securityClassification,
            privacyMark,
            securityCategories,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSet([
            this.securityPolicyIdentifier
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.objectIdentifier,
                    this.securityPolicyIdentifier,
                )
                : undefined,
            this.securityClassification
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.integer,
                    this.securityClassification,
                )
                : undefined,
            // TODO: This is technically incorrect, since the string will be
            // encoded as a UTF8String.
            this.privacyMark
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.printableString,
                    this.privacyMark,
                )
                : undefined,
            this.securityCategories
                ? DERElement.fromSequence(this.securityCategories.map((sc) => sc.toElement()))
                : undefined,
        ]);
    }
}
