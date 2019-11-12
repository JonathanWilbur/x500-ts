// import {
//     ASN1Element,
//     ASN1Construction,
//     ASN1TagClass,
//     DERElement,
//     ASN1UniversalType,
//     ConstructedElementSpecification,
//     validateConstruction,
// } from "asn1-ts";
// import Application_context_name from "./Application-context-name";
// import Name from "../InformationFramework/Name";
// import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
// import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
// import validateTag from "../../validateTag";
// import AP_invocation_identifier from "./AP-invocation-identifier";
// import AE_invocation_identifier from "./AE-invocation-identifier";
// import Implementation_data from "./Implementation-data";

// /**
//  * `AARQ-apdu{APPLICATION-CONTEXT:Protocols} ::= [APPLICATION 0] IMPLICIT SEQUENCE {
//  *   protocol-version                  [0] IMPLICIT BIT STRING {version1(0)} DEFAULT {version1},
//  *   application-context-name          [1]  Application-context-name,
//  *   called-AP-title                   [2]  Name OPTIONAL,
//  *   called-AE-qualifier               [3]  RelativeDistinguishedName    OPTIONAL,
//  *   called-AP-invocation-identifier   [4]  AP-invocation-identifier     OPTIONAL,
//  *   called-AE-invocation-identifier   [5]  AE-invocation-identifier     OPTIONAL,
//  *   calling-AP-title                  [6]  Name                         OPTIONAL,
//  *   calling-AE-qualifier              [7]  RelativeDistinguishedName    OPTIONAL,
//  *   calling-AP-invocation-identifier  [8]  AP-invocation-identifier     OPTIONAL,
//  *   calling-AE-invocation-identifier  [9]  AE-invocation-identifier     OPTIONAL,
//  *   implementation-information        [29] IMPLICIT Implementation-data OPTIONAL,
//  *   user-information                  [30] IMPLICIT Association-informationBind{{Protocols}}}`
//  */
// export default
// class AARQ_apdu {
//     constructor (
//         readonly protocolVersion: boolean,
//         readonly applicationContextName: Application_context_name,
//         readonly calledAPTitle: Name | undefined,
//         readonly calledAEQualifier: RelativeDistinguishedName | undefined,
//         readonly calledAPInvocationIdentifier: AP_invocation_identifier | undefined,
//         readonly calledAEInvocationIdentifier: AE_invocation_identifier | undefined,
//         readonly callingAPTitle: Name | undefined,
//         readonly callingAEQualifier: RelativeDistinguishedName | undefined,
//         readonly callingAPInvocationIdentifier: AP_invocation_identifier | undefined,
//         readonly callingAEInvocationIdentifier: AE_invocation_identifier | undefined,
//         readonly implementationInformation: Implementation_data | undefined,
//         // readonly userInformation: ,
//     ) {}

//     public static fromElement (value: ASN1Element): AARQ_apdu {
//         const specification: ConstructedElementSpecification[] = [
//             // {
//             //     name: "notThisTime",
//             //     optional: true,
//             //     tagClass: ASN1TagClass.universal,
//             //     construction: ASN1Construction.primitive,
//             //     tagNumber: ASN1UniversalType.boolean,
//             //     callback: (el: ASN1Element): void => {
//             //         notThisTime = el.boolean;
//             //     },
//             // },
//         ];
//         validateConstruction(value.sequence, specification);
//         return new AARQ_apdu(
//         );
//     }

//     public toElement (): DERElement {
//         return DERElement.fromSequence([

//         ]);
//     }
// }
