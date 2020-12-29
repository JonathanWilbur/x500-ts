/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ContextSelection,
    _decode_ContextSelection,
    _encode_ContextSelection,
} from "../DirectoryAbstractService/ContextSelection.ta";
import {
    AreaSpecification,
    _decode_AreaSpecification,
    _encode_AreaSpecification,
} from "../DirectoryShadowAbstractService/AreaSpecification.ta";
import {
    AttributeSelection,
    _decode_AttributeSelection,
    _encode_AttributeSelection,
} from "../DirectoryShadowAbstractService/AttributeSelection.ta";
import {
    Knowledge,
    _decode_Knowledge,
    _encode_Knowledge,
} from "../DirectoryShadowAbstractService/Knowledge.ta";
import {
    UnitOfReplication_supplyContexts,
    _decode_UnitOfReplication_supplyContexts,
    _encode_UnitOfReplication_supplyContexts,
} from "../DirectoryShadowAbstractService/UnitOfReplication-supplyContexts.ta";
export {
    ContextSelection,
    _decode_ContextSelection,
    _encode_ContextSelection,
} from "../DirectoryAbstractService/ContextSelection.ta";
export {
    AreaSpecification,
    _decode_AreaSpecification,
    _encode_AreaSpecification,
} from "../DirectoryShadowAbstractService/AreaSpecification.ta";
export {
    AttributeSelection,
    _decode_AttributeSelection,
    _encode_AttributeSelection,
} from "../DirectoryShadowAbstractService/AttributeSelection.ta";
export {
    Knowledge,
    _decode_Knowledge,
    _encode_Knowledge,
} from "../DirectoryShadowAbstractService/Knowledge.ta";
export {
    UnitOfReplication_supplyContexts,
    _decode_UnitOfReplication_supplyContexts,
    _encode_UnitOfReplication_supplyContexts,
} from "../DirectoryShadowAbstractService/UnitOfReplication-supplyContexts.ta";

/* START_OF_SYMBOL_DEFINITION UnitOfReplication */
/**
 * @summary UnitOfReplication
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnitOfReplication ::= SEQUENCE {
 *   area                 AreaSpecification,
 *   attributes           AttributeSelection,
 *   knowledge            Knowledge OPTIONAL,
 *   subordinates         BOOLEAN DEFAULT FALSE,
 *   contextSelection     ContextSelection OPTIONAL,
 *   supplyContexts  [0]  CHOICE {
 *     allContexts         NULL,
 *     selectedContexts    SET SIZE (1..MAX) OF CONTEXT.&id,
 *     ... } OPTIONAL }
 * ```
 *
 * @class
 */
export class UnitOfReplication {
    constructor(
        /**
         * @summary `area`.
         * @public
         * @readonly
         */
        readonly area: AreaSpecification,
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: AttributeSelection,
        /**
         * @summary `knowledge`.
         * @public
         * @readonly
         */
        readonly knowledge: OPTIONAL<Knowledge>,
        /**
         * @summary `subordinates`.
         * @public
         * @readonly
         */
        readonly subordinates: OPTIONAL<BOOLEAN>,
        /**
         * @summary `contextSelection`.
         * @public
         * @readonly
         */
        readonly contextSelection: OPTIONAL<ContextSelection>,
        /**
         * @summary `supplyContexts`.
         * @public
         * @readonly
         */
        readonly supplyContexts: OPTIONAL<UnitOfReplication_supplyContexts>
    ) {}

