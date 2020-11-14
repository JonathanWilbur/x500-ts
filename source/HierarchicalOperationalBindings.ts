/**
 * @module HierarchicalOperationalBindings
 * @summary The ASN.1 module `HierarchicalOperationalBindings`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.hierarchicalOperationalBindings.9
 * IRI: undefined
 * EXTENSIBLE: false
 * ENCODINGREF: undefined
 * FILE: undefined
 *
 * This file was compiled by Wildboar Software's ASN.1 Compiler.
 *
 * @see {@link https://wildboarsoftware.com|Wildboar Software's Website}
 * /


/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    id_op_binding_hierarchical,
    id_op_binding_non_specific_hierarchical,
} from "./DirectoryOperationalBindingTypes";
import {
    MasterAndShadowAccessPoints,
    _decode_MasterAndShadowAccessPoints,
    _encode_MasterAndShadowAccessPoints,
} from "./DistributedOperations";
import {
    Attribute,
    DistinguishedName,
    RelativeDistinguishedName,
    _decode_Attribute,
    _decode_DistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_Attribute,
    _encode_DistinguishedName,
    _encode_RelativeDistinguishedName,
} from "./InformationFramework";
import {
    OPERATIONAL_BINDING,
    OP_BIND_ROLE,
} from "./OperationalBindingManagement";
export {
    id_op_binding_hierarchical,
    id_op_binding_non_specific_hierarchical,
} from "./DirectoryOperationalBindingTypes";
export { directorySystemAC } from "./DirectoryOSIProtocols";
export {
    MasterAndShadowAccessPoints,
    _decode_MasterAndShadowAccessPoints,
    _encode_MasterAndShadowAccessPoints,
} from "./DistributedOperations";
export {
    Attribute,
    DistinguishedName,
    RelativeDistinguishedName,
    SupportedAttributes,
    _decode_Attribute,
    _decode_DistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_Attribute,
    _encode_DistinguishedName,
    _encode_RelativeDistinguishedName,
} from "./InformationFramework";
export {
    OPERATIONAL_BINDING,
    OP_BIND_ROLE,
} from "./OperationalBindingManagement";

/**
 * @summary HierarchicalAgreement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HierarchicalAgreement ::= SEQUENCE {
 *   rdn                [0]  RelativeDistinguishedName,
 *   immediateSuperior  [1]  DistinguishedName,
 *   ... }
 * ```
 *
 * @class
 */
