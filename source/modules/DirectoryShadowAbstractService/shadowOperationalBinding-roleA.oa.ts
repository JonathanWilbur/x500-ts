/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { OP_BIND_ROLE } from "../OperationalBindingManagement/OP-BIND-ROLE.oca";
export { OP_BIND_ROLE } from "../OperationalBindingManagement/OP-BIND-ROLE.oca";

/* START_OF_SYMBOL_DEFINITION shadowOperationalBinding_roleA */
/**
 * @summary shadowOperationalBinding_roleA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * shadowOperationalBinding-roleA ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {OP_BIND_ROLE}
 * @implements {OP_BIND_ROLE}
 */
export const shadowOperationalBinding_roleA: OP_BIND_ROLE = {
    class: "OP-BIND-ROLE",
    decoderFor: {
        "&EstablishParam": $._decodeNull,
        "&ModifyParam": undefined,
        "&TerminateParam": undefined,
    },
    encoderFor: {
        "&EstablishParam": $._encodeNull,
        "&ModifyParam": undefined,
        "&TerminateParam": undefined,
    },
    "&establish": false /* OBJECT_FIELD_SETTING */,
    "&modify": false /* OBJECT_FIELD_SETTING */,
    "&terminate": false /* OBJECT_FIELD_SETTING */,
    "&EstablishParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ModifyParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&TerminateParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION shadowOperationalBinding_roleA */

/* eslint-enable */
