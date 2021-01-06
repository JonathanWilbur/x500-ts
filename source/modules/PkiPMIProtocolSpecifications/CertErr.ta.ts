/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertErr_notOK,
    _decode_CertErr_notOK,
    _encode_CertErr_notOK,
} from "../PkiPMIProtocolSpecifications/CertErr-notOK.ta";
import {
    Notifications,
    _decode_Notifications,
    _encode_Notifications,
} from "../PkiPMIProtocolSpecifications/Notifications.ta";
export {
    CertErr_notOK,
    _decode_CertErr_notOK,
    _encode_CertErr_notOK,
} from "../PkiPMIProtocolSpecifications/CertErr-notOK.ta";
export {
    Notifications,
    _decode_Notifications,
    _encode_Notifications,
} from "../PkiPMIProtocolSpecifications/Notifications.ta";

/* START_OF_SYMBOL_DEFINITION CertErr */
/**
 * @summary CertErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertErr ::= SEQUENCE {
 *   notOK  CHOICE {
 *     wrErr   [0]  PkiWaError,
 *     avmpErr [1]  AVMP-error,
 *     ... },
 *   note   Notifications OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class CertErr {
    constructor(
        /**
         * @summary `notOK`.
         * @public
         * @readonly
         */
        readonly notOK: CertErr_notOK,
        /**
         * @summary `note`.
         * @public
         * @readonly
         */
        readonly note: OPTIONAL<Notifications>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertErr
     * @description
     *
     * This takes an `object` and converts it to a `CertErr`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertErr`.
     * @returns {CertErr}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertErr]: CertErr[_K] }>
    ): CertErr {
        return new CertErr(_o.notOK, _o.note, _o._unrecognizedExtensionsList);
    }
}
/* END_OF_SYMBOL_DEFINITION CertErr */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertErr */
/**
 * @summary The Leading Root Component Types of CertErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertErr: $.ComponentSpec[] = [
    new $.ComponentSpec("notOK", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "note",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertErr */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertErr */
/**
 * @summary The Trailing Root Component Types of CertErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertErr: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertErr */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertErr */
/**
 * @summary The Extension Addition Component Types of CertErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertErr: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertErr */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertErr */
let _cached_decoder_for_CertErr: $.ASN1Decoder<CertErr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertErr */

/* START_OF_SYMBOL_DEFINITION _decode_CertErr */
/**
 * @summary Decodes an ASN.1 element into a(n) CertErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertErr} The decoded data structure.
 */
export function _decode_CertErr(el: _Element) {
    if (!_cached_decoder_for_CertErr) {
        _cached_decoder_for_CertErr = function (el: _Element): CertErr {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let notOK!: CertErr_notOK;
            let note: OPTIONAL<Notifications>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                notOK: (_el: _Element): void => {
                    notOK = _decode_CertErr_notOK(_el);
                },
                note: (_el: _Element): void => {
                    note = _decode_Notifications(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertErr,
                _extension_additions_list_spec_for_CertErr,
                _root_component_type_list_2_spec_for_CertErr,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertErr(
                /* SEQUENCE_CONSTRUCTOR_CALL */ notOK,
                note,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertErr(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertErr */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertErr */
let _cached_encoder_for_CertErr: $.ASN1Encoder<CertErr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertErr */

/* START_OF_SYMBOL_DEFINITION _encode_CertErr */
/**
 * @summary Encodes a(n) CertErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertErr, encoded as an ASN.1 Element.
 */
export function _encode_CertErr(
    value: CertErr,
    elGetter: $.ASN1Encoder<CertErr>
) {
    if (!_cached_encoder_for_CertErr) {
        _cached_encoder_for_CertErr = function (
            value: CertErr,
            elGetter: $.ASN1Encoder<CertErr>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CertErr_notOK(
                                value.notOK,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.note === undefined
                                ? undefined
                                : _encode_Notifications(value.note, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CertErr(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertErr */

/* eslint-enable */
