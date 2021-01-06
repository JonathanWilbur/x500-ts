/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
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
    TimeStamp,
    _decode_TimeStamp,
    _encode_TimeStamp,
} from "../Wrapper/TimeStamp.ta";
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
    TimeStamp,
    _decode_TimeStamp,
    _encode_TimeStamp,
} from "../Wrapper/TimeStamp.ta";

/* START_OF_SYMBOL_DEFINITION AadServer */
/**
 * @summary AadServer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AadServer ::= SEQUENCE {
 *   invokeID   [0] InvokeID OPTIONAL,
 *   assoID         AssoID,
 *   time           TimeStamp,
 *   seq            SequenceNumber,
 *   reqRekey   [1] BOOLEAN DEFAULT FALSE,
 *   changedKey [2] BOOLEAN DEFAULT FALSE }
 * ```
 *
 * @class
 */
export class AadServer {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: OPTIONAL<InvokeID>,
        /**
         * @summary `assoID`.
         * @public
         * @readonly
         */
        readonly assoID: AssoID,
        /**
         * @summary `time`.
         * @public
         * @readonly
         */
        readonly time: TimeStamp,
        /**
         * @summary `seq`.
         * @public
         * @readonly
         */
        readonly seq: SequenceNumber,
        /**
         * @summary `reqRekey`.
         * @public
         * @readonly
         */
        readonly reqRekey: OPTIONAL<BOOLEAN>,
        /**
         * @summary `changedKey`.
         * @public
         * @readonly
         */
        readonly changedKey: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a AadServer
     * @description
     *
     * This takes an `object` and converts it to a `AadServer`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AadServer`.
     * @returns {AadServer}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AadServer]: AadServer[_K] }>
    ): AadServer {
        return new AadServer(
            _o.invokeID,
            _o.assoID,
            _o.time,
            _o.seq,
            _o.reqRekey,
            _o.changedKey
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
/* END_OF_SYMBOL_DEFINITION AadServer */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AadServer */
/**
 * @summary The Leading Root Component Types of AadServer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AadServer: $.ComponentSpec[] = [
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
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AadServer */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AadServer */
/**
 * @summary The Trailing Root Component Types of AadServer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AadServer: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AadServer */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AadServer */
/**
 * @summary The Extension Addition Component Types of AadServer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AadServer: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AadServer */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AadServer */
let _cached_decoder_for_AadServer: $.ASN1Decoder<AadServer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AadServer */

/* START_OF_SYMBOL_DEFINITION _decode_AadServer */
/**
 * @summary Decodes an ASN.1 element into a(n) AadServer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AadServer} The decoded data structure.
 */
export function _decode_AadServer(el: _Element) {
    if (!_cached_decoder_for_AadServer) {
        _cached_decoder_for_AadServer = function (el: _Element): AadServer {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let invokeID: OPTIONAL<InvokeID>;
            let assoID!: AssoID;
            let time!: TimeStamp;
            let seq!: SequenceNumber;
            let reqRekey: OPTIONAL<BOOLEAN> =
                AadServer._default_value_for_reqRekey;
            let changedKey: OPTIONAL<BOOLEAN> =
                AadServer._default_value_for_changedKey;
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
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AadServer,
                _extension_additions_list_spec_for_AadServer,
                _root_component_type_list_2_spec_for_AadServer,
                undefined
            );
            return new AadServer(
                /* SEQUENCE_CONSTRUCTOR_CALL */ invokeID,
                assoID,
                time,
                seq,
                reqRekey,
                changedKey
            );
        };
    }
    return _cached_decoder_for_AadServer(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AadServer */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AadServer */
let _cached_encoder_for_AadServer: $.ASN1Encoder<AadServer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AadServer */

/* START_OF_SYMBOL_DEFINITION _encode_AadServer */
/**
 * @summary Encodes a(n) AadServer into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AadServer, encoded as an ASN.1 Element.
 */
export function _encode_AadServer(
    value: AadServer,
    elGetter: $.ASN1Encoder<AadServer>
) {
    if (!_cached_encoder_for_AadServer) {
        _cached_encoder_for_AadServer = function (
            value: AadServer,
            elGetter: $.ASN1Encoder<AadServer>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.invokeID === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_InvokeID,
                                  $.BER
                              )(value.invokeID, $.BER),
                        /* REQUIRED   */ _encode_AssoID(value.assoID, $.BER),
                        /* REQUIRED   */ _encode_TimeStamp(value.time, $.BER),
                        /* REQUIRED   */ _encode_SequenceNumber(
                            value.seq,
                            $.BER
                        ),
                        /* IF_DEFAULT */ value.reqRekey === undefined ||
                        $.deepEq(
                            value.reqRekey,
                            AadServer._default_value_for_reqRekey
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
                            AadServer._default_value_for_changedKey
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.changedKey, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AadServer(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AadServer */

/* eslint-enable */