export class HierarchicalAgreement {
    constructor(
        /**
         * @summary `rdn`.
         * @public
         * @readonly
         */
        readonly rdn: RelativeDistinguishedName,
        /**
         * @summary `immediateSuperior`.
         * @public
         * @readonly
         */
        readonly immediateSuperior: DistinguishedName,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a HierarchicalAgreement
     * @description
     *
     * This takes an `object` and converts it to a `HierarchicalAgreement`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HierarchicalAgreement`.
     * @returns {HierarchicalAgreement}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof HierarchicalAgreement]: HierarchicalAgreement[_K] }
        >
    ): HierarchicalAgreement {
        return new HierarchicalAgreement(
            _o.rdn,
            _o.immediateSuperior,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of HierarchicalAgreement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_HierarchicalAgreement: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "rdn",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "immediateSuperior",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of HierarchicalAgreement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_HierarchicalAgreement: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of HierarchicalAgreement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_HierarchicalAgreement: $.ComponentSpec[] = [];
let _cached_decoder_for_HierarchicalAgreement: $.ASN1Decoder<
    HierarchicalAgreement
> | null = null;
let _cached_encoder_for_HierarchicalAgreement: $.ASN1Encoder<
    HierarchicalAgreement
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) HierarchicalAgreement
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HierarchicalAgreement} The decoded data structure.
 */
export function _decode_HierarchicalAgreement(el: _Element) {
    if (!_cached_decoder_for_HierarchicalAgreement) {
        _cached_decoder_for_HierarchicalAgreement = function (
            el: _Element
        ): HierarchicalAgreement {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "HierarchicalAgreement contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "rdn";
            sequence[1].name = "immediateSuperior";
            let rdn!: RelativeDistinguishedName;
            let immediateSuperior!: DistinguishedName;
            rdn = $._decode_explicit<RelativeDistinguishedName>(
                () => _decode_RelativeDistinguishedName
            )(sequence[0]);
            immediateSuperior = $._decode_explicit<DistinguishedName>(
                () => _decode_DistinguishedName
            )(sequence[1]);
            return new HierarchicalAgreement(
                rdn,
                immediateSuperior,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_HierarchicalAgreement(el);
}
/**
 * @summary Encodes a(n) HierarchicalAgreement into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HierarchicalAgreement, encoded as an ASN.1 Element.
 */
export function _encode_HierarchicalAgreement(
    value: HierarchicalAgreement,
    elGetter: $.ASN1Encoder<HierarchicalAgreement>
) {
    if (!_cached_encoder_for_HierarchicalAgreement) {
        _cached_encoder_for_HierarchicalAgreement = function (
            value: HierarchicalAgreement,
            elGetter: $.ASN1Encoder<HierarchicalAgreement>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_RelativeDistinguishedName,
                                $.BER
                            )(value.rdn, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => _encode_DistinguishedName,
                                $.BER
                            )(value.immediateSuperior, $.BER),
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
    return _cached_encoder_for_HierarchicalAgreement(value, elGetter);
}

/**
 * @summary SubentryInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubentryInfo ::= SEQUENCE {
 *   rdn   [0]  RelativeDistinguishedName,
 *   info  [1]  SET OF Attribute{{SupportedAttributes}},
 *   ... }
 * ```
 *
 * @class
 */
export class SubentryInfo {
    constructor(
        /**
         * @summary `rdn`.
         * @public
         * @readonly
         */
        readonly rdn: RelativeDistinguishedName,
        /**
         * @summary `info`.
         * @public
         * @readonly
         */
        readonly info: Attribute[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SubentryInfo
     * @description
     *
     * This takes an `object` and converts it to a `SubentryInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubentryInfo`.
     * @returns {SubentryInfo}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof SubentryInfo]: SubentryInfo[_K] }>
    ): SubentryInfo {
        return new SubentryInfo(
            _o.rdn,
            _o.info,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of SubentryInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SubentryInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "rdn",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "info",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SubentryInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SubentryInfo: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SubentryInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SubentryInfo: $.ComponentSpec[] = [];
let _cached_decoder_for_SubentryInfo: $.ASN1Decoder<SubentryInfo> | null = null;
let _cached_encoder_for_SubentryInfo: $.ASN1Encoder<SubentryInfo> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SubentryInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubentryInfo} The decoded data structure.
 */
export function _decode_SubentryInfo(el: _Element) {
    if (!_cached_decoder_for_SubentryInfo) {
        _cached_decoder_for_SubentryInfo = function (
            el: _Element
        ): SubentryInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SubentryInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "rdn";
            sequence[1].name = "info";
            let rdn!: RelativeDistinguishedName;
            let info!: Attribute[];
            rdn = $._decode_explicit<RelativeDistinguishedName>(
                () => _decode_RelativeDistinguishedName
            )(sequence[0]);
            info = $._decode_explicit<Attribute[]>(() =>
                $._decodeSetOf<Attribute>(() => _decode_Attribute)
            )(sequence[1]);
            return new SubentryInfo(rdn, info, sequence.slice(2));
        };
    }
    return _cached_decoder_for_SubentryInfo(el);
}
/**
 * @summary Encodes a(n) SubentryInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubentryInfo, encoded as an ASN.1 Element.
 */
export function _encode_SubentryInfo(
    value: SubentryInfo,
    elGetter: $.ASN1Encoder<SubentryInfo>
) {
    if (!_cached_encoder_for_SubentryInfo) {
        _cached_encoder_for_SubentryInfo = function (
            value: SubentryInfo,
            elGetter: $.ASN1Encoder<SubentryInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_RelativeDistinguishedName,
                                $.BER
                            )(value.rdn, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () =>
                                    $._encodeSetOf<Attribute>(
                                        () => _encode_Attribute,
                                        $.BER
                                    ),
                                $.BER
                            )(value.info, $.BER),
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
    return _cached_encoder_for_SubentryInfo(value, elGetter);
}

/**
 * @summary Vertex
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Vertex ::= SEQUENCE {
 *   rdn           [0]  RelativeDistinguishedName,
 *   admPointInfo  [1]  SET SIZE (1..MAX) OF Attribute{{SupportedAttributes}} OPTIONAL,
 *   subentries    [2]  SET SIZE (1..MAX) OF SubentryInfo OPTIONAL,
 *   accessPoints  [3]  MasterAndShadowAccessPoints OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class Vertex {
    constructor(
        /**
         * @summary `rdn`.
         * @public
         * @readonly
         */
        readonly rdn: RelativeDistinguishedName,
        /**
         * @summary `admPointInfo`.
         * @public
         * @readonly
         */
        readonly admPointInfo: OPTIONAL<Attribute[]>,
        /**
         * @summary `subentries`.
         * @public
         * @readonly
         */
        readonly subentries: OPTIONAL<SubentryInfo[]>,
        /**
         * @summary `accessPoints`.
         * @public
         * @readonly
         */
        readonly accessPoints: OPTIONAL<MasterAndShadowAccessPoints>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Vertex
     * @description
     *
     * This takes an `object` and converts it to a `Vertex`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Vertex`.
     * @returns {Vertex}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Vertex]: Vertex[_K] }>
    ): Vertex {
        return new Vertex(
            _o.rdn,
            _o.admPointInfo,
            _o.subentries,
            _o.accessPoints,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of Vertex
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Vertex: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "rdn",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "admPointInfo",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subentries",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "accessPoints",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Vertex
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Vertex: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Vertex
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Vertex: $.ComponentSpec[] = [];
let _cached_decoder_for_Vertex: $.ASN1Decoder<Vertex> | null = null;
let _cached_encoder_for_Vertex: $.ASN1Encoder<Vertex> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Vertex
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Vertex} The decoded data structure.
 */
export function _decode_Vertex(el: _Element) {
    if (!_cached_decoder_for_Vertex) {
        _cached_decoder_for_Vertex = function (el: _Element): Vertex {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let rdn!: RelativeDistinguishedName;
            let admPointInfo: OPTIONAL<Attribute[]>;
            let subentries: OPTIONAL<SubentryInfo[]>;
            let accessPoints: OPTIONAL<MasterAndShadowAccessPoints>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                rdn: (_el: _Element): void => {
                    rdn = $._decode_explicit<RelativeDistinguishedName>(
                        () => _decode_RelativeDistinguishedName
                    )(_el);
                },
                admPointInfo: (_el: _Element): void => {
                    admPointInfo = $._decode_explicit<Attribute[]>(() =>
                        $._decodeSetOf<Attribute>(() => _decode_Attribute)
                    )(_el);
                },
                subentries: (_el: _Element): void => {
                    subentries = $._decode_explicit<SubentryInfo[]>(() =>
                        $._decodeSetOf<SubentryInfo>(() => _decode_SubentryInfo)
                    )(_el);
                },
                accessPoints: (_el: _Element): void => {
                    accessPoints = $._decode_explicit<
                        MasterAndShadowAccessPoints
                    >(() => _decode_MasterAndShadowAccessPoints)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Vertex,
                _extension_additions_list_spec_for_Vertex,
                _root_component_type_list_2_spec_for_Vertex,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Vertex(
                /* SEQUENCE_CONSTRUCTOR_CALL */ rdn,
                admPointInfo,
                subentries,
                accessPoints,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Vertex(el);
}
/**
 * @summary Encodes a(n) Vertex into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Vertex, encoded as an ASN.1 Element.
 */
export function _encode_Vertex(value: Vertex, elGetter: $.ASN1Encoder<Vertex>) {
    if (!_cached_encoder_for_Vertex) {
        _cached_encoder_for_Vertex = function (
            value: Vertex,
            elGetter: $.ASN1Encoder<Vertex>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_RelativeDistinguishedName,
                                $.BER
                            )(value.rdn, $.BER),
                            /* IF_ABSENT  */ value.admPointInfo === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () =>
                                          $._encodeSetOf<Attribute>(
                                              () => _encode_Attribute,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.admPointInfo, $.BER),
                            /* IF_ABSENT  */ value.subentries === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSetOf<SubentryInfo>(
                                              () => _encode_SubentryInfo,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.subentries, $.BER),
                            /* IF_ABSENT  */ value.accessPoints === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_MasterAndShadowAccessPoints,
                                      $.BER
                                  )(value.accessPoints, $.BER),
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
    return _cached_encoder_for_Vertex(value, elGetter);
}

export type DITcontext<> = Vertex[]; // SequenceOfType
let _cached_decoder_for_DITcontext: $.ASN1Decoder<DITcontext> | null = null;
let _cached_encoder_for_DITcontext: $.ASN1Encoder<DITcontext> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DITcontext
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DITcontext} The decoded data structure.
 */
export function _decode_DITcontext(el: _Element) {
    if (!_cached_decoder_for_DITcontext) {
        _cached_decoder_for_DITcontext = $._decodeSequenceOf<Vertex>(
            () => _decode_Vertex
        );
    }
    return _cached_decoder_for_DITcontext(el);
}
/**
 * @summary Encodes a(n) DITcontext into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DITcontext, encoded as an ASN.1 Element.
 */
export function _encode_DITcontext(
    value: DITcontext,
    elGetter: $.ASN1Encoder<DITcontext>
) {
    if (!_cached_encoder_for_DITcontext) {
        _cached_encoder_for_DITcontext = $._encodeSequenceOf<Vertex>(
            () => _encode_Vertex,
            $.BER
        );
    }
    return _cached_encoder_for_DITcontext(value, elGetter);
}

/**
 * @summary SuperiorToSubordinate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SuperiorToSubordinate ::= SEQUENCE {
 *   contextPrefixInfo     [0]  DITcontext,
 *   entryInfo             [1]  SET SIZE (1..MAX) OF
 *                                Attribute{{SupportedAttributes}} OPTIONAL,
 *   immediateSuperiorInfo [2]  SET SIZE (1..MAX) OF
 *                                Attribute{{SupportedAttributes}} OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class SuperiorToSubordinate {
    constructor(
        /**
         * @summary `contextPrefixInfo`.
         * @public
         * @readonly
         */
        readonly contextPrefixInfo: DITcontext,
        /**
         * @summary `entryInfo`.
         * @public
         * @readonly
         */
        readonly entryInfo: OPTIONAL<Attribute[]>,
        /**
         * @summary `immediateSuperiorInfo`.
         * @public
         * @readonly
         */
        readonly immediateSuperiorInfo: OPTIONAL<Attribute[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SuperiorToSubordinate
     * @description
     *
     * This takes an `object` and converts it to a `SuperiorToSubordinate`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SuperiorToSubordinate`.
     * @returns {SuperiorToSubordinate}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof SuperiorToSubordinate]: SuperiorToSubordinate[_K] }
        >
    ): SuperiorToSubordinate {
        return new SuperiorToSubordinate(
            _o.contextPrefixInfo,
            _o.entryInfo,
            _o.immediateSuperiorInfo,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of SuperiorToSubordinate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SuperiorToSubordinate: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "contextPrefixInfo",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "entryInfo",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "immediateSuperiorInfo",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SuperiorToSubordinate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SuperiorToSubordinate: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SuperiorToSubordinate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SuperiorToSubordinate: $.ComponentSpec[] = [];
let _cached_decoder_for_SuperiorToSubordinate: $.ASN1Decoder<
    SuperiorToSubordinate
> | null = null;
let _cached_encoder_for_SuperiorToSubordinate: $.ASN1Encoder<
    SuperiorToSubordinate
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SuperiorToSubordinate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SuperiorToSubordinate} The decoded data structure.
 */
export function _decode_SuperiorToSubordinate(el: _Element) {
    if (!_cached_decoder_for_SuperiorToSubordinate) {
        _cached_decoder_for_SuperiorToSubordinate = function (
            el: _Element
        ): SuperiorToSubordinate {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let contextPrefixInfo!: DITcontext;
            let entryInfo: OPTIONAL<Attribute[]>;
            let immediateSuperiorInfo: OPTIONAL<Attribute[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                contextPrefixInfo: (_el: _Element): void => {
                    contextPrefixInfo = $._decode_explicit<DITcontext>(
                        () => _decode_DITcontext
                    )(_el);
                },
                entryInfo: (_el: _Element): void => {
                    entryInfo = $._decode_explicit<Attribute[]>(() =>
                        $._decodeSetOf<Attribute>(() => _decode_Attribute)
                    )(_el);
                },
                immediateSuperiorInfo: (_el: _Element): void => {
                    immediateSuperiorInfo = $._decode_explicit<Attribute[]>(
                        () => $._decodeSetOf<Attribute>(() => _decode_Attribute)
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SuperiorToSubordinate,
                _extension_additions_list_spec_for_SuperiorToSubordinate,
                _root_component_type_list_2_spec_for_SuperiorToSubordinate,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SuperiorToSubordinate(
                /* SEQUENCE_CONSTRUCTOR_CALL */ contextPrefixInfo,
                entryInfo,
                immediateSuperiorInfo,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SuperiorToSubordinate(el);
}
/**
 * @summary Encodes a(n) SuperiorToSubordinate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuperiorToSubordinate, encoded as an ASN.1 Element.
 */
export function _encode_SuperiorToSubordinate(
    value: SuperiorToSubordinate,
    elGetter: $.ASN1Encoder<SuperiorToSubordinate>
) {
    if (!_cached_encoder_for_SuperiorToSubordinate) {
        _cached_encoder_for_SuperiorToSubordinate = function (
            value: SuperiorToSubordinate,
            elGetter: $.ASN1Encoder<SuperiorToSubordinate>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_DITcontext,
                                $.BER
                            )(value.contextPrefixInfo, $.BER),
                            /* IF_ABSENT  */ value.entryInfo === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () =>
                                          $._encodeSetOf<Attribute>(
                                              () => _encode_Attribute,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.entryInfo, $.BER),
                            /* IF_ABSENT  */ value.immediateSuperiorInfo ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSetOf<Attribute>(
                                              () => _encode_Attribute,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.immediateSuperiorInfo, $.BER),
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
    return _cached_encoder_for_SuperiorToSubordinate(value, elGetter);
}

export type SuperiorToSubordinateModification<> = SuperiorToSubordinate; // DefinedType
let _cached_decoder_for_SuperiorToSubordinateModification: $.ASN1Decoder<
    SuperiorToSubordinateModification
> | null = null;
let _cached_encoder_for_SuperiorToSubordinateModification: $.ASN1Encoder<
    SuperiorToSubordinateModification
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SuperiorToSubordinateModification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SuperiorToSubordinateModification} The decoded data structure.
 */
export function _decode_SuperiorToSubordinateModification(el: _Element) {
    if (!_cached_decoder_for_SuperiorToSubordinateModification) {
        _cached_decoder_for_SuperiorToSubordinateModification = _decode_SuperiorToSubordinate;
    }
    return _cached_decoder_for_SuperiorToSubordinateModification(el);
}
/**
 * @summary Encodes a(n) SuperiorToSubordinateModification into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuperiorToSubordinateModification, encoded as an ASN.1 Element.
 */
export function _encode_SuperiorToSubordinateModification(
    value: SuperiorToSubordinateModification,
    elGetter: $.ASN1Encoder<SuperiorToSubordinateModification>
) {
    if (!_cached_encoder_for_SuperiorToSubordinateModification) {
        _cached_encoder_for_SuperiorToSubordinateModification = _encode_SuperiorToSubordinate;
    }
    return _cached_encoder_for_SuperiorToSubordinateModification(
        value,
        elGetter
    );
}

/**
 * @summary hierarchicalOperationalBinding_roleA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hierarchicalOperationalBinding-roleA ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {OP_BIND_ROLE}
 * @implements {OP_BIND_ROLE}
 */
export const hierarchicalOperationalBinding_roleA: OP_BIND_ROLE = {
    class: "OP-BIND-ROLE",
    decoderFor: {
        "&EstablishParam": _decode_SuperiorToSubordinate,
        "&ModifyParam": _decode_SuperiorToSubordinateModification,
        "&TerminateParam": undefined,
    },
    encoderFor: {
        "&EstablishParam": _encode_SuperiorToSubordinate,
        "&ModifyParam": _encode_SuperiorToSubordinateModification,
        "&TerminateParam": undefined,
    },
    "&establish": false /* OBJECT_FIELD_SETTING */,
    "&modify": false /* OBJECT_FIELD_SETTING */,
    "&terminate": false /* OBJECT_FIELD_SETTING */,
    "&EstablishParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ModifyParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&TerminateParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary SubordinateToSuperior
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubordinateToSuperior ::= SEQUENCE {
 *   accessPoints  [0]  MasterAndShadowAccessPoints OPTIONAL,
 *   alias         [1]  BOOLEAN DEFAULT FALSE,
 *   entryInfo     [2]  SET SIZE (1..MAX) OF Attribute{{SupportedAttributes}} OPTIONAL,
 *   subentries    [3]  SET SIZE (1..MAX) OF SubentryInfo OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class SubordinateToSuperior {
    constructor(
        /**
         * @summary `accessPoints`.
         * @public
         * @readonly
         */
        readonly accessPoints: OPTIONAL<MasterAndShadowAccessPoints>,
        /**
         * @summary `alias`.
         * @public
         * @readonly
         */
        readonly alias: OPTIONAL<BOOLEAN>,
        /**
         * @summary `entryInfo`.
         * @public
         * @readonly
         */
        readonly entryInfo: OPTIONAL<Attribute[]>,
        /**
         * @summary `subentries`.
         * @public
         * @readonly
         */
        readonly subentries: OPTIONAL<SubentryInfo[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SubordinateToSuperior
     * @description
     *
     * This takes an `object` and converts it to a `SubordinateToSuperior`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubordinateToSuperior`.
     * @returns {SubordinateToSuperior}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof SubordinateToSuperior]: SubordinateToSuperior[_K] }
        >
    ): SubordinateToSuperior {
        return new SubordinateToSuperior(
            _o.accessPoints,
            _o.alias,
            _o.entryInfo,
            _o.subentries,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `alias`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_alias() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of SubordinateToSuperior
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SubordinateToSuperior: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "accessPoints",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "alias",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "entryInfo",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subentries",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SubordinateToSuperior
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SubordinateToSuperior: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SubordinateToSuperior
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SubordinateToSuperior: $.ComponentSpec[] = [];
let _cached_decoder_for_SubordinateToSuperior: $.ASN1Decoder<
    SubordinateToSuperior
> | null = null;
let _cached_encoder_for_SubordinateToSuperior: $.ASN1Encoder<
    SubordinateToSuperior
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SubordinateToSuperior
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubordinateToSuperior} The decoded data structure.
 */
export function _decode_SubordinateToSuperior(el: _Element) {
    if (!_cached_decoder_for_SubordinateToSuperior) {
        _cached_decoder_for_SubordinateToSuperior = function (
            el: _Element
        ): SubordinateToSuperior {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let accessPoints: OPTIONAL<MasterAndShadowAccessPoints>;
            let alias: OPTIONAL<BOOLEAN> =
                SubordinateToSuperior._default_value_for_alias;
            let entryInfo: OPTIONAL<Attribute[]>;
            let subentries: OPTIONAL<SubentryInfo[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                accessPoints: (_el: _Element): void => {
                    accessPoints = $._decode_explicit<
                        MasterAndShadowAccessPoints
                    >(() => _decode_MasterAndShadowAccessPoints)(_el);
                },
                alias: (_el: _Element): void => {
                    alias = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(
                        _el
                    );
                },
                entryInfo: (_el: _Element): void => {
                    entryInfo = $._decode_explicit<Attribute[]>(() =>
                        $._decodeSetOf<Attribute>(() => _decode_Attribute)
                    )(_el);
                },
                subentries: (_el: _Element): void => {
                    subentries = $._decode_explicit<SubentryInfo[]>(() =>
                        $._decodeSetOf<SubentryInfo>(() => _decode_SubentryInfo)
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SubordinateToSuperior,
                _extension_additions_list_spec_for_SubordinateToSuperior,
                _root_component_type_list_2_spec_for_SubordinateToSuperior,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SubordinateToSuperior(
                /* SEQUENCE_CONSTRUCTOR_CALL */ accessPoints,
                alias,
                entryInfo,
                subentries,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SubordinateToSuperior(el);
}
/**
 * @summary Encodes a(n) SubordinateToSuperior into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubordinateToSuperior, encoded as an ASN.1 Element.
 */
export function _encode_SubordinateToSuperior(
    value: SubordinateToSuperior,
    elGetter: $.ASN1Encoder<SubordinateToSuperior>
) {
    if (!_cached_encoder_for_SubordinateToSuperior) {
        _cached_encoder_for_SubordinateToSuperior = function (
            value: SubordinateToSuperior,
            elGetter: $.ASN1Encoder<SubordinateToSuperior>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.accessPoints === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_MasterAndShadowAccessPoints,
                                      $.BER
                                  )(value.accessPoints, $.BER),
                            /* IF_DEFAULT */ value.alias === undefined ||
                            $.deepEq(
                                value.alias,
                                SubordinateToSuperior._default_value_for_alias
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.alias, $.BER),
                            /* IF_ABSENT  */ value.entryInfo === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSetOf<Attribute>(
                                              () => _encode_Attribute,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.entryInfo, $.BER),
                            /* IF_ABSENT  */ value.subentries === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () =>
                                          $._encodeSetOf<SubentryInfo>(
                                              () => _encode_SubentryInfo,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.subentries, $.BER),
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
    return _cached_encoder_for_SubordinateToSuperior(value, elGetter);
}

/**
 * @summary hierarchicalOperationalBinding_roleB
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hierarchicalOperationalBinding-roleB ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {OP_BIND_ROLE}
 * @implements {OP_BIND_ROLE}
 */
export const hierarchicalOperationalBinding_roleB: OP_BIND_ROLE = {
    class: "OP-BIND-ROLE",
    decoderFor: {
        "&EstablishParam": _decode_SubordinateToSuperior,
        "&ModifyParam": _decode_SubordinateToSuperior,
        "&TerminateParam": undefined,
    },
    encoderFor: {
        "&EstablishParam": _encode_SubordinateToSuperior,
        "&ModifyParam": _encode_SubordinateToSuperior,
        "&TerminateParam": undefined,
    },
    "&establish": false /* OBJECT_FIELD_SETTING */,
    "&modify": false /* OBJECT_FIELD_SETTING */,
    "&terminate": false /* OBJECT_FIELD_SETTING */,
    "&EstablishParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ModifyParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&TerminateParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary hierarchicalOperationalBinding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hierarchicalOperationalBinding OPERATIONAL-BINDING ::= {
 *   AGREEMENT             HierarchicalAgreement
 *   APPLICATION CONTEXTS  {{directorySystemAC}}
 *   ASYMMETRIC
 *     ROLE-A { -- superior DSA
 *       ESTABLISHMENT-INITIATOR  TRUE
 *       ESTABLISHMENT-PARAMETER  SuperiorToSubordinate
 *       MODIFICATION-INITIATOR   TRUE
 *       MODIFICATION-PARAMETER   SuperiorToSubordinateModification
 *       TERMINATION-INITIATOR    TRUE }
 *     ROLE-B { -- subordinate DSA
 *       ESTABLISHMENT-INITIATOR  TRUE
 *       ESTABLISHMENT-PARAMETER  SubordinateToSuperior
 *       MODIFICATION-INITIATOR   TRUE
 *       MODIFICATION-PARAMETER   SubordinateToSuperior
 *       TERMINATION-INITIATOR    TRUE }
 *   ID                    id-op-binding-hierarchical }
 * ```
 *
 * @constant
 * @type {OPERATIONAL_BINDING}
 * @implements {OPERATIONAL_BINDING}
 */
export const hierarchicalOperationalBinding: OPERATIONAL_BINDING = {
    class: "OPERATIONAL-BINDING",
    decoderFor: {
        "&Agreement": _decode_HierarchicalAgreement,
    },
    encoderFor: {
        "&Agreement": _encode_HierarchicalAgreement,
    },
    "&Cooperation": [
        /* COULD_NOT_COMPILE_SEQUENCE_OR_SET_OF_VALUE 0 */
    ] /* OBJECT_FIELD_SETTING */,
    "&roleA": hierarchicalOperationalBinding_roleA /* OBJECT_FIELD_SETTING */,
    "&roleB": hierarchicalOperationalBinding_roleB /* OBJECT_FIELD_SETTING */,
    "&id": id_op_binding_hierarchical /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Agreement": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary NonSpecificHierarchicalAgreement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NonSpecificHierarchicalAgreement ::= SEQUENCE {
 *   immediateSuperior  [1]  DistinguishedName,
 *   ... }
 * ```
 *
 * @class
 */
export class NonSpecificHierarchicalAgreement {
    constructor(
        /**
         * @summary `immediateSuperior`.
         * @public
         * @readonly
         */
        readonly immediateSuperior: DistinguishedName,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a NonSpecificHierarchicalAgreement
     * @description
     *
     * This takes an `object` and converts it to a `NonSpecificHierarchicalAgreement`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NonSpecificHierarchicalAgreement`.
     * @returns {NonSpecificHierarchicalAgreement}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof NonSpecificHierarchicalAgreement]: NonSpecificHierarchicalAgreement[_K];
            }
        >
    ): NonSpecificHierarchicalAgreement {
        return new NonSpecificHierarchicalAgreement(
            _o.immediateSuperior,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of NonSpecificHierarchicalAgreement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NonSpecificHierarchicalAgreement: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "immediateSuperior",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of NonSpecificHierarchicalAgreement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NonSpecificHierarchicalAgreement: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of NonSpecificHierarchicalAgreement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NonSpecificHierarchicalAgreement: $.ComponentSpec[] = [];
let _cached_decoder_for_NonSpecificHierarchicalAgreement: $.ASN1Decoder<
    NonSpecificHierarchicalAgreement
> | null = null;
let _cached_encoder_for_NonSpecificHierarchicalAgreement: $.ASN1Encoder<
    NonSpecificHierarchicalAgreement
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) NonSpecificHierarchicalAgreement
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NonSpecificHierarchicalAgreement} The decoded data structure.
 */
export function _decode_NonSpecificHierarchicalAgreement(el: _Element) {
    if (!_cached_decoder_for_NonSpecificHierarchicalAgreement) {
        _cached_decoder_for_NonSpecificHierarchicalAgreement = function (
            el: _Element
        ): NonSpecificHierarchicalAgreement {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "NonSpecificHierarchicalAgreement contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "immediateSuperior";
            let immediateSuperior!: DistinguishedName;
            immediateSuperior = $._decode_explicit<DistinguishedName>(
                () => _decode_DistinguishedName
            )(sequence[0]);
            return new NonSpecificHierarchicalAgreement(
                immediateSuperior,
                sequence.slice(1)
            );
        };
    }
    return _cached_decoder_for_NonSpecificHierarchicalAgreement(el);
}
/**
 * @summary Encodes a(n) NonSpecificHierarchicalAgreement into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NonSpecificHierarchicalAgreement, encoded as an ASN.1 Element.
 */
export function _encode_NonSpecificHierarchicalAgreement(
    value: NonSpecificHierarchicalAgreement,
    elGetter: $.ASN1Encoder<NonSpecificHierarchicalAgreement>
) {
    if (!_cached_encoder_for_NonSpecificHierarchicalAgreement) {
        _cached_encoder_for_NonSpecificHierarchicalAgreement = function (
            value: NonSpecificHierarchicalAgreement,
            elGetter: $.ASN1Encoder<NonSpecificHierarchicalAgreement>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => _encode_DistinguishedName,
                                $.BER
                            )(value.immediateSuperior, $.BER),
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
    return _cached_encoder_for_NonSpecificHierarchicalAgreement(
        value,
        elGetter
    );
}

export type NHOBSuperiorToSubordinate<> = SuperiorToSubordinate; // DefinedType
let _cached_decoder_for_NHOBSuperiorToSubordinate: $.ASN1Decoder<
    NHOBSuperiorToSubordinate
> | null = null;
let _cached_encoder_for_NHOBSuperiorToSubordinate: $.ASN1Encoder<
    NHOBSuperiorToSubordinate
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) NHOBSuperiorToSubordinate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NHOBSuperiorToSubordinate} The decoded data structure.
 */
export function _decode_NHOBSuperiorToSubordinate(el: _Element) {
    if (!_cached_decoder_for_NHOBSuperiorToSubordinate) {
        _cached_decoder_for_NHOBSuperiorToSubordinate = _decode_SuperiorToSubordinate;
    }
    return _cached_decoder_for_NHOBSuperiorToSubordinate(el);
}
/**
 * @summary Encodes a(n) NHOBSuperiorToSubordinate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NHOBSuperiorToSubordinate, encoded as an ASN.1 Element.
 */
export function _encode_NHOBSuperiorToSubordinate(
    value: NHOBSuperiorToSubordinate,
    elGetter: $.ASN1Encoder<NHOBSuperiorToSubordinate>
) {
    if (!_cached_encoder_for_NHOBSuperiorToSubordinate) {
        _cached_encoder_for_NHOBSuperiorToSubordinate = _encode_SuperiorToSubordinate;
    }
    return _cached_encoder_for_NHOBSuperiorToSubordinate(value, elGetter);
}

/**
 * @summary nonSpecificHierarchicalOperationalBinding_roleA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nonSpecificHierarchicalOperationalBinding-roleA ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {OP_BIND_ROLE}
 * @implements {OP_BIND_ROLE}
 */
export const nonSpecificHierarchicalOperationalBinding_roleA: OP_BIND_ROLE = {
    class: "OP-BIND-ROLE",
    decoderFor: {
        "&EstablishParam": _decode_NHOBSuperiorToSubordinate,
        "&ModifyParam": _decode_NHOBSuperiorToSubordinate,
        "&TerminateParam": undefined,
    },
    encoderFor: {
        "&EstablishParam": _encode_NHOBSuperiorToSubordinate,
        "&ModifyParam": _encode_NHOBSuperiorToSubordinate,
        "&TerminateParam": undefined,
    },
    "&modify": false /* OBJECT_FIELD_SETTING */,
    "&terminate": false /* OBJECT_FIELD_SETTING */,
    "&EstablishParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ModifyParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&TerminateParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&establish": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary NHOBSubordinateToSuperior
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NHOBSubordinateToSuperior ::= SEQUENCE {
 *   accessPoints  [0]  MasterAndShadowAccessPoints OPTIONAL,
 *   subentries    [3]  SET SIZE (1..MAX) OF SubentryInfo OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class NHOBSubordinateToSuperior {
    constructor(
        /**
         * @summary `accessPoints`.
         * @public
         * @readonly
         */
        readonly accessPoints: OPTIONAL<MasterAndShadowAccessPoints>,
        /**
         * @summary `subentries`.
         * @public
         * @readonly
         */
        readonly subentries: OPTIONAL<SubentryInfo[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a NHOBSubordinateToSuperior
     * @description
     *
     * This takes an `object` and converts it to a `NHOBSubordinateToSuperior`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NHOBSubordinateToSuperior`.
     * @returns {NHOBSubordinateToSuperior}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof NHOBSubordinateToSuperior]: NHOBSubordinateToSuperior[_K];
            }
        >
    ): NHOBSubordinateToSuperior {
        return new NHOBSubordinateToSuperior(
            _o.accessPoints,
            _o.subentries,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of NHOBSubordinateToSuperior
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NHOBSubordinateToSuperior: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "accessPoints",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subentries",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of NHOBSubordinateToSuperior
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NHOBSubordinateToSuperior: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of NHOBSubordinateToSuperior
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NHOBSubordinateToSuperior: $.ComponentSpec[] = [];
let _cached_decoder_for_NHOBSubordinateToSuperior: $.ASN1Decoder<
    NHOBSubordinateToSuperior
> | null = null;
let _cached_encoder_for_NHOBSubordinateToSuperior: $.ASN1Encoder<
    NHOBSubordinateToSuperior
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) NHOBSubordinateToSuperior
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NHOBSubordinateToSuperior} The decoded data structure.
 */
export function _decode_NHOBSubordinateToSuperior(el: _Element) {
    if (!_cached_decoder_for_NHOBSubordinateToSuperior) {
        _cached_decoder_for_NHOBSubordinateToSuperior = function (
            el: _Element
        ): NHOBSubordinateToSuperior {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let accessPoints: OPTIONAL<MasterAndShadowAccessPoints>;
            let subentries: OPTIONAL<SubentryInfo[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                accessPoints: (_el: _Element): void => {
                    accessPoints = $._decode_explicit<
                        MasterAndShadowAccessPoints
                    >(() => _decode_MasterAndShadowAccessPoints)(_el);
                },
                subentries: (_el: _Element): void => {
                    subentries = $._decode_explicit<SubentryInfo[]>(() =>
                        $._decodeSetOf<SubentryInfo>(() => _decode_SubentryInfo)
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NHOBSubordinateToSuperior,
                _extension_additions_list_spec_for_NHOBSubordinateToSuperior,
                _root_component_type_list_2_spec_for_NHOBSubordinateToSuperior,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new NHOBSubordinateToSuperior(
                /* SEQUENCE_CONSTRUCTOR_CALL */ accessPoints,
                subentries,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_NHOBSubordinateToSuperior(el);
}
/**
 * @summary Encodes a(n) NHOBSubordinateToSuperior into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NHOBSubordinateToSuperior, encoded as an ASN.1 Element.
 */
export function _encode_NHOBSubordinateToSuperior(
    value: NHOBSubordinateToSuperior,
    elGetter: $.ASN1Encoder<NHOBSubordinateToSuperior>
) {
    if (!_cached_encoder_for_NHOBSubordinateToSuperior) {
        _cached_encoder_for_NHOBSubordinateToSuperior = function (
            value: NHOBSubordinateToSuperior,
            elGetter: $.ASN1Encoder<NHOBSubordinateToSuperior>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.accessPoints === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_MasterAndShadowAccessPoints,
                                      $.BER
                                  )(value.accessPoints, $.BER),
                            /* IF_ABSENT  */ value.subentries === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () =>
                                          $._encodeSetOf<SubentryInfo>(
                                              () => _encode_SubentryInfo,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.subentries, $.BER),
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
    return _cached_encoder_for_NHOBSubordinateToSuperior(value, elGetter);
}

/**
 * @summary nonSpecificHierarchicalOperationalBinding_roleB
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nonSpecificHierarchicalOperationalBinding-roleB ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {OP_BIND_ROLE}
 * @implements {OP_BIND_ROLE}
 */
export const nonSpecificHierarchicalOperationalBinding_roleB: OP_BIND_ROLE = {
    class: "OP-BIND-ROLE",
    decoderFor: {
        "&EstablishParam": _decode_NHOBSubordinateToSuperior,
        "&ModifyParam": _decode_NHOBSubordinateToSuperior,
        "&TerminateParam": undefined,
    },
    encoderFor: {
        "&EstablishParam": _encode_NHOBSubordinateToSuperior,
        "&ModifyParam": _encode_NHOBSubordinateToSuperior,
        "&TerminateParam": undefined,
    },
    "&establish": false /* OBJECT_FIELD_SETTING */,
    "&modify": false /* OBJECT_FIELD_SETTING */,
    "&terminate": false /* OBJECT_FIELD_SETTING */,
    "&EstablishParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ModifyParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&TerminateParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary nonSpecificHierarchicalOperationalBinding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nonSpecificHierarchicalOperationalBinding OPERATIONAL-BINDING ::= {
 *   AGREEMENT             NonSpecificHierarchicalAgreement
 *   APPLICATION CONTEXTS  {{directorySystemAC}}
 *   ASYMMETRIC
 *     ROLE-A { -- superior DSA
 *       ESTABLISHMENT-PARAMETER  NHOBSuperiorToSubordinate
 *       MODIFICATION-INITIATOR   TRUE
 *       MODIFICATION-PARAMETER   NHOBSuperiorToSubordinate
 *       TERMINATION-INITIATOR    TRUE}
 *     ROLE-B { -- subordinate DSA
 *       ESTABLISHMENT-INITIATOR  TRUE
 *       ESTABLISHMENT-PARAMETER  NHOBSubordinateToSuperior
 *       MODIFICATION-INITIATOR   TRUE
 *       MODIFICATION-PARAMETER   NHOBSubordinateToSuperior
 *       TERMINATION-INITIATOR    TRUE}
 *   ID                    id-op-binding-non-specific-hierarchical }
 * ```
 *
 * @constant
 * @type {OPERATIONAL_BINDING}
 * @implements {OPERATIONAL_BINDING}
 */
export const nonSpecificHierarchicalOperationalBinding: OPERATIONAL_BINDING = {
    class: "OPERATIONAL-BINDING",
    decoderFor: {
        "&Agreement": _decode_NonSpecificHierarchicalAgreement,
    },
    encoderFor: {
        "&Agreement": _encode_NonSpecificHierarchicalAgreement,
    },
    "&Cooperation": [
        /* COULD_NOT_COMPILE_SEQUENCE_OR_SET_OF_VALUE 0 */
    ] /* OBJECT_FIELD_SETTING */,
    "&roleA": nonSpecificHierarchicalOperationalBinding_roleA /* OBJECT_FIELD_SETTING */,
    "&roleB": nonSpecificHierarchicalOperationalBinding_roleB /* OBJECT_FIELD_SETTING */,
    "&id": id_op_binding_non_specific_hierarchical /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Agreement": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* END_MODULE HierarchicalOperationalBindings */
/* eslint-enable */
