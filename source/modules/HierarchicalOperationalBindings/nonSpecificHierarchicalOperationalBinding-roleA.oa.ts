/* eslint-disable */
import {
    _decode_NHOBSuperiorToSubordinate,
    _encode_NHOBSuperiorToSubordinate,
} from "../HierarchicalOperationalBindings/NHOBSuperiorToSubordinate.ta";
import { OP_BIND_ROLE } from "../OperationalBindingManagement/OP-BIND-ROLE.oca";
export {
    NHOBSuperiorToSubordinate,
    _decode_NHOBSuperiorToSubordinate,
    _encode_NHOBSuperiorToSubordinate,
} from "../HierarchicalOperationalBindings/NHOBSuperiorToSubordinate.ta";
export { OP_BIND_ROLE } from "../OperationalBindingManagement/OP-BIND-ROLE.oca";

/* START_OF_SYMBOL_DEFINITION nonSpecificHierarchicalOperationalBinding_roleA */
/**
 * @summary nonSpecificHierarchicalOperationalBinding_roleA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nonSpecificHierarchicalOperationalBinding-roleA ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {OP_BIND_ROLE}
 * @implements {OP_BIND_ROLE}
 */
export const nonSpecificHierarchicalOperationalBinding_roleA: OP_BIND_ROLE = {
    class: "OP-BIND-ROLE",
    decoderFor: {
        "&EstablishParam": _decode_NHOBSuperiorToSubordinate,
        "&ModifyParam": _decode_NHOBSuperiorToSubordinate,
        "&TerminateParam": undefined,
    },
    encoderFor: {
        "&EstablishParam": _encode_NHOBSuperiorToSubordinate,
        "&ModifyParam": _encode_NHOBSuperiorToSubordinate,
        "&TerminateParam": undefined,
    },
    "&modify": false /* OBJECT_FIELD_SETTING */,
    "&terminate": false /* OBJECT_FIELD_SETTING */,
    "&EstablishParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ModifyParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&TerminateParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&establish": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION nonSpecificHierarchicalOperationalBinding_roleA */

/* eslint-enable */
