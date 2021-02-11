/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    LDAPDN,
    _decode_LDAPDN,
    _encode_LDAPDN,
} from "../Lightweight-Directory-Access-Protocol-V3/LDAPDN.ta";
import {
    PartialAttributeList,
    _decode_PartialAttributeList,
    _encode_PartialAttributeList,
} from "../Lightweight-Directory-Access-Protocol-V3/PartialAttributeList.ta";
export {
    LDAPDN,
    _decode_LDAPDN,
    _encode_LDAPDN,
} from "../Lightweight-Directory-Access-Protocol-V3/LDAPDN.ta";
export {
    PartialAttributeList,
    _decode_PartialAttributeList,
    _encode_PartialAttributeList,
} from "../Lightweight-Directory-Access-Protocol-V3/PartialAttributeList.ta";

/* START_OF_SYMBOL_DEFINITION SearchResultEntry */
/**
 * @summary SearchResultEntry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchResultEntry ::= [APPLICATION 4]  SEQUENCE {
 *   objectName  LDAPDN,
 *   attributes  PartialAttributeList
 * }
 * ```
 *
 * @class
 */
export class SearchResultEntry {
    constructor(
        /**
         * @summary `objectName`.
         * @public
         * @readonly
         */
        readonly objectName: LDAPDN,
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: PartialAttributeList,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SearchResultEntry
     * @description
     *
     * This takes an `object` and converts it to a `SearchResultEntry`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SearchResultEntry`.
     * @returns {SearchResultEntry}
     */
    public static _from_object(
        _o: { [_K in keyof SearchResultEntry]: SearchResultEntry[_K] }
    ): SearchResultEntry {
        return new SearchResultEntry(
            _o.objectName,
            _o.attributes,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION SearchResultEntry */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SearchResultEntry */
/**
 * @summary The Leading Root Component Types of SearchResultEntry
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SearchResultEntry: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "objectName",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributes",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SearchResultEntry */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SearchResultEntry */
/**
 * @summary The Trailing Root Component Types of SearchResultEntry
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SearchResultEntry: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SearchResultEntry */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SearchResultEntry */
/**
 * @summary The Extension Addition Component Types of SearchResultEntry
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SearchResultEntry: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SearchResultEntry */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchResultEntry */
let _cached_decoder_for_SearchResultEntry: $.ASN1Decoder<SearchResultEntry> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchResultEntry */

/* START_OF_SYMBOL_DEFINITION _decode_SearchResultEntry */
/**
 * @summary Decodes an ASN.1 element into a(n) SearchResultEntry
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchResultEntry} The decoded data structure.
 */
export function _decode_SearchResultEntry(el: _Element) {
    if (!_cached_decoder_for_SearchResultEntry) {
        _cached_decoder_for_SearchResultEntry = $._decode_implicit<SearchResultEntry>(
            () =>
                function (el: _Element): SearchResultEntry {
                    const sequence: _Element[] = el.sequence;
                    if (sequence.length < 2) {
                        throw new _ConstructionError(
                            "SearchResultEntry contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
                    }
                    sequence[0].name = "objectName";
                    sequence[1].name = "attributes";
                    let objectName!: LDAPDN;
                    let attributes!: PartialAttributeList;
                    objectName = _decode_LDAPDN(sequence[0]);
                    attributes = _decode_PartialAttributeList(sequence[1]);
                    return new SearchResultEntry(
                        objectName,
                        attributes,
                        sequence.slice(2)
                    );
                }
        );
    }
    return _cached_decoder_for_SearchResultEntry(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SearchResultEntry */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchResultEntry */
let _cached_encoder_for_SearchResultEntry: $.ASN1Encoder<SearchResultEntry> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchResultEntry */

/* START_OF_SYMBOL_DEFINITION _encode_SearchResultEntry */
/**
 * @summary Encodes a(n) SearchResultEntry into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchResultEntry, encoded as an ASN.1 Element.
 */
export function _encode_SearchResultEntry(
    value: SearchResultEntry,
    elGetter: $.ASN1Encoder<SearchResultEntry>
) {
    if (!_cached_encoder_for_SearchResultEntry) {
        _cached_encoder_for_SearchResultEntry = $._encode_implicit(
            _TagClass.application,
            4,
            () =>
                function (
                    value: SearchResultEntry,
                    elGetter: $.ASN1Encoder<SearchResultEntry>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_LDAPDN(
                                        value.objectName,
                                        $.BER
                                    ),
                                    /* REQUIRED   */ _encode_PartialAttributeList(
                                        value.attributes,
                                        $.BER
                                    ),
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
    return _cached_encoder_for_SearchResultEntry(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SearchResultEntry */

/* eslint-enable */
