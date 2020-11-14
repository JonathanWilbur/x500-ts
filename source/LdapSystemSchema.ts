/**
 * @module LdapSystemSchema
 * @summary The ASN.1 module `LdapSystemSchema`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.ldapSystemSchema.9
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
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import * as InformationFramework from "./InformationFramework";
import {
    ATTRIBUTE,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "./InformationFramework";
import {
    directoryString,
    dn,
    ia5String,
    integer,
    ldapSyntaxDescription,
    objectIdentifierFirstComponentMatch,
    oid,
    UnboundedDirectoryString,
    _decode_DirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_DirectoryString,
    _encode_UnboundedDirectoryString,
} from "./SelectedAttributeTypes";
import { id_lat, id_oat } from "./UsefulDefinitions";
export { ub_saslMechanism } from "./DirectoryAbstractService";
export {
    ATTRIBUTE,
    DistinguishedName,
    SYNTAX_NAME,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "./InformationFramework";
export {
    directoryString,
    DirectoryString,
    dn,
    ia5String,
    integer,
    ldapSyntaxDescription,
    objectIdentifierFirstComponentMatch,
    oid,
    UnboundedDirectoryString,
    _decode_DirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_DirectoryString,
    _encode_UnboundedDirectoryString,
} from "./SelectedAttributeTypes";
export { id_lat, id_oat } from "./UsefulDefinitions";

/**
 * @summary id_lat_namingContexts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lat-namingContexts                     OBJECT IDENTIFIER ::= {id-lat 5}
 * ```
 *
 * @constant
 */
export const id_lat_namingContexts: OBJECT_IDENTIFIER = new _OID([5], id_lat);

/**
 * @summary namingContexts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * namingContexts ATTRIBUTE ::= {
 *   WITH SYNTAX              DistinguishedName
 *   USAGE                    dSAOperation
 *   LDAP-SYNTAX              dn.&id
 *   LDAP-NAME                {"namingContexts"}
 *   ID                       id-lat-namingContexts }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const namingContexts: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
    },
    "&usage":
        InformationFramework.AttributeUsage_dSAOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_lat_namingContexts /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_lat_altServer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lat-altServer                          OBJECT IDENTIFIER ::= {id-lat 6}
 * ```
 *
 * @constant
 */
export const id_lat_altServer: OBJECT_IDENTIFIER = new _OID([6], id_lat);

/**
 * @summary altServer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * altServer ATTRIBUTE ::= {
 *   WITH SYNTAX              IA5String
 *   USAGE                    dSAOperation
 *   LDAP-SYNTAX              ia5String.&id
 *   LDAP-NAME                {"altServer"}
 *   ID                       id-lat-altServer }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const altServer: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeIA5String,
    },
    encoderFor: {
        "&Type": $._encodeIA5String,
    },
    "&usage":
        InformationFramework.AttributeUsage_dSAOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": ia5String["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_lat_altServer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_lat_supportedExtension
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lat-supportedExtension                 OBJECT IDENTIFIER ::= {id-lat 7}
 * ```
 *
 * @constant
 */
export const id_lat_supportedExtension: OBJECT_IDENTIFIER = new _OID(
    [7],
    id_lat
);

/**
 * @summary supportedExtension
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supportedExtension ATTRIBUTE ::= {
 *   WITH SYNTAX              OBJECT IDENTIFIER
 *   USAGE                    dSAOperation
 *   LDAP-SYNTAX              oid.&id
 *   LDAP-NAME                {"supportedExtension"}
 *   ID                       id-lat-supportedExtension }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const supportedExtension: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&usage":
        InformationFramework.AttributeUsage_dSAOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_lat_supportedExtension /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_lat_supportedControl
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lat-supportedControl                   OBJECT IDENTIFIER ::= {id-lat 13}
 * ```
 *
 * @constant
 */
export const id_lat_supportedControl: OBJECT_IDENTIFIER = new _OID(
    [13],
    id_lat
);

/**
 * @summary supportedControl
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supportedControl ATTRIBUTE ::= {
 *   WITH SYNTAX              OBJECT IDENTIFIER
 *   USAGE                    dSAOperation
 *   LDAP-SYNTAX              oid.&id
 *   LDAP-NAME                {"supportedControl"}
 *   ID                       id-lat-supportedControl }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const supportedControl: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&usage":
        InformationFramework.AttributeUsage_dSAOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_lat_supportedControl /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_lat_supportedSASLMechanisms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lat-supportedSASLMechanisms            OBJECT IDENTIFIER ::= {id-lat 14}
 * ```
 *
 * @constant
 */
export const id_lat_supportedSASLMechanisms: OBJECT_IDENTIFIER = new _OID(
    [14],
    id_lat
);

/**
 * @summary supportedSASLMechanisms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supportedSASLMechanisms ATTRIBUTE ::= {
 *   WITH SYNTAX              DirectoryString{ub-saslMechanism}
 *   USAGE                    dSAOperation
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"supportedSASLMechanisms"}
 *   ID                       id-lat-supportedSASLMechanisms }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const supportedSASLMechanisms: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DirectoryString,
    },
    encoderFor: {
        "&Type": _encode_DirectoryString,
    },
    "&usage":
        InformationFramework.AttributeUsage_dSAOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_lat_supportedSASLMechanisms /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_lat_supportedLDAPVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lat-supportedLDAPVersion               OBJECT IDENTIFIER ::= {id-lat 15}
 * ```
 *
 * @constant
 */
