/* eslint-disable */
import { id_op_binding_non_specific_hierarchical } from "../DirectoryOperationalBindingTypes/id-op-binding-non-specific-hierarchical.va";
import { directorySystemAC } from "../DirectoryOSIProtocols/directorySystemAC.oa";
import {
    NonSpecificHierarchicalAgreement,
    _decode_NonSpecificHierarchicalAgreement,
    _encode_NonSpecificHierarchicalAgreement,
} from "../HierarchicalOperationalBindings/NonSpecificHierarchicalAgreement.ta";
import { nonSpecificHierarchicalOperationalBinding_roleA } from "../HierarchicalOperationalBindings/nonSpecificHierarchicalOperationalBinding-roleA.oa";
import { nonSpecificHierarchicalOperationalBinding_roleB } from "../HierarchicalOperationalBindings/nonSpecificHierarchicalOperationalBinding-roleB.oa";
import { OPERATIONAL_BINDING } from "../OperationalBindingManagement/OPERATIONAL-BINDING.oca";

/* START_OF_SYMBOL_DEFINITION nonSpecificHierarchicalOperationalBinding */
/**
 * @summary nonSpecificHierarchicalOperationalBinding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nonSpecificHierarchicalOperationalBinding OPERATIONAL-BINDING ::= {
 *   AGREEMENT             NonSpecificHierarchicalAgreement
 *   APPLICATION CONTEXTS  {{directorySystemAC}}
 *   ASYMMETRIC
 *     ROLE-A { -- superior DSA
 *       ESTABLISHMENT-PARAMETER  NHOBSuperiorToSubordinate
 *       MODIFICATION-INITIATOR   TRUE
 *       MODIFICATION-PARAMETER   NHOBSuperiorToSubordinate
 *       TERMINATION-INITIATOR    TRUE}
 *     ROLE-B { -- subordinate DSA
 *       ESTABLISHMENT-INITIATOR  TRUE
 *       ESTABLISHMENT-PARAMETER  NHOBSubordinateToSuperior
 *       MODIFICATION-INITIATOR   TRUE
 *       MODIFICATION-PARAMETER   NHOBSubordinateToSuperior
 *       TERMINATION-INITIATOR    TRUE}
 *   ID                    id-op-binding-non-specific-hierarchical }
 * ```
 *
 * @constant
 * @type {OPERATIONAL_BINDING<NonSpecificHierarchicalAgreement>}
 * @implements {OPERATIONAL_BINDING<NonSpecificHierarchicalAgreement>}
 */
export const nonSpecificHierarchicalOperationalBinding: OPERATIONAL_BINDING<NonSpecificHierarchicalAgreement> = {
    class: "OPERATIONAL-BINDING",
    decoderFor: {
        "&Agreement": _decode_NonSpecificHierarchicalAgreement,
    },
    encoderFor: {
        "&Agreement": _encode_NonSpecificHierarchicalAgreement,
    },
    "&Cooperation": [
        {
            class: "OP-BINDING-COOP",
            decoderFor: {},
            encoderFor: {},
            "&applContext": directorySystemAC,
        },
    ] /* OBJECT_FIELD_SETTING */,
    "&roleA": nonSpecificHierarchicalOperationalBinding_roleA /* OBJECT_FIELD_SETTING */,
    "&roleB": nonSpecificHierarchicalOperationalBinding_roleB /* OBJECT_FIELD_SETTING */,
    "&id": id_op_binding_non_specific_hierarchical /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Agreement": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION nonSpecificHierarchicalOperationalBinding */

/* eslint-enable */
