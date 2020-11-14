/**
 * @module OSIProtocolSpecification
 * @summary The ASN.1 module `OSIProtocolSpecification`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.oSIProtocolSpecification.9
 * IRI: undefined
 * EXTENSIBLE: false
 * ENCODINGREF: undefined
 * FILE: undefined
 *
 * This file was compiled by Wildboar Software's ASN.1 Compiler.
 *
 * @see {@link https://wildboarsoftware.com|Wildboar Software's Website}
 * /


/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    EXTERNAL,
    GraphicString,
    INTEGER,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
    TRUE_BIT,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Code,
    InvokeId,
    _decode_Code,
    _decode_InvokeId,
    _encode_Code,
    _encode_InvokeId,
} from "./CommonProtocolSpecification";
import {
    Name,
    RelativeDistinguishedName,
    _decode_Name,
    _decode_RelativeDistinguishedName,
    _encode_Name,
    _encode_RelativeDistinguishedName,
} from "./InformationFramework";
export {
    Code,
    InvokeId,
    OPERATION,
    _decode_Code,
    _decode_InvokeId,
    _encode_Code,
    _encode_InvokeId,
} from "./CommonProtocolSpecification";
export {
    SecurityProblem,
    SecurityProblem_blockedCredentials /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_inappropriateAlgorithms /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_inappropriateAuthentication /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_insufficientAccessRights /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_invalidCredentials /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_invalidSignature /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_noInformation /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_passwordExpired /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_protectionRequired /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_spkmError /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_unsupportedAuthenticationMethod /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem,
    ServiceProblem_administrativeLimitExceeded /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_ambiguousKeyAttributes /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_busy /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_chainingRequired /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_ditError /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_invalidQueryReference /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_invalidReference /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_loopDetected /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_notSupportedByLDAP /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_outOfScope /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_requestedServiceNotAvailable /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_saslBindInProgress /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_timeLimitExceeded /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_unableToProceed /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_unavailable /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_unavailableCriticalExtension /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_unsupportedMatchingUse /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_unwillingToPerform /* IMPORTED_NAMED_INTEGER */,
    Versions,
    Versions_v1 /* IMPORTED_BIT */,
    Versions_v2 /* IMPORTED_BIT */,
    _decode_SecurityProblem,
    _decode_ServiceProblem,
    _decode_Versions,
    _encode_SecurityProblem,
    _encode_ServiceProblem,
    _encode_Versions,
} from "./DirectoryAbstractService";
export { APPLICATION_CONTEXT } from "./DirectoryOSIProtocols";
export {
    Name,
    RelativeDistinguishedName,
    _decode_Name,
    _decode_RelativeDistinguishedName,
    _encode_Name,
    _encode_RelativeDistinguishedName,
} from "./InformationFramework";

export type OSI_PDU<> = _Element; // ObjectClassFieldType
let _cached_decoder_for_OSI_PDU: $.ASN1Decoder<OSI_PDU> | null = null;
let _cached_encoder_for_OSI_PDU: $.ASN1Encoder<OSI_PDU> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OSI_PDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OSI_PDU} The decoded data structure.
 */
export function _decode_OSI_PDU(el: _Element) {
    if (!_cached_decoder_for_OSI_PDU) {
        _cached_decoder_for_OSI_PDU = $._decodeAny;
    }
    return _cached_decoder_for_OSI_PDU(el);
}
/**
 * @summary Encodes a(n) OSI_PDU into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OSI_PDU, encoded as an ASN.1 Element.
 */
export function _encode_OSI_PDU(
    value: OSI_PDU,
    elGetter: $.ASN1Encoder<OSI_PDU>
) {
    if (!_cached_encoder_for_OSI_PDU) {
        _cached_encoder_for_OSI_PDU = $._encodeAny;
    }
    return _cached_encoder_for_OSI_PDU(value, elGetter);
}

/**
 * @summary OsiBind_mode_selector
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBind-mode-selector ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class OsiBind_mode_selector {
    constructor(
        /**
         * @summary `mode_value`.
         * @public
         * @readonly
         */
        readonly mode_value: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a OsiBind_mode_selector
     * @description
     *
     * This takes an `object` and converts it to a `OsiBind_mode_selector`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiBind_mode_selector`.
     * @returns {OsiBind_mode_selector}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof OsiBind_mode_selector]: OsiBind_mode_selector[_K] }
        >
    ): OsiBind_mode_selector {
        return new OsiBind_mode_selector(_o.mode_value);
    }
}
/**
 * @summary The Leading Root Component Types of OsiBind_mode_selector
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiBind_mode_selector: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "mode-value",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of OsiBind_mode_selector
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiBind_mode_selector: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of OsiBind_mode_selector
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiBind_mode_selector: $.ComponentSpec[] = [];
let _cached_decoder_for_OsiBind_mode_selector: $.ASN1Decoder<
    OsiBind_mode_selector
> | null = null;
let _cached_encoder_for_OsiBind_mode_selector: $.ASN1Encoder<
    OsiBind_mode_selector
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiBind_mode_selector
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBind_mode_selector} The decoded data structure.
 */
export function _decode_OsiBind_mode_selector(el: _Element) {
    if (!_cached_decoder_for_OsiBind_mode_selector) {
        _cached_decoder_for_OsiBind_mode_selector = function (
            el: _Element
        ): OsiBind_mode_selector {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let mode_value!: INTEGER;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "mode-value": (_el: _Element): void => {
                    mode_value = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OsiBind_mode_selector,
                _extension_additions_list_spec_for_OsiBind_mode_selector,
                _root_component_type_list_2_spec_for_OsiBind_mode_selector,
                undefined
            );
            return new OsiBind_mode_selector(
                /* SET_CONSTRUCTOR_CALL */ mode_value
            );
        };
    }
    return _cached_decoder_for_OsiBind_mode_selector(el);
}
/**
 * @summary Encodes a(n) OsiBind_mode_selector into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBind_mode_selector, encoded as an ASN.1 Element.
 */
export function _encode_OsiBind_mode_selector(
    value: OsiBind_mode_selector,
    elGetter: $.ASN1Encoder<OsiBind_mode_selector>
) {
    if (!_cached_encoder_for_OsiBind_mode_selector) {
        _cached_encoder_for_OsiBind_mode_selector = function (
            value: OsiBind_mode_selector,
            elGetter: $.ASN1Encoder<OsiBind_mode_selector>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => $._encodeInteger,
                            $.BER
                        )(value.mode_value, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OsiBind_mode_selector(value, elGetter);
}

/**
 * @summary OsiBind_normal_mode_parameters_protocol_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBind-normal-mode-parameters-protocol-version ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type OsiBind_normal_mode_parameters_protocol_version = BIT_STRING;
/**
 * @summary OsiBind_normal_mode_parameters_protocol_version_version_1
 * @constant
 */
export const OsiBind_normal_mode_parameters_protocol_version_version_1: number = 0; /* LONG_NAMED_BIT */
let _cached_decoder_for_OsiBind_normal_mode_parameters_protocol_version: $.ASN1Decoder<
    OsiBind_normal_mode_parameters_protocol_version
> | null = null;
let _cached_encoder_for_OsiBind_normal_mode_parameters_protocol_version: $.ASN1Encoder<
    OsiBind_normal_mode_parameters_protocol_version
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiBind_normal_mode_parameters_protocol_version
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBind_normal_mode_parameters_protocol_version} The decoded data structure.
 */
export function _decode_OsiBind_normal_mode_parameters_protocol_version(
    el: _Element
) {
    if (!_cached_decoder_for_OsiBind_normal_mode_parameters_protocol_version) {
        _cached_decoder_for_OsiBind_normal_mode_parameters_protocol_version =
            $._decodeBitString;
    }
    return _cached_decoder_for_OsiBind_normal_mode_parameters_protocol_version(
        el
    );
}
/**
 * @summary Encodes a(n) OsiBind_normal_mode_parameters_protocol_version into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBind_normal_mode_parameters_protocol_version, encoded as an ASN.1 Element.
 */
export function _encode_OsiBind_normal_mode_parameters_protocol_version(
    value: OsiBind_normal_mode_parameters_protocol_version,
    elGetter: $.ASN1Encoder<OsiBind_normal_mode_parameters_protocol_version>
) {
    if (!_cached_encoder_for_OsiBind_normal_mode_parameters_protocol_version) {
        _cached_encoder_for_OsiBind_normal_mode_parameters_protocol_version =
            $._encodeBitString;
    }
    return _cached_encoder_for_OsiBind_normal_mode_parameters_protocol_version(
        value,
        elGetter
    );
}

export type Presentation_selector<> = OCTET_STRING; // OctetStringType
let _cached_decoder_for_Presentation_selector: $.ASN1Decoder<
    Presentation_selector
> | null = null;
let _cached_encoder_for_Presentation_selector: $.ASN1Encoder<
    Presentation_selector
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Presentation_selector
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Presentation_selector} The decoded data structure.
 */
export function _decode_Presentation_selector(el: _Element) {
    if (!_cached_decoder_for_Presentation_selector) {
        _cached_decoder_for_Presentation_selector = $._decodeOctetString;
    }
    return _cached_decoder_for_Presentation_selector(el);
}
/**
 * @summary Encodes a(n) Presentation_selector into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Presentation_selector, encoded as an ASN.1 Element.
 */
export function _encode_Presentation_selector(
    value: Presentation_selector,
    elGetter: $.ASN1Encoder<Presentation_selector>
) {
    if (!_cached_encoder_for_Presentation_selector) {
        _cached_encoder_for_Presentation_selector = $._encodeOctetString;
    }
    return _cached_encoder_for_Presentation_selector(value, elGetter);
}

/**
 * @summary Presentation_context_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Presentation-context-identifier  ::=  INTEGER(1..127, ..., 128..MAX)
 * ```
 */
export type Presentation_context_identifier = INTEGER;
let _cached_decoder_for_Presentation_context_identifier: $.ASN1Decoder<
    Presentation_context_identifier
> | null = null;
let _cached_encoder_for_Presentation_context_identifier: $.ASN1Encoder<
    Presentation_context_identifier
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Presentation_context_identifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Presentation_context_identifier} The decoded data structure.
 */
export function _decode_Presentation_context_identifier(el: _Element) {
    if (!_cached_decoder_for_Presentation_context_identifier) {
        _cached_decoder_for_Presentation_context_identifier = $._decodeInteger;
    }
    return _cached_decoder_for_Presentation_context_identifier(el);
}
/**
 * @summary Encodes a(n) Presentation_context_identifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Presentation_context_identifier, encoded as an ASN.1 Element.
 */
export function _encode_Presentation_context_identifier(
    value: Presentation_context_identifier,
    elGetter: $.ASN1Encoder<Presentation_context_identifier>
) {
    if (!_cached_encoder_for_Presentation_context_identifier) {
        _cached_encoder_for_Presentation_context_identifier = $._encodeInteger;
    }
    return _cached_encoder_for_Presentation_context_identifier(value, elGetter);
}

export type Abstract_syntax_name<> = OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_Abstract_syntax_name: $.ASN1Decoder<
    Abstract_syntax_name
> | null = null;
let _cached_encoder_for_Abstract_syntax_name: $.ASN1Encoder<
    Abstract_syntax_name
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Abstract_syntax_name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Abstract_syntax_name} The decoded data structure.
 */
