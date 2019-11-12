// import {
//     ASN1Element,
//     ASN1Construction,
//     ASN1TagClass,
//     DERElement,
//     ASN1UniversalType,
//     ConstructedElementSpecification,
//     validateConstruction,
// } from "asn1-ts";
// import Result from "./Result";
// import Transfer_syntax_name from "./Transfer-syntax-name";

// /**
//  * `Result-list ::=
//  *   SEQUENCE SIZE (2) OF SEQUENCE {
//  *     result                [0] IMPLICIT Result,
//  *     transfer-syntax-name  [1] IMPLICIT Transfer-syntax-name   OPTIONAL,
//  *     provider-reason       [2] IMPLICIT INTEGER {
//  *       reason-not-specified                     (0),
//  *       abstract-syntax-not-supported            (1),
//  *       proposed-transfer-syntaxes-not-supported (2)} OPTIONAL}`
//  */
// export default
// class Result_list {
//     constructor (
//         readonly sequence: [
//             {
//                 result: Result;
//                 transferSyntaxName: Transfer_syntax_name | undefined;
//                 providerReason: number | undefined;
//             },
//             {
//                 result: Result;
//                 transferSyntaxName: Transfer_syntax_name | undefined;
//                 providerReason: number | undefined;
//             },
//         ],
//     ) {}

//     public static fromElement (value: ASN1Element): Result_list {
//         // const sequence = [
//         //     {
//         //         result: Result
//         //         transferSyntaxName: Transfer_syntax_name | undefined;
//         //         providerReason: number | undefined;
//         //     },
//         //     {
//         //         result: Result;
//         //         transferSyntaxName: Transfer_syntax_name | undefined;
//         //         providerReason: number | undefined;
//         //     },
//         // ];
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
//         return new Result_list(sequence);
//     }

//     public toElement (): DERElement {
//         return DERElement.fromSequence([

//         ]);
//     }
// }
