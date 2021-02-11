/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from "../AuthenticationFramework/CertificateSerialNumber.ta";
import {
    Extensions,
    _decode_Extensions,
    _encode_Extensions,
} from "../AuthenticationFramework/Extensions.ta";
import {
    Time,
    _decode_Time,
    _encode_Time,
} from "../AuthenticationFramework/Time.ta";
export {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from "../AuthenticationFramework/CertificateSerialNumber.ta";
export {
    Extensions,
    _decode_Extensions,
    _encode_Extensions,
} from "../AuthenticationFramework/Extensions.ta";
export {
    Time,
    _decode_Time,
    _encode_Time,
} from "../AuthenticationFramework/Time.ta";

/* START_OF_SYMBOL_DEFINITION CertificateListContent_revokedCertificates_Item */
/**
 * @summary CertificateListContent_revokedCertificates_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateListContent-revokedCertificates-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CertificateListContent_revokedCertificates_Item {
    constructor(
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary `revocationDate`.
         * @public
         * @readonly
         */
        readonly revocationDate: Time,
        /**
         * @summary `crlEntryExtensions`.
         * @public
         * @readonly
         */
        readonly crlEntryExtensions: OPTIONAL<Extensions>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertificateListContent_revokedCertificates_Item
     * @description
     *
     * This takes an `object` and converts it to a `CertificateListContent_revokedCertificates_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificateListContent_revokedCertificates_Item`.
     * @returns {CertificateListContent_revokedCertificates_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertificateListContent_revokedCertificates_Item]: CertificateListContent_revokedCertificates_Item[_K];
            }
        >
    ): CertificateListContent_revokedCertificates_Item {
        return new CertificateListContent_revokedCertificates_Item(
            _o.serialNumber,
            _o.revocationDate,
            _o.crlEntryExtensions,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CertificateListContent_revokedCertificates_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertificateListContent_revokedCertificates_Item */
/**
 * @summary The Leading Root Component Types of CertificateListContent_revokedCertificates_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificateListContent_revokedCertificates_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "revocationDate",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "crlEntryExtensions",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertificateListContent_revokedCertificates_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertificateListContent_revokedCertificates_Item */
/**
 * @summary The Trailing Root Component Types of CertificateListContent_revokedCertificates_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificateListContent_revokedCertificates_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertificateListContent_revokedCertificates_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertificateListContent_revokedCertificates_Item */
/**
 * @summary The Extension Addition Component Types of CertificateListContent_revokedCertificates_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificateListContent_revokedCertificates_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertificateListContent_revokedCertificates_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateListContent_revokedCertificates_Item */
let _cached_decoder_for_CertificateListContent_revokedCertificates_Item: $.ASN1Decoder<CertificateListContent_revokedCertificates_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateListContent_revokedCertificates_Item */

/* START_OF_SYMBOL_DEFINITION _decode_CertificateListContent_revokedCertificates_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) CertificateListContent_revokedCertificates_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateListContent_revokedCertificates_Item} The decoded data structure.
 */
export function _decode_CertificateListContent_revokedCertificates_Item(
    el: _Element
) {
    if (!_cached_decoder_for_CertificateListContent_revokedCertificates_Item) {
        _cached_decoder_for_CertificateListContent_revokedCertificates_Item = function (
            el: _Element
        ): CertificateListContent_revokedCertificates_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let serialNumber!: CertificateSerialNumber;
            let revocationDate!: Time;
            let crlEntryExtensions: OPTIONAL<Extensions>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                serialNumber: (_el: _Element): void => {
                    serialNumber = _decode_CertificateSerialNumber(_el);
                },
                revocationDate: (_el: _Element): void => {
                    revocationDate = _decode_Time(_el);
                },
                crlEntryExtensions: (_el: _Element): void => {
                    crlEntryExtensions = _decode_Extensions(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertificateListContent_revokedCertificates_Item,
                _extension_additions_list_spec_for_CertificateListContent_revokedCertificates_Item,
                _root_component_type_list_2_spec_for_CertificateListContent_revokedCertificates_Item,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertificateListContent_revokedCertificates_Item(
                /* SEQUENCE_CONSTRUCTOR_CALL */ serialNumber,
                revocationDate,
                crlEntryExtensions,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertificateListContent_revokedCertificates_Item(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_CertificateListContent_revokedCertificates_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateListContent_revokedCertificates_Item */
let _cached_encoder_for_CertificateListContent_revokedCertificates_Item: $.ASN1Encoder<CertificateListContent_revokedCertificates_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateListContent_revokedCertificates_Item */

/* START_OF_SYMBOL_DEFINITION _encode_CertificateListContent_revokedCertificates_Item */
/**
 * @summary Encodes a(n) CertificateListContent_revokedCertificates_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateListContent_revokedCertificates_Item, encoded as an ASN.1 Element.
 */
export function _encode_CertificateListContent_revokedCertificates_Item(
    value: CertificateListContent_revokedCertificates_Item,
    elGetter: $.ASN1Encoder<CertificateListContent_revokedCertificates_Item>
) {
    if (!_cached_encoder_for_CertificateListContent_revokedCertificates_Item) {
        _cached_encoder_for_CertificateListContent_revokedCertificates_Item = function (
            value: CertificateListContent_revokedCertificates_Item,
            elGetter: $.ASN1Encoder<CertificateListContent_revokedCertificates_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_Time(
                                value.revocationDate,
                                $.DER
                            ),
                            /* IF_ABSENT  */ value.crlEntryExtensions ===
                            undefined
                                ? undefined
                                : _encode_Extensions(
                                      value.crlEntryExtensions,
                                      $.DER
                                  ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_CertificateListContent_revokedCertificates_Item(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_CertificateListContent_revokedCertificates_Item */

/* eslint-enable */
