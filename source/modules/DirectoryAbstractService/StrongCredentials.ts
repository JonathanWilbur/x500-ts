// TODO: Blocked on Token, which is blocked on SIGNED.

// import {
//     ASN1Element,
//     ASN1Construction,
//     ASN1TagClass,
//     DERElement,
//     ASN1UniversalType,
// } from "asn1-ts";
// import validateTag from "../../validateTag";
// import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
// import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
// import DistinguishedName from "../InformationFramework/DistinguishedName";
// import Attribute from "../InformationFramework/Attribute";
// import SecurityParameters from "./SecurityParameters";
// import CertificationPath from "../AuthenticationFramework/CertificationPath";

// /**
//  * `StrongCredentials ::= SET {
//  *   certification-path          [0]  CertificationPath OPTIONAL,
//  *   bind-token                  [1]  Token,
//  *   name                        [2]  DistinguishedName OPTIONAL,
//  *   attributeCertificationPath  [3]  AttributeCertificationPath OPTIONAL,
//  *   ... }`
//  */
// export default
// class StrongCredentials {
//     constructor (
//         readonly certificationPath: CertificationPath | undefined,
//         readonly bindToken:
//     ) {}

//     public static fromElement (value: ASN1Element): StrongCredentials {
//         let securityParameters: SecurityParameters | undefined = undefined;
//         let performer: DistinguishedName | undefined = undefined;
//         let aliasDereferenced: boolean = false;
//         let notification: Attribute[] | undefined = undefined;

//         value.set.forEach((element) => {
//             if (element.tagClass !== ASN1TagClass.context) {
//                 return;
//             }
//             switch (element.tagNumber) {
//             case (30): {
//                 securityParameters = SecurityParameters.fromElement(element);
//                 break;
//             }
//             case (29): {
//                 performer = element.sizeConstrainedSequenceOf(1)
//                     .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
//                         validateTag(rdnElement as DERElement, `issuer[${rdnIndex}]`,
//                             [ ASN1TagClass.universal ],
//                             [ ASN1Construction.constructed ],
//                             [ ASN1UniversalType.set ],
//                         );
//                         return rdnElement.sizeConstrainedSetOf(1)
//                             .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
//                                 validateTag(atavElement as DERElement, `issuer[${rdnIndex}][${atavIndex}]`,
//                                     [ ASN1TagClass.universal ],
//                                     [ ASN1Construction.constructed ],
//                                     [ ASN1UniversalType.sequence ],
//                                 );
//                                 return AttributeTypeAndValue.fromElement(atavElement as DERElement);
//                             });
//                     });
//                 break;
//             }
//             case (28): {
//                 aliasDereferenced = element.boolean;
//                 break;
//             }
//             case (27): {
//                 notification = element.sizeConstrainedSequenceOf(1)
//                     .map((attr) => Attribute.fromElement(attr as DERElement));
//                 break;
//             }
//             default: { break; }
//             }
//         });

//         return new StrongCredentials(

//         );
//     }

//     public toElement (): DERElement {
//         return DERElement.fromSet([

//         ]);
//     }
// }
