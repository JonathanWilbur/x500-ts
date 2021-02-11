/* eslint-disable */
import { id_op_binding_hierarchical } from "../DirectoryOperationalBindingTypes/id-op-binding-hierarchical.va";
import { directorySystemAC } from "../DirectoryOSIProtocols/directorySystemAC.oa";
import {
    HierarchicalAgreement,
    _decode_HierarchicalAgreement,
    _encode_HierarchicalAgreement,
} from "../HierarchicalOperationalBindings/HierarchicalAgreement.ta";
import { hierarchicalOperationalBinding_roleA } from "../HierarchicalOperationalBindings/hierarchicalOperationalBinding-roleA.oa";
import { hierarchicalOperationalBinding_roleB } from "../HierarchicalOperationalBindings/hierarchicalOperationalBinding-roleB.oa";
import { OPERATIONAL_BINDING } from "../OperationalBindingManagement/OPERATIONAL-BINDING.oca";

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
 * @type {OPERATIONAL_BINDING<HierarchicalAgreement>}
 * @implements {OPERATIONAL_BINDING<HierarchicalAgreement>}
 */
export const hierarchicalOperationalBinding: OPERATIONAL_BINDING<HierarchicalAgreement> = {
    class: "OPERATIONAL-BINDING",
    decoderFor: {
        "&Agreement": _decode_HierarchicalAgreement,
    },
    encoderFor: {
        "&Agreement": _encode_HierarchicalAgreement,
    },
    "&Cooperation": [
        {
            class: "OP-BINDING-COOP",
            decoderFor: {},
            encoderFor: {},
            "&applContext": directorySystemAC,
        },
    ] /* OBJECT_FIELD_SETTING */,
    "&roleA": hierarchicalOperationalBinding_roleA /* OBJECT_FIELD_SETTING */,
    "&roleB": hierarchicalOperationalBinding_roleB /* OBJECT_FIELD_SETTING */,
    "&id": id_op_binding_hierarchical /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Agreement": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION hierarchicalOperationalBinding */

/* eslint-enable */
