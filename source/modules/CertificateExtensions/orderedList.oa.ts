/* eslint-disable */
import { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
import { id_ce_orderedList } from "../CertificateExtensions/id-ce-orderedList.va";
import {
    _decode_OrderedListSyntax,
    _encode_OrderedListSyntax,
} from "../CertificateExtensions/OrderedListSyntax.ta";
export { EXTENSION } from "../AuthenticationFramework/EXTENSION.oca";
export { id_ce_orderedList } from "../CertificateExtensions/id-ce-orderedList.va";
export {
    ascRevDate /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ascSerialNum /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    OrderedListSyntax,
    OrderedListSyntax_ascRevDate /* IMPORTED_LONG_ENUMERATION_ITEM */,
    OrderedListSyntax_ascSerialNum /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_OrderedListSyntax,
    _encode_OrderedListSyntax,
    _enum_for_OrderedListSyntax,
} from "../CertificateExtensions/OrderedListSyntax.ta";

/* START_OF_SYMBOL_DEFINITION orderedList */
/**
 * @summary orderedList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * orderedList EXTENSION ::= {
 *   SYNTAX         OrderedListSyntax
 *   IDENTIFIED BY  id-ce-orderedList }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const orderedList: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_OrderedListSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_OrderedListSyntax,
    },
    "&id": id_ce_orderedList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION orderedList */

/* eslint-enable */
