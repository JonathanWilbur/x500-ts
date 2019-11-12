import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ObjectIdentifier,
} from "asn1-ts";
import validateTag from "../../validateTag";
import Name from "../InformationFramework/Name";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import ServiceControlOptions from "./ServiceControlOptions";
import AgreementID from "../DirectoryShadowAbstractService/AgreementID";
import OperationalBindingID from "../OperationalBindingManagement/OperationalBindingID";

/**
 * `ServiceControls ::= SET {
 *   options              [0]  ServiceControlOptions DEFAULT {},
 *   priority             [1]  INTEGER {low(0), medium(1), high(2)} DEFAULT medium,
 *   timeLimit            [2]  INTEGER OPTIONAL,
 *   sizeLimit            [3]  INTEGER OPTIONAL,
 *   scopeOfReferral      [4]  INTEGER {dmd(0), country(1)} OPTIONAL,
 *   attributeSizeLimit   [5]  INTEGER OPTIONAL,
 *   manageDSAITPlaneRef  [6]  SEQUENCE {
 *     dsaName                   Name,
 *     agreementID               AgreementID,
 *     ...} OPTIONAL,
 *   serviceType          [7]  OBJECT IDENTIFIER OPTIONAL,
 *   userClass            [8]  INTEGER OPTIONAL,
 *   ... }`
 */
export default
class ServiceControls {
    constructor (
        readonly options: ServiceControlOptions | undefined,
        readonly priority: number,
        readonly timeLimit: number | undefined,
        readonly sizeLimit: number | undefined,
        readonly scopeOfReferral: number | undefined,
        readonly attributeSizeLimit: number | undefined,
        readonly manageDSAITPlaneRef: { dsaName: Name; agreementID: AgreementID } | undefined,
        readonly serviceType: ObjectIdentifier | undefined,
        readonly userClass: number | undefined,
    ) {}

    public static fromElement (value: ASN1Element): ServiceControls {
        let options: ServiceControlOptions = new ServiceControlOptions(
            false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false,
        );
        let priority: number = 1;
        let timeLimit: number | undefined = undefined;
        let sizeLimit: number | undefined = undefined;
        let scopeOfReferral: number | undefined = undefined;
        let attributeSizeLimit: number | undefined = undefined;
        let manageDSAITPlaneRef: { dsaName: Name; agreementID: AgreementID } | undefined = undefined;
        let serviceType: ObjectIdentifier | undefined = undefined;
        let userClass: number | undefined = undefined;

        value.set.forEach((element) => {
            if (element.tagClass !== ASN1TagClass.context) {
                return;
            }
            switch (element.tagNumber) {
            case (0): {
                options = ServiceControlOptions.fromElement(element);
                break;
            }
            case (1): {
                priority = element.integer;
                break;
            }
            case (2): {
                timeLimit = element.integer;
                break;
            }
            case (3): {
                sizeLimit = element.integer;
                break;
            }
            case (4): {
                scopeOfReferral = element.integer;
                break;
            }
            case (5): {
                attributeSizeLimit = element.integer;
                break;
            }
            case (6): {
                const manageDSAITPlaneRefElements: ASN1Element[] = element.sequence;
                manageDSAITPlaneRef = {
                    dsaName: manageDSAITPlaneRefElements[0].sizeConstrainedSequenceOf(1)
                        .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                            validateTag(rdnElement as DERElement, `dsaName[${rdnIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.set ],
                            );
                            return rdnElement.sizeConstrainedSetOf(1)
                                .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                    validateTag(atavElement as DERElement, `dsaName[${rdnIndex}][${atavIndex}]`,
                                        [ ASN1TagClass.universal ],
                                        [ ASN1Construction.constructed ],
                                        [ ASN1UniversalType.sequence ],
                                    );
                                    return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                                });
                        }),
                    agreementID: OperationalBindingID.fromElement(manageDSAITPlaneRefElements[1]),
                }
                break;
            }
            case (7): {
                serviceType = element.objectIdentifier;
                break;
            }
            case (8): {
                userClass = element.integer;
                break;
            }
            default: { break; }
            }
        });

        return new ServiceControls(
            options,
            priority,
            timeLimit,
            sizeLimit,
            scopeOfReferral,
            attributeSizeLimit,
            manageDSAITPlaneRef,
            serviceType,
            userClass,
        );
    }

    public toElement (): DERElement {
        let optionsElement: DERElement | undefined = undefined;
        if (this.options) {
            optionsElement = this.options.toElement();
            optionsElement.tagClass = ASN1TagClass.context;
            optionsElement.tagNumber = 0;
        }

        let priorityElement: DERElement | undefined = undefined;
        if (this.priority) {
            priorityElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                1,
                this.priority,
            );
        }

        let timeLimitElement: DERElement | undefined = undefined;
        if (this.timeLimit) {
            timeLimitElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                2,
                this.timeLimit,
            );
        }

        let sizeLimitElement: DERElement | undefined = undefined;
        if (this.sizeLimit) {
            sizeLimitElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                3,
                this.sizeLimit,
            );
        }

        let scopeOfReferralElement: DERElement | undefined = undefined;
        if (this.scopeOfReferral) {
            scopeOfReferralElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                4,
                this.scopeOfReferral,
            );
        }

        let attributeSizeLimitElement: DERElement | undefined = undefined;
        if (this.attributeSizeLimit) {
            attributeSizeLimitElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                5,
                this.attributeSizeLimit,
            );
        }

        let manageDSAITPlaneRefElement: DERElement | undefined = undefined;
        if (this.manageDSAITPlaneRef) {
            manageDSAITPlaneRefElement = DERElement.fromSequence([
                DERElement.fromSequence(this.manageDSAITPlaneRef.dsaName
                    .map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())))),
                this.manageDSAITPlaneRef.agreementID.toElement(),
            ]);
            manageDSAITPlaneRefElement.tagClass = ASN1TagClass.context;
            manageDSAITPlaneRefElement.tagNumber = 6;
        }

        let serviceTypeElement: DERElement | undefined = undefined;
        if (this.serviceType) {
            serviceTypeElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                7,
                this.serviceType,
            );
        }

        let userClassElement: DERElement | undefined = undefined;
        if (this.userClass) {
            userClassElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                8,
                this.userClass,
            );
        }

        return DERElement.fromSet([
            optionsElement,
            priorityElement,
            timeLimitElement,
            sizeLimitElement,
            scopeOfReferralElement,
            attributeSizeLimitElement,
            manageDSAITPlaneRefElement,
            serviceTypeElement,
            userClassElement,
        ]);
    }
}
