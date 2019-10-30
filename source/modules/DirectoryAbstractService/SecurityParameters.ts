import {
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1Element,
    ASN1UniversalType,
} from "asn1-ts";
import CertificationPath from "../AuthenticationFramework/CertificationPath";
import DistinguishedName from "../InformationFramework/DistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import ProtectionRequest from "./ProtectionRequest";
import ErrorProtectionRequest from "./ErrorProtectionRequest";
import Code from "../CommonProtocolSpecifications/Code";
import validateTag from "../../validateTag";
import * as errors from "../../errors";

/**
 * `SecurityParameters ::= SET {
 *   certification-path          [0]  CertificationPath OPTIONAL,
 *   name                        [1]  DistinguishedName OPTIONAL,
 *   time                        [2]  Time OPTIONAL,
 *   random                      [3]  BIT STRING OPTIONAL,
 *   target                      [4]  ProtectionRequest OPTIONAL,
 *   --                          [5]  Not to be used
 *   operationCode               [6]  Code OPTIONAL,
 *   --                          [7]  Not to be used
 *   errorProtection             [8]  ErrorProtectionRequest OPTIONAL,
 *   errorCode                   [9]  Code OPTIONAL,
 *   ... }`
 */
export default
class SecurityParameters {
    constructor (
        readonly certificationPath: CertificationPath | undefined,
        readonly name: DistinguishedName | undefined,
        readonly time: Date | undefined,
        readonly random: boolean[] | undefined,
        readonly target: ProtectionRequest | undefined,
        readonly operationCode: Code | undefined,
        readonly errorProtection: ErrorProtectionRequest | undefined,
        readonly errorCode: Code | undefined,
    ) {}

    public static fromElement (value: DERElement): SecurityParameters {
        let certificationPath: CertificationPath | undefined = undefined;
        let name: DistinguishedName | undefined = undefined;
        let time: Date | undefined = undefined;
        let random: boolean[] | undefined = undefined;
        let target: ProtectionRequest | undefined = undefined;
        let operationCode: Code | undefined = undefined;
        let errorProtection: ErrorProtectionRequest | undefined = undefined;
        let errorCode: Code | undefined = undefined;
        value.set.forEach((element) => {
            if (element.tagClass !== ASN1TagClass.context) {
                return;
            }
            switch (element.tagNumber) {
            case (0): {
                certificationPath = CertificationPath.fromElement(element);
                break;
            }
            case (1): {
                name = element.sizeConstrainedSequenceOf(1)
                    .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                        validateTag(rdnElement as DERElement, `targetObject[${rdnIndex}]`,
                            [ ASN1TagClass.universal ],
                            [ ASN1Construction.constructed ],
                            [ ASN1UniversalType.set ],
                        );
                        return rdnElement.sizeConstrainedSetOf(1)
                            .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                validateTag(atavElement as DERElement, `targetObject[${rdnIndex}][${atavIndex}]`,
                                    [ ASN1TagClass.universal ],
                                    [ ASN1Construction.constructed ],
                                    [ ASN1UniversalType.sequence ],
                                );
                                return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                            });
                    });
                break;
            }
            case (2): {
                const innerElement = element.inner;
                validateTag(innerElement, "time",
                    [ ASN1TagClass.universal ],
                    [ ASN1Construction.primitive ],
                    [ ASN1UniversalType.utcTime, ASN1UniversalType.generalizedTime ],
                );
                if (innerElement.tagNumber === ASN1UniversalType.utcTime) {
                    time = innerElement.utcTime;
                } else {
                    time = innerElement.generalizedTime;
                }
                break;
            }
            case (3): {
                random = element.bitString;
                break;
            }
            case (4): {
                target = element.integer;
                break;
            }
            case (5): {
                throw new errors.X500Error("Tag 5 may not be used in SecurityParameters.");
            }
            case (6): {
                operationCode = element.inner;
                break;
            }
            case (7): {
                throw new errors.X500Error("Tag 7 may not be used in SecurityParameters.");
            }
            case (8): {
                errorProtection = element.integer;
                break;
            }
            case (9): {
                errorCode = element.inner;
                break;
            }
            default: { break; }
            }
        });

        return new SecurityParameters(
            certificationPath,
            name,
            time,
            random,
            target,
            operationCode,
            errorProtection,
            errorCode,
        );
    }

    public toElement (): DERElement {
        let certificationPathElement: DERElement | undefined = undefined;
        if (this.certificationPath) {
            certificationPathElement = this.certificationPath.toElement();
            certificationPathElement.tagClass = ASN1TagClass.context;
            certificationPathElement.tagNumber = 0;
        }

        let nameElement: DERElement | undefined = undefined;
        if (this.name) {
            nameElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
            );
            nameElement.sequence = this.name
                .map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())));
        }

        let timeElement: DERElement | undefined = undefined;
        if (this.time) {
            timeElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                2,
                this.time,
            );
        }

        let randomElement: DERElement | undefined = undefined;
        if (this.random) {
            randomElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                3,
            );
            randomElement.bitString = this.random;
        }

        let targetElement: DERElement | undefined = undefined;
        if (this.target) {
            targetElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                4,
                this.target,
            );
        }

        let operationCodeElement: DERElement | undefined = undefined;
        if (this.operationCode) {
            operationCodeElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                6,
            );
            operationCodeElement.inner = this.operationCode as DERElement;
        }

        let errorProtectionElement: DERElement | undefined = undefined;
        if (this.errorProtection) {
            errorProtectionElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                8,
                this.errorProtection,
            );
        }

        let errorCodeElement: DERElement | undefined = undefined;
        if (this.errorCode) {
            errorCodeElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                9,
            );
            errorCodeElement.inner = this.operationCode as DERElement;
        }

        return DERElement.fromSet([
            certificationPathElement,
            nameElement,
            timeElement,
            randomElement,
            targetElement,
            operationCodeElement,
            errorProtectionElement,
            errorCodeElement,
        ]);
    }
}
