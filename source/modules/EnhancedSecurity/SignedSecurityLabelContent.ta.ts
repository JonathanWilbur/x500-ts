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
    KeyIdentifier,
    _decode_KeyIdentifier,
    _encode_KeyIdentifier,
} from "../CertificateExtensions/KeyIdentifier.ta";
import {
    SecurityLabel,
    _decode_SecurityLabel,
    _encode_SecurityLabel,
} from "../EnhancedSecurity/SecurityLabel.ta";
import {
    AttributeTypeAndValue,
    _decode_AttributeTypeAndValue,
    _encode_AttributeTypeAndValue,
} from "../InformationFramework/AttributeTypeAndValue.ta";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";
export {
    HASH,
    _get_decoder_for_HASH,
    _get_encoder_for_HASH,
} from "../AuthenticationFramework/HASH.ta";
export {
    KeyIdentifier,
    _decode_KeyIdentifier,
    _encode_KeyIdentifier,
} from "../CertificateExtensions/KeyIdentifier.ta";
export {
    SecurityLabel,
    _decode_SecurityLabel,
    _encode_SecurityLabel,
} from "../EnhancedSecurity/SecurityLabel.ta";
export {
    AttributeTypeAndValue,
    _decode_AttributeTypeAndValue,
    _encode_AttributeTypeAndValue,
} from "../InformationFramework/AttributeTypeAndValue.ta";
export {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";

/* START_OF_SYMBOL_DEFINITION SignedSecurityLabelContent */
/**
 * @summary SignedSecurityLabelContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedSecurityLabelContent ::= SEQUENCE {
 *   attHash        HASH{AttributeTypeAndValue},
 *   issuer         Name OPTIONAL, -- name of labelling authority
 *   keyIdentifier  KeyIdentifier OPTIONAL,
 *   securityLabel  SecurityLabel,
 *   ... }
 * ```
 *
 * @class
 */
export class SignedSecurityLabelContent {
    constructor(
        /**
         * @summary `attHash`.
         * @public
         * @readonly
         */
        readonly attHash: HASH<AttributeTypeAndValue>,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: OPTIONAL<Name>,
        /**
         * @summary `keyIdentifier`.
         * @public
         * @readonly
         */
        readonly keyIdentifier: OPTIONAL<KeyIdentifier>,
        /**
         * @summary `securityLabel`.
         * @public
         * @readonly
         */
        readonly securityLabel: SecurityLabel,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SignedSecurityLabelContent
     * @description
     *
     * This takes an `object` and converts it to a `SignedSecurityLabelContent`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SignedSecurityLabelContent`.
     * @returns {SignedSecurityLabelContent}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof SignedSecurityLabelContent]: SignedSecurityLabelContent[_K];
            }
        >
    ): SignedSecurityLabelContent {
        return new SignedSecurityLabelContent(
            _o.attHash,
            _o.issuer,
            _o.keyIdentifier,
            _o.securityLabel,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION SignedSecurityLabelContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SignedSecurityLabelContent */
/**
 * @summary The Leading Root Component Types of SignedSecurityLabelContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SignedSecurityLabelContent: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "attHash",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec("issuer", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "keyIdentifier",
        true,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "securityLabel",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SignedSecurityLabelContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SignedSecurityLabelContent */
/**
 * @summary The Trailing Root Component Types of SignedSecurityLabelContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SignedSecurityLabelContent: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SignedSecurityLabelContent */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SignedSecurityLabelContent */
/**
 * @summary The Extension Addition Component Types of SignedSecurityLabelContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SignedSecurityLabelContent: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SignedSecurityLabelContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignedSecurityLabelContent */
let _cached_decoder_for_SignedSecurityLabelContent: $.ASN1Decoder<
    SignedSecurityLabelContent
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignedSecurityLabelContent */

/* START_OF_SYMBOL_DEFINITION _decode_SignedSecurityLabelContent */
/**
 * @summary Decodes an ASN.1 element into a(n) SignedSecurityLabelContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignedSecurityLabelContent} The decoded data structure.
 */
export function _decode_SignedSecurityLabelContent(el: _Element) {
    if (!_cached_decoder_for_SignedSecurityLabelContent) {
        _cached_decoder_for_SignedSecurityLabelContent = function (
            el: _Element
        ): SignedSecurityLabelContent {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let attHash!: HASH<AttributeTypeAndValue>;
            let issuer: OPTIONAL<Name>;
            let keyIdentifier: OPTIONAL<KeyIdentifier>;
            let securityLabel!: SecurityLabel;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                attHash: (_el: _Element): void => {
                    attHash = _get_decoder_for_HASH<AttributeTypeAndValue>(
                        _decode_AttributeTypeAndValue
                    )(_el);
                },
                issuer: (_el: _Element): void => {
                    issuer = _decode_Name(_el);
                },
                keyIdentifier: (_el: _Element): void => {
                    keyIdentifier = _decode_KeyIdentifier(_el);
                },
                securityLabel: (_el: _Element): void => {
                    securityLabel = _decode_SecurityLabel(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SignedSecurityLabelContent,
                _extension_additions_list_spec_for_SignedSecurityLabelContent,
                _root_component_type_list_2_spec_for_SignedSecurityLabelContent,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SignedSecurityLabelContent /* SEQUENCE_CONSTRUCTOR_CALL */(
                attHash,
                issuer,
                keyIdentifier,
                securityLabel,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SignedSecurityLabelContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignedSecurityLabelContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignedSecurityLabelContent */
let _cached_encoder_for_SignedSecurityLabelContent: $.ASN1Encoder<
    SignedSecurityLabelContent
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignedSecurityLabelContent */

/* START_OF_SYMBOL_DEFINITION _encode_SignedSecurityLabelContent */
/**
 * @summary Encodes a(n) SignedSecurityLabelContent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedSecurityLabelContent, encoded as an ASN.1 Element.
 */
export function _encode_SignedSecurityLabelContent(
    value: SignedSecurityLabelContent,
    elGetter: $.ASN1Encoder<SignedSecurityLabelContent>
) {
    if (!_cached_encoder_for_SignedSecurityLabelContent) {
        _cached_encoder_for_SignedSecurityLabelContent = function (
            value: SignedSecurityLabelContent,
            elGetter: $.ASN1Encoder<SignedSecurityLabelContent>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _get_encoder_for_HASH<
                                AttributeTypeAndValue
                            >(_encode_AttributeTypeAndValue)(
                                value.attHash,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.issuer === undefined
                                ? undefined
                                : _encode_Name(value.issuer, $.BER),
                            /* IF_ABSENT  */ value.keyIdentifier === undefined
                                ? undefined
                                : _encode_KeyIdentifier(
                                      value.keyIdentifier,
                                      $.BER
                                  ),
                            /* REQUIRED   */ _encode_SecurityLabel(
                                value.securityLabel,
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
    return _cached_encoder_for_SignedSecurityLabelContent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignedSecurityLabelContent */

/* eslint-enable */
