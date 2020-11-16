/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
import { RuleIdentifier } from "../InformationFramework/RuleIdentifier.ta";
import { STRUCTURE_RULE } from "../InformationFramework/STRUCTURE-RULE.oca";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
export {
    RuleIdentifier,
    _decode_RuleIdentifier,
    _encode_RuleIdentifier,
} from "../InformationFramework/RuleIdentifier.ta";
export { STRUCTURE_RULE } from "../InformationFramework/STRUCTURE-RULE.oca";

/* START_OF_SYMBOL_DEFINITION STRUCTURE_RULE */
/**
 * @summary STRUCTURE_RULE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * STRUCTURE-RULE ::= CLASS {
 *   &nameForm               NAME-FORM,
 *   &SuperiorStructureRules STRUCTURE-RULE.&id OPTIONAL,
 *   &id                     RuleIdentifier }
 * WITH SYNTAX {
 *   NAME FORM               &nameForm
 *   [SUPERIOR RULES         &SuperiorStructureRules]
 *   ID                      &id }
 * ```
 *
 * @interface
 */
export interface STRUCTURE_RULE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "STRUCTURE-RULE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof STRUCTURE_RULE]: $.ASN1Decoder<STRUCTURE_RULE[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof STRUCTURE_RULE]: $.ASN1Encoder<STRUCTURE_RULE[_K]>;
        }
    >;
    /**
     * @summary &nameForm
     */
    readonly "&nameForm"?: NAME_FORM;
    /**
     * @summary &SuperiorStructureRules
     */
    readonly "&SuperiorStructureRules"?: RuleIdentifier;
    /**
     * @summary &id
     */
    readonly "&id"?: RuleIdentifier;
}
/* END_OF_SYMBOL_DEFINITION STRUCTURE_RULE */

/* eslint-enable */
