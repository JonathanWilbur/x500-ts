import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import Application_context_name from "./Application-context-name";
import Name from "../InformationFramework/Name";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import AP_invocation_identifier from "./AP-invocation-identifier";
import AE_invocation_identifier from "./AE-invocation-identifier";
import Implementation_data from "./Implementation-data";
import Association_informationBind from "./Association-informationBind";
import validateTag from "../../validateTag";
import * as errors from "../../errors";

/**
 * `AARQ-apdu{APPLICATION-CONTEXT:Protocols} ::= [APPLICATION 0] IMPLICIT SEQUENCE {
 *   protocol-version                  [0] IMPLICIT BIT STRING {version1(0)} DEFAULT {version1},
 *   application-context-name          [1]  Application-context-name,
 *   called-AP-title                   [2]  Name OPTIONAL,
 *   called-AE-qualifier               [3]  RelativeDistinguishedName    OPTIONAL,
 *   called-AP-invocation-identifier   [4]  AP-invocation-identifier     OPTIONAL,
 *   called-AE-invocation-identifier   [5]  AE-invocation-identifier     OPTIONAL,
 *   calling-AP-title                  [6]  Name                         OPTIONAL,
 *   calling-AE-qualifier              [7]  RelativeDistinguishedName    OPTIONAL,
 *   calling-AP-invocation-identifier  [8]  AP-invocation-identifier     OPTIONAL,
 *   calling-AE-invocation-identifier  [9]  AE-invocation-identifier     OPTIONAL,
 *   implementation-information        [29] IMPLICIT Implementation-data OPTIONAL,
 *   user-information                  [30] IMPLICIT Association-informationBind{{Protocols}}}`
 */
export default
class AARQ_apdu {
    constructor (
        readonly protocolVersion: [ boolean ],
        readonly applicationContextName: Application_context_name,
        readonly calledAPTitle: Name | undefined,
        readonly calledAEQualifier: RelativeDistinguishedName | undefined,
        readonly calledAPInvocationIdentifier: AP_invocation_identifier | undefined,
        readonly calledAEInvocationIdentifier: AE_invocation_identifier | undefined,
        readonly callingAPTitle: Name | undefined,
        readonly callingAEQualifier: RelativeDistinguishedName | undefined,
        readonly callingAPInvocationIdentifier: AP_invocation_identifier | undefined,
        readonly callingAEInvocationIdentifier: AE_invocation_identifier | undefined,
        readonly implementationInformation: Implementation_data | undefined,
        readonly userInformation: Association_informationBind,
    ) {}

