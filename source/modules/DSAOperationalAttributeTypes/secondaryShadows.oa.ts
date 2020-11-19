/* eslint-disable */
import { id_doa_secondaryShadows } from "../DSAOperationalAttributeTypes/id-doa-secondaryShadows.va";
import {
    SupplierAndConsumers,
    _decode_SupplierAndConsumers,
    _encode_SupplierAndConsumers,
} from "../DSAOperationalAttributeTypes/SupplierAndConsumers.ta";
import { supplierAndConsumersMatch } from "../DSAOperationalAttributeTypes/supplierAndConsumersMatch.oa";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
export { id_doa_secondaryShadows } from "../DSAOperationalAttributeTypes/id-doa-secondaryShadows.va";
export {
    SupplierAndConsumers,
    _decode_SupplierAndConsumers,
    _encode_SupplierAndConsumers,
} from "../DSAOperationalAttributeTypes/SupplierAndConsumers.ta";
export { supplierAndConsumersMatch } from "../DSAOperationalAttributeTypes/supplierAndConsumersMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    AttributeUsage,
    AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
    _enum_for_AttributeUsage,
} from "../InformationFramework/AttributeUsage.ta";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";

/* START_OF_SYMBOL_DEFINITION secondaryShadows */
/**
 * @summary secondaryShadows
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * secondaryShadows ATTRIBUTE ::= {
 *   WITH SYNTAX             SupplierAndConsumers
 *   EQUALITY MATCHING RULE  supplierAndConsumersMatch
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   dSAOperation
 *   ID                      id-doa-secondaryShadows }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<SupplierAndConsumers>}
 * @implements {ATTRIBUTE<SupplierAndConsumers>}
 */
export const secondaryShadows: ATTRIBUTE<SupplierAndConsumers> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SupplierAndConsumers,
    },
    encoderFor: {
        "&Type": _encode_SupplierAndConsumers,
    },
    "&equality-match": supplierAndConsumersMatch /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage": dSAOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_doa_secondaryShadows /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION secondaryShadows */

/* eslint-enable */
