/* eslint-disable */
import { MAPPING_BASED_MATCHING } from "../InformationFramework/MAPPING-BASED-MATCHING.oca";
export { MAPPING_BASED_MATCHING } from "../InformationFramework/MAPPING-BASED-MATCHING.oca";

/* START_OF_SYMBOL_DEFINITION ZONAL_MATCHING */
/**
 * @summary ZONAL_MATCHING
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ZONAL-MATCHING ::= MAPPING-BASED-MATCHING{ZonalSelect, TRUE, ZonalResult, zonalMatch.&id}
 * ```
 *
 * @interface
 */
export type ZONAL_MATCHING = MAPPING_BASED_MATCHING<ZonalSelect, ZonalResult>;
/* END_OF_SYMBOL_DEFINITION ZONAL_MATCHING */

/* eslint-enable */