    /**
     * @summary Restructures an object into a UnitOfReplication
     * @description
     *
     * This takes an `object` and converts it to a `UnitOfReplication`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UnitOfReplication`.
     * @returns {UnitOfReplication}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof UnitOfReplication]: UnitOfReplication[_K] }>
    ): UnitOfReplication {
        return new UnitOfReplication(
            _o.area,
            _o.attributes,
            _o.knowledge,
            _o.subordinates,
            _o.contextSelection,
            _o.supplyContexts
        );
    }

    /**
     * @summary Getter that returns the default value for `subordinates`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_subordinates() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION UnitOfReplication */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UnitOfReplication */
/**
 * @summary The Leading Root Component Types of UnitOfReplication
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UnitOfReplication: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "area",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributes",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "knowledge",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subordinates",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "contextSelection",
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "supplyContexts",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UnitOfReplication */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UnitOfReplication */
/**
 * @summary The Trailing Root Component Types of UnitOfReplication
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UnitOfReplication: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UnitOfReplication */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UnitOfReplication */
/**
 * @summary The Extension Addition Component Types of UnitOfReplication
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UnitOfReplication: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UnitOfReplication */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UnitOfReplication */
let _cached_decoder_for_UnitOfReplication: $.ASN1Decoder<UnitOfReplication> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnitOfReplication */

/* START_OF_SYMBOL_DEFINITION _decode_UnitOfReplication */
/**
 * @summary Decodes an ASN.1 element into a(n) UnitOfReplication
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnitOfReplication} The decoded data structure.
 */
export function _decode_UnitOfReplication(el: _Element) {
    if (!_cached_decoder_for_UnitOfReplication) {
        _cached_decoder_for_UnitOfReplication = function (
            el: _Element
        ): UnitOfReplication {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let area!: AreaSpecification;
            let attributes!: AttributeSelection;
            let knowledge: OPTIONAL<Knowledge>;
            let subordinates: OPTIONAL<BOOLEAN> =
                UnitOfReplication._default_value_for_subordinates;
            let contextSelection: OPTIONAL<ContextSelection>;
            let supplyContexts: OPTIONAL<UnitOfReplication_supplyContexts>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                area: (_el: _Element): void => {
                    area = _decode_AreaSpecification(_el);
                },
                attributes: (_el: _Element): void => {
                    attributes = _decode_AttributeSelection(_el);
                },
                knowledge: (_el: _Element): void => {
                    knowledge = _decode_Knowledge(_el);
                },
                subordinates: (_el: _Element): void => {
                    subordinates = $._decodeBoolean(_el);
                },
                contextSelection: (_el: _Element): void => {
                    contextSelection = _decode_ContextSelection(_el);
                },
                supplyContexts: (_el: _Element): void => {
                    supplyContexts = $._decode_explicit<UnitOfReplication_supplyContexts>(
                        () => _decode_UnitOfReplication_supplyContexts
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UnitOfReplication,
                _extension_additions_list_spec_for_UnitOfReplication,
                _root_component_type_list_2_spec_for_UnitOfReplication,
                undefined
            );
            return new UnitOfReplication /* SEQUENCE_CONSTRUCTOR_CALL */(
                area,
                attributes,
                knowledge,
                subordinates,
                contextSelection,
                supplyContexts
            );
        };
    }
    return _cached_decoder_for_UnitOfReplication(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UnitOfReplication */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnitOfReplication */
let _cached_encoder_for_UnitOfReplication: $.ASN1Encoder<UnitOfReplication> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnitOfReplication */

/* START_OF_SYMBOL_DEFINITION _encode_UnitOfReplication */
/**
 * @summary Encodes a(n) UnitOfReplication into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnitOfReplication, encoded as an ASN.1 Element.
 */
export function _encode_UnitOfReplication(
    value: UnitOfReplication,
    elGetter: $.ASN1Encoder<UnitOfReplication>
) {
    if (!_cached_encoder_for_UnitOfReplication) {
        _cached_encoder_for_UnitOfReplication = function (
            value: UnitOfReplication,
            elGetter: $.ASN1Encoder<UnitOfReplication>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AreaSpecification(
                            value.area,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_AttributeSelection(
                            value.attributes,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.knowledge === undefined
                            ? undefined
                            : _encode_Knowledge(value.knowledge, $.BER),
                        /* IF_DEFAULT */ value.subordinates === undefined ||
                        $.deepEq(
                            value.subordinates,
                            UnitOfReplication._default_value_for_subordinates
                        )
                            ? undefined
                            : $._encodeBoolean(value.subordinates, $.BER),
                        /* IF_ABSENT  */ value.contextSelection === undefined
                            ? undefined
                            : _encode_ContextSelection(
                                  value.contextSelection,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.supplyContexts === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      _encode_UnitOfReplication_supplyContexts,
                                  $.BER
                              )(value.supplyContexts, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_UnitOfReplication(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UnitOfReplication */

/* eslint-enable */
