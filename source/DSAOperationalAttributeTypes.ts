/**
 * @module DSAOperationalAttributeTypes
 * @summary The ASN.1 module `DSAOperationalAttributeTypes`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.dsaOperationalAttributeTypes.9
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
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    BOOLEAN,
    INTEGER,
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AccessPoint,
    _decode_AccessPoint,
    _decode_DitBridgeKnowledge,
    _decode_MasterAndShadowAccessPoints,
    _encode_AccessPoint,
    _encode_DitBridgeKnowledge,
    _encode_MasterAndShadowAccessPoints,
} from "./DistributedOperations";
import * as InformationFramework from "./InformationFramework";
import {
    ATTRIBUTE,
    MATCHING_RULE,
    Name,
    _decode_Name,
    _encode_Name,
} from "./InformationFramework";
import {
    OperationalBindingID,
    _decode_OperationalBindingID,
    _encode_OperationalBindingID,
} from "./OperationalBindingManagement";
import {
    bitStringMatch,
    directoryStringFirstComponentMatch,
    PresentationAddress,
    ProtocolInformation,
    _decode_PresentationAddress,
    _decode_ProtocolInformation,
    _encode_PresentationAddress,
    _encode_ProtocolInformation,
} from "./SelectedAttributeTypes";
import { id_doa, id_kmr } from "./UsefulDefinitions";
export {
    AccessPoint,
    DitBridgeKnowledge,
    MasterAndShadowAccessPoints,
    _decode_AccessPoint,
    _decode_DitBridgeKnowledge,
    _decode_MasterAndShadowAccessPoints,
    _encode_AccessPoint,
    _encode_DitBridgeKnowledge,
    _encode_MasterAndShadowAccessPoints,
} from "./DistributedOperations";
export {
    ATTRIBUTE,
    MATCHING_RULE,
    Name,
    _decode_Name,
    _encode_Name,
} from "./InformationFramework";
export {
    OperationalBindingID,
    _decode_OperationalBindingID,
    _encode_OperationalBindingID,
} from "./OperationalBindingManagement";
export {
    bitStringMatch,
    directoryStringFirstComponentMatch,
    PresentationAddress,
    ProtocolInformation,
    _decode_PresentationAddress,
    _decode_ProtocolInformation,
    _encode_PresentationAddress,
    _encode_ProtocolInformation,
} from "./SelectedAttributeTypes";
export { id_doa, id_kmr } from "./UsefulDefinitions";

/**
 * @summary DSEType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DSEType  ::=  BIT STRING {
 *   root           (0),  -- root DSE
 *   glue           (1),  -- represents knowledge of a name only
 *   cp             (2),  -- context prefix
 *   entry          (3),  -- object entry
 *   alias          (4),  -- alias entry
 *   subr           (5),  -- subordinate reference
 *   nssr           (6),  -- non-specific subordinate reference
 *   supr           (7),  -- superior reference
 *   xr             (8),  -- cross reference
 *   admPoint       (9),  -- administrative point
 *   subentry       (10), -- subentry
 *   shadow         (11), -- shadow copy
 *   immSupr        (13), -- immediate superior reference
 *   rhob           (14), -- rhob information
 *   sa             (15), -- subordinate reference to alias entry
 *   dsSubentry     (16), -- DSA Specific subentry
 *   familyMember   (17), -- family member
 *   ditBridge      (18)}
 * ```
 */
export type DSEType = BIT_STRING;
/**
 * @summary DSEType_root
 * @constant
 */
export const DSEType_root: number = 0; /* LONG_NAMED_BIT */
/**
 * @summary DSEType_glue
 * @constant
 */
export const DSEType_glue: number = 1; /* LONG_NAMED_BIT */
/**
 * @summary DSEType_cp
 * @constant
 */
export const DSEType_cp: number = 2; /* LONG_NAMED_BIT */
/**
 * @summary DSEType_entry
 * @constant
 */
export const DSEType_entry: number = 3; /* LONG_NAMED_BIT */
/**
 * @summary DSEType_alias
 * @constant
 */
export const DSEType_alias: number = 4; /* LONG_NAMED_BIT */
/**
 * @summary DSEType_subr
 * @constant
 */
export const DSEType_subr: number = 5; /* LONG_NAMED_BIT */
/**
 * @summary DSEType_nssr
 * @constant
 */
export const DSEType_nssr: number = 6; /* LONG_NAMED_BIT */
/**
 * @summary DSEType_supr
 * @constant
 */
export const DSEType_supr: number = 7; /* LONG_NAMED_BIT */
/**
 * @summary DSEType_xr
 * @constant
 */
export const DSEType_xr: number = 8; /* LONG_NAMED_BIT */
/**
 * @summary DSEType_admPoint
 * @constant
 */
