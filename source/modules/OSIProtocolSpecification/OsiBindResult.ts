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
//  * `OsiBindResult{APPLICATION-CONTEXT:Protocols} ::= SET {
//  *   mode-selector                    [0] IMPLICIT SET {mode-value  [0] IMPLICIT INTEGER(1)},
//  *   normal-mode-parameters           [2] IMPLICIT SEQUENCE {
//  *     protocol-version                 [0] IMPLICIT BIT STRING {version-1(0)} DEFAULT {version-1},
//  *     responding-presentation-selector [3] IMPLICIT Presentation-selector OPTIONAL,
//  *     presentation-context-definition-result-list [5] IMPLICIT SEQUENCE SIZE (2) OF SEQUENCE {
//  *       result                           [0] IMPLICIT Result(acceptance),
//  *       transfer-syntax-name             [1] IMPLICIT Transfer-syntax-name },
//  *     user-data                            CHOICE {
//  *       fully-encoded-data [APPLICATION 1] IMPLICIT SEQUENCE SIZE(1) OF SEQUENCE {
//  *         transfer-syntax-name               Transfer-syntax-name OPTIONAL,
//  *         presentation-context-identifier    Presentation-context-identifier,
//  *         presentation-data-values           CHOICE {
//  *           single-ASN1-type              [0]  ABSTRACT-SYNTAX.&Type(AARE-apdu{{Protocols}}
//  *   )}}}}}`
//  */
// export default
// class OsiBindResult {
//     constructor (

//     ) {}

//     public static fromElement (value: ASN1Element): OsiBindResult {
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
//         return new OsiBindResult(
//         );
//     }

//     public toElement (): DERElement {
//         return DERElement.fromSequence([

//         ]);
//     }
// }
