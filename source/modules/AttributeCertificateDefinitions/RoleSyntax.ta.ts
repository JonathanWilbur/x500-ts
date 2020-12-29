/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta";
import {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "../CertificateExtensions/GeneralNames.ta";
export {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta";
export {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "../CertificateExtensions/GeneralNames.ta";

/* START_OF_SYMBOL_DEFINITION RoleSyntax */
/**
 * @summary RoleSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RoleSyntax ::= SEQUENCE {
 *   roleAuthority  [0]  GeneralNames OPTIONAL,
 *   roleName       [1]  GeneralName,
 *   ... }
 * ```
 *
 * @class
 */
export class RoleSyntax {
    constructor(
        /**
         * @summary `roleAuthority`.
         * @public
         * @readonly
         */
        readonly roleAuthority: OPTIONAL<GeneralNames>,
        /**
         * @summary `roleName`.
         * @public
         * @readonly
         */
        readonly roleName: GeneralName,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RoleSyntax
     * @description
     *
     * This takes an `object` and converts it to a `RoleSyntax`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RoleSyntax`.
     * @returns {RoleSyntax}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof RoleSyntax]: RoleSyntax[_K] }>
    ): RoleSyntax {
        return new RoleSyntax(
            _o.roleAuthority,
            _o.roleName,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION RoleSyntax */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RoleSyntax */
/**
 * @summary The Leading Root Component Types of RoleSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RoleSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "roleAuthority",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "roleName",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RoleSyntax */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RoleSyntax */
/**
 * @summary The Trailing Root Component Types of RoleSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RoleSyntax: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RoleSyntax */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RoleSyntax */
/**
 * @summary The Extension Addition Component Types of RoleSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RoleSyntax: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RoleSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RoleSyntax */
let _cached_decoder_for_RoleSyntax: $.ASN1Decoder<RoleSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RoleSyntax */

/* START_OF_SYMBOL_DEFINITION _decode_RoleSyntax */
/**
 * @summary Decodes an ASN.1 element into a(n) RoleSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RoleSyntax} The decoded data structure.
 */
export function _decode_RoleSyntax(el: _Element) {
    if (!_cached_decoder_for_RoleSyntax) {
        _cached_decoder_for_RoleSyntax = function (el: _Element): RoleSyntax {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let roleAuthority: OPTIONAL<GeneralNames>;
            let roleName!: GeneralName;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                roleAuthority: (_el: _Element): void => {
                    roleAuthority = $._decode_implicit<GeneralNames>(
                        () => _decode_GeneralNames
                    )(_el);
                },
                roleName: (_el: _Element): void => {
                    roleName = $._decode_explicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RoleSyntax,
                _extension_additions_list_spec_for_RoleSyntax,
                _root_component_type_list_2_spec_for_RoleSyntax,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new RoleSyntax /* SEQUENCE_CONSTRUCTOR_CALL */(
                roleAuthority,
                roleName,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_RoleSyntax(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RoleSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RoleSyntax */
let _cached_encoder_for_RoleSyntax: $.ASN1Encoder<RoleSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RoleSyntax */

/* START_OF_SYMBOL_DEFINITION _encode_RoleSyntax */
/**
 * @summary Encodes a(n) RoleSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoleSyntax, encoded as an ASN.1 Element.
 */
export function _encode_RoleSyntax(
    value: RoleSyntax,
    elGetter: $.ASN1Encoder<RoleSyntax>
) {
    if (!_cached_encoder_for_RoleSyntax) {
        _cached_encoder_for_RoleSyntax = function (
            value: RoleSyntax,
            elGetter: $.ASN1Encoder<RoleSyntax>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.roleAuthority === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_GeneralNames,
                                      $.BER
                                  )(value.roleAuthority, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => _encode_GeneralName,
                                $.BER
                            )(value.roleName, $.BER),
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
    return _cached_encoder_for_RoleSyntax(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RoleSyntax */

/* eslint-enable */
