/**
 * @module ProtProtocols
 * @summary The ASN.1 module `ProtProtocols`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.protProtocols.9
 * IRI: undefined
 * EXTENSIBLE: false
 * ENCODINGREF: undefined
 * FILE: undefined
 *
 * This file was compiled by Wildboar Software's ASN.1 Compiler.
 *
 * @see {@link https://wildboarsoftware.com|Wildboar Software's Website}
 * /


/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { _decode_AvlProt, _encode_AvlProt } from "./AVL-management";
import { _decode_CasubProt, _encode_CasubProt } from "./CaSubscription";
import { id_wrprot } from "./PKI-Stub";
import { _decode_TBprot, _encode_TBprot } from "./TrustBroker";
import { WRAPPED_PROT } from "./Wrapper";
export { AvlProt, _decode_AvlProt, _encode_AvlProt } from "./AVL-management";
export {
    CasubProt,
    _decode_CasubProt,
    _encode_CasubProt,
} from "./CaSubscription";
export { id_wrprot } from "./PKI-Stub";
export { TBprot, _decode_TBprot, _encode_TBprot } from "./TrustBroker";
export { WRAPPED_PROT } from "./Wrapper";

/**
 * @summary id_avlprot
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-avlprot          OBJECT IDENTIFIER ::= {id-wrprot 0}
 * ```
 *
 * @constant
 */
export const id_avlprot: OBJECT_IDENTIFIER = new _OID([0], id_wrprot);

/**
 * @summary avlProt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * avlProt WRAPPED-PROT ::= {
 *                  AvlProt
 *   IDENTIFIED BY  id-avlprot }
 * ```
 *
 * @constant
 * @type {WRAPPED_PROT}
 * @implements {WRAPPED_PROT}
 */
export const avlProt: WRAPPED_PROT = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_AvlProt,
    },
    encoderFor: {
        "&Type": _encode_AvlProt,
    },
    "&id": id_avlprot /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_casubprot
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-casubprot        OBJECT IDENTIFIER ::= {id-wrprot 1}
 * ```
 *
 * @constant
 */
export const id_casubprot: OBJECT_IDENTIFIER = new _OID([1], id_wrprot);

/**
 * @summary casubProt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * casubProt WRAPPED-PROT ::= {
 *                  CasubProt
 *   IDENTIFIED BY  id-casubprot }
 * ```
 *
 * @constant
 * @type {WRAPPED_PROT}
 * @implements {WRAPPED_PROT}
 */
export const casubProt: WRAPPED_PROT = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_CasubProt,
    },
    encoderFor: {
        "&Type": _encode_CasubProt,
    },
    "&id": id_casubprot /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_tbprot
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-tbprot           OBJECT IDENTIFIER ::= {id-wrprot 2}
 * ```
 *
 * @constant
 */
export const id_tbprot: OBJECT_IDENTIFIER = new _OID([2], id_wrprot);

/**
 * @summary tbprot
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * tbprot WRAPPED-PROT ::= {
 *                  TBprot
 *   IDENTIFIED BY  id-tbprot }
 * ```
 *
 * @constant
 * @type {WRAPPED_PROT}
 * @implements {WRAPPED_PROT}
 */
export const tbprot: WRAPPED_PROT = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_TBprot,
    },
    encoderFor: {
        "&Type": _encode_TBprot,
    },
    "&id": id_tbprot /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary SupportedProtSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedProtSet WRAPPED-PROT ::= {avlProt | casubProt | tbprot }
 * ```
 *
 * @constant
 * @type {WRAPPED_PROT[]}
 *
 */
export const SupportedProtSet: WRAPPED_PROT[] = [avlProt, casubProt, tbprot];

/* END_MODULE ProtProtocols */
/* eslint-enable */
