/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    TRUE_BIT,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error,
    _decode_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error,
    _encode_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error,
} from "../DirectoryAbstractService/DirectoryBindError-OPTIONALLY-PROTECTED-Parameter1-error.ta";
import {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta";
import {
    Versions,
    Versions_v1 /* IMPORTED_BIT */,
    _decode_Versions,
    _encode_Versions,
} from "../DirectoryAbstractService/Versions.ta";
export {
    DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error,
    _decode_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error,
    _encode_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error,
} from "../DirectoryAbstractService/DirectoryBindError-OPTIONALLY-PROTECTED-Parameter1-error.ta";
export {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta";
export {
    Versions,
    Versions_v1 /* IMPORTED_BIT */,
    Versions_v2 /* IMPORTED_BIT */,
    _decode_Versions,
    _encode_Versions,
} from "../DirectoryAbstractService/Versions.ta";

/* START_OF_SYMBOL_DEFINITION DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1 */
/**
 * @summary DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DirectoryBindError-OPTIONALLY-PROTECTED-Parameter1 ::= SET {
 *   versions              [0]  Versions DEFAULT {v1},
 *   error                      CHOICE {
 *     serviceError          [1]  ServiceProblem,
 *     securityError         [2]  SecurityProblem,
 *     ...},
 *   securityParameters    [30]  SecurityParameters OPTIONAL }
 * ```
 *
 * @class
 */
export class DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1 {
    constructor(
        /**
         * @summary `versions`.
         * @public
         * @readonly
         */
        readonly versions: OPTIONAL<Versions>,
        /**
         * @summary `error`.
         * @public
         * @readonly
         */
        readonly error: DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error,
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters: OPTIONAL<SecurityParameters>
    ) {}

    /**
     * @summary Restructures an object into a DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1
     * @description
     *
     * This takes an `object` and converts it to a `DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1`.
     * @returns {DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1]: DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1[_K];
            }
        >
    ): DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1 {
        return new DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1(
            _o.versions,
            _o.error,
            _o.securityParameters
        );
    }

    /**
     * @summary Getter that returns the default value for `versions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_versions() {
        return (() => {
            const _ret = new Uint8ClampedArray(Math.max(0, 1));
            _ret[Versions_v1] = TRUE_BIT;
            return _ret;
        })();
    }
}
/* END_OF_SYMBOL_DEFINITION DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1 */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1 */
/**
 * @summary The Leading Root Component Types of DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "versions",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec("error", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.context, 30),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1 */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1 */
/**
 * @summary The Trailing Root Component Types of DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1 */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1 */
/**
 * @summary The Extension Addition Component Types of DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1 */
let _cached_decoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1: $.ASN1Decoder<
    DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1 */

/* START_OF_SYMBOL_DEFINITION _decode_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1 */
/**
 * @summary Decodes an ASN.1 element into a(n) DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1} The decoded data structure.
 */
export function _decode_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1(
    el: _Element
) {
    if (
        !_cached_decoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1
    ) {
        _cached_decoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1 = function (
            el: _Element
        ): DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1 {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let versions: OPTIONAL<Versions> =
                DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1._default_value_for_versions;
            let error!: DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error;
            let securityParameters: OPTIONAL<SecurityParameters>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                versions: (_el: _Element): void => {
                    versions = $._decode_explicit<Versions>(
                        () => _decode_Versions
                    )(_el);
                },
                error: (_el: _Element): void => {
                    error = _decode_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error(
                        _el
                    );
                },
                securityParameters: (_el: _Element): void => {
                    securityParameters = $._decode_explicit<SecurityParameters>(
                        () => _decode_SecurityParameters
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1,
                _extension_additions_list_spec_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1,
                _root_component_type_list_2_spec_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1,
                undefined
            );
            return new DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1 /* SET_CONSTRUCTOR_CALL */(
                versions,
                error,
                securityParameters
            );
        };
    }
    return _cached_decoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1 */
let _cached_encoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1: $.ASN1Encoder<
    DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1 */

/* START_OF_SYMBOL_DEFINITION _encode_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1 */
/**
 * @summary Encodes a(n) DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1, encoded as an ASN.1 Element.
 */
export function _encode_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1(
    value: DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1,
    elGetter: $.ASN1Encoder<DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1>
) {
    if (
        !_cached_encoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1
    ) {
        _cached_encoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1 = function (
            value: DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1,
            elGetter: $.ASN1Encoder<
                DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1
            >
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.versions === undefined ||
                        $.deepEq(
                            value.versions,
                            DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1._default_value_for_versions
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Versions,
                                  $.BER
                              )(value.versions, $.BER),
                        /* REQUIRED   */ _encode_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error(
                            value.error,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.securityParameters === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  30,
                                  () => _encode_SecurityParameters,
                                  $.BER
                              )(value.securityParameters, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1 */

/* eslint-enable */
