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
import DistinguishedName from "../InformationFramework/DistinguishedName";
import Attribute from "../InformationFramework/Attribute";
import SecurityParameters from "./SecurityParameters";

/**
 * `CommonResults ::= SET {
 *   securityParameters  [30]  SecurityParameters  OPTIONAL,
 *   performer           [29]  DistinguishedName   OPTIONAL,
 *   aliasDereferenced   [28]  BOOLEAN             DEFAULT FALSE,
 *   notification        [27]  SEQUENCE SIZE (1..MAX) OF Attribute
 *                             {{SupportedAttributes}} OPTIONAL,
 *   ... }`
 */
export default
class CommonResults {
    constructor (
        readonly securityParameters: SecurityParameters | undefined,
        readonly performer: DistinguishedName | undefined,
        readonly aliasDereferenced: boolean,
        readonly notification: Attribute[] | undefined,
    ) {}

    public static fromElement (value: DERElement): CommonResults {
        let securityParameters: SecurityParameters | undefined = undefined;
        let performer: DistinguishedName | undefined = undefined;
        let aliasDereferenced: boolean = false;
        let notification: Attribute[] | undefined = undefined;

        value.set.forEach((element) => {
            if (element.tagClass !== ASN1TagClass.context) {
                return;
            }
            switch (element.tagNumber) {
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

        return new CommonResults(
            securityParameters,
            performer,
            aliasDereferenced,
            notification,
        );
    }

    public toElement (): DERElement {
        let securityParametersElement: DERElement | undefined = undefined;
        if (this.securityParameters) {
            securityParametersElement = this.securityParameters.toElement();
            securityParametersElement.tagClass = ASN1TagClass.context;
            securityParametersElement.tagNumber = 30;
        }

        let performerElement: DERElement | undefined = undefined;
        if (this.performer) {
            performerElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                29,
            );
            performerElement.sequence = this.performer
                .map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())));
        }

        let aliasDereferencedElement: DERElement | undefined = undefined;
        if (this.aliasDereferenced) {
            aliasDereferencedElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                28,
                this.aliasDereferenced,
            );
        }

        let notificationElement: DERElement | undefined = undefined;
        if (this.notification) {
            notificationElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                27,
            );
            notificationElement.sequence = this.notification.map((attr) => attr.toElement());
        }

        return DERElement.fromSet([
            securityParametersElement,
            performerElement,
            aliasDereferencedElement,
            notificationElement,
        ]);
    }
}
