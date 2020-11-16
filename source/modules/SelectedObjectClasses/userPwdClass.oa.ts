/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { id_oc_userPwdClass } from "../SelectedObjectClasses/id-oc-userPwdClass.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_oc_userPwdClass } from "../SelectedObjectClasses/id-oc-userPwdClass.va";

/* START_OF_SYMBOL_DEFINITION userPwdClass */
/**
 * @summary userPwdClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userPwdClass  OBJECT-CLASS ::= {
 *   KIND          auxiliary
 *   MAY CONTAIN   { userPwd }
 *   ID            id-oc-userPwdClass }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const userPwdClass: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": undefined,
    "&id": id_oc_userPwdClass /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION userPwdClass */

/* eslint-enable */
