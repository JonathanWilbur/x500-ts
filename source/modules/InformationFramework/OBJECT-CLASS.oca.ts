/* eslint-disable */
import { OBJECT_IDENTIFIER, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export {
    ObjectClassKind,
    ObjectClassKind_abstract /* IMPORTED_ENUMERATION_ITEM */,
    ObjectClassKind_auxiliary /* IMPORTED_ENUMERATION_ITEM */,
    ObjectClassKind_structural /* IMPORTED_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
    _enum_for_ObjectClassKind,
} from "../InformationFramework/ObjectClassKind.ta";

/* START_OF_SYMBOL_DEFINITION OBJECT_CLASS */
/**
 * @summary OBJECT_CLASS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OBJECT-CLASS ::= CLASS {
 *   &Superclasses         OBJECT-CLASS OPTIONAL,
 *   &kind                 ObjectClassKind DEFAULT structural,
 *   &MandatoryAttributes  ATTRIBUTE OPTIONAL,
 *   &OptionalAttributes   ATTRIBUTE OPTIONAL,
 *   &ldapName             SEQUENCE SIZE(1..MAX) OF UTF8String OPTIONAL,
 *   &ldapDesc             UTF8String OPTIONAL,
 *   &id                   OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   [SUBCLASS OF          &Superclasses]
 *   [KIND                 &kind]
 *   [MUST CONTAIN         &MandatoryAttributes]
 *   [MAY CONTAIN          &OptionalAttributes]
 *   [LDAP-NAME            &ldapName]
 *   [LDAP-DESC            &ldapDesc]
 *   ID                    &id }
 * ```
 *
 * @interface
 */
export interface OBJECT_CLASS {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "OBJECT-CLASS";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof OBJECT_CLASS]: $.ASN1Decoder<OBJECT_CLASS[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof OBJECT_CLASS]: $.ASN1Encoder<OBJECT_CLASS[_K]>;
        }
    >;
    /**
     * @summary &Superclasses
     */
    readonly "&Superclasses"?: OBJECT_CLASS[];
    /**
     * @summary &kind
     */
    readonly "&kind"?: ObjectClassKind;
    /**
     * @summary &MandatoryAttributes
     */
    readonly "&MandatoryAttributes"?: ATTRIBUTE[];
    /**
     * @summary &OptionalAttributes
     */
    readonly "&OptionalAttributes"?: ATTRIBUTE[];
    /**
     * @summary &ldapName
     */
    readonly "&ldapName"?: UTF8String[];
    /**
     * @summary &ldapDesc
     */
    readonly "&ldapDesc"?: UTF8String;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
}
/* END_OF_SYMBOL_DEFINITION OBJECT_CLASS */

/* eslint-enable */
