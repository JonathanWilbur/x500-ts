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
import Associate_result from "./Associate-result";
import Associate_source_diagnostic from "./Associate-source-diagnostic";
import Name from "../InformationFramework/Name";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import AP_invocation_identifier from "./AP-invocation-identifier";
import AE_invocation_identifier from "./AE-invocation-identifier";
import Implementation_data from "./Implementation-data";
import Association_informationBindRes from "./Association-informationBindRes";
import validateTag from "../../validateTag";
import * as errors from "../../errors";

/**
 * `AARE-apdu{APPLICATION-CONTEXT:Protocols} ::= [APPLICATION 1] IMPLICIT SEQUENCE {
 *   protocol-version                     [0] IMPLICIT BIT STRING {version1(0)}
 *                                              DEFAULT {version1},
 *   application-context-name             [1]  Application-context-name,
 *   result                               [2]  Associate-result(accepted),
 *   result-source-diagnostic             [3]  Associate-source-diagnostic,
 *   responding-AP-title                  [4]  Name                          OPTIONAL,
 *   responding-AE-qualifier              [5]  RelativeDistinguishedName     OPTIONAL,
 *   responding-AP-invocation-identifier  [6]  AP-invocation-identifier      OPTIONAL,
 *   responding-AE-invocation-identifier  [7]  AE-invocation-identifier      OPTIONAL,
 *   implementation-information           [29] IMPLICIT Implementation-data  OPTIONAL,
 *   user-information                     [30] IMPLICIT ssociation-informationBindRes{{Protocols}}}`
 */
export default
class AARE_apdu {
    constructor (
        readonly protocolVersion: [ boolean ],
        readonly applicationContextName: Application_context_name,
        readonly result: Associate_result,
        readonly resultSourceDiagnostic: Associate_source_diagnostic,
        readonly respondingAPTitle: Name | undefined,
        readonly respondingAEQualifier: RelativeDistinguishedName | undefined,
        readonly respondingAPInvocationIdentifier: AP_invocation_identifier | undefined,
        readonly respondingAEInvocationIdentifier: AE_invocation_identifier | undefined,
        readonly implementationInformation: Implementation_data | undefined,
        readonly userInformation: Association_informationBindRes,
    ) {}

    public static fromElement (value: ASN1Element): AARE_apdu {
        let protocolVersion: [ boolean ] = [ true ];
        let applicationContextName!: Application_context_name;
        let result: Associate_result = 0;
        let resultSourceDiagnostic!: Associate_source_diagnostic;
        let respondingAPTitle: Name | undefined = undefined;
        let respondingAEQualifier: RelativeDistinguishedName | undefined = undefined;
        let respondingAPInvocationIdentifier: AP_invocation_identifier | undefined = undefined;
        let respondingAEInvocationIdentifier: AE_invocation_identifier | undefined = undefined;
        let implementationInformation: Implementation_data | undefined = undefined;
        let userInformation!: Association_informationBindRes;
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
                name: "result",
                optional: false,
                tagClass: ASN1TagClass.context,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    result = el.inner.integer;
                },
            },
            {
                name: "resultSourceDiagnostic",
                optional: false,
                tagClass: ASN1TagClass.context,
                tagNumber: 3,
                callback: (el: ASN1Element): void => {
                    resultSourceDiagnostic = el.inner;
                },
            },
            {
                name: "respondingAPTitle",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 4,
                callback: (el: ASN1Element): void => {
                    respondingAPTitle = el.inner.sizeConstrainedSequenceOf(1)
                        .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                            validateTag(rdnElement as DERElement, `respondingAPTitle[${rdnIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.set ],
                            );
                            return rdnElement.sizeConstrainedSetOf(1)
                                .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                    validateTag(atavElement as DERElement,
                                        `respondingAPTitle[${rdnIndex}][${atavIndex}]`,
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
                name: "respondingAEQualifier",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 5,
                callback: (el: ASN1Element): void => {
                    respondingAEQualifier = el.inner.sizeConstrainedSetOf(1)
                        .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                            validateTag(atavElement as DERElement, `respondingAPTitle[${atavIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.sequence ],
                            );
                            return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                        });
                },
            },
            {
                name: "respondingAPInvocationIdentifier",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 6,
                callback: (el: ASN1Element): void => {
                    respondingAPInvocationIdentifier = el.inner.integer;
                },
            },
            {
                name: "respondingAEInvocationIdentifier",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 7,
                callback: (el: ASN1Element): void => {
                    respondingAEInvocationIdentifier = el.inner.integer;
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
        return new AARE_apdu(
            protocolVersion,
            applicationContextName,
            result,
            resultSourceDiagnostic,
            respondingAPTitle,
            respondingAEQualifier,
            respondingAPInvocationIdentifier,
            respondingAEInvocationIdentifier,
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

        const resultElement: DERElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.constructed,
            2,
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
                this.result,
            ),
        );

        let resultSourceDiagnosticElement: DERElement | undefined = undefined;
        if (this.resultSourceDiagnostic) {
            resultSourceDiagnosticElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                3,
                this.resultSourceDiagnostic,
            );
        }

        let respondingAPTitleElement: DERElement | undefined = undefined;
        if (this.respondingAPTitle) {
            respondingAPTitleElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                4,
            );
            respondingAPTitleElement.inner = DERElement.fromSequence(
                this.respondingAPTitle.map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement()))),
            );
        }

        let respondingAEQualifierElement: DERElement | undefined = undefined;
        if (this.respondingAEQualifier) {
            respondingAEQualifierElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                5,
            );
            respondingAEQualifierElement.inner = DERElement.fromSet(
                this.respondingAEQualifier.map((atav) => atav.toElement()),
            );
        }

        let respondingAPInvocationIdentifierElement: DERElement | undefined = undefined;
        if (this.respondingAPInvocationIdentifier) {
            respondingAPInvocationIdentifierElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                6,
                new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.integer,
                    this.respondingAPInvocationIdentifier,
                ),
            );
        }

        let respondingAEInvocationIdentifierElement: DERElement | undefined = undefined;
        if (this.respondingAEInvocationIdentifier) {
            respondingAEInvocationIdentifierElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                7,
                new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.integer,
                    this.respondingAEInvocationIdentifier,
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
            applicationContextNameElement,
            resultElement,
            resultSourceDiagnosticElement,
            respondingAPTitleElement,
            respondingAEQualifierElement,
            respondingAPInvocationIdentifierElement,
            respondingAEInvocationIdentifierElement,
            implementationInformationElement,
            userInformationElement,
        ]);
    }
}
