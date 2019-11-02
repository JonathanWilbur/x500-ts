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

// TODO:
/**
 * `CommonArguments ::= SET {
 *   serviceControls      [30]  ServiceControls    DEFAULT {},
 *   securityParameters   [29]  SecurityParameters OPTIONAL,
 *   requestor            [28]  DistinguishedName  OPTIONAL,
 *   operationProgress    [27]  OperationProgress
 *                              DEFAULT {nameResolutionPhase notStarted},
 *   aliasedRDNs          [26]  INTEGER            OPTIONAL,
 *   criticalExtensions   [25]  BIT STRING         OPTIONAL,
 *   referenceType        [24]  ReferenceType      OPTIONAL,
 *   entryOnly            [23]  BOOLEAN            DEFAULT TRUE,
 *   exclusions           [22]  Exclusions         OPTIONAL,
 *   nameResolveOnMaster  [21]  BOOLEAN            DEFAULT FALSE,
 *   operationContexts    [20]  ContextSelection   OPTIONAL,
 *   familyGrouping       [19]  FamilyGrouping     DEFAULT entryOnly,
 *   ... }`
 */
export default
class CommonArguments {
    constructor (
        readonly securityParameters: SecurityParameters | undefined,
        readonly performer: DistinguishedName | undefined,
        readonly aliasDereferenced: boolean,
        readonly notification: Attribute[] | undefined,
    ) {}

    public static fromElement (value: DERElement): CommonArguments {
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

        return new CommonArguments(
            securityParameters,
            performer,
            aliasDereferenced,
            notification,
        );
    }

    public toElement (): DERElement {
        // TODO:
        return DERElement.fromSet([
        ]);
    }
}
