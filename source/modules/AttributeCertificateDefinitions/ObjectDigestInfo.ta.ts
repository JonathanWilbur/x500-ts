/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ObjectDigestInfo_digestedObjectType,
    _decode_ObjectDigestInfo_digestedObjectType,
    _encode_ObjectDigestInfo_digestedObjectType,
    _enum_for_ObjectDigestInfo_digestedObjectType,
} from "../AttributeCertificateDefinitions/ObjectDigestInfo-digestedObjectType.ta";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta";
export {
    ObjectDigestInfo_digestedObjectType,
    ObjectDigestInfo_digestedObjectType_otherObjectTypes /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ObjectDigestInfo_digestedObjectType_publicKey /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ObjectDigestInfo_digestedObjectType_publicKeyCert /* IMPORTED_LONG_ENUMERATION_ITEM */,
    otherObjectTypes /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    publicKey /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    publicKeyCert /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectDigestInfo_digestedObjectType,
    _encode_ObjectDigestInfo_digestedObjectType,
    _enum_for_ObjectDigestInfo_digestedObjectType,
} from "../AttributeCertificateDefinitions/ObjectDigestInfo-digestedObjectType.ta";
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION ObjectDigestInfo */
/**
 * @summary ObjectDigestInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectDigestInfo ::= SEQUENCE {
 *   digestedObjectType   ENUMERATED {
 *     publicKey        (0),
 *     publicKeyCert    (1),
 *     otherObjectTypes (2)},
 *   otherObjectTypeID   OBJECT IDENTIFIER OPTIONAL,
 *   digestAlgorithm     AlgorithmIdentifier{{SupportedAlgorithms}},
 *   objectDigest        BIT STRING,
 *   ... }
 * ```
 *
 * @class
 */
export class ObjectDigestInfo {
    constructor(
        /**
         * @summary `digestedObjectType`.
         * @public
         * @readonly
         */
        readonly digestedObjectType: ObjectDigestInfo_digestedObjectType,
        /**
         * @summary `otherObjectTypeID`.
         * @public
         * @readonly
         */
        readonly otherObjectTypeID: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `digestAlgorithm`.
         * @public
         * @readonly
         */
        readonly digestAlgorithm: AlgorithmIdentifier,
        /**
         * @summary `objectDigest`.
         * @public
         * @readonly
         */
        readonly objectDigest: BIT_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ObjectDigestInfo
     * @description
     *
     * This takes an `object` and converts it to a `ObjectDigestInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ObjectDigestInfo`.
     * @returns {ObjectDigestInfo}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ObjectDigestInfo]: ObjectDigestInfo[_K] }>
    ): ObjectDigestInfo {
        return new ObjectDigestInfo(
            _o.digestedObjectType,
            _o.otherObjectTypeID,
            _o.digestAlgorithm,
            _o.objectDigest,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `digestedObjectType`
     * @public
     * @static
     */

    public static _enum_for_digestedObjectType = _enum_for_ObjectDigestInfo_digestedObjectType;
}
/* END_OF_SYMBOL_DEFINITION ObjectDigestInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ObjectDigestInfo */
/**
 * @summary The Leading Root Component Types of ObjectDigestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ObjectDigestInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "digestedObjectType",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "otherObjectTypeID",
        true,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "digestAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "objectDigest",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ObjectDigestInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ObjectDigestInfo */
/**
 * @summary The Trailing Root Component Types of ObjectDigestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ObjectDigestInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ObjectDigestInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ObjectDigestInfo */
/**
 * @summary The Extension Addition Component Types of ObjectDigestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ObjectDigestInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ObjectDigestInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ObjectDigestInfo */
let _cached_decoder_for_ObjectDigestInfo: $.ASN1Decoder<
    ObjectDigestInfo
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ObjectDigestInfo */

/* START_OF_SYMBOL_DEFINITION _decode_ObjectDigestInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) ObjectDigestInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectDigestInfo} The decoded data structure.
 */
export function _decode_ObjectDigestInfo(el: _Element) {
    if (!_cached_decoder_for_ObjectDigestInfo) {
        _cached_decoder_for_ObjectDigestInfo = function (
            el: _Element
        ): ObjectDigestInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let digestedObjectType!: ObjectDigestInfo_digestedObjectType;
            let otherObjectTypeID: OPTIONAL<OBJECT_IDENTIFIER>;
            let digestAlgorithm!: AlgorithmIdentifier;
            let objectDigest!: BIT_STRING;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                digestedObjectType: (_el: _Element): void => {
                    digestedObjectType = _decode_ObjectDigestInfo_digestedObjectType(
                        _el
                    );
                },
                otherObjectTypeID: (_el: _Element): void => {
                    otherObjectTypeID = $._decodeObjectIdentifier(_el);
                },
                digestAlgorithm: (_el: _Element): void => {
                    digestAlgorithm = _decode_AlgorithmIdentifier(_el);
                },
                objectDigest: (_el: _Element): void => {
                    objectDigest = $._decodeBitString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ObjectDigestInfo,
                _extension_additions_list_spec_for_ObjectDigestInfo,
                _root_component_type_list_2_spec_for_ObjectDigestInfo,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ObjectDigestInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                digestedObjectType,
                otherObjectTypeID,
                digestAlgorithm,
                objectDigest,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ObjectDigestInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ObjectDigestInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ObjectDigestInfo */
let _cached_encoder_for_ObjectDigestInfo: $.ASN1Encoder<
    ObjectDigestInfo
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ObjectDigestInfo */

/* START_OF_SYMBOL_DEFINITION _encode_ObjectDigestInfo */
/**
 * @summary Encodes a(n) ObjectDigestInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectDigestInfo, encoded as an ASN.1 Element.
 */
export function _encode_ObjectDigestInfo(
    value: ObjectDigestInfo,
    elGetter: $.ASN1Encoder<ObjectDigestInfo>
) {
    if (!_cached_encoder_for_ObjectDigestInfo) {
        _cached_encoder_for_ObjectDigestInfo = function (
            value: ObjectDigestInfo,
            elGetter: $.ASN1Encoder<ObjectDigestInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_ObjectDigestInfo_digestedObjectType(
                                value.digestedObjectType,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.otherObjectTypeID ===
                            undefined
                                ? undefined
                                : $._encodeObjectIdentifier(
                                      value.otherObjectTypeID,
                                      $.BER
                                  ),
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.digestAlgorithm,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeBitString(
                                value.objectDigest,
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
    return _cached_encoder_for_ObjectDigestInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ObjectDigestInfo */

/* eslint-enable */
