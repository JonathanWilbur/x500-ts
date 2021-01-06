/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertSubscribeReq_certs_Item,
    _decode_CertSubscribeReq_certs_Item,
    _encode_CertSubscribeReq_certs_Item,
} from "../CaSubscription/CertSubscribeReq-certs-Item.ta";
import {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../CaSubscription/InvokeID.ta";
export {
    CertSubscribeReq_certs_Item,
    _decode_CertSubscribeReq_certs_Item,
    _encode_CertSubscribeReq_certs_Item,
} from "../CaSubscription/CertSubscribeReq-certs-Item.ta";
export {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../CaSubscription/InvokeID.ta";

/* START_OF_SYMBOL_DEFINITION CertSubscribeReq */
/**
 * @summary CertSubscribeReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeReq ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   certs        SEQUENCE (SIZE (1..MAX)) OF SEQUENCE {
 *     subject      Name,
 *     serialNumber CertificateSerialNumber,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class CertSubscribeReq {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: InvokeID,
        /**
         * @summary `certs`.
         * @public
         * @readonly
         */
        readonly certs: CertSubscribeReq_certs_Item[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertSubscribeReq
     * @description
     *
     * This takes an `object` and converts it to a `CertSubscribeReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertSubscribeReq`.
     * @returns {CertSubscribeReq}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertSubscribeReq]: CertSubscribeReq[_K] }>
    ): CertSubscribeReq {
        return new CertSubscribeReq(
            _o.invokeID,
            _o.certs,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CertSubscribeReq */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertSubscribeReq */
/**
 * @summary The Leading Root Component Types of CertSubscribeReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertSubscribeReq: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certs",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertSubscribeReq */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertSubscribeReq */
/**
 * @summary The Trailing Root Component Types of CertSubscribeReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertSubscribeReq: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertSubscribeReq */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertSubscribeReq */
/**
 * @summary The Extension Addition Component Types of CertSubscribeReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertSubscribeReq: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertSubscribeReq */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertSubscribeReq */
let _cached_decoder_for_CertSubscribeReq: $.ASN1Decoder<CertSubscribeReq> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertSubscribeReq */

/* START_OF_SYMBOL_DEFINITION _decode_CertSubscribeReq */
/**
 * @summary Decodes an ASN.1 element into a(n) CertSubscribeReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertSubscribeReq} The decoded data structure.
 */
export function _decode_CertSubscribeReq(el: _Element) {
    if (!_cached_decoder_for_CertSubscribeReq) {
        _cached_decoder_for_CertSubscribeReq = function (
            el: _Element
        ): CertSubscribeReq {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertSubscribeReq contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "certs";
            let invokeID!: InvokeID;
            let certs!: CertSubscribeReq_certs_Item[];
            invokeID = _decode_InvokeID(sequence[0]);
            certs = $._decodeSequenceOf<CertSubscribeReq_certs_Item>(
                () => _decode_CertSubscribeReq_certs_Item
            )(sequence[1]);
            return new CertSubscribeReq(invokeID, certs, sequence.slice(2));
        };
    }
    return _cached_decoder_for_CertSubscribeReq(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertSubscribeReq */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertSubscribeReq */
let _cached_encoder_for_CertSubscribeReq: $.ASN1Encoder<CertSubscribeReq> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertSubscribeReq */

/* START_OF_SYMBOL_DEFINITION _encode_CertSubscribeReq */
/**
 * @summary Encodes a(n) CertSubscribeReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertSubscribeReq, encoded as an ASN.1 Element.
 */
export function _encode_CertSubscribeReq(
    value: CertSubscribeReq,
    elGetter: $.ASN1Encoder<CertSubscribeReq>
) {
    if (!_cached_encoder_for_CertSubscribeReq) {
        _cached_encoder_for_CertSubscribeReq = function (
            value: CertSubscribeReq,
            elGetter: $.ASN1Encoder<CertSubscribeReq>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSequenceOf<CertSubscribeReq_certs_Item>(
                                () => _encode_CertSubscribeReq_certs_Item,
                                $.BER
                            )(value.certs, $.BER),
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
    return _cached_encoder_for_CertSubscribeReq(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertSubscribeReq */

/* eslint-enable */
