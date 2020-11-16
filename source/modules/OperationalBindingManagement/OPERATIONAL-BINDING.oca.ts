/* eslint-disable */
import { OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { OP_BIND_ROLE } from "../OperationalBindingManagement/OP-BIND-ROLE.oca";
import { OP_BINDING_COOP } from "../OperationalBindingManagement/OP-BINDING-COOP.oca";
export { OP_BIND_ROLE } from "../OperationalBindingManagement/OP-BIND-ROLE.oca";
export { OP_BINDING_COOP } from "../OperationalBindingManagement/OP-BINDING-COOP.oca";

/* START_OF_SYMBOL_DEFINITION OPERATIONAL_BINDING */
/**
 * @summary OPERATIONAL_BINDING
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OPERATIONAL-BINDING ::= CLASS {
 *   &Agreement           ,
 *   &Cooperation         OP-BINDING-COOP,
 *   &both                OP-BIND-ROLE OPTIONAL,
 *   &roleA               OP-BIND-ROLE OPTIONAL,
 *   &roleB               OP-BIND-ROLE OPTIONAL,
 *   &id                  OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   AGREEMENT            &Agreement
 *   APPLICATION CONTEXTS &Cooperation
 *   [SYMMETRIC           &both]
 *   [ASYMMETRIC
 *     [ROLE-A              &roleA]
 *     [ROLE-B              &roleB]]
 *   ID                   &id }
 * ```
 *
 * @interface
 */
export interface OPERATIONAL_BINDING<
    Agreement = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "OPERATIONAL-BINDING";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof OPERATIONAL_BINDING<Agreement>]: $.ASN1Decoder<
                OPERATIONAL_BINDING<Agreement>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof OPERATIONAL_BINDING<Agreement>]: $.ASN1Encoder<
                OPERATIONAL_BINDING<Agreement>[_K]
            >;
        }
    >;
    /**
     * @summary &Agreement
     */
    readonly "&Agreement": Agreement;
    /**
     * @summary &Cooperation
     */
    readonly "&Cooperation"?: OP_BINDING_COOP[];
    /**
     * @summary &both
     */
    readonly "&both"?: OP_BIND_ROLE;
    /**
     * @summary &roleA
     */
    readonly "&roleA"?: OP_BIND_ROLE;
    /**
     * @summary &roleB
     */
    readonly "&roleB"?: OP_BIND_ROLE;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
}
/* END_OF_SYMBOL_DEFINITION OPERATIONAL_BINDING */

/* eslint-enable */
