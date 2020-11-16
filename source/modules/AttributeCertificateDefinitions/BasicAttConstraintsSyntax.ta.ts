/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    INTEGER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION BasicAttConstraintsSyntax */
/**
 * @summary BasicAttConstraintsSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BasicAttConstraintsSyntax ::= SEQUENCE {
 *   authority          BOOLEAN DEFAULT FALSE,
 *   pathLenConstraint  INTEGER(0..MAX) OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class BasicAttConstraintsSyntax {
    constructor(
        /**
         * @summary `authority`.
         * @public
         * @readonly
         */
        readonly authority: OPTIONAL<BOOLEAN>,
        /**
         * @summary `pathLenConstraint`.
         * @public
         * @readonly
         */
        readonly pathLenConstraint: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a BasicAttConstraintsSyntax
     * @description
     *
     * This takes an `object` and converts it to a `BasicAttConstraintsSyntax`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BasicAttConstraintsSyntax`.
     * @returns {BasicAttConstraintsSyntax}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof BasicAttConstraintsSyntax]: BasicAttConstraintsSyntax[_K];
            }
        >
    ): BasicAttConstraintsSyntax {
        return new BasicAttConstraintsSyntax(
            _o.authority,
            _o.pathLenConstraint,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `authority`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_authority() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION BasicAttConstraintsSyntax */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BasicAttConstraintsSyntax */
/**
 * @summary The Leading Root Component Types of BasicAttConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BasicAttConstraintsSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "authority",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "pathLenConstraint",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BasicAttConstraintsSyntax */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BasicAttConstraintsSyntax */
/**
 * @summary The Trailing Root Component Types of BasicAttConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BasicAttConstraintsSyntax: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BasicAttConstraintsSyntax */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BasicAttConstraintsSyntax */
/**
 * @summary The Extension Addition Component Types of BasicAttConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BasicAttConstraintsSyntax: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BasicAttConstraintsSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BasicAttConstraintsSyntax */
let _cached_decoder_for_BasicAttConstraintsSyntax: $.ASN1Decoder<
    BasicAttConstraintsSyntax
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BasicAttConstraintsSyntax */

/* START_OF_SYMBOL_DEFINITION _decode_BasicAttConstraintsSyntax */
/**
 * @summary Decodes an ASN.1 element into a(n) BasicAttConstraintsSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BasicAttConstraintsSyntax} The decoded data structure.
 */
export function _decode_BasicAttConstraintsSyntax(el: _Element) {
    if (!_cached_decoder_for_BasicAttConstraintsSyntax) {
        _cached_decoder_for_BasicAttConstraintsSyntax = function (
            el: _Element
        ): BasicAttConstraintsSyntax {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let authority: OPTIONAL<BOOLEAN> =
                BasicAttConstraintsSyntax._default_value_for_authority;
            let pathLenConstraint: OPTIONAL<INTEGER>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                authority: (_el: _Element): void => {
                    authority = $._decodeBoolean(_el);
                },
                pathLenConstraint: (_el: _Element): void => {
                    pathLenConstraint = $._decodeInteger(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BasicAttConstraintsSyntax,
                _extension_additions_list_spec_for_BasicAttConstraintsSyntax,
                _root_component_type_list_2_spec_for_BasicAttConstraintsSyntax,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new BasicAttConstraintsSyntax /* SEQUENCE_CONSTRUCTOR_CALL */(
                authority,
                pathLenConstraint,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_BasicAttConstraintsSyntax(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BasicAttConstraintsSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BasicAttConstraintsSyntax */
let _cached_encoder_for_BasicAttConstraintsSyntax: $.ASN1Encoder<
    BasicAttConstraintsSyntax
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BasicAttConstraintsSyntax */

/* START_OF_SYMBOL_DEFINITION _encode_BasicAttConstraintsSyntax */
/**
 * @summary Encodes a(n) BasicAttConstraintsSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BasicAttConstraintsSyntax, encoded as an ASN.1 Element.
 */
export function _encode_BasicAttConstraintsSyntax(
    value: BasicAttConstraintsSyntax,
    elGetter: $.ASN1Encoder<BasicAttConstraintsSyntax>
) {
    if (!_cached_encoder_for_BasicAttConstraintsSyntax) {
        _cached_encoder_for_BasicAttConstraintsSyntax = function (
            value: BasicAttConstraintsSyntax,
            elGetter: $.ASN1Encoder<BasicAttConstraintsSyntax>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.authority === undefined ||
                            $.deepEq(
                                value.authority,
                                BasicAttConstraintsSyntax._default_value_for_authority
                            )
                                ? undefined
                                : $._encodeBoolean(value.authority, $.BER),
                            /* IF_ABSENT  */ value.pathLenConstraint ===
                            undefined
                                ? undefined
                                : $._encodeInteger(
                                      value.pathLenConstraint,
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
    return _cached_encoder_for_BasicAttConstraintsSyntax(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BasicAttConstraintsSyntax */

/* eslint-enable */
