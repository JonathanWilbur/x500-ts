/* eslint-disable */
import { OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION FRIENDS */
/**
 * @summary FRIENDS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FRIENDS ::= CLASS {
 *   &anchor   ATTRIBUTE.&id UNIQUE,
 *   &Friends  ATTRIBUTE }
 * WITH SYNTAX {
 *   ANCHOR    &anchor
 *   FRIENDS   &Friends }
 * ```
 *
 * @interface
 */
export interface FRIENDS {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "FRIENDS";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof FRIENDS]: $.ASN1Decoder<FRIENDS[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof FRIENDS]: $.ASN1Encoder<FRIENDS[_K]>;
        }
    >;
    /**
     * @summary &anchor
     */
    readonly "&anchor"?: OBJECT_IDENTIFIER;
    /**
     * @summary &Friends
     */
    readonly "&Friends"?: ATTRIBUTE[];
}
/* END_OF_SYMBOL_DEFINITION FRIENDS */

/* eslint-enable */
