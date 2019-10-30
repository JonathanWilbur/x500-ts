import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
} from "asn1-ts";
import validateTag from "../../validateTag";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import * as errors from "../../errors";
import ContinuationReference from "./ContinuationReference";
import DistinguishedName from "../InformationFramework/DistinguishedName";
import CommonResults from "../DirectoryAbstractService/CommonResults";
import Attribute from "../InformationFramework/Attribute";
import SecurityParameters from "../DirectoryAbstractService/SecurityParameters";

/**
 * `DsaReferralData ::= SET {
 *   reference      [0]  ContinuationReference,
 *   contextPrefix  [1]  DistinguishedName OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF       CommonResults }`
 */
export default
class DsaReferralData {
    constructor (
        readonly reference: ContinuationReference,
        readonly contextPrefix: DistinguishedName | undefined,
        readonly commonResults: CommonResults,
    ) {}

    public static fromElement (value: DERElement): DsaReferralData {
        let reference: ContinuationReference | undefined = undefined;
        let contextPrefix: DistinguishedName | undefined = undefined;
        let securityParameters: SecurityParameters | undefined = undefined;
        let performer: DistinguishedName | undefined = undefined;
        let aliasDereferenced: boolean = false;
        let notification: Attribute[] | undefined = undefined;

        value.set.forEach((element) => {
            if (element.tagClass !== ASN1TagClass.context) {
                return;
            }
            switch (element.tagNumber) {
            case (0): {
                reference = ContinuationReference.fromElement(element);
                break;
            }
            case (1): {
                contextPrefix = element.sizeConstrainedSequenceOf(1)
                    .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                        validateTag(rdnElement as DERElement, `issuer[${rdnIndex}]`,
                            [ ASN1TagClass.universal ],
                            [ ASN1Construction.constructed ],
                            [ ASN1UniversalType.set ],
                        );
                        return rdnElement.sizeConstrainedSetOf(1)
                            .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                validateTag(atavElement as DERElement, `issuer[${rdnIndex}][${atavIndex}]`,
                                    [ ASN1TagClass.universal ],
                                    [ ASN1Construction.constructed ],
                                    [ ASN1UniversalType.sequence ],
                                );
                                return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                            });
                    });
                break;
            }
            case (30): {
                securityParameters = SecurityParameters.fromElement(element);
                break;
            }
            case (29): {
                performer = element.sizeConstrainedSequenceOf(1)
                    .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                        validateTag(rdnElement as DERElement, `issuer[${rdnIndex}]`,
                            [ ASN1TagClass.universal ],
                            [ ASN1Construction.constructed ],
                            [ ASN1UniversalType.set ],
                        );
                        return rdnElement.sizeConstrainedSetOf(1)
                            .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                validateTag(atavElement as DERElement, `issuer[${rdnIndex}][${atavIndex}]`,
                                    [ ASN1TagClass.universal ],
                                    [ ASN1Construction.constructed ],
                                    [ ASN1UniversalType.sequence ],
                                );
                                return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                            });
                    });
                break;
            }
            case (28): {
                aliasDereferenced = element.boolean;
                break;
            }
            case (27): {
                notification = element.sizeConstrainedSequenceOf(1)
                    .map((attr) => Attribute.fromElement(attr as DERElement));
                break;
            }
            default: { break; }
            }
        });

        if (typeof reference === "undefined") {
            throw new errors.X500Error("reference not defined for DsaReferralData.");
        }

        const commonResults: CommonResults = new CommonResults(
            securityParameters,
            performer,
            aliasDereferenced,
            notification,
        );

        return new DsaReferralData(
            reference,
            contextPrefix,
            commonResults,
        );
    }

    public toElement (): DERElement {
        const referenceElement: DERElement = this.reference.toElement();
        referenceElement.tagClass = ASN1TagClass.context;
        referenceElement.tagNumber = 0;

        let contextPrefixElement: DERElement | undefined = undefined;
        if (this.contextPrefix) {
            contextPrefixElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
            );
            contextPrefixElement.sequence = this.contextPrefix
                .map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())));
        }

        let securityParametersElement: DERElement | undefined = undefined;
        if (this.commonResults.securityParameters) {
            securityParametersElement = this.commonResults.securityParameters.toElement();
            securityParametersElement.tagClass = ASN1TagClass.context;
            securityParametersElement.tagNumber = 30;
        }

        let performerElement: DERElement | undefined = undefined;
        if (this.commonResults.performer) {
            performerElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                29,
            );
            performerElement.sequence = this.commonResults.performer
                .map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())));
        }

        let aliasDereferencedElement: DERElement | undefined = undefined;
        if (this.commonResults.aliasDereferenced) {
            aliasDereferencedElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                28,
                this.commonResults.aliasDereferenced,
            );
        }

        let notificationElement: DERElement | undefined = undefined;
        if (this.commonResults.notification) {
            notificationElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                27,
            );
            notificationElement.sequence = this.commonResults.notification
                .map((attr) => attr.toElement());
        }

        return DERElement.fromSet([
            referenceElement,
            contextPrefixElement,
            securityParametersElement,
            performerElement,
            aliasDereferencedElement,
            notificationElement,
        ]);
    }
}
