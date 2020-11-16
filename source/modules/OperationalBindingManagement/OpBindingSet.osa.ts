/* eslint-disable */
import { shadowOperationalBinding } from "../DirectoryShadowAbstractService/shadowOperationalBinding.oa";
import { hierarchicalOperationalBinding } from "../HierarchicalOperationalBindings/hierarchicalOperationalBinding.oa";
import { nonSpecificHierarchicalOperationalBinding } from "../HierarchicalOperationalBindings/nonSpecificHierarchicalOperationalBinding.oa";
import { OPERATIONAL_BINDING } from "../OperationalBindingManagement/OPERATIONAL-BINDING.oca";
export { shadowOperationalBinding } from "../DirectoryShadowAbstractService/shadowOperationalBinding.oa";
export { hierarchicalOperationalBinding } from "../HierarchicalOperationalBindings/hierarchicalOperationalBinding.oa";
export { nonSpecificHierarchicalOperationalBinding } from "../HierarchicalOperationalBindings/nonSpecificHierarchicalOperationalBinding.oa";
export { OPERATIONAL_BINDING } from "../OperationalBindingManagement/OPERATIONAL-BINDING.oca";

/* START_OF_SYMBOL_DEFINITION OpBindingSet */
/**
 * @summary OpBindingSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OpBindingSet OPERATIONAL-BINDING ::= {
 *   shadowOperationalBinding |
 *   hierarchicalOperationalBinding |
 *   nonSpecificHierarchicalOperationalBinding }
 * ```
 *
 * @constant
 * @type {OPERATIONAL_BINDING[]}
 *
 */
export const OpBindingSet: OPERATIONAL_BINDING[] = [
    shadowOperationalBinding,
    hierarchicalOperationalBinding,
    nonSpecificHierarchicalOperationalBinding,
];
/* END_OF_SYMBOL_DEFINITION OpBindingSet */

/* eslint-enable */