export function _decode_Abstract_syntax_name(el: _Element) {
    if (!_cached_decoder_for_Abstract_syntax_name) {
        _cached_decoder_for_Abstract_syntax_name = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_Abstract_syntax_name(el);
}
/**
 * @summary Encodes a(n) Abstract_syntax_name into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Abstract_syntax_name, encoded as an ASN.1 Element.
 */
export function _encode_Abstract_syntax_name(
    value: Abstract_syntax_name,
    elGetter: $.ASN1Encoder<Abstract_syntax_name>
) {
    if (!_cached_encoder_for_Abstract_syntax_name) {
        _cached_encoder_for_Abstract_syntax_name = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_Abstract_syntax_name(value, elGetter);
}

export type Transfer_syntax_name<> = OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_Transfer_syntax_name: $.ASN1Decoder<
    Transfer_syntax_name
> | null = null;
let _cached_encoder_for_Transfer_syntax_name: $.ASN1Encoder<
    Transfer_syntax_name
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Transfer_syntax_name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Transfer_syntax_name} The decoded data structure.
 */
export function _decode_Transfer_syntax_name(el: _Element) {
    if (!_cached_decoder_for_Transfer_syntax_name) {
        _cached_decoder_for_Transfer_syntax_name = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_Transfer_syntax_name(el);
}
/**
 * @summary Encodes a(n) Transfer_syntax_name into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Transfer_syntax_name, encoded as an ASN.1 Element.
 */
export function _encode_Transfer_syntax_name(
    value: Transfer_syntax_name,
    elGetter: $.ASN1Encoder<Transfer_syntax_name>
) {
    if (!_cached_encoder_for_Transfer_syntax_name) {
        _cached_encoder_for_Transfer_syntax_name = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_Transfer_syntax_name(value, elGetter);
}

/**
 * @summary Context_list_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Context-list-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class Context_list_Item {
    constructor(
        /**
         * @summary `presentation_context_identifier`.
         * @public
         * @readonly
         */
        readonly presentation_context_identifier: Presentation_context_identifier,
        /**
         * @summary `abstract_syntax_name`.
         * @public
         * @readonly
         */
        readonly abstract_syntax_name: Abstract_syntax_name,
        /**
         * @summary `transfer_syntax_name_list`.
         * @public
         * @readonly
         */
        readonly transfer_syntax_name_list: Transfer_syntax_name[]
    ) {}

    /**
     * @summary Restructures an object into a Context_list_Item
     * @description
     *
     * This takes an `object` and converts it to a `Context_list_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Context_list_Item`.
     * @returns {Context_list_Item}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Context_list_Item]: Context_list_Item[_K] }>
    ): Context_list_Item {
        return new Context_list_Item(
            _o.presentation_context_identifier,
            _o.abstract_syntax_name,
            _o.transfer_syntax_name_list
        );
    }
}
/**
 * @summary The Leading Root Component Types of Context_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Context_list_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "presentation-context-identifier",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "abstract-syntax-name",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "transfer-syntax-name-list",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Context_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Context_list_Item: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Context_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Context_list_Item: $.ComponentSpec[] = [];
let _cached_decoder_for_Context_list_Item: $.ASN1Decoder<
    Context_list_Item
> | null = null;
let _cached_encoder_for_Context_list_Item: $.ASN1Encoder<
    Context_list_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Context_list_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Context_list_Item} The decoded data structure.
 */
export function _decode_Context_list_Item(el: _Element) {
    if (!_cached_decoder_for_Context_list_Item) {
        _cached_decoder_for_Context_list_Item = function (
            el: _Element
        ): Context_list_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "Context-list-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "presentation-context-identifier";
            sequence[1].name = "abstract-syntax-name";
            sequence[2].name = "transfer-syntax-name-list";
            let presentation_context_identifier!: Presentation_context_identifier;
            let abstract_syntax_name!: Abstract_syntax_name;
            let transfer_syntax_name_list!: Transfer_syntax_name[];
            presentation_context_identifier = _decode_Presentation_context_identifier(
                sequence[0]
            );
            abstract_syntax_name = _decode_Abstract_syntax_name(sequence[1]);
            transfer_syntax_name_list = $._decodeSequenceOf<
                Transfer_syntax_name
            >(() => _decode_Transfer_syntax_name)(sequence[2]);
            return new Context_list_Item(
                presentation_context_identifier,
                abstract_syntax_name,
                transfer_syntax_name_list
            );
        };
    }
    return _cached_decoder_for_Context_list_Item(el);
}
/**
 * @summary Encodes a(n) Context_list_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Context_list_Item, encoded as an ASN.1 Element.
 */
export function _encode_Context_list_Item(
    value: Context_list_Item,
    elGetter: $.ASN1Encoder<Context_list_Item>
) {
    if (!_cached_encoder_for_Context_list_Item) {
        _cached_encoder_for_Context_list_Item = function (
            value: Context_list_Item,
            elGetter: $.ASN1Encoder<Context_list_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Presentation_context_identifier(
                            value.presentation_context_identifier,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Abstract_syntax_name(
                            value.abstract_syntax_name,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSequenceOf<
                            Transfer_syntax_name
                        >(() => _encode_Transfer_syntax_name, $.BER)(
                            value.transfer_syntax_name_list,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Context_list_Item(value, elGetter);
}

export type Context_list<> = Context_list_Item[]; // SequenceOfType
let _cached_decoder_for_Context_list: $.ASN1Decoder<Context_list> | null = null;
let _cached_encoder_for_Context_list: $.ASN1Encoder<Context_list> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Context_list
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Context_list} The decoded data structure.
 */
export function _decode_Context_list(el: _Element) {
    if (!_cached_decoder_for_Context_list) {
        _cached_decoder_for_Context_list = $._decodeSequenceOf<
            Context_list_Item
        >(() => _decode_Context_list_Item);
    }
    return _cached_decoder_for_Context_list(el);
}
/**
 * @summary Encodes a(n) Context_list into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Context_list, encoded as an ASN.1 Element.
 */
export function _encode_Context_list(
    value: Context_list,
    elGetter: $.ASN1Encoder<Context_list>
) {
    if (!_cached_encoder_for_Context_list) {
        _cached_encoder_for_Context_list = $._encodeSequenceOf<
            Context_list_Item
        >(() => _encode_Context_list_Item, $.BER);
    }
    return _cached_encoder_for_Context_list(value, elGetter);
}

/**
 * @summary OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBind-normal-mode-parameters-user-data-fully-encoded-data-Item-presentation-data-values ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = {
    single_ASN1_type: _Element;
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values: $.ASN1Decoder<
    OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
> | null = null;
let _cached_encoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values: $.ASN1Encoder<
    OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values} The decoded data structure.
 */
export function _decode_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
    el: _Element
) {
    if (
        !_cached_decoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_decoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = $._decode_inextensible_choice<
            OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
        >({
            "CONTEXT 0": [
                "single_ASN1_type",
                $._decode_explicit<_Element>(() => $._decodeAny),
            ],
        });
    }
    return _cached_decoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
        el
    );
}
/**
 * @summary Encodes a(n) OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values, encoded as an ASN.1 Element.
 */
export function _encode_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
    value: OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values,
    elGetter: $.ASN1Encoder<
        OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    >
) {
    if (
        !_cached_encoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_encoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = $._encode_choice<
            OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
        >(
            {
                single_ASN1_type: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeAny,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
        value,
        elGetter
    );
}

/**
 * @summary OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBind-normal-mode-parameters-user-data-fully-encoded-data-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item {
    constructor(
        /**
         * @summary `transfer_syntax_name`.
         * @public
         * @readonly
         */
        readonly transfer_syntax_name: OPTIONAL<Transfer_syntax_name>,
        /**
         * @summary `presentation_context_identifier`.
         * @public
         * @readonly
         */
        readonly presentation_context_identifier: Presentation_context_identifier,
        /**
         * @summary `presentation_data_values`.
         * @public
         * @readonly
         */
        readonly presentation_data_values: OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {}

    /**
     * @summary Restructures an object into a OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item
     * @description
     *
     * This takes an `object` and converts it to a `OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item`.
     * @returns {OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item]: OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item[_K];
            }
        >
    ): OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item {
        return new OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item(
            _o.transfer_syntax_name,
            _o.presentation_context_identifier,
            _o.presentation_data_values
        );
    }
}
/**
 * @summary The Leading Root Component Types of OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "transfer-syntax-name",
        true,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "presentation-context-identifier",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "presentation-data-values",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ComponentSpec[] = [];
let _cached_decoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ASN1Decoder<
    OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item
> | null = null;
let _cached_encoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ASN1Encoder<
    OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item} The decoded data structure.
 */
export function _decode_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item(
    el: _Element
) {
    if (
        !_cached_decoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item
    ) {
        _cached_decoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item = function (
            el: _Element
        ): OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let transfer_syntax_name: OPTIONAL<Transfer_syntax_name>;
            let presentation_context_identifier!: Presentation_context_identifier;
            let presentation_data_values!: OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "transfer-syntax-name": (_el: _Element): void => {
                    transfer_syntax_name = _decode_Transfer_syntax_name(_el);
                },
                "presentation-context-identifier": (_el: _Element): void => {
                    presentation_context_identifier = _decode_Presentation_context_identifier(
                        _el
                    );
                },
                "presentation-data-values": (_el: _Element): void => {
                    presentation_data_values = _decode_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item,
                _extension_additions_list_spec_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item,
                _root_component_type_list_2_spec_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item,
                undefined
            );
            return new OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item(
                /* SEQUENCE_CONSTRUCTOR_CALL */ transfer_syntax_name,
                presentation_context_identifier,
                presentation_data_values
            );
        };
    }
    return _cached_decoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item(
        el
    );
}
/**
 * @summary Encodes a(n) OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item, encoded as an ASN.1 Element.
 */
export function _encode_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item(
    value: OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item,
    elGetter: $.ASN1Encoder<
        OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item
    >
) {
    if (
        !_cached_encoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item
    ) {
        _cached_encoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item = function (
            value: OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item,
            elGetter: $.ASN1Encoder<
                OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item
            >
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.transfer_syntax_name ===
                        undefined
                            ? undefined
                            : _encode_Transfer_syntax_name(
                                  value.transfer_syntax_name,
                                  $.BER
                              ),
                        /* REQUIRED   */ _encode_Presentation_context_identifier(
                            value.presentation_context_identifier,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
                            value.presentation_data_values,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item(
        value,
        elGetter
    );
}

/**
 * @summary OsiBind_normal_mode_parameters_user_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBind-normal-mode-parameters-user-data ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type OsiBind_normal_mode_parameters_user_data = {
    fully_encoded_data: OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item[];
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_OsiBind_normal_mode_parameters_user_data: $.ASN1Decoder<
    OsiBind_normal_mode_parameters_user_data
> | null = null;
let _cached_encoder_for_OsiBind_normal_mode_parameters_user_data: $.ASN1Encoder<
    OsiBind_normal_mode_parameters_user_data
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiBind_normal_mode_parameters_user_data
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBind_normal_mode_parameters_user_data} The decoded data structure.
 */
export function _decode_OsiBind_normal_mode_parameters_user_data(el: _Element) {
    if (!_cached_decoder_for_OsiBind_normal_mode_parameters_user_data) {
        _cached_decoder_for_OsiBind_normal_mode_parameters_user_data = $._decode_inextensible_choice<
            OsiBind_normal_mode_parameters_user_data
        >({
            "APPLICATION 1": [
                "fully_encoded_data",
                $._decode_explicit<
                    OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item[]
                >(() =>
                    $._decodeSequenceOf<
                        OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item
                    >(
                        () =>
                            _decode_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item
                    )
                ),
            ],
        });
    }
    return _cached_decoder_for_OsiBind_normal_mode_parameters_user_data(el);
}
/**
 * @summary Encodes a(n) OsiBind_normal_mode_parameters_user_data into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBind_normal_mode_parameters_user_data, encoded as an ASN.1 Element.
 */
export function _encode_OsiBind_normal_mode_parameters_user_data(
    value: OsiBind_normal_mode_parameters_user_data,
    elGetter: $.ASN1Encoder<OsiBind_normal_mode_parameters_user_data>
) {
    if (!_cached_encoder_for_OsiBind_normal_mode_parameters_user_data) {
        _cached_encoder_for_OsiBind_normal_mode_parameters_user_data = $._encode_choice<
            OsiBind_normal_mode_parameters_user_data
        >(
            {
                fully_encoded_data: $._encode_explicit(
                    _TagClass.application,
                    1,
                    () =>
                        $._encodeSequenceOf<
                            OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item
                        >(
                            () =>
                                _encode_OsiBind_normal_mode_parameters_user_data_fully_encoded_data_Item,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_OsiBind_normal_mode_parameters_user_data(
        value,
        elGetter
    );
}

/**
 * @summary OsiBind_normal_mode_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBind-normal-mode-parameters ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class OsiBind_normal_mode_parameters {
    constructor(
        /**
         * @summary `protocol_version`.
         * @public
         * @readonly
         */
        readonly protocol_version: OPTIONAL<
            OsiBind_normal_mode_parameters_protocol_version
        >,
        /**
         * @summary `calling_presentation_selector`.
         * @public
         * @readonly
         */
        readonly calling_presentation_selector: OPTIONAL<Presentation_selector>,
        /**
         * @summary `called_presentation_selector`.
         * @public
         * @readonly
         */
        readonly called_presentation_selector: OPTIONAL<Presentation_selector>,
        /**
         * @summary `presentation_context_definition_list`.
         * @public
         * @readonly
         */
        readonly presentation_context_definition_list: Context_list,
        /**
         * @summary `user_data`.
         * @public
         * @readonly
         */
        readonly user_data: OsiBind_normal_mode_parameters_user_data
    ) {}

    /**
     * @summary Restructures an object into a OsiBind_normal_mode_parameters
     * @description
     *
     * This takes an `object` and converts it to a `OsiBind_normal_mode_parameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiBind_normal_mode_parameters`.
     * @returns {OsiBind_normal_mode_parameters}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof OsiBind_normal_mode_parameters]: OsiBind_normal_mode_parameters[_K];
            }
        >
    ): OsiBind_normal_mode_parameters {
        return new OsiBind_normal_mode_parameters(
            _o.protocol_version,
            _o.calling_presentation_selector,
            _o.called_presentation_selector,
            _o.presentation_context_definition_list,
            _o.user_data
        );
    }

    /**
     * @summary Getter that returns the default value for `protocol_version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_protocol_version() {
        return (() => {
            const _ret = new Uint8ClampedArray(Math.max(0));
            _ret[
                OsiBind_normal_mode_parameters_protocol_version_version_1
            ] = TRUE_BIT;
            return _ret;
        })();
    }
}
/**
 * @summary The Leading Root Component Types of OsiBind_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiBind_normal_mode_parameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "protocol-version",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "calling-presentation-selector",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "called-presentation-selector",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "presentation-context-definition-list",
        false,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec("user-data", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of OsiBind_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiBind_normal_mode_parameters: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of OsiBind_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiBind_normal_mode_parameters: $.ComponentSpec[] = [];
let _cached_decoder_for_OsiBind_normal_mode_parameters: $.ASN1Decoder<
    OsiBind_normal_mode_parameters
> | null = null;
let _cached_encoder_for_OsiBind_normal_mode_parameters: $.ASN1Encoder<
    OsiBind_normal_mode_parameters
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiBind_normal_mode_parameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBind_normal_mode_parameters} The decoded data structure.
 */
export function _decode_OsiBind_normal_mode_parameters(el: _Element) {
    if (!_cached_decoder_for_OsiBind_normal_mode_parameters) {
        _cached_decoder_for_OsiBind_normal_mode_parameters = function (
            el: _Element
        ): OsiBind_normal_mode_parameters {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let protocol_version: OPTIONAL<OsiBind_normal_mode_parameters_protocol_version> =
                OsiBind_normal_mode_parameters._default_value_for_protocol_version;
            let calling_presentation_selector: OPTIONAL<Presentation_selector>;
            let called_presentation_selector: OPTIONAL<Presentation_selector>;
            let presentation_context_definition_list!: Context_list;
            let user_data!: OsiBind_normal_mode_parameters_user_data;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "protocol-version": (_el: _Element): void => {
                    protocol_version = $._decode_explicit<
                        OsiBind_normal_mode_parameters_protocol_version
                    >(
                        () =>
                            _decode_OsiBind_normal_mode_parameters_protocol_version
                    )(_el);
                },
                "calling-presentation-selector": (_el: _Element): void => {
                    calling_presentation_selector = $._decode_explicit<
                        Presentation_selector
                    >(() => _decode_Presentation_selector)(_el);
                },
                "called-presentation-selector": (_el: _Element): void => {
                    called_presentation_selector = $._decode_explicit<
                        Presentation_selector
                    >(() => _decode_Presentation_selector)(_el);
                },
                "presentation-context-definition-list": (
                    _el: _Element
                ): void => {
                    presentation_context_definition_list = $._decode_explicit<
                        Context_list
                    >(() => _decode_Context_list)(_el);
                },
                "user-data": (_el: _Element): void => {
                    user_data = _decode_OsiBind_normal_mode_parameters_user_data(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OsiBind_normal_mode_parameters,
                _extension_additions_list_spec_for_OsiBind_normal_mode_parameters,
                _root_component_type_list_2_spec_for_OsiBind_normal_mode_parameters,
                undefined
            );
            return new OsiBind_normal_mode_parameters(
                /* SEQUENCE_CONSTRUCTOR_CALL */ protocol_version,
                calling_presentation_selector,
                called_presentation_selector,
                presentation_context_definition_list,
                user_data
            );
        };
    }
    return _cached_decoder_for_OsiBind_normal_mode_parameters(el);
}
/**
 * @summary Encodes a(n) OsiBind_normal_mode_parameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBind_normal_mode_parameters, encoded as an ASN.1 Element.
 */
export function _encode_OsiBind_normal_mode_parameters(
    value: OsiBind_normal_mode_parameters,
    elGetter: $.ASN1Encoder<OsiBind_normal_mode_parameters>
) {
    if (!_cached_encoder_for_OsiBind_normal_mode_parameters) {
        _cached_encoder_for_OsiBind_normal_mode_parameters = function (
            value: OsiBind_normal_mode_parameters,
            elGetter: $.ASN1Encoder<OsiBind_normal_mode_parameters>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.protocol_version === undefined ||
                        $.deepEq(
                            value.protocol_version,
                            OsiBind_normal_mode_parameters._default_value_for_protocol_version
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      _encode_OsiBind_normal_mode_parameters_protocol_version,
                                  $.BER
                              )(value.protocol_version, $.BER),
                        /* IF_ABSENT  */ value.calling_presentation_selector ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Presentation_selector,
                                  $.BER
                              )(value.calling_presentation_selector, $.BER),
                        /* IF_ABSENT  */ value.called_presentation_selector ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_Presentation_selector,
                                  $.BER
                              )(value.called_presentation_selector, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            4,
                            () => _encode_Context_list,
                            $.BER
                        )(value.presentation_context_definition_list, $.BER),
                        /* REQUIRED   */ _encode_OsiBind_normal_mode_parameters_user_data(
                            value.user_data,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OsiBind_normal_mode_parameters(value, elGetter);
}

/**
 * @summary OsiBind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBind{APPLICATION-CONTEXT:Protocols} ::= SET {
 *   mode-selector                  [0]  IMPLICIT SET {
 *     mode-value                     [0]  IMPLICIT INTEGER(1)},
 *   normal-mode-parameters         [2]  IMPLICIT SEQUENCE {
 *     protocol-version               [0]  IMPLICIT BIT STRING {version-1(0)}
 *                                           DEFAULT {version-1},
 *     calling-presentation-selector  [1]  IMPLICIT Presentation-selector OPTIONAL,
 *     called-presentation-selector   [2]  IMPLICIT Presentation-selector OPTIONAL,
 *     presentation-context-definition-list
 *                                    [4]  IMPLICIT Context-list,
 *     user-data                           CHOICE {
 *       fully-encoded-data  [APPLICATION 1] IMPLICIT SEQUENCE SIZE (1) OF SEQUENCE {
 *         transfer-syntax-name              Transfer-syntax-name OPTIONAL,
 *         presentation-context-identifier   Presentation-context-identifier,
 *         presentation-data-values          CHOICE {
 *           single-ASN1-type             [0]  ABSTRACT-SYNTAX.&Type
 *                                              (AARQ-apdu{{Protocols}})}}}}}
 * ```
 *
 * @class
 */
export class OsiBind {
    constructor(
        /**
         * @summary `mode_selector`.
         * @public
         * @readonly
         */
        readonly mode_selector: OsiBind_mode_selector,
        /**
         * @summary `normal_mode_parameters`.
         * @public
         * @readonly
         */
        readonly normal_mode_parameters: OsiBind_normal_mode_parameters
    ) {}

    /**
     * @summary Restructures an object into a OsiBind
     * @description
     *
     * This takes an `object` and converts it to a `OsiBind`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiBind`.
     * @returns {OsiBind}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof OsiBind]: OsiBind[_K] }>
    ): OsiBind {
        return new OsiBind(_o.mode_selector, _o.normal_mode_parameters);
    }
}
/**
 * @summary The Leading Root Component Types of OsiBind
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiBind: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "mode-selector",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "normal-mode-parameters",
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of OsiBind
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiBind: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of OsiBind
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiBind: $.ComponentSpec[] = [];
let _cached_decoder_for_OsiBind: $.ASN1Decoder<OsiBind> | null = null;
let _cached_encoder_for_OsiBind: $.ASN1Encoder<OsiBind> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiBind
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBind} The decoded data structure.
 */
export function _decode_OsiBind(el: _Element) {
    if (!_cached_decoder_for_OsiBind) {
        _cached_decoder_for_OsiBind = function (el: _Element): OsiBind {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let mode_selector!: OsiBind_mode_selector;
            let normal_mode_parameters!: OsiBind_normal_mode_parameters;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "mode-selector": (_el: _Element): void => {
                    mode_selector = $._decode_explicit<OsiBind_mode_selector>(
                        () => _decode_OsiBind_mode_selector
                    )(_el);
                },
                "normal-mode-parameters": (_el: _Element): void => {
                    normal_mode_parameters = $._decode_explicit<
                        OsiBind_normal_mode_parameters
                    >(() => _decode_OsiBind_normal_mode_parameters)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OsiBind,
                _extension_additions_list_spec_for_OsiBind,
                _root_component_type_list_2_spec_for_OsiBind,
                undefined
            );
            return new OsiBind(
                /* SET_CONSTRUCTOR_CALL */ mode_selector,
                normal_mode_parameters
            );
        };
    }
    return _cached_decoder_for_OsiBind(el);
}
/**
 * @summary Encodes a(n) OsiBind into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBind, encoded as an ASN.1 Element.
 */
export function _encode_OsiBind(
    value: OsiBind,
    elGetter: $.ASN1Encoder<OsiBind>
) {
    if (!_cached_encoder_for_OsiBind) {
        _cached_encoder_for_OsiBind = function (
            value: OsiBind,
            elGetter: $.ASN1Encoder<OsiBind>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_OsiBind_mode_selector,
                            $.BER
                        )(value.mode_selector, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            2,
                            () => _encode_OsiBind_normal_mode_parameters,
                            $.BER
                        )(value.normal_mode_parameters, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OsiBind(value, elGetter);
}

/**
 * @summary AARQ_apdu_protocol_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AARQ-apdu-protocol-version ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AARQ_apdu_protocol_version = BIT_STRING;
/**
 * @summary AARQ_apdu_protocol_version_version1
 * @constant
 */
export const AARQ_apdu_protocol_version_version1: number = 0; /* LONG_NAMED_BIT */
let _cached_decoder_for_AARQ_apdu_protocol_version: $.ASN1Decoder<
    AARQ_apdu_protocol_version
> | null = null;
let _cached_encoder_for_AARQ_apdu_protocol_version: $.ASN1Encoder<
    AARQ_apdu_protocol_version
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AARQ_apdu_protocol_version
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AARQ_apdu_protocol_version} The decoded data structure.
 */
export function _decode_AARQ_apdu_protocol_version(el: _Element) {
    if (!_cached_decoder_for_AARQ_apdu_protocol_version) {
        _cached_decoder_for_AARQ_apdu_protocol_version = $._decodeBitString;
    }
    return _cached_decoder_for_AARQ_apdu_protocol_version(el);
}
/**
 * @summary Encodes a(n) AARQ_apdu_protocol_version into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AARQ_apdu_protocol_version, encoded as an ASN.1 Element.
 */
export function _encode_AARQ_apdu_protocol_version(
    value: AARQ_apdu_protocol_version,
    elGetter: $.ASN1Encoder<AARQ_apdu_protocol_version>
) {
    if (!_cached_encoder_for_AARQ_apdu_protocol_version) {
        _cached_encoder_for_AARQ_apdu_protocol_version = $._encodeBitString;
    }
    return _cached_encoder_for_AARQ_apdu_protocol_version(value, elGetter);
}

export type Application_context_name<> = OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_Application_context_name: $.ASN1Decoder<
    Application_context_name
> | null = null;
let _cached_encoder_for_Application_context_name: $.ASN1Encoder<
    Application_context_name
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Application_context_name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Application_context_name} The decoded data structure.
 */
export function _decode_Application_context_name(el: _Element) {
    if (!_cached_decoder_for_Application_context_name) {
        _cached_decoder_for_Application_context_name =
            $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_Application_context_name(el);
}
/**
 * @summary Encodes a(n) Application_context_name into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Application_context_name, encoded as an ASN.1 Element.
 */
export function _encode_Application_context_name(
    value: Application_context_name,
    elGetter: $.ASN1Encoder<Application_context_name>
) {
    if (!_cached_encoder_for_Application_context_name) {
        _cached_encoder_for_Application_context_name =
            $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_Application_context_name(value, elGetter);
}

/**
 * @summary AP_invocation_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AP-invocation-identifier  ::=  INTEGER
 * ```
 */
export type AP_invocation_identifier = INTEGER;
let _cached_decoder_for_AP_invocation_identifier: $.ASN1Decoder<
    AP_invocation_identifier
> | null = null;
let _cached_encoder_for_AP_invocation_identifier: $.ASN1Encoder<
    AP_invocation_identifier
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AP_invocation_identifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AP_invocation_identifier} The decoded data structure.
 */
export function _decode_AP_invocation_identifier(el: _Element) {
    if (!_cached_decoder_for_AP_invocation_identifier) {
        _cached_decoder_for_AP_invocation_identifier = $._decodeInteger;
    }
    return _cached_decoder_for_AP_invocation_identifier(el);
}
/**
 * @summary Encodes a(n) AP_invocation_identifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AP_invocation_identifier, encoded as an ASN.1 Element.
 */
export function _encode_AP_invocation_identifier(
    value: AP_invocation_identifier,
    elGetter: $.ASN1Encoder<AP_invocation_identifier>
) {
    if (!_cached_encoder_for_AP_invocation_identifier) {
        _cached_encoder_for_AP_invocation_identifier = $._encodeInteger;
    }
    return _cached_encoder_for_AP_invocation_identifier(value, elGetter);
}

/**
 * @summary AE_invocation_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AE-invocation-identifier  ::=  INTEGER
 * ```
 */
export type AE_invocation_identifier = INTEGER;
let _cached_decoder_for_AE_invocation_identifier: $.ASN1Decoder<
    AE_invocation_identifier
> | null = null;
let _cached_encoder_for_AE_invocation_identifier: $.ASN1Encoder<
    AE_invocation_identifier
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AE_invocation_identifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AE_invocation_identifier} The decoded data structure.
 */
export function _decode_AE_invocation_identifier(el: _Element) {
    if (!_cached_decoder_for_AE_invocation_identifier) {
        _cached_decoder_for_AE_invocation_identifier = $._decodeInteger;
    }
    return _cached_decoder_for_AE_invocation_identifier(el);
}
/**
 * @summary Encodes a(n) AE_invocation_identifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AE_invocation_identifier, encoded as an ASN.1 Element.
 */
export function _encode_AE_invocation_identifier(
    value: AE_invocation_identifier,
    elGetter: $.ASN1Encoder<AE_invocation_identifier>
) {
    if (!_cached_encoder_for_AE_invocation_identifier) {
        _cached_encoder_for_AE_invocation_identifier = $._encodeInteger;
    }
    return _cached_encoder_for_AE_invocation_identifier(value, elGetter);
}

export type Implementation_data<> = GraphicString; // GraphicString
let _cached_decoder_for_Implementation_data: $.ASN1Decoder<
    Implementation_data
> | null = null;
let _cached_encoder_for_Implementation_data: $.ASN1Encoder<
    Implementation_data
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Implementation_data
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Implementation_data} The decoded data structure.
 */
export function _decode_Implementation_data(el: _Element) {
    if (!_cached_decoder_for_Implementation_data) {
        _cached_decoder_for_Implementation_data = $._decodeGraphicString;
    }
    return _cached_decoder_for_Implementation_data(el);
}
/**
 * @summary Encodes a(n) Implementation_data into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Implementation_data, encoded as an ASN.1 Element.
 */
export function _encode_Implementation_data(
    value: Implementation_data,
    elGetter: $.ASN1Encoder<Implementation_data>
) {
    if (!_cached_encoder_for_Implementation_data) {
        _cached_encoder_for_Implementation_data = $._encodeGraphicString;
    }
    return _cached_encoder_for_Implementation_data(value, elGetter);
}

export type Association_informationBind<> = EXTERNAL[]; // SequenceOfType
let _cached_decoder_for_Association_informationBind: $.ASN1Decoder<
    Association_informationBind
> | null = null;
let _cached_encoder_for_Association_informationBind: $.ASN1Encoder<
    Association_informationBind
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Association_informationBind
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Association_informationBind} The decoded data structure.
 */
export function _decode_Association_informationBind(el: _Element) {
    if (!_cached_decoder_for_Association_informationBind) {
        _cached_decoder_for_Association_informationBind = $._decodeSequenceOf<
            EXTERNAL
        >(() => $._decodeExternal);
    }
    return _cached_decoder_for_Association_informationBind(el);
}
/**
 * @summary Encodes a(n) Association_informationBind into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Association_informationBind, encoded as an ASN.1 Element.
 */
export function _encode_Association_informationBind(
    value: Association_informationBind,
    elGetter: $.ASN1Encoder<Association_informationBind>
) {
    if (!_cached_encoder_for_Association_informationBind) {
        _cached_encoder_for_Association_informationBind = $._encodeSequenceOf<
            EXTERNAL
        >(() => $._encodeExternal, $.BER);
    }
    return _cached_encoder_for_Association_informationBind(value, elGetter);
}

/**
 * @summary AARQ_apdu
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AARQ-apdu{APPLICATION-CONTEXT:Protocols} ::= [APPLICATION 0] IMPLICIT SEQUENCE {
 *   protocol-version                  [0] IMPLICIT BIT STRING {version1(0)}
 *                                              DEFAULT {version1},
 *   application-context-name          [1]  Application-context-name,
 *   called-AP-title                   [2]  Name OPTIONAL,
 *   called-AE-qualifier               [3]  RelativeDistinguishedName    OPTIONAL,
 *   called-AP-invocation-identifier   [4]  AP-invocation-identifier     OPTIONAL,
 *   called-AE-invocation-identifier   [5]  AE-invocation-identifier     OPTIONAL,
 *   calling-AP-title                  [6]  Name                         OPTIONAL,
 *   calling-AE-qualifier              [7]  RelativeDistinguishedName    OPTIONAL,
 *   calling-AP-invocation-identifier  [8]  AP-invocation-identifier     OPTIONAL,
 *   calling-AE-invocation-identifier  [9]  AE-invocation-identifier     OPTIONAL,
 *   implementation-information        [29] IMPLICIT Implementation-data OPTIONAL,
 *   user-information                  [30] IMPLICIT
 *                                            Association-informationBind{{Protocols}}}
 * ```
 *
 * @class
 */
export class AARQ_apdu {
    constructor(
        /**
         * @summary `protocol_version`.
         * @public
         * @readonly
         */
        readonly protocol_version: OPTIONAL<AARQ_apdu_protocol_version>,
        /**
         * @summary `application_context_name`.
         * @public
         * @readonly
         */
        readonly application_context_name: Application_context_name,
        /**
         * @summary `called_AP_title`.
         * @public
         * @readonly
         */
        readonly called_AP_title: OPTIONAL<Name>,
        /**
         * @summary `called_AE_qualifier`.
         * @public
         * @readonly
         */
        readonly called_AE_qualifier: OPTIONAL<RelativeDistinguishedName>,
        /**
         * @summary `called_AP_invocation_identifier`.
         * @public
         * @readonly
         */
        readonly called_AP_invocation_identifier: OPTIONAL<
            AP_invocation_identifier
        >,
        /**
         * @summary `called_AE_invocation_identifier`.
         * @public
         * @readonly
         */
        readonly called_AE_invocation_identifier: OPTIONAL<
            AE_invocation_identifier
        >,
        /**
         * @summary `calling_AP_title`.
         * @public
         * @readonly
         */
        readonly calling_AP_title: OPTIONAL<Name>,
        /**
         * @summary `calling_AE_qualifier`.
         * @public
         * @readonly
         */
        readonly calling_AE_qualifier: OPTIONAL<RelativeDistinguishedName>,
        /**
         * @summary `calling_AP_invocation_identifier`.
         * @public
         * @readonly
         */
        readonly calling_AP_invocation_identifier: OPTIONAL<
            AP_invocation_identifier
        >,
        /**
         * @summary `calling_AE_invocation_identifier`.
         * @public
         * @readonly
         */
        readonly calling_AE_invocation_identifier: OPTIONAL<
            AE_invocation_identifier
        >,
        /**
         * @summary `implementation_information`.
         * @public
         * @readonly
         */
        readonly implementation_information: OPTIONAL<Implementation_data>,
        /**
         * @summary `user_information`.
         * @public
         * @readonly
         */
        readonly user_information: Association_informationBind
    ) {}

    /**
     * @summary Restructures an object into a AARQ_apdu
     * @description
     *
     * This takes an `object` and converts it to a `AARQ_apdu`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AARQ_apdu`.
     * @returns {AARQ_apdu}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AARQ_apdu]: AARQ_apdu[_K] }>
    ): AARQ_apdu {
        return new AARQ_apdu(
            _o.protocol_version,
            _o.application_context_name,
            _o.called_AP_title,
            _o.called_AE_qualifier,
            _o.called_AP_invocation_identifier,
            _o.called_AE_invocation_identifier,
            _o.calling_AP_title,
            _o.calling_AE_qualifier,
            _o.calling_AP_invocation_identifier,
            _o.calling_AE_invocation_identifier,
            _o.implementation_information,
            _o.user_information
        );
    }

    /**
     * @summary Getter that returns the default value for `protocol_version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_protocol_version() {
        return (() => {
            const _ret = new Uint8ClampedArray(Math.max(0));
            _ret[AARQ_apdu_protocol_version_version1] = TRUE_BIT;
            return _ret;
        })();
    }
}
/**
 * @summary The Leading Root Component Types of AARQ_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AARQ_apdu: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "protocol-version",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "application-context-name",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "called-AP-title",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "called-AE-qualifier",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "called-AP-invocation-identifier",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "called-AE-invocation-identifier",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "calling-AP-title",
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "calling-AE-qualifier",
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "calling-AP-invocation-identifier",
        true,
        $.hasTag(_TagClass.context, 8),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "calling-AE-invocation-identifier",
        true,
        $.hasTag(_TagClass.context, 9),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "implementation-information",
        true,
        $.hasTag(_TagClass.context, 29),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "user-information",
        false,
        $.hasTag(_TagClass.context, 30),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AARQ_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AARQ_apdu: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AARQ_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AARQ_apdu: $.ComponentSpec[] = [];
let _cached_decoder_for_AARQ_apdu: $.ASN1Decoder<AARQ_apdu> | null = null;
let _cached_encoder_for_AARQ_apdu: $.ASN1Encoder<AARQ_apdu> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AARQ_apdu
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AARQ_apdu} The decoded data structure.
 */
export function _decode_AARQ_apdu(el: _Element) {
    if (!_cached_decoder_for_AARQ_apdu) {
        _cached_decoder_for_AARQ_apdu = $._decode_explicit<AARQ_apdu>(
            () =>
                function (el: _Element): AARQ_apdu {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let protocol_version: OPTIONAL<AARQ_apdu_protocol_version> =
                        AARQ_apdu._default_value_for_protocol_version;
                    let application_context_name!: Application_context_name;
                    let called_AP_title: OPTIONAL<Name>;
                    let called_AE_qualifier: OPTIONAL<RelativeDistinguishedName>;
                    let called_AP_invocation_identifier: OPTIONAL<AP_invocation_identifier>;
                    let called_AE_invocation_identifier: OPTIONAL<AE_invocation_identifier>;
                    let calling_AP_title: OPTIONAL<Name>;
                    let calling_AE_qualifier: OPTIONAL<RelativeDistinguishedName>;
                    let calling_AP_invocation_identifier: OPTIONAL<AP_invocation_identifier>;
                    let calling_AE_invocation_identifier: OPTIONAL<AE_invocation_identifier>;
                    let implementation_information: OPTIONAL<Implementation_data>;
                    let user_information!: Association_informationBind;
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        "protocol-version": (_el: _Element): void => {
                            protocol_version = $._decode_explicit<
                                AARQ_apdu_protocol_version
                            >(() => _decode_AARQ_apdu_protocol_version)(_el);
                        },
                        "application-context-name": (_el: _Element): void => {
                            application_context_name = $._decode_explicit<
                                Application_context_name
                            >(() => _decode_Application_context_name)(_el);
                        },
                        "called-AP-title": (_el: _Element): void => {
                            called_AP_title = $._decode_explicit<Name>(
                                () => _decode_Name
                            )(_el);
                        },
                        "called-AE-qualifier": (_el: _Element): void => {
                            called_AE_qualifier = $._decode_explicit<
                                RelativeDistinguishedName
                            >(() => _decode_RelativeDistinguishedName)(_el);
                        },
                        "called-AP-invocation-identifier": (
                            _el: _Element
                        ): void => {
                            called_AP_invocation_identifier = $._decode_explicit<
                                AP_invocation_identifier
                            >(() => _decode_AP_invocation_identifier)(_el);
                        },
                        "called-AE-invocation-identifier": (
                            _el: _Element
                        ): void => {
                            called_AE_invocation_identifier = $._decode_explicit<
                                AE_invocation_identifier
                            >(() => _decode_AE_invocation_identifier)(_el);
                        },
                        "calling-AP-title": (_el: _Element): void => {
                            calling_AP_title = $._decode_explicit<Name>(
                                () => _decode_Name
                            )(_el);
                        },
                        "calling-AE-qualifier": (_el: _Element): void => {
                            calling_AE_qualifier = $._decode_explicit<
                                RelativeDistinguishedName
                            >(() => _decode_RelativeDistinguishedName)(_el);
                        },
                        "calling-AP-invocation-identifier": (
                            _el: _Element
                        ): void => {
                            calling_AP_invocation_identifier = $._decode_explicit<
                                AP_invocation_identifier
                            >(() => _decode_AP_invocation_identifier)(_el);
                        },
                        "calling-AE-invocation-identifier": (
                            _el: _Element
                        ): void => {
                            calling_AE_invocation_identifier = $._decode_explicit<
                                AE_invocation_identifier
                            >(() => _decode_AE_invocation_identifier)(_el);
                        },
                        "implementation-information": (_el: _Element): void => {
                            implementation_information = $._decode_explicit<
                                Implementation_data
                            >(() => _decode_Implementation_data)(_el);
                        },
                        "user-information": (_el: _Element): void => {
                            user_information = $._decode_explicit<
                                Association_informationBind
                            >(() => _decode_Association_informationBind)(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_AARQ_apdu,
                        _extension_additions_list_spec_for_AARQ_apdu,
                        _root_component_type_list_2_spec_for_AARQ_apdu,
                        undefined
                    );
                    return new AARQ_apdu(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ protocol_version,
                        application_context_name,
                        called_AP_title,
                        called_AE_qualifier,
                        called_AP_invocation_identifier,
                        called_AE_invocation_identifier,
                        calling_AP_title,
                        calling_AE_qualifier,
                        calling_AP_invocation_identifier,
                        calling_AE_invocation_identifier,
                        implementation_information,
                        user_information
                    );
                }
        );
    }
    return _cached_decoder_for_AARQ_apdu(el);
}
/**
 * @summary Encodes a(n) AARQ_apdu into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AARQ_apdu, encoded as an ASN.1 Element.
 */
export function _encode_AARQ_apdu(
    value: AARQ_apdu,
    elGetter: $.ASN1Encoder<AARQ_apdu>
) {
    if (!_cached_encoder_for_AARQ_apdu) {
        _cached_encoder_for_AARQ_apdu = $._encode_explicit(
            _TagClass.application,
            0,
            () =>
                function (
                    value: AARQ_apdu,
                    elGetter: $.ASN1Encoder<AARQ_apdu>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* IF_DEFAULT */ value.protocol_version ===
                                    undefined ||
                                $.deepEq(
                                    value.protocol_version,
                                    AARQ_apdu._default_value_for_protocol_version
                                )
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          0,
                                          () =>
                                              _encode_AARQ_apdu_protocol_version,
                                          $.BER
                                      )(value.protocol_version, $.BER),
                                /* REQUIRED   */ $._encode_explicit(
                                    _TagClass.context,
                                    1,
                                    () => _encode_Application_context_name,
                                    $.BER
                                )(value.application_context_name, $.BER),
                                /* IF_ABSENT  */ value.called_AP_title ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          2,
                                          () => _encode_Name,
                                          $.BER
                                      )(value.called_AP_title, $.BER),
                                /* IF_ABSENT  */ value.called_AE_qualifier ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          3,
                                          () =>
                                              _encode_RelativeDistinguishedName,
                                          $.BER
                                      )(value.called_AE_qualifier, $.BER),
                                /* IF_ABSENT  */ value.called_AP_invocation_identifier ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          4,
                                          () =>
                                              _encode_AP_invocation_identifier,
                                          $.BER
                                      )(
                                          value.called_AP_invocation_identifier,
                                          $.BER
                                      ),
                                /* IF_ABSENT  */ value.called_AE_invocation_identifier ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          5,
                                          () =>
                                              _encode_AE_invocation_identifier,
                                          $.BER
                                      )(
                                          value.called_AE_invocation_identifier,
                                          $.BER
                                      ),
                                /* IF_ABSENT  */ value.calling_AP_title ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          6,
                                          () => _encode_Name,
                                          $.BER
                                      )(value.calling_AP_title, $.BER),
                                /* IF_ABSENT  */ value.calling_AE_qualifier ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          7,
                                          () =>
                                              _encode_RelativeDistinguishedName,
                                          $.BER
                                      )(value.calling_AE_qualifier, $.BER),
                                /* IF_ABSENT  */ value.calling_AP_invocation_identifier ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          8,
                                          () =>
                                              _encode_AP_invocation_identifier,
                                          $.BER
                                      )(
                                          value.calling_AP_invocation_identifier,
                                          $.BER
                                      ),
                                /* IF_ABSENT  */ value.calling_AE_invocation_identifier ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          9,
                                          () =>
                                              _encode_AE_invocation_identifier,
                                          $.BER
                                      )(
                                          value.calling_AE_invocation_identifier,
                                          $.BER
                                      ),
                                /* IF_ABSENT  */ value.implementation_information ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          29,
                                          () => _encode_Implementation_data,
                                          $.BER
                                      )(
                                          value.implementation_information,
                                          $.BER
                                      ),
                                /* REQUIRED   */ $._encode_explicit(
                                    _TagClass.context,
                                    30,
                                    () => _encode_Association_informationBind,
                                    $.BER
                                )(value.user_information, $.BER),
                            ])
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_AARQ_apdu(value, elGetter);
}

export type TheOsiBind<> = _Element; // ObjectClassFieldType
let _cached_decoder_for_TheOsiBind: $.ASN1Decoder<TheOsiBind> | null = null;
let _cached_encoder_for_TheOsiBind: $.ASN1Encoder<TheOsiBind> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TheOsiBind
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TheOsiBind} The decoded data structure.
 */
export function _decode_TheOsiBind(el: _Element) {
    if (!_cached_decoder_for_TheOsiBind) {
        _cached_decoder_for_TheOsiBind = $._decode_explicit<TheOsiBind>(
            () => $._decodeAny
        );
    }
    return _cached_decoder_for_TheOsiBind(el);
}
/**
 * @summary Encodes a(n) TheOsiBind into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TheOsiBind, encoded as an ASN.1 Element.
 */
export function _encode_TheOsiBind(
    value: TheOsiBind,
    elGetter: $.ASN1Encoder<TheOsiBind>
) {
    if (!_cached_encoder_for_TheOsiBind) {
        _cached_encoder_for_TheOsiBind = $._encode_explicit(
            _TagClass.context,
            16,
            () => $._encodeAny,
            $.BER
        );
    }
    return _cached_encoder_for_TheOsiBind(value, elGetter);
}

/**
 * @summary OsiBindResult_mode_selector
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBindResult-mode-selector ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class OsiBindResult_mode_selector {
    constructor(
        /**
         * @summary `mode_value`.
         * @public
         * @readonly
         */
        readonly mode_value: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a OsiBindResult_mode_selector
     * @description
     *
     * This takes an `object` and converts it to a `OsiBindResult_mode_selector`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiBindResult_mode_selector`.
     * @returns {OsiBindResult_mode_selector}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof OsiBindResult_mode_selector]: OsiBindResult_mode_selector[_K];
            }
        >
    ): OsiBindResult_mode_selector {
        return new OsiBindResult_mode_selector(_o.mode_value);
    }
}
/**
 * @summary The Leading Root Component Types of OsiBindResult_mode_selector
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiBindResult_mode_selector: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "mode-value",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of OsiBindResult_mode_selector
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiBindResult_mode_selector: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of OsiBindResult_mode_selector
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiBindResult_mode_selector: $.ComponentSpec[] = [];
let _cached_decoder_for_OsiBindResult_mode_selector: $.ASN1Decoder<
    OsiBindResult_mode_selector
> | null = null;
let _cached_encoder_for_OsiBindResult_mode_selector: $.ASN1Encoder<
    OsiBindResult_mode_selector
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiBindResult_mode_selector
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBindResult_mode_selector} The decoded data structure.
 */
export function _decode_OsiBindResult_mode_selector(el: _Element) {
    if (!_cached_decoder_for_OsiBindResult_mode_selector) {
        _cached_decoder_for_OsiBindResult_mode_selector = function (
            el: _Element
        ): OsiBindResult_mode_selector {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let mode_value!: INTEGER;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "mode-value": (_el: _Element): void => {
                    mode_value = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OsiBindResult_mode_selector,
                _extension_additions_list_spec_for_OsiBindResult_mode_selector,
                _root_component_type_list_2_spec_for_OsiBindResult_mode_selector,
                undefined
            );
            return new OsiBindResult_mode_selector(
                /* SET_CONSTRUCTOR_CALL */ mode_value
            );
        };
    }
    return _cached_decoder_for_OsiBindResult_mode_selector(el);
}
/**
 * @summary Encodes a(n) OsiBindResult_mode_selector into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBindResult_mode_selector, encoded as an ASN.1 Element.
 */
export function _encode_OsiBindResult_mode_selector(
    value: OsiBindResult_mode_selector,
    elGetter: $.ASN1Encoder<OsiBindResult_mode_selector>
) {
    if (!_cached_encoder_for_OsiBindResult_mode_selector) {
        _cached_encoder_for_OsiBindResult_mode_selector = function (
            value: OsiBindResult_mode_selector,
            elGetter: $.ASN1Encoder<OsiBindResult_mode_selector>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => $._encodeInteger,
                            $.BER
                        )(value.mode_value, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OsiBindResult_mode_selector(value, elGetter);
}

/**
 * @summary OsiBindResult_normal_mode_parameters_protocol_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBindResult-normal-mode-parameters-protocol-version ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type OsiBindResult_normal_mode_parameters_protocol_version = BIT_STRING;
/**
 * @summary OsiBindResult_normal_mode_parameters_protocol_version_version_1
 * @constant
 */
export const OsiBindResult_normal_mode_parameters_protocol_version_version_1: number = 0; /* LONG_NAMED_BIT */
let _cached_decoder_for_OsiBindResult_normal_mode_parameters_protocol_version: $.ASN1Decoder<
    OsiBindResult_normal_mode_parameters_protocol_version
> | null = null;
let _cached_encoder_for_OsiBindResult_normal_mode_parameters_protocol_version: $.ASN1Encoder<
    OsiBindResult_normal_mode_parameters_protocol_version
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiBindResult_normal_mode_parameters_protocol_version
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBindResult_normal_mode_parameters_protocol_version} The decoded data structure.
 */
export function _decode_OsiBindResult_normal_mode_parameters_protocol_version(
    el: _Element
) {
    if (
        !_cached_decoder_for_OsiBindResult_normal_mode_parameters_protocol_version
    ) {
        _cached_decoder_for_OsiBindResult_normal_mode_parameters_protocol_version =
            $._decodeBitString;
    }
    return _cached_decoder_for_OsiBindResult_normal_mode_parameters_protocol_version(
        el
    );
}
/**
 * @summary Encodes a(n) OsiBindResult_normal_mode_parameters_protocol_version into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBindResult_normal_mode_parameters_protocol_version, encoded as an ASN.1 Element.
 */
export function _encode_OsiBindResult_normal_mode_parameters_protocol_version(
    value: OsiBindResult_normal_mode_parameters_protocol_version,
    elGetter: $.ASN1Encoder<
        OsiBindResult_normal_mode_parameters_protocol_version
    >
) {
    if (
        !_cached_encoder_for_OsiBindResult_normal_mode_parameters_protocol_version
    ) {
        _cached_encoder_for_OsiBindResult_normal_mode_parameters_protocol_version =
            $._encodeBitString;
    }
    return _cached_encoder_for_OsiBindResult_normal_mode_parameters_protocol_version(
        value,
        elGetter
    );
}

/**
 * @summary Result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Result  ::=  INTEGER {
 *   acceptance         (0),
 *   user-rejection     (1),
 *   provider-rejection (2)}
 * ```
 */
export type Result = INTEGER;
/**
 * @summary Result_acceptance
 * @constant
 * @type {number}
 */
export const Result_acceptance: Result = 0; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Result_user_rejection
 * @constant
 * @type {number}
 */
export const Result_user_rejection: Result = 1; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Result_provider_rejection
 * @constant
 * @type {number}
 */
export const Result_provider_rejection: Result = 2; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_Result: $.ASN1Decoder<Result> | null = null;
let _cached_encoder_for_Result: $.ASN1Encoder<Result> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Result} The decoded data structure.
 */
export function _decode_Result(el: _Element) {
    if (!_cached_decoder_for_Result) {
        _cached_decoder_for_Result = $._decodeInteger;
    }
    return _cached_decoder_for_Result(el);
}
/**
 * @summary Encodes a(n) Result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Result, encoded as an ASN.1 Element.
 */
export function _encode_Result(value: Result, elGetter: $.ASN1Encoder<Result>) {
    if (!_cached_encoder_for_Result) {
        _cached_encoder_for_Result = $._encodeInteger;
    }
    return _cached_encoder_for_Result(value, elGetter);
}

/**
 * @summary OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBindResult-normal-mode-parameters-presentation-context-definition-result-list-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item {
    constructor(
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: Result,
        /**
         * @summary `transfer_syntax_name`.
         * @public
         * @readonly
         */
        readonly transfer_syntax_name: Transfer_syntax_name
    ) {}

    /**
     * @summary Restructures an object into a OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
     * @description
     *
     * This takes an `object` and converts it to a `OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item`.
     * @returns {OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item]: OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item[_K];
            }
        >
    ): OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item {
        return new OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item(
            _o.result,
            _o.transfer_syntax_name
        );
    }
}
/**
 * @summary The Leading Root Component Types of OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "result",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "transfer-syntax-name",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item: $.ComponentSpec[] = [];
let _cached_decoder_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item: $.ASN1Decoder<
    OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
> | null = null;
let _cached_encoder_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item: $.ASN1Encoder<
    OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item} The decoded data structure.
 */
export function _decode_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item(
    el: _Element
) {
    if (
        !_cached_decoder_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
    ) {
        _cached_decoder_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item = function (
            el: _Element
        ): OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "OsiBindResult-normal-mode-parameters-presentation-context-definition-result-list-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "result";
            sequence[1].name = "transfer-syntax-name";
            let result!: Result;
            let transfer_syntax_name!: Transfer_syntax_name;
            result = $._decode_explicit<Result>(() => _decode_Result)(
                sequence[0]
            );
            transfer_syntax_name = $._decode_explicit<Transfer_syntax_name>(
                () => _decode_Transfer_syntax_name
            )(sequence[1]);
            return new OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item(
                result,
                transfer_syntax_name
            );
        };
    }
    return _cached_decoder_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item(
        el
    );
}
/**
 * @summary Encodes a(n) OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item, encoded as an ASN.1 Element.
 */
