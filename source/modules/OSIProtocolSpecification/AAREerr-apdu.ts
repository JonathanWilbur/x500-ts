// import {
//     ASN1Element,
//     ASN1Construction,
//     ASN1TagClass,
//     DERElement,
//     ASN1UniversalType,
//     ConstructedElementSpecification,
//     validateConstruction,
// } from "asn1-ts";

// /**
//  * `AAREerr-apdu{APPLICATION-CONTEXT:Protocols} ::=  [APPLICATION 1] IMPLICIT SEQUENCE {
//  *   protocol-version                    [0]  IMPLICIT BIT STRING {version1(0)} DEFAULT {version1},
//  *   application-context-name            [1]  Application-context-name,
//  *   result                              [2]  Associate-result (rejected-permanent..rejected-transient),
//  *   result-source-diagnostic            [3]  Associate-source-diagnostic,
//  *   responding-AP-title                 [4]  Name OPTIONAL,
//  *   responding-AE-qualifier             [5]  RelativeDistinguishedName OPTIONAL,
//  *   responding-AP-invocation-identifier [6]  AP-invocation-identifier  OPTIONAL,
//  *   responding-AE-invocation-identifier [7]  AE-invocation-identifier  OPTIONAL,
//  *   implementation-information          [29] IMPLICIT Implementation-data OPTIONAL,
//  *   user-information                    [30] IMPLICIT Association-informationBindErr{{Protocols}} OPTIONAL }`
//  */
// export default
// class AAREerr_apdu {
//     constructor (

//     ) {}

//     public static fromElement (value: ASN1Element): AAREerr_apdu {
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
//         return new AAREerr_apdu(
//         );
//     }

//     public toElement (): DERElement {
//         return DERElement.fromSequence([

//         ]);
//     }
// }
