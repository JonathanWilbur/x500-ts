/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "../AuthenticationFramework/Certificate.ta";
import {
    CRLReason,
    _decode_CRLReason,
    _encode_CRLReason,
    _enum_for_CRLReason,
} from "../CertificateExtensions/CRLReason.ta";
import {
    CertStatus,
    _decode_CertStatus,
    _encode_CertStatus,
    _enum_for_CertStatus,
} from "../PkiPMIProtocolSpecifications/CertStatus.ta";
export {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "../AuthenticationFramework/Certificate.ta";
export {
    aACompromise /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    affiliationChanged /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    cACompromise /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    certificateHold /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    cessationOfOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CRLReason,
    CRLReason_aACompromise /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_affiliationChanged /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_cACompromise /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_certificateHold /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_cessationOfOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_keyCompromise /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_privilegeWithdrawn /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_removeFromCRL /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_superseded /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_unspecified /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CRLReason_weakAlgorithmOrKey /* IMPORTED_LONG_ENUMERATION_ITEM */,
    keyCompromise /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    privilegeWithdrawn /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    removeFromCRL /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    superseded /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unspecified /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    weakAlgorithmOrKey /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_CRLReason,
    _encode_CRLReason,
    _enum_for_CRLReason,
} from "../CertificateExtensions/CRLReason.ta";
export {
    CertStatus,
    CertStatus_expired /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CertStatus_good /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CertStatus_on_hold /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CertStatus_revoked /* IMPORTED_LONG_ENUMERATION_ITEM */,
    expired /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    good /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    on_hold /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    revoked /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_CertStatus,
    _encode_CertStatus,
    _enum_for_CertStatus,
} from "../PkiPMIProtocolSpecifications/CertStatus.ta";

/* START_OF_SYMBOL_DEFINITION CertSubscribeOK_Item_ok */
/**
 * @summary CertSubscribeOK_Item_ok
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeOK-Item-ok ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CertSubscribeOK_Item_ok {
    constructor(
        /**
         * @summary `cert`.
         * @public
         * @readonly
         */
        readonly cert: Certificate,
        /**
         * @summary `status`.
         * @public
         * @readonly
         */
        readonly status: CertStatus,
        /**
         * @summary `revokeReason`.
         * @public
         * @readonly
         */
        readonly revokeReason: OPTIONAL<CRLReason>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertSubscribeOK_Item_ok
     * @description
     *
     * This takes an `object` and converts it to a `CertSubscribeOK_Item_ok`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertSubscribeOK_Item_ok`.
     * @returns {CertSubscribeOK_Item_ok}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertSubscribeOK_Item_ok]: CertSubscribeOK_Item_ok[_K];
            }
        >
    ): CertSubscribeOK_Item_ok {
        return new CertSubscribeOK_Item_ok(
            _o.cert,
            _o.status,
            _o.revokeReason,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `status`
     * @public
     * @static
     */

    public static _enum_for_status = _enum_for_CertStatus;
    /**
     * @summary The enum used as the type of the component `revokeReason`
     * @public
     * @static
     */

    public static _enum_for_revokeReason = _enum_for_CRLReason;
}
/* END_OF_SYMBOL_DEFINITION CertSubscribeOK_Item_ok */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertSubscribeOK_Item_ok */
/**
 * @summary The Leading Root Component Types of CertSubscribeOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertSubscribeOK_Item_ok: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "cert",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "status",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "revokeReason",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertSubscribeOK_Item_ok */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertSubscribeOK_Item_ok */
/**
 * @summary The Trailing Root Component Types of CertSubscribeOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertSubscribeOK_Item_ok: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertSubscribeOK_Item_ok */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertSubscribeOK_Item_ok */
/**
 * @summary The Extension Addition Component Types of CertSubscribeOK_Item_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertSubscribeOK_Item_ok: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertSubscribeOK_Item_ok */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertSubscribeOK_Item_ok */
let _cached_decoder_for_CertSubscribeOK_Item_ok: $.ASN1Decoder<
    CertSubscribeOK_Item_ok
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertSubscribeOK_Item_ok */

/* START_OF_SYMBOL_DEFINITION _decode_CertSubscribeOK_Item_ok */
/**
 * @summary Decodes an ASN.1 element into a(n) CertSubscribeOK_Item_ok
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertSubscribeOK_Item_ok} The decoded data structure.
 */
export function _decode_CertSubscribeOK_Item_ok(el: _Element) {
    if (!_cached_decoder_for_CertSubscribeOK_Item_ok) {
        _cached_decoder_for_CertSubscribeOK_Item_ok = function (
            el: _Element
        ): CertSubscribeOK_Item_ok {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let cert!: Certificate;
            let status!: CertStatus;
            let revokeReason: OPTIONAL<CRLReason>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                cert: (_el: _Element): void => {
                    cert = _decode_Certificate(_el);
                },
                status: (_el: _Element): void => {
                    status = _decode_CertStatus(_el);
                },
                revokeReason: (_el: _Element): void => {
                    revokeReason = _decode_CRLReason(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertSubscribeOK_Item_ok,
                _extension_additions_list_spec_for_CertSubscribeOK_Item_ok,
                _root_component_type_list_2_spec_for_CertSubscribeOK_Item_ok,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertSubscribeOK_Item_ok /* SEQUENCE_CONSTRUCTOR_CALL */(
                cert,
                status,
                revokeReason,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertSubscribeOK_Item_ok(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertSubscribeOK_Item_ok */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertSubscribeOK_Item_ok */
let _cached_encoder_for_CertSubscribeOK_Item_ok: $.ASN1Encoder<
    CertSubscribeOK_Item_ok
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertSubscribeOK_Item_ok */

/* START_OF_SYMBOL_DEFINITION _encode_CertSubscribeOK_Item_ok */
/**
 * @summary Encodes a(n) CertSubscribeOK_Item_ok into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertSubscribeOK_Item_ok, encoded as an ASN.1 Element.
 */
export function _encode_CertSubscribeOK_Item_ok(
    value: CertSubscribeOK_Item_ok,
    elGetter: $.ASN1Encoder<CertSubscribeOK_Item_ok>
) {
    if (!_cached_encoder_for_CertSubscribeOK_Item_ok) {
        _cached_encoder_for_CertSubscribeOK_Item_ok = function (
            value: CertSubscribeOK_Item_ok,
            elGetter: $.ASN1Encoder<CertSubscribeOK_Item_ok>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Certificate(
                                value.cert,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CertStatus(
                                value.status,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.revokeReason === undefined
                                ? undefined
                                : _encode_CRLReason(value.revokeReason, $.BER),
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
    return _cached_encoder_for_CertSubscribeOK_Item_ok(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertSubscribeOK_Item_ok */

/* eslint-enable */
