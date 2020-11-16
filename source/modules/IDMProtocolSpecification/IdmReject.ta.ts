/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    IdmReject_reason,
    _decode_IdmReject_reason,
    _encode_IdmReject_reason,
    _enum_for_IdmReject_reason,
} from "../IDMProtocolSpecification/IdmReject-reason.ta";
export {
    IdmReject_reason,
    IdmReject_reason_duplicateInvokeIDRequest /* IMPORTED_ENUMERATION_ITEM */,
    IdmReject_reason_invalidIdmVersion /* IMPORTED_ENUMERATION_ITEM */,
    IdmReject_reason_mistypedArgumentRequest /* IMPORTED_ENUMERATION_ITEM */,
    IdmReject_reason_mistypedParameterError /* IMPORTED_ENUMERATION_ITEM */,
    IdmReject_reason_mistypedPDU /* IMPORTED_ENUMERATION_ITEM */,
    IdmReject_reason_mistypedResultRequest /* IMPORTED_ENUMERATION_ITEM */,
    IdmReject_reason_resourceLimitationRequest /* IMPORTED_ENUMERATION_ITEM */,
    IdmReject_reason_unknownError /* IMPORTED_ENUMERATION_ITEM */,
    IdmReject_reason_unknownInvokeIDError /* IMPORTED_ENUMERATION_ITEM */,
    IdmReject_reason_unknownInvokeIDResult /* IMPORTED_ENUMERATION_ITEM */,
    IdmReject_reason_unknownOperationRequest /* IMPORTED_ENUMERATION_ITEM */,
    IdmReject_reason_unsuitableIdmVersion /* IMPORTED_ENUMERATION_ITEM */,
    IdmReject_reason_unsupportedIdmVersion /* IMPORTED_ENUMERATION_ITEM */,
    IdmReject_reason_unsupportedOperationRequest /* IMPORTED_ENUMERATION_ITEM */,
    _decode_IdmReject_reason,
    _encode_IdmReject_reason,
    _enum_for_IdmReject_reason,
} from "../IDMProtocolSpecification/IdmReject-reason.ta";

/* START_OF_SYMBOL_DEFINITION IdmReject */
/**
 * @summary IdmReject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IdmReject ::= SEQUENCE {
 *   invokeID  INTEGER,
 *   reason    ENUMERATED {
 *     mistypedPDU                 (0),
 *     duplicateInvokeIDRequest    (1),
 *     unsupportedOperationRequest (2),
 *     unknownOperationRequest     (3),
 *     mistypedArgumentRequest     (4),
 *     resourceLimitationRequest   (5),
 *     unknownInvokeIDResult       (6),
 *     mistypedResultRequest       (7),
 *     unknownInvokeIDError        (8),
 *     unknownError                (9),
 *     mistypedParameterError      (10),
 *     unsupportedIdmVersion       (11),
 *     unsuitableIdmVersion        (12),
 *     invalidIdmVersion           (13),
 *     ...},
 *   ... }
 * ```
 *
 * @class
 */
export class IdmReject {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: INTEGER,
        /**
         * @summary `reason`.
         * @public
         * @readonly
         */
        readonly reason: IdmReject_reason,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IdmReject
     * @description
     *
     * This takes an `object` and converts it to a `IdmReject`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IdmReject`.
     * @returns {IdmReject}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof IdmReject]: IdmReject[_K] }>
    ): IdmReject {
        return new IdmReject(
            _o.invokeID,
            _o.reason,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `reason`
     * @public
     * @static
     */

    public static _enum_for_reason = _enum_for_IdmReject_reason;
}
/* END_OF_SYMBOL_DEFINITION IdmReject */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IdmReject */
/**
 * @summary The Leading Root Component Types of IdmReject
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IdmReject: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "reason",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IdmReject */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IdmReject */
/**
 * @summary The Trailing Root Component Types of IdmReject
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IdmReject: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IdmReject */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IdmReject */
/**
 * @summary The Extension Addition Component Types of IdmReject
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IdmReject: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IdmReject */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IdmReject */
let _cached_decoder_for_IdmReject: $.ASN1Decoder<IdmReject> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IdmReject */

/* START_OF_SYMBOL_DEFINITION _decode_IdmReject */
/**
 * @summary Decodes an ASN.1 element into a(n) IdmReject
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IdmReject} The decoded data structure.
 */
export function _decode_IdmReject(el: _Element) {
    if (!_cached_decoder_for_IdmReject) {
        _cached_decoder_for_IdmReject = function (el: _Element): IdmReject {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "IdmReject contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "reason";
            let invokeID!: INTEGER;
            let reason!: IdmReject_reason;
            invokeID = $._decodeInteger(sequence[0]);
            reason = _decode_IdmReject_reason(sequence[1]);
            return new IdmReject(invokeID, reason, sequence.slice(2));
        };
    }
    return _cached_decoder_for_IdmReject(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IdmReject */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IdmReject */
let _cached_encoder_for_IdmReject: $.ASN1Encoder<IdmReject> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IdmReject */

/* START_OF_SYMBOL_DEFINITION _encode_IdmReject */
/**
 * @summary Encodes a(n) IdmReject into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IdmReject, encoded as an ASN.1 Element.
 */
export function _encode_IdmReject(
    value: IdmReject,
    elGetter: $.ASN1Encoder<IdmReject>
) {
    if (!_cached_encoder_for_IdmReject) {
        _cached_encoder_for_IdmReject = function (
            value: IdmReject,
            elGetter: $.ASN1Encoder<IdmReject>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeInteger(
                                value.invokeID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_IdmReject_reason(
                                value.reason,
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
    return _cached_encoder_for_IdmReject(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IdmReject */

/* eslint-enable */
