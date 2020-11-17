/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CASP_CertStatusCode,
    _decode_CASP_CertStatusCode,
    _encode_CASP_CertStatusCode,
    _enum_for_CASP_CertStatusCode,
} from "../PkiPMIProtocolSpecifications/CASP-CertStatusCode.ta";
export {
    CASP_CertStatusCode,
    CASP_CertStatusCode_noReason /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CASP_CertStatusCode_unknownCert /* IMPORTED_LONG_ENUMERATION_ITEM */,
    noReason /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unknownCert /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_CASP_CertStatusCode,
    _encode_CASP_CertStatusCode,
    _enum_for_CASP_CertStatusCode,
} from "../PkiPMIProtocolSpecifications/CASP-CertStatusCode.ta";

/* START_OF_SYMBOL_DEFINITION CertUpdateOK_Item_not_ok */
/**
 * @summary CertUpdateOK_Item_not_ok
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUpdateOK-Item-not-ok ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CertUpdateOK_Item_not_ok {
    constructor(
        /**
         * @summary `status`.
         * @public
         * @readonly
         */
        readonly status: CASP_CertStatusCode,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUpdateOK_Item_not_ok
     * @description
     *
     * This takes an `object` and converts it to a `CertUpdateOK_Item_not_ok`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUpdateOK_Item_not_ok`.
     * @returns {CertUpdateOK_Item_not_ok}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertUpdateOK_Item_not_ok]: CertUpdateOK_Item_not_ok[_K];
            }
        >
    ): CertUpdateOK_Item_not_ok {
        return new CertUpdateOK_Item_not_ok(
            _o.status,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `status`
     * @public
     * @static
     */

    public static _enum_for_status = _enum_for_CASP_CertStatusCode;
}
/* END_OF_SYMBOL_DEFINITION CertUpdateOK_Item_not_ok */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertUpdateOK_Item_not_ok */
/**
 * @summary The Leading Root Component Types of CertUpdateOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUpdateOK_Item_not_ok: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "status",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertUpdateOK_Item_not_ok */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertUpdateOK_Item_not_ok */
/**
 * @summary The Trailing Root Component Types of CertUpdateOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUpdateOK_Item_not_ok: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertUpdateOK_Item_not_ok */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertUpdateOK_Item_not_ok */
/**
 * @summary The Extension Addition Component Types of CertUpdateOK_Item_not_ok
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUpdateOK_Item_not_ok: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertUpdateOK_Item_not_ok */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertUpdateOK_Item_not_ok */
let _cached_decoder_for_CertUpdateOK_Item_not_ok: $.ASN1Decoder<
    CertUpdateOK_Item_not_ok
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertUpdateOK_Item_not_ok */

/* START_OF_SYMBOL_DEFINITION _decode_CertUpdateOK_Item_not_ok */
/**
 * @summary Decodes an ASN.1 element into a(n) CertUpdateOK_Item_not_ok
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUpdateOK_Item_not_ok} The decoded data structure.
 */
export function _decode_CertUpdateOK_Item_not_ok(el: _Element) {
    if (!_cached_decoder_for_CertUpdateOK_Item_not_ok) {
        _cached_decoder_for_CertUpdateOK_Item_not_ok = function (
            el: _Element
        ): CertUpdateOK_Item_not_ok {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CertUpdateOK-Item-not-ok contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "status";
            let status!: CASP_CertStatusCode;
            status = _decode_CASP_CertStatusCode(sequence[0]);
            return new CertUpdateOK_Item_not_ok(status, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertUpdateOK_Item_not_ok(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertUpdateOK_Item_not_ok */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertUpdateOK_Item_not_ok */
let _cached_encoder_for_CertUpdateOK_Item_not_ok: $.ASN1Encoder<
    CertUpdateOK_Item_not_ok
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertUpdateOK_Item_not_ok */

/* START_OF_SYMBOL_DEFINITION _encode_CertUpdateOK_Item_not_ok */
/**
 * @summary Encodes a(n) CertUpdateOK_Item_not_ok into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUpdateOK_Item_not_ok, encoded as an ASN.1 Element.
 */
export function _encode_CertUpdateOK_Item_not_ok(
    value: CertUpdateOK_Item_not_ok,
    elGetter: $.ASN1Encoder<CertUpdateOK_Item_not_ok>
) {
    if (!_cached_encoder_for_CertUpdateOK_Item_not_ok) {
        _cached_encoder_for_CertUpdateOK_Item_not_ok = function (
            value: CertUpdateOK_Item_not_ok,
            elGetter: $.ASN1Encoder<CertUpdateOK_Item_not_ok>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CASP_CertStatusCode(
                                value.status,
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
    return _cached_encoder_for_CertUpdateOK_Item_not_ok(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertUpdateOK_Item_not_ok */

/* eslint-enable */
