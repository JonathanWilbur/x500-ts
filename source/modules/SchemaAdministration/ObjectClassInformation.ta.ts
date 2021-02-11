/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ObjectClassKind,
    ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
    _enum_for_ObjectClassKind,
} from "../InformationFramework/ObjectClassKind.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export {
    abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ObjectClassKind,
    ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */,
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
    _enum_for_ObjectClassKind,
} from "../InformationFramework/ObjectClassKind.ta";

/* START_OF_SYMBOL_DEFINITION ObjectClassInformation */
/**
 * @summary ObjectClassInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectClassInformation ::= SEQUENCE {
 *   subclassOf        SET SIZE (1..MAX) OF OBJECT-CLASS.&id OPTIONAL,
 *   kind              ObjectClassKind                       DEFAULT structural,
 *   mandatories  [3]  SET SIZE (1..MAX) OF ATTRIBUTE.&id    OPTIONAL,
 *   optionals    [4]  SET SIZE (1..MAX) OF ATTRIBUTE.&id    OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class ObjectClassInformation {
    constructor(
        /**
         * @summary `subclassOf`.
         * @public
         * @readonly
         */
        readonly subclassOf: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary `kind`.
         * @public
         * @readonly
         */
        readonly kind: OPTIONAL<ObjectClassKind>,
        /**
         * @summary `mandatories`.
         * @public
         * @readonly
         */
        readonly mandatories: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary `optionals`.
         * @public
         * @readonly
         */
        readonly optionals: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ObjectClassInformation
     * @description
     *
     * This takes an `object` and converts it to a `ObjectClassInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ObjectClassInformation`.
     * @returns {ObjectClassInformation}
     */
    public static _from_object(
        _o: { [_K in keyof ObjectClassInformation]: ObjectClassInformation[_K] }
    ): ObjectClassInformation {
        return new ObjectClassInformation(
            _o.subclassOf,
            _o.kind,
            _o.mandatories,
            _o.optionals,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `kind`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_kind() {
        return ObjectClassKind_structural;
    }
    /**
     * @summary The enum used as the type of the component `kind`
     * @public
     * @static
     */

    public static _enum_for_kind = _enum_for_ObjectClassKind;
}
/* END_OF_SYMBOL_DEFINITION ObjectClassInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ObjectClassInformation */
/**
 * @summary The Leading Root Component Types of ObjectClassInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ObjectClassInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "subclassOf",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "kind",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "mandatories",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "optionals",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ObjectClassInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ObjectClassInformation */
/**
 * @summary The Trailing Root Component Types of ObjectClassInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ObjectClassInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ObjectClassInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ObjectClassInformation */
/**
 * @summary The Extension Addition Component Types of ObjectClassInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ObjectClassInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ObjectClassInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ObjectClassInformation */
let _cached_decoder_for_ObjectClassInformation: $.ASN1Decoder<ObjectClassInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ObjectClassInformation */

/* START_OF_SYMBOL_DEFINITION _decode_ObjectClassInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) ObjectClassInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectClassInformation} The decoded data structure.
 */
export function _decode_ObjectClassInformation(el: _Element) {
    if (!_cached_decoder_for_ObjectClassInformation) {
        _cached_decoder_for_ObjectClassInformation = function (
            el: _Element
        ): ObjectClassInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let subclassOf: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let kind: OPTIONAL<ObjectClassKind> =
                ObjectClassInformation._default_value_for_kind;
            let mandatories: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let optionals: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                subclassOf: (_el: _Element): void => {
                    subclassOf = $._decodeSetOf<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                kind: (_el: _Element): void => {
                    kind = _decode_ObjectClassKind(_el);
                },
                mandatories: (_el: _Element): void => {
                    mandatories = $._decode_explicit<OBJECT_IDENTIFIER[]>(() =>
                        $._decodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    )(_el);
                },
                optionals: (_el: _Element): void => {
                    optionals = $._decode_explicit<OBJECT_IDENTIFIER[]>(() =>
                        $._decodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ObjectClassInformation,
                _extension_additions_list_spec_for_ObjectClassInformation,
                _root_component_type_list_2_spec_for_ObjectClassInformation,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ObjectClassInformation(
                /* SEQUENCE_CONSTRUCTOR_CALL */ subclassOf,
                kind,
                mandatories,
                optionals,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ObjectClassInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ObjectClassInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ObjectClassInformation */
let _cached_encoder_for_ObjectClassInformation: $.ASN1Encoder<ObjectClassInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ObjectClassInformation */

/* START_OF_SYMBOL_DEFINITION _encode_ObjectClassInformation */
/**
 * @summary Encodes a(n) ObjectClassInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectClassInformation, encoded as an ASN.1 Element.
 */
export function _encode_ObjectClassInformation(
    value: ObjectClassInformation,
    elGetter: $.ASN1Encoder<ObjectClassInformation>
) {
    if (!_cached_encoder_for_ObjectClassInformation) {
        _cached_encoder_for_ObjectClassInformation = function (
            value: ObjectClassInformation,
            elGetter: $.ASN1Encoder<ObjectClassInformation>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.subclassOf === undefined
                                ? undefined
                                : $._encodeSetOf<OBJECT_IDENTIFIER>(
                                      () => $._encodeObjectIdentifier,
                                      $.BER
                                  )(value.subclassOf, $.BER),
                            /* IF_DEFAULT */ value.kind === undefined ||
                            $.deepEq(
                                value.kind,
                                ObjectClassInformation._default_value_for_kind
                            )
                                ? undefined
                                : _encode_ObjectClassKind(value.kind, $.BER),
                            /* IF_ABSENT  */ value.mandatories === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () =>
                                          $._encodeSetOf<OBJECT_IDENTIFIER>(
                                              () => $._encodeObjectIdentifier,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.mandatories, $.BER),
                            /* IF_ABSENT  */ value.optionals === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () =>
                                          $._encodeSetOf<OBJECT_IDENTIFIER>(
                                              () => $._encodeObjectIdentifier,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.optionals, $.BER),
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
    return _cached_encoder_for_ObjectClassInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ObjectClassInformation */

/* eslint-enable */
