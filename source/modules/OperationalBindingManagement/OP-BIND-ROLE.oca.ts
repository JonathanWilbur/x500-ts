/* eslint-disable */
import { BOOLEAN } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION OP_BIND_ROLE */
/**
 * @summary OP_BIND_ROLE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OP-BIND-ROLE ::= CLASS {
 *   &establish                BOOLEAN DEFAULT FALSE,
 *   &EstablishParam,
 *   &modify                   BOOLEAN DEFAULT FALSE,
 *   &ModifyParam              OPTIONAL,
 *   &terminate                BOOLEAN DEFAULT FALSE,
 *   &TerminateParam           OPTIONAL }
 * WITH SYNTAX {
 *   [ESTABLISHMENT-INITIATOR  &establish]
 *   ESTABLISHMENT-PARAMETER   &EstablishParam
 *   [MODIFICATION-INITIATOR   &modify]
 *   [MODIFICATION-PARAMETER   &ModifyParam]
 *   [TERMINATION-INITIATOR    &terminate]
 *   [TERMINATION-PARAMETER    &TerminateParam] }
 * ```
 *
 * @interface
 */
export interface OP_BIND_ROLE<
    EstablishParam = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    ModifyParam = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    TerminateParam = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "OP-BIND-ROLE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof OP_BIND_ROLE<
                EstablishParam,
                ModifyParam,
                TerminateParam
            >]: $.ASN1Decoder<
                OP_BIND_ROLE<EstablishParam, ModifyParam, TerminateParam>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof OP_BIND_ROLE<
                EstablishParam,
                ModifyParam,
                TerminateParam
            >]: $.ASN1Encoder<
                OP_BIND_ROLE<EstablishParam, ModifyParam, TerminateParam>[_K]
            >;
        }
    >;
    /**
     * @summary &establish
     */
    readonly "&establish"?: BOOLEAN;
    /**
     * @summary &EstablishParam
     */
    readonly "&EstablishParam": EstablishParam;
    /**
     * @summary &modify
     */
    readonly "&modify"?: BOOLEAN;
    /**
     * @summary &ModifyParam
     */
    readonly "&ModifyParam": ModifyParam;
    /**
     * @summary &terminate
     */
    readonly "&terminate"?: BOOLEAN;
    /**
     * @summary &TerminateParam
     */
    readonly "&TerminateParam": TerminateParam;
}
/* END_OF_SYMBOL_DEFINITION OP_BIND_ROLE */

/* eslint-enable */
