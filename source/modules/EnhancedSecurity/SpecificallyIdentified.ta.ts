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
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta";
export {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from "../AuthenticationFramework/CertificateSerialNumber.ta";
export {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta";

/* START_OF_SYMBOL_DEFINITION SpecificallyIdentified */
/**
 * @summary SpecificallyIdentified
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SpecificallyIdentified ::= SEQUENCE {
 *   name    GeneralName,
 *   issuer  GeneralName OPTIONAL,
 *   serial  CertificateSerialNumber OPTIONAL }
 *   (WITH COMPONENTS { ..., issuer PRESENT, serial PRESENT } |
 *   (WITH COMPONENTS { ..., issuer ABSENT, serial ABSENT }))
 * ```
 *
 * @class
 */
export class SpecificallyIdentified {
    constructor(
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: GeneralName,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: OPTIONAL<GeneralName>,
        /**
         * @summary `serial`.
         * @public
         * @readonly
         */
        readonly serial: OPTIONAL<CertificateSerialNumber>
    ) {}

    /**
     * @summary Restructures an object into a SpecificallyIdentified
     * @description
     *
     * This takes an `object` and converts it to a `SpecificallyIdentified`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SpecificallyIdentified`.
     * @returns {SpecificallyIdentified}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof SpecificallyIdentified]: SpecificallyIdentified[_K] }
        >
    ): SpecificallyIdentified {
        return new SpecificallyIdentified(_o.name, _o.issuer, _o.serial);
    }
}
/* END_OF_SYMBOL_DEFINITION SpecificallyIdentified */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SpecificallyIdentified */
/**
 * @summary The Leading Root Component Types of SpecificallyIdentified
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SpecificallyIdentified: $.ComponentSpec[] = [
    new $.ComponentSpec("name", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("issuer", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "serial",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SpecificallyIdentified */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SpecificallyIdentified */
/**
 * @summary The Trailing Root Component Types of SpecificallyIdentified
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SpecificallyIdentified: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SpecificallyIdentified */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SpecificallyIdentified */
/**
 * @summary The Extension Addition Component Types of SpecificallyIdentified
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SpecificallyIdentified: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SpecificallyIdentified */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SpecificallyIdentified */
let _cached_decoder_for_SpecificallyIdentified: $.ASN1Decoder<
    SpecificallyIdentified
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SpecificallyIdentified */

/* START_OF_SYMBOL_DEFINITION _decode_SpecificallyIdentified */
/**
 * @summary Decodes an ASN.1 element into a(n) SpecificallyIdentified
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SpecificallyIdentified} The decoded data structure.
 */
export function _decode_SpecificallyIdentified(el: _Element) {
    if (!_cached_decoder_for_SpecificallyIdentified) {
        _cached_decoder_for_SpecificallyIdentified = function (
            el: _Element
        ): SpecificallyIdentified {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let name!: GeneralName;
            let issuer: OPTIONAL<GeneralName>;
            let serial: OPTIONAL<CertificateSerialNumber>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                name: (_el: _Element): void => {
                    name = _decode_GeneralName(_el);
                },
                issuer: (_el: _Element): void => {
                    issuer = _decode_GeneralName(_el);
                },
                serial: (_el: _Element): void => {
                    serial = _decode_CertificateSerialNumber(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SpecificallyIdentified,
                _extension_additions_list_spec_for_SpecificallyIdentified,
                _root_component_type_list_2_spec_for_SpecificallyIdentified,
                undefined
            );
            return new SpecificallyIdentified /* SEQUENCE_CONSTRUCTOR_CALL */(
                name,
                issuer,
                serial
            );
        };
    }
    return _cached_decoder_for_SpecificallyIdentified(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SpecificallyIdentified */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SpecificallyIdentified */
let _cached_encoder_for_SpecificallyIdentified: $.ASN1Encoder<
    SpecificallyIdentified
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SpecificallyIdentified */

/* START_OF_SYMBOL_DEFINITION _encode_SpecificallyIdentified */
/**
 * @summary Encodes a(n) SpecificallyIdentified into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpecificallyIdentified, encoded as an ASN.1 Element.
 */
export function _encode_SpecificallyIdentified(
    value: SpecificallyIdentified,
    elGetter: $.ASN1Encoder<SpecificallyIdentified>
) {
    if (!_cached_encoder_for_SpecificallyIdentified) {
        _cached_encoder_for_SpecificallyIdentified = function (
            value: SpecificallyIdentified,
            elGetter: $.ASN1Encoder<SpecificallyIdentified>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_GeneralName(value.name, $.BER),
                        /* IF_ABSENT  */ value.issuer === undefined
                            ? undefined
                            : _encode_GeneralName(value.issuer, $.BER),
                        /* IF_ABSENT  */ value.serial === undefined
                            ? undefined
                            : _encode_CertificateSerialNumber(
                                  value.serial,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SpecificallyIdentified(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SpecificallyIdentified */

/* eslint-enable */
