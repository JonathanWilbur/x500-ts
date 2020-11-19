/* eslint-disable */
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import { id_asx_utmCoords } from "../SelectedAttributeTypes/id-asx-utmCoords.va";
import {
    UtmCoordinates,
    _decode_UtmCoordinates,
    _encode_UtmCoordinates,
} from "../SelectedAttributeTypes/UtmCoordinates.ta";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_asx_utmCoords } from "../SelectedAttributeTypes/id-asx-utmCoords.va";
export {
    UtmCoordinates,
    _decode_UtmCoordinates,
    _encode_UtmCoordinates,
} from "../SelectedAttributeTypes/UtmCoordinates.ta";

/* START_OF_SYMBOL_DEFINITION utmCoords */
/**
 * @summary utmCoords
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * utmCoords SYNTAX-NAME ::= {
 *   LDAP-DESC         "UTM Coordinates"
 *   DIRECTORY SYNTAX  UtmCoordinates
 *   ID                id-asx-utmCoords }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<UtmCoordinates>}
 * @implements {SYNTAX_NAME<UtmCoordinates>}
 */
export const utmCoords: SYNTAX_NAME<UtmCoordinates> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_UtmCoordinates,
    },
    encoderFor: {
        "&Type": _encode_UtmCoordinates,
    },
    "&ldapDesc": "UTM Coordinates" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_utmCoords /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION utmCoords */

/* eslint-enable */