export const id_lat_supportedLDAPVersion: OBJECT_IDENTIFIER = new _OID(
    [15],
    id_lat
);

/**
 * @summary supportedLDAPVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supportedLDAPVersion ATTRIBUTE ::= {
 *   WITH SYNTAX              INTEGER
 *   USAGE                    dSAOperation
 *   LDAP-SYNTAX              integer.&id
 *   LDAP-NAME                {"supportedLDAPVersion"}
 *   ID                       id-lat-supportedLDAPVersion }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const supportedLDAPVersion: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&usage":
        InformationFramework.AttributeUsage_dSAOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_lat_supportedLDAPVersion /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oat_supportedFeatures
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oat-supportedFeatures                  OBJECT IDENTIFIER ::= {id-oat 5}
 * ```
 *
 * @constant
 */
export const id_oat_supportedFeatures: OBJECT_IDENTIFIER = new _OID(
    [5],
    id_oat
);

/**
 * @summary supportedFeatures
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supportedFeatures ATTRIBUTE ::= {
 *   WITH SYNTAX              OBJECT IDENTIFIER
 *   USAGE                    dSAOperation
 *   LDAP-SYNTAX              oid.&id
 *   LDAP-NAME                {"supportedFeatures"}
 *   ID                       id-oat-supportedFeatures }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const supportedFeatures: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&usage":
        InformationFramework.AttributeUsage_dSAOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oat_supportedFeatures /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary LdapSyntaxDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LdapSyntaxDescription ::= SEQUENCE {
 *   identifier               SYNTAX-NAME.&id,
 *   description              UnboundedDirectoryString OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class LdapSyntaxDescription {
    constructor(
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: OBJECT_IDENTIFIER,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<UnboundedDirectoryString>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a LdapSyntaxDescription
     * @description
     *
     * This takes an `object` and converts it to a `LdapSyntaxDescription`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LdapSyntaxDescription`.
     * @returns {LdapSyntaxDescription}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof LdapSyntaxDescription]: LdapSyntaxDescription[_K] }
        >
    ): LdapSyntaxDescription {
        return new LdapSyntaxDescription(
            _o.identifier,
            _o.description,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of LdapSyntaxDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LdapSyntaxDescription: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "identifier",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec("description", true, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of LdapSyntaxDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LdapSyntaxDescription: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of LdapSyntaxDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LdapSyntaxDescription: $.ComponentSpec[] = [];
let _cached_decoder_for_LdapSyntaxDescription: $.ASN1Decoder<
    LdapSyntaxDescription
> | null = null;
let _cached_encoder_for_LdapSyntaxDescription: $.ASN1Encoder<
    LdapSyntaxDescription
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) LdapSyntaxDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LdapSyntaxDescription} The decoded data structure.
 */
export function _decode_LdapSyntaxDescription(el: _Element) {
    if (!_cached_decoder_for_LdapSyntaxDescription) {
        _cached_decoder_for_LdapSyntaxDescription = function (
            el: _Element
        ): LdapSyntaxDescription {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let identifier!: OBJECT_IDENTIFIER;
            let description: OPTIONAL<UnboundedDirectoryString>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                identifier: (_el: _Element): void => {
                    identifier = $._decodeObjectIdentifier(_el);
                },
                description: (_el: _Element): void => {
                    description = _decode_UnboundedDirectoryString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_LdapSyntaxDescription,
                _extension_additions_list_spec_for_LdapSyntaxDescription,
                _root_component_type_list_2_spec_for_LdapSyntaxDescription,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new LdapSyntaxDescription(
                /* SEQUENCE_CONSTRUCTOR_CALL */ identifier,
                description,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_LdapSyntaxDescription(el);
}
/**
 * @summary Encodes a(n) LdapSyntaxDescription into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LdapSyntaxDescription, encoded as an ASN.1 Element.
 */
export function _encode_LdapSyntaxDescription(
    value: LdapSyntaxDescription,
    elGetter: $.ASN1Encoder<LdapSyntaxDescription>
) {
    if (!_cached_encoder_for_LdapSyntaxDescription) {
        _cached_encoder_for_LdapSyntaxDescription = function (
            value: LdapSyntaxDescription,
            elGetter: $.ASN1Encoder<LdapSyntaxDescription>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.identifier,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.description === undefined
                                ? undefined
                                : _encode_UnboundedDirectoryString(
                                      value.description,
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
    return _cached_encoder_for_LdapSyntaxDescription(value, elGetter);
}

/**
 * @summary id_soa_ldapSyntaxes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-soa-ldapSyntaxes                       OBJECT IDENTIFIER ::= {id-lat 16}
 * ```
 *
 * @constant
 */
export const id_soa_ldapSyntaxes: OBJECT_IDENTIFIER = new _OID([16], id_lat);

/**
 * @summary ldapSyntaxes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldapSyntaxes ATTRIBUTE ::= {
 *   WITH SYNTAX              LdapSyntaxDescription
 *   EQUALITY MATCHING RULE   objectIdentifierFirstComponentMatch
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              ldapSyntaxDescription.&id
 *   LDAP-NAME                {"ldapSyntax"}
 *   ID                       id-soa-ldapSyntaxes }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const ldapSyntaxes: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_LdapSyntaxDescription,
    },
    encoderFor: {
        "&Type": _encode_LdapSyntaxDescription,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": ldapSyntaxDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_soa_ldapSyntaxes /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* END_MODULE LdapSystemSchema */
/* eslint-enable */
