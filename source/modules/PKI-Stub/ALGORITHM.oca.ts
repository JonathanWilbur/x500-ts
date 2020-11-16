/* eslint-disable */
import { OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION ALGORITHM */
/**
 * @summary ALGORITHM
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ALGORITHM ::= CLASS {
 *   &Type          OPTIONAL,
 *   &DynParms      OPTIONAL,
 *   &id            OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   [PARMS         &Type]
 *   [DYN-PARMS     &DynParms ]
 *   IDENTIFIED BY  &id }
 * ```
 *
 * @interface
 */
export interface ALGORITHM<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    DynParms = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "ALGORITHM";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof ALGORITHM<Type, DynParms>]: $.ASN1Decoder<
                ALGORITHM<Type, DynParms>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof ALGORITHM<Type, DynParms>]: $.ASN1Encoder<
                ALGORITHM<Type, DynParms>[_K]
            >;
        }
    >;
    /**
     * @summary &Type
     */
    readonly "&Type": Type;
    /**
     * @summary &DynParms
     */
    readonly "&DynParms": DynParms;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
}
/* END_OF_SYMBOL_DEFINITION ALGORITHM */

/* eslint-enable */
