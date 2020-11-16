/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    PrivilegePolicy,
    _decode_PrivilegePolicy,
    _encode_PrivilegePolicy,
} from "../AttributeCertificateDefinitions/PrivilegePolicy.ta";
import {
    InfoSyntax,
    _decode_InfoSyntax,
    _encode_InfoSyntax,
} from "../AuthenticationFramework/InfoSyntax.ta";
export {
    PrivilegePolicy,
    _decode_PrivilegePolicy,
    _encode_PrivilegePolicy,
} from "../AttributeCertificateDefinitions/PrivilegePolicy.ta";
export {
    InfoSyntax,
    _decode_InfoSyntax,
    _encode_InfoSyntax,
} from "../AuthenticationFramework/InfoSyntax.ta";

/* START_OF_SYMBOL_DEFINITION PrivilegePolicyIdentifier */
/**
 * @summary PrivilegePolicyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivilegePolicyIdentifier ::= SEQUENCE {
 *   privilegePolicy  PrivilegePolicy,
 *   privPolSyntax    InfoSyntax,
 *   ... }
 * ```
 *
 * @class
 */
export class PrivilegePolicyIdentifier {
    constructor(
        /**
         * @summary `privilegePolicy`.
         * @public
         * @readonly
         */
        readonly privilegePolicy: PrivilegePolicy,
        /**
         * @summary `privPolSyntax`.
         * @public
         * @readonly
         */
        readonly privPolSyntax: InfoSyntax,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PrivilegePolicyIdentifier
     * @description
     *
     * This takes an `object` and converts it to a `PrivilegePolicyIdentifier`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrivilegePolicyIdentifier`.
     * @returns {PrivilegePolicyIdentifier}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof PrivilegePolicyIdentifier]: PrivilegePolicyIdentifier[_K];
            }
        >
    ): PrivilegePolicyIdentifier {
        return new PrivilegePolicyIdentifier(
            _o.privilegePolicy,
            _o.privPolSyntax,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION PrivilegePolicyIdentifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PrivilegePolicyIdentifier */
/**
 * @summary The Leading Root Component Types of PrivilegePolicyIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PrivilegePolicyIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "privilegePolicy",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "privPolSyntax",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PrivilegePolicyIdentifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PrivilegePolicyIdentifier */
/**
 * @summary The Trailing Root Component Types of PrivilegePolicyIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PrivilegePolicyIdentifier: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PrivilegePolicyIdentifier */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PrivilegePolicyIdentifier */
/**
 * @summary The Extension Addition Component Types of PrivilegePolicyIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PrivilegePolicyIdentifier: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PrivilegePolicyIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivilegePolicyIdentifier */
let _cached_decoder_for_PrivilegePolicyIdentifier: $.ASN1Decoder<
    PrivilegePolicyIdentifier
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivilegePolicyIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_PrivilegePolicyIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) PrivilegePolicyIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivilegePolicyIdentifier} The decoded data structure.
 */
export function _decode_PrivilegePolicyIdentifier(el: _Element) {
    if (!_cached_decoder_for_PrivilegePolicyIdentifier) {
        _cached_decoder_for_PrivilegePolicyIdentifier = function (
            el: _Element
        ): PrivilegePolicyIdentifier {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "PrivilegePolicyIdentifier contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "privilegePolicy";
            sequence[1].name = "privPolSyntax";
            let privilegePolicy!: PrivilegePolicy;
            let privPolSyntax!: InfoSyntax;
            privilegePolicy = _decode_PrivilegePolicy(sequence[0]);
            privPolSyntax = _decode_InfoSyntax(sequence[1]);
            return new PrivilegePolicyIdentifier(
                privilegePolicy,
                privPolSyntax,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_PrivilegePolicyIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PrivilegePolicyIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivilegePolicyIdentifier */
let _cached_encoder_for_PrivilegePolicyIdentifier: $.ASN1Encoder<
    PrivilegePolicyIdentifier
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivilegePolicyIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_PrivilegePolicyIdentifier */
/**
 * @summary Encodes a(n) PrivilegePolicyIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivilegePolicyIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_PrivilegePolicyIdentifier(
    value: PrivilegePolicyIdentifier,
    elGetter: $.ASN1Encoder<PrivilegePolicyIdentifier>
) {
    if (!_cached_encoder_for_PrivilegePolicyIdentifier) {
        _cached_encoder_for_PrivilegePolicyIdentifier = function (
            value: PrivilegePolicyIdentifier,
            elGetter: $.ASN1Encoder<PrivilegePolicyIdentifier>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_PrivilegePolicy(
                                value.privilegePolicy,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_InfoSyntax(
                                value.privPolSyntax,
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
    return _cached_encoder_for_PrivilegePolicyIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PrivilegePolicyIdentifier */

/* eslint-enable */
