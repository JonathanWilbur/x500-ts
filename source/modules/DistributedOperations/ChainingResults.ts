import {
    ASN1Construction,
    ASN1UniversalType,
    ASN1TagClass,
    DERElement,
    ASN1Element,
} from "asn1-ts";
import validateTag from "../../validateTag";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import DomainInfo from "./DomainInfo";
import CrossReference from "./CrossReference";
import SecurityParameters from "../DirectoryAbstractService/SecurityParameters";
import Exclusions from "./Exclusions";

/**
 * `ChainingResults ::= SET {
 *   info                [0]  DomainInfo OPTIONAL,
 *   crossReferences     [1]  SEQUENCE SIZE (1..MAX) OF CrossReference OPTIONAL,
 *   securityParameters  [2]  SecurityParameters DEFAULT {},
 *   alreadySearched     [3]  Exclusions OPTIONAL,
 *   ... }`
 */
export default
class ChainingResults {
    constructor (
        readonly info: DomainInfo | undefined,
        readonly crossReferences: CrossReference[] | undefined,
        readonly securityParameters: SecurityParameters,
        readonly alreadySearched: Exclusions | undefined,
    ) {}

    public static fromElement (value: DERElement): ChainingResults {
        let info: DomainInfo | undefined = undefined;
        let crossReferences: CrossReference[] | undefined = undefined;
        let securityParameters!: SecurityParameters;
        let alreadySearched: Exclusions | undefined = undefined;
        value.set.forEach((element) => {
            if (element.tagClass !== ASN1TagClass.context) {
                return;
            }
            switch (element.tagNumber) {
            case (0): {
                info = element.inner;
                break;
            }
            case (1): {
                crossReferences = element.sizeConstrainedSequenceOf(1)
                    .map((cr) => CrossReference.fromElement(cr as DERElement));
                break;
            }
            case (2): {
                securityParameters = SecurityParameters.fromElement(element);
                break;
            }
            case (3): {
                alreadySearched = element.sizeConstrainedSetOf(1)
                    .map((x) => x.sizeConstrainedSequenceOf(1)
                        .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                            validateTag(rdnElement as DERElement, `exclusions[${rdnIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.set ],
                            );
                            return rdnElement.sizeConstrainedSetOf(1)
                                .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                    validateTag(atavElement as DERElement, `exclusions[${rdnIndex}][${atavIndex}]`,
                                        [ ASN1TagClass.universal ],
                                        [ ASN1Construction.constructed ],
                                        [ ASN1UniversalType.sequence ],
                                    );
                                    return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                                });
                        }));
                break;
            }
            default: { break; }
            }
        });

        return new ChainingResults(
            info,
            crossReferences,
            securityParameters,
            alreadySearched,
        );
    }

    public toElement (): DERElement {
        const infoElement: DERElement | undefined = this.info
            ? new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                0,
                this.info,
            )
            : undefined;

        let crossReferencesElement: DERElement | undefined = undefined;
        if (this.crossReferences) {
            crossReferencesElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
            );
            crossReferencesElement.sequence = this.crossReferences.map((cr) => cr.toElement());
        }

        const securityParametersElement: DERElement = this.securityParameters.toElement();
        securityParametersElement.tagClass = ASN1TagClass.context;
        securityParametersElement.tagNumber = 2;

        let alreadySearchedElement: DERElement | undefined = undefined;
        if (this.alreadySearched) {
            alreadySearchedElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                3,
            );
            alreadySearchedElement.set = this.alreadySearched
                .map((x) => DERElement.fromSet(x
                    .map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())))));
        }

        return DERElement.fromSet([
            infoElement,
            crossReferencesElement,
            securityParametersElement,
            alreadySearchedElement,
        ]);
    }
}
