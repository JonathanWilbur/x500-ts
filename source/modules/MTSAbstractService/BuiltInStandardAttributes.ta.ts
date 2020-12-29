/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AdministrationDomainName,
    _decode_AdministrationDomainName,
    _encode_AdministrationDomainName,
} from "../MTSAbstractService/AdministrationDomainName.ta";
import {
    CountryName,
    _decode_CountryName,
    _encode_CountryName,
} from "../MTSAbstractService/CountryName.ta";
import {
    NetworkAddress,
    _decode_NetworkAddress,
    _encode_NetworkAddress,
} from "../MTSAbstractService/NetworkAddress.ta";
import {
    NumericUserIdentifier,
    _decode_NumericUserIdentifier,
    _encode_NumericUserIdentifier,
} from "../MTSAbstractService/NumericUserIdentifier.ta";
import {
    OrganizationalUnitNames,
    _decode_OrganizationalUnitNames,
    _encode_OrganizationalUnitNames,
} from "../MTSAbstractService/OrganizationalUnitNames.ta";
import {
    OrganizationName,
    _decode_OrganizationName,
    _encode_OrganizationName,
} from "../MTSAbstractService/OrganizationName.ta";
import {
    PersonalName,
    _decode_PersonalName,
    _encode_PersonalName,
} from "../MTSAbstractService/PersonalName.ta";
import {
    PrivateDomainName,
    _decode_PrivateDomainName,
    _encode_PrivateDomainName,
} from "../MTSAbstractService/PrivateDomainName.ta";
import {
    TerminalIdentifier,
    _decode_TerminalIdentifier,
    _encode_TerminalIdentifier,
} from "../MTSAbstractService/TerminalIdentifier.ta";
export {
    AdministrationDomainName,
    _decode_AdministrationDomainName,
    _encode_AdministrationDomainName,
} from "../MTSAbstractService/AdministrationDomainName.ta";
export {
    CountryName,
    _decode_CountryName,
    _encode_CountryName,
} from "../MTSAbstractService/CountryName.ta";
export {
    NetworkAddress,
    _decode_NetworkAddress,
    _encode_NetworkAddress,
} from "../MTSAbstractService/NetworkAddress.ta";
export {
    NumericUserIdentifier,
    _decode_NumericUserIdentifier,
    _encode_NumericUserIdentifier,
} from "../MTSAbstractService/NumericUserIdentifier.ta";
export {
    OrganizationalUnitNames,
    _decode_OrganizationalUnitNames,
    _encode_OrganizationalUnitNames,
} from "../MTSAbstractService/OrganizationalUnitNames.ta";
export {
    OrganizationName,
    _decode_OrganizationName,
    _encode_OrganizationName,
} from "../MTSAbstractService/OrganizationName.ta";
export {
    PersonalName,
    _decode_PersonalName,
    _encode_PersonalName,
} from "../MTSAbstractService/PersonalName.ta";
export {
    PrivateDomainName,
    _decode_PrivateDomainName,
    _encode_PrivateDomainName,
} from "../MTSAbstractService/PrivateDomainName.ta";
export {
    TerminalIdentifier,
    _decode_TerminalIdentifier,
    _encode_TerminalIdentifier,
} from "../MTSAbstractService/TerminalIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION BuiltInStandardAttributes */
/**
 * @summary BuiltInStandardAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BuiltInStandardAttributes ::= SEQUENCE {
 *   country-name                CountryName OPTIONAL,
 *   administration-domain-name  AdministrationDomainName OPTIONAL,
 *   network-address             [0]  NetworkAddress OPTIONAL,
 *   -- see also extended-network-address
 *   terminal-identifier         [1]  TerminalIdentifier OPTIONAL,
 *   private-domain-name         [2]  PrivateDomainName OPTIONAL,
 *   organization-name           [3]  OrganizationName OPTIONAL,
 *   -- see also teletex-organization-name
 *   numeric-user-identifier     [4]  NumericUserIdentifier OPTIONAL,
 *   personal-name               [5]  PersonalName OPTIONAL,
 *   -- see also teletex-personal-name
 *   organizational-unit-names   [6]  OrganizationalUnitNames OPTIONAL
 *   -- see also teletex-organizational-unit-names
 * }
 * ```
 *
 * @class
 */
