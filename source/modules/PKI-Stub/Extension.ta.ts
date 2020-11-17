/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { der } from "../PKI-Stub/der.va";
export { EXTENSION } from "../PKI-Stub/EXTENSION.oca";
export { ExtensionSet } from "../PKI-Stub/ExtensionSet.osa";

/* START_OF_SYMBOL_DEFINITION Extension */
/**
 * @summary Extension
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Extension ::= SEQUENCE {
 *   extnId     EXTENSION.&id({ExtensionSet}),
 *   critical   BOOLEAN DEFAULT FALSE,
 *   extnValue  OCTET STRING
 *     (CONTAINING EXTENSION.&ExtnType({ExtensionSet}{@extnId})
 *        ENCODED BY der),
 *   ... }
 * ```
 *
 * @class
 */
export class Extension {
    constructor(
        /**
         * @summary `extnId`.
         * @public
         * @readonly
         */
        readonly extnId: OBJECT_IDENTIFIER,
        /**
         * @summary `critical`.
         * @public
         * @readonly
         */
        readonly critical: OPTIONAL<BOOLEAN>,
        /**
         * @summary `extnValue`.
         * @public
         * @readonly
         */
        readonly extnValue: OCTET_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Extension
     * @description
     *
     * This takes an `object` and converts it to a `Extension`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Extension`.
     * @returns {Extension}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Extension]: Extension[_K] }>
    ): Extension {
        return new Extension(
            _o.extnId,
            _o.critical,
            _o.extnValue,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `critical`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_critical() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION Extension */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Extension */
/**
 * @summary The Leading Root Component Types of Extension
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Extension: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "extnId",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "critical",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "extnValue",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Extension */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Extension */
/**
 * @summary The Trailing Root Component Types of Extension
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Extension: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Extension */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Extension */
/**
 * @summary The Extension Addition Component Types of Extension
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Extension: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Extension */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Extension */
let _cached_decoder_for_Extension: $.ASN1Decoder<Extension> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Extension */

/* START_OF_SYMBOL_DEFINITION _decode_Extension */
/**
 * @summary Decodes an ASN.1 element into a(n) Extension
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Extension} The decoded data structure.
 */
export function _decode_Extension(el: _Element) {
    if (!_cached_decoder_for_Extension) {
        _cached_decoder_for_Extension = function (el: _Element): Extension {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let extnId!: OBJECT_IDENTIFIER;
            let critical: OPTIONAL<BOOLEAN> =
                Extension._default_value_for_critical;
            let extnValue!: OCTET_STRING;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                extnId: (_el: _Element): void => {
                    extnId = $._decodeObjectIdentifier(_el);
                },
                critical: (_el: _Element): void => {
                    critical = $._decodeBoolean(_el);
                },
                extnValue: (_el: _Element): void => {
                    extnValue = $._decodeOctetString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Extension,
                _extension_additions_list_spec_for_Extension,
                _root_component_type_list_2_spec_for_Extension,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Extension /* SEQUENCE_CONSTRUCTOR_CALL */(
                extnId,
                critical,
                extnValue,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Extension(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Extension */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Extension */
let _cached_encoder_for_Extension: $.ASN1Encoder<Extension> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Extension */

/* START_OF_SYMBOL_DEFINITION _encode_Extension */
/**
 * @summary Encodes a(n) Extension into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Extension, encoded as an ASN.1 Element.
 */
export function _encode_Extension(
    value: Extension,
    elGetter: $.ASN1Encoder<Extension>
) {
    if (!_cached_encoder_for_Extension) {
        _cached_encoder_for_Extension = function (
            value: Extension,
            elGetter: $.ASN1Encoder<Extension>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.extnId,
                                $.BER
                            ),
                            /* IF_DEFAULT */ value.critical === undefined ||
                            $.deepEq(
                                value.critical,
                                Extension._default_value_for_critical
                            )
                                ? undefined
                                : $._encodeBoolean(value.critical, $.BER),
                            /* REQUIRED   */ $._encodeOctetString(
                                value.extnValue,
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
    return _cached_encoder_for_Extension(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Extension */

/* eslint-enable */
