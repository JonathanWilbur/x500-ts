/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
import {
    UniqueIdentifier,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
} from "../SelectedAttributeTypes/UniqueIdentifier.ta";
export {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
export {
    UniqueIdentifier,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
} from "../SelectedAttributeTypes/UniqueIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION NameAndOptionalUID */
/**
 * @summary NameAndOptionalUID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NameAndOptionalUID ::= SEQUENCE {
 *   dn   DistinguishedName,
 *   uid  UniqueIdentifier OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class NameAndOptionalUID {
    constructor(
        /**
         * @summary `dn`.
         * @public
         * @readonly
         */
        readonly dn: DistinguishedName,
        /**
         * @summary `uid`.
         * @public
         * @readonly
         */
        readonly uid: OPTIONAL<UniqueIdentifier>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a NameAndOptionalUID
     * @description
     *
     * This takes an `object` and converts it to a `NameAndOptionalUID`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NameAndOptionalUID`.
     * @returns {NameAndOptionalUID}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof NameAndOptionalUID]: NameAndOptionalUID[_K] }
        >
    ): NameAndOptionalUID {
        return new NameAndOptionalUID(
            _o.dn,
            _o.uid,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION NameAndOptionalUID */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NameAndOptionalUID */
/**
 * @summary The Leading Root Component Types of NameAndOptionalUID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NameAndOptionalUID: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "dn",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "uid",
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NameAndOptionalUID */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NameAndOptionalUID */
/**
 * @summary The Trailing Root Component Types of NameAndOptionalUID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NameAndOptionalUID: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NameAndOptionalUID */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NameAndOptionalUID */
/**
 * @summary The Extension Addition Component Types of NameAndOptionalUID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NameAndOptionalUID: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NameAndOptionalUID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NameAndOptionalUID */
let _cached_decoder_for_NameAndOptionalUID: $.ASN1Decoder<NameAndOptionalUID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NameAndOptionalUID */

/* START_OF_SYMBOL_DEFINITION _decode_NameAndOptionalUID */
/**
 * @summary Decodes an ASN.1 element into a(n) NameAndOptionalUID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NameAndOptionalUID} The decoded data structure.
 */
export function _decode_NameAndOptionalUID(el: _Element) {
    if (!_cached_decoder_for_NameAndOptionalUID) {
        _cached_decoder_for_NameAndOptionalUID = function (
            el: _Element
        ): NameAndOptionalUID {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let dn!: DistinguishedName;
            let uid: OPTIONAL<UniqueIdentifier>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                dn: (_el: _Element): void => {
                    dn = _decode_DistinguishedName(_el);
                },
                uid: (_el: _Element): void => {
                    uid = _decode_UniqueIdentifier(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NameAndOptionalUID,
                _extension_additions_list_spec_for_NameAndOptionalUID,
                _root_component_type_list_2_spec_for_NameAndOptionalUID,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new NameAndOptionalUID(
                /* SEQUENCE_CONSTRUCTOR_CALL */ dn,
                uid,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_NameAndOptionalUID(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NameAndOptionalUID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NameAndOptionalUID */
let _cached_encoder_for_NameAndOptionalUID: $.ASN1Encoder<NameAndOptionalUID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NameAndOptionalUID */

/* START_OF_SYMBOL_DEFINITION _encode_NameAndOptionalUID */
/**
 * @summary Encodes a(n) NameAndOptionalUID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameAndOptionalUID, encoded as an ASN.1 Element.
 */
export function _encode_NameAndOptionalUID(
    value: NameAndOptionalUID,
    elGetter: $.ASN1Encoder<NameAndOptionalUID>
) {
    if (!_cached_encoder_for_NameAndOptionalUID) {
        _cached_encoder_for_NameAndOptionalUID = function (
            value: NameAndOptionalUID,
            elGetter: $.ASN1Encoder<NameAndOptionalUID>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_DistinguishedName(
                                value.dn,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.uid === undefined
                                ? undefined
                                : _encode_UniqueIdentifier(value.uid, $.BER),
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
    return _cached_encoder_for_NameAndOptionalUID(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NameAndOptionalUID */

/* eslint-enable */