export function _encode_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item(
    value: OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item,
    elGetter: $.ASN1Encoder<
        OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
    >
) {
    if (
        !_cached_encoder_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
    ) {
        _cached_encoder_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item = function (
            value: OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item,
            elGetter: $.ASN1Encoder<
                OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
            >
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_Result,
                            $.BER
                        )(value.result, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_Transfer_syntax_name,
                            $.BER
                        )(value.transfer_syntax_name, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item(
        value,
        elGetter
    );
}

/**
 * @summary OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBindResult-normal-mode-parameters-user-data-fully-encoded-data-Item-presentation-data-values ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = {
    single_ASN1_type: _Element;
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values: $.ASN1Decoder<
    OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
> | null = null;
let _cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values: $.ASN1Encoder<
    OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values} The decoded data structure.
 */
export function _decode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
    el: _Element
) {
    if (
        !_cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = $._decode_inextensible_choice<
            OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
        >({
            "CONTEXT 0": [
                "single_ASN1_type",
                $._decode_explicit<_Element>(() => $._decodeAny),
            ],
        });
    }
    return _cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
        el
    );
}
/**
 * @summary Encodes a(n) OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values, encoded as an ASN.1 Element.
 */
export function _encode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
    value: OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values,
    elGetter: $.ASN1Encoder<
        OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    >
) {
    if (
        !_cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = $._encode_choice<
            OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
        >(
            {
                single_ASN1_type: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeAny,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
        value,
        elGetter
    );
}

/**
 * @summary OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBindResult-normal-mode-parameters-user-data-fully-encoded-data-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item {
    constructor(
        /**
         * @summary `transfer_syntax_name`.
         * @public
         * @readonly
         */
        readonly transfer_syntax_name: OPTIONAL<Transfer_syntax_name>,
        /**
         * @summary `presentation_context_identifier`.
         * @public
         * @readonly
         */
        readonly presentation_context_identifier: Presentation_context_identifier,
        /**
         * @summary `presentation_data_values`.
         * @public
         * @readonly
         */
        readonly presentation_data_values: OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {}

    /**
     * @summary Restructures an object into a OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
     * @description
     *
     * This takes an `object` and converts it to a `OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item`.
     * @returns {OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item]: OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item[_K];
            }
        >
    ): OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item {
        return new OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item(
            _o.transfer_syntax_name,
            _o.presentation_context_identifier,
            _o.presentation_data_values
        );
    }
}
/**
 * @summary The Leading Root Component Types of OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "transfer-syntax-name",
        true,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "presentation-context-identifier",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "presentation-data-values",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ComponentSpec[] = [];
let _cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ASN1Decoder<
    OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
> | null = null;
let _cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ASN1Encoder<
    OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item} The decoded data structure.
 */
export function _decode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item(
    el: _Element
) {
    if (
        !_cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
    ) {
        _cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item = function (
            el: _Element
        ): OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let transfer_syntax_name: OPTIONAL<Transfer_syntax_name>;
            let presentation_context_identifier!: Presentation_context_identifier;
            let presentation_data_values!: OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "transfer-syntax-name": (_el: _Element): void => {
                    transfer_syntax_name = _decode_Transfer_syntax_name(_el);
                },
                "presentation-context-identifier": (_el: _Element): void => {
                    presentation_context_identifier = _decode_Presentation_context_identifier(
                        _el
                    );
                },
                "presentation-data-values": (_el: _Element): void => {
                    presentation_data_values = _decode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item,
                _extension_additions_list_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item,
                _root_component_type_list_2_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item,
                undefined
            );
            return new OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item(
                /* SEQUENCE_CONSTRUCTOR_CALL */ transfer_syntax_name,
                presentation_context_identifier,
                presentation_data_values
            );
        };
    }
    return _cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item(
        el
    );
}
/**
 * @summary Encodes a(n) OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item, encoded as an ASN.1 Element.
 */
export function _encode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item(
    value: OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item,
    elGetter: $.ASN1Encoder<
        OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
    >
) {
    if (
        !_cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
    ) {
        _cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item = function (
            value: OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item,
            elGetter: $.ASN1Encoder<
                OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
            >
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.transfer_syntax_name ===
                        undefined
                            ? undefined
                            : _encode_Transfer_syntax_name(
                                  value.transfer_syntax_name,
                                  $.BER
                              ),
                        /* REQUIRED   */ _encode_Presentation_context_identifier(
                            value.presentation_context_identifier,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
                            value.presentation_data_values,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item(
        value,
        elGetter
    );
}

/**
 * @summary OsiBindResult_normal_mode_parameters_user_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBindResult-normal-mode-parameters-user-data ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type OsiBindResult_normal_mode_parameters_user_data = {
    fully_encoded_data: OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item[];
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data: $.ASN1Decoder<
    OsiBindResult_normal_mode_parameters_user_data
> | null = null;
let _cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data: $.ASN1Encoder<
    OsiBindResult_normal_mode_parameters_user_data
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiBindResult_normal_mode_parameters_user_data
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBindResult_normal_mode_parameters_user_data} The decoded data structure.
 */
export function _decode_OsiBindResult_normal_mode_parameters_user_data(
    el: _Element
) {
    if (!_cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data) {
        _cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data = $._decode_inextensible_choice<
            OsiBindResult_normal_mode_parameters_user_data
        >({
            "APPLICATION 1": [
                "fully_encoded_data",
                $._decode_explicit<
                    OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item[]
                >(() =>
                    $._decodeSequenceOf<
                        OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
                    >(
                        () =>
                            _decode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
                    )
                ),
            ],
        });
    }
    return _cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data(
        el
    );
}
/**
 * @summary Encodes a(n) OsiBindResult_normal_mode_parameters_user_data into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBindResult_normal_mode_parameters_user_data, encoded as an ASN.1 Element.
 */
export function _encode_OsiBindResult_normal_mode_parameters_user_data(
    value: OsiBindResult_normal_mode_parameters_user_data,
    elGetter: $.ASN1Encoder<OsiBindResult_normal_mode_parameters_user_data>
) {
    if (!_cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data) {
        _cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data = $._encode_choice<
            OsiBindResult_normal_mode_parameters_user_data
        >(
            {
                fully_encoded_data: $._encode_explicit(
                    _TagClass.application,
                    1,
                    () =>
                        $._encodeSequenceOf<
                            OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
                        >(
                            () =>
                                _encode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data(
        value,
        elGetter
    );
}

/**
 * @summary OsiBindResult_normal_mode_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBindResult-normal-mode-parameters ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class OsiBindResult_normal_mode_parameters {
    constructor(
        /**
         * @summary `protocol_version`.
         * @public
         * @readonly
         */
        readonly protocol_version: OPTIONAL<
            OsiBindResult_normal_mode_parameters_protocol_version
        >,
        /**
         * @summary `responding_presentation_selector`.
         * @public
         * @readonly
         */
        readonly responding_presentation_selector: OPTIONAL<
            Presentation_selector
        >,
        /**
         * @summary `presentation_context_definition_result_list`.
         * @public
         * @readonly
         */
        readonly presentation_context_definition_result_list: OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item[],
        /**
         * @summary `user_data`.
         * @public
         * @readonly
         */
        readonly user_data: OsiBindResult_normal_mode_parameters_user_data
    ) {}

    /**
     * @summary Restructures an object into a OsiBindResult_normal_mode_parameters
     * @description
     *
     * This takes an `object` and converts it to a `OsiBindResult_normal_mode_parameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiBindResult_normal_mode_parameters`.
     * @returns {OsiBindResult_normal_mode_parameters}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof OsiBindResult_normal_mode_parameters]: OsiBindResult_normal_mode_parameters[_K];
            }
        >
    ): OsiBindResult_normal_mode_parameters {
        return new OsiBindResult_normal_mode_parameters(
            _o.protocol_version,
            _o.responding_presentation_selector,
            _o.presentation_context_definition_result_list,
            _o.user_data
        );
    }

    /**
     * @summary Getter that returns the default value for `protocol_version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_protocol_version() {
        return (() => {
            const _ret = new Uint8ClampedArray(Math.max(0));
            _ret[
                OsiBindResult_normal_mode_parameters_protocol_version_version_1
            ] = TRUE_BIT;
            return _ret;
        })();
    }
}
/**
 * @summary The Leading Root Component Types of OsiBindResult_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiBindResult_normal_mode_parameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "protocol-version",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "responding-presentation-selector",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "presentation-context-definition-result-list",
        false,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec("user-data", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of OsiBindResult_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiBindResult_normal_mode_parameters: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of OsiBindResult_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiBindResult_normal_mode_parameters: $.ComponentSpec[] = [];
let _cached_decoder_for_OsiBindResult_normal_mode_parameters: $.ASN1Decoder<
    OsiBindResult_normal_mode_parameters
> | null = null;
let _cached_encoder_for_OsiBindResult_normal_mode_parameters: $.ASN1Encoder<
    OsiBindResult_normal_mode_parameters
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiBindResult_normal_mode_parameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBindResult_normal_mode_parameters} The decoded data structure.
 */
export function _decode_OsiBindResult_normal_mode_parameters(el: _Element) {
    if (!_cached_decoder_for_OsiBindResult_normal_mode_parameters) {
        _cached_decoder_for_OsiBindResult_normal_mode_parameters = function (
            el: _Element
        ): OsiBindResult_normal_mode_parameters {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let protocol_version: OPTIONAL<OsiBindResult_normal_mode_parameters_protocol_version> =
                OsiBindResult_normal_mode_parameters._default_value_for_protocol_version;
            let responding_presentation_selector: OPTIONAL<Presentation_selector>;
            let presentation_context_definition_result_list!: OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item[];
            let user_data!: OsiBindResult_normal_mode_parameters_user_data;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "protocol-version": (_el: _Element): void => {
                    protocol_version = $._decode_explicit<
                        OsiBindResult_normal_mode_parameters_protocol_version
                    >(
                        () =>
                            _decode_OsiBindResult_normal_mode_parameters_protocol_version
                    )(_el);
                },
                "responding-presentation-selector": (_el: _Element): void => {
                    responding_presentation_selector = $._decode_explicit<
                        Presentation_selector
                    >(() => _decode_Presentation_selector)(_el);
                },
                "presentation-context-definition-result-list": (
                    _el: _Element
                ): void => {
                    presentation_context_definition_result_list = $._decode_explicit<
                        OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item[]
                    >(() =>
                        $._decodeSequenceOf<
                            OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
                        >(
                            () =>
                                _decode_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
                        )
                    )(_el);
                },
                "user-data": (_el: _Element): void => {
                    user_data = _decode_OsiBindResult_normal_mode_parameters_user_data(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OsiBindResult_normal_mode_parameters,
                _extension_additions_list_spec_for_OsiBindResult_normal_mode_parameters,
                _root_component_type_list_2_spec_for_OsiBindResult_normal_mode_parameters,
                undefined
            );
            return new OsiBindResult_normal_mode_parameters(
                /* SEQUENCE_CONSTRUCTOR_CALL */ protocol_version,
                responding_presentation_selector,
                presentation_context_definition_result_list,
                user_data
            );
        };
    }
    return _cached_decoder_for_OsiBindResult_normal_mode_parameters(el);
}
/**
 * @summary Encodes a(n) OsiBindResult_normal_mode_parameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBindResult_normal_mode_parameters, encoded as an ASN.1 Element.
 */
export function _encode_OsiBindResult_normal_mode_parameters(
    value: OsiBindResult_normal_mode_parameters,
    elGetter: $.ASN1Encoder<OsiBindResult_normal_mode_parameters>
) {
    if (!_cached_encoder_for_OsiBindResult_normal_mode_parameters) {
        _cached_encoder_for_OsiBindResult_normal_mode_parameters = function (
            value: OsiBindResult_normal_mode_parameters,
            elGetter: $.ASN1Encoder<OsiBindResult_normal_mode_parameters>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.protocol_version === undefined ||
                        $.deepEq(
                            value.protocol_version,
                            OsiBindResult_normal_mode_parameters._default_value_for_protocol_version
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      _encode_OsiBindResult_normal_mode_parameters_protocol_version,
                                  $.BER
                              )(value.protocol_version, $.BER),
                        /* IF_ABSENT  */ value.responding_presentation_selector ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_Presentation_selector,
                                  $.BER
                              )(value.responding_presentation_selector, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            5,
                            () =>
                                $._encodeSequenceOf<
                                    OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
                                >(
                                    () =>
                                        _encode_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item,
                                    $.BER
                                ),
                            $.BER
                        )(
                            value.presentation_context_definition_result_list,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_OsiBindResult_normal_mode_parameters_user_data(
                            value.user_data,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OsiBindResult_normal_mode_parameters(
        value,
        elGetter
    );
}

/**
 * @summary OsiBindResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBindResult{APPLICATION-CONTEXT:Protocols} ::= SET {
 *   mode-selector                    [0] IMPLICIT SET {mode-value  [0] IMPLICIT INTEGER(1)},
 *   normal-mode-parameters           [2] IMPLICIT SEQUENCE {
 *     protocol-version                 [0] IMPLICIT BIT STRING {version-1(0)}
 *                                            DEFAULT {version-1},
 *     responding-presentation-selector [3] IMPLICIT Presentation-selector OPTIONAL,
 *     presentation-context-definition-result-list
 *                                      [5] IMPLICIT SEQUENCE SIZE (2) OF SEQUENCE {
 *       result                           [0] IMPLICIT Result(acceptance),
 *       transfer-syntax-name             [1] IMPLICIT Transfer-syntax-name },
 *     user-data                            CHOICE {
 *       fully-encoded-data [APPLICATION 1] IMPLICIT SEQUENCE SIZE(1) OF SEQUENCE {
 *         transfer-syntax-name               Transfer-syntax-name OPTIONAL,
 *         presentation-context-identifier    Presentation-context-identifier,
 *         presentation-data-values           CHOICE {
 *           single-ASN1-type              [0]  ABSTRACT-SYNTAX.&Type(AARE-apdu{{Protocols}}
 *   )}}}}}
 * ```
 *
 * @class
 */
export class OsiBindResult {
    constructor(
        /**
         * @summary `mode_selector`.
         * @public
         * @readonly
         */
        readonly mode_selector: OsiBindResult_mode_selector,
        /**
         * @summary `normal_mode_parameters`.
         * @public
         * @readonly
         */
        readonly normal_mode_parameters: OsiBindResult_normal_mode_parameters
    ) {}

    /**
     * @summary Restructures an object into a OsiBindResult
     * @description
     *
     * This takes an `object` and converts it to a `OsiBindResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiBindResult`.
     * @returns {OsiBindResult}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof OsiBindResult]: OsiBindResult[_K] }>
    ): OsiBindResult {
        return new OsiBindResult(_o.mode_selector, _o.normal_mode_parameters);
    }
}
/**
 * @summary The Leading Root Component Types of OsiBindResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiBindResult: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "mode-selector",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "normal-mode-parameters",
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of OsiBindResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiBindResult: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of OsiBindResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiBindResult: $.ComponentSpec[] = [];
let _cached_decoder_for_OsiBindResult: $.ASN1Decoder<
    OsiBindResult
> | null = null;
let _cached_encoder_for_OsiBindResult: $.ASN1Encoder<
    OsiBindResult
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiBindResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBindResult} The decoded data structure.
 */
export function _decode_OsiBindResult(el: _Element) {
    if (!_cached_decoder_for_OsiBindResult) {
        _cached_decoder_for_OsiBindResult = function (
            el: _Element
        ): OsiBindResult {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let mode_selector!: OsiBindResult_mode_selector;
            let normal_mode_parameters!: OsiBindResult_normal_mode_parameters;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "mode-selector": (_el: _Element): void => {
                    mode_selector = $._decode_explicit<
                        OsiBindResult_mode_selector
                    >(() => _decode_OsiBindResult_mode_selector)(_el);
                },
                "normal-mode-parameters": (_el: _Element): void => {
                    normal_mode_parameters = $._decode_explicit<
                        OsiBindResult_normal_mode_parameters
                    >(() => _decode_OsiBindResult_normal_mode_parameters)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OsiBindResult,
                _extension_additions_list_spec_for_OsiBindResult,
                _root_component_type_list_2_spec_for_OsiBindResult,
                undefined
            );
            return new OsiBindResult(
                /* SET_CONSTRUCTOR_CALL */ mode_selector,
                normal_mode_parameters
            );
        };
    }
    return _cached_decoder_for_OsiBindResult(el);
}
/**
 * @summary Encodes a(n) OsiBindResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBindResult, encoded as an ASN.1 Element.
 */
export function _encode_OsiBindResult(
    value: OsiBindResult,
    elGetter: $.ASN1Encoder<OsiBindResult>
) {
    if (!_cached_encoder_for_OsiBindResult) {
        _cached_encoder_for_OsiBindResult = function (
            value: OsiBindResult,
            elGetter: $.ASN1Encoder<OsiBindResult>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_OsiBindResult_mode_selector,
                            $.BER
                        )(value.mode_selector, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            2,
                            () => _encode_OsiBindResult_normal_mode_parameters,
                            $.BER
                        )(value.normal_mode_parameters, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OsiBindResult(value, elGetter);
}

/**
 * @summary AARE_apdu_protocol_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AARE-apdu-protocol-version ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AARE_apdu_protocol_version = BIT_STRING;
/**
 * @summary AARE_apdu_protocol_version_version1
 * @constant
 */
export const AARE_apdu_protocol_version_version1: number = 0; /* LONG_NAMED_BIT */
let _cached_decoder_for_AARE_apdu_protocol_version: $.ASN1Decoder<
    AARE_apdu_protocol_version
> | null = null;
let _cached_encoder_for_AARE_apdu_protocol_version: $.ASN1Encoder<
    AARE_apdu_protocol_version
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AARE_apdu_protocol_version
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AARE_apdu_protocol_version} The decoded data structure.
 */
export function _decode_AARE_apdu_protocol_version(el: _Element) {
    if (!_cached_decoder_for_AARE_apdu_protocol_version) {
        _cached_decoder_for_AARE_apdu_protocol_version = $._decodeBitString;
    }
    return _cached_decoder_for_AARE_apdu_protocol_version(el);
}
/**
 * @summary Encodes a(n) AARE_apdu_protocol_version into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AARE_apdu_protocol_version, encoded as an ASN.1 Element.
 */
export function _encode_AARE_apdu_protocol_version(
    value: AARE_apdu_protocol_version,
    elGetter: $.ASN1Encoder<AARE_apdu_protocol_version>
) {
    if (!_cached_encoder_for_AARE_apdu_protocol_version) {
        _cached_encoder_for_AARE_apdu_protocol_version = $._encodeBitString;
    }
    return _cached_encoder_for_AARE_apdu_protocol_version(value, elGetter);
}

/**
 * @summary Associate_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Associate-result  ::=  INTEGER {
 *   accepted           (0),
 *   rejected-permanent (1),
 *   rejected-transient (2)}(0..2, ...)
 * ```
 */
export type Associate_result = INTEGER;
/**
 * @summary Associate_result_accepted
 * @constant
 * @type {number}
 */
export const Associate_result_accepted: Associate_result = 0; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Associate_result_rejected_permanent
 * @constant
 * @type {number}
 */
export const Associate_result_rejected_permanent: Associate_result = 1; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Associate_result_rejected_transient
 * @constant
 * @type {number}
 */
export const Associate_result_rejected_transient: Associate_result = 2; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_Associate_result: $.ASN1Decoder<
    Associate_result
> | null = null;
let _cached_encoder_for_Associate_result: $.ASN1Encoder<
    Associate_result
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Associate_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Associate_result} The decoded data structure.
 */
export function _decode_Associate_result(el: _Element) {
    if (!_cached_decoder_for_Associate_result) {
        _cached_decoder_for_Associate_result = $._decodeInteger;
    }
    return _cached_decoder_for_Associate_result(el);
}
/**
 * @summary Encodes a(n) Associate_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Associate_result, encoded as an ASN.1 Element.
 */
export function _encode_Associate_result(
    value: Associate_result,
    elGetter: $.ASN1Encoder<Associate_result>
) {
    if (!_cached_encoder_for_Associate_result) {
        _cached_encoder_for_Associate_result = $._encodeInteger;
    }
    return _cached_encoder_for_Associate_result(value, elGetter);
}

/**
 * @summary Associate_source_diagnostic_acse_service_user
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Associate-source-diagnostic-acse-service-user ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Associate_source_diagnostic_acse_service_user = INTEGER;
/**
 * @summary Associate_source_diagnostic_acse_service_user_null_
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_null_: Associate_source_diagnostic_acse_service_user = 0; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Associate_source_diagnostic_acse_service_user_no_reason_given
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_no_reason_given: Associate_source_diagnostic_acse_service_user = 1; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Associate_source_diagnostic_acse_service_user_application_context_name_not_supported
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_application_context_name_not_supported: Associate_source_diagnostic_acse_service_user = 2; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Associate_source_diagnostic_acse_service_user_calling_AP_title_not_recognized
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_calling_AP_title_not_recognized: Associate_source_diagnostic_acse_service_user = 3; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Associate_source_diagnostic_acse_service_user_calling_AP_invocation_identifier_not_recognized
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_calling_AP_invocation_identifier_not_recognized: Associate_source_diagnostic_acse_service_user = 4; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Associate_source_diagnostic_acse_service_user_calling_AE_qualifier_not_recognized
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_calling_AE_qualifier_not_recognized: Associate_source_diagnostic_acse_service_user = 5; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Associate_source_diagnostic_acse_service_user_calling_AE_invocation_identifier_not_recognized
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_calling_AE_invocation_identifier_not_recognized: Associate_source_diagnostic_acse_service_user = 6; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Associate_source_diagnostic_acse_service_user_called_AP_title_not_recognized
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_called_AP_title_not_recognized: Associate_source_diagnostic_acse_service_user = 7; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Associate_source_diagnostic_acse_service_user_called_AP_invocation_identifier_not_recognized
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_called_AP_invocation_identifier_not_recognized: Associate_source_diagnostic_acse_service_user = 8; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Associate_source_diagnostic_acse_service_user_called_AE_qualifier_not_recognized
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_called_AE_qualifier_not_recognized: Associate_source_diagnostic_acse_service_user = 9; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Associate_source_diagnostic_acse_service_user_called_AE_invocation_identifier_not_recognized
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_user_called_AE_invocation_identifier_not_recognized: Associate_source_diagnostic_acse_service_user = 10; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_Associate_source_diagnostic_acse_service_user: $.ASN1Decoder<
    Associate_source_diagnostic_acse_service_user
> | null = null;
let _cached_encoder_for_Associate_source_diagnostic_acse_service_user: $.ASN1Encoder<
    Associate_source_diagnostic_acse_service_user
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Associate_source_diagnostic_acse_service_user
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Associate_source_diagnostic_acse_service_user} The decoded data structure.
 */
export function _decode_Associate_source_diagnostic_acse_service_user(
    el: _Element
) {
    if (!_cached_decoder_for_Associate_source_diagnostic_acse_service_user) {
        _cached_decoder_for_Associate_source_diagnostic_acse_service_user =
            $._decodeInteger;
    }
    return _cached_decoder_for_Associate_source_diagnostic_acse_service_user(
        el
    );
}
/**
 * @summary Encodes a(n) Associate_source_diagnostic_acse_service_user into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Associate_source_diagnostic_acse_service_user, encoded as an ASN.1 Element.
 */
export function _encode_Associate_source_diagnostic_acse_service_user(
    value: Associate_source_diagnostic_acse_service_user,
    elGetter: $.ASN1Encoder<Associate_source_diagnostic_acse_service_user>
) {
    if (!_cached_encoder_for_Associate_source_diagnostic_acse_service_user) {
        _cached_encoder_for_Associate_source_diagnostic_acse_service_user =
            $._encodeInteger;
    }
    return _cached_encoder_for_Associate_source_diagnostic_acse_service_user(
        value,
        elGetter
    );
}

/**
 * @summary Associate_source_diagnostic_acse_service_provider
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Associate-source-diagnostic-acse-service-provider ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Associate_source_diagnostic_acse_service_provider = INTEGER;
/**
 * @summary Associate_source_diagnostic_acse_service_provider_null_
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_provider_null_: Associate_source_diagnostic_acse_service_provider = 0; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Associate_source_diagnostic_acse_service_provider_no_reason_given
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_provider_no_reason_given: Associate_source_diagnostic_acse_service_provider = 1; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Associate_source_diagnostic_acse_service_provider_no_common_acse_version
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_provider_no_common_acse_version: Associate_source_diagnostic_acse_service_provider = 2; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_Associate_source_diagnostic_acse_service_provider: $.ASN1Decoder<
    Associate_source_diagnostic_acse_service_provider
> | null = null;
let _cached_encoder_for_Associate_source_diagnostic_acse_service_provider: $.ASN1Encoder<
    Associate_source_diagnostic_acse_service_provider
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Associate_source_diagnostic_acse_service_provider
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Associate_source_diagnostic_acse_service_provider} The decoded data structure.
 */
export function _decode_Associate_source_diagnostic_acse_service_provider(
    el: _Element
) {
    if (
        !_cached_decoder_for_Associate_source_diagnostic_acse_service_provider
    ) {
        _cached_decoder_for_Associate_source_diagnostic_acse_service_provider =
            $._decodeInteger;
    }
    return _cached_decoder_for_Associate_source_diagnostic_acse_service_provider(
        el
    );
}
/**
 * @summary Encodes a(n) Associate_source_diagnostic_acse_service_provider into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Associate_source_diagnostic_acse_service_provider, encoded as an ASN.1 Element.
 */
export function _encode_Associate_source_diagnostic_acse_service_provider(
    value: Associate_source_diagnostic_acse_service_provider,
    elGetter: $.ASN1Encoder<Associate_source_diagnostic_acse_service_provider>
) {
    if (
        !_cached_encoder_for_Associate_source_diagnostic_acse_service_provider
    ) {
        _cached_encoder_for_Associate_source_diagnostic_acse_service_provider =
            $._encodeInteger;
    }
    return _cached_encoder_for_Associate_source_diagnostic_acse_service_provider(
        value,
        elGetter
    );
}

/**
 * @summary Associate_source_diagnostic
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Associate-source-diagnostic  ::=  CHOICE {
 *   acse-service-user     [1]  INTEGER {
 *     null                                            (0),
 *     no-reason-given                                 (1),
 *     application-context-name-not-supported          (2),
 *     calling-AP-title-not-recognized                 (3),
 *     calling-AP-invocation-identifier-not-recognized (4),
 *     calling-AE-qualifier-not-recognized             (5),
 *     calling-AE-invocation-identifier-not-recognized (6),
 *     called-AP-title-not-recognized                  (7),
 *     called-AP-invocation-identifier-not-recognized  (8),
 *     called-AE-qualifier-not-recognized              (9),
 *     called-AE-invocation-identifier-not-recognized  (10)}(0..10, ...),
 *   acse-service-provider [2]  INTEGER {
 *     null                                            (0),
 *     no-reason-given                                 (1),
 *     no-common-acse-version                          (2)}(0..2, ...)}
 * ```
 */
export type Associate_source_diagnostic =
    | {
          acse_service_user: Associate_source_diagnostic_acse_service_user;
      } /* CHOICE_ALT_ROOT */
    | {
          acse_service_provider: Associate_source_diagnostic_acse_service_provider;
      } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_Associate_source_diagnostic: $.ASN1Decoder<
    Associate_source_diagnostic
> | null = null;
let _cached_encoder_for_Associate_source_diagnostic: $.ASN1Encoder<
    Associate_source_diagnostic
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Associate_source_diagnostic
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Associate_source_diagnostic} The decoded data structure.
 */
export function _decode_Associate_source_diagnostic(el: _Element) {
    if (!_cached_decoder_for_Associate_source_diagnostic) {
        _cached_decoder_for_Associate_source_diagnostic = $._decode_inextensible_choice<
            Associate_source_diagnostic
        >({
            "CONTEXT 1": [
                "acse_service_user",
                $._decode_explicit<
                    Associate_source_diagnostic_acse_service_user
                >(() => _decode_Associate_source_diagnostic_acse_service_user),
            ],
            "CONTEXT 2": [
                "acse_service_provider",
                $._decode_explicit<
                    Associate_source_diagnostic_acse_service_provider
                >(
                    () =>
                        _decode_Associate_source_diagnostic_acse_service_provider
                ),
            ],
        });
    }
    return _cached_decoder_for_Associate_source_diagnostic(el);
}
/**
 * @summary Encodes a(n) Associate_source_diagnostic into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Associate_source_diagnostic, encoded as an ASN.1 Element.
 */
export function _encode_Associate_source_diagnostic(
    value: Associate_source_diagnostic,
    elGetter: $.ASN1Encoder<Associate_source_diagnostic>
) {
    if (!_cached_encoder_for_Associate_source_diagnostic) {
        _cached_encoder_for_Associate_source_diagnostic = $._encode_choice<
            Associate_source_diagnostic
        >(
            {
                acse_service_user: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_Associate_source_diagnostic_acse_service_user,
                    $.BER
                ),
                acse_service_provider: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () =>
                        _encode_Associate_source_diagnostic_acse_service_provider,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Associate_source_diagnostic(value, elGetter);
}

export type Association_informationBindRes<> = EXTERNAL[]; // SequenceOfType
let _cached_decoder_for_Association_informationBindRes: $.ASN1Decoder<
    Association_informationBindRes
> | null = null;
let _cached_encoder_for_Association_informationBindRes: $.ASN1Encoder<
    Association_informationBindRes
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Association_informationBindRes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Association_informationBindRes} The decoded data structure.
 */
export function _decode_Association_informationBindRes(el: _Element) {
    if (!_cached_decoder_for_Association_informationBindRes) {
        _cached_decoder_for_Association_informationBindRes = $._decodeSequenceOf<
            EXTERNAL
        >(() => $._decodeExternal);
    }
    return _cached_decoder_for_Association_informationBindRes(el);
}
/**
 * @summary Encodes a(n) Association_informationBindRes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Association_informationBindRes, encoded as an ASN.1 Element.
 */
export function _encode_Association_informationBindRes(
    value: Association_informationBindRes,
    elGetter: $.ASN1Encoder<Association_informationBindRes>
) {
    if (!_cached_encoder_for_Association_informationBindRes) {
        _cached_encoder_for_Association_informationBindRes = $._encodeSequenceOf<
            EXTERNAL
        >(() => $._encodeExternal, $.BER);
    }
    return _cached_encoder_for_Association_informationBindRes(value, elGetter);
}

/**
 * @summary AARE_apdu
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AARE-apdu{APPLICATION-CONTEXT:Protocols} ::= [APPLICATION 1] IMPLICIT SEQUENCE {
 *   protocol-version                     [0] IMPLICIT BIT STRING {version1(0)}
 *                                              DEFAULT {version1},
 *   application-context-name             [1]  Application-context-name,
 *   result                               [2]  Associate-result(accepted),
 *   result-source-diagnostic             [3]  Associate-source-diagnostic,
 *   responding-AP-title                  [4]  Name                          OPTIONAL,
 *   responding-AE-qualifier              [5]  RelativeDistinguishedName     OPTIONAL,
 *   responding-AP-invocation-identifier  [6]  AP-invocation-identifier      OPTIONAL,
 *   responding-AE-invocation-identifier  [7]  AE-invocation-identifier      OPTIONAL,
 *   implementation-information           [29] IMPLICIT Implementation-data  OPTIONAL,
 *   user-information                     [30] IMPLICIT
 *                                         Association-informationBindRes{{Protocols}}}
 * ```
 *
 * @class
 */
export class AARE_apdu {
    constructor(
        /**
         * @summary `protocol_version`.
         * @public
         * @readonly
         */
        readonly protocol_version: OPTIONAL<AARE_apdu_protocol_version>,
        /**
         * @summary `application_context_name`.
         * @public
         * @readonly
         */
        readonly application_context_name: Application_context_name,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: Associate_result,
        /**
         * @summary `result_source_diagnostic`.
         * @public
         * @readonly
         */
        readonly result_source_diagnostic: Associate_source_diagnostic,
        /**
         * @summary `responding_AP_title`.
         * @public
         * @readonly
         */
        readonly responding_AP_title: OPTIONAL<Name>,
        /**
         * @summary `responding_AE_qualifier`.
         * @public
         * @readonly
         */
        readonly responding_AE_qualifier: OPTIONAL<RelativeDistinguishedName>,
        /**
         * @summary `responding_AP_invocation_identifier`.
         * @public
         * @readonly
         */
        readonly responding_AP_invocation_identifier: OPTIONAL<
            AP_invocation_identifier
        >,
        /**
         * @summary `responding_AE_invocation_identifier`.
         * @public
         * @readonly
         */
        readonly responding_AE_invocation_identifier: OPTIONAL<
            AE_invocation_identifier
        >,
        /**
         * @summary `implementation_information`.
         * @public
         * @readonly
         */
        readonly implementation_information: OPTIONAL<Implementation_data>,
        /**
         * @summary `user_information`.
         * @public
         * @readonly
         */
        readonly user_information: Association_informationBindRes
    ) {}

    /**
     * @summary Restructures an object into a AARE_apdu
     * @description
     *
     * This takes an `object` and converts it to a `AARE_apdu`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AARE_apdu`.
     * @returns {AARE_apdu}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AARE_apdu]: AARE_apdu[_K] }>
    ): AARE_apdu {
        return new AARE_apdu(
            _o.protocol_version,
            _o.application_context_name,
            _o.result,
            _o.result_source_diagnostic,
            _o.responding_AP_title,
            _o.responding_AE_qualifier,
            _o.responding_AP_invocation_identifier,
            _o.responding_AE_invocation_identifier,
            _o.implementation_information,
            _o.user_information
        );
    }

    /**
     * @summary Getter that returns the default value for `protocol_version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_protocol_version() {
        return (() => {
            const _ret = new Uint8ClampedArray(Math.max(0));
            _ret[AARE_apdu_protocol_version_version1] = TRUE_BIT;
            return _ret;
        })();
    }
}
/**
 * @summary The Leading Root Component Types of AARE_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AARE_apdu: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "protocol-version",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "application-context-name",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "result",
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "result-source-diagnostic",
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "responding-AP-title",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "responding-AE-qualifier",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "responding-AP-invocation-identifier",
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "responding-AE-invocation-identifier",
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "implementation-information",
        true,
        $.hasTag(_TagClass.context, 29),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "user-information",
        false,
        $.hasTag(_TagClass.context, 30),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AARE_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AARE_apdu: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AARE_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AARE_apdu: $.ComponentSpec[] = [];
let _cached_decoder_for_AARE_apdu: $.ASN1Decoder<AARE_apdu> | null = null;
let _cached_encoder_for_AARE_apdu: $.ASN1Encoder<AARE_apdu> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AARE_apdu
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AARE_apdu} The decoded data structure.
 */
export function _decode_AARE_apdu(el: _Element) {
    if (!_cached_decoder_for_AARE_apdu) {
        _cached_decoder_for_AARE_apdu = $._decode_explicit<AARE_apdu>(
            () =>
                function (el: _Element): AARE_apdu {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let protocol_version: OPTIONAL<AARE_apdu_protocol_version> =
                        AARE_apdu._default_value_for_protocol_version;
                    let application_context_name!: Application_context_name;
                    let result!: Associate_result;
                    let result_source_diagnostic!: Associate_source_diagnostic;
                    let responding_AP_title: OPTIONAL<Name>;
                    let responding_AE_qualifier: OPTIONAL<RelativeDistinguishedName>;
                    let responding_AP_invocation_identifier: OPTIONAL<AP_invocation_identifier>;
                    let responding_AE_invocation_identifier: OPTIONAL<AE_invocation_identifier>;
                    let implementation_information: OPTIONAL<Implementation_data>;
                    let user_information!: Association_informationBindRes;
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        "protocol-version": (_el: _Element): void => {
                            protocol_version = $._decode_explicit<
                                AARE_apdu_protocol_version
                            >(() => _decode_AARE_apdu_protocol_version)(_el);
                        },
                        "application-context-name": (_el: _Element): void => {
                            application_context_name = $._decode_explicit<
                                Application_context_name
                            >(() => _decode_Application_context_name)(_el);
                        },
                        result: (_el: _Element): void => {
                            result = $._decode_explicit<Associate_result>(
                                () => _decode_Associate_result
                            )(_el);
                        },
                        "result-source-diagnostic": (_el: _Element): void => {
                            result_source_diagnostic = $._decode_explicit<
                                Associate_source_diagnostic
                            >(() => _decode_Associate_source_diagnostic)(_el);
                        },
                        "responding-AP-title": (_el: _Element): void => {
                            responding_AP_title = $._decode_explicit<Name>(
                                () => _decode_Name
                            )(_el);
                        },
                        "responding-AE-qualifier": (_el: _Element): void => {
                            responding_AE_qualifier = $._decode_explicit<
                                RelativeDistinguishedName
                            >(() => _decode_RelativeDistinguishedName)(_el);
                        },
                        "responding-AP-invocation-identifier": (
                            _el: _Element
                        ): void => {
                            responding_AP_invocation_identifier = $._decode_explicit<
                                AP_invocation_identifier
                            >(() => _decode_AP_invocation_identifier)(_el);
                        },
                        "responding-AE-invocation-identifier": (
                            _el: _Element
                        ): void => {
                            responding_AE_invocation_identifier = $._decode_explicit<
                                AE_invocation_identifier
                            >(() => _decode_AE_invocation_identifier)(_el);
                        },
                        "implementation-information": (_el: _Element): void => {
                            implementation_information = $._decode_explicit<
                                Implementation_data
                            >(() => _decode_Implementation_data)(_el);
                        },
                        "user-information": (_el: _Element): void => {
                            user_information = $._decode_explicit<
                                Association_informationBindRes
                            >(() => _decode_Association_informationBindRes)(
                                _el
                            );
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_AARE_apdu,
                        _extension_additions_list_spec_for_AARE_apdu,
                        _root_component_type_list_2_spec_for_AARE_apdu,
                        undefined
                    );
                    return new AARE_apdu(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ protocol_version,
                        application_context_name,
                        result,
                        result_source_diagnostic,
                        responding_AP_title,
                        responding_AE_qualifier,
                        responding_AP_invocation_identifier,
                        responding_AE_invocation_identifier,
                        implementation_information,
                        user_information
                    );
                }
        );
    }
    return _cached_decoder_for_AARE_apdu(el);
}
/**
 * @summary Encodes a(n) AARE_apdu into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AARE_apdu, encoded as an ASN.1 Element.
 */
export function _encode_AARE_apdu(
    value: AARE_apdu,
    elGetter: $.ASN1Encoder<AARE_apdu>
) {
    if (!_cached_encoder_for_AARE_apdu) {
        _cached_encoder_for_AARE_apdu = $._encode_explicit(
            _TagClass.application,
            1,
            () =>
                function (
                    value: AARE_apdu,
                    elGetter: $.ASN1Encoder<AARE_apdu>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* IF_DEFAULT */ value.protocol_version ===
                                    undefined ||
                                $.deepEq(
                                    value.protocol_version,
                                    AARE_apdu._default_value_for_protocol_version
                                )
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          0,
                                          () =>
                                              _encode_AARE_apdu_protocol_version,
                                          $.BER
                                      )(value.protocol_version, $.BER),
                                /* REQUIRED   */ $._encode_explicit(
                                    _TagClass.context,
                                    1,
                                    () => _encode_Application_context_name,
                                    $.BER
                                )(value.application_context_name, $.BER),
                                /* REQUIRED   */ $._encode_explicit(
                                    _TagClass.context,
                                    2,
                                    () => _encode_Associate_result,
                                    $.BER
                                )(value.result, $.BER),
                                /* REQUIRED   */ $._encode_explicit(
                                    _TagClass.context,
                                    3,
                                    () => _encode_Associate_source_diagnostic,
                                    $.BER
                                )(value.result_source_diagnostic, $.BER),
                                /* IF_ABSENT  */ value.responding_AP_title ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          4,
                                          () => _encode_Name,
                                          $.BER
                                      )(value.responding_AP_title, $.BER),
                                /* IF_ABSENT  */ value.responding_AE_qualifier ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          5,
                                          () =>
                                              _encode_RelativeDistinguishedName,
                                          $.BER
                                      )(value.responding_AE_qualifier, $.BER),
                                /* IF_ABSENT  */ value.responding_AP_invocation_identifier ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          6,
                                          () =>
                                              _encode_AP_invocation_identifier,
                                          $.BER
                                      )(
                                          value.responding_AP_invocation_identifier,
                                          $.BER
                                      ),
                                /* IF_ABSENT  */ value.responding_AE_invocation_identifier ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          7,
                                          () =>
                                              _encode_AE_invocation_identifier,
                                          $.BER
                                      )(
                                          value.responding_AE_invocation_identifier,
                                          $.BER
                                      ),
                                /* IF_ABSENT  */ value.implementation_information ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          29,
                                          () => _encode_Implementation_data,
                                          $.BER
                                      )(
                                          value.implementation_information,
                                          $.BER
                                      ),
                                /* REQUIRED   */ $._encode_explicit(
                                    _TagClass.context,
                                    30,
                                    () =>
                                        _encode_Association_informationBindRes,
                                    $.BER
                                )(value.user_information, $.BER),
                            ])
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_AARE_apdu(value, elGetter);
}

export type TheOsiBindRes<> = _Element; // ObjectClassFieldType
let _cached_decoder_for_TheOsiBindRes: $.ASN1Decoder<
    TheOsiBindRes
> | null = null;
let _cached_encoder_for_TheOsiBindRes: $.ASN1Encoder<
    TheOsiBindRes
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TheOsiBindRes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TheOsiBindRes} The decoded data structure.
 */
export function _decode_TheOsiBindRes(el: _Element) {
    if (!_cached_decoder_for_TheOsiBindRes) {
        _cached_decoder_for_TheOsiBindRes = $._decode_explicit<TheOsiBindRes>(
            () => $._decodeAny
        );
    }
    return _cached_decoder_for_TheOsiBindRes(el);
}
/**
 * @summary Encodes a(n) TheOsiBindRes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TheOsiBindRes, encoded as an ASN.1 Element.
 */
export function _encode_TheOsiBindRes(
    value: TheOsiBindRes,
    elGetter: $.ASN1Encoder<TheOsiBindRes>
) {
    if (!_cached_encoder_for_TheOsiBindRes) {
        _cached_encoder_for_TheOsiBindRes = $._encode_explicit(
            _TagClass.context,
            17,
            () => $._encodeAny,
            $.BER
        );
    }
    return _cached_encoder_for_TheOsiBindRes(value, elGetter);
}

/**
 * @summary OsiBindError_normal_mode_parameters_protocol_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBindError-normal-mode-parameters-protocol-version ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type OsiBindError_normal_mode_parameters_protocol_version = BIT_STRING;
/**
 * @summary OsiBindError_normal_mode_parameters_protocol_version_version_1
 * @constant
 */
export const OsiBindError_normal_mode_parameters_protocol_version_version_1: number = 0; /* LONG_NAMED_BIT */
let _cached_decoder_for_OsiBindError_normal_mode_parameters_protocol_version: $.ASN1Decoder<
    OsiBindError_normal_mode_parameters_protocol_version
> | null = null;
let _cached_encoder_for_OsiBindError_normal_mode_parameters_protocol_version: $.ASN1Encoder<
    OsiBindError_normal_mode_parameters_protocol_version
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiBindError_normal_mode_parameters_protocol_version
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBindError_normal_mode_parameters_protocol_version} The decoded data structure.
 */
export function _decode_OsiBindError_normal_mode_parameters_protocol_version(
    el: _Element
) {
    if (
        !_cached_decoder_for_OsiBindError_normal_mode_parameters_protocol_version
    ) {
        _cached_decoder_for_OsiBindError_normal_mode_parameters_protocol_version =
            $._decodeBitString;
    }
    return _cached_decoder_for_OsiBindError_normal_mode_parameters_protocol_version(
        el
    );
}
/**
 * @summary Encodes a(n) OsiBindError_normal_mode_parameters_protocol_version into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBindError_normal_mode_parameters_protocol_version, encoded as an ASN.1 Element.
 */
export function _encode_OsiBindError_normal_mode_parameters_protocol_version(
    value: OsiBindError_normal_mode_parameters_protocol_version,
    elGetter: $.ASN1Encoder<
        OsiBindError_normal_mode_parameters_protocol_version
    >
) {
    if (
        !_cached_encoder_for_OsiBindError_normal_mode_parameters_protocol_version
    ) {
        _cached_encoder_for_OsiBindError_normal_mode_parameters_protocol_version =
            $._encodeBitString;
    }
    return _cached_encoder_for_OsiBindError_normal_mode_parameters_protocol_version(
        value,
        elGetter
    );
}

/**
 * @summary Result_list_Item_provider_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Result-list-Item-provider-reason ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Result_list_Item_provider_reason = INTEGER;
/**
 * @summary Result_list_Item_provider_reason_reason_not_specified
 * @constant
 * @type {number}
 */
export const Result_list_Item_provider_reason_reason_not_specified: Result_list_Item_provider_reason = 0; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Result_list_Item_provider_reason_abstract_syntax_not_supported
 * @constant
 * @type {number}
 */
export const Result_list_Item_provider_reason_abstract_syntax_not_supported: Result_list_Item_provider_reason = 1; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Result_list_Item_provider_reason_proposed_transfer_syntaxes_not_supported
 * @constant
 * @type {number}
 */
export const Result_list_Item_provider_reason_proposed_transfer_syntaxes_not_supported: Result_list_Item_provider_reason = 2; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_Result_list_Item_provider_reason: $.ASN1Decoder<
    Result_list_Item_provider_reason
> | null = null;
let _cached_encoder_for_Result_list_Item_provider_reason: $.ASN1Encoder<
    Result_list_Item_provider_reason
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Result_list_Item_provider_reason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Result_list_Item_provider_reason} The decoded data structure.
 */
export function _decode_Result_list_Item_provider_reason(el: _Element) {
    if (!_cached_decoder_for_Result_list_Item_provider_reason) {
        _cached_decoder_for_Result_list_Item_provider_reason = $._decodeInteger;
    }
    return _cached_decoder_for_Result_list_Item_provider_reason(el);
}
/**
 * @summary Encodes a(n) Result_list_Item_provider_reason into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Result_list_Item_provider_reason, encoded as an ASN.1 Element.
 */
export function _encode_Result_list_Item_provider_reason(
    value: Result_list_Item_provider_reason,
    elGetter: $.ASN1Encoder<Result_list_Item_provider_reason>
) {
    if (!_cached_encoder_for_Result_list_Item_provider_reason) {
        _cached_encoder_for_Result_list_Item_provider_reason = $._encodeInteger;
    }
    return _cached_encoder_for_Result_list_Item_provider_reason(
        value,
        elGetter
    );
}

/**
 * @summary Result_list_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Result-list-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class Result_list_Item {
    constructor(
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: Result,
        /**
         * @summary `transfer_syntax_name`.
         * @public
         * @readonly
         */
        readonly transfer_syntax_name: OPTIONAL<Transfer_syntax_name>,
        /**
         * @summary `provider_reason`.
         * @public
         * @readonly
         */
        readonly provider_reason: OPTIONAL<Result_list_Item_provider_reason>
    ) {}

    /**
     * @summary Restructures an object into a Result_list_Item
     * @description
     *
     * This takes an `object` and converts it to a `Result_list_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Result_list_Item`.
     * @returns {Result_list_Item}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Result_list_Item]: Result_list_Item[_K] }>
    ): Result_list_Item {
        return new Result_list_Item(
            _o.result,
            _o.transfer_syntax_name,
            _o.provider_reason
        );
    }
}
/**
 * @summary The Leading Root Component Types of Result_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Result_list_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "result",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "transfer-syntax-name",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "provider-reason",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Result_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Result_list_Item: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Result_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Result_list_Item: $.ComponentSpec[] = [];
let _cached_decoder_for_Result_list_Item: $.ASN1Decoder<
    Result_list_Item
> | null = null;
let _cached_encoder_for_Result_list_Item: $.ASN1Encoder<
    Result_list_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Result_list_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Result_list_Item} The decoded data structure.
 */
export function _decode_Result_list_Item(el: _Element) {
    if (!_cached_decoder_for_Result_list_Item) {
        _cached_decoder_for_Result_list_Item = function (
            el: _Element
        ): Result_list_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let result!: Result;
            let transfer_syntax_name: OPTIONAL<Transfer_syntax_name>;
            let provider_reason: OPTIONAL<Result_list_Item_provider_reason>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                result: (_el: _Element): void => {
                    result = $._decode_explicit<Result>(() => _decode_Result)(
                        _el
                    );
                },
                "transfer-syntax-name": (_el: _Element): void => {
                    transfer_syntax_name = $._decode_explicit<
                        Transfer_syntax_name
                    >(() => _decode_Transfer_syntax_name)(_el);
                },
                "provider-reason": (_el: _Element): void => {
                    provider_reason = $._decode_explicit<
                        Result_list_Item_provider_reason
                    >(() => _decode_Result_list_Item_provider_reason)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Result_list_Item,
                _extension_additions_list_spec_for_Result_list_Item,
                _root_component_type_list_2_spec_for_Result_list_Item,
                undefined
            );
            return new Result_list_Item(
                /* SEQUENCE_CONSTRUCTOR_CALL */ result,
                transfer_syntax_name,
                provider_reason
            );
        };
    }
    return _cached_decoder_for_Result_list_Item(el);
}
/**
 * @summary Encodes a(n) Result_list_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Result_list_Item, encoded as an ASN.1 Element.
 */
export function _encode_Result_list_Item(
    value: Result_list_Item,
    elGetter: $.ASN1Encoder<Result_list_Item>
) {
    if (!_cached_encoder_for_Result_list_Item) {
        _cached_encoder_for_Result_list_Item = function (
            value: Result_list_Item,
            elGetter: $.ASN1Encoder<Result_list_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_Result,
                            $.BER
                        )(value.result, $.BER),
                        /* IF_ABSENT  */ value.transfer_syntax_name ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Transfer_syntax_name,
                                  $.BER
                              )(value.transfer_syntax_name, $.BER),
                        /* IF_ABSENT  */ value.provider_reason === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () =>
                                      _encode_Result_list_Item_provider_reason,
                                  $.BER
                              )(value.provider_reason, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Result_list_Item(value, elGetter);
}

export type Result_list<> = Result_list_Item[]; // SequenceOfType
let _cached_decoder_for_Result_list: $.ASN1Decoder<Result_list> | null = null;
let _cached_encoder_for_Result_list: $.ASN1Encoder<Result_list> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Result_list
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Result_list} The decoded data structure.
 */
export function _decode_Result_list(el: _Element) {
    if (!_cached_decoder_for_Result_list) {
        _cached_decoder_for_Result_list = $._decodeSequenceOf<Result_list_Item>(
            () => _decode_Result_list_Item
        );
    }
    return _cached_decoder_for_Result_list(el);
}
/**
 * @summary Encodes a(n) Result_list into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Result_list, encoded as an ASN.1 Element.
 */
export function _encode_Result_list(
    value: Result_list,
    elGetter: $.ASN1Encoder<Result_list>
) {
    if (!_cached_encoder_for_Result_list) {
        _cached_encoder_for_Result_list = $._encodeSequenceOf<Result_list_Item>(
            () => _encode_Result_list_Item,
            $.BER
        );
    }
    return _cached_encoder_for_Result_list(value, elGetter);
}

/**
 * @summary Provider_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Provider-reason  ::=  INTEGER {
 *   reason-not-specified                (0),
 *   temporary-congestion                (1),
 *   local-limit-exceeded                (2),
 *   called-presentation-address-unknown (3),
 *   protocol-version-not-supported      (4),
 *   default-context-not-supported       (5),
 *   user-data-not-readable              (6),
 *   no-PSAP-available                   (7)}
 * ```
 */
export type Provider_reason = INTEGER;
/**
 * @summary Provider_reason_reason_not_specified
 * @constant
 * @type {number}
 */
export const Provider_reason_reason_not_specified: Provider_reason = 0; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Provider_reason_temporary_congestion
 * @constant
 * @type {number}
 */
export const Provider_reason_temporary_congestion: Provider_reason = 1; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Provider_reason_local_limit_exceeded
 * @constant
 * @type {number}
 */
export const Provider_reason_local_limit_exceeded: Provider_reason = 2; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Provider_reason_called_presentation_address_unknown
 * @constant
 * @type {number}
 */
export const Provider_reason_called_presentation_address_unknown: Provider_reason = 3; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Provider_reason_protocol_version_not_supported
 * @constant
 * @type {number}
 */
export const Provider_reason_protocol_version_not_supported: Provider_reason = 4; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Provider_reason_default_context_not_supported
 * @constant
 * @type {number}
 */
export const Provider_reason_default_context_not_supported: Provider_reason = 5; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Provider_reason_user_data_not_readable
 * @constant
 * @type {number}
 */
export const Provider_reason_user_data_not_readable: Provider_reason = 6; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Provider_reason_no_PSAP_available
 * @constant
 * @type {number}
 */
export const Provider_reason_no_PSAP_available: Provider_reason = 7; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_Provider_reason: $.ASN1Decoder<
    Provider_reason
> | null = null;
let _cached_encoder_for_Provider_reason: $.ASN1Encoder<
    Provider_reason
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Provider_reason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Provider_reason} The decoded data structure.
 */
export function _decode_Provider_reason(el: _Element) {
    if (!_cached_decoder_for_Provider_reason) {
        _cached_decoder_for_Provider_reason = $._decodeInteger;
    }
    return _cached_decoder_for_Provider_reason(el);
}
/**
 * @summary Encodes a(n) Provider_reason into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Provider_reason, encoded as an ASN.1 Element.
 */
export function _encode_Provider_reason(
    value: Provider_reason,
    elGetter: $.ASN1Encoder<Provider_reason>
) {
    if (!_cached_encoder_for_Provider_reason) {
        _cached_encoder_for_Provider_reason = $._encodeInteger;
    }
    return _cached_encoder_for_Provider_reason(value, elGetter);
}

/**
 * @summary OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBindError-normal-mode-parameters-user-data-fully-encoded-data-Item-presentation-data-values ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = {
    single_ASN1_type: _Element;
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values: $.ASN1Decoder<
    OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
> | null = null;
let _cached_encoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values: $.ASN1Encoder<
    OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values} The decoded data structure.
 */
export function _decode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
    el: _Element
) {
    if (
        !_cached_decoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_decoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = $._decode_inextensible_choice<
            OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
        >({
            "CONTEXT 0": [
                "single_ASN1_type",
                $._decode_explicit<_Element>(() => $._decodeAny),
            ],
        });
    }
    return _cached_decoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
        el
    );
}
/**
 * @summary Encodes a(n) OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values, encoded as an ASN.1 Element.
 */
