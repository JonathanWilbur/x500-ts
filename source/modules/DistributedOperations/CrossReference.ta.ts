/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AccessPointInformation,
    _decode_AccessPointInformation,
    _encode_AccessPointInformation,
} from "../DistributedOperations/AccessPointInformation.ta";
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
export {
    AccessPointInformation,
    _decode_AccessPointInformation,
    _encode_AccessPointInformation,
} from "../DistributedOperations/AccessPointInformation.ta";
export {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";

/* START_OF_SYMBOL_DEFINITION CrossReference */
/**
 * @summary CrossReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CrossReference ::= SET {
 *   contextPrefix  [0]  DistinguishedName,
 *   accessPoint    [1]  AccessPointInformation,
 *   ... }
 * ```
 *
 * @class
 */
export class CrossReference {
    constructor(
        /**
         * @summary `contextPrefix`.
         * @public
         * @readonly
         */
        readonly contextPrefix: DistinguishedName,
        /**
         * @summary `accessPoint`.
         * @public
         * @readonly
         */
        readonly accessPoint: AccessPointInformation,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CrossReference
     * @description
     *
     * This takes an `object` and converts it to a `CrossReference`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CrossReference`.
     * @returns {CrossReference}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CrossReference]: CrossReference[_K] }>
    ): CrossReference {
        return new CrossReference(
            _o.contextPrefix,
            _o.accessPoint,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CrossReference */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CrossReference */
/**
 * @summary The Leading Root Component Types of CrossReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CrossReference: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "contextPrefix",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "accessPoint",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CrossReference */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CrossReference */
/**
 * @summary The Trailing Root Component Types of CrossReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CrossReference: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CrossReference */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CrossReference */
/**
 * @summary The Extension Addition Component Types of CrossReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CrossReference: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CrossReference */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CrossReference */
let _cached_decoder_for_CrossReference: $.ASN1Decoder<CrossReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CrossReference */

/* START_OF_SYMBOL_DEFINITION _decode_CrossReference */
/**
 * @summary Decodes an ASN.1 element into a(n) CrossReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CrossReference} The decoded data structure.
 */
export function _decode_CrossReference(el: _Element) {
    if (!_cached_decoder_for_CrossReference) {
        _cached_decoder_for_CrossReference = function (
            el: _Element
        ): CrossReference {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let contextPrefix!: DistinguishedName;
            let accessPoint!: AccessPointInformation;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                contextPrefix: (_el: _Element): void => {
                    contextPrefix = $._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                accessPoint: (_el: _Element): void => {
                    accessPoint = $._decode_explicit<AccessPointInformation>(
                        () => _decode_AccessPointInformation
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CrossReference,
                _extension_additions_list_spec_for_CrossReference,
                _root_component_type_list_2_spec_for_CrossReference,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CrossReference(
                /* SET_CONSTRUCTOR_CALL */ contextPrefix,
                accessPoint,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CrossReference(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CrossReference */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CrossReference */
let _cached_encoder_for_CrossReference: $.ASN1Encoder<CrossReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CrossReference */

/* START_OF_SYMBOL_DEFINITION _encode_CrossReference */
/**
 * @summary Encodes a(n) CrossReference into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CrossReference, encoded as an ASN.1 Element.
 */
export function _encode_CrossReference(
    value: CrossReference,
    elGetter: $.ASN1Encoder<CrossReference>
) {
    if (!_cached_encoder_for_CrossReference) {
        _cached_encoder_for_CrossReference = function (
            value: CrossReference,
            elGetter: $.ASN1Encoder<CrossReference>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_DistinguishedName,
                                $.BER
                            )(value.contextPrefix, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => _encode_AccessPointInformation,
                                $.BER
                            )(value.accessPoint, $.BER),
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
    return _cached_encoder_for_CrossReference(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CrossReference */

/* eslint-enable */
