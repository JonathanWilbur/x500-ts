/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { ldapSyntaxes } from "../LdapSystemSchema/ldapSyntaxes.oa";
import { attributeTypes } from "../SchemaAdministration/attributeTypes.oa";
import { contextTypes } from "../SchemaAdministration/contextTypes.oa";
import { dITContentRules } from "../SchemaAdministration/dITContentRules.oa";
import { dITContextUse } from "../SchemaAdministration/dITContextUse.oa";
import { dITStructureRules } from "../SchemaAdministration/dITStructureRules.oa";
import { friends } from "../SchemaAdministration/friends.oa";
import { id_soc_subschema } from "../SchemaAdministration/id-soc-subschema.va";
import { matchingRules } from "../SchemaAdministration/matchingRules.oa";
import { matchingRuleUse } from "../SchemaAdministration/matchingRuleUse.oa";
import { nameForms } from "../SchemaAdministration/nameForms.oa";
import { objectClasses } from "../SchemaAdministration/objectClasses.oa";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { ldapSyntaxes } from "../LdapSystemSchema/ldapSyntaxes.oa";
export { attributeTypes } from "../SchemaAdministration/attributeTypes.oa";
export { contextTypes } from "../SchemaAdministration/contextTypes.oa";
export { dITContentRules } from "../SchemaAdministration/dITContentRules.oa";
export { dITContextUse } from "../SchemaAdministration/dITContextUse.oa";
export { dITStructureRules } from "../SchemaAdministration/dITStructureRules.oa";
export { friends } from "../SchemaAdministration/friends.oa";
export { id_soc_subschema } from "../SchemaAdministration/id-soc-subschema.va";
export { matchingRules } from "../SchemaAdministration/matchingRules.oa";
export { matchingRuleUse } from "../SchemaAdministration/matchingRuleUse.oa";
export { nameForms } from "../SchemaAdministration/nameForms.oa";
export { objectClasses } from "../SchemaAdministration/objectClasses.oa";

/* START_OF_SYMBOL_DEFINITION subschema */
/**
 * @summary subschema
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subschema OBJECT-CLASS ::= {
 *   KIND        auxiliary
 *   MAY CONTAIN { dITStructureRules |
 *                 nameForms |
 *                 dITContentRules |
 *                 objectClasses |
 *                 attributeTypes |
 *                 friends |
 *                 contextTypes |
 *                 dITContextUse |
 *                 matchingRules |
 *                 matchingRuleUse |
 *                 ldapSyntaxes }
 *   LDAP-NAME   {"subschema"}
 *   ID          id-soc-subschema }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const subschema: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        dITStructureRules,
        nameForms,
        dITContentRules,
        objectClasses,
        attributeTypes,
        friends,
        contextTypes,
        dITContextUse,
        matchingRules,
        matchingRuleUse,
        ldapSyntaxes,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_soc_subschema /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION subschema */

/* eslint-enable */
