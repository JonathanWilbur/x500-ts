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
export {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta";
export { IDM_PROTOCOL } from "../IDMProtocolSpecification/IDM-PROTOCOL.oca";

/* START_OF_SYMBOL_DEFINITION IdmBind */
/**
 * @summary IdmBind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IdmBind{IDM-PROTOCOL:Protocols} ::= SEQUENCE {
 *   protocolID           IDM-PROTOCOL.&id({Protocols}),
 *   callingAETitle  [0]  GeneralName OPTIONAL,
 *   calledAETitle   [1]  GeneralName OPTIONAL,
 *   argument        [2]  IDM-PROTOCOL.&bind-operation.&ArgumentType
 *                          ({Protocols}{@protocolID}),
 *   ... }
 * ```
 *
 * @class
 */
export class IdmBind {
    constructor(
        /**
         * @summary `protocolID`.
         * @public
         * @readonly
         */
        readonly protocolID: OBJECT_IDENTIFIER,
        /**
         * @summary `callingAETitle`.
         * @public
         * @readonly
         */
        readonly callingAETitle: OPTIONAL<GeneralName>,
        /**
         * @summary `calledAETitle`.
         * @public
         * @readonly
         */
        readonly calledAETitle: OPTIONAL<GeneralName>,
        /**
         * @summary `argument`.
         * @public
         * @readonly
         */
        readonly argument: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IdmBind
     * @description
     *
     * This takes an `object` and converts it to a `IdmBind`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IdmBind`.
     * @returns {IdmBind}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof IdmBind]: IdmBind[_K] }>
    ): IdmBind {
        return new IdmBind(
            _o.protocolID,
            _o.callingAETitle,
            _o.calledAETitle,
            _o.argument,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION IdmBind */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IdmBind */
/**
 * @summary The Leading Root Component Types of IdmBind
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IdmBind: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "protocolID",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "callingAETitle",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "calledAETitle",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "argument",
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IdmBind */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IdmBind */
/**
 * @summary The Trailing Root Component Types of IdmBind
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IdmBind: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IdmBind */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IdmBind */
/**
 * @summary The Extension Addition Component Types of IdmBind
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IdmBind: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IdmBind */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IdmBind */
let _cached_decoder_for_IdmBind: $.ASN1Decoder<IdmBind> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IdmBind */

/* START_OF_SYMBOL_DEFINITION _decode_IdmBind */
/**
 * @summary Decodes an ASN.1 element into a(n) IdmBind
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IdmBind} The decoded data structure.
 */
export function _decode_IdmBind(el: _Element) {
    if (!_cached_decoder_for_IdmBind) {
        _cached_decoder_for_IdmBind = function (el: _Element): IdmBind {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let protocolID!: OBJECT_IDENTIFIER;
            let callingAETitle: OPTIONAL<GeneralName>;
            let calledAETitle: OPTIONAL<GeneralName>;
            let argument!: _Element;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                protocolID: (_el: _Element): void => {
                    protocolID = $._decodeObjectIdentifier(_el);
                },
                callingAETitle: (_el: _Element): void => {
                    callingAETitle = $._decode_explicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                calledAETitle: (_el: _Element): void => {
                    calledAETitle = $._decode_explicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                argument: (_el: _Element): void => {
                    argument = $._decode_explicit<_Element>(() => $._decodeAny)(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IdmBind,
                _extension_additions_list_spec_for_IdmBind,
                _root_component_type_list_2_spec_for_IdmBind,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new IdmBind(
                /* SEQUENCE_CONSTRUCTOR_CALL */ protocolID,
                callingAETitle,
                calledAETitle,
                argument,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_IdmBind(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IdmBind */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IdmBind */
let _cached_encoder_for_IdmBind: $.ASN1Encoder<IdmBind> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IdmBind */

/* START_OF_SYMBOL_DEFINITION _encode_IdmBind */
/**
 * @summary Encodes a(n) IdmBind into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IdmBind, encoded as an ASN.1 Element.
 */
export function _encode_IdmBind(
    value: IdmBind,
    elGetter: $.ASN1Encoder<IdmBind>
) {
    if (!_cached_encoder_for_IdmBind) {
        _cached_encoder_for_IdmBind = function (
            value: IdmBind,
            elGetter: $.ASN1Encoder<IdmBind>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.protocolID,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.callingAETitle === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_GeneralName,
                                      $.BER
                                  )(value.callingAETitle, $.BER),
                            /* IF_ABSENT  */ value.calledAETitle === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_GeneralName,
                                      $.BER
                                  )(value.calledAETitle, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                2,
                                () => $._encodeAny,
                                $.BER
                            )(value.argument, $.BER),
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
    return _cached_encoder_for_IdmBind(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IdmBind */

/* eslint-enable */
