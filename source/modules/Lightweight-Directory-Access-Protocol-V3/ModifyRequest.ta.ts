/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    LDAPDN,
    _decode_LDAPDN,
    _encode_LDAPDN,
} from "../Lightweight-Directory-Access-Protocol-V3/LDAPDN.ta";
import {
    ModifyRequest_changes_change,
    _decode_ModifyRequest_changes_change,
    _encode_ModifyRequest_changes_change,
} from "../Lightweight-Directory-Access-Protocol-V3/ModifyRequest-changes-change.ta";
export {
    LDAPDN,
    _decode_LDAPDN,
    _encode_LDAPDN,
} from "../Lightweight-Directory-Access-Protocol-V3/LDAPDN.ta";
export {
    ModifyRequest_changes_change,
    _decode_ModifyRequest_changes_change,
    _encode_ModifyRequest_changes_change,
} from "../Lightweight-Directory-Access-Protocol-V3/ModifyRequest-changes-change.ta";

/* START_OF_SYMBOL_DEFINITION ModifyRequest */
/**
 * @summary ModifyRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyRequest ::= [APPLICATION 6]  SEQUENCE {
 *   object   LDAPDN,
 *   changes
 *     SEQUENCE OF change
 *       SEQUENCE {operation     ENUMERATED {add(0), delete(1), replace(2), ...
 *                                           },
 *                 modification  PartialAttribute}
 * }
 * ```
 *
 * @class
 */
export class ModifyRequest {
    constructor(
        /**
         * @summary `object`.
         * @public
         * @readonly
         */
        readonly object: LDAPDN,
        /**
         * @summary `changes`.
         * @public
         * @readonly
         */
        readonly changes: ModifyRequest_changes_change[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ModifyRequest
     * @description
     *
     * This takes an `object` and converts it to a `ModifyRequest`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModifyRequest`.
     * @returns {ModifyRequest}
     */
    public static _from_object(
        _o: { [_K in keyof ModifyRequest]: ModifyRequest[_K] }
    ): ModifyRequest {
        return new ModifyRequest(
            _o.object,
            _o.changes,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ModifyRequest */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ModifyRequest */
/**
 * @summary The Leading Root Component Types of ModifyRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ModifyRequest: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "object",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "changes",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ModifyRequest */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ModifyRequest */
/**
 * @summary The Trailing Root Component Types of ModifyRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ModifyRequest: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ModifyRequest */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ModifyRequest */
/**
 * @summary The Extension Addition Component Types of ModifyRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ModifyRequest: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ModifyRequest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyRequest */
let _cached_decoder_for_ModifyRequest: $.ASN1Decoder<ModifyRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyRequest */

/* START_OF_SYMBOL_DEFINITION _decode_ModifyRequest */
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyRequest} The decoded data structure.
 */
export function _decode_ModifyRequest(el: _Element) {
    if (!_cached_decoder_for_ModifyRequest) {
        _cached_decoder_for_ModifyRequest = $._decode_implicit<ModifyRequest>(
            () =>
                function (el: _Element): ModifyRequest {
                    const sequence: _Element[] = el.sequence;
                    if (sequence.length < 2) {
                        throw new _ConstructionError(
                            "ModifyRequest contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
                    }
                    sequence[0].name = "object";
                    sequence[1].name = "changes";
                    let object!: LDAPDN;
                    let changes!: ModifyRequest_changes_change[];
                    object = _decode_LDAPDN(sequence[0]);
                    changes = $._decodeSequenceOf<ModifyRequest_changes_change>(
                        () => _decode_ModifyRequest_changes_change
                    )(sequence[1]);
                    return new ModifyRequest(
                        object,
                        changes,
                        sequence.slice(2)
                    );
                }
        );
    }
    return _cached_decoder_for_ModifyRequest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ModifyRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyRequest */
let _cached_encoder_for_ModifyRequest: $.ASN1Encoder<ModifyRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyRequest */

/* START_OF_SYMBOL_DEFINITION _encode_ModifyRequest */
/**
 * @summary Encodes a(n) ModifyRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyRequest, encoded as an ASN.1 Element.
 */
export function _encode_ModifyRequest(
    value: ModifyRequest,
    elGetter: $.ASN1Encoder<ModifyRequest>
) {
    if (!_cached_encoder_for_ModifyRequest) {
        _cached_encoder_for_ModifyRequest = $._encode_implicit(
            _TagClass.application,
            6,
            () =>
                function (
                    value: ModifyRequest,
                    elGetter: $.ASN1Encoder<ModifyRequest>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_LDAPDN(
                                        value.object,
                                        $.BER
                                    ),
                                    /* REQUIRED   */ $._encodeSequenceOf<ModifyRequest_changes_change>(
                                        () =>
                                            _encode_ModifyRequest_changes_change,
                                        $.BER
                                    )(value.changes, $.BER),
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
    return _cached_encoder_for_ModifyRequest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ModifyRequest */

/* eslint-enable */
