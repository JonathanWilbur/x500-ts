/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    HASH,
    _get_decoder_for_HASH,
    _get_encoder_for_HASH,
} from "../AuthenticationFramework/HASH.ta";
import {
    HashedPolicyInfo,
    _decode_HashedPolicyInfo,
    _encode_HashedPolicyInfo,
} from "../AuthenticationFramework/HashedPolicyInfo.ta";
import {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "../CertificateExtensions/GeneralNames.ta";
export {
    HASH,
    _get_decoder_for_HASH,
    _get_encoder_for_HASH,
} from "../AuthenticationFramework/HASH.ta";
export {
    HashedPolicyInfo,
    _decode_HashedPolicyInfo,
    _encode_HashedPolicyInfo,
} from "../AuthenticationFramework/HashedPolicyInfo.ta";
export {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "../CertificateExtensions/GeneralNames.ta";

/* START_OF_SYMBOL_DEFINITION InfoSyntax_pointer */
/**
 * @summary InfoSyntax_pointer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InfoSyntax-pointer ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class InfoSyntax_pointer {
    constructor(
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: GeneralNames,
        /**
         * @summary `hash`.
         * @public
         * @readonly
         */
        readonly hash: OPTIONAL<HASH<HashedPolicyInfo>>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a InfoSyntax_pointer
     * @description
     *
     * This takes an `object` and converts it to a `InfoSyntax_pointer`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InfoSyntax_pointer`.
     * @returns {InfoSyntax_pointer}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof InfoSyntax_pointer]: InfoSyntax_pointer[_K] }
        >
    ): InfoSyntax_pointer {
        return new InfoSyntax_pointer(
            _o.name,
            _o.hash,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION InfoSyntax_pointer */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_InfoSyntax_pointer */
/**
 * @summary The Leading Root Component Types of InfoSyntax_pointer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InfoSyntax_pointer: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "name",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "hash",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_InfoSyntax_pointer */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_InfoSyntax_pointer */
/**
 * @summary The Trailing Root Component Types of InfoSyntax_pointer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InfoSyntax_pointer: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_InfoSyntax_pointer */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_InfoSyntax_pointer */
/**
 * @summary The Extension Addition Component Types of InfoSyntax_pointer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InfoSyntax_pointer: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_InfoSyntax_pointer */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InfoSyntax_pointer */
let _cached_decoder_for_InfoSyntax_pointer: $.ASN1Decoder<
    InfoSyntax_pointer
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InfoSyntax_pointer */

/* START_OF_SYMBOL_DEFINITION _decode_InfoSyntax_pointer */
/**
 * @summary Decodes an ASN.1 element into a(n) InfoSyntax_pointer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InfoSyntax_pointer} The decoded data structure.
 */
export function _decode_InfoSyntax_pointer(el: _Element) {
    if (!_cached_decoder_for_InfoSyntax_pointer) {
        _cached_decoder_for_InfoSyntax_pointer = function (
            el: _Element
        ): InfoSyntax_pointer {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let name!: GeneralNames;
            let hash: OPTIONAL<HASH<HashedPolicyInfo>>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                name: (_el: _Element): void => {
                    name = _decode_GeneralNames(_el);
                },
                hash: (_el: _Element): void => {
                    hash = _get_decoder_for_HASH<HashedPolicyInfo>(
                        _decode_HashedPolicyInfo
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_InfoSyntax_pointer,
                _extension_additions_list_spec_for_InfoSyntax_pointer,
                _root_component_type_list_2_spec_for_InfoSyntax_pointer,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new InfoSyntax_pointer /* SEQUENCE_CONSTRUCTOR_CALL */(
                name,
                hash,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_InfoSyntax_pointer(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InfoSyntax_pointer */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InfoSyntax_pointer */
let _cached_encoder_for_InfoSyntax_pointer: $.ASN1Encoder<
    InfoSyntax_pointer
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InfoSyntax_pointer */

/* START_OF_SYMBOL_DEFINITION _encode_InfoSyntax_pointer */
/**
 * @summary Encodes a(n) InfoSyntax_pointer into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InfoSyntax_pointer, encoded as an ASN.1 Element.
 */
export function _encode_InfoSyntax_pointer(
    value: InfoSyntax_pointer,
    elGetter: $.ASN1Encoder<InfoSyntax_pointer>
) {
    if (!_cached_encoder_for_InfoSyntax_pointer) {
        _cached_encoder_for_InfoSyntax_pointer = function (
            value: InfoSyntax_pointer,
            elGetter: $.ASN1Encoder<InfoSyntax_pointer>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_GeneralNames(
                                value.name,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.hash === undefined
                                ? undefined
                                : _get_encoder_for_HASH<HashedPolicyInfo>(
                                      _encode_HashedPolicyInfo
                                  )(value.hash, $.BER),
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
    return _cached_encoder_for_InfoSyntax_pointer(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InfoSyntax_pointer */

/* eslint-enable */
