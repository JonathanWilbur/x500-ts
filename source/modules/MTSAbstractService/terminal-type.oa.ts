/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
import {
    TerminalType,
    _decode_TerminalType,
    _encode_TerminalType,
} from "../MTSAbstractService/TerminalType.ta";
export { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
export {
    g3_facsimile /* IMPORTED_SHORT_NAMED_INTEGER */,
    g4_facsimile /* IMPORTED_SHORT_NAMED_INTEGER */,
    ia5_terminal /* IMPORTED_SHORT_NAMED_INTEGER */,
    teletex /* IMPORTED_SHORT_NAMED_INTEGER */,
    telex /* IMPORTED_SHORT_NAMED_INTEGER */,
    TerminalType,
    TerminalType_g3_facsimile /* IMPORTED_LONG_NAMED_INTEGER */,
    TerminalType_g4_facsimile /* IMPORTED_LONG_NAMED_INTEGER */,
    TerminalType_ia5_terminal /* IMPORTED_LONG_NAMED_INTEGER */,
    TerminalType_teletex /* IMPORTED_LONG_NAMED_INTEGER */,
    TerminalType_telex /* IMPORTED_LONG_NAMED_INTEGER */,
    TerminalType_videotex /* IMPORTED_LONG_NAMED_INTEGER */,
    videotex /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_TerminalType,
    _encode_TerminalType,
} from "../MTSAbstractService/TerminalType.ta";

/* START_OF_SYMBOL_DEFINITION terminal_type */
/**
 * @summary terminal_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * terminal-type EXTENSION-ATTRIBUTE ::= {TerminalType
 *                                        IDENTIFIED BY  23
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<TerminalType>}
 * @implements {EXTENSION_ATTRIBUTE<TerminalType>}
 */
export const terminal_type: EXTENSION_ATTRIBUTE<TerminalType> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TerminalType,
    },
    encoderFor: {
        "&Type": _encode_TerminalType,
    },
    "&id": 23 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION terminal_type */

/* eslint-enable */
