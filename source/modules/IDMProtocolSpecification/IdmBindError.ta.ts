/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta";
import {
    IdmBindError_aETitleError,
    _decode_IdmBindError_aETitleError,
    _encode_IdmBindError_aETitleError,
    _enum_for_IdmBindError_aETitleError,
} from "../IDMProtocolSpecification/IdmBindError-aETitleError.ta";
export {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta";
export { IDM_PROTOCOL } from "../IDMProtocolSpecification/IDM-PROTOCOL.oca";
export {
    calledAETitleNotRecognized /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    callingAETitleNotAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    IdmBindError_aETitleError,
    IdmBindError_aETitleError_calledAETitleNotRecognized /* IMPORTED_LONG_ENUMERATION_ITEM */,
    IdmBindError_aETitleError_callingAETitleNotAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_IdmBindError_aETitleError,
    _encode_IdmBindError_aETitleError,
    _enum_for_IdmBindError_aETitleError,
} from "../IDMProtocolSpecification/IdmBindError-aETitleError.ta";

/* START_OF_SYMBOL_DEFINITION IdmBindError */
/**
 * @summary IdmBindError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IdmBindError{IDM-PROTOCOL:Protocols} ::= SEQUENCE {
 *   protocolID              IDM-PROTOCOL.&id({Protocols}),
 * --errcode                 IDM-PROTOCOL.&bind-operation.&Errors.&errorCode OPTIONAL
 *   respondingAETitle  [0]  GeneralName OPTIONAL,
 *   aETitleError            ENUMERATED {
 *     callingAETitleNotAccepted  (0),
 *     calledAETitleNotRecognized (1),
 *     ...} OPTIONAL,
 *   error              [1]  IDM-PROTOCOL.&bind-operation.&Errors.&ParameterType
 *                             ({Protocols}{@protocolID}),
 *   ... }
 * ```
 *
 * @class
 */
export class IdmBindError {
    constructor(
        /**
         * @summary `protocolID`.
         * @public
         * @readonly
         */
        readonly protocolID: OBJECT_IDENTIFIER,
        /**
         * @summary `respondingAETitle`.
         * @public
         * @readonly
         */
        readonly respondingAETitle: OPTIONAL<GeneralName>,
        /**
         * @summary `aETitleError`.
         * @public
         * @readonly
         */
        readonly aETitleError: OPTIONAL<IdmBindError_aETitleError>,
        /**
         * @summary `error`.
         * @public
         * @readonly
         */
        readonly error: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IdmBindError
     * @description
     *
     * This takes an `object` and converts it to a `IdmBindError`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IdmBindError`.
     * @returns {IdmBindError}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof IdmBindError]: IdmBindError[_K] }>
    ): IdmBindError {
        return new IdmBindError(
            _o.protocolID,
            _o.respondingAETitle,
            _o.aETitleError,
            _o.error,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `aETitleError`
     * @public
     * @static
     */

    public static _enum_for_aETitleError = _enum_for_IdmBindError_aETitleError;
}
/* END_OF_SYMBOL_DEFINITION IdmBindError */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IdmBindError */
/**
 * @summary The Leading Root Component Types of IdmBindError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IdmBindError: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "protocolID",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "respondingAETitle",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "aETitleError",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "error",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IdmBindError */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IdmBindError */
/**
 * @summary The Trailing Root Component Types of IdmBindError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IdmBindError: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IdmBindError */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IdmBindError */
/**
 * @summary The Extension Addition Component Types of IdmBindError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IdmBindError: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IdmBindError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IdmBindError */
let _cached_decoder_for_IdmBindError: $.ASN1Decoder<IdmBindError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IdmBindError */

/* START_OF_SYMBOL_DEFINITION _decode_IdmBindError */
/**
 * @summary Decodes an ASN.1 element into a(n) IdmBindError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IdmBindError} The decoded data structure.
 */
export function _decode_IdmBindError(el: _Element) {
    if (!_cached_decoder_for_IdmBindError) {
        _cached_decoder_for_IdmBindError = function (
            el: _Element
        ): IdmBindError {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let protocolID!: OBJECT_IDENTIFIER;
            let respondingAETitle: OPTIONAL<GeneralName>;
            let aETitleError: OPTIONAL<IdmBindError_aETitleError>;
            let error!: _Element;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                protocolID: (_el: _Element): void => {
                    protocolID = $._decodeObjectIdentifier(_el);
                },
                respondingAETitle: (_el: _Element): void => {
                    respondingAETitle = $._decode_explicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                aETitleError: (_el: _Element): void => {
                    aETitleError = _decode_IdmBindError_aETitleError(_el);
                },
                error: (_el: _Element): void => {
                    error = $._decode_explicit<_Element>(() => $._decodeAny)(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IdmBindError,
                _extension_additions_list_spec_for_IdmBindError,
                _root_component_type_list_2_spec_for_IdmBindError,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new IdmBindError(
                /* SEQUENCE_CONSTRUCTOR_CALL */ protocolID,
                respondingAETitle,
                aETitleError,
                error,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_IdmBindError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IdmBindError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IdmBindError */
let _cached_encoder_for_IdmBindError: $.ASN1Encoder<IdmBindError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IdmBindError */

/* START_OF_SYMBOL_DEFINITION _encode_IdmBindError */
/**
 * @summary Encodes a(n) IdmBindError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IdmBindError, encoded as an ASN.1 Element.
 */
export function _encode_IdmBindError(
    value: IdmBindError,
    elGetter: $.ASN1Encoder<IdmBindError>
) {
    if (!_cached_encoder_for_IdmBindError) {
        _cached_encoder_for_IdmBindError = function (
            value: IdmBindError,
            elGetter: $.ASN1Encoder<IdmBindError>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.protocolID,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.respondingAETitle ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_GeneralName,
                                      $.BER
                                  )(value.respondingAETitle, $.BER),
                            /* IF_ABSENT  */ value.aETitleError === undefined
                                ? undefined
                                : _encode_IdmBindError_aETitleError(
                                      value.aETitleError,
                                      $.BER
                                  ),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => $._encodeAny,
                                $.BER
                            )(value.error, $.BER),
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
    return _cached_encoder_for_IdmBindError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IdmBindError */

/* eslint-enable */
