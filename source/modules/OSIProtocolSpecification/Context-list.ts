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
//  * `Context-list ::= SEQUENCE SIZE (2) OF SEQUENCE {
//  *   presentation-context-identifier  Presentation-context-identifier,
//  *   abstract-syntax-name             Abstract-syntax-name,
//  *   transfer-syntax-name-list        SEQUENCE OF Transfer-syntax-name }`
//  */
// export default
// class Context_list {
//     constructor (

//     ) {}

//     public static fromElement (value: ASN1Element): Context_list {
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
//         return new Context_list(
//         );
//     }

//     public toElement (): DERElement {
//         return DERElement.fromSequence([

//         ]);
//     }
// }
