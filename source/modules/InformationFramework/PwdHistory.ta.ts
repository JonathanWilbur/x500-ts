/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION PwdHistory */
/**
 * @summary PwdHistory
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PwdHistory{ATTRIBUTE:passwordAttribute} ::= SEQUENCE {
 *   time       GeneralizedTime,
 *   password   passwordAttribute.&Type,
 *   ...}
 * ```
 *
 * @class
 */
export class PwdHistory {
    constructor(
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: GeneralizedTime,
        /**
         * @summary `password`.
         * @public
         * @readonly
         */
        readonly password: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PwdHistory
     * @description
     *
     * This takes an `object` and converts it to a `PwdHistory`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PwdHistory`.
     * @returns {PwdHistory}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof PwdHistory]: PwdHistory[_K] }>
    ): PwdHistory {
        return new PwdHistory(
            _o.time,
            _o.password,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION PwdHistory */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PwdHistory */
/**
 * @summary The Leading Root Component Types of PwdHistory
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PwdHistory: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "time",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec("password", false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PwdHistory */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PwdHistory */
/**
 * @summary The Trailing Root Component Types of PwdHistory
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PwdHistory: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PwdHistory */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PwdHistory */
/**
 * @summary The Extension Addition Component Types of PwdHistory
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PwdHistory: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PwdHistory */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PwdHistory */
let _cached_decoder_for_PwdHistory: $.ASN1Decoder<PwdHistory> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PwdHistory */

/* START_OF_SYMBOL_DEFINITION _decode_PwdHistory */
/**
 * @summary Decodes an ASN.1 element into a(n) PwdHistory
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PwdHistory} The decoded data structure.
 */
export function _decode_PwdHistory(el: _Element) {
    if (!_cached_decoder_for_PwdHistory) {
        _cached_decoder_for_PwdHistory = function (el: _Element): PwdHistory {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "PwdHistory contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "time";
            sequence[1].name = "password";
            let time!: GeneralizedTime;
            let password!: _Element;
            time = $._decodeGeneralizedTime(sequence[0]);
            password = $._decodeAny(sequence[1]);
            return new PwdHistory(time, password, sequence.slice(2));
        };
    }
    return _cached_decoder_for_PwdHistory(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PwdHistory */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PwdHistory */
let _cached_encoder_for_PwdHistory: $.ASN1Encoder<PwdHistory> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PwdHistory */

/* START_OF_SYMBOL_DEFINITION _encode_PwdHistory */
/**
 * @summary Encodes a(n) PwdHistory into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PwdHistory, encoded as an ASN.1 Element.
 */
export function _encode_PwdHistory(
    value: PwdHistory,
    elGetter: $.ASN1Encoder<PwdHistory>
) {
    if (!_cached_encoder_for_PwdHistory) {
        _cached_encoder_for_PwdHistory = function (
            value: PwdHistory,
            elGetter: $.ASN1Encoder<PwdHistory>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeGeneralizedTime(
                                value.time,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeAny(
                                value.password,
                                $.BER
                            ),
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
    return _cached_encoder_for_PwdHistory(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PwdHistory */

/* eslint-enable */
