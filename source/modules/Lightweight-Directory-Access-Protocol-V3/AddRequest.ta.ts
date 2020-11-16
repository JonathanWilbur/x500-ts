/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AttributeList,
    _decode_AttributeList,
    _encode_AttributeList,
} from "../Lightweight_Directory_Access_Protocol_V3/AttributeList.ta";
import {
    LDAPDN,
    _decode_LDAPDN,
    _encode_LDAPDN,
} from "../Lightweight_Directory_Access_Protocol_V3/LDAPDN.ta";
export {
    AttributeList,
    _decode_AttributeList,
    _encode_AttributeList,
} from "../Lightweight_Directory_Access_Protocol_V3/AttributeList.ta";
export {
    LDAPDN,
    _decode_LDAPDN,
    _encode_LDAPDN,
} from "../Lightweight_Directory_Access_Protocol_V3/LDAPDN.ta";

/* START_OF_SYMBOL_DEFINITION AddRequest */
/**
 * @summary AddRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddRequest ::= [APPLICATION 8]  SEQUENCE {
 *   entry       LDAPDN,
 *   attributes  AttributeList
 * }
 * ```
 *
 * @class
 */
export class AddRequest {
    constructor(
        /**
         * @summary `entry`.
         * @public
         * @readonly
         */
        readonly entry: LDAPDN,
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: AttributeList,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AddRequest
     * @description
     *
     * This takes an `object` and converts it to a `AddRequest`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddRequest`.
     * @returns {AddRequest}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AddRequest]: AddRequest[_K] }>
    ): AddRequest {
        return new AddRequest(
            _o.entry,
            _o.attributes,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION AddRequest */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AddRequest */
/**
 * @summary The Leading Root Component Types of AddRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddRequest: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "entry",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributes",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AddRequest */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AddRequest */
/**
 * @summary The Trailing Root Component Types of AddRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddRequest: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AddRequest */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AddRequest */
/**
 * @summary The Extension Addition Component Types of AddRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddRequest: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AddRequest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddRequest */
let _cached_decoder_for_AddRequest: $.ASN1Decoder<AddRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddRequest */

/* START_OF_SYMBOL_DEFINITION _decode_AddRequest */
/**
 * @summary Decodes an ASN.1 element into a(n) AddRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddRequest} The decoded data structure.
 */
export function _decode_AddRequest(el: _Element) {
    if (!_cached_decoder_for_AddRequest) {
        _cached_decoder_for_AddRequest = $._decode_implicit<AddRequest>(
            () =>
                function (el: _Element): AddRequest {
                    const sequence: _Element[] = el.sequence;
                    if (sequence.length < 2) {
                        throw new _ConstructionError(
                            "AddRequest contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
                    }
                    sequence[0].name = "entry";
                    sequence[1].name = "attributes";
                    let entry!: LDAPDN;
                    let attributes!: AttributeList;
                    entry = _decode_LDAPDN(sequence[0]);
                    attributes = _decode_AttributeList(sequence[1]);
                    return new AddRequest(entry, attributes, sequence.slice(2));
                }
        );
    }
    return _cached_decoder_for_AddRequest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddRequest */
let _cached_encoder_for_AddRequest: $.ASN1Encoder<AddRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddRequest */

/* START_OF_SYMBOL_DEFINITION _encode_AddRequest */
/**
 * @summary Encodes a(n) AddRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddRequest, encoded as an ASN.1 Element.
 */
export function _encode_AddRequest(
    value: AddRequest,
    elGetter: $.ASN1Encoder<AddRequest>
) {
    if (!_cached_encoder_for_AddRequest) {
        _cached_encoder_for_AddRequest = $._encode_implicit(
            _TagClass.application,
            8,
            () =>
                function (
                    value: AddRequest,
                    elGetter: $.ASN1Encoder<AddRequest>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_LDAPDN(
                                        value.entry,
                                        $.BER
                                    ),
                                    /* REQUIRED   */ _encode_AttributeList(
                                        value.attributes,
                                        $.BER
                                    ),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : []
                            )
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_AddRequest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AddRequest */

/* eslint-enable */
