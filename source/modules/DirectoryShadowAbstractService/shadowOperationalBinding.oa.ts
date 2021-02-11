/* eslint-disable */
import { id_op_binding_shadow } from "../DirectoryOperationalBindingTypes/id-op-binding-shadow.va";
import { shadowConsumerInitiatedAC } from "../DirectoryOSIProtocols/shadowConsumerInitiatedAC.oa";
import { shadowSupplierInitiatedAC } from "../DirectoryOSIProtocols/shadowSupplierInitiatedAC.oa";
import { All_operations_consumer_initiated } from "../DirectoryShadowAbstractService/All-operations-consumer-initiated.osa";
import { All_operations_supplier_initiated } from "../DirectoryShadowAbstractService/All-operations-supplier-initiated.osa";
import {
    ShadowingAgreementInfo,
    _decode_ShadowingAgreementInfo,
    _encode_ShadowingAgreementInfo,
} from "../DirectoryShadowAbstractService/ShadowingAgreementInfo.ta";
import { shadowOperationalBinding_roleA } from "../DirectoryShadowAbstractService/shadowOperationalBinding-roleA.oa";
import { shadowOperationalBinding_roleB } from "../DirectoryShadowAbstractService/shadowOperationalBinding-roleB.oa";
import { OPERATIONAL_BINDING } from "../OperationalBindingManagement/OPERATIONAL-BINDING.oca";

/* START_OF_SYMBOL_DEFINITION shadowOperationalBinding */
/**
 * @summary shadowOperationalBinding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * shadowOperationalBinding OPERATIONAL-BINDING ::= {
 *   AGREEMENT             ShadowingAgreementInfo
 *   APPLICATION CONTEXTS
 *     {{shadowSupplierInitiatedAC
 *       APPLIES TO  {All-operations-supplier-initiated}} |
 *     {shadowConsumerInitiatedAC
 *       APPLIES TO  {All-operations-consumer-initiated}}}
 *   ASYMMETRIC
 *     ROLE-A { -- shadow supplier role
 *       ESTABLISHMENT-INITIATOR  TRUE
 *       ESTABLISHMENT-PARAMETER  NULL
 *       MODIFICATION-INITIATOR   TRUE
 *       TERMINATION-INITIATOR    TRUE }
 *     ROLE-B { -- shadow consumer role
 *       ESTABLISHMENT-INITIATOR  TRUE
 *       ESTABLISHMENT-PARAMETER  NULL
 *       MODIFICATION-INITIATOR   TRUE
 *       MODIFICATION-PARAMETER   ModificationParameter
 *       TERMINATION-INITIATOR    TRUE}
 *   ID                    id-op-binding-shadow }
 * ```
 *
 * @constant
 * @type {OPERATIONAL_BINDING<ShadowingAgreementInfo>}
 * @implements {OPERATIONAL_BINDING<ShadowingAgreementInfo>}
 */
export const shadowOperationalBinding: OPERATIONAL_BINDING<ShadowingAgreementInfo> = {
    class: "OPERATIONAL-BINDING",
    decoderFor: {
        "&Agreement": _decode_ShadowingAgreementInfo,
    },
    encoderFor: {
        "&Agreement": _encode_ShadowingAgreementInfo,
    },
    "&Cooperation": [
        {
            class: "OP-BINDING-COOP",
            decoderFor: {},
            encoderFor: {},
            "&applContext": shadowSupplierInitiatedAC,
            "&Operations": All_operations_supplier_initiated,
        },
        {
            class: "OP-BINDING-COOP",
            decoderFor: {},
            encoderFor: {},
            "&applContext": shadowConsumerInitiatedAC,
            "&Operations": All_operations_consumer_initiated,
        },
    ] /* OBJECT_FIELD_SETTING */,
    "&roleA": shadowOperationalBinding_roleA /* OBJECT_FIELD_SETTING */,
    "&roleB": shadowOperationalBinding_roleB /* OBJECT_FIELD_SETTING */,
    "&id": id_op_binding_shadow /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Agreement": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION shadowOperationalBinding */

/* eslint-enable */
