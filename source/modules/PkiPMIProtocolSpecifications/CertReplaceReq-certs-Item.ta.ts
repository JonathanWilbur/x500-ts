/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "../AuthenticationFramework/Certificate.ta";
import {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from "../AuthenticationFramework/CertificateSerialNumber.ta";
export {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "../AuthenticationFramework/Certificate.ta";
export {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from "../AuthenticationFramework/CertificateSerialNumber.ta";

/* START_OF_SYMBOL_DEFINITION CertReplaceReq_certs_Item */
/**
 * @summary CertReplaceReq_certs_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceReq-certs-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CertReplaceReq_certs_Item {
    constructor(
        /**
         * @summary `old`.
         * @public
         * @readonly
         */
        readonly old: CertificateSerialNumber,
        /**
         * @summary `new_`.
         * @public
         * @readonly
         */
        readonly new_: Certificate,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertReplaceReq_certs_Item
     * @description
     *
     * This takes an `object` and converts it to a `CertReplaceReq_certs_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertReplaceReq_certs_Item`.
     * @returns {CertReplaceReq_certs_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertReplaceReq_certs_Item]: CertReplaceReq_certs_Item[_K];
            }
        >
    ): CertReplaceReq_certs_Item {
        return new CertReplaceReq_certs_Item(
            _o.old,
            _o.new_,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CertReplaceReq_certs_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertReplaceReq_certs_Item */
/**
 * @summary The Leading Root Component Types of CertReplaceReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertReplaceReq_certs_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "old",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "new",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertReplaceReq_certs_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertReplaceReq_certs_Item */
/**
 * @summary The Trailing Root Component Types of CertReplaceReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertReplaceReq_certs_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertReplaceReq_certs_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertReplaceReq_certs_Item */
/**
 * @summary The Extension Addition Component Types of CertReplaceReq_certs_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertReplaceReq_certs_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertReplaceReq_certs_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertReplaceReq_certs_Item */
let _cached_decoder_for_CertReplaceReq_certs_Item: $.ASN1Decoder<
    CertReplaceReq_certs_Item
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertReplaceReq_certs_Item */

/* START_OF_SYMBOL_DEFINITION _decode_CertReplaceReq_certs_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceReq_certs_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceReq_certs_Item} The decoded data structure.
 */
export function _decode_CertReplaceReq_certs_Item(el: _Element) {
    if (!_cached_decoder_for_CertReplaceReq_certs_Item) {
        _cached_decoder_for_CertReplaceReq_certs_Item = function (
            el: _Element
        ): CertReplaceReq_certs_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertReplaceReq-certs-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "old";
            sequence[1].name = "new";
            let old!: CertificateSerialNumber;
            let new_!: Certificate;
            old = _decode_CertificateSerialNumber(sequence[0]);
            new_ = _decode_Certificate(sequence[1]);
            return new CertReplaceReq_certs_Item(old, new_, sequence.slice(2));
        };
    }
    return _cached_decoder_for_CertReplaceReq_certs_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertReplaceReq_certs_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertReplaceReq_certs_Item */
let _cached_encoder_for_CertReplaceReq_certs_Item: $.ASN1Encoder<
    CertReplaceReq_certs_Item
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertReplaceReq_certs_Item */

/* START_OF_SYMBOL_DEFINITION _encode_CertReplaceReq_certs_Item */
/**
 * @summary Encodes a(n) CertReplaceReq_certs_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceReq_certs_Item, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceReq_certs_Item(
    value: CertReplaceReq_certs_Item,
    elGetter: $.ASN1Encoder<CertReplaceReq_certs_Item>
) {
    if (!_cached_encoder_for_CertReplaceReq_certs_Item) {
        _cached_encoder_for_CertReplaceReq_certs_Item = function (
            value: CertReplaceReq_certs_Item,
            elGetter: $.ASN1Encoder<CertReplaceReq_certs_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.old,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_Certificate(
                                value.new_,
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
    return _cached_encoder_for_CertReplaceReq_certs_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertReplaceReq_certs_Item */

/* eslint-enable */
