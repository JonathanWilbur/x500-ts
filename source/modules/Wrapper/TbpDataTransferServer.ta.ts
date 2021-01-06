/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgoInvoke,
    _decode_AlgoInvoke,
    _encode_AlgoInvoke,
} from "../PKI-Stub/AlgoInvoke.ta";
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
    TbpDataTransferServer_conf,
    _decode_TbpDataTransferServer_conf,
    _encode_TbpDataTransferServer_conf,
} from "../Wrapper/TbpDataTransferServer-conf.ta";
import {
    TimeStamp,
    _decode_TimeStamp,
    _encode_TimeStamp,
} from "../Wrapper/TimeStamp.ta";
export {
    AlgoInvoke,
    _decode_AlgoInvoke,
    _encode_AlgoInvoke,
} from "../PKI-Stub/AlgoInvoke.ta";
export {
    AadServer,
    _decode_AadServer,
    _encode_AadServer,
} from "../Wrapper/AadServer.ta";
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
    TbpDataTransferServer_conf,
    _decode_TbpDataTransferServer_conf,
    _encode_TbpDataTransferServer_conf,
} from "../Wrapper/TbpDataTransferServer-conf.ta";
export {
    TimeStamp,
    _decode_TimeStamp,
    _encode_TimeStamp,
} from "../Wrapper/TimeStamp.ta";

/* START_OF_SYMBOL_DEFINITION TbpDataTransferServer */
/**
 * @summary TbpDataTransferServer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbpDataTransferServer ::= SEQUENCE {
 *   COMPONENTS OF     AadServer,
 *   encInvoke     [3] AlgoInvoke{{SupportedSymmetricKeyAlgorithms}} OPTIONAL,
 *   conf              CHOICE {
 *     clear         [4] WrappedProt{{SupportedProtSet}},
 *     protected     [5] ENCIPHERED{WRAPPED-PROT.&Type},
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class TbpDataTransferServer {
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
         * @summary `reqRekey`.
         * @public
         * @readonly
         */
        readonly reqRekey: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        /**
         * @summary `changedKey`.
         * @public
         * @readonly
         */
        readonly changedKey: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        /**
         * @summary `encInvoke`.
         * @public
         * @readonly
         */
        readonly encInvoke: OPTIONAL<AlgoInvoke>,
        /**
         * @summary `conf`.
         * @public
         * @readonly
         */
        readonly conf: TbpDataTransferServer_conf,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TbpDataTransferServer
     * @description
     *
     * This takes an `object` and converts it to a `TbpDataTransferServer`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TbpDataTransferServer`.
     * @returns {TbpDataTransferServer}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof TbpDataTransferServer]: TbpDataTransferServer[_K] }
        >
    ): TbpDataTransferServer {
        return new TbpDataTransferServer(
            _o.invokeID,
            _o.assoID,
            _o.time,
            _o.seq,
            _o.reqRekey,
            _o.changedKey,
            _o.encInvoke,
            _o.conf,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `reqRekey`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_reqRekey() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `changedKey`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_changedKey() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION TbpDataTransferServer */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TbpDataTransferServer */
/**
 * @summary The Leading Root Component Types of TbpDataTransferServer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TbpDataTransferServer: $.ComponentSpec[] = [
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
        "reqRekey",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "changedKey",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "encInvoke",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec("conf", false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TbpDataTransferServer */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TbpDataTransferServer */
/**
 * @summary The Trailing Root Component Types of TbpDataTransferServer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TbpDataTransferServer: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TbpDataTransferServer */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TbpDataTransferServer */
/**
 * @summary The Extension Addition Component Types of TbpDataTransferServer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TbpDataTransferServer: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TbpDataTransferServer */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TbpDataTransferServer */
let _cached_decoder_for_TbpDataTransferServer: $.ASN1Decoder<TbpDataTransferServer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TbpDataTransferServer */

/* START_OF_SYMBOL_DEFINITION _decode_TbpDataTransferServer */
/**
 * @summary Decodes an ASN.1 element into a(n) TbpDataTransferServer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbpDataTransferServer} The decoded data structure.
 */
export function _decode_TbpDataTransferServer(el: _Element) {
    if (!_cached_decoder_for_TbpDataTransferServer) {
        _cached_decoder_for_TbpDataTransferServer = function (
            el: _Element
        ): TbpDataTransferServer {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let invokeID: OPTIONAL<InvokeID>;
            let assoID!: AssoID;
            let time!: TimeStamp;
            let seq!: SequenceNumber;
            let reqRekey: OPTIONAL<BOOLEAN> =
                TbpDataTransferServer._default_value_for_reqRekey;
            let changedKey: OPTIONAL<BOOLEAN> =
                TbpDataTransferServer._default_value_for_changedKey;
            let encInvoke: OPTIONAL<AlgoInvoke>;
            let conf!: TbpDataTransferServer_conf;
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
                reqRekey: (_el: _Element): void => {
                    reqRekey = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                changedKey: (_el: _Element): void => {
                    changedKey = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                encInvoke: (_el: _Element): void => {
                    encInvoke = $._decode_implicit<AlgoInvoke>(
                        () => _decode_AlgoInvoke
                    )(_el);
                },
                conf: (_el: _Element): void => {
                    conf = _decode_TbpDataTransferServer_conf(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TbpDataTransferServer,
                _extension_additions_list_spec_for_TbpDataTransferServer,
                _root_component_type_list_2_spec_for_TbpDataTransferServer,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TbpDataTransferServer(
                /* SEQUENCE_CONSTRUCTOR_CALL */ invokeID,
                assoID,
                time,
                seq,
                reqRekey,
                changedKey,
                encInvoke,
                conf,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TbpDataTransferServer(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TbpDataTransferServer */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TbpDataTransferServer */
let _cached_encoder_for_TbpDataTransferServer: $.ASN1Encoder<TbpDataTransferServer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TbpDataTransferServer */

/* START_OF_SYMBOL_DEFINITION _encode_TbpDataTransferServer */
/**
 * @summary Encodes a(n) TbpDataTransferServer into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbpDataTransferServer, encoded as an ASN.1 Element.
 */
export function _encode_TbpDataTransferServer(
    value: TbpDataTransferServer,
    elGetter: $.ASN1Encoder<TbpDataTransferServer>
) {
    if (!_cached_encoder_for_TbpDataTransferServer) {
        _cached_encoder_for_TbpDataTransferServer = function (
            value: TbpDataTransferServer,
            elGetter: $.ASN1Encoder<TbpDataTransferServer>
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
                            /* IF_DEFAULT */ value.reqRekey === undefined ||
                            $.deepEq(
                                value.reqRekey,
                                TbpDataTransferServer._default_value_for_reqRekey
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.reqRekey, $.BER),
                            /* IF_DEFAULT */ value.changedKey === undefined ||
                            $.deepEq(
                                value.changedKey,
                                TbpDataTransferServer._default_value_for_changedKey
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.changedKey, $.BER),
                            /* IF_ABSENT  */ value.encInvoke === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_AlgoInvoke,
                                      $.BER
                                  )(value.encInvoke, $.BER),
                            /* REQUIRED   */ _encode_TbpDataTransferServer_conf(
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
    return _cached_encoder_for_TbpDataTransferServer(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TbpDataTransferServer */

/* eslint-enable */
