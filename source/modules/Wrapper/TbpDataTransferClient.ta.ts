/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgoInvoke,
    _decode_AlgoInvoke,
    _encode_AlgoInvoke,
} from "../PKI_Stub/AlgoInvoke.ta";
import { AssoID, _decode_AssoID, _encode_AssoID } from "../Wrapper/AssoID.ta";
import {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../Wrapper/InvokeID.ta";
import {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from "../Wrapper/SequenceNumber.ta";
import {
    TbpDataTransferClient_conf,
    _decode_TbpDataTransferClient_conf,
    _encode_TbpDataTransferClient_conf,
} from "../Wrapper/TbpDataTransferClient-conf.ta";
import {
    TimeStamp,
    _decode_TimeStamp,
    _encode_TimeStamp,
} from "../Wrapper/TimeStamp.ta";
export {
    AlgoInvoke,
    _decode_AlgoInvoke,
    _encode_AlgoInvoke,
} from "../PKI_Stub/AlgoInvoke.ta";
export {
    AadClient,
    _decode_AadClient,
    _encode_AadClient,
} from "../Wrapper/AadClient.ta";
export { AssoID, _decode_AssoID, _encode_AssoID } from "../Wrapper/AssoID.ta";
export {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../Wrapper/InvokeID.ta";
export {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from "../Wrapper/SequenceNumber.ta";
export {
    TbpDataTransferClient_conf,
    _decode_TbpDataTransferClient_conf,
    _encode_TbpDataTransferClient_conf,
} from "../Wrapper/TbpDataTransferClient-conf.ta";
export {
    TimeStamp,
    _decode_TimeStamp,
    _encode_TimeStamp,
} from "../Wrapper/TimeStamp.ta";

/* START_OF_SYMBOL_DEFINITION TbpDataTransferClient */
/**
 * @summary TbpDataTransferClient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbpDataTransferClient ::= SEQUENCE {
 *   COMPONENTS OF    AadClient,
 *   encEnvoke    [3] AlgoInvoke{{SupportedSymmetricKeyAlgorithms}} OPTIONAL,
 *   conf             CHOICE {
 *     clear        [4] WrappedProt{{SupportedProtSet}},
 *     protected    [5] ENCIPHERED{WRAPPED-PROT.&Type},
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class TbpDataTransferClient {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: OPTIONAL<InvokeID> /* REPLICATED_COMPONENT */,
        /**
         * @summary `assoID`.
         * @public
         * @readonly
         */
        readonly assoID: AssoID /* REPLICATED_COMPONENT */,
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: TimeStamp /* REPLICATED_COMPONENT */,
        /**
         * @summary `seq`.
         * @public
         * @readonly
         */
        readonly seq: SequenceNumber /* REPLICATED_COMPONENT */,
        /**
         * @summary `keyEst`.
         * @public
         * @readonly
         */
        readonly keyEst: OPTIONAL<AlgoInvoke> /* REPLICATED_COMPONENT */,
        /**
         * @summary `encEnvoke`.
         * @public
         * @readonly
         */
        readonly encEnvoke: OPTIONAL<AlgoInvoke>,
        /**
         * @summary `conf`.
         * @public
         * @readonly
         */
        readonly conf: TbpDataTransferClient_conf,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TbpDataTransferClient
     * @description
     *
     * This takes an `object` and converts it to a `TbpDataTransferClient`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TbpDataTransferClient`.
     * @returns {TbpDataTransferClient}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof TbpDataTransferClient]: TbpDataTransferClient[_K] }
        >
    ): TbpDataTransferClient {
        return new TbpDataTransferClient(
            _o.invokeID,
            _o.assoID,
            _o.time,
            _o.seq,
            _o.keyEst,
            _o.encEnvoke,
            _o.conf,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION TbpDataTransferClient */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TbpDataTransferClient */
/**
 * @summary The Leading Root Component Types of TbpDataTransferClient
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TbpDataTransferClient: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "assoID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "time",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "seq",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "keyEst",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "encEnvoke",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec("conf", false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TbpDataTransferClient */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TbpDataTransferClient */
/**
 * @summary The Trailing Root Component Types of TbpDataTransferClient
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbpDataTransferClient: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TbpDataTransferClient */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TbpDataTransferClient */
/**
 * @summary The Extension Addition Component Types of TbpDataTransferClient
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbpDataTransferClient: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TbpDataTransferClient */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TbpDataTransferClient */
let _cached_decoder_for_TbpDataTransferClient: $.ASN1Decoder<
    TbpDataTransferClient
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TbpDataTransferClient */

/* START_OF_SYMBOL_DEFINITION _decode_TbpDataTransferClient */
/**
 * @summary Decodes an ASN.1 element into a(n) TbpDataTransferClient
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbpDataTransferClient} The decoded data structure.
 */
export function _decode_TbpDataTransferClient(el: _Element) {
    if (!_cached_decoder_for_TbpDataTransferClient) {
        _cached_decoder_for_TbpDataTransferClient = function (
            el: _Element
        ): TbpDataTransferClient {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let invokeID: OPTIONAL<InvokeID>;
            let assoID!: AssoID;
            let time!: TimeStamp;
            let seq!: SequenceNumber;
            let keyEst: OPTIONAL<AlgoInvoke>;
            let encEnvoke: OPTIONAL<AlgoInvoke>;
            let conf!: TbpDataTransferClient_conf;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                invokeID: (_el: _Element): void => {
                    invokeID = $._decode_implicit<InvokeID>(
                        () => _decode_InvokeID
                    )(_el);
                },
                assoID: (_el: _Element): void => {
                    assoID = _decode_AssoID(_el);
                },
                time: (_el: _Element): void => {
                    time = _decode_TimeStamp(_el);
                },
                seq: (_el: _Element): void => {
                    seq = _decode_SequenceNumber(_el);
                },
                keyEst: (_el: _Element): void => {
                    keyEst = $._decode_implicit<AlgoInvoke>(
                        () => _decode_AlgoInvoke
                    )(_el);
                },
                encEnvoke: (_el: _Element): void => {
                    encEnvoke = $._decode_implicit<AlgoInvoke>(
                        () => _decode_AlgoInvoke
                    )(_el);
                },
                conf: (_el: _Element): void => {
                    conf = _decode_TbpDataTransferClient_conf(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TbpDataTransferClient,
                _extension_additions_list_spec_for_TbpDataTransferClient,
                _root_component_type_list_2_spec_for_TbpDataTransferClient,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TbpDataTransferClient /* SEQUENCE_CONSTRUCTOR_CALL */(
                invokeID,
                assoID,
                time,
                seq,
                keyEst,
                encEnvoke,
                conf,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TbpDataTransferClient(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TbpDataTransferClient */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TbpDataTransferClient */
let _cached_encoder_for_TbpDataTransferClient: $.ASN1Encoder<
    TbpDataTransferClient
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TbpDataTransferClient */

/* START_OF_SYMBOL_DEFINITION _encode_TbpDataTransferClient */
/**
 * @summary Encodes a(n) TbpDataTransferClient into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbpDataTransferClient, encoded as an ASN.1 Element.
 */
export function _encode_TbpDataTransferClient(
    value: TbpDataTransferClient,
    elGetter: $.ASN1Encoder<TbpDataTransferClient>
) {
    if (!_cached_encoder_for_TbpDataTransferClient) {
        _cached_encoder_for_TbpDataTransferClient = function (
            value: TbpDataTransferClient,
            elGetter: $.ASN1Encoder<TbpDataTransferClient>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.invokeID === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_InvokeID,
                                      $.BER
                                  )(value.invokeID, $.BER),
                            /* REQUIRED   */ _encode_AssoID(
                                value.assoID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_TimeStamp(
                                value.time,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_SequenceNumber(
                                value.seq,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.keyEst === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_AlgoInvoke,
                                      $.BER
                                  )(value.keyEst, $.BER),
                            /* IF_ABSENT  */ value.encEnvoke === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_AlgoInvoke,
                                      $.BER
                                  )(value.encEnvoke, $.BER),
                            /* REQUIRED   */ _encode_TbpDataTransferClient_conf(
                                value.conf,
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
    return _cached_encoder_for_TbpDataTransferClient(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TbpDataTransferClient */

/* eslint-enable */