export class BuiltInStandardAttributes {
    constructor(
        /**
         * @summary `country_name`.
         * @public
         * @readonly
         */
        readonly country_name: OPTIONAL<CountryName>,
        /**
         * @summary `administration_domain_name`.
         * @public
         * @readonly
         */
        readonly administration_domain_name: OPTIONAL<AdministrationDomainName>,
        /**
         * @summary `network_address`.
         * @public
         * @readonly
         */
        readonly network_address: OPTIONAL<NetworkAddress>,
        /**
         * @summary `terminal_identifier`.
         * @public
         * @readonly
         */
        readonly terminal_identifier: OPTIONAL<TerminalIdentifier>,
        /**
         * @summary `private_domain_name`.
         * @public
         * @readonly
         */
        readonly private_domain_name: OPTIONAL<PrivateDomainName>,
        /**
         * @summary `organization_name`.
         * @public
         * @readonly
         */
        readonly organization_name: OPTIONAL<OrganizationName>,
        /**
         * @summary `numeric_user_identifier`.
         * @public
         * @readonly
         */
        readonly numeric_user_identifier: OPTIONAL<NumericUserIdentifier>,
        /**
         * @summary `personal_name`.
         * @public
         * @readonly
         */
        readonly personal_name: OPTIONAL<PersonalName>,
        /**
         * @summary `organizational_unit_names`.
         * @public
         * @readonly
         */
        readonly organizational_unit_names: OPTIONAL<OrganizationalUnitNames>
    ) {}

    /**
     * @summary Restructures an object into a BuiltInStandardAttributes
     * @description
     *
     * This takes an `object` and converts it to a `BuiltInStandardAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BuiltInStandardAttributes`.
     * @returns {BuiltInStandardAttributes}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof BuiltInStandardAttributes]: BuiltInStandardAttributes[_K];
            }
        >
    ): BuiltInStandardAttributes {
        return new BuiltInStandardAttributes(
            _o.country_name,
            _o.administration_domain_name,
            _o.network_address,
            _o.terminal_identifier,
            _o.private_domain_name,
            _o.organization_name,
            _o.numeric_user_identifier,
            _o.personal_name,
            _o.organizational_unit_names
        );
    }
}
/* END_OF_SYMBOL_DEFINITION BuiltInStandardAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BuiltInStandardAttributes */
/**
 * @summary The Leading Root Component Types of BuiltInStandardAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BuiltInStandardAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "country-name",
        true,
        $.hasTag(_TagClass.application, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "administration-domain-name",
        true,
        $.hasTag(_TagClass.application, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "network-address",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "terminal-identifier",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "private-domain-name",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "organization-name",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "numeric-user-identifier",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "personal-name",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "organizational-unit-names",
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BuiltInStandardAttributes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BuiltInStandardAttributes */
/**
 * @summary The Trailing Root Component Types of BuiltInStandardAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BuiltInStandardAttributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BuiltInStandardAttributes */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BuiltInStandardAttributes */
/**
 * @summary The Extension Addition Component Types of BuiltInStandardAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BuiltInStandardAttributes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BuiltInStandardAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BuiltInStandardAttributes */
let _cached_decoder_for_BuiltInStandardAttributes: $.ASN1Decoder<BuiltInStandardAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BuiltInStandardAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_BuiltInStandardAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) BuiltInStandardAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BuiltInStandardAttributes} The decoded data structure.
 */