export function _encode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
    value: OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values,
    elGetter: $.ASN1Encoder<
        OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    >
) {
    if (
        !_cached_encoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_encoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = $._encode_choice<
            OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
        >(
            {
                single_ASN1_type: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeAny,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
        value,
        elGetter
    );
}

/**
 * @summary OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBindError-normal-mode-parameters-user-data-fully-encoded-data-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item {
    constructor(
        /**
         * @summary `transfer_syntax_name`.
         * @public
         * @readonly
         */
        readonly transfer_syntax_name: OPTIONAL<Transfer_syntax_name>,
        /**
         * @summary `presentation_context_identifier`.
         * @public
         * @readonly
         */
        readonly presentation_context_identifier: Presentation_context_identifier,
        /**
         * @summary `presentation_data_values`.
         * @public
         * @readonly
         */
        readonly presentation_data_values: OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {}

    /**
     * @summary Restructures an object into a OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
     * @description
     *
     * This takes an `object` and converts it to a `OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item`.
     * @returns {OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item]: OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item[_K];
            }
        >
    ): OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item {
        return new OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item(
            _o.transfer_syntax_name,
            _o.presentation_context_identifier,
            _o.presentation_data_values
        );
    }
}
/**
 * @summary The Leading Root Component Types of OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "transfer-syntax-name",
        true,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "presentation-context-identifier",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "presentation-data-values",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ComponentSpec[] = [];
let _cached_decoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ASN1Decoder<
    OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
> | null = null;
let _cached_encoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ASN1Encoder<
    OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item} The decoded data structure.
 */
export function _decode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item(
    el: _Element
) {
    if (
        !_cached_decoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
    ) {
        _cached_decoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item = function (
            el: _Element
        ): OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let transfer_syntax_name: OPTIONAL<Transfer_syntax_name>;
            let presentation_context_identifier!: Presentation_context_identifier;
            let presentation_data_values!: OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "transfer-syntax-name": (_el: _Element): void => {
                    transfer_syntax_name = _decode_Transfer_syntax_name(_el);
                },
                "presentation-context-identifier": (_el: _Element): void => {
                    presentation_context_identifier = _decode_Presentation_context_identifier(
                        _el
                    );
                },
                "presentation-data-values": (_el: _Element): void => {
                    presentation_data_values = _decode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item,
                _extension_additions_list_spec_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item,
                _root_component_type_list_2_spec_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item,
                undefined
            );
            return new OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item(
                /* SEQUENCE_CONSTRUCTOR_CALL */ transfer_syntax_name,
                presentation_context_identifier,
                presentation_data_values
            );
        };
    }
    return _cached_decoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item(
        el
    );
}
/**
 * @summary Encodes a(n) OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item, encoded as an ASN.1 Element.
 */
export function _encode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item(
    value: OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item,
    elGetter: $.ASN1Encoder<
        OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
    >
) {
    if (
        !_cached_encoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
    ) {
        _cached_encoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item = function (
            value: OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item,
            elGetter: $.ASN1Encoder<
                OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
            >
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.transfer_syntax_name ===
                        undefined
                            ? undefined
                            : _encode_Transfer_syntax_name(
                                  value.transfer_syntax_name,
                                  $.BER
                              ),
                        /* REQUIRED   */ _encode_Presentation_context_identifier(
                            value.presentation_context_identifier,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
                            value.presentation_data_values,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item(
        value,
        elGetter
    );
}

/**
 * @summary OsiBindError_normal_mode_parameters_user_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBindError-normal-mode-parameters-user-data ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type OsiBindError_normal_mode_parameters_user_data = {
    fully_encoded_data: OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item[];
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_OsiBindError_normal_mode_parameters_user_data: $.ASN1Decoder<
    OsiBindError_normal_mode_parameters_user_data
> | null = null;
let _cached_encoder_for_OsiBindError_normal_mode_parameters_user_data: $.ASN1Encoder<
    OsiBindError_normal_mode_parameters_user_data
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiBindError_normal_mode_parameters_user_data
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBindError_normal_mode_parameters_user_data} The decoded data structure.
 */
export function _decode_OsiBindError_normal_mode_parameters_user_data(
    el: _Element
) {
    if (!_cached_decoder_for_OsiBindError_normal_mode_parameters_user_data) {
        _cached_decoder_for_OsiBindError_normal_mode_parameters_user_data = $._decode_inextensible_choice<
            OsiBindError_normal_mode_parameters_user_data
        >({
            "APPLICATION 1": [
                "fully_encoded_data",
                $._decode_explicit<
                    OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item[]
                >(() =>
                    $._decodeSequenceOf<
                        OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
                    >(
                        () =>
                            _decode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
                    )
                ),
            ],
        });
    }
    return _cached_decoder_for_OsiBindError_normal_mode_parameters_user_data(
        el
    );
}
/**
 * @summary Encodes a(n) OsiBindError_normal_mode_parameters_user_data into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBindError_normal_mode_parameters_user_data, encoded as an ASN.1 Element.
 */
export function _encode_OsiBindError_normal_mode_parameters_user_data(
    value: OsiBindError_normal_mode_parameters_user_data,
    elGetter: $.ASN1Encoder<OsiBindError_normal_mode_parameters_user_data>
) {
    if (!_cached_encoder_for_OsiBindError_normal_mode_parameters_user_data) {
        _cached_encoder_for_OsiBindError_normal_mode_parameters_user_data = $._encode_choice<
            OsiBindError_normal_mode_parameters_user_data
        >(
            {
                fully_encoded_data: $._encode_explicit(
                    _TagClass.application,
                    1,
                    () =>
                        $._encodeSequenceOf<
                            OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
                        >(
                            () =>
                                _encode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_OsiBindError_normal_mode_parameters_user_data(
        value,
        elGetter
    );
}

/**
 * @summary OsiBindError_normal_mode_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBindError-normal-mode-parameters ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class OsiBindError_normal_mode_parameters {
    constructor(
        /**
         * @summary `protocol_version`.
         * @public
         * @readonly
         */
        readonly protocol_version: OPTIONAL<
            OsiBindError_normal_mode_parameters_protocol_version
        >,
        /**
         * @summary `responding_presentation_selector`.
         * @public
         * @readonly
         */
        readonly responding_presentation_selector: OPTIONAL<
            Presentation_selector
        >,
        /**
         * @summary `presentation_context_definition_result_list`.
         * @public
         * @readonly
         */
        readonly presentation_context_definition_result_list: OPTIONAL<
            Result_list
        >,
        /**
         * @summary `provider_reason`.
         * @public
         * @readonly
         */
        readonly provider_reason: OPTIONAL<Provider_reason>,
        /**
         * @summary `user_data`.
         * @public
         * @readonly
         */
        readonly user_data: OPTIONAL<
            OsiBindError_normal_mode_parameters_user_data
        >
    ) {}

    /**
     * @summary Restructures an object into a OsiBindError_normal_mode_parameters
     * @description
     *
     * This takes an `object` and converts it to a `OsiBindError_normal_mode_parameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiBindError_normal_mode_parameters`.
     * @returns {OsiBindError_normal_mode_parameters}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof OsiBindError_normal_mode_parameters]: OsiBindError_normal_mode_parameters[_K];
            }
        >
    ): OsiBindError_normal_mode_parameters {
        return new OsiBindError_normal_mode_parameters(
            _o.protocol_version,
            _o.responding_presentation_selector,
            _o.presentation_context_definition_result_list,
            _o.provider_reason,
            _o.user_data
        );
    }

    /**
     * @summary Getter that returns the default value for `protocol_version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_protocol_version() {
        return (() => {
            const _ret = new Uint8ClampedArray(Math.max(0));
            _ret[
                OsiBindError_normal_mode_parameters_protocol_version_version_1
            ] = TRUE_BIT;
            return _ret;
        })();
    }
}
/**
 * @summary The Leading Root Component Types of OsiBindError_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiBindError_normal_mode_parameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "protocol-version",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "responding-presentation-selector",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "presentation-context-definition-result-list",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "provider-reason",
        true,
        $.hasTag(_TagClass.context, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec("user-data", true, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of OsiBindError_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiBindError_normal_mode_parameters: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of OsiBindError_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiBindError_normal_mode_parameters: $.ComponentSpec[] = [];
let _cached_decoder_for_OsiBindError_normal_mode_parameters: $.ASN1Decoder<
    OsiBindError_normal_mode_parameters
> | null = null;
let _cached_encoder_for_OsiBindError_normal_mode_parameters: $.ASN1Encoder<
    OsiBindError_normal_mode_parameters
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiBindError_normal_mode_parameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBindError_normal_mode_parameters} The decoded data structure.
 */
export function _decode_OsiBindError_normal_mode_parameters(el: _Element) {
    if (!_cached_decoder_for_OsiBindError_normal_mode_parameters) {
        _cached_decoder_for_OsiBindError_normal_mode_parameters = function (
            el: _Element
        ): OsiBindError_normal_mode_parameters {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let protocol_version: OPTIONAL<OsiBindError_normal_mode_parameters_protocol_version> =
                OsiBindError_normal_mode_parameters._default_value_for_protocol_version;
            let responding_presentation_selector: OPTIONAL<Presentation_selector>;
            let presentation_context_definition_result_list: OPTIONAL<Result_list>;
            let provider_reason: OPTIONAL<Provider_reason>;
            let user_data: OPTIONAL<OsiBindError_normal_mode_parameters_user_data>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "protocol-version": (_el: _Element): void => {
                    protocol_version = $._decode_explicit<
                        OsiBindError_normal_mode_parameters_protocol_version
                    >(
                        () =>
                            _decode_OsiBindError_normal_mode_parameters_protocol_version
                    )(_el);
                },
                "responding-presentation-selector": (_el: _Element): void => {
                    responding_presentation_selector = $._decode_explicit<
                        Presentation_selector
                    >(() => _decode_Presentation_selector)(_el);
                },
                "presentation-context-definition-result-list": (
                    _el: _Element
                ): void => {
                    presentation_context_definition_result_list = $._decode_explicit<
                        Result_list
                    >(() => _decode_Result_list)(_el);
                },
                "provider-reason": (_el: _Element): void => {
                    provider_reason = $._decode_explicit<Provider_reason>(
                        () => _decode_Provider_reason
                    )(_el);
                },
                "user-data": (_el: _Element): void => {
                    user_data = _decode_OsiBindError_normal_mode_parameters_user_data(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OsiBindError_normal_mode_parameters,
                _extension_additions_list_spec_for_OsiBindError_normal_mode_parameters,
                _root_component_type_list_2_spec_for_OsiBindError_normal_mode_parameters,
                undefined
            );
            return new OsiBindError_normal_mode_parameters(
                /* SEQUENCE_CONSTRUCTOR_CALL */ protocol_version,
                responding_presentation_selector,
                presentation_context_definition_result_list,
                provider_reason,
                user_data
            );
        };
    }
    return _cached_decoder_for_OsiBindError_normal_mode_parameters(el);
}
/**
 * @summary Encodes a(n) OsiBindError_normal_mode_parameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBindError_normal_mode_parameters, encoded as an ASN.1 Element.
 */
export function _encode_OsiBindError_normal_mode_parameters(
    value: OsiBindError_normal_mode_parameters,
    elGetter: $.ASN1Encoder<OsiBindError_normal_mode_parameters>
) {
    if (!_cached_encoder_for_OsiBindError_normal_mode_parameters) {
        _cached_encoder_for_OsiBindError_normal_mode_parameters = function (
            value: OsiBindError_normal_mode_parameters,
            elGetter: $.ASN1Encoder<OsiBindError_normal_mode_parameters>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.protocol_version === undefined ||
                        $.deepEq(
                            value.protocol_version,
                            OsiBindError_normal_mode_parameters._default_value_for_protocol_version
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      _encode_OsiBindError_normal_mode_parameters_protocol_version,
                                  $.BER
                              )(value.protocol_version, $.BER),
                        /* IF_ABSENT  */ value.responding_presentation_selector ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_Presentation_selector,
                                  $.BER
                              )(value.responding_presentation_selector, $.BER),
                        /* IF_ABSENT  */ value.presentation_context_definition_result_list ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_Result_list,
                                  $.BER
                              )(
                                  value.presentation_context_definition_result_list,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.provider_reason === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  10,
                                  () => _encode_Provider_reason,
                                  $.BER
                              )(value.provider_reason, $.BER),
                        /* IF_ABSENT  */ value.user_data === undefined
                            ? undefined
                            : _encode_OsiBindError_normal_mode_parameters_user_data(
                                  value.user_data,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OsiBindError_normal_mode_parameters(
        value,
        elGetter
    );
}

/**
 * @summary OsiBindError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBindError{APPLICATION-CONTEXT:Protocols}  ::=  CHOICE {
 *   normal-mode-parameters  SEQUENCE {
 *     protocol-version               [0]  IMPLICIT BIT STRING {version-1(0)}
 *                                           DEFAULT {version-1},
 *     responding-presentation-selector
 *                                    [3]  IMPLICIT Presentation-selector OPTIONAL,
 *     presentation-context-definition-result-list
 *                                    [5]  IMPLICIT Result-list OPTIONAL,
 *     provider-reason                [10] IMPLICIT Provider-reason OPTIONAL,
 *     user-data                           CHOICE {
 *       fully-encoded-data  [APPLICATION 1] IMPLICIT SEQUENCE SIZE (1) OF SEQUENCE {
 *         transfer-syntax-name                Transfer-syntax-name   OPTIONAL,
 *         presentation-context-identifier     Presentation-context-identifier,
 *         presentation-data-values            CHOICE {
 *           single-ASN1-type               [0]
 *                      ABSTRACT-SYNTAX.&Type(AAREerr-apdu{{Protocols}})}}} OPTIONAL}}
 * ```
 */
export type OsiBindError = {
    normal_mode_parameters: OsiBindError_normal_mode_parameters;
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_OsiBindError: $.ASN1Decoder<OsiBindError> | null = null;
let _cached_encoder_for_OsiBindError: $.ASN1Encoder<OsiBindError> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiBindError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBindError} The decoded data structure.
 */
export function _decode_OsiBindError(el: _Element) {
    if (!_cached_decoder_for_OsiBindError) {
        _cached_decoder_for_OsiBindError = $._decode_inextensible_choice<
            OsiBindError
        >({
            "UNIVERSAL 16": [
                "normal_mode_parameters",
                _decode_OsiBindError_normal_mode_parameters,
            ],
        });
    }
    return _cached_decoder_for_OsiBindError(el);
}
/**
 * @summary Encodes a(n) OsiBindError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBindError, encoded as an ASN.1 Element.
 */
export function _encode_OsiBindError(
    value: OsiBindError,
    elGetter: $.ASN1Encoder<OsiBindError>
) {
    if (!_cached_encoder_for_OsiBindError) {
        _cached_encoder_for_OsiBindError = $._encode_choice<OsiBindError>(
            {
                normal_mode_parameters: _encode_OsiBindError_normal_mode_parameters,
            },
            $.BER
        );
    }
    return _cached_encoder_for_OsiBindError(value, elGetter);
}

/**
 * @summary AAREerr_apdu_protocol_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AAREerr-apdu-protocol-version ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AAREerr_apdu_protocol_version = BIT_STRING;
/**
 * @summary AAREerr_apdu_protocol_version_version1
 * @constant
 */
export const AAREerr_apdu_protocol_version_version1: number = 0; /* LONG_NAMED_BIT */
let _cached_decoder_for_AAREerr_apdu_protocol_version: $.ASN1Decoder<
    AAREerr_apdu_protocol_version
> | null = null;
let _cached_encoder_for_AAREerr_apdu_protocol_version: $.ASN1Encoder<
    AAREerr_apdu_protocol_version
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AAREerr_apdu_protocol_version
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AAREerr_apdu_protocol_version} The decoded data structure.
 */
export function _decode_AAREerr_apdu_protocol_version(el: _Element) {
    if (!_cached_decoder_for_AAREerr_apdu_protocol_version) {
        _cached_decoder_for_AAREerr_apdu_protocol_version = $._decodeBitString;
    }
    return _cached_decoder_for_AAREerr_apdu_protocol_version(el);
}
/**
 * @summary Encodes a(n) AAREerr_apdu_protocol_version into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AAREerr_apdu_protocol_version, encoded as an ASN.1 Element.
 */
export function _encode_AAREerr_apdu_protocol_version(
    value: AAREerr_apdu_protocol_version,
    elGetter: $.ASN1Encoder<AAREerr_apdu_protocol_version>
) {
    if (!_cached_encoder_for_AAREerr_apdu_protocol_version) {
        _cached_encoder_for_AAREerr_apdu_protocol_version = $._encodeBitString;
    }
    return _cached_encoder_for_AAREerr_apdu_protocol_version(value, elGetter);
}

export type Association_informationBindErr<> = EXTERNAL[]; // SequenceOfType
let _cached_decoder_for_Association_informationBindErr: $.ASN1Decoder<
    Association_informationBindErr
> | null = null;
let _cached_encoder_for_Association_informationBindErr: $.ASN1Encoder<
    Association_informationBindErr
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Association_informationBindErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Association_informationBindErr} The decoded data structure.
 */
export function _decode_Association_informationBindErr(el: _Element) {
    if (!_cached_decoder_for_Association_informationBindErr) {
        _cached_decoder_for_Association_informationBindErr = $._decodeSequenceOf<
            EXTERNAL
        >(() => $._decodeExternal);
    }
    return _cached_decoder_for_Association_informationBindErr(el);
}
/**
 * @summary Encodes a(n) Association_informationBindErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Association_informationBindErr, encoded as an ASN.1 Element.
 */
export function _encode_Association_informationBindErr(
    value: Association_informationBindErr,
    elGetter: $.ASN1Encoder<Association_informationBindErr>
) {
    if (!_cached_encoder_for_Association_informationBindErr) {
        _cached_encoder_for_Association_informationBindErr = $._encodeSequenceOf<
            EXTERNAL
        >(() => $._encodeExternal, $.BER);
    }
    return _cached_encoder_for_Association_informationBindErr(value, elGetter);
}

/**
 * @summary AAREerr_apdu
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AAREerr-apdu{APPLICATION-CONTEXT:Protocols} ::= [APPLICATION 1] IMPLICIT SEQUENCE {
 *   protocol-version                    [0]  IMPLICIT BIT STRING {version1(0)}
 *                                              DEFAULT {version1},
 *   application-context-name            [1]  Application-context-name,
 *   result                              [2]  Associate-result
 *                                              (rejected-permanent..rejected-transient),
 *   result-source-diagnostic            [3]  Associate-source-diagnostic,
 *   responding-AP-title                 [4]  Name OPTIONAL,
 *   responding-AE-qualifier             [5]  RelativeDistinguishedName OPTIONAL,
 *   responding-AP-invocation-identifier [6]  AP-invocation-identifier  OPTIONAL,
 *   responding-AE-invocation-identifier [7]  AE-invocation-identifier  OPTIONAL,
 *   implementation-information          [29] IMPLICIT Implementation-data OPTIONAL,
 *   user-information                    [30] IMPLICIT
 *                                 Association-informationBindErr{{Protocols}} OPTIONAL }
 * ```
 *
 * @class
 */
export class AAREerr_apdu {
    constructor(
        /**
         * @summary `protocol_version`.
         * @public
         * @readonly
         */
        readonly protocol_version: OPTIONAL<AAREerr_apdu_protocol_version>,
        /**
         * @summary `application_context_name`.
         * @public
         * @readonly
         */
        readonly application_context_name: Application_context_name,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: Associate_result,
        /**
         * @summary `result_source_diagnostic`.
         * @public
         * @readonly
         */
        readonly result_source_diagnostic: Associate_source_diagnostic,
        /**
         * @summary `responding_AP_title`.
         * @public
         * @readonly
         */
        readonly responding_AP_title: OPTIONAL<Name>,
        /**
         * @summary `responding_AE_qualifier`.
         * @public
         * @readonly
         */
        readonly responding_AE_qualifier: OPTIONAL<RelativeDistinguishedName>,
        /**
         * @summary `responding_AP_invocation_identifier`.
         * @public
         * @readonly
         */
        readonly responding_AP_invocation_identifier: OPTIONAL<
            AP_invocation_identifier
        >,
        /**
         * @summary `responding_AE_invocation_identifier`.
         * @public
         * @readonly
         */
        readonly responding_AE_invocation_identifier: OPTIONAL<
            AE_invocation_identifier
        >,
        /**
         * @summary `implementation_information`.
         * @public
         * @readonly
         */
        readonly implementation_information: OPTIONAL<Implementation_data>,
        /**
         * @summary `user_information`.
         * @public
         * @readonly
         */
        readonly user_information: OPTIONAL<Association_informationBindErr>
    ) {}

    /**
     * @summary Restructures an object into a AAREerr_apdu
     * @description
     *
     * This takes an `object` and converts it to a `AAREerr_apdu`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AAREerr_apdu`.
     * @returns {AAREerr_apdu}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AAREerr_apdu]: AAREerr_apdu[_K] }>
    ): AAREerr_apdu {
        return new AAREerr_apdu(
            _o.protocol_version,
            _o.application_context_name,
            _o.result,
            _o.result_source_diagnostic,
            _o.responding_AP_title,
            _o.responding_AE_qualifier,
            _o.responding_AP_invocation_identifier,
            _o.responding_AE_invocation_identifier,
            _o.implementation_information,
            _o.user_information
        );
    }

    /**
     * @summary Getter that returns the default value for `protocol_version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_protocol_version() {
        return (() => {
            const _ret = new Uint8ClampedArray(Math.max(0));
            _ret[AAREerr_apdu_protocol_version_version1] = TRUE_BIT;
            return _ret;
        })();
    }
}
/**
 * @summary The Leading Root Component Types of AAREerr_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AAREerr_apdu: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "protocol-version",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "application-context-name",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "result",
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "result-source-diagnostic",
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "responding-AP-title",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "responding-AE-qualifier",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "responding-AP-invocation-identifier",
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "responding-AE-invocation-identifier",
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "implementation-information",
        true,
        $.hasTag(_TagClass.context, 29),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "user-information",
        true,
        $.hasTag(_TagClass.context, 30),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AAREerr_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AAREerr_apdu: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AAREerr_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AAREerr_apdu: $.ComponentSpec[] = [];
let _cached_decoder_for_AAREerr_apdu: $.ASN1Decoder<AAREerr_apdu> | null = null;
let _cached_encoder_for_AAREerr_apdu: $.ASN1Encoder<AAREerr_apdu> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AAREerr_apdu
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AAREerr_apdu} The decoded data structure.
 */
export function _decode_AAREerr_apdu(el: _Element) {
    if (!_cached_decoder_for_AAREerr_apdu) {
        _cached_decoder_for_AAREerr_apdu = $._decode_explicit<AAREerr_apdu>(
            () =>
                function (el: _Element): AAREerr_apdu {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let protocol_version: OPTIONAL<AAREerr_apdu_protocol_version> =
                        AAREerr_apdu._default_value_for_protocol_version;
                    let application_context_name!: Application_context_name;
                    let result!: Associate_result;
                    let result_source_diagnostic!: Associate_source_diagnostic;
                    let responding_AP_title: OPTIONAL<Name>;
                    let responding_AE_qualifier: OPTIONAL<RelativeDistinguishedName>;
                    let responding_AP_invocation_identifier: OPTIONAL<AP_invocation_identifier>;
                    let responding_AE_invocation_identifier: OPTIONAL<AE_invocation_identifier>;
                    let implementation_information: OPTIONAL<Implementation_data>;
                    let user_information: OPTIONAL<Association_informationBindErr>;
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        "protocol-version": (_el: _Element): void => {
                            protocol_version = $._decode_explicit<
                                AAREerr_apdu_protocol_version
                            >(() => _decode_AAREerr_apdu_protocol_version)(_el);
                        },
                        "application-context-name": (_el: _Element): void => {
                            application_context_name = $._decode_explicit<
                                Application_context_name
                            >(() => _decode_Application_context_name)(_el);
                        },
                        result: (_el: _Element): void => {
                            result = $._decode_explicit<Associate_result>(
                                () => _decode_Associate_result
                            )(_el);
                        },
                        "result-source-diagnostic": (_el: _Element): void => {
                            result_source_diagnostic = $._decode_explicit<
                                Associate_source_diagnostic
                            >(() => _decode_Associate_source_diagnostic)(_el);
                        },
                        "responding-AP-title": (_el: _Element): void => {
                            responding_AP_title = $._decode_explicit<Name>(
                                () => _decode_Name
                            )(_el);
                        },
                        "responding-AE-qualifier": (_el: _Element): void => {
                            responding_AE_qualifier = $._decode_explicit<
                                RelativeDistinguishedName
                            >(() => _decode_RelativeDistinguishedName)(_el);
                        },
                        "responding-AP-invocation-identifier": (
                            _el: _Element
                        ): void => {
                            responding_AP_invocation_identifier = $._decode_explicit<
                                AP_invocation_identifier
                            >(() => _decode_AP_invocation_identifier)(_el);
                        },
                        "responding-AE-invocation-identifier": (
                            _el: _Element
                        ): void => {
                            responding_AE_invocation_identifier = $._decode_explicit<
                                AE_invocation_identifier
                            >(() => _decode_AE_invocation_identifier)(_el);
                        },
                        "implementation-information": (_el: _Element): void => {
                            implementation_information = $._decode_explicit<
                                Implementation_data
                            >(() => _decode_Implementation_data)(_el);
                        },
                        "user-information": (_el: _Element): void => {
                            user_information = $._decode_explicit<
                                Association_informationBindErr
                            >(() => _decode_Association_informationBindErr)(
                                _el
                            );
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_AAREerr_apdu,
                        _extension_additions_list_spec_for_AAREerr_apdu,
                        _root_component_type_list_2_spec_for_AAREerr_apdu,
                        undefined
                    );
                    return new AAREerr_apdu(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ protocol_version,
                        application_context_name,
                        result,
                        result_source_diagnostic,
                        responding_AP_title,
                        responding_AE_qualifier,
                        responding_AP_invocation_identifier,
                        responding_AE_invocation_identifier,
                        implementation_information,
                        user_information
                    );
                }
        );
    }
    return _cached_decoder_for_AAREerr_apdu(el);
}
/**
 * @summary Encodes a(n) AAREerr_apdu into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AAREerr_apdu, encoded as an ASN.1 Element.
 */
export function _encode_AAREerr_apdu(
    value: AAREerr_apdu,
    elGetter: $.ASN1Encoder<AAREerr_apdu>
) {
    if (!_cached_encoder_for_AAREerr_apdu) {
        _cached_encoder_for_AAREerr_apdu = $._encode_explicit(
            _TagClass.application,
            1,
            () =>
                function (
                    value: AAREerr_apdu,
                    elGetter: $.ASN1Encoder<AAREerr_apdu>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* IF_DEFAULT */ value.protocol_version ===
                                    undefined ||
                                $.deepEq(
                                    value.protocol_version,
                                    AAREerr_apdu._default_value_for_protocol_version
                                )
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          0,
                                          () =>
                                              _encode_AAREerr_apdu_protocol_version,
                                          $.BER
                                      )(value.protocol_version, $.BER),
                                /* REQUIRED   */ $._encode_explicit(
                                    _TagClass.context,
                                    1,
                                    () => _encode_Application_context_name,
                                    $.BER
                                )(value.application_context_name, $.BER),
                                /* REQUIRED   */ $._encode_explicit(
                                    _TagClass.context,
                                    2,
                                    () => _encode_Associate_result,
                                    $.BER
                                )(value.result, $.BER),
                                /* REQUIRED   */ $._encode_explicit(
                                    _TagClass.context,
                                    3,
                                    () => _encode_Associate_source_diagnostic,
                                    $.BER
                                )(value.result_source_diagnostic, $.BER),
                                /* IF_ABSENT  */ value.responding_AP_title ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          4,
                                          () => _encode_Name,
                                          $.BER
                                      )(value.responding_AP_title, $.BER),
                                /* IF_ABSENT  */ value.responding_AE_qualifier ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          5,
                                          () =>
                                              _encode_RelativeDistinguishedName,
                                          $.BER
                                      )(value.responding_AE_qualifier, $.BER),
                                /* IF_ABSENT  */ value.responding_AP_invocation_identifier ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          6,
                                          () =>
                                              _encode_AP_invocation_identifier,
                                          $.BER
                                      )(
                                          value.responding_AP_invocation_identifier,
                                          $.BER
                                      ),
                                /* IF_ABSENT  */ value.responding_AE_invocation_identifier ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          7,
                                          () =>
                                              _encode_AE_invocation_identifier,
                                          $.BER
                                      )(
                                          value.responding_AE_invocation_identifier,
                                          $.BER
                                      ),
                                /* IF_ABSENT  */ value.implementation_information ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          29,
                                          () => _encode_Implementation_data,
                                          $.BER
                                      )(
                                          value.implementation_information,
                                          $.BER
                                      ),
                                /* IF_ABSENT  */ value.user_information ===
                                undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          30,
                                          () =>
                                              _encode_Association_informationBindErr,
                                          $.BER
                                      )(value.user_information, $.BER),
                            ])
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_AAREerr_apdu(value, elGetter);
}

export type TheOsiBindErr<> = _Element; // ObjectClassFieldType
let _cached_decoder_for_TheOsiBindErr: $.ASN1Decoder<
    TheOsiBindErr
> | null = null;
let _cached_encoder_for_TheOsiBindErr: $.ASN1Encoder<
    TheOsiBindErr
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TheOsiBindErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TheOsiBindErr} The decoded data structure.
 */
export function _decode_TheOsiBindErr(el: _Element) {
    if (!_cached_decoder_for_TheOsiBindErr) {
        _cached_decoder_for_TheOsiBindErr = $._decode_explicit<TheOsiBindErr>(
            () => $._decodeAny
        );
    }
    return _cached_decoder_for_TheOsiBindErr(el);
}
/**
 * @summary Encodes a(n) TheOsiBindErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TheOsiBindErr, encoded as an ASN.1 Element.
 */
export function _encode_TheOsiBindErr(
    value: TheOsiBindErr,
    elGetter: $.ASN1Encoder<TheOsiBindErr>
) {
    if (!_cached_encoder_for_TheOsiBindErr) {
        _cached_encoder_for_TheOsiBindErr = $._encode_explicit(
            _TagClass.context,
            18,
            () => $._encodeAny,
            $.BER
        );
    }
    return _cached_encoder_for_TheOsiBindErr(value, elGetter);
}

/**
 * @summary OsiUnbind_fully_encoded_data_Item_presentation_data_values
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiUnbind-fully-encoded-data-Item-presentation-data-values ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type OsiUnbind_fully_encoded_data_Item_presentation_data_values = {
    single_ASN1_type: _Element;
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_OsiUnbind_fully_encoded_data_Item_presentation_data_values: $.ASN1Decoder<
    OsiUnbind_fully_encoded_data_Item_presentation_data_values
> | null = null;
let _cached_encoder_for_OsiUnbind_fully_encoded_data_Item_presentation_data_values: $.ASN1Encoder<
    OsiUnbind_fully_encoded_data_Item_presentation_data_values
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiUnbind_fully_encoded_data_Item_presentation_data_values
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiUnbind_fully_encoded_data_Item_presentation_data_values} The decoded data structure.
 */
export function _decode_OsiUnbind_fully_encoded_data_Item_presentation_data_values(
    el: _Element
) {
    if (
        !_cached_decoder_for_OsiUnbind_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_decoder_for_OsiUnbind_fully_encoded_data_Item_presentation_data_values = $._decode_inextensible_choice<
            OsiUnbind_fully_encoded_data_Item_presentation_data_values
        >({
            "CONTEXT 0": [
                "single_ASN1_type",
                $._decode_explicit<_Element>(() => $._decodeAny),
            ],
        });
    }
    return _cached_decoder_for_OsiUnbind_fully_encoded_data_Item_presentation_data_values(
        el
    );
}
/**
 * @summary Encodes a(n) OsiUnbind_fully_encoded_data_Item_presentation_data_values into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiUnbind_fully_encoded_data_Item_presentation_data_values, encoded as an ASN.1 Element.
 */
export function _encode_OsiUnbind_fully_encoded_data_Item_presentation_data_values(
    value: OsiUnbind_fully_encoded_data_Item_presentation_data_values,
    elGetter: $.ASN1Encoder<
        OsiUnbind_fully_encoded_data_Item_presentation_data_values
    >
) {
    if (
        !_cached_encoder_for_OsiUnbind_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_encoder_for_OsiUnbind_fully_encoded_data_Item_presentation_data_values = $._encode_choice<
            OsiUnbind_fully_encoded_data_Item_presentation_data_values
        >(
            {
                single_ASN1_type: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeAny,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_OsiUnbind_fully_encoded_data_Item_presentation_data_values(
        value,
        elGetter
    );
}

/**
 * @summary OsiUnbind_fully_encoded_data_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiUnbind-fully-encoded-data-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class OsiUnbind_fully_encoded_data_Item {
    constructor(
        /**
         * @summary `presentation_context_identifier`.
         * @public
         * @readonly
         */
        readonly presentation_context_identifier: Presentation_context_identifier,
        /**
         * @summary `presentation_data_values`.
         * @public
         * @readonly
         */
        readonly presentation_data_values: OsiUnbind_fully_encoded_data_Item_presentation_data_values
    ) {}

    /**
     * @summary Restructures an object into a OsiUnbind_fully_encoded_data_Item
     * @description
     *
     * This takes an `object` and converts it to a `OsiUnbind_fully_encoded_data_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiUnbind_fully_encoded_data_Item`.
     * @returns {OsiUnbind_fully_encoded_data_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof OsiUnbind_fully_encoded_data_Item]: OsiUnbind_fully_encoded_data_Item[_K];
            }
        >
    ): OsiUnbind_fully_encoded_data_Item {
        return new OsiUnbind_fully_encoded_data_Item(
            _o.presentation_context_identifier,
            _o.presentation_data_values
        );
    }
}
/**
 * @summary The Leading Root Component Types of OsiUnbind_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiUnbind_fully_encoded_data_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "presentation-context-identifier",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "presentation-data-values",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of OsiUnbind_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiUnbind_fully_encoded_data_Item: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of OsiUnbind_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiUnbind_fully_encoded_data_Item: $.ComponentSpec[] = [];
let _cached_decoder_for_OsiUnbind_fully_encoded_data_Item: $.ASN1Decoder<
    OsiUnbind_fully_encoded_data_Item
> | null = null;
let _cached_encoder_for_OsiUnbind_fully_encoded_data_Item: $.ASN1Encoder<
    OsiUnbind_fully_encoded_data_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiUnbind_fully_encoded_data_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiUnbind_fully_encoded_data_Item} The decoded data structure.
 */
export function _decode_OsiUnbind_fully_encoded_data_Item(el: _Element) {
    if (!_cached_decoder_for_OsiUnbind_fully_encoded_data_Item) {
        _cached_decoder_for_OsiUnbind_fully_encoded_data_Item = function (
            el: _Element
        ): OsiUnbind_fully_encoded_data_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "OsiUnbind-fully-encoded-data-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "presentation-context-identifier";
            sequence[1].name = "presentation-data-values";
            let presentation_context_identifier!: Presentation_context_identifier;
            let presentation_data_values!: OsiUnbind_fully_encoded_data_Item_presentation_data_values;
            presentation_context_identifier = _decode_Presentation_context_identifier(
                sequence[0]
            );
            presentation_data_values = _decode_OsiUnbind_fully_encoded_data_Item_presentation_data_values(
                sequence[1]
            );
            return new OsiUnbind_fully_encoded_data_Item(
                presentation_context_identifier,
                presentation_data_values
            );
        };
    }
    return _cached_decoder_for_OsiUnbind_fully_encoded_data_Item(el);
}
/**
 * @summary Encodes a(n) OsiUnbind_fully_encoded_data_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiUnbind_fully_encoded_data_Item, encoded as an ASN.1 Element.
 */
export function _encode_OsiUnbind_fully_encoded_data_Item(
    value: OsiUnbind_fully_encoded_data_Item,
    elGetter: $.ASN1Encoder<OsiUnbind_fully_encoded_data_Item>
) {
    if (!_cached_encoder_for_OsiUnbind_fully_encoded_data_Item) {
        _cached_encoder_for_OsiUnbind_fully_encoded_data_Item = function (
            value: OsiUnbind_fully_encoded_data_Item,
            elGetter: $.ASN1Encoder<OsiUnbind_fully_encoded_data_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Presentation_context_identifier(
                            value.presentation_context_identifier,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_OsiUnbind_fully_encoded_data_Item_presentation_data_values(
                            value.presentation_data_values,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OsiUnbind_fully_encoded_data_Item(
        value,
        elGetter
    );
}

/**
 * @summary OsiUnbind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiUnbind  ::=  CHOICE {
 *   fully-encoded-data
 *     [APPLICATION 1] IMPLICIT SEQUENCE SIZE (1) OF SEQUENCE {
 *        presentation-context-identifier  Presentation-context-identifier,
 *        presentation-data-values     CHOICE {
 *          single-ASN1-type        [0]  ABSTRACT-SYNTAX.&Type(TheOsiUnbind)}}}
 * ```
 */
export type OsiUnbind = {
    fully_encoded_data: OsiUnbind_fully_encoded_data_Item[];
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_OsiUnbind: $.ASN1Decoder<OsiUnbind> | null = null;
let _cached_encoder_for_OsiUnbind: $.ASN1Encoder<OsiUnbind> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiUnbind
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiUnbind} The decoded data structure.
 */
export function _decode_OsiUnbind(el: _Element) {
    if (!_cached_decoder_for_OsiUnbind) {
        _cached_decoder_for_OsiUnbind = $._decode_inextensible_choice<
            OsiUnbind
        >({
            "APPLICATION 1": [
                "fully_encoded_data",
                $._decode_explicit<OsiUnbind_fully_encoded_data_Item[]>(() =>
                    $._decodeSequenceOf<OsiUnbind_fully_encoded_data_Item>(
                        () => _decode_OsiUnbind_fully_encoded_data_Item
                    )
                ),
            ],
        });
    }
    return _cached_decoder_for_OsiUnbind(el);
}
/**
 * @summary Encodes a(n) OsiUnbind into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiUnbind, encoded as an ASN.1 Element.
 */
export function _encode_OsiUnbind(
    value: OsiUnbind,
    elGetter: $.ASN1Encoder<OsiUnbind>
) {
    if (!_cached_encoder_for_OsiUnbind) {
        _cached_encoder_for_OsiUnbind = $._encode_choice<OsiUnbind>(
            {
                fully_encoded_data: $._encode_explicit(
                    _TagClass.application,
                    1,
                    () =>
                        $._encodeSequenceOf<OsiUnbind_fully_encoded_data_Item>(
                            () => _encode_OsiUnbind_fully_encoded_data_Item,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_OsiUnbind(value, elGetter);
}

/**
 * @summary Release_request_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Release-request-reason  ::=  INTEGER {normal(0)}
 * ```
 */
export type Release_request_reason = INTEGER;
/**
 * @summary Release_request_reason_normal
 * @constant
 * @type {number}
 */
export const Release_request_reason_normal: Release_request_reason = 0; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_Release_request_reason: $.ASN1Decoder<
    Release_request_reason
> | null = null;
let _cached_encoder_for_Release_request_reason: $.ASN1Encoder<
    Release_request_reason
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Release_request_reason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Release_request_reason} The decoded data structure.
 */
export function _decode_Release_request_reason(el: _Element) {
    if (!_cached_decoder_for_Release_request_reason) {
        _cached_decoder_for_Release_request_reason = $._decodeInteger;
    }
    return _cached_decoder_for_Release_request_reason(el);
}
/**
 * @summary Encodes a(n) Release_request_reason into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Release_request_reason, encoded as an ASN.1 Element.
 */
export function _encode_Release_request_reason(
    value: Release_request_reason,
    elGetter: $.ASN1Encoder<Release_request_reason>
) {
    if (!_cached_encoder_for_Release_request_reason) {
        _cached_encoder_for_Release_request_reason = $._encodeInteger;
    }
    return _cached_encoder_for_Release_request_reason(value, elGetter);
}

/**
 * @summary TheOsiUnbind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TheOsiUnbind ::= [APPLICATION 2] IMPLICIT SEQUENCE {
 *   reason  [0] IMPLICIT Release-request-reason OPTIONAL}
 * ```
 *
 * @class
 */
export class TheOsiUnbind {
    constructor(
        /**
         * @summary `reason`.
         * @public
         * @readonly
         */
        readonly reason: OPTIONAL<Release_request_reason>
    ) {}

    /**
     * @summary Restructures an object into a TheOsiUnbind
     * @description
     *
     * This takes an `object` and converts it to a `TheOsiUnbind`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TheOsiUnbind`.
     * @returns {TheOsiUnbind}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof TheOsiUnbind]: TheOsiUnbind[_K] }>
    ): TheOsiUnbind {
        return new TheOsiUnbind(_o.reason);
    }
}
/**
 * @summary The Leading Root Component Types of TheOsiUnbind
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TheOsiUnbind: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "reason",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TheOsiUnbind
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TheOsiUnbind: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TheOsiUnbind
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TheOsiUnbind: $.ComponentSpec[] = [];
let _cached_decoder_for_TheOsiUnbind: $.ASN1Decoder<TheOsiUnbind> | null = null;
let _cached_encoder_for_TheOsiUnbind: $.ASN1Encoder<TheOsiUnbind> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TheOsiUnbind
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TheOsiUnbind} The decoded data structure.
 */
export function _decode_TheOsiUnbind(el: _Element) {
    if (!_cached_decoder_for_TheOsiUnbind) {
        _cached_decoder_for_TheOsiUnbind = $._decode_explicit<TheOsiUnbind>(
            () =>
                function (el: _Element): TheOsiUnbind {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let reason: OPTIONAL<Release_request_reason>;
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        reason: (_el: _Element): void => {
                            reason = $._decode_explicit<Release_request_reason>(
                                () => _decode_Release_request_reason
                            )(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_TheOsiUnbind,
                        _extension_additions_list_spec_for_TheOsiUnbind,
                        _root_component_type_list_2_spec_for_TheOsiUnbind,
                        undefined
                    );
                    return new TheOsiUnbind(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ reason
                    );
                }
        );
    }
    return _cached_decoder_for_TheOsiUnbind(el);
}
/**
 * @summary Encodes a(n) TheOsiUnbind into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TheOsiUnbind, encoded as an ASN.1 Element.
 */
export function _encode_TheOsiUnbind(
    value: TheOsiUnbind,
    elGetter: $.ASN1Encoder<TheOsiUnbind>
) {
    if (!_cached_encoder_for_TheOsiUnbind) {
        _cached_encoder_for_TheOsiUnbind = $._encode_explicit(
            _TagClass.application,
            2,
            () =>
                function (
                    value: TheOsiUnbind,
                    elGetter: $.ASN1Encoder<TheOsiUnbind>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* IF_ABSENT  */ value.reason === undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          0,
                                          () => _encode_Release_request_reason,
                                          $.BER
                                      )(value.reason, $.BER),
                            ])
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_TheOsiUnbind(value, elGetter);
}

/**
 * @summary OsiUnbindResult_fully_encoded_data_Item_presentation_data_values
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiUnbindResult-fully-encoded-data-Item-presentation-data-values ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type OsiUnbindResult_fully_encoded_data_Item_presentation_data_values = {
    single_ASN1_type: _Element;
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_OsiUnbindResult_fully_encoded_data_Item_presentation_data_values: $.ASN1Decoder<
    OsiUnbindResult_fully_encoded_data_Item_presentation_data_values
> | null = null;
let _cached_encoder_for_OsiUnbindResult_fully_encoded_data_Item_presentation_data_values: $.ASN1Encoder<
    OsiUnbindResult_fully_encoded_data_Item_presentation_data_values
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiUnbindResult_fully_encoded_data_Item_presentation_data_values
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiUnbindResult_fully_encoded_data_Item_presentation_data_values} The decoded data structure.
 */
export function _decode_OsiUnbindResult_fully_encoded_data_Item_presentation_data_values(
    el: _Element
) {
    if (
        !_cached_decoder_for_OsiUnbindResult_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_decoder_for_OsiUnbindResult_fully_encoded_data_Item_presentation_data_values = $._decode_inextensible_choice<
            OsiUnbindResult_fully_encoded_data_Item_presentation_data_values
        >({
            "CONTEXT 0": [
                "single_ASN1_type",
                $._decode_explicit<_Element>(() => $._decodeAny),
            ],
        });
    }
    return _cached_decoder_for_OsiUnbindResult_fully_encoded_data_Item_presentation_data_values(
        el
    );
}
/**
 * @summary Encodes a(n) OsiUnbindResult_fully_encoded_data_Item_presentation_data_values into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiUnbindResult_fully_encoded_data_Item_presentation_data_values, encoded as an ASN.1 Element.
 */
export function _encode_OsiUnbindResult_fully_encoded_data_Item_presentation_data_values(
    value: OsiUnbindResult_fully_encoded_data_Item_presentation_data_values,
    elGetter: $.ASN1Encoder<
        OsiUnbindResult_fully_encoded_data_Item_presentation_data_values
    >
) {
    if (
        !_cached_encoder_for_OsiUnbindResult_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_encoder_for_OsiUnbindResult_fully_encoded_data_Item_presentation_data_values = $._encode_choice<
            OsiUnbindResult_fully_encoded_data_Item_presentation_data_values
        >(
            {
                single_ASN1_type: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeAny,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_OsiUnbindResult_fully_encoded_data_Item_presentation_data_values(
        value,
        elGetter
    );
}

/**
 * @summary OsiUnbindResult_fully_encoded_data_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiUnbindResult-fully-encoded-data-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class OsiUnbindResult_fully_encoded_data_Item {
    constructor(
        /**
         * @summary `presentation_context_identifier`.
         * @public
         * @readonly
         */
        readonly presentation_context_identifier: Presentation_context_identifier,
        /**
         * @summary `presentation_data_values`.
         * @public
         * @readonly
         */
        readonly presentation_data_values: OsiUnbindResult_fully_encoded_data_Item_presentation_data_values
    ) {}

    /**
     * @summary Restructures an object into a OsiUnbindResult_fully_encoded_data_Item
     * @description
     *
     * This takes an `object` and converts it to a `OsiUnbindResult_fully_encoded_data_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiUnbindResult_fully_encoded_data_Item`.
     * @returns {OsiUnbindResult_fully_encoded_data_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof OsiUnbindResult_fully_encoded_data_Item]: OsiUnbindResult_fully_encoded_data_Item[_K];
            }
        >
    ): OsiUnbindResult_fully_encoded_data_Item {
        return new OsiUnbindResult_fully_encoded_data_Item(
            _o.presentation_context_identifier,
            _o.presentation_data_values
        );
    }
}
/**
 * @summary The Leading Root Component Types of OsiUnbindResult_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiUnbindResult_fully_encoded_data_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "presentation-context-identifier",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "presentation-data-values",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of OsiUnbindResult_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiUnbindResult_fully_encoded_data_Item: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of OsiUnbindResult_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiUnbindResult_fully_encoded_data_Item: $.ComponentSpec[] = [];
let _cached_decoder_for_OsiUnbindResult_fully_encoded_data_Item: $.ASN1Decoder<
    OsiUnbindResult_fully_encoded_data_Item
> | null = null;
let _cached_encoder_for_OsiUnbindResult_fully_encoded_data_Item: $.ASN1Encoder<
    OsiUnbindResult_fully_encoded_data_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiUnbindResult_fully_encoded_data_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiUnbindResult_fully_encoded_data_Item} The decoded data structure.
 */
export function _decode_OsiUnbindResult_fully_encoded_data_Item(el: _Element) {
    if (!_cached_decoder_for_OsiUnbindResult_fully_encoded_data_Item) {
        _cached_decoder_for_OsiUnbindResult_fully_encoded_data_Item = function (
            el: _Element
        ): OsiUnbindResult_fully_encoded_data_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "OsiUnbindResult-fully-encoded-data-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "presentation-context-identifier";
            sequence[1].name = "presentation-data-values";
            let presentation_context_identifier!: Presentation_context_identifier;
            let presentation_data_values!: OsiUnbindResult_fully_encoded_data_Item_presentation_data_values;
            presentation_context_identifier = _decode_Presentation_context_identifier(
                sequence[0]
            );
            presentation_data_values = _decode_OsiUnbindResult_fully_encoded_data_Item_presentation_data_values(
                sequence[1]
            );
            return new OsiUnbindResult_fully_encoded_data_Item(
                presentation_context_identifier,
                presentation_data_values
            );
        };
    }
    return _cached_decoder_for_OsiUnbindResult_fully_encoded_data_Item(el);
}
/**
 * @summary Encodes a(n) OsiUnbindResult_fully_encoded_data_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiUnbindResult_fully_encoded_data_Item, encoded as an ASN.1 Element.
 */
export function _encode_OsiUnbindResult_fully_encoded_data_Item(
    value: OsiUnbindResult_fully_encoded_data_Item,
    elGetter: $.ASN1Encoder<OsiUnbindResult_fully_encoded_data_Item>
) {
    if (!_cached_encoder_for_OsiUnbindResult_fully_encoded_data_Item) {
        _cached_encoder_for_OsiUnbindResult_fully_encoded_data_Item = function (
            value: OsiUnbindResult_fully_encoded_data_Item,
            elGetter: $.ASN1Encoder<OsiUnbindResult_fully_encoded_data_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Presentation_context_identifier(
                            value.presentation_context_identifier,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_OsiUnbindResult_fully_encoded_data_Item_presentation_data_values(
                            value.presentation_data_values,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OsiUnbindResult_fully_encoded_data_Item(
        value,
        elGetter
    );
}

/**
 * @summary OsiUnbindResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiUnbindResult  ::=  CHOICE {
 *   fully-encoded-data  [APPLICATION 1] IMPLICIT SEQUENCE SIZE (1) OF SEQUENCE {
 *     presentation-context-identifier     Presentation-context-identifier,
 *     presentation-data-values            CHOICE {
 *       single-ASN1-type               [0]  ABSTRACT-SYNTAX.&Type(TheOsiUnbindRes)}}}
 * ```
 */
export type OsiUnbindResult = {
    fully_encoded_data: OsiUnbindResult_fully_encoded_data_Item[];
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_OsiUnbindResult: $.ASN1Decoder<
    OsiUnbindResult
> | null = null;
let _cached_encoder_for_OsiUnbindResult: $.ASN1Encoder<
    OsiUnbindResult
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiUnbindResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiUnbindResult} The decoded data structure.
 */
export function _decode_OsiUnbindResult(el: _Element) {
    if (!_cached_decoder_for_OsiUnbindResult) {
        _cached_decoder_for_OsiUnbindResult = $._decode_inextensible_choice<
            OsiUnbindResult
        >({
            "APPLICATION 1": [
                "fully_encoded_data",
                $._decode_explicit<OsiUnbindResult_fully_encoded_data_Item[]>(
                    () =>
                        $._decodeSequenceOf<
                            OsiUnbindResult_fully_encoded_data_Item
                        >(() => _decode_OsiUnbindResult_fully_encoded_data_Item)
                ),
            ],
        });
    }
    return _cached_decoder_for_OsiUnbindResult(el);
}
/**
 * @summary Encodes a(n) OsiUnbindResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiUnbindResult, encoded as an ASN.1 Element.
 */
export function _encode_OsiUnbindResult(
    value: OsiUnbindResult,
    elGetter: $.ASN1Encoder<OsiUnbindResult>
) {
    if (!_cached_encoder_for_OsiUnbindResult) {
        _cached_encoder_for_OsiUnbindResult = $._encode_choice<OsiUnbindResult>(
            {
                fully_encoded_data: $._encode_explicit(
                    _TagClass.application,
                    1,
                    () =>
                        $._encodeSequenceOf<
                            OsiUnbindResult_fully_encoded_data_Item
                        >(
                            () =>
                                _encode_OsiUnbindResult_fully_encoded_data_Item,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_OsiUnbindResult(value, elGetter);
}

/**
 * @summary Release_response_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Release-response-reason  ::=  INTEGER {normal(0)}
 * ```
 */
export type Release_response_reason = INTEGER;
/**
 * @summary Release_response_reason_normal
 * @constant
 * @type {number}
 */
export const Release_response_reason_normal: Release_response_reason = 0; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_Release_response_reason: $.ASN1Decoder<
    Release_response_reason
> | null = null;
let _cached_encoder_for_Release_response_reason: $.ASN1Encoder<
    Release_response_reason
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Release_response_reason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Release_response_reason} The decoded data structure.
 */
export function _decode_Release_response_reason(el: _Element) {
    if (!_cached_decoder_for_Release_response_reason) {
        _cached_decoder_for_Release_response_reason = $._decodeInteger;
    }
    return _cached_decoder_for_Release_response_reason(el);
}
/**
 * @summary Encodes a(n) Release_response_reason into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Release_response_reason, encoded as an ASN.1 Element.
 */
export function _encode_Release_response_reason(
    value: Release_response_reason,
    elGetter: $.ASN1Encoder<Release_response_reason>
) {
    if (!_cached_encoder_for_Release_response_reason) {
        _cached_encoder_for_Release_response_reason = $._encodeInteger;
    }
    return _cached_encoder_for_Release_response_reason(value, elGetter);
}

/**
 * @summary TheOsiUnbindRes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TheOsiUnbindRes ::= [APPLICATION 3] IMPLICIT SEQUENCE {
 *   reason  [0] IMPLICIT Release-response-reason OPTIONAL }
 * ```
 *
 * @class
 */
export class TheOsiUnbindRes {
    constructor(
        /**
         * @summary `reason`.
         * @public
         * @readonly
         */
        readonly reason: OPTIONAL<Release_response_reason>
    ) {}

    /**
     * @summary Restructures an object into a TheOsiUnbindRes
     * @description
     *
     * This takes an `object` and converts it to a `TheOsiUnbindRes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TheOsiUnbindRes`.
     * @returns {TheOsiUnbindRes}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof TheOsiUnbindRes]: TheOsiUnbindRes[_K] }>
    ): TheOsiUnbindRes {
        return new TheOsiUnbindRes(_o.reason);
    }
}
/**
 * @summary The Leading Root Component Types of TheOsiUnbindRes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TheOsiUnbindRes: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "reason",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TheOsiUnbindRes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TheOsiUnbindRes: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TheOsiUnbindRes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TheOsiUnbindRes: $.ComponentSpec[] = [];
let _cached_decoder_for_TheOsiUnbindRes: $.ASN1Decoder<
    TheOsiUnbindRes
> | null = null;
let _cached_encoder_for_TheOsiUnbindRes: $.ASN1Encoder<
    TheOsiUnbindRes
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TheOsiUnbindRes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TheOsiUnbindRes} The decoded data structure.
 */
export function _decode_TheOsiUnbindRes(el: _Element) {
    if (!_cached_decoder_for_TheOsiUnbindRes) {
        _cached_decoder_for_TheOsiUnbindRes = $._decode_explicit<
            TheOsiUnbindRes
        >(
            () =>
                function (el: _Element): TheOsiUnbindRes {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let reason: OPTIONAL<Release_response_reason>;
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        reason: (_el: _Element): void => {
                            reason = $._decode_explicit<
                                Release_response_reason
                            >(() => _decode_Release_response_reason)(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_TheOsiUnbindRes,
                        _extension_additions_list_spec_for_TheOsiUnbindRes,
                        _root_component_type_list_2_spec_for_TheOsiUnbindRes,
                        undefined
                    );
                    return new TheOsiUnbindRes(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ reason
                    );
                }
        );
    }
    return _cached_decoder_for_TheOsiUnbindRes(el);
}
/**
 * @summary Encodes a(n) TheOsiUnbindRes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TheOsiUnbindRes, encoded as an ASN.1 Element.
 */
export function _encode_TheOsiUnbindRes(
    value: TheOsiUnbindRes,
    elGetter: $.ASN1Encoder<TheOsiUnbindRes>
) {
    if (!_cached_encoder_for_TheOsiUnbindRes) {
        _cached_encoder_for_TheOsiUnbindRes = $._encode_explicit(
            _TagClass.application,
            3,
            () =>
                function (
                    value: TheOsiUnbindRes,
                    elGetter: $.ASN1Encoder<TheOsiUnbindRes>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* IF_ABSENT  */ value.reason === undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          0,
                                          () => _encode_Release_response_reason,
                                          $.BER
                                      )(value.reason, $.BER),
                            ])
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_TheOsiUnbindRes(value, elGetter);
}

/**
 * @summary OsiOperation_fully_encoded_data_Item_presentation_data_values
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiOperation-fully-encoded-data-Item-presentation-data-values ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type OsiOperation_fully_encoded_data_Item_presentation_data_values = {
    single_ASN1_type: _Element;
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_OsiOperation_fully_encoded_data_Item_presentation_data_values: $.ASN1Decoder<
    OsiOperation_fully_encoded_data_Item_presentation_data_values
> | null = null;
let _cached_encoder_for_OsiOperation_fully_encoded_data_Item_presentation_data_values: $.ASN1Encoder<
    OsiOperation_fully_encoded_data_Item_presentation_data_values
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiOperation_fully_encoded_data_Item_presentation_data_values
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiOperation_fully_encoded_data_Item_presentation_data_values} The decoded data structure.
 */
export function _decode_OsiOperation_fully_encoded_data_Item_presentation_data_values(
    el: _Element
) {
    if (
        !_cached_decoder_for_OsiOperation_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_decoder_for_OsiOperation_fully_encoded_data_Item_presentation_data_values = $._decode_inextensible_choice<
            OsiOperation_fully_encoded_data_Item_presentation_data_values
        >({
            "CONTEXT 0": [
                "single_ASN1_type",
                $._decode_explicit<_Element>(() => $._decodeAny),
            ],
        });
    }
    return _cached_decoder_for_OsiOperation_fully_encoded_data_Item_presentation_data_values(
        el
    );
}
/**
 * @summary Encodes a(n) OsiOperation_fully_encoded_data_Item_presentation_data_values into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiOperation_fully_encoded_data_Item_presentation_data_values, encoded as an ASN.1 Element.
 */
export function _encode_OsiOperation_fully_encoded_data_Item_presentation_data_values(
    value: OsiOperation_fully_encoded_data_Item_presentation_data_values,
    elGetter: $.ASN1Encoder<
        OsiOperation_fully_encoded_data_Item_presentation_data_values
    >
) {
    if (
        !_cached_encoder_for_OsiOperation_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_encoder_for_OsiOperation_fully_encoded_data_Item_presentation_data_values = $._encode_choice<
            OsiOperation_fully_encoded_data_Item_presentation_data_values
        >(
            {
                single_ASN1_type: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeAny,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_OsiOperation_fully_encoded_data_Item_presentation_data_values(
        value,
        elGetter
    );
}

/**
 * @summary OsiOperation_fully_encoded_data_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiOperation-fully-encoded-data-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class OsiOperation_fully_encoded_data_Item {
    constructor(
        /**
         * @summary `presentation_context_identifier`.
         * @public
         * @readonly
         */
        readonly presentation_context_identifier: Presentation_context_identifier,
        /**
         * @summary `presentation_data_values`.
         * @public
         * @readonly
         */
        readonly presentation_data_values: OsiOperation_fully_encoded_data_Item_presentation_data_values
    ) {}

    /**
     * @summary Restructures an object into a OsiOperation_fully_encoded_data_Item
     * @description
     *
     * This takes an `object` and converts it to a `OsiOperation_fully_encoded_data_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiOperation_fully_encoded_data_Item`.
     * @returns {OsiOperation_fully_encoded_data_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof OsiOperation_fully_encoded_data_Item]: OsiOperation_fully_encoded_data_Item[_K];
            }
        >
    ): OsiOperation_fully_encoded_data_Item {
        return new OsiOperation_fully_encoded_data_Item(
            _o.presentation_context_identifier,
            _o.presentation_data_values
        );
    }
}
/**
 * @summary The Leading Root Component Types of OsiOperation_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiOperation_fully_encoded_data_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "presentation-context-identifier",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "presentation-data-values",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of OsiOperation_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiOperation_fully_encoded_data_Item: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of OsiOperation_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiOperation_fully_encoded_data_Item: $.ComponentSpec[] = [];
let _cached_decoder_for_OsiOperation_fully_encoded_data_Item: $.ASN1Decoder<
    OsiOperation_fully_encoded_data_Item
> | null = null;
let _cached_encoder_for_OsiOperation_fully_encoded_data_Item: $.ASN1Encoder<
    OsiOperation_fully_encoded_data_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiOperation_fully_encoded_data_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiOperation_fully_encoded_data_Item} The decoded data structure.
 */
export function _decode_OsiOperation_fully_encoded_data_Item(el: _Element) {
    if (!_cached_decoder_for_OsiOperation_fully_encoded_data_Item) {
        _cached_decoder_for_OsiOperation_fully_encoded_data_Item = function (
            el: _Element
        ): OsiOperation_fully_encoded_data_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "OsiOperation-fully-encoded-data-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "presentation-context-identifier";
            sequence[1].name = "presentation-data-values";
            let presentation_context_identifier!: Presentation_context_identifier;
            let presentation_data_values!: OsiOperation_fully_encoded_data_Item_presentation_data_values;
            presentation_context_identifier = _decode_Presentation_context_identifier(
                sequence[0]
            );
            presentation_data_values = _decode_OsiOperation_fully_encoded_data_Item_presentation_data_values(
                sequence[1]
            );
            return new OsiOperation_fully_encoded_data_Item(
                presentation_context_identifier,
                presentation_data_values
            );
        };
    }
    return _cached_decoder_for_OsiOperation_fully_encoded_data_Item(el);
}
/**
 * @summary Encodes a(n) OsiOperation_fully_encoded_data_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiOperation_fully_encoded_data_Item, encoded as an ASN.1 Element.
 */
export function _encode_OsiOperation_fully_encoded_data_Item(
    value: OsiOperation_fully_encoded_data_Item,
    elGetter: $.ASN1Encoder<OsiOperation_fully_encoded_data_Item>
) {
    if (!_cached_encoder_for_OsiOperation_fully_encoded_data_Item) {
        _cached_encoder_for_OsiOperation_fully_encoded_data_Item = function (
            value: OsiOperation_fully_encoded_data_Item,
            elGetter: $.ASN1Encoder<OsiOperation_fully_encoded_data_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Presentation_context_identifier(
                            value.presentation_context_identifier,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_OsiOperation_fully_encoded_data_Item_presentation_data_values(
                            value.presentation_data_values,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OsiOperation_fully_encoded_data_Item(
        value,
        elGetter
    );
}

/**
 * @summary OsiOperation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiOperation{OPERATION:Operations}  ::=  CHOICE {
 *   fully-encoded-data [APPLICATION 1] IMPLICIT SEQUENCE SIZE (1) OF SEQUENCE {
 *     presentation-context-identifier    Presentation-context-identifier,
 *     presentation-data-values           CHOICE {
 *       single-ASN1-type              [0]
 *                      ABSTRACT-SYNTAX.&Type(OsiDirectoryOperation {{Operations}})}}}
 * ```
 */
export type OsiOperation = {
    fully_encoded_data: OsiOperation_fully_encoded_data_Item[];
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_OsiOperation: $.ASN1Decoder<OsiOperation> | null = null;
let _cached_encoder_for_OsiOperation: $.ASN1Encoder<OsiOperation> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiOperation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiOperation} The decoded data structure.
 */
export function _decode_OsiOperation(el: _Element) {
    if (!_cached_decoder_for_OsiOperation) {
        _cached_decoder_for_OsiOperation = $._decode_inextensible_choice<
            OsiOperation
        >({
            "APPLICATION 1": [
                "fully_encoded_data",
                $._decode_explicit<OsiOperation_fully_encoded_data_Item[]>(() =>
                    $._decodeSequenceOf<OsiOperation_fully_encoded_data_Item>(
                        () => _decode_OsiOperation_fully_encoded_data_Item
                    )
                ),
            ],
        });
    }
    return _cached_decoder_for_OsiOperation(el);
}
/**
 * @summary Encodes a(n) OsiOperation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiOperation, encoded as an ASN.1 Element.
 */
export function _encode_OsiOperation(
    value: OsiOperation,
    elGetter: $.ASN1Encoder<OsiOperation>
) {
    if (!_cached_encoder_for_OsiOperation) {
        _cached_encoder_for_OsiOperation = $._encode_choice<OsiOperation>(
            {
                fully_encoded_data: $._encode_explicit(
                    _TagClass.application,
                    1,
                    () =>
                        $._encodeSequenceOf<
                            OsiOperation_fully_encoded_data_Item
                        >(
                            () => _encode_OsiOperation_fully_encoded_data_Item,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_OsiOperation(value, elGetter);
}

/**
 * @summary OsiReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiReq{OPERATION:Operations} ::= [1] IMPLICIT SEQUENCE {
 *   invokeId  InvokeId,
 *   opcode    OPERATION.&operationCode({Operations}),
 *   argument  OPERATION.&ArgumentType({Operations}{@opcode}) }
 * ```
 *
 * @class
 */
export class OsiReq {
    constructor(
        /**
         * @summary `invokeId`.
         * @public
         * @readonly
         */
        readonly invokeId: InvokeId,
        /**
         * @summary `opcode`.
         * @public
         * @readonly
         */
        readonly opcode: Code,
        /**
         * @summary `argument`.
         * @public
         * @readonly
         */
        readonly argument: _Element
    ) {}

    /**
     * @summary Restructures an object into a OsiReq
     * @description
     *
     * This takes an `object` and converts it to a `OsiReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiReq`.
     * @returns {OsiReq}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof OsiReq]: OsiReq[_K] }>
    ): OsiReq {
        return new OsiReq(_o.invokeId, _o.opcode, _o.argument);
    }
}
/**
 * @summary The Leading Root Component Types of OsiReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiReq: $.ComponentSpec[] = [
    new $.ComponentSpec("invokeId", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("opcode", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("argument", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of OsiReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiReq: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of OsiReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiReq: $.ComponentSpec[] = [];
let _cached_decoder_for_OsiReq: $.ASN1Decoder<OsiReq> | null = null;
let _cached_encoder_for_OsiReq: $.ASN1Encoder<OsiReq> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiReq} The decoded data structure.
 */
export function _decode_OsiReq(el: _Element) {
    if (!_cached_decoder_for_OsiReq) {
        _cached_decoder_for_OsiReq = $._decode_explicit<OsiReq>(
            () =>
                function (el: _Element): OsiReq {
                    const sequence: _Element[] = el.sequence;
                    if (sequence.length < 3) {
                        throw new _ConstructionError(
                            "OsiReq contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
                    }
                    sequence[0].name = "invokeId";
                    sequence[1].name = "opcode";
                    sequence[2].name = "argument";
                    let invokeId!: InvokeId;
                    let opcode!: Code;
                    let argument!: _Element;
                    invokeId = _decode_InvokeId(sequence[0]);
                    opcode = _decode_Code(sequence[1]);
                    argument = $._decodeAny(sequence[2]);
                    return new OsiReq(invokeId, opcode, argument);
                }
        );
    }
    return _cached_decoder_for_OsiReq(el);
}
/**
 * @summary Encodes a(n) OsiReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiReq, encoded as an ASN.1 Element.
 */
export function _encode_OsiReq(value: OsiReq, elGetter: $.ASN1Encoder<OsiReq>) {
    if (!_cached_encoder_for_OsiReq) {
        _cached_encoder_for_OsiReq = $._encode_explicit(
            _TagClass.context,
            1,
            () =>
                function (
                    value: OsiReq,
                    elGetter: $.ASN1Encoder<OsiReq>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ _encode_InvokeId(
                                    value.invokeId,
                                    $.BER
                                ),
                                /* REQUIRED   */ _encode_Code(
                                    value.opcode,
                                    $.BER
                                ),
                                /* REQUIRED   */ $._encodeAny(
                                    value.argument,
                                    $.BER
                                ),
                            ])
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_OsiReq(value, elGetter);
}

/**
 * @summary OsiRes_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiRes-result ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class OsiRes_result {
    constructor(
        /**
         * @summary `opcode`.
         * @public
         * @readonly
         */
        readonly opcode: Code,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: _Element
    ) {}

    /**
     * @summary Restructures an object into a OsiRes_result
     * @description
     *
     * This takes an `object` and converts it to a `OsiRes_result`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiRes_result`.
     * @returns {OsiRes_result}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof OsiRes_result]: OsiRes_result[_K] }>
    ): OsiRes_result {
        return new OsiRes_result(_o.opcode, _o.result);
    }
}
/**
 * @summary The Leading Root Component Types of OsiRes_result
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiRes_result: $.ComponentSpec[] = [
    new $.ComponentSpec("opcode", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("result", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of OsiRes_result
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiRes_result: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of OsiRes_result
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiRes_result: $.ComponentSpec[] = [];
let _cached_decoder_for_OsiRes_result: $.ASN1Decoder<
    OsiRes_result
> | null = null;
let _cached_encoder_for_OsiRes_result: $.ASN1Encoder<
    OsiRes_result
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiRes_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiRes_result} The decoded data structure.
 */
export function _decode_OsiRes_result(el: _Element) {
    if (!_cached_decoder_for_OsiRes_result) {
        _cached_decoder_for_OsiRes_result = function (
            el: _Element
        ): OsiRes_result {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "OsiRes-result contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "opcode";
            sequence[1].name = "result";
            let opcode!: Code;
            let result!: _Element;
            opcode = _decode_Code(sequence[0]);
            result = $._decodeAny(sequence[1]);
            return new OsiRes_result(opcode, result);
        };
    }
    return _cached_decoder_for_OsiRes_result(el);
}
/**
 * @summary Encodes a(n) OsiRes_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiRes_result, encoded as an ASN.1 Element.
 */
export function _encode_OsiRes_result(
    value: OsiRes_result,
    elGetter: $.ASN1Encoder<OsiRes_result>
) {
    if (!_cached_encoder_for_OsiRes_result) {
        _cached_encoder_for_OsiRes_result = function (
            value: OsiRes_result,
            elGetter: $.ASN1Encoder<OsiRes_result>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Code(value.opcode, $.BER),
                        /* REQUIRED   */ $._encodeAny(value.result, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OsiRes_result(value, elGetter);
}

/**
 * @summary OsiRes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiRes{OPERATION:Operations} ::= [2] IMPLICIT SEQUENCE {
 *   invokeId  InvokeId,
 *   result    SEQUENCE {
 *     opcode    OPERATION.&operationCode({Operations}),
 *     result    OPERATION.&ResultType({Operations}{@.opcode}) }}
 * ```
 *
 * @class
 */
export class OsiRes {
    constructor(
        /**
         * @summary `invokeId`.
         * @public
         * @readonly
         */
        readonly invokeId: InvokeId,
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: OsiRes_result
    ) {}

    /**
     * @summary Restructures an object into a OsiRes
     * @description
     *
     * This takes an `object` and converts it to a `OsiRes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiRes`.
     * @returns {OsiRes}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof OsiRes]: OsiRes[_K] }>
    ): OsiRes {
        return new OsiRes(_o.invokeId, _o.result);
    }
}
/**
 * @summary The Leading Root Component Types of OsiRes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiRes: $.ComponentSpec[] = [
    new $.ComponentSpec("invokeId", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "result",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of OsiRes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiRes: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of OsiRes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiRes: $.ComponentSpec[] = [];
let _cached_decoder_for_OsiRes: $.ASN1Decoder<OsiRes> | null = null;
let _cached_encoder_for_OsiRes: $.ASN1Encoder<OsiRes> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiRes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiRes} The decoded data structure.
 */
export function _decode_OsiRes(el: _Element) {
    if (!_cached_decoder_for_OsiRes) {
        _cached_decoder_for_OsiRes = $._decode_explicit<OsiRes>(
            () =>
                function (el: _Element): OsiRes {
                    const sequence: _Element[] = el.sequence;
                    if (sequence.length < 2) {
                        throw new _ConstructionError(
                            "OsiRes contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
                    }
                    sequence[0].name = "invokeId";
                    sequence[1].name = "result";
                    let invokeId!: InvokeId;
                    let result!: OsiRes_result;
                    invokeId = _decode_InvokeId(sequence[0]);
                    result = _decode_OsiRes_result(sequence[1]);
                    return new OsiRes(invokeId, result);
                }
        );
    }
    return _cached_decoder_for_OsiRes(el);
}
/**
 * @summary Encodes a(n) OsiRes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiRes, encoded as an ASN.1 Element.
 */
export function _encode_OsiRes(value: OsiRes, elGetter: $.ASN1Encoder<OsiRes>) {
    if (!_cached_encoder_for_OsiRes) {
        _cached_encoder_for_OsiRes = $._encode_explicit(
            _TagClass.context,
            2,
            () =>
                function (
                    value: OsiRes,
                    elGetter: $.ASN1Encoder<OsiRes>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ _encode_InvokeId(
                                    value.invokeId,
                                    $.BER
                                ),
                                /* REQUIRED   */ _encode_OsiRes_result(
                                    value.result,
                                    $.BER
                                ),
                            ])
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_OsiRes(value, elGetter);
}

/**
 * @summary OsiErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiErr{OPERATION:Operations} ::= [3] IMPLICIT SEQUENCE {
 *   invokeID  InvokeId,
 *   errcode   OPERATION.&Errors.&errorCode({Operations}),
 *   error     OPERATION.&Errors.&ParameterType({Operations}{@.errcode}) }
 * ```
 *
 * @class
 */
export class OsiErr {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: InvokeId,
        /**
         * @summary `errcode`.
         * @public
         * @readonly
         */
        readonly errcode: _Element,
        /**
         * @summary `error`.
         * @public
         * @readonly
         */
        readonly error: _Element
    ) {}

    /**
     * @summary Restructures an object into a OsiErr
     * @description
     *
     * This takes an `object` and converts it to a `OsiErr`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiErr`.
     * @returns {OsiErr}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof OsiErr]: OsiErr[_K] }>
    ): OsiErr {
        return new OsiErr(_o.invokeID, _o.errcode, _o.error);
    }
}
/**
 * @summary The Leading Root Component Types of OsiErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiErr: $.ComponentSpec[] = [
    new $.ComponentSpec("invokeID", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("errcode", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("error", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of OsiErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiErr: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of OsiErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiErr: $.ComponentSpec[] = [];
let _cached_decoder_for_OsiErr: $.ASN1Decoder<OsiErr> | null = null;
let _cached_encoder_for_OsiErr: $.ASN1Encoder<OsiErr> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiErr} The decoded data structure.
 */
export function _decode_OsiErr(el: _Element) {
    if (!_cached_decoder_for_OsiErr) {
        _cached_decoder_for_OsiErr = $._decode_explicit<OsiErr>(
            () =>
                function (el: _Element): OsiErr {
                    const sequence: _Element[] = el.sequence;
                    if (sequence.length < 3) {
                        throw new _ConstructionError(
                            "OsiErr contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
                    }
                    sequence[0].name = "invokeID";
                    sequence[1].name = "errcode";
                    sequence[2].name = "error";
                    let invokeID!: InvokeId;
                    let errcode!: _Element;
                    let error!: _Element;
                    invokeID = _decode_InvokeId(sequence[0]);
                    errcode = $._decodeAny(sequence[1]);
                    error = $._decodeAny(sequence[2]);
                    return new OsiErr(invokeID, errcode, error);
                }
        );
    }
    return _cached_decoder_for_OsiErr(el);
}
/**
 * @summary Encodes a(n) OsiErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiErr, encoded as an ASN.1 Element.
 */
export function _encode_OsiErr(value: OsiErr, elGetter: $.ASN1Encoder<OsiErr>) {
    if (!_cached_encoder_for_OsiErr) {
        _cached_encoder_for_OsiErr = $._encode_explicit(
            _TagClass.context,
            3,
            () =>
                function (
                    value: OsiErr,
                    elGetter: $.ASN1Encoder<OsiErr>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ _encode_InvokeId(
                                    value.invokeID,
                                    $.BER
                                ),
                                /* REQUIRED   */ $._encodeAny(
                                    value.errcode,
                                    $.BER
                                ),
                                /* REQUIRED   */ $._encodeAny(
                                    value.error,
                                    $.BER
                                ),
                            ])
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_OsiErr(value, elGetter);
}

/**
 * @summary GeneralProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralProblem  ::=  INTEGER {
 *   unrecognizedPDU          (0),
 *   mistypedPDU              (1),
 *   badlyStructuredPDU       (2) }
 * ```
 */
export type GeneralProblem = INTEGER;
/**
 * @summary GeneralProblem_unrecognizedPDU
 * @constant
 * @type {number}
 */
export const GeneralProblem_unrecognizedPDU: GeneralProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary GeneralProblem_mistypedPDU
 * @constant
 * @type {number}
 */
export const GeneralProblem_mistypedPDU: GeneralProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary GeneralProblem_badlyStructuredPDU
 * @constant
 * @type {number}
 */
export const GeneralProblem_badlyStructuredPDU: GeneralProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_GeneralProblem: $.ASN1Decoder<
    GeneralProblem
> | null = null;
let _cached_encoder_for_GeneralProblem: $.ASN1Encoder<
    GeneralProblem
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) GeneralProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GeneralProblem} The decoded data structure.
 */
export function _decode_GeneralProblem(el: _Element) {
    if (!_cached_decoder_for_GeneralProblem) {
        _cached_decoder_for_GeneralProblem = $._decodeInteger;
    }
    return _cached_decoder_for_GeneralProblem(el);
}
/**
 * @summary Encodes a(n) GeneralProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralProblem, encoded as an ASN.1 Element.
 */
export function _encode_GeneralProblem(
    value: GeneralProblem,
    elGetter: $.ASN1Encoder<GeneralProblem>
) {
    if (!_cached_encoder_for_GeneralProblem) {
        _cached_encoder_for_GeneralProblem = $._encodeInteger;
    }
    return _cached_encoder_for_GeneralProblem(value, elGetter);
}

/**
 * @summary InvokeProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeProblem  ::=  INTEGER {
 *   duplicateInvocation      (0),
 *   unrecognizedOperation    (1),
 *   mistypedArgument         (2),
 *   resourceLimitation       (3),
 *   releaseInProgress        (4)}
 * ```
 */
export type InvokeProblem = INTEGER;
/**
 * @summary InvokeProblem_duplicateInvocation
 * @constant
 * @type {number}
 */
export const InvokeProblem_duplicateInvocation: InvokeProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary InvokeProblem_unrecognizedOperation
 * @constant
 * @type {number}
 */
export const InvokeProblem_unrecognizedOperation: InvokeProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary InvokeProblem_mistypedArgument
 * @constant
 * @type {number}
 */
export const InvokeProblem_mistypedArgument: InvokeProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary InvokeProblem_resourceLimitation
 * @constant
 * @type {number}
 */
export const InvokeProblem_resourceLimitation: InvokeProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary InvokeProblem_releaseInProgress
 * @constant
 * @type {number}
 */
export const InvokeProblem_releaseInProgress: InvokeProblem = 4; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_InvokeProblem: $.ASN1Decoder<
    InvokeProblem
> | null = null;
let _cached_encoder_for_InvokeProblem: $.ASN1Encoder<
    InvokeProblem
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) InvokeProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvokeProblem} The decoded data structure.
 */
export function _decode_InvokeProblem(el: _Element) {
    if (!_cached_decoder_for_InvokeProblem) {
        _cached_decoder_for_InvokeProblem = $._decodeInteger;
    }
    return _cached_decoder_for_InvokeProblem(el);
}
/**
 * @summary Encodes a(n) InvokeProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvokeProblem, encoded as an ASN.1 Element.
 */
export function _encode_InvokeProblem(
    value: InvokeProblem,
    elGetter: $.ASN1Encoder<InvokeProblem>
) {
    if (!_cached_encoder_for_InvokeProblem) {
        _cached_encoder_for_InvokeProblem = $._encodeInteger;
    }
    return _cached_encoder_for_InvokeProblem(value, elGetter);
}

/**
 * @summary ReturnResultProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReturnResultProblem  ::=  INTEGER {
 *   unrecognizedInvocation   (0),
 *   resultResponseUnexpected (1),
 *   mistypedResult           (2)}
 * ```
 */
export type ReturnResultProblem = INTEGER;
/**
 * @summary ReturnResultProblem_unrecognizedInvocation
 * @constant
 * @type {number}
 */
export const ReturnResultProblem_unrecognizedInvocation: ReturnResultProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary ReturnResultProblem_resultResponseUnexpected
 * @constant
 * @type {number}
 */
export const ReturnResultProblem_resultResponseUnexpected: ReturnResultProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary ReturnResultProblem_mistypedResult
 * @constant
 * @type {number}
 */
export const ReturnResultProblem_mistypedResult: ReturnResultProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_ReturnResultProblem: $.ASN1Decoder<
    ReturnResultProblem
> | null = null;
let _cached_encoder_for_ReturnResultProblem: $.ASN1Encoder<
    ReturnResultProblem
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ReturnResultProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReturnResultProblem} The decoded data structure.
 */
export function _decode_ReturnResultProblem(el: _Element) {
    if (!_cached_decoder_for_ReturnResultProblem) {
        _cached_decoder_for_ReturnResultProblem = $._decodeInteger;
    }
    return _cached_decoder_for_ReturnResultProblem(el);
}
/**
 * @summary Encodes a(n) ReturnResultProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReturnResultProblem, encoded as an ASN.1 Element.
 */
export function _encode_ReturnResultProblem(
    value: ReturnResultProblem,
    elGetter: $.ASN1Encoder<ReturnResultProblem>
) {
    if (!_cached_encoder_for_ReturnResultProblem) {
        _cached_encoder_for_ReturnResultProblem = $._encodeInteger;
    }
    return _cached_encoder_for_ReturnResultProblem(value, elGetter);
}

/**
 * @summary ReturnErrorProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReturnErrorProblem  ::=  INTEGER {
 *   unrecognizedInvocation   (0),
 *   errorResponseUnexpected  (1),
 *   unrecognizedError        (2),
 *   unexpectedError          (3),
 *   mistypedParameter        (4)}
 * ```
 */
export type ReturnErrorProblem = INTEGER;
/**
 * @summary ReturnErrorProblem_unrecognizedInvocation
 * @constant
 * @type {number}
 */
export const ReturnErrorProblem_unrecognizedInvocation: ReturnErrorProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary ReturnErrorProblem_errorResponseUnexpected
 * @constant
 * @type {number}
 */
export const ReturnErrorProblem_errorResponseUnexpected: ReturnErrorProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary ReturnErrorProblem_unrecognizedError
 * @constant
 * @type {number}
 */
export const ReturnErrorProblem_unrecognizedError: ReturnErrorProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary ReturnErrorProblem_unexpectedError
 * @constant
 * @type {number}
 */
export const ReturnErrorProblem_unexpectedError: ReturnErrorProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary ReturnErrorProblem_mistypedParameter
 * @constant
 * @type {number}
 */
export const ReturnErrorProblem_mistypedParameter: ReturnErrorProblem = 4; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_ReturnErrorProblem: $.ASN1Decoder<
    ReturnErrorProblem
> | null = null;
let _cached_encoder_for_ReturnErrorProblem: $.ASN1Encoder<
    ReturnErrorProblem
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ReturnErrorProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReturnErrorProblem} The decoded data structure.
 */
export function _decode_ReturnErrorProblem(el: _Element) {
    if (!_cached_decoder_for_ReturnErrorProblem) {
        _cached_decoder_for_ReturnErrorProblem = $._decodeInteger;
    }
    return _cached_decoder_for_ReturnErrorProblem(el);
}
/**
 * @summary Encodes a(n) ReturnErrorProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReturnErrorProblem, encoded as an ASN.1 Element.
 */
export function _encode_ReturnErrorProblem(
    value: ReturnErrorProblem,
    elGetter: $.ASN1Encoder<ReturnErrorProblem>
) {
    if (!_cached_encoder_for_ReturnErrorProblem) {
        _cached_encoder_for_ReturnErrorProblem = $._encodeInteger;
    }
    return _cached_encoder_for_ReturnErrorProblem(value, elGetter);
}

/**
 * @summary OsiRej_problem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiRej-problem ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type OsiRej_problem =
    | { general: GeneralProblem } /* CHOICE_ALT_ROOT */
    | { invoke: InvokeProblem } /* CHOICE_ALT_ROOT */
    | { returnResult: ReturnResultProblem } /* CHOICE_ALT_ROOT */
    | { returnError: ReturnErrorProblem } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_OsiRej_problem: $.ASN1Decoder<
    OsiRej_problem
> | null = null;
let _cached_encoder_for_OsiRej_problem: $.ASN1Encoder<
    OsiRej_problem
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiRej_problem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiRej_problem} The decoded data structure.
 */
export function _decode_OsiRej_problem(el: _Element) {
    if (!_cached_decoder_for_OsiRej_problem) {
        _cached_decoder_for_OsiRej_problem = $._decode_extensible_choice<
            OsiRej_problem
        >({
            "CONTEXT 0": [
                "general",
                $._decode_explicit<GeneralProblem>(
                    () => _decode_GeneralProblem
                ),
            ],
            "CONTEXT 1": [
                "invoke",
                $._decode_explicit<InvokeProblem>(() => _decode_InvokeProblem),
            ],
            "CONTEXT 2": [
                "returnResult",
                $._decode_explicit<ReturnResultProblem>(
                    () => _decode_ReturnResultProblem
                ),
            ],
            "CONTEXT 3": [
                "returnError",
                $._decode_explicit<ReturnErrorProblem>(
                    () => _decode_ReturnErrorProblem
                ),
            ],
        });
    }
    return _cached_decoder_for_OsiRej_problem(el);
}
/**
 * @summary Encodes a(n) OsiRej_problem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiRej_problem, encoded as an ASN.1 Element.
 */
export function _encode_OsiRej_problem(
    value: OsiRej_problem,
    elGetter: $.ASN1Encoder<OsiRej_problem>
) {
    if (!_cached_encoder_for_OsiRej_problem) {
        _cached_encoder_for_OsiRej_problem = $._encode_choice<OsiRej_problem>(
            {
                general: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_GeneralProblem,
                    $.BER
                ),
                invoke: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_InvokeProblem,
                    $.BER
                ),
                returnResult: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_ReturnResultProblem,
                    $.BER
                ),
                returnError: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_ReturnErrorProblem,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_OsiRej_problem(value, elGetter);
}

/**
 * @summary OsiRej
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiRej ::= [4] IMPLICIT SEQUENCE {
 *   invokeId          InvokeId,
 *   problem           CHOICE {
 *     general      [0]  IMPLICIT GeneralProblem,
 *     invoke       [1]  IMPLICIT InvokeProblem,
 *     returnResult [2]  IMPLICIT ReturnResultProblem,
 *     returnError  [3]  IMPLICIT ReturnErrorProblem,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class OsiRej {
    constructor(
        /**
         * @summary `invokeId`.
         * @public
         * @readonly
         */
        readonly invokeId: InvokeId,
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: OsiRej_problem,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a OsiRej
     * @description
     *
     * This takes an `object` and converts it to a `OsiRej`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiRej`.
     * @returns {OsiRej}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof OsiRej]: OsiRej[_K] }>
    ): OsiRej {
        return new OsiRej(
            _o.invokeId,
            _o.problem,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of OsiRej
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiRej: $.ComponentSpec[] = [
    new $.ComponentSpec("invokeId", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("problem", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of OsiRej
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiRej: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of OsiRej
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiRej: $.ComponentSpec[] = [];
let _cached_decoder_for_OsiRej: $.ASN1Decoder<OsiRej> | null = null;
let _cached_encoder_for_OsiRej: $.ASN1Encoder<OsiRej> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiRej
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiRej} The decoded data structure.
 */
export function _decode_OsiRej(el: _Element) {
    if (!_cached_decoder_for_OsiRej) {
        _cached_decoder_for_OsiRej = $._decode_explicit<OsiRej>(
            () =>
                function (el: _Element): OsiRej {
                    const sequence: _Element[] = el.sequence;
                    if (sequence.length < 2) {
                        throw new _ConstructionError(
                            "OsiRej contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
                    }
                    sequence[0].name = "invokeId";
                    sequence[1].name = "problem";
                    let invokeId!: InvokeId;
                    let problem!: OsiRej_problem;
                    invokeId = _decode_InvokeId(sequence[0]);
                    problem = _decode_OsiRej_problem(sequence[1]);
                    return new OsiRej(invokeId, problem, sequence.slice(2));
                }
        );
    }
    return _cached_decoder_for_OsiRej(el);
}
/**
 * @summary Encodes a(n) OsiRej into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiRej, encoded as an ASN.1 Element.
 */
export function _encode_OsiRej(value: OsiRej, elGetter: $.ASN1Encoder<OsiRej>) {
    if (!_cached_encoder_for_OsiRej) {
        _cached_encoder_for_OsiRej = $._encode_explicit(
            _TagClass.context,
            4,
            () =>
                function (
                    value: OsiRej,
                    elGetter: $.ASN1Encoder<OsiRej>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_InvokeId(
                                        value.invokeId,
                                        $.BER
                                    ),
                                    /* REQUIRED   */ _encode_OsiRej_problem(
                                        value.problem,
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
    return _cached_encoder_for_OsiRej(value, elGetter);
}

/**
 * @summary OsiDirectoryOperation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiDirectoryOperation{OPERATION:Operations}  ::=  CHOICE {
 *   request  OsiReq{{Operations}},
 *   result   OsiRes{{Operations}},
 *   error    OsiErr{{Operations}},
 *   reject   OsiRej}
 * ```
 */
export type OsiDirectoryOperation =
    | { request: OsiReq } /* CHOICE_ALT_ROOT */
    | { result: OsiRes } /* CHOICE_ALT_ROOT */
    | { error: OsiErr } /* CHOICE_ALT_ROOT */
    | { reject: OsiRej } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_OsiDirectoryOperation: $.ASN1Decoder<
    OsiDirectoryOperation
> | null = null;
let _cached_encoder_for_OsiDirectoryOperation: $.ASN1Encoder<
    OsiDirectoryOperation
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) OsiDirectoryOperation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiDirectoryOperation} The decoded data structure.
 */
export function _decode_OsiDirectoryOperation(el: _Element) {
    if (!_cached_decoder_for_OsiDirectoryOperation) {
        _cached_decoder_for_OsiDirectoryOperation = $._decode_inextensible_choice<
            OsiDirectoryOperation
        >({
            "CONTEXT 1": ["request", _decode_OsiReq],
            "CONTEXT 2": ["result", _decode_OsiRes],
            "CONTEXT 3": ["error", _decode_OsiErr],
            "CONTEXT 4": ["reject", _decode_OsiRej],
        });
    }
    return _cached_decoder_for_OsiDirectoryOperation(el);
}
/**
 * @summary Encodes a(n) OsiDirectoryOperation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiDirectoryOperation, encoded as an ASN.1 Element.
 */
export function _encode_OsiDirectoryOperation(
    value: OsiDirectoryOperation,
    elGetter: $.ASN1Encoder<OsiDirectoryOperation>
) {
    if (!_cached_encoder_for_OsiDirectoryOperation) {
        _cached_encoder_for_OsiDirectoryOperation = $._encode_choice<
            OsiDirectoryOperation
        >(
            {
                request: _encode_OsiReq,
                result: _encode_OsiRes,
                error: _encode_OsiErr,
                reject: _encode_OsiRej,
            },
            $.BER
        );
    }
    return _cached_encoder_for_OsiDirectoryOperation(value, elGetter);
}

/**
 * @summary Presentation_context_identifier_list_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Presentation-context-identifier-list-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class Presentation_context_identifier_list_Item {
    constructor(
        /**
         * @summary `presentation_context_identifier`.
         * @public
         * @readonly
         */
        readonly presentation_context_identifier: Presentation_context_identifier,
        /**
         * @summary `transfer_syntax_name`.
         * @public
         * @readonly
         */
        readonly transfer_syntax_name: Transfer_syntax_name
    ) {}

    /**
     * @summary Restructures an object into a Presentation_context_identifier_list_Item
     * @description
     *
     * This takes an `object` and converts it to a `Presentation_context_identifier_list_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Presentation_context_identifier_list_Item`.
     * @returns {Presentation_context_identifier_list_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof Presentation_context_identifier_list_Item]: Presentation_context_identifier_list_Item[_K];
            }
        >
    ): Presentation_context_identifier_list_Item {
        return new Presentation_context_identifier_list_Item(
            _o.presentation_context_identifier,
            _o.transfer_syntax_name
        );
    }
}
/**
 * @summary The Leading Root Component Types of Presentation_context_identifier_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Presentation_context_identifier_list_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "presentation-context-identifier",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "transfer-syntax-name",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Presentation_context_identifier_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Presentation_context_identifier_list_Item: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Presentation_context_identifier_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Presentation_context_identifier_list_Item: $.ComponentSpec[] = [];
let _cached_decoder_for_Presentation_context_identifier_list_Item: $.ASN1Decoder<
    Presentation_context_identifier_list_Item
> | null = null;
let _cached_encoder_for_Presentation_context_identifier_list_Item: $.ASN1Encoder<
    Presentation_context_identifier_list_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Presentation_context_identifier_list_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Presentation_context_identifier_list_Item} The decoded data structure.
 */
export function _decode_Presentation_context_identifier_list_Item(
    el: _Element
) {
    if (!_cached_decoder_for_Presentation_context_identifier_list_Item) {
        _cached_decoder_for_Presentation_context_identifier_list_Item = function (
            el: _Element
        ): Presentation_context_identifier_list_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "Presentation-context-identifier-list-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "presentation-context-identifier";
            sequence[1].name = "transfer-syntax-name";
            let presentation_context_identifier!: Presentation_context_identifier;
            let transfer_syntax_name!: Transfer_syntax_name;
            presentation_context_identifier = _decode_Presentation_context_identifier(
                sequence[0]
            );
            transfer_syntax_name = _decode_Transfer_syntax_name(sequence[1]);
            return new Presentation_context_identifier_list_Item(
                presentation_context_identifier,
                transfer_syntax_name
            );
        };
    }
    return _cached_decoder_for_Presentation_context_identifier_list_Item(el);
}
/**
 * @summary Encodes a(n) Presentation_context_identifier_list_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Presentation_context_identifier_list_Item, encoded as an ASN.1 Element.
 */
export function _encode_Presentation_context_identifier_list_Item(
    value: Presentation_context_identifier_list_Item,
    elGetter: $.ASN1Encoder<Presentation_context_identifier_list_Item>
) {
    if (!_cached_encoder_for_Presentation_context_identifier_list_Item) {
        _cached_encoder_for_Presentation_context_identifier_list_Item = function (
            value: Presentation_context_identifier_list_Item,
            elGetter: $.ASN1Encoder<Presentation_context_identifier_list_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Presentation_context_identifier(
                            value.presentation_context_identifier,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Transfer_syntax_name(
                            value.transfer_syntax_name,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Presentation_context_identifier_list_Item(
        value,
        elGetter
    );
}

export type Presentation_context_identifier_list<> = Presentation_context_identifier_list_Item[]; // SequenceOfType
let _cached_decoder_for_Presentation_context_identifier_list: $.ASN1Decoder<
    Presentation_context_identifier_list
> | null = null;
let _cached_encoder_for_Presentation_context_identifier_list: $.ASN1Encoder<
    Presentation_context_identifier_list
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Presentation_context_identifier_list
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Presentation_context_identifier_list} The decoded data structure.
 */
export function _decode_Presentation_context_identifier_list(el: _Element) {
    if (!_cached_decoder_for_Presentation_context_identifier_list) {
        _cached_decoder_for_Presentation_context_identifier_list = $._decodeSequenceOf<
            Presentation_context_identifier_list_Item
        >(() => _decode_Presentation_context_identifier_list_Item);
    }
    return _cached_decoder_for_Presentation_context_identifier_list(el);
}
/**
 * @summary Encodes a(n) Presentation_context_identifier_list into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Presentation_context_identifier_list, encoded as an ASN.1 Element.
 */
export function _encode_Presentation_context_identifier_list(
    value: Presentation_context_identifier_list,
    elGetter: $.ASN1Encoder<Presentation_context_identifier_list>
) {
    if (!_cached_encoder_for_Presentation_context_identifier_list) {
        _cached_encoder_for_Presentation_context_identifier_list = $._encodeSequenceOf<
            Presentation_context_identifier_list_Item
        >(() => _encode_Presentation_context_identifier_list_Item, $.BER);
    }
    return _cached_encoder_for_Presentation_context_identifier_list(
        value,
        elGetter
    );
}

/**
 * @summary ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ARU-PPDU-normal-mode-parameters-user-data-fully-encoded-data-Item-presentation-data-values ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = {
    single_ASN1_type: _Element;
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values: $.ASN1Decoder<
    ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
> | null = null;
let _cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values: $.ASN1Encoder<
    ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values} The decoded data structure.
 */
export function _decode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
    el: _Element
) {
    if (
        !_cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = $._decode_inextensible_choice<
            ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
        >({
            "CONTEXT 0": [
                "single_ASN1_type",
                $._decode_explicit<_Element>(() => $._decodeAny),
            ],
        });
    }
    return _cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
        el
    );
}
/**
 * @summary Encodes a(n) ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values, encoded as an ASN.1 Element.
 */
export function _encode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
    value: ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values,
    elGetter: $.ASN1Encoder<
        ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    >
) {
    if (
        !_cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = $._encode_choice<
            ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
        >(
            {
                single_ASN1_type: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeAny,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
        value,
        elGetter
    );
}

/**
 * @summary ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ARU-PPDU-normal-mode-parameters-user-data-fully-encoded-data-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item {
    constructor(
        /**
         * @summary `presentation_context_identifier`.
         * @public
         * @readonly
         */
        readonly presentation_context_identifier: Presentation_context_identifier,
        /**
         * @summary `presentation_data_values`.
         * @public
         * @readonly
         */
        readonly presentation_data_values: ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {}

    /**
     * @summary Restructures an object into a ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item
     * @description
     *
     * This takes an `object` and converts it to a `ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item`.
     * @returns {ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item]: ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item[_K];
            }
        >
    ): ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item {
        return new ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item(
            _o.presentation_context_identifier,
            _o.presentation_data_values
        );
    }
}
/**
 * @summary The Leading Root Component Types of ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "presentation-context-identifier",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "presentation-data-values",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ComponentSpec[] = [];
let _cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ASN1Decoder<
    ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item
> | null = null;
let _cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ASN1Encoder<
    ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item} The decoded data structure.
 */
export function _decode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item(
    el: _Element
) {
    if (
        !_cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item
    ) {
        _cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item = function (
            el: _Element
        ): ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "ARU-PPDU-normal-mode-parameters-user-data-fully-encoded-data-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "presentation-context-identifier";
            sequence[1].name = "presentation-data-values";
            let presentation_context_identifier!: Presentation_context_identifier;
            let presentation_data_values!: ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values;
            presentation_context_identifier = _decode_Presentation_context_identifier(
                sequence[0]
            );
            presentation_data_values = _decode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
                sequence[1]
            );
            return new ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item(
                presentation_context_identifier,
                presentation_data_values
            );
        };
    }
    return _cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item(
        el
    );
}
/**
 * @summary Encodes a(n) ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item, encoded as an ASN.1 Element.
 */
export function _encode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item(
    value: ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item,
    elGetter: $.ASN1Encoder<
        ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item
    >
) {
    if (
        !_cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item
    ) {
        _cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item = function (
            value: ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item,
            elGetter: $.ASN1Encoder<
                ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item
            >
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Presentation_context_identifier(
                            value.presentation_context_identifier,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
                            value.presentation_data_values,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item(
        value,
        elGetter
    );
}

/**
 * @summary ARU_PPDU_normal_mode_parameters_user_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ARU-PPDU-normal-mode-parameters-user-data ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ARU_PPDU_normal_mode_parameters_user_data = {
    fully_encoded_data: ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item[];
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data: $.ASN1Decoder<
    ARU_PPDU_normal_mode_parameters_user_data
> | null = null;
let _cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data: $.ASN1Encoder<
    ARU_PPDU_normal_mode_parameters_user_data
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ARU_PPDU_normal_mode_parameters_user_data
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ARU_PPDU_normal_mode_parameters_user_data} The decoded data structure.
 */
export function _decode_ARU_PPDU_normal_mode_parameters_user_data(
    el: _Element
) {
    if (!_cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data) {
        _cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data = $._decode_inextensible_choice<
            ARU_PPDU_normal_mode_parameters_user_data
        >({
            "APPLICATION 1": [
                "fully_encoded_data",
                $._decode_explicit<
                    ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item[]
                >(() =>
                    $._decodeSequenceOf<
                        ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item
                    >(
                        () =>
                            _decode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item
                    )
                ),
            ],
        });
    }
    return _cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data(el);
}
/**
 * @summary Encodes a(n) ARU_PPDU_normal_mode_parameters_user_data into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ARU_PPDU_normal_mode_parameters_user_data, encoded as an ASN.1 Element.
 */
export function _encode_ARU_PPDU_normal_mode_parameters_user_data(
    value: ARU_PPDU_normal_mode_parameters_user_data,
    elGetter: $.ASN1Encoder<ARU_PPDU_normal_mode_parameters_user_data>
) {
    if (!_cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data) {
        _cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data = $._encode_choice<
            ARU_PPDU_normal_mode_parameters_user_data
        >(
            {
                fully_encoded_data: $._encode_explicit(
                    _TagClass.application,
                    1,
                    () =>
                        $._encodeSequenceOf<
                            ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item
                        >(
                            () =>
                                _encode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data(
        value,
        elGetter
    );
}

/**
 * @summary ARU_PPDU_normal_mode_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ARU-PPDU-normal-mode-parameters ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ARU_PPDU_normal_mode_parameters {
    constructor(
        /**
         * @summary `presentation_context_identifier_list`.
         * @public
         * @readonly
         */
        readonly presentation_context_identifier_list: Presentation_context_identifier_list,
        /**
         * @summary `user_data`.
         * @public
         * @readonly
         */
        readonly user_data: ARU_PPDU_normal_mode_parameters_user_data
    ) {}

    /**
     * @summary Restructures an object into a ARU_PPDU_normal_mode_parameters
     * @description
     *
     * This takes an `object` and converts it to a `ARU_PPDU_normal_mode_parameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ARU_PPDU_normal_mode_parameters`.
     * @returns {ARU_PPDU_normal_mode_parameters}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof ARU_PPDU_normal_mode_parameters]: ARU_PPDU_normal_mode_parameters[_K];
            }
        >
    ): ARU_PPDU_normal_mode_parameters {
        return new ARU_PPDU_normal_mode_parameters(
            _o.presentation_context_identifier_list,
            _o.user_data
        );
    }
}
/**
 * @summary The Leading Root Component Types of ARU_PPDU_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ARU_PPDU_normal_mode_parameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "presentation-context-identifier-list",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec("user-data", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of ARU_PPDU_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ARU_PPDU_normal_mode_parameters: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ARU_PPDU_normal_mode_parameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ARU_PPDU_normal_mode_parameters: $.ComponentSpec[] = [];
let _cached_decoder_for_ARU_PPDU_normal_mode_parameters: $.ASN1Decoder<
    ARU_PPDU_normal_mode_parameters
> | null = null;
let _cached_encoder_for_ARU_PPDU_normal_mode_parameters: $.ASN1Encoder<
    ARU_PPDU_normal_mode_parameters
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ARU_PPDU_normal_mode_parameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ARU_PPDU_normal_mode_parameters} The decoded data structure.
 */
export function _decode_ARU_PPDU_normal_mode_parameters(el: _Element) {
    if (!_cached_decoder_for_ARU_PPDU_normal_mode_parameters) {
        _cached_decoder_for_ARU_PPDU_normal_mode_parameters = function (
            el: _Element
        ): ARU_PPDU_normal_mode_parameters {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "ARU-PPDU-normal-mode-parameters contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "presentation-context-identifier-list";
            sequence[1].name = "user-data";
            let presentation_context_identifier_list!: Presentation_context_identifier_list;
            let user_data!: ARU_PPDU_normal_mode_parameters_user_data;
            presentation_context_identifier_list = $._decode_explicit<
                Presentation_context_identifier_list
            >(() => _decode_Presentation_context_identifier_list)(sequence[0]);
            user_data = _decode_ARU_PPDU_normal_mode_parameters_user_data(
                sequence[1]
            );
            return new ARU_PPDU_normal_mode_parameters(
                presentation_context_identifier_list,
                user_data
            );
        };
    }
    return _cached_decoder_for_ARU_PPDU_normal_mode_parameters(el);
}
/**
 * @summary Encodes a(n) ARU_PPDU_normal_mode_parameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ARU_PPDU_normal_mode_parameters, encoded as an ASN.1 Element.
 */
export function _encode_ARU_PPDU_normal_mode_parameters(
    value: ARU_PPDU_normal_mode_parameters,
    elGetter: $.ASN1Encoder<ARU_PPDU_normal_mode_parameters>
) {
    if (!_cached_encoder_for_ARU_PPDU_normal_mode_parameters) {
        _cached_encoder_for_ARU_PPDU_normal_mode_parameters = function (
            value: ARU_PPDU_normal_mode_parameters,
            elGetter: $.ASN1Encoder<ARU_PPDU_normal_mode_parameters>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_Presentation_context_identifier_list,
                            $.BER
                        )(value.presentation_context_identifier_list, $.BER),
                        /* REQUIRED   */ _encode_ARU_PPDU_normal_mode_parameters_user_data(
                            value.user_data,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ARU_PPDU_normal_mode_parameters(value, elGetter);
}

/**
 * @summary ARU_PPDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ARU-PPDU  ::=  CHOICE {
 *   normal-mode-parameters     [0] IMPLICIT SEQUENCE {
 *     presentation-context-identifier-list
 *                                     [0] IMPLICIT Presentation-context-identifier-list,
 *     user-data                           CHOICE {
 *       fully-encoded-data [APPLICATION 1]  IMPLICIT SEQUENCE SIZE(1..MAX) OF SEQUENCE {
 *         presentation-context-identifier     Presentation-context-identifier,
 *         presentation-data-values            CHOICE {
 *           single-ASN1-type               [0]  ABSTRACT-SYNTAX.&Type(ABRT-apdu)}}}}}
 * ```
 */
export type ARU_PPDU = {
    normal_mode_parameters: ARU_PPDU_normal_mode_parameters;
} /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_ARU_PPDU: $.ASN1Decoder<ARU_PPDU> | null = null;
let _cached_encoder_for_ARU_PPDU: $.ASN1Encoder<ARU_PPDU> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ARU_PPDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ARU_PPDU} The decoded data structure.
 */
export function _decode_ARU_PPDU(el: _Element) {
    if (!_cached_decoder_for_ARU_PPDU) {
        _cached_decoder_for_ARU_PPDU = $._decode_inextensible_choice<ARU_PPDU>({
            "CONTEXT 0": [
                "normal_mode_parameters",
                $._decode_explicit<ARU_PPDU_normal_mode_parameters>(
                    () => _decode_ARU_PPDU_normal_mode_parameters
                ),
            ],
        });
    }
    return _cached_decoder_for_ARU_PPDU(el);
}
/**
 * @summary Encodes a(n) ARU_PPDU into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ARU_PPDU, encoded as an ASN.1 Element.
 */
export function _encode_ARU_PPDU(
    value: ARU_PPDU,
    elGetter: $.ASN1Encoder<ARU_PPDU>
) {
    if (!_cached_encoder_for_ARU_PPDU) {
        _cached_encoder_for_ARU_PPDU = $._encode_choice<ARU_PPDU>(
            {
                normal_mode_parameters: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_ARU_PPDU_normal_mode_parameters,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ARU_PPDU(value, elGetter);
}

/**
 * @summary Abort_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Abort-reason  ::=  INTEGER {
 *   reason-not-specified                 (0),
 *   unrecognized-ppdu                    (1),
 *   unexpected-ppdu                      (2),
 *   unexpected-session-service-primitive (3),
 *   unrecognized-ppdu-parameter          (4),
 *   unexpected-ppdu-parameter            (5),
 *   invalid-ppdu-parameter-value         (6)}
 * ```
 */
export type Abort_reason = INTEGER;
/**
 * @summary Abort_reason_reason_not_specified
 * @constant
 * @type {number}
 */
export const Abort_reason_reason_not_specified: Abort_reason = 0; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Abort_reason_unrecognized_ppdu
 * @constant
 * @type {number}
 */
export const Abort_reason_unrecognized_ppdu: Abort_reason = 1; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Abort_reason_unexpected_ppdu
 * @constant
 * @type {number}
 */
export const Abort_reason_unexpected_ppdu: Abort_reason = 2; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Abort_reason_unexpected_session_service_primitive
 * @constant
 * @type {number}
 */
export const Abort_reason_unexpected_session_service_primitive: Abort_reason = 3; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Abort_reason_unrecognized_ppdu_parameter
 * @constant
 * @type {number}
 */
export const Abort_reason_unrecognized_ppdu_parameter: Abort_reason = 4; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Abort_reason_unexpected_ppdu_parameter
 * @constant
 * @type {number}
 */
export const Abort_reason_unexpected_ppdu_parameter: Abort_reason = 5; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Abort_reason_invalid_ppdu_parameter_value
 * @constant
 * @type {number}
 */
export const Abort_reason_invalid_ppdu_parameter_value: Abort_reason = 6; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_Abort_reason: $.ASN1Decoder<Abort_reason> | null = null;
let _cached_encoder_for_Abort_reason: $.ASN1Encoder<Abort_reason> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Abort_reason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Abort_reason} The decoded data structure.
 */
export function _decode_Abort_reason(el: _Element) {
    if (!_cached_decoder_for_Abort_reason) {
        _cached_decoder_for_Abort_reason = $._decodeInteger;
    }
    return _cached_decoder_for_Abort_reason(el);
}
/**
 * @summary Encodes a(n) Abort_reason into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Abort_reason, encoded as an ASN.1 Element.
 */
export function _encode_Abort_reason(
    value: Abort_reason,
    elGetter: $.ASN1Encoder<Abort_reason>
) {
    if (!_cached_encoder_for_Abort_reason) {
        _cached_encoder_for_Abort_reason = $._encodeInteger;
    }
    return _cached_encoder_for_Abort_reason(value, elGetter);
}

/**
 * @summary Event_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Event-identifier  ::=  INTEGER {
 *   cp-PPDU              (0),
 *   cpa-PPDU             (1),
 *   cpr-PPDU             (2),
 *   aru-PPDU             (3),
 *   arp-PPDU             (4),
 *   td-PPDU              (7),
 *   s-release-indication (14),
 *   s-release-confirm    (15) }
 * ```
 */
export type Event_identifier = INTEGER;
/**
 * @summary Event_identifier_cp_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_cp_PPDU: Event_identifier = 0; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Event_identifier_cpa_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_cpa_PPDU: Event_identifier = 1; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Event_identifier_cpr_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_cpr_PPDU: Event_identifier = 2; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Event_identifier_aru_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_aru_PPDU: Event_identifier = 3; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Event_identifier_arp_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_arp_PPDU: Event_identifier = 4; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Event_identifier_td_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_td_PPDU: Event_identifier = 7; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Event_identifier_s_release_indication
 * @constant
 * @type {number}
 */
export const Event_identifier_s_release_indication: Event_identifier = 14; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary Event_identifier_s_release_confirm
 * @constant
 * @type {number}
 */
export const Event_identifier_s_release_confirm: Event_identifier = 15; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_Event_identifier: $.ASN1Decoder<
    Event_identifier
> | null = null;
let _cached_encoder_for_Event_identifier: $.ASN1Encoder<
    Event_identifier
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Event_identifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Event_identifier} The decoded data structure.
 */
export function _decode_Event_identifier(el: _Element) {
    if (!_cached_decoder_for_Event_identifier) {
        _cached_decoder_for_Event_identifier = $._decodeInteger;
    }
    return _cached_decoder_for_Event_identifier(el);
}
/**
 * @summary Encodes a(n) Event_identifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Event_identifier, encoded as an ASN.1 Element.
 */
export function _encode_Event_identifier(
    value: Event_identifier,
    elGetter: $.ASN1Encoder<Event_identifier>
) {
    if (!_cached_encoder_for_Event_identifier) {
        _cached_encoder_for_Event_identifier = $._encodeInteger;
    }
    return _cached_encoder_for_Event_identifier(value, elGetter);
}

/**
 * @summary ARP_PPDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ARP-PPDU ::= SEQUENCE {
 *   provider-reason   [0] IMPLICIT Abort-reason OPTIONAL,
 *   event-identifier  [1] IMPLICIT Event-identifier OPTIONAL }
 * ```
 *
 * @class
 */
export class ARP_PPDU {
    constructor(
        /**
         * @summary `provider_reason`.
         * @public
         * @readonly
         */
        readonly provider_reason: OPTIONAL<Abort_reason>,
        /**
         * @summary `event_identifier`.
         * @public
         * @readonly
         */
        readonly event_identifier: OPTIONAL<Event_identifier>
    ) {}

    /**
     * @summary Restructures an object into a ARP_PPDU
     * @description
     *
     * This takes an `object` and converts it to a `ARP_PPDU`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ARP_PPDU`.
     * @returns {ARP_PPDU}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ARP_PPDU]: ARP_PPDU[_K] }>
    ): ARP_PPDU {
        return new ARP_PPDU(_o.provider_reason, _o.event_identifier);
    }
}
/**
 * @summary The Leading Root Component Types of ARP_PPDU
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ARP_PPDU: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "provider-reason",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "event-identifier",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ARP_PPDU
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ARP_PPDU: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ARP_PPDU
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ARP_PPDU: $.ComponentSpec[] = [];
let _cached_decoder_for_ARP_PPDU: $.ASN1Decoder<ARP_PPDU> | null = null;
let _cached_encoder_for_ARP_PPDU: $.ASN1Encoder<ARP_PPDU> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ARP_PPDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ARP_PPDU} The decoded data structure.
 */
export function _decode_ARP_PPDU(el: _Element) {
    if (!_cached_decoder_for_ARP_PPDU) {
        _cached_decoder_for_ARP_PPDU = function (el: _Element): ARP_PPDU {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let provider_reason: OPTIONAL<Abort_reason>;
            let event_identifier: OPTIONAL<Event_identifier>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "provider-reason": (_el: _Element): void => {
                    provider_reason = $._decode_explicit<Abort_reason>(
                        () => _decode_Abort_reason
                    )(_el);
                },
                "event-identifier": (_el: _Element): void => {
                    event_identifier = $._decode_explicit<Event_identifier>(
                        () => _decode_Event_identifier
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ARP_PPDU,
                _extension_additions_list_spec_for_ARP_PPDU,
                _root_component_type_list_2_spec_for_ARP_PPDU,
                undefined
            );
            return new ARP_PPDU(
                /* SEQUENCE_CONSTRUCTOR_CALL */ provider_reason,
                event_identifier
            );
        };
    }
    return _cached_decoder_for_ARP_PPDU(el);
}
/**
 * @summary Encodes a(n) ARP_PPDU into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ARP_PPDU, encoded as an ASN.1 Element.
 */
export function _encode_ARP_PPDU(
    value: ARP_PPDU,
    elGetter: $.ASN1Encoder<ARP_PPDU>
) {
    if (!_cached_encoder_for_ARP_PPDU) {
        _cached_encoder_for_ARP_PPDU = function (
            value: ARP_PPDU,
            elGetter: $.ASN1Encoder<ARP_PPDU>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.provider_reason === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Abort_reason,
                                  $.BER
                              )(value.provider_reason, $.BER),
                        /* IF_ABSENT  */ value.event_identifier === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Event_identifier,
                                  $.BER
                              )(value.event_identifier, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ARP_PPDU(value, elGetter);
}

/**
 * @summary PresentationAbort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PresentationAbort  ::=  CHOICE {
 *   aru-ppdu  ARU-PPDU,
 *   arp-ppdu  ARP-PPDU }
 * ```
 */
export type PresentationAbort =
    | { aru_ppdu: ARU_PPDU } /* CHOICE_ALT_ROOT */
    | { arp_ppdu: ARP_PPDU } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_PresentationAbort: $.ASN1Decoder<
    PresentationAbort
> | null = null;
let _cached_encoder_for_PresentationAbort: $.ASN1Encoder<
    PresentationAbort
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PresentationAbort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PresentationAbort} The decoded data structure.
 */
export function _decode_PresentationAbort(el: _Element) {
    if (!_cached_decoder_for_PresentationAbort) {
        _cached_decoder_for_PresentationAbort = $._decode_inextensible_choice<
            PresentationAbort
        >({
            "CONTEXT 0": ["aru_ppdu", _decode_ARU_PPDU],
            "UNIVERSAL 16": ["arp_ppdu", _decode_ARP_PPDU],
        });
    }
    return _cached_decoder_for_PresentationAbort(el);
}
/**
 * @summary Encodes a(n) PresentationAbort into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PresentationAbort, encoded as an ASN.1 Element.
 */
export function _encode_PresentationAbort(
    value: PresentationAbort,
    elGetter: $.ASN1Encoder<PresentationAbort>
) {
    if (!_cached_encoder_for_PresentationAbort) {
        _cached_encoder_for_PresentationAbort = $._encode_choice<
            PresentationAbort
        >(
            {
                aru_ppdu: _encode_ARU_PPDU,
                arp_ppdu: _encode_ARP_PPDU,
            },
            $.BER
        );
    }
    return _cached_encoder_for_PresentationAbort(value, elGetter);
}

/**
 * @summary ABRT_source
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ABRT-source  ::=  INTEGER {
 *   acse-service-user     (0),
 *   acse-service-provider (1) }
 * ```
 */
export type ABRT_source = INTEGER;
/**
 * @summary ABRT_source_acse_service_user
 * @constant
 * @type {number}
 */
export const ABRT_source_acse_service_user: ABRT_source = 0; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary ABRT_source_acse_service_provider
 * @constant
 * @type {number}
 */
export const ABRT_source_acse_service_provider: ABRT_source = 1; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_ABRT_source: $.ASN1Decoder<ABRT_source> | null = null;
let _cached_encoder_for_ABRT_source: $.ASN1Encoder<ABRT_source> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ABRT_source
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ABRT_source} The decoded data structure.
 */
export function _decode_ABRT_source(el: _Element) {
    if (!_cached_decoder_for_ABRT_source) {
        _cached_decoder_for_ABRT_source = $._decodeInteger;
    }
    return _cached_decoder_for_ABRT_source(el);
}
/**
 * @summary Encodes a(n) ABRT_source into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ABRT_source, encoded as an ASN.1 Element.
 */
export function _encode_ABRT_source(
    value: ABRT_source,
    elGetter: $.ASN1Encoder<ABRT_source>
) {
    if (!_cached_encoder_for_ABRT_source) {
        _cached_encoder_for_ABRT_source = $._encodeInteger;
    }
    return _cached_encoder_for_ABRT_source(value, elGetter);
}

/**
 * @summary ABRT_apdu
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ABRT-apdu ::= [APPLICATION 4] IMPLICIT SEQUENCE {
 *   abort-source  [0] IMPLICIT ABRT-source }
 * ```
 *
 * @class
 */
export class ABRT_apdu {
    constructor(
        /**
         * @summary `abort_source`.
         * @public
         * @readonly
         */
        readonly abort_source: ABRT_source
    ) {}

    /**
     * @summary Restructures an object into a ABRT_apdu
     * @description
     *
     * This takes an `object` and converts it to a `ABRT_apdu`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ABRT_apdu`.
     * @returns {ABRT_apdu}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ABRT_apdu]: ABRT_apdu[_K] }>
    ): ABRT_apdu {
        return new ABRT_apdu(_o.abort_source);
    }
}
/**
 * @summary The Leading Root Component Types of ABRT_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ABRT_apdu: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "abort-source",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ABRT_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ABRT_apdu: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ABRT_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ABRT_apdu: $.ComponentSpec[] = [];
let _cached_decoder_for_ABRT_apdu: $.ASN1Decoder<ABRT_apdu> | null = null;
let _cached_encoder_for_ABRT_apdu: $.ASN1Encoder<ABRT_apdu> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ABRT_apdu
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ABRT_apdu} The decoded data structure.
 */
export function _decode_ABRT_apdu(el: _Element) {
    if (!_cached_decoder_for_ABRT_apdu) {
        _cached_decoder_for_ABRT_apdu = $._decode_explicit<ABRT_apdu>(
            () =>
                function (el: _Element): ABRT_apdu {
                    const sequence: _Element[] = el.sequence;
                    if (sequence.length < 1) {
                        throw new _ConstructionError(
                            "ABRT-apdu contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
                    }
                    sequence[0].name = "abort-source";
                    let abort_source!: ABRT_source;
                    abort_source = $._decode_explicit<ABRT_source>(
                        () => _decode_ABRT_source
                    )(sequence[0]);
                    return new ABRT_apdu(abort_source);
                }
        );
    }
    return _cached_decoder_for_ABRT_apdu(el);
}
/**
 * @summary Encodes a(n) ABRT_apdu into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ABRT_apdu, encoded as an ASN.1 Element.
 */
export function _encode_ABRT_apdu(
    value: ABRT_apdu,
    elGetter: $.ASN1Encoder<ABRT_apdu>
) {
    if (!_cached_encoder_for_ABRT_apdu) {
        _cached_encoder_for_ABRT_apdu = $._encode_explicit(
            _TagClass.application,
            4,
            () =>
                function (
                    value: ABRT_apdu,
                    elGetter: $.ASN1Encoder<ABRT_apdu>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ $._encode_explicit(
                                    _TagClass.context,
                                    0,
                                    () => _encode_ABRT_source,
                                    $.BER
                                )(value.abort_source, $.BER),
                            ])
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_ABRT_apdu(value, elGetter);
}

/* END_MODULE OSIProtocolSpecification */
/* eslint-enable */