    public static fromElement (value: ASN1Element): AARQ_apdu {
        let protocolVersion: [ boolean ] = [ true ];
        let applicationContextName!: Application_context_name;
        let calledAPTitle: Name | undefined = undefined;
        let calledAEQualifier: RelativeDistinguishedName | undefined = undefined;
        let calledAPInvocationIdentifier: AP_invocation_identifier | undefined = undefined;
        let calledAEInvocationIdentifier: AE_invocation_identifier | undefined = undefined;
        let callingAPTitle: Name | undefined = undefined;
        let callingAEQualifier: RelativeDistinguishedName | undefined = undefined;
        let callingAPInvocationIdentifier: AP_invocation_identifier | undefined = undefined;
        let callingAEInvocationIdentifier: AE_invocation_identifier | undefined = undefined;
        let implementationInformation: Implementation_data | undefined = undefined;
        let userInformation!: Association_informationBind;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "protocolVersion",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    const bits: boolean[] = el.bitString;
                    if (bits.length !== 1) {
                        throw new errors.X500Error("AARE-apdu protocolVersion had more that one bit.");
                    }
                    protocolVersion = el.bitString as [ boolean ];
                },
            },
            {
                name: "applicationContextName",
                optional: false,
                tagClass: ASN1TagClass.context,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    applicationContextName = el.inner.objectIdentifier;
                },
            },
            {
                name: "calledAPTitle",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    calledAPTitle = el.inner.sizeConstrainedSequenceOf(1)
                        .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                            validateTag(rdnElement as DERElement, `calledAPTitle[${rdnIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.set ],
                            );
                            return rdnElement.sizeConstrainedSetOf(1)
                                .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                    validateTag(atavElement as DERElement,
                                        `calledAPTitle[${rdnIndex}][${atavIndex}]`,
                                        [ ASN1TagClass.universal ],
                                        [ ASN1Construction.constructed ],
                                        [ ASN1UniversalType.sequence ],
                                    );
                                    return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                                });
                        });
                },
            },
            {
                name: "calledAEQualifier",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 3,
                callback: (el: ASN1Element): void => {
                    calledAEQualifier = el.inner.sizeConstrainedSetOf(1)
                        .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                            validateTag(atavElement as DERElement, `calledAEQualifier[${atavIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.sequence ],
                            );
                            return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                        });
                },
            },
            {
                name: "calledAPInvocationIdentifier",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 4,
                callback: (el: ASN1Element): void => {
                    calledAPInvocationIdentifier = el.inner.integer;
                },
            },
            {
                name: "calledAEInvocationIdentifier",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 5,
                callback: (el: ASN1Element): void => {
                    calledAEInvocationIdentifier = el.inner.integer;
                },
            },
            {
                name: "callingAPTitle",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 6,
                callback: (el: ASN1Element): void => {
                    callingAPTitle = el.inner.sizeConstrainedSequenceOf(1)
                        .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                            validateTag(rdnElement as DERElement, `callingAPTitle[${rdnIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.set ],
                            );
                            return rdnElement.sizeConstrainedSetOf(1)
                                .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                    validateTag(atavElement as DERElement,
                                        `callingAPTitle[${rdnIndex}][${atavIndex}]`,
                                        [ ASN1TagClass.universal ],
                                        [ ASN1Construction.constructed ],
                                        [ ASN1UniversalType.sequence ],
                                    );
                                    return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                                });
                        });
                },
            },
            {
                name: "callingAEQualifier",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 7,
                callback: (el: ASN1Element): void => {
                    callingAEQualifier = el.inner.sizeConstrainedSetOf(1)
                        .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                            validateTag(atavElement as DERElement, `callingAEQualifier[${atavIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.sequence ],
                            );
                            return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                        });
                },
            },
            {
                name: "callingAPInvocationIdentifier",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 8,
                callback: (el: ASN1Element): void => {
                    callingAPInvocationIdentifier = el.inner.integer;
                },
            },
            {
                name: "callingAEInvocationIdentifier",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 9,
                callback: (el: ASN1Element): void => {
                    callingAEInvocationIdentifier = el.inner.integer;
                },
            },

            {
                name: "implementationInformation",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 29,
                callback: (el: ASN1Element): void => {
                    implementationInformation = el.graphicString;
                },
            },
            {
                name: "userInformation",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 30,
                callback: (el: ASN1Element): void => {
                    userInformation = [ el.sizeConstrainedSequenceOf(1)[0].external ];
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new AARQ_apdu(
            protocolVersion,
            applicationContextName,
            calledAPTitle,
            calledAEQualifier,
            calledAPInvocationIdentifier,
            calledAEInvocationIdentifier,
            callingAPTitle,
            callingAEQualifier,
            callingAPInvocationIdentifier,
            callingAEInvocationIdentifier,
            implementationInformation,
            userInformation,
        );
    }

    public toElement (): DERElement {
        const applicationContextNameElement: DERElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.constructed,
            1,
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.applicationContextName,
            ),
        );

        let calledAPTitleElement: DERElement | undefined = undefined;
        if (this.calledAPTitle) {
            calledAPTitleElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                2,
            );
            calledAPTitleElement.inner = DERElement.fromSequence(
                this.calledAPTitle.map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement()))),
            );
        }

        let calledAEQualifierElement: DERElement | undefined = undefined;
        if (this.calledAEQualifier) {
            calledAEQualifierElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                3,
            );
            calledAEQualifierElement.inner = DERElement.fromSet(
                this.calledAEQualifier.map((atav) => atav.toElement()),
            );
        }

        let calledAPInvocationIdentifierElement: DERElement | undefined = undefined;
        if (this.calledAPInvocationIdentifier) {
            calledAPInvocationIdentifierElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                4,
                new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.integer,
                    this.calledAPInvocationIdentifier,
                ),
            );
        }

        let calledAEInvocationIdentifierElement: DERElement | undefined = undefined;
        if (this.calledAEInvocationIdentifier) {
            calledAEInvocationIdentifierElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                5,
                new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.integer,
                    this.calledAEInvocationIdentifier,
                ),
            );
        }

        let callingAPTitleElement: DERElement | undefined = undefined;
        if (this.callingAPTitle) {
            callingAPTitleElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                6,
            );
            callingAPTitleElement.inner = DERElement.fromSequence(
                this.callingAPTitle.map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement()))),
            );
        }

        let callingAEQualifierElement: DERElement | undefined = undefined;
        if (this.callingAEQualifier) {
            callingAEQualifierElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                7,
            );
            callingAEQualifierElement.inner = DERElement.fromSet(
                this.callingAEQualifier.map((atav) => atav.toElement()),
            );
        }

        let callingAPInvocationIdentifierElement: DERElement | undefined = undefined;
        if (this.callingAPInvocationIdentifier) {
            callingAPInvocationIdentifierElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                8,
                new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.integer,
                    this.callingAPInvocationIdentifier,
                ),
            );
        }

        let callingAEInvocationIdentifierElement: DERElement | undefined = undefined;
        if (this.callingAEInvocationIdentifier) {
            callingAEInvocationIdentifierElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                9,
                new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.integer,
                    this.callingAEInvocationIdentifier,
                ),
            );
        }

        let implementationInformationElement: DERElement | undefined = undefined;
        if (this.implementationInformation) {
            implementationInformationElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                29,
            );
            implementationInformationElement.graphicString = this.implementationInformation;
        }

        let userInformationElement: DERElement | undefined = undefined;
        if (this.userInformation) {
            userInformationElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                30,
            );
            userInformationElement.inner = DERElement.fromSequence(this.userInformation.map((ui) => {
                const el = new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.constructed,
                    ASN1UniversalType.external,
                );
                el.external = ui;
                return el;
            }));
        }

        return DERElement.fromSequence([
            // protocolVersionElement, // I don't think this has to be encoded, because it is always [1].
            applicationContextNameElement,
            calledAPTitleElement,
            calledAEQualifierElement,
            calledAPInvocationIdentifierElement,
            calledAEInvocationIdentifierElement,
            callingAPTitleElement,
            callingAEQualifierElement,
            callingAPInvocationIdentifierElement,
            callingAEInvocationIdentifierElement,
            implementationInformationElement,
            userInformationElement,
        ]);
    }
}

