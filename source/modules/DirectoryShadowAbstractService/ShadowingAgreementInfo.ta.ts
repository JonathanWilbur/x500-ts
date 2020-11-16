/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    UnitOfReplication,
    _decode_UnitOfReplication,
    _encode_UnitOfReplication,
} from "../DirectoryShadowAbstractService/UnitOfReplication.ta";
import {
    UpdateMode,
    _decode_UpdateMode,
    _encode_UpdateMode,
} from "../DirectoryShadowAbstractService/UpdateMode.ta";
import {
    AccessPoint,
    _decode_AccessPoint,
    _encode_AccessPoint,
} from "../DistributedOperations/AccessPoint.ta";
export {
    UnitOfReplication,
    _decode_UnitOfReplication,
    _encode_UnitOfReplication,
} from "../DirectoryShadowAbstractService/UnitOfReplication.ta";
export {
    UpdateMode,
    _decode_UpdateMode,
    _encode_UpdateMode,
} from "../DirectoryShadowAbstractService/UpdateMode.ta";
export {
    AccessPoint,
    _decode_AccessPoint,
    _encode_AccessPoint,
} from "../DistributedOperations/AccessPoint.ta";

/* START_OF_SYMBOL_DEFINITION ShadowingAgreementInfo */
/**
 * @summary ShadowingAgreementInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ShadowingAgreementInfo ::= SEQUENCE {
 *   shadowSubject          UnitOfReplication,
 *   updateMode             UpdateMode DEFAULT supplierInitiated:onChange:TRUE,
 *   master                 AccessPoint OPTIONAL,
 *   secondaryShadows  [2]  BOOLEAN DEFAULT FALSE }
 * ```
 *
 * @class
 */
export class ShadowingAgreementInfo {
    constructor(
        /**
         * @summary `shadowSubject`.
         * @public
         * @readonly
         */
        readonly shadowSubject: UnitOfReplication,
        /**
         * @summary `updateMode`.
         * @public
         * @readonly
         */
        readonly updateMode: OPTIONAL<UpdateMode>,
        /**
         * @summary `master`.
         * @public
         * @readonly
         */
        readonly master: OPTIONAL<AccessPoint>,
        /**
         * @summary `secondaryShadows`.
         * @public
         * @readonly
         */
        readonly secondaryShadows: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a ShadowingAgreementInfo
     * @description
     *
     * This takes an `object` and converts it to a `ShadowingAgreementInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ShadowingAgreementInfo`.
     * @returns {ShadowingAgreementInfo}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof ShadowingAgreementInfo]: ShadowingAgreementInfo[_K] }
        >
    ): ShadowingAgreementInfo {
        return new ShadowingAgreementInfo(
            _o.shadowSubject,
            _o.updateMode,
            _o.master,
            _o.secondaryShadows
        );
    }

    /**
     * @summary Getter that returns the default value for `updateMode`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_updateMode() {
        return { supplierInitiated: { onChange: false } };
    }
    /**
     * @summary Getter that returns the default value for `secondaryShadows`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_secondaryShadows() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION ShadowingAgreementInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ShadowingAgreementInfo */
/**
 * @summary The Leading Root Component Types of ShadowingAgreementInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ShadowingAgreementInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "shadowSubject",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec("updateMode", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "master",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "secondaryShadows",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ShadowingAgreementInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ShadowingAgreementInfo */
/**
 * @summary The Trailing Root Component Types of ShadowingAgreementInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ShadowingAgreementInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ShadowingAgreementInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ShadowingAgreementInfo */
/**
 * @summary The Extension Addition Component Types of ShadowingAgreementInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ShadowingAgreementInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ShadowingAgreementInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ShadowingAgreementInfo */
let _cached_decoder_for_ShadowingAgreementInfo: $.ASN1Decoder<
    ShadowingAgreementInfo
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ShadowingAgreementInfo */

/* START_OF_SYMBOL_DEFINITION _decode_ShadowingAgreementInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) ShadowingAgreementInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ShadowingAgreementInfo} The decoded data structure.
 */
export function _decode_ShadowingAgreementInfo(el: _Element) {
    if (!_cached_decoder_for_ShadowingAgreementInfo) {
        _cached_decoder_for_ShadowingAgreementInfo = function (
            el: _Element
        ): ShadowingAgreementInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let shadowSubject!: UnitOfReplication;
            let updateMode: OPTIONAL<UpdateMode> =
                ShadowingAgreementInfo._default_value_for_updateMode;
            let master: OPTIONAL<AccessPoint>;
            let secondaryShadows: OPTIONAL<BOOLEAN> =
                ShadowingAgreementInfo._default_value_for_secondaryShadows;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                shadowSubject: (_el: _Element): void => {
                    shadowSubject = _decode_UnitOfReplication(_el);
                },
                updateMode: (_el: _Element): void => {
                    updateMode = _decode_UpdateMode(_el);
                },
                master: (_el: _Element): void => {
                    master = _decode_AccessPoint(_el);
                },
                secondaryShadows: (_el: _Element): void => {
                    secondaryShadows = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ShadowingAgreementInfo,
                _extension_additions_list_spec_for_ShadowingAgreementInfo,
                _root_component_type_list_2_spec_for_ShadowingAgreementInfo,
                undefined
            );
            return new ShadowingAgreementInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                shadowSubject,
                updateMode,
                master,
                secondaryShadows
            );
        };
    }
    return _cached_decoder_for_ShadowingAgreementInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ShadowingAgreementInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ShadowingAgreementInfo */
let _cached_encoder_for_ShadowingAgreementInfo: $.ASN1Encoder<
    ShadowingAgreementInfo
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ShadowingAgreementInfo */

/* START_OF_SYMBOL_DEFINITION _encode_ShadowingAgreementInfo */
/**
 * @summary Encodes a(n) ShadowingAgreementInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ShadowingAgreementInfo, encoded as an ASN.1 Element.
 */
export function _encode_ShadowingAgreementInfo(
    value: ShadowingAgreementInfo,
    elGetter: $.ASN1Encoder<ShadowingAgreementInfo>
) {
    if (!_cached_encoder_for_ShadowingAgreementInfo) {
        _cached_encoder_for_ShadowingAgreementInfo = function (
            value: ShadowingAgreementInfo,
            elGetter: $.ASN1Encoder<ShadowingAgreementInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_UnitOfReplication(
                            value.shadowSubject,
                            $.BER
                        ),
                        /* IF_DEFAULT */ value.updateMode === undefined ||
                        $.deepEq(
                            value.updateMode,
                            ShadowingAgreementInfo._default_value_for_updateMode
                        )
                            ? undefined
                            : _encode_UpdateMode(value.updateMode, $.BER),
                        /* IF_ABSENT  */ value.master === undefined
                            ? undefined
                            : _encode_AccessPoint(value.master, $.BER),
                        /* IF_DEFAULT */ value.secondaryShadows === undefined ||
                        $.deepEq(
                            value.secondaryShadows,
                            ShadowingAgreementInfo._default_value_for_secondaryShadows
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.secondaryShadows, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ShadowingAgreementInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ShadowingAgreementInfo */

/* eslint-enable */