export function _decode_BuiltInStandardAttributes(el: _Element) {
    if (!_cached_decoder_for_BuiltInStandardAttributes) {
        _cached_decoder_for_BuiltInStandardAttributes = function (
            el: _Element
        ): BuiltInStandardAttributes {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let country_name: OPTIONAL<CountryName>;
            let administration_domain_name: OPTIONAL<AdministrationDomainName>;
            let network_address: OPTIONAL<NetworkAddress>;
            let terminal_identifier: OPTIONAL<TerminalIdentifier>;
            let private_domain_name: OPTIONAL<PrivateDomainName>;
            let organization_name: OPTIONAL<OrganizationName>;
            let numeric_user_identifier: OPTIONAL<NumericUserIdentifier>;
            let personal_name: OPTIONAL<PersonalName>;
            let organizational_unit_names: OPTIONAL<OrganizationalUnitNames>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "country-name": (_el: _Element): void => {
                    country_name = _decode_CountryName(_el);
                },
                "administration-domain-name": (_el: _Element): void => {
                    administration_domain_name = _decode_AdministrationDomainName(
                        _el
                    );
                },
                "network-address": (_el: _Element): void => {
                    network_address = $._decode_implicit<NetworkAddress>(
                        () => _decode_NetworkAddress
                    )(_el);
                },
                "terminal-identifier": (_el: _Element): void => {
                    terminal_identifier = $._decode_implicit<TerminalIdentifier>(
                        () => _decode_TerminalIdentifier
                    )(_el);
                },
                "private-domain-name": (_el: _Element): void => {
                    private_domain_name = $._decode_explicit<PrivateDomainName>(
                        () => _decode_PrivateDomainName
                    )(_el);
                },
                "organization-name": (_el: _Element): void => {
                    organization_name = $._decode_implicit<OrganizationName>(
                        () => _decode_OrganizationName
                    )(_el);
                },
                "numeric-user-identifier": (_el: _Element): void => {
                    numeric_user_identifier = $._decode_implicit<NumericUserIdentifier>(
                        () => _decode_NumericUserIdentifier
                    )(_el);
                },
                "personal-name": (_el: _Element): void => {
                    personal_name = $._decode_implicit<PersonalName>(
                        () => _decode_PersonalName
                    )(_el);
                },
                "organizational-unit-names": (_el: _Element): void => {
                    organizational_unit_names = $._decode_implicit<OrganizationalUnitNames>(
                        () => _decode_OrganizationalUnitNames
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BuiltInStandardAttributes,
                _extension_additions_list_spec_for_BuiltInStandardAttributes,
                _root_component_type_list_2_spec_for_BuiltInStandardAttributes,
                undefined
            );
            return new BuiltInStandardAttributes /* SEQUENCE_CONSTRUCTOR_CALL */(
                country_name,
                administration_domain_name,
                network_address,
                terminal_identifier,
                private_domain_name,
                organization_name,
                numeric_user_identifier,
                personal_name,
                organizational_unit_names
            );
        };
    }
    return _cached_decoder_for_BuiltInStandardAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BuiltInStandardAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BuiltInStandardAttributes */
let _cached_encoder_for_BuiltInStandardAttributes: $.ASN1Encoder<BuiltInStandardAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BuiltInStandardAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_BuiltInStandardAttributes */
/**
 * @summary Encodes a(n) BuiltInStandardAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BuiltInStandardAttributes, encoded as an ASN.1 Element.
 */
export function _encode_BuiltInStandardAttributes(
    value: BuiltInStandardAttributes,
    elGetter: $.ASN1Encoder<BuiltInStandardAttributes>
) {
    if (!_cached_encoder_for_BuiltInStandardAttributes) {
        _cached_encoder_for_BuiltInStandardAttributes = function (
            value: BuiltInStandardAttributes,
            elGetter: $.ASN1Encoder<BuiltInStandardAttributes>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.country_name === undefined
                            ? undefined
                            : _encode_CountryName(value.country_name, $.BER),
                        /* IF_ABSENT  */ value.administration_domain_name ===
                        undefined
                            ? undefined
                            : _encode_AdministrationDomainName(
                                  value.administration_domain_name,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.network_address === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_NetworkAddress,
                                  $.BER
                              )(value.network_address, $.BER),
                        /* IF_ABSENT  */ value.terminal_identifier === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_TerminalIdentifier,
                                  $.BER
                              )(value.terminal_identifier, $.BER),
                        /* IF_ABSENT  */ value.private_domain_name === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_PrivateDomainName,
                                  $.BER
                              )(value.private_domain_name, $.BER),
                        /* IF_ABSENT  */ value.organization_name === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_OrganizationName,
                                  $.BER
                              )(value.organization_name, $.BER),
                        /* IF_ABSENT  */ value.numeric_user_identifier ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_NumericUserIdentifier,
                                  $.BER
                              )(value.numeric_user_identifier, $.BER),
                        /* IF_ABSENT  */ value.personal_name === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_PersonalName,
                                  $.BER
                              )(value.personal_name, $.BER),
                        /* IF_ABSENT  */ value.organizational_unit_names ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  6,
                                  () => _encode_OrganizationalUnitNames,
                                  $.BER
                              )(value.organizational_unit_names, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BuiltInStandardAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BuiltInStandardAttributes */

/* eslint-enable */
