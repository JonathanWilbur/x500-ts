/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { ContextCombination } from "../ServiceAdministration/ContextCombination.ta";
import { ContextProfile } from "../ServiceAdministration/ContextProfile.ta";
import { MatchingUse } from "../ServiceAdministration/MatchingUse.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export {
    ContextCombination,
    _decode_ContextCombination,
    _encode_ContextCombination,
} from "../ServiceAdministration/ContextCombination.ta";
export {
    ContextProfile,
    _decode_ContextProfile,
    _encode_ContextProfile,
} from "../ServiceAdministration/ContextProfile.ta";
export {
    MatchingUse,
    _decode_MatchingUse,
    _encode_MatchingUse,
} from "../ServiceAdministration/MatchingUse.ta";

/* START_OF_SYMBOL_DEFINITION REQUEST_ATTRIBUTE */
/**
 * @summary REQUEST_ATTRIBUTE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * REQUEST-ATTRIBUTE ::= CLASS {
 *   &attributeType         ATTRIBUTE.&id,
 *   &SelectedValues        ATTRIBUTE.&Type                 OPTIONAL,
 *   &DefaultValues         SEQUENCE {
 *     entryType              OBJECT-CLASS.&id            OPTIONAL,
 *     values                 SEQUENCE OF ATTRIBUTE.&Type } OPTIONAL,
 *   &contexts              SEQUENCE OF ContextProfile      OPTIONAL,
 *   &contextCombination    ContextCombination              OPTIONAL,
 *   &MatchingUse           MatchingUse                     OPTIONAL,
 *   &includeSubtypes       BOOLEAN                         DEFAULT FALSE }
 * WITH SYNTAX {
 *   ATTRIBUTE TYPE         &attributeType
 *   [SELECTED VALUES       &SelectedValues]
 *   [DEFAULT VALUES        &DefaultValues]
 *   [CONTEXTS              &contexts]
 *   [CONTEXT COMBINATION   &contextCombination]
 *   [MATCHING USE          &MatchingUse]
 *   [INCLUDE SUBTYPES      &includeSubtypes] }
 * ```
 *
 * @interface
 */
export interface REQUEST_ATTRIBUTE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "REQUEST-ATTRIBUTE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof REQUEST_ATTRIBUTE]: $.ASN1Decoder<
                REQUEST_ATTRIBUTE[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof REQUEST_ATTRIBUTE]: $.ASN1Encoder<
                REQUEST_ATTRIBUTE[_K]
            >;
        }
    >;
    /**
     * @summary &attributeType
     */
    readonly "&attributeType"?: OBJECT_IDENTIFIER;
    /**
     * @summary &SelectedValues
     */
    readonly "&SelectedValues"?: _Element;
    /**
     * @summary &DefaultValues
     */
    readonly "&DefaultValues"?: {
        entryType: OBJECT_IDENTIFIER;
        values: OPTIONAL<_Element[]>;
    };
    /**
     * @summary &contexts
     */
    readonly "&contexts"?: ContextProfile[];
    /**
     * @summary &contextCombination
     */
    readonly "&contextCombination"?: ContextCombination;
    /**
     * @summary &MatchingUse
     */
    readonly "&MatchingUse"?: MatchingUse;
    /**
     * @summary &includeSubtypes
     */
    readonly "&includeSubtypes"?: BOOLEAN;
}
/* END_OF_SYMBOL_DEFINITION REQUEST_ATTRIBUTE */

/* eslint-enable */
