/* eslint-disable */
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import { id_lsx_postalAddr } from "../SelectedAttributeTypes/id-lsx-postalAddr.va";
import {
    PostalAddress,
    _decode_PostalAddress,
    _encode_PostalAddress,
} from "../SelectedAttributeTypes/PostalAddress.ta";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_lsx_postalAddr } from "../SelectedAttributeTypes/id-lsx-postalAddr.va";
export {
    PostalAddress,
    _decode_PostalAddress,
    _encode_PostalAddress,
} from "../SelectedAttributeTypes/PostalAddress.ta";

/* START_OF_SYMBOL_DEFINITION postalAddr */
/**
 * @summary postalAddr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * postalAddr SYNTAX-NAME ::= {
 *   LDAP-DESC         "Postal Address"
 *   DIRECTORY SYNTAX  PostalAddress
 *   ID                id-lsx-postalAddr }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<PostalAddress>}
 * @implements {SYNTAX_NAME<PostalAddress>}
 */
export const postalAddr: SYNTAX_NAME<PostalAddress> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_PostalAddress,
    },
    encoderFor: {
        "&Type": _encode_PostalAddress,
    },
    "&ldapDesc": "Postal Address" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_postalAddr /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION postalAddr */

/* eslint-enable */
