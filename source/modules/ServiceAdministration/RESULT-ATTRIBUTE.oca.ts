/* eslint-disable */
import { ASN1Element as _Element, NULL, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { ContextProfile } from "../ServiceAdministration/ContextProfile.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    ContextProfile,
    _decode_ContextProfile,
    _encode_ContextProfile,
} from "../ServiceAdministration/ContextProfile.ta";

/* START_OF_SYMBOL_DEFINITION RESULT_ATTRIBUTE */
/**
 * @summary RESULT_ATTRIBUTE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RESULT-ATTRIBUTE ::= CLASS {
 *   &attributeType         ATTRIBUTE.&id,
 *   &outputValues          CHOICE {
 *     selectedValues         SEQUENCE OF ATTRIBUTE.&Type,
 *     matchedValuesOnly      NULL }                      OPTIONAL,
 *   &contexts              ContextProfile                  OPTIONAL }
 * WITH SYNTAX {
 *   ATTRIBUTE TYPE        &attributeType
 *   [OUTPUT VALUES        &outputValues]
 *   [CONTEXTS             &contexts] }
 * ```
 *
 * @interface
 */
export interface RESULT_ATTRIBUTE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "RESULT-ATTRIBUTE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof RESULT_ATTRIBUTE]: $.ASN1Decoder<RESULT_ATTRIBUTE[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof RESULT_ATTRIBUTE]: $.ASN1Encoder<RESULT_ATTRIBUTE[_K]>;
        }
    >;
    /**
     * @summary &attributeType
     */
    readonly "&attributeType"?: OBJECT_IDENTIFIER;
    /**
     * @summary &outputValues
     */
    readonly "&outputValues"?:
        | { selectedValues: _Element[] }
        | { matchedValuesOnly: NULL };
    /**
     * @summary &contexts
     */
    readonly "&contexts"?: ContextProfile;
}
/* END_OF_SYMBOL_DEFINITION RESULT_ATTRIBUTE */

/* eslint-enable */