export const DSEType_admPoint: number = 9; /* LONG_NAMED_BIT */
/**
 * @summary DSEType_subentry
 * @constant
 */
export const DSEType_subentry: number = 10; /* LONG_NAMED_BIT */
/**
 * @summary DSEType_shadow
 * @constant
 */
export const DSEType_shadow: number = 11; /* LONG_NAMED_BIT */
/**
 * @summary DSEType_immSupr
 * @constant
 */
export const DSEType_immSupr: number = 13; /* LONG_NAMED_BIT */
/**
 * @summary DSEType_rhob
 * @constant
 */
export const DSEType_rhob: number = 14; /* LONG_NAMED_BIT */
/**
 * @summary DSEType_sa
 * @constant
 */
export const DSEType_sa: number = 15; /* LONG_NAMED_BIT */
/**
 * @summary DSEType_dsSubentry
 * @constant
 */
export const DSEType_dsSubentry: number = 16; /* LONG_NAMED_BIT */
/**
 * @summary DSEType_familyMember
 * @constant
 */
export const DSEType_familyMember: number = 17; /* LONG_NAMED_BIT */
/**
 * @summary DSEType_ditBridge
 * @constant
 */
export const DSEType_ditBridge: number = 18; /* LONG_NAMED_BIT */
let _cached_decoder_for_DSEType: $.ASN1Decoder<DSEType> | null = null;
let _cached_encoder_for_DSEType: $.ASN1Encoder<DSEType> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DSEType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DSEType} The decoded data structure.
 */
export function _decode_DSEType(el: _Element) {
    if (!_cached_decoder_for_DSEType) {
        _cached_decoder_for_DSEType = $._decodeBitString;
    }
    return _cached_decoder_for_DSEType(el);
}
/**
 * @summary Encodes a(n) DSEType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSEType, encoded as an ASN.1 Element.
 */
export function _encode_DSEType(
    value: DSEType,
    elGetter: $.ASN1Encoder<DSEType>
) {
    if (!_cached_encoder_for_DSEType) {
        _cached_encoder_for_DSEType = $._encodeBitString;
    }
    return _cached_encoder_for_DSEType(value, elGetter);
}

/**
 * @summary id_doa_dseType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-doa-dseType                  OBJECT IDENTIFIER ::= {id-doa 0}
 * ```
 *
 * @constant
 */
export const id_doa_dseType: OBJECT_IDENTIFIER = new _OID([0], id_doa);

/**
 * @summary dseType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dseType ATTRIBUTE ::= {
 *   WITH SYNTAX             DSEType
 *   EQUALITY MATCHING RULE  bitStringMatch
 *   SINGLE VALUE            TRUE
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   dSAOperation
 *   ID                      id-doa-dseType }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const dseType: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DSEType,
    },
    encoderFor: {
        "&Type": _encode_DSEType,
    },
    "&equality-match": bitStringMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_dSAOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_doa_dseType /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_kmr_accessPointMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-kmr-accessPointMatch         OBJECT IDENTIFIER ::= {id-kmr 0}
 * ```
 *
 * @constant
 */
export const id_kmr_accessPointMatch: OBJECT_IDENTIFIER = new _OID([0], id_kmr);

/**
 * @summary accessPointMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * accessPointMatch MATCHING-RULE ::= {
 *   SYNTAX  Name
 *   ID      id-kmr-accessPointMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const accessPointMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_Name,
    },
    encoderFor: {
        "&AssertionType": _encode_Name,
    },
    "&id": id_kmr_accessPointMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_doa_myAccessPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-doa-myAccessPoint            OBJECT IDENTIFIER ::= {id-doa 1}
 * ```
 *
 * @constant
 */
export const id_doa_myAccessPoint: OBJECT_IDENTIFIER = new _OID([1], id_doa);

/**
 * @summary myAccessPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * myAccessPoint ATTRIBUTE ::= {
 *   WITH SYNTAX             AccessPoint
 *   EQUALITY MATCHING RULE  accessPointMatch
 *   SINGLE VALUE            TRUE
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   dSAOperation
 *   ID                      id-doa-myAccessPoint }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const myAccessPoint: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_AccessPoint,
    },
    encoderFor: {
        "&Type": _encode_AccessPoint,
    },
    "&equality-match": accessPointMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_dSAOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_doa_myAccessPoint /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_doa_superiorKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-doa-superiorKnowledge        OBJECT IDENTIFIER ::= {id-doa 2}
 * ```
 *
 * @constant
 */
export const id_doa_superiorKnowledge: OBJECT_IDENTIFIER = new _OID(
    [2],
    id_doa
);

