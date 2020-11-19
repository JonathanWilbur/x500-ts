/* eslint-disable */
import {
    SuperiorToSubordinate,
    _decode_SuperiorToSubordinate,
    _encode_SuperiorToSubordinate,
} from "../HierarchicalOperationalBindings/SuperiorToSubordinate.ta";
import {
    SuperiorToSubordinateModification,
    _decode_SuperiorToSubordinateModification,
    _encode_SuperiorToSubordinateModification,
} from "../HierarchicalOperationalBindings/SuperiorToSubordinateModification.ta";
import { OP_BIND_ROLE } from "../OperationalBindingManagement/OP-BIND-ROLE.oca";
export {
    SuperiorToSubordinate,
    _decode_SuperiorToSubordinate,
    _encode_SuperiorToSubordinate,
} from "../HierarchicalOperationalBindings/SuperiorToSubordinate.ta";
export {
    SuperiorToSubordinateModification,
    _decode_SuperiorToSubordinateModification,
    _encode_SuperiorToSubordinateModification,
} from "../HierarchicalOperationalBindings/SuperiorToSubordinateModification.ta";
export { OP_BIND_ROLE } from "../OperationalBindingManagement/OP-BIND-ROLE.oca";

/* START_OF_SYMBOL_DEFINITION hierarchicalOperationalBinding_roleA */
/**
 * @summary hierarchicalOperationalBinding_roleA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hierarchicalOperationalBinding-roleA ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {OP_BIND_ROLE<SuperiorToSubordinate, SuperiorToSubordinateModification>}
 * @implements {OP_BIND_ROLE<SuperiorToSubordinate, SuperiorToSubordinateModification>}
 */
export const hierarchicalOperationalBinding_roleA: OP_BIND_ROLE<
    SuperiorToSubordinate,
    SuperiorToSubordinateModification
> = {
    class: "OP-BIND-ROLE",
    decoderFor: {
        "&EstablishParam": _decode_SuperiorToSubordinate,
        "&ModifyParam": _decode_SuperiorToSubordinateModification,
        "&TerminateParam": undefined,
    },
    encoderFor: {
        "&EstablishParam": _encode_SuperiorToSubordinate,
        "&ModifyParam": _encode_SuperiorToSubordinateModification,
        "&TerminateParam": undefined,
    },
    "&establish": false /* OBJECT_FIELD_SETTING */,
    "&modify": false /* OBJECT_FIELD_SETTING */,
    "&terminate": false /* OBJECT_FIELD_SETTING */,
    "&EstablishParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ModifyParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&TerminateParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION hierarchicalOperationalBinding_roleA */

/* eslint-enable */
