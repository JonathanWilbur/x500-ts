/* eslint-disable */
import {
    _decode_SubordinateToSuperior,
    _encode_SubordinateToSuperior,
} from "../HierarchicalOperationalBindings/SubordinateToSuperior.ta";
import { OP_BIND_ROLE } from "../OperationalBindingManagement/OP-BIND-ROLE.oca";
export {
    SubordinateToSuperior,
    _decode_SubordinateToSuperior,
    _encode_SubordinateToSuperior,
} from "../HierarchicalOperationalBindings/SubordinateToSuperior.ta";
export { OP_BIND_ROLE } from "../OperationalBindingManagement/OP-BIND-ROLE.oca";

/* START_OF_SYMBOL_DEFINITION hierarchicalOperationalBinding_roleB */
/**
 * @summary hierarchicalOperationalBinding_roleB
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hierarchicalOperationalBinding-roleB ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {OP_BIND_ROLE}
 * @implements {OP_BIND_ROLE}
 */
export const hierarchicalOperationalBinding_roleB: OP_BIND_ROLE = {
    class: "OP-BIND-ROLE",
    decoderFor: {
        "&EstablishParam": _decode_SubordinateToSuperior,
        "&ModifyParam": _decode_SubordinateToSuperior,
        "&TerminateParam": undefined,
    },
    encoderFor: {
        "&EstablishParam": _encode_SubordinateToSuperior,
        "&ModifyParam": _encode_SubordinateToSuperior,
        "&TerminateParam": undefined,
    },
    "&establish": false /* OBJECT_FIELD_SETTING */,
    "&modify": false /* OBJECT_FIELD_SETTING */,
    "&terminate": false /* OBJECT_FIELD_SETTING */,
    "&EstablishParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ModifyParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&TerminateParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION hierarchicalOperationalBinding_roleB */

/* eslint-enable */
