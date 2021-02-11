/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AttCertIssuer,
    _decode_AttCertIssuer,
    _encode_AttCertIssuer,
} from "../AttributeCertificateDefinitions/AttCertIssuer.ta";
import {
    Holder,
    _decode_Holder,
    _encode_Holder,
} from "../AttributeCertificateDefinitions/Holder.ta";
export {
    AttCertIssuer,
    _decode_AttCertIssuer,
    _encode_AttCertIssuer,
} from "../AttributeCertificateDefinitions/AttCertIssuer.ta";
export {
    Holder,
    _decode_Holder,
    _encode_Holder,
} from "../AttributeCertificateDefinitions/Holder.ta";

/* START_OF_SYMBOL_DEFINITION DelMatchSyntax */
/**
 * @summary DelMatchSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DelMatchSyntax ::= SEQUENCE {
 *   firstIssuer  AttCertIssuer,
 *   lastHolder   Holder,
 *   ... }
 * ```
 *
 * @class
 */
export class DelMatchSyntax {
    constructor(
        /**
         * @summary `firstIssuer`.
         * @public
         * @readonly
         */
        readonly firstIssuer: AttCertIssuer,
        /**
         * @summary `lastHolder`.
         * @public
         * @readonly
         */
        readonly lastHolder: Holder,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DelMatchSyntax
     * @description
     *
     * This takes an `object` and converts it to a `DelMatchSyntax`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DelMatchSyntax`.
     * @returns {DelMatchSyntax}
     */
    public static _from_object(
        _o: { [_K in keyof DelMatchSyntax]: DelMatchSyntax[_K] }
    ): DelMatchSyntax {
        return new DelMatchSyntax(
            _o.firstIssuer,
            _o.lastHolder,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION DelMatchSyntax */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DelMatchSyntax */
/**
 * @summary The Leading Root Component Types of DelMatchSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DelMatchSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "firstIssuer",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "lastHolder",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DelMatchSyntax */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DelMatchSyntax */
/**
 * @summary The Trailing Root Component Types of DelMatchSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DelMatchSyntax: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DelMatchSyntax */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DelMatchSyntax */
/**
 * @summary The Extension Addition Component Types of DelMatchSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DelMatchSyntax: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DelMatchSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DelMatchSyntax */
let _cached_decoder_for_DelMatchSyntax: $.ASN1Decoder<DelMatchSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DelMatchSyntax */

/* START_OF_SYMBOL_DEFINITION _decode_DelMatchSyntax */
/**
 * @summary Decodes an ASN.1 element into a(n) DelMatchSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DelMatchSyntax} The decoded data structure.
 */
export function _decode_DelMatchSyntax(el: _Element) {
    if (!_cached_decoder_for_DelMatchSyntax) {
        _cached_decoder_for_DelMatchSyntax = function (
            el: _Element
        ): DelMatchSyntax {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "DelMatchSyntax contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "firstIssuer";
            sequence[1].name = "lastHolder";
            let firstIssuer!: AttCertIssuer;
            let lastHolder!: Holder;
            firstIssuer = _decode_AttCertIssuer(sequence[0]);
            lastHolder = _decode_Holder(sequence[1]);
            return new DelMatchSyntax(
                firstIssuer,
                lastHolder,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_DelMatchSyntax(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DelMatchSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DelMatchSyntax */
let _cached_encoder_for_DelMatchSyntax: $.ASN1Encoder<DelMatchSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DelMatchSyntax */

/* START_OF_SYMBOL_DEFINITION _encode_DelMatchSyntax */
/**
 * @summary Encodes a(n) DelMatchSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DelMatchSyntax, encoded as an ASN.1 Element.
 */
export function _encode_DelMatchSyntax(
    value: DelMatchSyntax,
    elGetter: $.ASN1Encoder<DelMatchSyntax>
) {
    if (!_cached_encoder_for_DelMatchSyntax) {
        _cached_encoder_for_DelMatchSyntax = function (
            value: DelMatchSyntax,
            elGetter: $.ASN1Encoder<DelMatchSyntax>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AttCertIssuer(
                                value.firstIssuer,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_Holder(
                                value.lastHolder,
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
    return _cached_encoder_for_DelMatchSyntax(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DelMatchSyntax */

/* eslint-enable */