/**
 * @summary superiorKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * superiorKnowledge ATTRIBUTE ::= {
 *   WITH SYNTAX             AccessPoint
 *   EQUALITY MATCHING RULE  accessPointMatch
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   dSAOperation
 *   ID                      id-doa-superiorKnowledge }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const superiorKnowledge: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_AccessPoint,
    },
    encoderFor: {
        "&Type": _encode_AccessPoint,
    },
    "&equality-match": accessPointMatch /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_dSAOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_doa_superiorKnowledge /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_kmr_masterShadowMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-kmr-masterShadowMatch        OBJECT IDENTIFIER ::= {id-kmr 1}
 * ```
 *
 * @constant
 */
export const id_kmr_masterShadowMatch: OBJECT_IDENTIFIER = new _OID(
    [1],
    id_kmr
);

/**
 * @summary masterAndShadowAccessPointsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * masterAndShadowAccessPointsMatch MATCHING-RULE ::= {
 *   SYNTAX  SET OF Name
 *   ID      id-kmr-masterShadowMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const masterAndShadowAccessPointsMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeSetOf<Name>(() => _decode_Name),
    },
    encoderFor: {
        "&AssertionType": $._encodeSetOf<Name>(() => _encode_Name, $.BER),
    },
    "&id": id_kmr_masterShadowMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_doa_specificKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-doa-specificKnowledge        OBJECT IDENTIFIER ::= {id-doa 3}
 * ```
 *
 * @constant
 */
export const id_doa_specificKnowledge: OBJECT_IDENTIFIER = new _OID(
    [3],
    id_doa
);

/**
 * @summary specificKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * specificKnowledge ATTRIBUTE ::= {
 *   WITH SYNTAX             MasterAndShadowAccessPoints
 *   EQUALITY MATCHING RULE  masterAndShadowAccessPointsMatch
 *   SINGLE VALUE            TRUE
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   distributedOperation
 *   ID                      id-doa-specificKnowledge }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const specificKnowledge: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_MasterAndShadowAccessPoints,
    },
    encoderFor: {
        "&Type": _encode_MasterAndShadowAccessPoints,
    },
    "&equality-match": masterAndShadowAccessPointsMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_distributedOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_doa_specificKnowledge /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_doa_nonSpecificKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-doa-nonSpecificKnowledge     OBJECT IDENTIFIER ::= {id-doa 4}
 * ```
 *
 * @constant
 */
export const id_doa_nonSpecificKnowledge: OBJECT_IDENTIFIER = new _OID(
    [4],
    id_doa
);

/**
 * @summary nonSpecificKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nonSpecificKnowledge ATTRIBUTE ::= {
 *   WITH SYNTAX             MasterAndShadowAccessPoints
 *   EQUALITY MATCHING RULE  masterAndShadowAccessPointsMatch
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   distributedOperation
 *   ID                      id-doa-nonSpecificKnowledge }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const nonSpecificKnowledge: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_MasterAndShadowAccessPoints,
    },
    encoderFor: {
        "&Type": _encode_MasterAndShadowAccessPoints,
    },
    "&equality-match": masterAndShadowAccessPointsMatch /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_distributedOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_doa_nonSpecificKnowledge /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary SupplierOrConsumer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupplierOrConsumer ::= SET {
 *   COMPONENTS OF              AccessPoint, -- supplier or consumer
 *   agreementID           [3]  OperationalBindingID,
 *   ... }
 * ```
 *
 * @class
 */
