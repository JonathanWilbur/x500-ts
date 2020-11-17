/* eslint-disable */
import { id_op_binding_hierarchical } from "../DirectoryOperationalBindingTypes/id-op-binding-hierarchical.va";
import {
    _decode_HierarchicalAgreement,
    _encode_HierarchicalAgreement,
} from "../HierarchicalOperationalBindings/HierarchicalAgreement.ta";
import { hierarchicalOperationalBinding_roleA } from "../HierarchicalOperationalBindings/hierarchicalOperationalBinding-roleA.oa";
import { hierarchicalOperationalBinding_roleB } from "../HierarchicalOperationalBindings/hierarchicalOperationalBinding-roleB.oa";
import { OPERATIONAL_BINDING } from "../OperationalBindingManagement/OPERATIONAL-BINDING.oca";
export { id_op_binding_hierarchical } from "../DirectoryOperationalBindingTypes/id-op-binding-hierarchical.va";
export {
    HierarchicalAgreement,
    _decode_HierarchicalAgreement,
    _encode_HierarchicalAgreement,
} from "../HierarchicalOperationalBindings/HierarchicalAgreement.ta";
export { hierarchicalOperationalBinding_roleA } from "../HierarchicalOperationalBindings/hierarchicalOperationalBinding-roleA.oa";
export { hierarchicalOperationalBinding_roleB } from "../HierarchicalOperationalBindings/hierarchicalOperationalBinding-roleB.oa";
export { OP_BIND_ROLE } from "../OperationalBindingManagement/OP-BIND-ROLE.oca";
export { OP_BINDING_COOP } from "../OperationalBindingManagement/OP-BINDING-COOP.oca";
export { OPERATIONAL_BINDING } from "../OperationalBindingManagement/OPERATIONAL-BINDING.oca";

/* START_OF_SYMBOL_DEFINITION hierarchicalOperationalBinding */
/**
 * @summary hierarchicalOperationalBinding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hierarchicalOperationalBinding OPERATIONAL-BINDING ::= {
 *   AGREEMENT             HierarchicalAgreement
 *   APPLICATION CONTEXTS  {{directorySystemAC}}
 *   ASYMMETRIC
 *     ROLE-A { -- superior DSA
 *       ESTABLISHMENT-INITIATOR  TRUE
 *       ESTABLISHMENT-PARAMETER  SuperiorToSubordinate
 *       MODIFICATION-INITIATOR   TRUE
 *       MODIFICATION-PARAMETER   SuperiorToSubordinateModification
 *       TERMINATION-INITIATOR    TRUE }
 *     ROLE-B { -- subordinate DSA
 *       ESTABLISHMENT-INITIATOR  TRUE
 *       ESTABLISHMENT-PARAMETER  SubordinateToSuperior
 *       MODIFICATION-INITIATOR   TRUE
 *       MODIFICATION-PARAMETER   SubordinateToSuperior
 *       TERMINATION-INITIATOR    TRUE }
 *   ID                    id-op-binding-hierarchical }
 * ```
 *
 * @constant
 * @type {OPERATIONAL_BINDING}
 * @implements {OPERATIONAL_BINDING}
 */
export const hierarchicalOperationalBinding: OPERATIONAL_BINDING = {
    class: "OPERATIONAL-BINDING",
    decoderFor: {
        "&Agreement": _decode_HierarchicalAgreement,
    },
    encoderFor: {
        "&Agreement": _encode_HierarchicalAgreement,
    },
    "&Cooperation": [
        /* COULD_NOT_COMPILE_SEQUENCE_OR_SET_OF_VALUE 0 */
    ] /* OBJECT_FIELD_SETTING */,
    "&roleA": hierarchicalOperationalBinding_roleA /* OBJECT_FIELD_SETTING */,
    "&roleB": hierarchicalOperationalBinding_roleB /* OBJECT_FIELD_SETTING */,
    "&id": id_op_binding_hierarchical /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Agreement": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION hierarchicalOperationalBinding */

/* eslint-enable */
