/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";

/* START_OF_SYMBOL_DEFINITION EDIPartyName */
/**
 * @summary EDIPartyName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIPartyName ::= SEQUENCE {
 *   nameAssigner  [0]  UnboundedDirectoryString OPTIONAL,
 *   partyName     [1]  UnboundedDirectoryString,
 *   ... }
 * ```
 *
 * @class
 */
export class EDIPartyName {
    constructor(
        /**
         * @summary `nameAssigner`.
         * @public
         * @readonly
         */
        readonly nameAssigner: OPTIONAL<UnboundedDirectoryString>,
        /**
         * @summary `partyName`.
         * @public
         * @readonly
         */
        readonly partyName: UnboundedDirectoryString,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EDIPartyName
     * @description
     *
     * This takes an `object` and converts it to a `EDIPartyName`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EDIPartyName`.
     * @returns {EDIPartyName}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof EDIPartyName]: EDIPartyName[_K] }>
    ): EDIPartyName {
        return new EDIPartyName(
            _o.nameAssigner,
            _o.partyName,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION EDIPartyName */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EDIPartyName */
/**
 * @summary The Leading Root Component Types of EDIPartyName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EDIPartyName: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "nameAssigner",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "partyName",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EDIPartyName */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EDIPartyName */
/**
 * @summary The Trailing Root Component Types of EDIPartyName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EDIPartyName: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EDIPartyName */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EDIPartyName */
/**
 * @summary The Extension Addition Component Types of EDIPartyName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EDIPartyName: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EDIPartyName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIPartyName */
let _cached_decoder_for_EDIPartyName: $.ASN1Decoder<EDIPartyName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIPartyName */

/* START_OF_SYMBOL_DEFINITION _decode_EDIPartyName */
/**
 * @summary Decodes an ASN.1 element into a(n) EDIPartyName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDIPartyName} The decoded data structure.
 */
export function _decode_EDIPartyName(el: _Element) {
    if (!_cached_decoder_for_EDIPartyName) {
        _cached_decoder_for_EDIPartyName = function (
            el: _Element
        ): EDIPartyName {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let nameAssigner: OPTIONAL<UnboundedDirectoryString>;
            let partyName!: UnboundedDirectoryString;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                nameAssigner: (_el: _Element): void => {
                    nameAssigner = $._decode_explicit<UnboundedDirectoryString>(
                        () => _decode_UnboundedDirectoryString
                    )(_el);
                },
                partyName: (_el: _Element): void => {
                    partyName = $._decode_explicit<UnboundedDirectoryString>(
                        () => _decode_UnboundedDirectoryString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EDIPartyName,
                _extension_additions_list_spec_for_EDIPartyName,
                _root_component_type_list_2_spec_for_EDIPartyName,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new EDIPartyName(
                /* SEQUENCE_CONSTRUCTOR_CALL */ nameAssigner,
                partyName,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_EDIPartyName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EDIPartyName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIPartyName */
let _cached_encoder_for_EDIPartyName: $.ASN1Encoder<EDIPartyName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIPartyName */

/* START_OF_SYMBOL_DEFINITION _encode_EDIPartyName */
/**
 * @summary Encodes a(n) EDIPartyName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIPartyName, encoded as an ASN.1 Element.
 */
export function _encode_EDIPartyName(
    value: EDIPartyName,
    elGetter: $.ASN1Encoder<EDIPartyName>
) {
    if (!_cached_encoder_for_EDIPartyName) {
        _cached_encoder_for_EDIPartyName = function (
            value: EDIPartyName,
            elGetter: $.ASN1Encoder<EDIPartyName>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.nameAssigner === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_UnboundedDirectoryString,
                                      $.BER
                                  )(value.nameAssigner, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => _encode_UnboundedDirectoryString,
                                $.BER
                            )(value.partyName, $.BER),
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
    return _cached_encoder_for_EDIPartyName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EDIPartyName */

/* eslint-enable */
