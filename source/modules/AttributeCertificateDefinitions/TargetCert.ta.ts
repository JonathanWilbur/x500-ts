/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    IssuerSerial,
    _decode_IssuerSerial,
    _encode_IssuerSerial,
} from "../AttributeCertificateDefinitions/IssuerSerial.ta";
import {
    ObjectDigestInfo,
    _decode_ObjectDigestInfo,
    _encode_ObjectDigestInfo,
} from "../AttributeCertificateDefinitions/ObjectDigestInfo.ta";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta";
export {
    IssuerSerial,
    _decode_IssuerSerial,
    _encode_IssuerSerial,
} from "../AttributeCertificateDefinitions/IssuerSerial.ta";
export {
    ObjectDigestInfo,
    _decode_ObjectDigestInfo,
    _encode_ObjectDigestInfo,
} from "../AttributeCertificateDefinitions/ObjectDigestInfo.ta";
export {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta";

/* START_OF_SYMBOL_DEFINITION TargetCert */
/**
 * @summary TargetCert
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TargetCert ::= SEQUENCE {
 *   targetCertificate  IssuerSerial,
 *   targetName         GeneralName OPTIONAL,
 *   certDigestInfo     ObjectDigestInfo OPTIONAL }
 * ```
 *
 * @class
 */
export class TargetCert {
    constructor(
        /**
         * @summary `targetCertificate`.
         * @public
         * @readonly
         */
        readonly targetCertificate: IssuerSerial,
        /**
         * @summary `targetName`.
         * @public
         * @readonly
         */
        readonly targetName: OPTIONAL<GeneralName>,
        /**
         * @summary `certDigestInfo`.
         * @public
         * @readonly
         */
        readonly certDigestInfo: OPTIONAL<ObjectDigestInfo>
    ) {}

    /**
     * @summary Restructures an object into a TargetCert
     * @description
     *
     * This takes an `object` and converts it to a `TargetCert`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TargetCert`.
     * @returns {TargetCert}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof TargetCert]: TargetCert[_K] }>
    ): TargetCert {
        return new TargetCert(
            _o.targetCertificate,
            _o.targetName,
            _o.certDigestInfo
        );
    }
}
/* END_OF_SYMBOL_DEFINITION TargetCert */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TargetCert */
/**
 * @summary The Leading Root Component Types of TargetCert
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TargetCert: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "targetCertificate",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec("targetName", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "certDigestInfo",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TargetCert */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TargetCert */
/**
 * @summary The Trailing Root Component Types of TargetCert
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TargetCert: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TargetCert */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TargetCert */
/**
 * @summary The Extension Addition Component Types of TargetCert
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TargetCert: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TargetCert */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TargetCert */
let _cached_decoder_for_TargetCert: $.ASN1Decoder<TargetCert> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TargetCert */

/* START_OF_SYMBOL_DEFINITION _decode_TargetCert */
/**
 * @summary Decodes an ASN.1 element into a(n) TargetCert
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TargetCert} The decoded data structure.
 */
export function _decode_TargetCert(el: _Element) {
    if (!_cached_decoder_for_TargetCert) {
        _cached_decoder_for_TargetCert = function (el: _Element): TargetCert {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let targetCertificate!: IssuerSerial;
            let targetName: OPTIONAL<GeneralName>;
            let certDigestInfo: OPTIONAL<ObjectDigestInfo>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                targetCertificate: (_el: _Element): void => {
                    targetCertificate = _decode_IssuerSerial(_el);
                },
                targetName: (_el: _Element): void => {
                    targetName = _decode_GeneralName(_el);
                },
                certDigestInfo: (_el: _Element): void => {
                    certDigestInfo = _decode_ObjectDigestInfo(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TargetCert,
                _extension_additions_list_spec_for_TargetCert,
                _root_component_type_list_2_spec_for_TargetCert,
                undefined
            );
            return new TargetCert(
                /* SEQUENCE_CONSTRUCTOR_CALL */ targetCertificate,
                targetName,
                certDigestInfo
            );
        };
    }
    return _cached_decoder_for_TargetCert(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TargetCert */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TargetCert */
let _cached_encoder_for_TargetCert: $.ASN1Encoder<TargetCert> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TargetCert */

/* START_OF_SYMBOL_DEFINITION _encode_TargetCert */
/**
 * @summary Encodes a(n) TargetCert into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TargetCert, encoded as an ASN.1 Element.
 */
export function _encode_TargetCert(
    value: TargetCert,
    elGetter: $.ASN1Encoder<TargetCert>
) {
    if (!_cached_encoder_for_TargetCert) {
        _cached_encoder_for_TargetCert = function (
            value: TargetCert,
            elGetter: $.ASN1Encoder<TargetCert>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_IssuerSerial(
                            value.targetCertificate,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.targetName === undefined
                            ? undefined
                            : _encode_GeneralName(value.targetName, $.BER),
                        /* IF_ABSENT  */ value.certDigestInfo === undefined
                            ? undefined
                            : _encode_ObjectDigestInfo(
                                  value.certDigestInfo,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TargetCert(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TargetCert */

/* eslint-enable */