export class SupplierOrConsumer {
    constructor(
        /**
         * @summary `ae_title`.
         * @public
         * @readonly
         */
        readonly ae_title: Name /* REPLICATED_COMPONENT */,
        /**
         * @summary `address`.
         * @public
         * @readonly
         */
        readonly address: PresentationAddress /* REPLICATED_COMPONENT */,
        /**
         * @summary `protocolInformation`.
         * @public
         * @readonly
         */
        readonly protocolInformation: OPTIONAL<
            ProtocolInformation[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `agreementID`.
         * @public
         * @readonly
         */
        readonly agreementID: OperationalBindingID,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SupplierOrConsumer
     * @description
     *
     * This takes an `object` and converts it to a `SupplierOrConsumer`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SupplierOrConsumer`.
     * @returns {SupplierOrConsumer}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof SupplierOrConsumer]: SupplierOrConsumer[_K] }
        >
    ): SupplierOrConsumer {
        return new SupplierOrConsumer(
            _o.ae_title,
            _o.address,
            _o.protocolInformation,
            _o.agreementID,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of SupplierOrConsumer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SupplierOrConsumer: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "ae-title",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "address",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "protocolInformation",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "agreementID",
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SupplierOrConsumer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SupplierOrConsumer: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SupplierOrConsumer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SupplierOrConsumer: $.ComponentSpec[] = [];
let _cached_decoder_for_SupplierOrConsumer: $.ASN1Decoder<
    SupplierOrConsumer
> | null = null;
let _cached_encoder_for_SupplierOrConsumer: $.ASN1Encoder<
    SupplierOrConsumer
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SupplierOrConsumer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupplierOrConsumer} The decoded data structure.
 */
export function _decode_SupplierOrConsumer(el: _Element) {
    if (!_cached_decoder_for_SupplierOrConsumer) {
        _cached_decoder_for_SupplierOrConsumer = function (
            el: _Element
        ): SupplierOrConsumer {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let ae_title!: Name;
            let address!: PresentationAddress;
            let protocolInformation: OPTIONAL<ProtocolInformation[]>;
            let agreementID!: OperationalBindingID;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "ae-title": (_el: _Element): void => {
                    ae_title = $._decode_explicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                address: (_el: _Element): void => {
                    address = $._decode_explicit<PresentationAddress>(
                        () => _decode_PresentationAddress
                    )(_el);
                },
                protocolInformation: (_el: _Element): void => {
                    protocolInformation = $._decode_explicit<
                        ProtocolInformation[]
                    >(() =>
                        $._decodeSetOf<ProtocolInformation>(
                            () => _decode_ProtocolInformation
                        )
                    )(_el);
                },
                agreementID: (_el: _Element): void => {
                    agreementID = $._decode_explicit<OperationalBindingID>(
                        () => _decode_OperationalBindingID
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SupplierOrConsumer,
                _extension_additions_list_spec_for_SupplierOrConsumer,
                _root_component_type_list_2_spec_for_SupplierOrConsumer,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SupplierOrConsumer(
                /* SET_CONSTRUCTOR_CALL */ ae_title,
                address,
                protocolInformation,
                agreementID,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SupplierOrConsumer(el);
}
/**
 * @summary Encodes a(n) SupplierOrConsumer into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupplierOrConsumer, encoded as an ASN.1 Element.
 */
export function _encode_SupplierOrConsumer(
    value: SupplierOrConsumer,
    elGetter: $.ASN1Encoder<SupplierOrConsumer>
) {
    if (!_cached_encoder_for_SupplierOrConsumer) {
        _cached_encoder_for_SupplierOrConsumer = function (
            value: SupplierOrConsumer,
            elGetter: $.ASN1Encoder<SupplierOrConsumer>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_Name,
                                $.BER
                            )(value.ae_title, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => _encode_PresentationAddress,
                                $.BER
                            )(value.address, $.BER),
                            /* IF_ABSENT  */ value.protocolInformation ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSetOf<ProtocolInformation>(
                                              () => _encode_ProtocolInformation,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.protocolInformation, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                3,
                                () => _encode_OperationalBindingID,
                                $.BER
                            )(value.agreementID, $.BER),
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
    return _cached_encoder_for_SupplierOrConsumer(value, elGetter);
}

/**
 * @summary SupplierInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupplierInformation ::= SET {
 *   COMPONENTS OF              SupplierOrConsumer, -- supplier
 *   supplier-is-master    [4]  BOOLEAN DEFAULT TRUE,
 *   non-supplying-master  [5]  AccessPoint OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class SupplierInformation {
    constructor(
        /**
         * @summary `ae_title`.
         * @public
         * @readonly
         */
        readonly ae_title: Name /* REPLICATED_COMPONENT */,
        /**
         * @summary `address`.
         * @public
         * @readonly
         */
        readonly address: PresentationAddress /* REPLICATED_COMPONENT */,
        /**
         * @summary `protocolInformation`.
         * @public
         * @readonly
         */
        readonly protocolInformation: OPTIONAL<
            ProtocolInformation[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `agreementID`.
         * @public
         * @readonly
         */
        readonly agreementID: OperationalBindingID /* REPLICATED_COMPONENT */,
        /**
         * @summary `supplier_is_master`.
         * @public
         * @readonly
         */
        readonly supplier_is_master: OPTIONAL<BOOLEAN>,
        /**
         * @summary `non_supplying_master`.
         * @public
         * @readonly
         */
        readonly non_supplying_master: OPTIONAL<AccessPoint>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SupplierInformation
     * @description
     *
     * This takes an `object` and converts it to a `SupplierInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SupplierInformation`.
     * @returns {SupplierInformation}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof SupplierInformation]: SupplierInformation[_K] }
        >
    ): SupplierInformation {
        return new SupplierInformation(
            _o.ae_title,
            _o.address,
            _o.protocolInformation,
            _o.agreementID,
            _o.supplier_is_master,
            _o.non_supplying_master,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `supplier_is_master`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_supplier_is_master() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of SupplierInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SupplierInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "ae-title",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "address",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "protocolInformation",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "agreementID",
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "supplier-is-master",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "non-supplying-master",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SupplierInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SupplierInformation: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SupplierInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SupplierInformation: $.ComponentSpec[] = [];
let _cached_decoder_for_SupplierInformation: $.ASN1Decoder<
    SupplierInformation
> | null = null;
let _cached_encoder_for_SupplierInformation: $.ASN1Encoder<
    SupplierInformation
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SupplierInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupplierInformation} The decoded data structure.
 */
export function _decode_SupplierInformation(el: _Element) {
    if (!_cached_decoder_for_SupplierInformation) {
        _cached_decoder_for_SupplierInformation = function (
            el: _Element
        ): SupplierInformation {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let ae_title!: Name;
            let address!: PresentationAddress;
            let protocolInformation: OPTIONAL<ProtocolInformation[]>;
            let agreementID!: OperationalBindingID;
            let supplier_is_master: OPTIONAL<BOOLEAN> =
                SupplierInformation._default_value_for_supplier_is_master;
            let non_supplying_master: OPTIONAL<AccessPoint>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "ae-title": (_el: _Element): void => {
                    ae_title = $._decode_explicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                address: (_el: _Element): void => {
                    address = $._decode_explicit<PresentationAddress>(
                        () => _decode_PresentationAddress
                    )(_el);
                },
                protocolInformation: (_el: _Element): void => {
                    protocolInformation = $._decode_explicit<
                        ProtocolInformation[]
                    >(() =>
                        $._decodeSetOf<ProtocolInformation>(
                            () => _decode_ProtocolInformation
                        )
                    )(_el);
                },
                agreementID: (_el: _Element): void => {
                    agreementID = $._decode_explicit<OperationalBindingID>(
                        () => _decode_OperationalBindingID
                    )(_el);
                },
                "supplier-is-master": (_el: _Element): void => {
                    supplier_is_master = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                "non-supplying-master": (_el: _Element): void => {
                    non_supplying_master = $._decode_explicit<AccessPoint>(
                        () => _decode_AccessPoint
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SupplierInformation,
                _extension_additions_list_spec_for_SupplierInformation,
                _root_component_type_list_2_spec_for_SupplierInformation,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SupplierInformation(
                /* SET_CONSTRUCTOR_CALL */ ae_title,
                address,
                protocolInformation,
                agreementID,
                supplier_is_master,
                non_supplying_master,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SupplierInformation(el);
}
/**
 * @summary Encodes a(n) SupplierInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupplierInformation, encoded as an ASN.1 Element.
 */
export function _encode_SupplierInformation(
    value: SupplierInformation,
    elGetter: $.ASN1Encoder<SupplierInformation>
) {
    if (!_cached_encoder_for_SupplierInformation) {
        _cached_encoder_for_SupplierInformation = function (
            value: SupplierInformation,
            elGetter: $.ASN1Encoder<SupplierInformation>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_Name,
                                $.BER
                            )(value.ae_title, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => _encode_PresentationAddress,
                                $.BER
                            )(value.address, $.BER),
                            /* IF_ABSENT  */ value.protocolInformation ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSetOf<ProtocolInformation>(
                                              () => _encode_ProtocolInformation,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.protocolInformation, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                3,
                                () => _encode_OperationalBindingID,
                                $.BER
                            )(value.agreementID, $.BER),
                            /* IF_DEFAULT */ value.supplier_is_master ===
                                undefined ||
                            $.deepEq(
                                value.supplier_is_master,
                                SupplierInformation._default_value_for_supplier_is_master
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.supplier_is_master, $.BER),
                            /* IF_ABSENT  */ value.non_supplying_master ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      5,
                                      () => _encode_AccessPoint,
                                      $.BER
                                  )(value.non_supplying_master, $.BER),
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
    return _cached_encoder_for_SupplierInformation(value, elGetter);
}

/**
 * @summary supplierOrConsumerInformationMatch_AssertionType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supplierOrConsumerInformationMatch-AssertionType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class supplierOrConsumerInformationMatch_AssertionType {
    constructor(
        /**
         * @summary `ae_title`.
         * @public
         * @readonly
         */
        readonly ae_title: Name,
        /**
         * @summary `agreement_identifier`.
         * @public
         * @readonly
         */
        readonly agreement_identifier: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a supplierOrConsumerInformationMatch_AssertionType
     * @description
     *
     * This takes an `object` and converts it to a `supplierOrConsumerInformationMatch_AssertionType`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `supplierOrConsumerInformationMatch_AssertionType`.
     * @returns {supplierOrConsumerInformationMatch_AssertionType}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof supplierOrConsumerInformationMatch_AssertionType]: supplierOrConsumerInformationMatch_AssertionType[_K];
            }
        >
    ): supplierOrConsumerInformationMatch_AssertionType {
        return new supplierOrConsumerInformationMatch_AssertionType(
            _o.ae_title,
            _o.agreement_identifier
        );
    }
}
/**
 * @summary The Leading Root Component Types of supplierOrConsumerInformationMatch_AssertionType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_supplierOrConsumerInformationMatch_AssertionType: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "ae-title",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "agreement-identifier",
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of supplierOrConsumerInformationMatch_AssertionType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_supplierOrConsumerInformationMatch_AssertionType: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of supplierOrConsumerInformationMatch_AssertionType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_supplierOrConsumerInformationMatch_AssertionType: $.ComponentSpec[] = [];
let _cached_decoder_for_supplierOrConsumerInformationMatch_AssertionType: $.ASN1Decoder<
    supplierOrConsumerInformationMatch_AssertionType
> | null = null;
let _cached_encoder_for_supplierOrConsumerInformationMatch_AssertionType: $.ASN1Encoder<
    supplierOrConsumerInformationMatch_AssertionType
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) supplierOrConsumerInformationMatch_AssertionType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {supplierOrConsumerInformationMatch_AssertionType} The decoded data structure.
 */
export function _decode_supplierOrConsumerInformationMatch_AssertionType(
    el: _Element
) {
    if (!_cached_decoder_for_supplierOrConsumerInformationMatch_AssertionType) {
        _cached_decoder_for_supplierOrConsumerInformationMatch_AssertionType = function (
            el: _Element
        ): supplierOrConsumerInformationMatch_AssertionType {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let ae_title!: Name;
            let agreement_identifier!: INTEGER;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "ae-title": (_el: _Element): void => {
                    ae_title = $._decode_explicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                "agreement-identifier": (_el: _Element): void => {
                    agreement_identifier = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_supplierOrConsumerInformationMatch_AssertionType,
                _extension_additions_list_spec_for_supplierOrConsumerInformationMatch_AssertionType,
                _root_component_type_list_2_spec_for_supplierOrConsumerInformationMatch_AssertionType,
                undefined
            );
            return new supplierOrConsumerInformationMatch_AssertionType(
                /* SET_CONSTRUCTOR_CALL */ ae_title,
                agreement_identifier
            );
        };
    }
    return _cached_decoder_for_supplierOrConsumerInformationMatch_AssertionType(
        el
    );
}
/**
 * @summary Encodes a(n) supplierOrConsumerInformationMatch_AssertionType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The supplierOrConsumerInformationMatch_AssertionType, encoded as an ASN.1 Element.
 */
export function _encode_supplierOrConsumerInformationMatch_AssertionType(
    value: supplierOrConsumerInformationMatch_AssertionType,
    elGetter: $.ASN1Encoder<supplierOrConsumerInformationMatch_AssertionType>
) {
    if (!_cached_encoder_for_supplierOrConsumerInformationMatch_AssertionType) {
        _cached_encoder_for_supplierOrConsumerInformationMatch_AssertionType = function (
            value: supplierOrConsumerInformationMatch_AssertionType,
            elGetter: $.ASN1Encoder<
                supplierOrConsumerInformationMatch_AssertionType
            >
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_Name,
                            $.BER
                        )(value.ae_title, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            2,
                            () => $._encodeInteger,
                            $.BER
                        )(value.agreement_identifier, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_supplierOrConsumerInformationMatch_AssertionType(
        value,
        elGetter
    );
}

/**
 * @summary id_kmr_supplierConsumerMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-kmr-supplierConsumerMatch    OBJECT IDENTIFIER ::= {id-kmr 2}
 * ```
 *
 * @constant
 */
export const id_kmr_supplierConsumerMatch: OBJECT_IDENTIFIER = new _OID(
    [2],
    id_kmr
);

/**
 * @summary supplierOrConsumerInformationMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supplierOrConsumerInformationMatch MATCHING-RULE ::= {
 *   SYNTAX SET {
 *     ae-title              [0]  Name,
 *     agreement-identifier  [2]  INTEGER}
 *   ID      id-kmr-supplierConsumerMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const supplierOrConsumerInformationMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_supplierOrConsumerInformationMatch_AssertionType,
    },
    encoderFor: {
        "&AssertionType": _encode_supplierOrConsumerInformationMatch_AssertionType,
    },
    "&id": id_kmr_supplierConsumerMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_doa_supplierKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-doa-supplierKnowledge        OBJECT IDENTIFIER ::= {id-doa 5}
 * ```
 *
 * @constant
 */
export const id_doa_supplierKnowledge: OBJECT_IDENTIFIER = new _OID(
    [5],
    id_doa
);

/**
 * @summary supplierKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supplierKnowledge ATTRIBUTE ::= {
 *   WITH SYNTAX             SupplierInformation
 *   EQUALITY MATCHING RULE  supplierOrConsumerInformationMatch
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   dSAOperation
 *   ID                      id-doa-supplierKnowledge }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const supplierKnowledge: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SupplierInformation,
    },
    encoderFor: {
        "&Type": _encode_SupplierInformation,
    },
    "&equality-match": supplierOrConsumerInformationMatch /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_dSAOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_doa_supplierKnowledge /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

export type ConsumerInformation<> = SupplierOrConsumer; // DefinedType
let _cached_decoder_for_ConsumerInformation: $.ASN1Decoder<
    ConsumerInformation
> | null = null;
let _cached_encoder_for_ConsumerInformation: $.ASN1Encoder<
    ConsumerInformation
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ConsumerInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConsumerInformation} The decoded data structure.
 */
export function _decode_ConsumerInformation(el: _Element) {
    if (!_cached_decoder_for_ConsumerInformation) {
        _cached_decoder_for_ConsumerInformation = _decode_SupplierOrConsumer;
    }
    return _cached_decoder_for_ConsumerInformation(el);
}
/**
 * @summary Encodes a(n) ConsumerInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConsumerInformation, encoded as an ASN.1 Element.
 */
export function _encode_ConsumerInformation(
    value: ConsumerInformation,
    elGetter: $.ASN1Encoder<ConsumerInformation>
) {
    if (!_cached_encoder_for_ConsumerInformation) {
        _cached_encoder_for_ConsumerInformation = _encode_SupplierOrConsumer;
    }
    return _cached_encoder_for_ConsumerInformation(value, elGetter);
}

/**
 * @summary id_doa_consumerKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-doa-consumerKnowledge        OBJECT IDENTIFIER ::= {id-doa 6}
 * ```
 *
 * @constant
 */
export const id_doa_consumerKnowledge: OBJECT_IDENTIFIER = new _OID(
    [6],
    id_doa
);

/**
 * @summary consumerKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * consumerKnowledge ATTRIBUTE ::= {
 *   WITH SYNTAX             ConsumerInformation
 *   EQUALITY MATCHING RULE  supplierOrConsumerInformationMatch
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   dSAOperation
 *   ID                      id-doa-consumerKnowledge }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const consumerKnowledge: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ConsumerInformation,
    },
    encoderFor: {
        "&Type": _encode_ConsumerInformation,
    },
    "&equality-match": supplierOrConsumerInformationMatch /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_dSAOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_doa_consumerKnowledge /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary SupplierAndConsumers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupplierAndConsumers ::= SET {
 *   COMPONENTS OF         AccessPoint, -- supplier
 *   consumers        [3]  SET OF AccessPoint,
 *   ... }
 * ```
 *
 * @class
 */
export class SupplierAndConsumers {
    constructor(
        /**
         * @summary `ae_title`.
         * @public
         * @readonly
         */
        readonly ae_title: Name /* REPLICATED_COMPONENT */,
        /**
         * @summary `address`.
         * @public
         * @readonly
         */
        readonly address: PresentationAddress /* REPLICATED_COMPONENT */,
        /**
         * @summary `protocolInformation`.
         * @public
         * @readonly
         */
        readonly protocolInformation: OPTIONAL<
            ProtocolInformation[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `consumers`.
         * @public
         * @readonly
         */
        readonly consumers: AccessPoint[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SupplierAndConsumers
     * @description
     *
     * This takes an `object` and converts it to a `SupplierAndConsumers`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SupplierAndConsumers`.
     * @returns {SupplierAndConsumers}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof SupplierAndConsumers]: SupplierAndConsumers[_K] }
        >
    ): SupplierAndConsumers {
        return new SupplierAndConsumers(
            _o.ae_title,
            _o.address,
            _o.protocolInformation,
            _o.consumers,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of SupplierAndConsumers
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SupplierAndConsumers: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "ae-title",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "address",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "protocolInformation",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "consumers",
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SupplierAndConsumers
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SupplierAndConsumers: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SupplierAndConsumers
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SupplierAndConsumers: $.ComponentSpec[] = [];
let _cached_decoder_for_SupplierAndConsumers: $.ASN1Decoder<
    SupplierAndConsumers
> | null = null;
let _cached_encoder_for_SupplierAndConsumers: $.ASN1Encoder<
    SupplierAndConsumers
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SupplierAndConsumers
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupplierAndConsumers} The decoded data structure.
 */
export function _decode_SupplierAndConsumers(el: _Element) {
    if (!_cached_decoder_for_SupplierAndConsumers) {
        _cached_decoder_for_SupplierAndConsumers = function (
            el: _Element
        ): SupplierAndConsumers {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let ae_title!: Name;
            let address!: PresentationAddress;
            let protocolInformation: OPTIONAL<ProtocolInformation[]>;
            let consumers!: AccessPoint[];
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "ae-title": (_el: _Element): void => {
                    ae_title = $._decode_explicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                address: (_el: _Element): void => {
                    address = $._decode_explicit<PresentationAddress>(
                        () => _decode_PresentationAddress
                    )(_el);
                },
                protocolInformation: (_el: _Element): void => {
                    protocolInformation = $._decode_explicit<
                        ProtocolInformation[]
                    >(() =>
                        $._decodeSetOf<ProtocolInformation>(
                            () => _decode_ProtocolInformation
                        )
                    )(_el);
                },
                consumers: (_el: _Element): void => {
                    consumers = $._decode_explicit<AccessPoint[]>(() =>
                        $._decodeSetOf<AccessPoint>(() => _decode_AccessPoint)
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SupplierAndConsumers,
                _extension_additions_list_spec_for_SupplierAndConsumers,
                _root_component_type_list_2_spec_for_SupplierAndConsumers,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SupplierAndConsumers(
                /* SET_CONSTRUCTOR_CALL */ ae_title,
                address,
                protocolInformation,
                consumers,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SupplierAndConsumers(el);
}
/**
 * @summary Encodes a(n) SupplierAndConsumers into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupplierAndConsumers, encoded as an ASN.1 Element.
 */
export function _encode_SupplierAndConsumers(
    value: SupplierAndConsumers,
    elGetter: $.ASN1Encoder<SupplierAndConsumers>
) {
    if (!_cached_encoder_for_SupplierAndConsumers) {
        _cached_encoder_for_SupplierAndConsumers = function (
            value: SupplierAndConsumers,
            elGetter: $.ASN1Encoder<SupplierAndConsumers>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_Name,
                                $.BER
                            )(value.ae_title, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => _encode_PresentationAddress,
                                $.BER
                            )(value.address, $.BER),
                            /* IF_ABSENT  */ value.protocolInformation ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSetOf<ProtocolInformation>(
                                              () => _encode_ProtocolInformation,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.protocolInformation, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                3,
                                () =>
                                    $._encodeSetOf<AccessPoint>(
                                        () => _encode_AccessPoint,
                                        $.BER
                                    ),
                                $.BER
                            )(value.consumers, $.BER),
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
    return _cached_encoder_for_SupplierAndConsumers(value, elGetter);
}

/**
 * @summary id_kmr_supplierConsumersMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-kmr-supplierConsumersMatch   OBJECT IDENTIFIER ::= {id-kmr 3}
 * ```
 *
 * @constant
 */
export const id_kmr_supplierConsumersMatch: OBJECT_IDENTIFIER = new _OID(
    [3],
    id_kmr
);

/**
 * @summary supplierAndConsumersMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supplierAndConsumersMatch MATCHING-RULE ::= {
 *   SYNTAX  Name
 *   ID      id-kmr-supplierConsumersMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const supplierAndConsumersMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_Name,
    },
    encoderFor: {
        "&AssertionType": _encode_Name,
    },
    "&id": id_kmr_supplierConsumersMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_doa_secondaryShadows
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-doa-secondaryShadows         OBJECT IDENTIFIER ::= {id-doa 7}
 * ```
 *
 * @constant
 */
export const id_doa_secondaryShadows: OBJECT_IDENTIFIER = new _OID([7], id_doa);

/**
 * @summary secondaryShadows
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * secondaryShadows ATTRIBUTE ::= {
 *   WITH SYNTAX             SupplierAndConsumers
 *   EQUALITY MATCHING RULE  supplierAndConsumersMatch
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   dSAOperation
 *   ID                      id-doa-secondaryShadows }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const secondaryShadows: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SupplierAndConsumers,
    },
    encoderFor: {
        "&Type": _encode_SupplierAndConsumers,
    },
    "&equality-match": supplierAndConsumersMatch /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_dSAOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_doa_secondaryShadows /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_doa_ditBridgeKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-doa-ditBridgeKnowledge       OBJECT IDENTIFIER ::= {id-doa 8}
 * ```
 *
 * @constant
 */
export const id_doa_ditBridgeKnowledge: OBJECT_IDENTIFIER = new _OID(
    [8],
    id_doa
);

/**
 * @summary ditBridgeKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ditBridgeKnowledge ATTRIBUTE ::= {
 *   WITH SYNTAX             DitBridgeKnowledge
 *   EQUALITY MATCHING RULE  directoryStringFirstComponentMatch
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   dSAOperation
 *   ID                      id-doa-ditBridgeKnowledge }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const ditBridgeKnowledge: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DitBridgeKnowledge,
    },
    encoderFor: {
        "&Type": _encode_DitBridgeKnowledge,
    },
    "&equality-match": directoryStringFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_dSAOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_doa_ditBridgeKnowledge /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* END_MODULE DSAOperationalAttributeTypes */
/* eslint-enable */
