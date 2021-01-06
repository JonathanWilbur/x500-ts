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
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "../CertificateExtensions/GeneralNames.ta";
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
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "../CertificateExtensions/GeneralNames.ta";

/* START_OF_SYMBOL_DEFINITION AttCertIssuer */
/**
 * @summary AttCertIssuer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttCertIssuer ::= [0]  SEQUENCE {
 *   issuerName              GeneralNames OPTIONAL,
 *   baseCertificateID  [0]  IssuerSerial OPTIONAL,
 *   objectDigestInfo   [1]  ObjectDigestInfo OPTIONAL,
 *   ... }
 *   (WITH COMPONENTS {..., issuerName  PRESENT } |
 *    WITH COMPONENTS {..., baseCertificateID  PRESENT } |
 *    WITH COMPONENTS {..., objectDigestInfo  PRESENT } )
 * ```
 *
 * @class
 */
export class AttCertIssuer {
    constructor(
        /**
         * @summary `issuerName`.
         * @public
         * @readonly
         */
        readonly issuerName: OPTIONAL<GeneralNames>,
        /**
         * @summary `baseCertificateID`.
         * @public
         * @readonly
         */
        readonly baseCertificateID: OPTIONAL<IssuerSerial>,
        /**
         * @summary `objectDigestInfo`.
         * @public
         * @readonly
         */
        readonly objectDigestInfo: OPTIONAL<ObjectDigestInfo>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttCertIssuer
     * @description
     *
     * This takes an `object` and converts it to a `AttCertIssuer`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttCertIssuer`.
     * @returns {AttCertIssuer}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AttCertIssuer]: AttCertIssuer[_K] }>
    ): AttCertIssuer {
        return new AttCertIssuer(
            _o.issuerName,
            _o.baseCertificateID,
            _o.objectDigestInfo,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION AttCertIssuer */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttCertIssuer */
/**
 * @summary The Leading Root Component Types of AttCertIssuer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttCertIssuer: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "issuerName",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "baseCertificateID",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "objectDigestInfo",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttCertIssuer */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttCertIssuer */
/**
 * @summary The Trailing Root Component Types of AttCertIssuer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttCertIssuer: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttCertIssuer */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttCertIssuer */
/**
 * @summary The Extension Addition Component Types of AttCertIssuer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttCertIssuer: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttCertIssuer */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttCertIssuer */
let _cached_decoder_for_AttCertIssuer: $.ASN1Decoder<AttCertIssuer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttCertIssuer */

/* START_OF_SYMBOL_DEFINITION _decode_AttCertIssuer */
/**
 * @summary Decodes an ASN.1 element into a(n) AttCertIssuer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttCertIssuer} The decoded data structure.
 */
export function _decode_AttCertIssuer(el: _Element) {
    if (!_cached_decoder_for_AttCertIssuer) {
        _cached_decoder_for_AttCertIssuer = $._decode_implicit<AttCertIssuer>(
            () =>
                function (el: _Element): AttCertIssuer {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let issuerName: OPTIONAL<GeneralNames>;
                    let baseCertificateID: OPTIONAL<IssuerSerial>;
                    let objectDigestInfo: OPTIONAL<ObjectDigestInfo>;
                    let _unrecognizedExtensionsList: _Element[] = [];
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        issuerName: (_el: _Element): void => {
                            issuerName = _decode_GeneralNames(_el);
                        },
                        baseCertificateID: (_el: _Element): void => {
                            baseCertificateID = $._decode_implicit<IssuerSerial>(
                                () => _decode_IssuerSerial
                            )(_el);
                        },
                        objectDigestInfo: (_el: _Element): void => {
                            objectDigestInfo = $._decode_implicit<ObjectDigestInfo>(
                                () => _decode_ObjectDigestInfo
                            )(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_AttCertIssuer,
                        _extension_additions_list_spec_for_AttCertIssuer,
                        _root_component_type_list_2_spec_for_AttCertIssuer,
                        (ext: _Element): void => {
                            _unrecognizedExtensionsList.push(ext);
                        }
                    );
                    return new AttCertIssuer(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ issuerName,
                        baseCertificateID,
                        objectDigestInfo,
                        _unrecognizedExtensionsList
                    );
                }
        );
    }
    return _cached_decoder_for_AttCertIssuer(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttCertIssuer */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttCertIssuer */
let _cached_encoder_for_AttCertIssuer: $.ASN1Encoder<AttCertIssuer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttCertIssuer */

/* START_OF_SYMBOL_DEFINITION _encode_AttCertIssuer */
/**
 * @summary Encodes a(n) AttCertIssuer into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttCertIssuer, encoded as an ASN.1 Element.
 */
export function _encode_AttCertIssuer(
    value: AttCertIssuer,
    elGetter: $.ASN1Encoder<AttCertIssuer>
) {
    if (!_cached_encoder_for_AttCertIssuer) {
        _cached_encoder_for_AttCertIssuer = $._encode_implicit(
            _TagClass.context,
            0,
            () =>
                function (
                    value: AttCertIssuer,
                    elGetter: $.ASN1Encoder<AttCertIssuer>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* IF_ABSENT  */ value.issuerName ===
                                    undefined
                                        ? undefined
                                        : _encode_GeneralNames(
                                              value.issuerName,
                                              $.BER
                                          ),
                                    /* IF_ABSENT  */ value.baseCertificateID ===
                                    undefined
                                        ? undefined
                                        : $._encode_implicit(
                                              _TagClass.context,
                                              0,
                                              () => _encode_IssuerSerial,
                                              $.BER
                                          )(value.baseCertificateID, $.BER),
                                    /* IF_ABSENT  */ value.objectDigestInfo ===
                                    undefined
                                        ? undefined
                                        : $._encode_implicit(
                                              _TagClass.context,
                                              1,
                                              () => _encode_ObjectDigestInfo,
                                              $.BER
                                          )(value.objectDigestInfo, $.BER),
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
    return _cached_encoder_for_AttCertIssuer(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttCertIssuer */

/* eslint-enable */
