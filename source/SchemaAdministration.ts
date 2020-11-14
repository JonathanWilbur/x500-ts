/**
 * @module SchemaAdministration
 * @summary The ASN.1 module `SchemaAdministration`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.schemaAdministration.9
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
    BOOLEAN,
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import * as InformationFramework from "./InformationFramework";
import {
    ATTRIBUTE,
    AttributeUsage,
    ObjectClassKind,
    objectIdentifierMatch,
    OBJECT_CLASS,
    RuleIdentifier,
    _decode_AttributeUsage,
    _decode_ObjectClassKind,
    _decode_RuleIdentifier,
    _encode_AttributeUsage,
    _encode_ObjectClassKind,
    _encode_RuleIdentifier,
    _enum_for_AttributeUsage,
    _enum_for_ObjectClassKind,
} from "./InformationFramework";
import { ldapSyntaxes } from "./LdapSystemSchema";
import {
    attributeTypeDescription,
    dITContentRuleDescription,
    dITStructureRuleDescription,
    integer,
    integerFirstComponentMatch,
    integerMatch,
    matchingRuleDescription,
    matchingRuleUseDescription,
    nameFormDescription,
    objectClassDescription,
    objectIdentifierFirstComponentMatch,
    oid,
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "./SelectedAttributeTypes";
import { id_soa, id_soc } from "./UsefulDefinitions";
export {
    ATTRIBUTE,
    AttributeUsage,
    AttributeUsage_directoryOperation /* IMPORTED_ENUMERATION_ITEM */,
    AttributeUsage_distributedOperation /* IMPORTED_ENUMERATION_ITEM */,
    AttributeUsage_dSAOperation /* IMPORTED_ENUMERATION_ITEM */,
    AttributeUsage_userApplications /* IMPORTED_ENUMERATION_ITEM */,
    CONTEXT,
    DITContentRule,
    DITStructureRule,
    MATCHING_RULE,
    NAME_FORM,
    ObjectClassKind,
    ObjectClassKind_abstract /* IMPORTED_ENUMERATION_ITEM */,
    ObjectClassKind_auxiliary /* IMPORTED_ENUMERATION_ITEM */,
    ObjectClassKind_structural /* IMPORTED_ENUMERATION_ITEM */,
    objectIdentifierMatch,
    OBJECT_CLASS,
    RuleIdentifier,
    SYNTAX_NAME,
    _decode_AttributeUsage,
    _decode_DITContentRule,
    _decode_DITStructureRule,
    _decode_ObjectClassKind,
    _decode_RuleIdentifier,
    _encode_AttributeUsage,
    _encode_DITContentRule,
    _encode_DITStructureRule,
    _encode_ObjectClassKind,
    _encode_RuleIdentifier,
    _enum_for_AttributeUsage,
    _enum_for_ObjectClassKind,
} from "./InformationFramework";
export { ldapSyntaxes } from "./LdapSystemSchema";
export {
    attributeTypeDescription,
    dITContentRuleDescription,
    dITStructureRuleDescription,
    integer,
    integerFirstComponentMatch,
    integerMatch,
    matchingRuleDescription,
    matchingRuleUseDescription,
    nameFormDescription,
    objectClassDescription,
    objectIdentifierFirstComponentMatch,
    oid,
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "./SelectedAttributeTypes";
export { id_soa, id_soc } from "./UsefulDefinitions";

/**
 * @summary DITStructureRuleDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DITStructureRuleDescription ::= SEQUENCE {
 *   COMPONENTS OF DITStructureRule,
 *   name         [1]  SET SIZE (1..MAX) OF UnboundedDirectoryString OPTIONAL,
 *   description       UnboundedDirectoryString OPTIONAL,
 *   obsolete          BOOLEAN DEFAULT FALSE,
 *   ... }
 * ```
 *
 * @class
 */
export class DITStructureRuleDescription {
    constructor(
        /**
         * @summary `ruleIdentifier`.
         * @public
         * @readonly
         */
        readonly ruleIdentifier: RuleIdentifier /* REPLICATED_COMPONENT */,
        /**
         * @summary `nameForm`.
         * @public
         * @readonly
         */
        readonly nameForm: OBJECT_IDENTIFIER /* REPLICATED_COMPONENT */,
        /**
         * @summary `superiorStructureRules`.
         * @public
         * @readonly
         */
        readonly superiorStructureRules: OPTIONAL<
            RuleIdentifier[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<UnboundedDirectoryString[]>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<UnboundedDirectoryString>,
        /**
         * @summary `obsolete`.
         * @public
         * @readonly
         */
        readonly obsolete: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DITStructureRuleDescription
     * @description
     *
     * This takes an `object` and converts it to a `DITStructureRuleDescription`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DITStructureRuleDescription`.
     * @returns {DITStructureRuleDescription}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof DITStructureRuleDescription]: DITStructureRuleDescription[_K];
            }
        >
    ): DITStructureRuleDescription {
        return new DITStructureRuleDescription(
            _o.ruleIdentifier,
            _o.nameForm,
            _o.superiorStructureRules,
            _o.name,
            _o.description,
            _o.obsolete,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `obsolete`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_obsolete() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of DITStructureRuleDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DITStructureRuleDescription: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "ruleIdentifier",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "nameForm",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "superiorStructureRules",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "name",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec("description", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "obsolete",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of DITStructureRuleDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DITStructureRuleDescription: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of DITStructureRuleDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DITStructureRuleDescription: $.ComponentSpec[] = [];
let _cached_decoder_for_DITStructureRuleDescription: $.ASN1Decoder<
    DITStructureRuleDescription
> | null = null;
let _cached_encoder_for_DITStructureRuleDescription: $.ASN1Encoder<
    DITStructureRuleDescription
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DITStructureRuleDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DITStructureRuleDescription} The decoded data structure.
 */
export function _decode_DITStructureRuleDescription(el: _Element) {
    if (!_cached_decoder_for_DITStructureRuleDescription) {
        _cached_decoder_for_DITStructureRuleDescription = function (
            el: _Element
        ): DITStructureRuleDescription {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let ruleIdentifier!: RuleIdentifier;
            let nameForm!: OBJECT_IDENTIFIER;
            let superiorStructureRules: OPTIONAL<RuleIdentifier[]>;
            let name: OPTIONAL<UnboundedDirectoryString[]>;
            let description: OPTIONAL<UnboundedDirectoryString>;
            let obsolete: OPTIONAL<BOOLEAN> =
                DITStructureRuleDescription._default_value_for_obsolete;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                ruleIdentifier: (_el: _Element): void => {
                    ruleIdentifier = _decode_RuleIdentifier(_el);
                },
                nameForm: (_el: _Element): void => {
                    nameForm = $._decodeObjectIdentifier(_el);
                },
                superiorStructureRules: (_el: _Element): void => {
                    superiorStructureRules = $._decodeSetOf<RuleIdentifier>(
                        () => _decode_RuleIdentifier
                    )(_el);
                },
                name: (_el: _Element): void => {
                    name = $._decode_explicit<UnboundedDirectoryString[]>(() =>
                        $._decodeSetOf<UnboundedDirectoryString>(
                            () => _decode_UnboundedDirectoryString
                        )
                    )(_el);
                },
                description: (_el: _Element): void => {
                    description = _decode_UnboundedDirectoryString(_el);
                },
                obsolete: (_el: _Element): void => {
                    obsolete = $._decodeBoolean(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DITStructureRuleDescription,
                _extension_additions_list_spec_for_DITStructureRuleDescription,
                _root_component_type_list_2_spec_for_DITStructureRuleDescription,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DITStructureRuleDescription(
                /* SEQUENCE_CONSTRUCTOR_CALL */ ruleIdentifier,
                nameForm,
                superiorStructureRules,
                name,
                description,
                obsolete,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DITStructureRuleDescription(el);
}
/**
 * @summary Encodes a(n) DITStructureRuleDescription into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DITStructureRuleDescription, encoded as an ASN.1 Element.
 */
export function _encode_DITStructureRuleDescription(
    value: DITStructureRuleDescription,
    elGetter: $.ASN1Encoder<DITStructureRuleDescription>
) {
    if (!_cached_encoder_for_DITStructureRuleDescription) {
        _cached_encoder_for_DITStructureRuleDescription = function (
            value: DITStructureRuleDescription,
            elGetter: $.ASN1Encoder<DITStructureRuleDescription>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_RuleIdentifier(
                                value.ruleIdentifier,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.nameForm,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.superiorStructureRules ===
                            undefined
                                ? undefined
                                : $._encodeSetOf<RuleIdentifier>(
                                      () => _encode_RuleIdentifier,
                                      $.BER
                                  )(value.superiorStructureRules, $.BER),
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () =>
                                          $._encodeSetOf<
                                              UnboundedDirectoryString
                                          >(
                                              () =>
                                                  _encode_UnboundedDirectoryString,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.name, $.BER),
                            /* IF_ABSENT  */ value.description === undefined
                                ? undefined
                                : _encode_UnboundedDirectoryString(
                                      value.description,
                                      $.BER
                                  ),
                            /* IF_DEFAULT */ value.obsolete === undefined ||
                            $.deepEq(
                                value.obsolete,
                                DITStructureRuleDescription._default_value_for_obsolete
                            )
                                ? undefined
                                : $._encodeBoolean(value.obsolete, $.BER),
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
    return _cached_encoder_for_DITStructureRuleDescription(value, elGetter);
}

/**
 * @summary id_soa_dITStructureRule
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-soa-dITStructureRule       OBJECT IDENTIFIER ::= {id-soa 1}
 * ```
 *
 * @constant
 */
export const id_soa_dITStructureRule: OBJECT_IDENTIFIER = new _OID([1], id_soa);

/**
 * @summary dITStructureRules
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dITStructureRules ATTRIBUTE ::= {
 *   WITH SYNTAX              DITStructureRuleDescription
 *   EQUALITY MATCHING RULE   integerFirstComponentMatch
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              dITStructureRuleDescription.&id
 *   LDAP-NAME                {"dITStructureRules"}
 *   ID                       id-soa-dITStructureRule }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const dITStructureRules: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DITStructureRuleDescription,
    },
    encoderFor: {
        "&Type": _encode_DITStructureRuleDescription,
    },
    "&equality-match": integerFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax":
        dITStructureRuleDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_soa_dITStructureRule /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary NameFormInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NameFormInformation ::= SEQUENCE {
 *   subordinate        OBJECT-CLASS.&id,
 *   namingMandatories  SET OF ATTRIBUTE.&id,
 *   namingOptionals    SET SIZE (1..MAX) OF ATTRIBUTE.&id OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class NameFormInformation {
    constructor(
        /**
         * @summary `subordinate`.
         * @public
         * @readonly
         */
        readonly subordinate: OBJECT_IDENTIFIER,
        /**
         * @summary `namingMandatories`.
         * @public
         * @readonly
         */
        readonly namingMandatories: OBJECT_IDENTIFIER[],
        /**
         * @summary `namingOptionals`.
         * @public
         * @readonly
         */
        readonly namingOptionals: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a NameFormInformation
     * @description
     *
     * This takes an `object` and converts it to a `NameFormInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NameFormInformation`.
     * @returns {NameFormInformation}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof NameFormInformation]: NameFormInformation[_K] }
        >
    ): NameFormInformation {
        return new NameFormInformation(
            _o.subordinate,
            _o.namingMandatories,
            _o.namingOptionals,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of NameFormInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NameFormInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "subordinate",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "namingMandatories",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "namingOptionals",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of NameFormInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NameFormInformation: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of NameFormInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NameFormInformation: $.ComponentSpec[] = [];
let _cached_decoder_for_NameFormInformation: $.ASN1Decoder<
    NameFormInformation
> | null = null;
let _cached_encoder_for_NameFormInformation: $.ASN1Encoder<
    NameFormInformation
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) NameFormInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NameFormInformation} The decoded data structure.
 */
export function _decode_NameFormInformation(el: _Element) {
    if (!_cached_decoder_for_NameFormInformation) {
        _cached_decoder_for_NameFormInformation = function (
            el: _Element
        ): NameFormInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let subordinate!: OBJECT_IDENTIFIER;
            let namingMandatories!: OBJECT_IDENTIFIER[];
            let namingOptionals: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                subordinate: (_el: _Element): void => {
                    subordinate = $._decodeObjectIdentifier(_el);
                },
                namingMandatories: (_el: _Element): void => {
                    namingMandatories = $._decodeSetOf<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                namingOptionals: (_el: _Element): void => {
                    namingOptionals = $._decodeSetOf<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NameFormInformation,
                _extension_additions_list_spec_for_NameFormInformation,
                _root_component_type_list_2_spec_for_NameFormInformation,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new NameFormInformation(
                /* SEQUENCE_CONSTRUCTOR_CALL */ subordinate,
                namingMandatories,
                namingOptionals,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_NameFormInformation(el);
}
/**
 * @summary Encodes a(n) NameFormInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameFormInformation, encoded as an ASN.1 Element.
 */
export function _encode_NameFormInformation(
    value: NameFormInformation,
    elGetter: $.ASN1Encoder<NameFormInformation>
) {
    if (!_cached_encoder_for_NameFormInformation) {
        _cached_encoder_for_NameFormInformation = function (
            value: NameFormInformation,
            elGetter: $.ASN1Encoder<NameFormInformation>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.subordinate,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSetOf<OBJECT_IDENTIFIER>(
                                () => $._encodeObjectIdentifier,
                                $.BER
                            )(value.namingMandatories, $.BER),
                            /* IF_ABSENT  */ value.namingOptionals === undefined
                                ? undefined
                                : $._encodeSetOf<OBJECT_IDENTIFIER>(
                                      () => $._encodeObjectIdentifier,
                                      $.BER
                                  )(value.namingOptionals, $.BER),
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
    return _cached_encoder_for_NameFormInformation(value, elGetter);
}

/**
 * @summary NameFormDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NameFormDescription ::= SEQUENCE {
 *   identifier        NAME-FORM.&id,
 *   name              SET SIZE (1..MAX) OF UnboundedDirectoryString OPTIONAL,
 *   description       UnboundedDirectoryString                      OPTIONAL,
 *   obsolete          BOOLEAN                                       DEFAULT FALSE,
 *   information  [0]  NameFormInformation,
 *   ... }
 * ```
 *
 * @class
 */
export class NameFormDescription {
    constructor(
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: OBJECT_IDENTIFIER,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<UnboundedDirectoryString[]>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<UnboundedDirectoryString>,
        /**
         * @summary `obsolete`.
         * @public
         * @readonly
         */
        readonly obsolete: OPTIONAL<BOOLEAN>,
        /**
         * @summary `information`.
         * @public
         * @readonly
         */
        readonly information: NameFormInformation,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a NameFormDescription
     * @description
     *
     * This takes an `object` and converts it to a `NameFormDescription`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NameFormDescription`.
     * @returns {NameFormDescription}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof NameFormDescription]: NameFormDescription[_K] }
        >
    ): NameFormDescription {
        return new NameFormDescription(
            _o.identifier,
            _o.name,
            _o.description,
            _o.obsolete,
            _o.information,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `obsolete`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_obsolete() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of NameFormDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NameFormDescription: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "identifier",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "name",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec("description", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "obsolete",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "information",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of NameFormDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NameFormDescription: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of NameFormDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NameFormDescription: $.ComponentSpec[] = [];
let _cached_decoder_for_NameFormDescription: $.ASN1Decoder<
    NameFormDescription
> | null = null;
let _cached_encoder_for_NameFormDescription: $.ASN1Encoder<
    NameFormDescription
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) NameFormDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NameFormDescription} The decoded data structure.
 */
export function _decode_NameFormDescription(el: _Element) {
    if (!_cached_decoder_for_NameFormDescription) {
        _cached_decoder_for_NameFormDescription = function (
            el: _Element
        ): NameFormDescription {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let identifier!: OBJECT_IDENTIFIER;
            let name: OPTIONAL<UnboundedDirectoryString[]>;
            let description: OPTIONAL<UnboundedDirectoryString>;
            let obsolete: OPTIONAL<BOOLEAN> =
                NameFormDescription._default_value_for_obsolete;
            let information!: NameFormInformation;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                identifier: (_el: _Element): void => {
                    identifier = $._decodeObjectIdentifier(_el);
                },
                name: (_el: _Element): void => {
                    name = $._decodeSetOf<UnboundedDirectoryString>(
                        () => _decode_UnboundedDirectoryString
                    )(_el);
                },
                description: (_el: _Element): void => {
                    description = _decode_UnboundedDirectoryString(_el);
                },
                obsolete: (_el: _Element): void => {
                    obsolete = $._decodeBoolean(_el);
                },
                information: (_el: _Element): void => {
                    information = $._decode_explicit<NameFormInformation>(
                        () => _decode_NameFormInformation
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NameFormDescription,
                _extension_additions_list_spec_for_NameFormDescription,
                _root_component_type_list_2_spec_for_NameFormDescription,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new NameFormDescription(
                /* SEQUENCE_CONSTRUCTOR_CALL */ identifier,
                name,
                description,
                obsolete,
                information,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_NameFormDescription(el);
}
/**
 * @summary Encodes a(n) NameFormDescription into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameFormDescription, encoded as an ASN.1 Element.
 */
export function _encode_NameFormDescription(
    value: NameFormDescription,
    elGetter: $.ASN1Encoder<NameFormDescription>
) {
    if (!_cached_encoder_for_NameFormDescription) {
        _cached_encoder_for_NameFormDescription = function (
            value: NameFormDescription,
            elGetter: $.ASN1Encoder<NameFormDescription>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.identifier,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : $._encodeSetOf<UnboundedDirectoryString>(
                                      () => _encode_UnboundedDirectoryString,
                                      $.BER
                                  )(value.name, $.BER),
                            /* IF_ABSENT  */ value.description === undefined
                                ? undefined
                                : _encode_UnboundedDirectoryString(
                                      value.description,
                                      $.BER
                                  ),
                            /* IF_DEFAULT */ value.obsolete === undefined ||
                            $.deepEq(
                                value.obsolete,
                                NameFormDescription._default_value_for_obsolete
                            )
                                ? undefined
                                : $._encodeBoolean(value.obsolete, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_NameFormInformation,
                                $.BER
                            )(value.information, $.BER),
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
    return _cached_encoder_for_NameFormDescription(value, elGetter);
}

/**
 * @summary id_soa_nameForms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-soa-nameForms              OBJECT IDENTIFIER ::= {id-soa 7}
 * ```
 *
 * @constant
 */
export const id_soa_nameForms: OBJECT_IDENTIFIER = new _OID([7], id_soa);

/**
 * @summary nameForms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nameForms ATTRIBUTE ::= {
 *   WITH SYNTAX              NameFormDescription
 *   EQUALITY MATCHING RULE   objectIdentifierFirstComponentMatch
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              nameFormDescription.&id
 *   LDAP-NAME                {"nameForms"}
 *   ID                       id-soa-nameForms }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const nameForms: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_NameFormDescription,
    },
    encoderFor: {
        "&Type": _encode_NameFormDescription,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": nameFormDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_soa_nameForms /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary DITContentRuleDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DITContentRuleDescription ::= SEQUENCE {
 *   COMPONENTS OF DITContentRule,
 *   name         [4]  SET SIZE (1..MAX) OF UnboundedDirectoryString OPTIONAL,
 *   description       UnboundedDirectoryString OPTIONAL,
 *   obsolete          BOOLEAN DEFAULT FALSE,
 *   ... }
 * ```
 *
 * @class
 */
export class DITContentRuleDescription {
    constructor(
        /**
         * @summary `structuralObjectClass`.
         * @public
         * @readonly
         */
        readonly structuralObjectClass: OBJECT_IDENTIFIER /* REPLICATED_COMPONENT */,
        /**
         * @summary `auxiliaries`.
         * @public
         * @readonly
         */
        readonly auxiliaries: OPTIONAL<
            OBJECT_IDENTIFIER[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `mandatory`.
         * @public
         * @readonly
         */
        readonly mandatory: OPTIONAL<
            OBJECT_IDENTIFIER[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `optional`.
         * @public
         * @readonly
         */
        readonly optional: OPTIONAL<
            OBJECT_IDENTIFIER[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `precluded`.
         * @public
         * @readonly
         */
        readonly precluded: OPTIONAL<
            OBJECT_IDENTIFIER[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<UnboundedDirectoryString[]>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<UnboundedDirectoryString>,
        /**
         * @summary `obsolete`.
         * @public
         * @readonly
         */
        readonly obsolete: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DITContentRuleDescription
     * @description
     *
     * This takes an `object` and converts it to a `DITContentRuleDescription`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DITContentRuleDescription`.
     * @returns {DITContentRuleDescription}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof DITContentRuleDescription]: DITContentRuleDescription[_K];
            }
        >
    ): DITContentRuleDescription {
        return new DITContentRuleDescription(
            _o.structuralObjectClass,
            _o.auxiliaries,
            _o.mandatory,
            _o.optional,
            _o.precluded,
            _o.name,
            _o.description,
            _o.obsolete,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `obsolete`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_obsolete() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of DITContentRuleDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DITContentRuleDescription: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "structuralObjectClass",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "auxiliaries",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "mandatory",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "optional",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "precluded",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "name",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec("description", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "obsolete",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of DITContentRuleDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DITContentRuleDescription: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of DITContentRuleDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DITContentRuleDescription: $.ComponentSpec[] = [];
let _cached_decoder_for_DITContentRuleDescription: $.ASN1Decoder<
    DITContentRuleDescription
> | null = null;
let _cached_encoder_for_DITContentRuleDescription: $.ASN1Encoder<
    DITContentRuleDescription
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DITContentRuleDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DITContentRuleDescription} The decoded data structure.
 */
export function _decode_DITContentRuleDescription(el: _Element) {
    if (!_cached_decoder_for_DITContentRuleDescription) {
        _cached_decoder_for_DITContentRuleDescription = function (
            el: _Element
        ): DITContentRuleDescription {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let structuralObjectClass!: OBJECT_IDENTIFIER;
            let auxiliaries: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let mandatory: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let optional: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let precluded: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let name: OPTIONAL<UnboundedDirectoryString[]>;
            let description: OPTIONAL<UnboundedDirectoryString>;
            let obsolete: OPTIONAL<BOOLEAN> =
                DITContentRuleDescription._default_value_for_obsolete;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                structuralObjectClass: (_el: _Element): void => {
                    structuralObjectClass = $._decodeObjectIdentifier(_el);
                },
                auxiliaries: (_el: _Element): void => {
                    auxiliaries = $._decodeSetOf<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                mandatory: (_el: _Element): void => {
                    mandatory = $._decode_explicit<OBJECT_IDENTIFIER[]>(() =>
                        $._decodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    )(_el);
                },
                optional: (_el: _Element): void => {
                    optional = $._decode_explicit<OBJECT_IDENTIFIER[]>(() =>
                        $._decodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    )(_el);
                },
                precluded: (_el: _Element): void => {
                    precluded = $._decode_explicit<OBJECT_IDENTIFIER[]>(() =>
                        $._decodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    )(_el);
                },
                name: (_el: _Element): void => {
                    name = $._decode_explicit<UnboundedDirectoryString[]>(() =>
                        $._decodeSetOf<UnboundedDirectoryString>(
                            () => _decode_UnboundedDirectoryString
                        )
                    )(_el);
                },
                description: (_el: _Element): void => {
                    description = _decode_UnboundedDirectoryString(_el);
                },
                obsolete: (_el: _Element): void => {
                    obsolete = $._decodeBoolean(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DITContentRuleDescription,
                _extension_additions_list_spec_for_DITContentRuleDescription,
                _root_component_type_list_2_spec_for_DITContentRuleDescription,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DITContentRuleDescription(
                /* SEQUENCE_CONSTRUCTOR_CALL */ structuralObjectClass,
                auxiliaries,
                mandatory,
                optional,
                precluded,
                name,
                description,
                obsolete,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DITContentRuleDescription(el);
}
/**
 * @summary Encodes a(n) DITContentRuleDescription into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DITContentRuleDescription, encoded as an ASN.1 Element.
 */
export function _encode_DITContentRuleDescription(
    value: DITContentRuleDescription,
    elGetter: $.ASN1Encoder<DITContentRuleDescription>
) {
    if (!_cached_encoder_for_DITContentRuleDescription) {
        _cached_encoder_for_DITContentRuleDescription = function (
            value: DITContentRuleDescription,
            elGetter: $.ASN1Encoder<DITContentRuleDescription>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.structuralObjectClass,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.auxiliaries === undefined
                                ? undefined
                                : $._encodeSetOf<OBJECT_IDENTIFIER>(
                                      () => $._encodeObjectIdentifier,
                                      $.BER
                                  )(value.auxiliaries, $.BER),
                            /* IF_ABSENT  */ value.mandatory === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () =>
                                          $._encodeSetOf<OBJECT_IDENTIFIER>(
                                              () => $._encodeObjectIdentifier,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.mandatory, $.BER),
                            /* IF_ABSENT  */ value.optional === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSetOf<OBJECT_IDENTIFIER>(
                                              () => $._encodeObjectIdentifier,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.optional, $.BER),
                            /* IF_ABSENT  */ value.precluded === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () =>
                                          $._encodeSetOf<OBJECT_IDENTIFIER>(
                                              () => $._encodeObjectIdentifier,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.precluded, $.BER),
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () =>
                                          $._encodeSetOf<
                                              UnboundedDirectoryString
                                          >(
                                              () =>
                                                  _encode_UnboundedDirectoryString,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.name, $.BER),
                            /* IF_ABSENT  */ value.description === undefined
                                ? undefined
                                : _encode_UnboundedDirectoryString(
                                      value.description,
                                      $.BER
                                  ),
                            /* IF_DEFAULT */ value.obsolete === undefined ||
                            $.deepEq(
                                value.obsolete,
                                DITContentRuleDescription._default_value_for_obsolete
                            )
                                ? undefined
                                : $._encodeBoolean(value.obsolete, $.BER),
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
    return _cached_encoder_for_DITContentRuleDescription(value, elGetter);
}

/**
 * @summary id_soa_dITContentRules
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-soa-dITContentRules        OBJECT IDENTIFIER ::= {id-soa 2}
 * ```
 *
 * @constant
 */
export const id_soa_dITContentRules: OBJECT_IDENTIFIER = new _OID([2], id_soa);

/**
 * @summary dITContentRules
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dITContentRules ATTRIBUTE ::= {
 *   WITH SYNTAX              DITContentRuleDescription
 *   EQUALITY MATCHING RULE   objectIdentifierFirstComponentMatch
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              dITContentRuleDescription.&id
 *   LDAP-NAME                {"dITContentRules"}
 *   ID                       id-soa-dITContentRules }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const dITContentRules: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DITContentRuleDescription,
    },
    encoderFor: {
        "&Type": _encode_DITContentRuleDescription,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dITContentRuleDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_soa_dITContentRules /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary ObjectClassInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectClassInformation ::= SEQUENCE {
 *   subclassOf        SET SIZE (1..MAX) OF OBJECT-CLASS.&id OPTIONAL,
 *   kind              ObjectClassKind                       DEFAULT structural,
 *   mandatories  [3]  SET SIZE (1..MAX) OF ATTRIBUTE.&id    OPTIONAL,
 *   optionals    [4]  SET SIZE (1..MAX) OF ATTRIBUTE.&id    OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class ObjectClassInformation {
    constructor(
        /**
         * @summary `subclassOf`.
         * @public
         * @readonly
         */
        readonly subclassOf: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary `kind`.
         * @public
         * @readonly
         */
        readonly kind: OPTIONAL<ObjectClassKind>,
        /**
         * @summary `mandatories`.
         * @public
         * @readonly
         */
        readonly mandatories: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary `optionals`.
         * @public
         * @readonly
         */
        readonly optionals: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ObjectClassInformation
     * @description
     *
     * This takes an `object` and converts it to a `ObjectClassInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ObjectClassInformation`.
     * @returns {ObjectClassInformation}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof ObjectClassInformation]: ObjectClassInformation[_K] }
        >
    ): ObjectClassInformation {
        return new ObjectClassInformation(
            _o.subclassOf,
            _o.kind,
            _o.mandatories,
            _o.optionals,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `kind`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_kind() {
        return InformationFramework.ObjectClassKind_structural;
    }
    /**
     * @summary The enum used as the type of the component `kind`
     * @public
     * @static
     */

    public static _enum_for_kind = _enum_for_ObjectClassKind;
}
/**
 * @summary The Leading Root Component Types of ObjectClassInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ObjectClassInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "subclassOf",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "kind",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "mandatories",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "optionals",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ObjectClassInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ObjectClassInformation: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ObjectClassInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ObjectClassInformation: $.ComponentSpec[] = [];
let _cached_decoder_for_ObjectClassInformation: $.ASN1Decoder<
    ObjectClassInformation
> | null = null;
let _cached_encoder_for_ObjectClassInformation: $.ASN1Encoder<
    ObjectClassInformation
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ObjectClassInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectClassInformation} The decoded data structure.
 */
export function _decode_ObjectClassInformation(el: _Element) {
    if (!_cached_decoder_for_ObjectClassInformation) {
        _cached_decoder_for_ObjectClassInformation = function (
            el: _Element
        ): ObjectClassInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let subclassOf: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let kind: OPTIONAL<ObjectClassKind> =
                ObjectClassInformation._default_value_for_kind;
            let mandatories: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let optionals: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                subclassOf: (_el: _Element): void => {
                    subclassOf = $._decodeSetOf<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                kind: (_el: _Element): void => {
                    kind = _decode_ObjectClassKind(_el);
                },
                mandatories: (_el: _Element): void => {
                    mandatories = $._decode_explicit<OBJECT_IDENTIFIER[]>(() =>
                        $._decodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    )(_el);
                },
                optionals: (_el: _Element): void => {
                    optionals = $._decode_explicit<OBJECT_IDENTIFIER[]>(() =>
                        $._decodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ObjectClassInformation,
                _extension_additions_list_spec_for_ObjectClassInformation,
                _root_component_type_list_2_spec_for_ObjectClassInformation,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ObjectClassInformation(
                /* SEQUENCE_CONSTRUCTOR_CALL */ subclassOf,
                kind,
                mandatories,
                optionals,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ObjectClassInformation(el);
}
/**
 * @summary Encodes a(n) ObjectClassInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectClassInformation, encoded as an ASN.1 Element.
 */
export function _encode_ObjectClassInformation(
    value: ObjectClassInformation,
    elGetter: $.ASN1Encoder<ObjectClassInformation>
) {
    if (!_cached_encoder_for_ObjectClassInformation) {
        _cached_encoder_for_ObjectClassInformation = function (
            value: ObjectClassInformation,
            elGetter: $.ASN1Encoder<ObjectClassInformation>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.subclassOf === undefined
                                ? undefined
                                : $._encodeSetOf<OBJECT_IDENTIFIER>(
                                      () => $._encodeObjectIdentifier,
                                      $.BER
                                  )(value.subclassOf, $.BER),
                            /* IF_DEFAULT */ value.kind === undefined ||
                            $.deepEq(
                                value.kind,
                                ObjectClassInformation._default_value_for_kind
                            )
                                ? undefined
                                : _encode_ObjectClassKind(value.kind, $.BER),
                            /* IF_ABSENT  */ value.mandatories === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () =>
                                          $._encodeSetOf<OBJECT_IDENTIFIER>(
                                              () => $._encodeObjectIdentifier,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.mandatories, $.BER),
                            /* IF_ABSENT  */ value.optionals === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () =>
                                          $._encodeSetOf<OBJECT_IDENTIFIER>(
                                              () => $._encodeObjectIdentifier,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.optionals, $.BER),
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
    return _cached_encoder_for_ObjectClassInformation(value, elGetter);
}

/**
 * @summary ObjectClassDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectClassDescription ::= SEQUENCE {
 *   identifier        OBJECT-CLASS.&id,
 *   name              SET SIZE (1..MAX) OF UnboundedDirectoryString OPTIONAL,
 *   description       UnboundedDirectoryString                      OPTIONAL,
 *   obsolete          BOOLEAN                                       DEFAULT FALSE,
 *   information  [0]  ObjectClassInformation,
 *   ... }
 * ```
 *
 * @class
 */
export class ObjectClassDescription {
    constructor(
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: OBJECT_IDENTIFIER,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<UnboundedDirectoryString[]>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<UnboundedDirectoryString>,
        /**
         * @summary `obsolete`.
         * @public
         * @readonly
         */
        readonly obsolete: OPTIONAL<BOOLEAN>,
        /**
         * @summary `information`.
         * @public
         * @readonly
         */
        readonly information: ObjectClassInformation,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ObjectClassDescription
     * @description
     *
     * This takes an `object` and converts it to a `ObjectClassDescription`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ObjectClassDescription`.
     * @returns {ObjectClassDescription}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof ObjectClassDescription]: ObjectClassDescription[_K] }
        >
    ): ObjectClassDescription {
        return new ObjectClassDescription(
            _o.identifier,
            _o.name,
            _o.description,
            _o.obsolete,
            _o.information,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `obsolete`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_obsolete() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of ObjectClassDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ObjectClassDescription: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "identifier",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "name",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec("description", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "obsolete",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "information",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ObjectClassDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ObjectClassDescription: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ObjectClassDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ObjectClassDescription: $.ComponentSpec[] = [];
let _cached_decoder_for_ObjectClassDescription: $.ASN1Decoder<
    ObjectClassDescription
> | null = null;
let _cached_encoder_for_ObjectClassDescription: $.ASN1Encoder<
    ObjectClassDescription
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ObjectClassDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectClassDescription} The decoded data structure.
 */
export function _decode_ObjectClassDescription(el: _Element) {
    if (!_cached_decoder_for_ObjectClassDescription) {
        _cached_decoder_for_ObjectClassDescription = function (
            el: _Element
        ): ObjectClassDescription {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let identifier!: OBJECT_IDENTIFIER;
            let name: OPTIONAL<UnboundedDirectoryString[]>;
            let description: OPTIONAL<UnboundedDirectoryString>;
            let obsolete: OPTIONAL<BOOLEAN> =
                ObjectClassDescription._default_value_for_obsolete;
            let information!: ObjectClassInformation;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                identifier: (_el: _Element): void => {
                    identifier = $._decodeObjectIdentifier(_el);
                },
                name: (_el: _Element): void => {
                    name = $._decodeSetOf<UnboundedDirectoryString>(
                        () => _decode_UnboundedDirectoryString
                    )(_el);
                },
                description: (_el: _Element): void => {
                    description = _decode_UnboundedDirectoryString(_el);
                },
                obsolete: (_el: _Element): void => {
                    obsolete = $._decodeBoolean(_el);
                },
                information: (_el: _Element): void => {
                    information = $._decode_explicit<ObjectClassInformation>(
                        () => _decode_ObjectClassInformation
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ObjectClassDescription,
                _extension_additions_list_spec_for_ObjectClassDescription,
                _root_component_type_list_2_spec_for_ObjectClassDescription,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ObjectClassDescription(
                /* SEQUENCE_CONSTRUCTOR_CALL */ identifier,
                name,
                description,
                obsolete,
                information,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ObjectClassDescription(el);
}
/**
 * @summary Encodes a(n) ObjectClassDescription into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectClassDescription, encoded as an ASN.1 Element.
 */
export function _encode_ObjectClassDescription(
    value: ObjectClassDescription,
    elGetter: $.ASN1Encoder<ObjectClassDescription>
) {
    if (!_cached_encoder_for_ObjectClassDescription) {
        _cached_encoder_for_ObjectClassDescription = function (
            value: ObjectClassDescription,
            elGetter: $.ASN1Encoder<ObjectClassDescription>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.identifier,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : $._encodeSetOf<UnboundedDirectoryString>(
                                      () => _encode_UnboundedDirectoryString,
                                      $.BER
                                  )(value.name, $.BER),
                            /* IF_ABSENT  */ value.description === undefined
                                ? undefined
                                : _encode_UnboundedDirectoryString(
                                      value.description,
                                      $.BER
                                  ),
                            /* IF_DEFAULT */ value.obsolete === undefined ||
                            $.deepEq(
                                value.obsolete,
                                ObjectClassDescription._default_value_for_obsolete
                            )
                                ? undefined
                                : $._encodeBoolean(value.obsolete, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_ObjectClassInformation,
                                $.BER
                            )(value.information, $.BER),
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
    return _cached_encoder_for_ObjectClassDescription(value, elGetter);
}

/**
 * @summary id_soa_objectClasses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-soa-objectClasses          OBJECT IDENTIFIER ::= {id-soa 6}
 * ```
 *
 * @constant
 */
export const id_soa_objectClasses: OBJECT_IDENTIFIER = new _OID([6], id_soa);

/**
 * @summary objectClasses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * objectClasses ATTRIBUTE ::= {
 *   WITH SYNTAX              ObjectClassDescription
 *   EQUALITY MATCHING RULE   objectIdentifierFirstComponentMatch
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              objectClassDescription.&id
 *   LDAP-NAME                {"objectClasses"}
 *   ID                       id-soa-objectClasses }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const objectClasses: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ObjectClassDescription,
    },
    encoderFor: {
        "&Type": _encode_ObjectClassDescription,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": objectClassDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_soa_objectClasses /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary AttributeTypeInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeTypeInformation ::= SEQUENCE {
 *   derivation       [0]  ATTRIBUTE.&id             OPTIONAL,
 *   equalityMatch    [1]  MATCHING-RULE.&id         OPTIONAL,
 *   orderingMatch    [2]  MATCHING-RULE.&id         OPTIONAL,
 *   substringsMatch  [3]  MATCHING-RULE.&id         OPTIONAL,
 *   attributeSyntax  [4]  UnboundedDirectoryString  OPTIONAL,
 *   multi-valued     [5]  BOOLEAN                   DEFAULT TRUE,
 *   collective       [6]  BOOLEAN                   DEFAULT FALSE,
 *   userModifiable   [7]  BOOLEAN                   DEFAULT TRUE,
 *   application           AttributeUsage            DEFAULT userApplications,
 *   ... }
 * ```
 *
 * @class
 */
export class AttributeTypeInformation {
    constructor(
        /**
         * @summary `derivation`.
         * @public
         * @readonly
         */
        readonly derivation: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `equalityMatch`.
         * @public
         * @readonly
         */
        readonly equalityMatch: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `orderingMatch`.
         * @public
         * @readonly
         */
        readonly orderingMatch: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `substringsMatch`.
         * @public
         * @readonly
         */
        readonly substringsMatch: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `attributeSyntax`.
         * @public
         * @readonly
         */
        readonly attributeSyntax: OPTIONAL<UnboundedDirectoryString>,
        /**
         * @summary `multi_valued`.
         * @public
         * @readonly
         */
        readonly multi_valued: OPTIONAL<BOOLEAN>,
        /**
         * @summary `collective`.
         * @public
         * @readonly
         */
        readonly collective: OPTIONAL<BOOLEAN>,
        /**
         * @summary `userModifiable`.
         * @public
         * @readonly
         */
        readonly userModifiable: OPTIONAL<BOOLEAN>,
        /**
         * @summary `application`.
         * @public
         * @readonly
         */
        readonly application: OPTIONAL<AttributeUsage>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeTypeInformation
     * @description
     *
     * This takes an `object` and converts it to a `AttributeTypeInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeTypeInformation`.
     * @returns {AttributeTypeInformation}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AttributeTypeInformation]: AttributeTypeInformation[_K];
            }
        >
    ): AttributeTypeInformation {
        return new AttributeTypeInformation(
            _o.derivation,
            _o.equalityMatch,
            _o.orderingMatch,
            _o.substringsMatch,
            _o.attributeSyntax,
            _o.multi_valued,
            _o.collective,
            _o.userModifiable,
            _o.application,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `multi_valued`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_multi_valued() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `collective`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_collective() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `userModifiable`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_userModifiable() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `application`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_application() {
        return InformationFramework.AttributeUsage_userApplications;
    }
    /**
     * @summary The enum used as the type of the component `application`
     * @public
     * @static
     */

    public static _enum_for_application = _enum_for_AttributeUsage;
}
/**
 * @summary The Leading Root Component Types of AttributeTypeInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeTypeInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "derivation",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "equalityMatch",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "orderingMatch",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "substringsMatch",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributeSyntax",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "multi-valued",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "collective",
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "userModifiable",
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "application",
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AttributeTypeInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeTypeInformation: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AttributeTypeInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeTypeInformation: $.ComponentSpec[] = [];
let _cached_decoder_for_AttributeTypeInformation: $.ASN1Decoder<
    AttributeTypeInformation
> | null = null;
let _cached_encoder_for_AttributeTypeInformation: $.ASN1Encoder<
    AttributeTypeInformation
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeTypeInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeTypeInformation} The decoded data structure.
 */
export function _decode_AttributeTypeInformation(el: _Element) {
    if (!_cached_decoder_for_AttributeTypeInformation) {
        _cached_decoder_for_AttributeTypeInformation = function (
            el: _Element
        ): AttributeTypeInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let derivation: OPTIONAL<OBJECT_IDENTIFIER>;
            let equalityMatch: OPTIONAL<OBJECT_IDENTIFIER>;
            let orderingMatch: OPTIONAL<OBJECT_IDENTIFIER>;
            let substringsMatch: OPTIONAL<OBJECT_IDENTIFIER>;
            let attributeSyntax: OPTIONAL<UnboundedDirectoryString>;
            let multi_valued: OPTIONAL<BOOLEAN> =
                AttributeTypeInformation._default_value_for_multi_valued;
            let collective: OPTIONAL<BOOLEAN> =
                AttributeTypeInformation._default_value_for_collective;
            let userModifiable: OPTIONAL<BOOLEAN> =
                AttributeTypeInformation._default_value_for_userModifiable;
            let application: OPTIONAL<AttributeUsage> =
                AttributeTypeInformation._default_value_for_application;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                derivation: (_el: _Element): void => {
                    derivation = $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                equalityMatch: (_el: _Element): void => {
                    equalityMatch = $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                orderingMatch: (_el: _Element): void => {
                    orderingMatch = $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                substringsMatch: (_el: _Element): void => {
                    substringsMatch = $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                attributeSyntax: (_el: _Element): void => {
                    attributeSyntax = $._decode_explicit<
                        UnboundedDirectoryString
                    >(() => _decode_UnboundedDirectoryString)(_el);
                },
                "multi-valued": (_el: _Element): void => {
                    multi_valued = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                collective: (_el: _Element): void => {
                    collective = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                userModifiable: (_el: _Element): void => {
                    userModifiable = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                application: (_el: _Element): void => {
                    application = _decode_AttributeUsage(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeTypeInformation,
                _extension_additions_list_spec_for_AttributeTypeInformation,
                _root_component_type_list_2_spec_for_AttributeTypeInformation,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AttributeTypeInformation(
                /* SEQUENCE_CONSTRUCTOR_CALL */ derivation,
                equalityMatch,
                orderingMatch,
                substringsMatch,
                attributeSyntax,
                multi_valued,
                collective,
                userModifiable,
                application,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AttributeTypeInformation(el);
}
/**
 * @summary Encodes a(n) AttributeTypeInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeTypeInformation, encoded as an ASN.1 Element.
 */
export function _encode_AttributeTypeInformation(
    value: AttributeTypeInformation,
    elGetter: $.ASN1Encoder<AttributeTypeInformation>
) {
    if (!_cached_encoder_for_AttributeTypeInformation) {
        _cached_encoder_for_AttributeTypeInformation = function (
            value: AttributeTypeInformation,
            elGetter: $.ASN1Encoder<AttributeTypeInformation>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.derivation === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeObjectIdentifier,
                                      $.BER
                                  )(value.derivation, $.BER),
                            /* IF_ABSENT  */ value.equalityMatch === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeObjectIdentifier,
                                      $.BER
                                  )(value.equalityMatch, $.BER),
                            /* IF_ABSENT  */ value.orderingMatch === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => $._encodeObjectIdentifier,
                                      $.BER
                                  )(value.orderingMatch, $.BER),
                            /* IF_ABSENT  */ value.substringsMatch === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () => $._encodeObjectIdentifier,
                                      $.BER
                                  )(value.substringsMatch, $.BER),
                            /* IF_ABSENT  */ value.attributeSyntax === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () => _encode_UnboundedDirectoryString,
                                      $.BER
                                  )(value.attributeSyntax, $.BER),
                            /* IF_DEFAULT */ value.multi_valued === undefined ||
                            $.deepEq(
                                value.multi_valued,
                                AttributeTypeInformation._default_value_for_multi_valued
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      5,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.multi_valued, $.BER),
                            /* IF_DEFAULT */ value.collective === undefined ||
                            $.deepEq(
                                value.collective,
                                AttributeTypeInformation._default_value_for_collective
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      6,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.collective, $.BER),
                            /* IF_DEFAULT */ value.userModifiable ===
                                undefined ||
                            $.deepEq(
                                value.userModifiable,
                                AttributeTypeInformation._default_value_for_userModifiable
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      7,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.userModifiable, $.BER),
                            /* IF_DEFAULT */ value.application === undefined ||
                            $.deepEq(
                                value.application,
                                AttributeTypeInformation._default_value_for_application
                            )
                                ? undefined
                                : _encode_AttributeUsage(
                                      value.application,
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
    return _cached_encoder_for_AttributeTypeInformation(value, elGetter);
}

/**
 * @summary AttributeTypeDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeTypeDescription ::= SEQUENCE {
 *   identifier        ATTRIBUTE.&id,
 *   name              SET SIZE (1..MAX) OF UnboundedDirectoryString OPTIONAL,
 *   description       UnboundedDirectoryString OPTIONAL,
 *   obsolete          BOOLEAN DEFAULT FALSE,
 *   information  [0]  AttributeTypeInformation,
 *   ... }
 * ```
 *
 * @class
 */
export class AttributeTypeDescription {
    constructor(
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: OBJECT_IDENTIFIER,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<UnboundedDirectoryString[]>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<UnboundedDirectoryString>,
        /**
         * @summary `obsolete`.
         * @public
         * @readonly
         */
        readonly obsolete: OPTIONAL<BOOLEAN>,
        /**
         * @summary `information`.
         * @public
         * @readonly
         */
        readonly information: AttributeTypeInformation,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeTypeDescription
     * @description
     *
     * This takes an `object` and converts it to a `AttributeTypeDescription`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeTypeDescription`.
     * @returns {AttributeTypeDescription}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AttributeTypeDescription]: AttributeTypeDescription[_K];
            }
        >
    ): AttributeTypeDescription {
        return new AttributeTypeDescription(
            _o.identifier,
            _o.name,
            _o.description,
            _o.obsolete,
            _o.information,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `obsolete`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_obsolete() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of AttributeTypeDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeTypeDescription: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "identifier",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "name",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec("description", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "obsolete",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "information",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AttributeTypeDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeTypeDescription: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AttributeTypeDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeTypeDescription: $.ComponentSpec[] = [];
let _cached_decoder_for_AttributeTypeDescription: $.ASN1Decoder<
    AttributeTypeDescription
> | null = null;
let _cached_encoder_for_AttributeTypeDescription: $.ASN1Encoder<
    AttributeTypeDescription
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeTypeDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeTypeDescription} The decoded data structure.
 */
export function _decode_AttributeTypeDescription(el: _Element) {
    if (!_cached_decoder_for_AttributeTypeDescription) {
        _cached_decoder_for_AttributeTypeDescription = function (
            el: _Element
        ): AttributeTypeDescription {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let identifier!: OBJECT_IDENTIFIER;
            let name: OPTIONAL<UnboundedDirectoryString[]>;
            let description: OPTIONAL<UnboundedDirectoryString>;
            let obsolete: OPTIONAL<BOOLEAN> =
                AttributeTypeDescription._default_value_for_obsolete;
            let information!: AttributeTypeInformation;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                identifier: (_el: _Element): void => {
                    identifier = $._decodeObjectIdentifier(_el);
                },
                name: (_el: _Element): void => {
                    name = $._decodeSetOf<UnboundedDirectoryString>(
                        () => _decode_UnboundedDirectoryString
                    )(_el);
                },
                description: (_el: _Element): void => {
                    description = _decode_UnboundedDirectoryString(_el);
                },
                obsolete: (_el: _Element): void => {
                    obsolete = $._decodeBoolean(_el);
                },
                information: (_el: _Element): void => {
                    information = $._decode_explicit<AttributeTypeInformation>(
                        () => _decode_AttributeTypeInformation
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeTypeDescription,
                _extension_additions_list_spec_for_AttributeTypeDescription,
                _root_component_type_list_2_spec_for_AttributeTypeDescription,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AttributeTypeDescription(
                /* SEQUENCE_CONSTRUCTOR_CALL */ identifier,
                name,
                description,
                obsolete,
                information,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AttributeTypeDescription(el);
}
/**
 * @summary Encodes a(n) AttributeTypeDescription into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeTypeDescription, encoded as an ASN.1 Element.
 */
export function _encode_AttributeTypeDescription(
    value: AttributeTypeDescription,
    elGetter: $.ASN1Encoder<AttributeTypeDescription>
) {
    if (!_cached_encoder_for_AttributeTypeDescription) {
        _cached_encoder_for_AttributeTypeDescription = function (
            value: AttributeTypeDescription,
            elGetter: $.ASN1Encoder<AttributeTypeDescription>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.identifier,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : $._encodeSetOf<UnboundedDirectoryString>(
                                      () => _encode_UnboundedDirectoryString,
                                      $.BER
                                  )(value.name, $.BER),
                            /* IF_ABSENT  */ value.description === undefined
                                ? undefined
                                : _encode_UnboundedDirectoryString(
                                      value.description,
                                      $.BER
                                  ),
                            /* IF_DEFAULT */ value.obsolete === undefined ||
                            $.deepEq(
                                value.obsolete,
                                AttributeTypeDescription._default_value_for_obsolete
                            )
                                ? undefined
                                : $._encodeBoolean(value.obsolete, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_AttributeTypeInformation,
                                $.BER
                            )(value.information, $.BER),
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
    return _cached_encoder_for_AttributeTypeDescription(value, elGetter);
}

/**
 * @summary id_soa_attributeTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-soa-attributeTypes         OBJECT IDENTIFIER ::= {id-soa 5}
 * ```
 *
 * @constant
 */
export const id_soa_attributeTypes: OBJECT_IDENTIFIER = new _OID([5], id_soa);

/**
 * @summary attributeTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeTypes ATTRIBUTE ::= {
 *   WITH SYNTAX              AttributeTypeDescription
 *   EQUALITY MATCHING RULE   objectIdentifierFirstComponentMatch
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              attributeTypeDescription.&id
 *   LDAP-NAME                {"attributeTypes"}
 *   ID                       id-soa-attributeTypes }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const attributeTypes: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_AttributeTypeDescription,
    },
    encoderFor: {
        "&Type": _encode_AttributeTypeDescription,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": attributeTypeDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_soa_attributeTypes /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary FriendsDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FriendsDescription ::= SEQUENCE {
 *   anchor            ATTRIBUTE.&id,
 *   name              SET SIZE (1..MAX) OF UnboundedDirectoryString OPTIONAL,
 *   description       UnboundedDirectoryString OPTIONAL,
 *   obsolete          BOOLEAN DEFAULT FALSE,
 *   friends      [0]  SET SIZE (1..MAX) OF ATTRIBUTE.&id,
 *   ... }
 * ```
 *
 * @class
 */
export class FriendsDescription {
    constructor(
        /**
         * @summary `anchor`.
         * @public
         * @readonly
         */
        readonly anchor: OBJECT_IDENTIFIER,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<UnboundedDirectoryString[]>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<UnboundedDirectoryString>,
        /**
         * @summary `obsolete`.
         * @public
         * @readonly
         */
        readonly obsolete: OPTIONAL<BOOLEAN>,
        /**
         * @summary `friends`.
         * @public
         * @readonly
         */
        readonly friends: OBJECT_IDENTIFIER[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a FriendsDescription
     * @description
     *
     * This takes an `object` and converts it to a `FriendsDescription`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FriendsDescription`.
     * @returns {FriendsDescription}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof FriendsDescription]: FriendsDescription[_K] }
        >
    ): FriendsDescription {
        return new FriendsDescription(
            _o.anchor,
            _o.name,
            _o.description,
            _o.obsolete,
            _o.friends,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `obsolete`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_obsolete() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of FriendsDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_FriendsDescription: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "anchor",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "name",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec("description", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "obsolete",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "friends",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of FriendsDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_FriendsDescription: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of FriendsDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_FriendsDescription: $.ComponentSpec[] = [];
let _cached_decoder_for_FriendsDescription: $.ASN1Decoder<
    FriendsDescription
> | null = null;
let _cached_encoder_for_FriendsDescription: $.ASN1Encoder<
    FriendsDescription
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) FriendsDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FriendsDescription} The decoded data structure.
 */
export function _decode_FriendsDescription(el: _Element) {
    if (!_cached_decoder_for_FriendsDescription) {
        _cached_decoder_for_FriendsDescription = function (
            el: _Element
        ): FriendsDescription {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let anchor!: OBJECT_IDENTIFIER;
            let name: OPTIONAL<UnboundedDirectoryString[]>;
            let description: OPTIONAL<UnboundedDirectoryString>;
            let obsolete: OPTIONAL<BOOLEAN> =
                FriendsDescription._default_value_for_obsolete;
            let friends!: OBJECT_IDENTIFIER[];
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                anchor: (_el: _Element): void => {
                    anchor = $._decodeObjectIdentifier(_el);
                },
                name: (_el: _Element): void => {
                    name = $._decodeSetOf<UnboundedDirectoryString>(
                        () => _decode_UnboundedDirectoryString
                    )(_el);
                },
                description: (_el: _Element): void => {
                    description = _decode_UnboundedDirectoryString(_el);
                },
                obsolete: (_el: _Element): void => {
                    obsolete = $._decodeBoolean(_el);
                },
                friends: (_el: _Element): void => {
                    friends = $._decode_explicit<OBJECT_IDENTIFIER[]>(() =>
                        $._decodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_FriendsDescription,
                _extension_additions_list_spec_for_FriendsDescription,
                _root_component_type_list_2_spec_for_FriendsDescription,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new FriendsDescription(
                /* SEQUENCE_CONSTRUCTOR_CALL */ anchor,
                name,
                description,
                obsolete,
                friends,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_FriendsDescription(el);
}
/**
 * @summary Encodes a(n) FriendsDescription into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FriendsDescription, encoded as an ASN.1 Element.
 */
export function _encode_FriendsDescription(
    value: FriendsDescription,
    elGetter: $.ASN1Encoder<FriendsDescription>
) {
    if (!_cached_encoder_for_FriendsDescription) {
        _cached_encoder_for_FriendsDescription = function (
            value: FriendsDescription,
            elGetter: $.ASN1Encoder<FriendsDescription>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.anchor,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : $._encodeSetOf<UnboundedDirectoryString>(
                                      () => _encode_UnboundedDirectoryString,
                                      $.BER
                                  )(value.name, $.BER),
                            /* IF_ABSENT  */ value.description === undefined
                                ? undefined
                                : _encode_UnboundedDirectoryString(
                                      value.description,
                                      $.BER
                                  ),
                            /* IF_DEFAULT */ value.obsolete === undefined ||
                            $.deepEq(
                                value.obsolete,
                                FriendsDescription._default_value_for_obsolete
                            )
                                ? undefined
                                : $._encodeBoolean(value.obsolete, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () =>
                                    $._encodeSetOf<OBJECT_IDENTIFIER>(
                                        () => $._encodeObjectIdentifier,
                                        $.BER
                                    ),
                                $.BER
                            )(value.friends, $.BER),
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
    return _cached_encoder_for_FriendsDescription(value, elGetter);
}

/**
 * @summary id_soa_friends
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-soa-friends                OBJECT IDENTIFIER ::= {id-soa 13}
 * ```
 *
 * @constant
 */
export const id_soa_friends: OBJECT_IDENTIFIER = new _OID([13], id_soa);

/**
 * @summary friends
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * friends ATTRIBUTE ::= {
 *   WITH SYNTAX             FriendsDescription
 *   EQUALITY MATCHING RULE  objectIdentifierFirstComponentMatch
 *   USAGE                   directoryOperation
 *   ID                      id-soa-friends }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const friends: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_FriendsDescription,
    },
    encoderFor: {
        "&Type": _encode_FriendsDescription,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_soa_friends /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary ContextInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContextInformation ::= SEQUENCE {
 *   syntax           UnboundedDirectoryString,
 *   assertionSyntax  UnboundedDirectoryString OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class ContextInformation {
    constructor(
        /**
         * @summary `syntax`.
         * @public
         * @readonly
         */
        readonly syntax: UnboundedDirectoryString,
        /**
         * @summary `assertionSyntax`.
         * @public
         * @readonly
         */
        readonly assertionSyntax: OPTIONAL<UnboundedDirectoryString>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ContextInformation
     * @description
     *
     * This takes an `object` and converts it to a `ContextInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ContextInformation`.
     * @returns {ContextInformation}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof ContextInformation]: ContextInformation[_K] }
        >
    ): ContextInformation {
        return new ContextInformation(
            _o.syntax,
            _o.assertionSyntax,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of ContextInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ContextInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("syntax", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "assertionSyntax",
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ContextInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ContextInformation: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ContextInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ContextInformation: $.ComponentSpec[] = [];
let _cached_decoder_for_ContextInformation: $.ASN1Decoder<
    ContextInformation
> | null = null;
let _cached_encoder_for_ContextInformation: $.ASN1Encoder<
    ContextInformation
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ContextInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContextInformation} The decoded data structure.
 */
export function _decode_ContextInformation(el: _Element) {
    if (!_cached_decoder_for_ContextInformation) {
        _cached_decoder_for_ContextInformation = function (
            el: _Element
        ): ContextInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let syntax!: UnboundedDirectoryString;
            let assertionSyntax: OPTIONAL<UnboundedDirectoryString>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                syntax: (_el: _Element): void => {
                    syntax = _decode_UnboundedDirectoryString(_el);
                },
                assertionSyntax: (_el: _Element): void => {
                    assertionSyntax = _decode_UnboundedDirectoryString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ContextInformation,
                _extension_additions_list_spec_for_ContextInformation,
                _root_component_type_list_2_spec_for_ContextInformation,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ContextInformation(
                /* SEQUENCE_CONSTRUCTOR_CALL */ syntax,
                assertionSyntax,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ContextInformation(el);
}
/**
 * @summary Encodes a(n) ContextInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContextInformation, encoded as an ASN.1 Element.
 */
export function _encode_ContextInformation(
    value: ContextInformation,
    elGetter: $.ASN1Encoder<ContextInformation>
) {
    if (!_cached_encoder_for_ContextInformation) {
        _cached_encoder_for_ContextInformation = function (
            value: ContextInformation,
            elGetter: $.ASN1Encoder<ContextInformation>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_UnboundedDirectoryString(
                                value.syntax,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.assertionSyntax === undefined
                                ? undefined
                                : _encode_UnboundedDirectoryString(
                                      value.assertionSyntax,
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
    return _cached_encoder_for_ContextInformation(value, elGetter);
}

/**
 * @summary ContextDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContextDescription ::= SEQUENCE {
 *   identifier        CONTEXT.&id,
 *   name              SET SIZE (1..MAX) OF UnboundedDirectoryString OPTIONAL,
 *   description       UnboundedDirectoryString                      OPTIONAL,
 *   obsolete          BOOLEAN                                       DEFAULT FALSE,
 *   information  [0]  ContextInformation,
 *   ... }
 * ```
 *
 * @class
 */
export class ContextDescription {
    constructor(
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: OBJECT_IDENTIFIER,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<UnboundedDirectoryString[]>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<UnboundedDirectoryString>,
        /**
         * @summary `obsolete`.
         * @public
         * @readonly
         */
        readonly obsolete: OPTIONAL<BOOLEAN>,
        /**
         * @summary `information`.
         * @public
         * @readonly
         */
        readonly information: ContextInformation,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ContextDescription
     * @description
     *
     * This takes an `object` and converts it to a `ContextDescription`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ContextDescription`.
     * @returns {ContextDescription}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof ContextDescription]: ContextDescription[_K] }
        >
    ): ContextDescription {
        return new ContextDescription(
            _o.identifier,
            _o.name,
            _o.description,
            _o.obsolete,
            _o.information,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `obsolete`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_obsolete() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of ContextDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ContextDescription: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "identifier",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "name",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec("description", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "obsolete",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "information",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ContextDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ContextDescription: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ContextDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ContextDescription: $.ComponentSpec[] = [];
let _cached_decoder_for_ContextDescription: $.ASN1Decoder<
    ContextDescription
> | null = null;
let _cached_encoder_for_ContextDescription: $.ASN1Encoder<
    ContextDescription
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ContextDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContextDescription} The decoded data structure.
 */
export function _decode_ContextDescription(el: _Element) {
    if (!_cached_decoder_for_ContextDescription) {
        _cached_decoder_for_ContextDescription = function (
            el: _Element
        ): ContextDescription {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let identifier!: OBJECT_IDENTIFIER;
            let name: OPTIONAL<UnboundedDirectoryString[]>;
            let description: OPTIONAL<UnboundedDirectoryString>;
            let obsolete: OPTIONAL<BOOLEAN> =
                ContextDescription._default_value_for_obsolete;
            let information!: ContextInformation;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                identifier: (_el: _Element): void => {
                    identifier = $._decodeObjectIdentifier(_el);
                },
                name: (_el: _Element): void => {
                    name = $._decodeSetOf<UnboundedDirectoryString>(
                        () => _decode_UnboundedDirectoryString
                    )(_el);
                },
                description: (_el: _Element): void => {
                    description = _decode_UnboundedDirectoryString(_el);
                },
                obsolete: (_el: _Element): void => {
                    obsolete = $._decodeBoolean(_el);
                },
                information: (_el: _Element): void => {
                    information = $._decode_explicit<ContextInformation>(
                        () => _decode_ContextInformation
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ContextDescription,
                _extension_additions_list_spec_for_ContextDescription,
                _root_component_type_list_2_spec_for_ContextDescription,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ContextDescription(
                /* SEQUENCE_CONSTRUCTOR_CALL */ identifier,
                name,
                description,
                obsolete,
                information,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ContextDescription(el);
}
/**
 * @summary Encodes a(n) ContextDescription into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContextDescription, encoded as an ASN.1 Element.
 */
export function _encode_ContextDescription(
    value: ContextDescription,
    elGetter: $.ASN1Encoder<ContextDescription>
) {
    if (!_cached_encoder_for_ContextDescription) {
        _cached_encoder_for_ContextDescription = function (
            value: ContextDescription,
            elGetter: $.ASN1Encoder<ContextDescription>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.identifier,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : $._encodeSetOf<UnboundedDirectoryString>(
                                      () => _encode_UnboundedDirectoryString,
                                      $.BER
                                  )(value.name, $.BER),
                            /* IF_ABSENT  */ value.description === undefined
                                ? undefined
                                : _encode_UnboundedDirectoryString(
                                      value.description,
                                      $.BER
                                  ),
                            /* IF_DEFAULT */ value.obsolete === undefined ||
                            $.deepEq(
                                value.obsolete,
                                ContextDescription._default_value_for_obsolete
                            )
                                ? undefined
                                : $._encodeBoolean(value.obsolete, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_ContextInformation,
                                $.BER
                            )(value.information, $.BER),
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
    return _cached_encoder_for_ContextDescription(value, elGetter);
}

/**
 * @summary id_soa_contextTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-soa-contextTypes           OBJECT IDENTIFIER ::= {id-soa 11}
 * ```
 *
 * @constant
 */
export const id_soa_contextTypes: OBJECT_IDENTIFIER = new _OID([11], id_soa);

/**
 * @summary contextTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * contextTypes ATTRIBUTE ::= {
 *   WITH SYNTAX             ContextDescription
 *   EQUALITY MATCHING RULE  objectIdentifierFirstComponentMatch
 *   USAGE                   directoryOperation
 *   ID                      id-soa-contextTypes }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const contextTypes: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ContextDescription,
    },
    encoderFor: {
        "&Type": _encode_ContextDescription,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_soa_contextTypes /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary DITContextUseInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DITContextUseInformation ::= SEQUENCE {
 *   mandatoryContexts  [1]  SET SIZE (1..MAX) OF CONTEXT.&id OPTIONAL,
 *   optionalContexts   [2]  SET SIZE (1..MAX) OF CONTEXT.&id OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class DITContextUseInformation {
    constructor(
        /**
         * @summary `mandatoryContexts`.
         * @public
         * @readonly
         */
        readonly mandatoryContexts: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary `optionalContexts`.
         * @public
         * @readonly
         */
        readonly optionalContexts: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DITContextUseInformation
     * @description
     *
     * This takes an `object` and converts it to a `DITContextUseInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DITContextUseInformation`.
     * @returns {DITContextUseInformation}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof DITContextUseInformation]: DITContextUseInformation[_K];
            }
        >
    ): DITContextUseInformation {
        return new DITContextUseInformation(
            _o.mandatoryContexts,
            _o.optionalContexts,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of DITContextUseInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DITContextUseInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "mandatoryContexts",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "optionalContexts",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of DITContextUseInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DITContextUseInformation: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of DITContextUseInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DITContextUseInformation: $.ComponentSpec[] = [];
let _cached_decoder_for_DITContextUseInformation: $.ASN1Decoder<
    DITContextUseInformation
> | null = null;
let _cached_encoder_for_DITContextUseInformation: $.ASN1Encoder<
    DITContextUseInformation
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DITContextUseInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DITContextUseInformation} The decoded data structure.
 */
export function _decode_DITContextUseInformation(el: _Element) {
    if (!_cached_decoder_for_DITContextUseInformation) {
        _cached_decoder_for_DITContextUseInformation = function (
            el: _Element
        ): DITContextUseInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let mandatoryContexts: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let optionalContexts: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                mandatoryContexts: (_el: _Element): void => {
                    mandatoryContexts = $._decode_explicit<OBJECT_IDENTIFIER[]>(
                        () =>
                            $._decodeSetOf<OBJECT_IDENTIFIER>(
                                () => $._decodeObjectIdentifier
                            )
                    )(_el);
                },
                optionalContexts: (_el: _Element): void => {
                    optionalContexts = $._decode_explicit<OBJECT_IDENTIFIER[]>(
                        () =>
                            $._decodeSetOf<OBJECT_IDENTIFIER>(
                                () => $._decodeObjectIdentifier
                            )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DITContextUseInformation,
                _extension_additions_list_spec_for_DITContextUseInformation,
                _root_component_type_list_2_spec_for_DITContextUseInformation,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DITContextUseInformation(
                /* SEQUENCE_CONSTRUCTOR_CALL */ mandatoryContexts,
                optionalContexts,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DITContextUseInformation(el);
}
/**
 * @summary Encodes a(n) DITContextUseInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DITContextUseInformation, encoded as an ASN.1 Element.
 */
export function _encode_DITContextUseInformation(
    value: DITContextUseInformation,
    elGetter: $.ASN1Encoder<DITContextUseInformation>
) {
    if (!_cached_encoder_for_DITContextUseInformation) {
        _cached_encoder_for_DITContextUseInformation = function (
            value: DITContextUseInformation,
            elGetter: $.ASN1Encoder<DITContextUseInformation>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.mandatoryContexts ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () =>
                                          $._encodeSetOf<OBJECT_IDENTIFIER>(
                                              () => $._encodeObjectIdentifier,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.mandatoryContexts, $.BER),
                            /* IF_ABSENT  */ value.optionalContexts ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSetOf<OBJECT_IDENTIFIER>(
                                              () => $._encodeObjectIdentifier,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.optionalContexts, $.BER),
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
    return _cached_encoder_for_DITContextUseInformation(value, elGetter);
}

/**
 * @summary DITContextUseDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DITContextUseDescription ::= SEQUENCE {
 *   identifier        ATTRIBUTE.&id,
 *   name              SET SIZE (1..MAX) OF UnboundedDirectoryString OPTIONAL,
 *   description       UnboundedDirectoryString OPTIONAL,
 *   obsolete          BOOLEAN DEFAULT FALSE,
 *   information  [0]  DITContextUseInformation,
 *   ... }
 * ```
 *
 * @class
 */
export class DITContextUseDescription {
    constructor(
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: OBJECT_IDENTIFIER,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<UnboundedDirectoryString[]>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<UnboundedDirectoryString>,
        /**
         * @summary `obsolete`.
         * @public
         * @readonly
         */
        readonly obsolete: OPTIONAL<BOOLEAN>,
        /**
         * @summary `information`.
         * @public
         * @readonly
         */
        readonly information: DITContextUseInformation,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DITContextUseDescription
     * @description
     *
     * This takes an `object` and converts it to a `DITContextUseDescription`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DITContextUseDescription`.
     * @returns {DITContextUseDescription}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof DITContextUseDescription]: DITContextUseDescription[_K];
            }
        >
    ): DITContextUseDescription {
        return new DITContextUseDescription(
            _o.identifier,
            _o.name,
            _o.description,
            _o.obsolete,
            _o.information,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `obsolete`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_obsolete() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of DITContextUseDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DITContextUseDescription: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "identifier",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "name",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec("description", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "obsolete",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "information",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of DITContextUseDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DITContextUseDescription: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of DITContextUseDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DITContextUseDescription: $.ComponentSpec[] = [];
let _cached_decoder_for_DITContextUseDescription: $.ASN1Decoder<
    DITContextUseDescription
> | null = null;
let _cached_encoder_for_DITContextUseDescription: $.ASN1Encoder<
    DITContextUseDescription
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DITContextUseDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DITContextUseDescription} The decoded data structure.
 */
export function _decode_DITContextUseDescription(el: _Element) {
    if (!_cached_decoder_for_DITContextUseDescription) {
        _cached_decoder_for_DITContextUseDescription = function (
            el: _Element
        ): DITContextUseDescription {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let identifier!: OBJECT_IDENTIFIER;
            let name: OPTIONAL<UnboundedDirectoryString[]>;
            let description: OPTIONAL<UnboundedDirectoryString>;
            let obsolete: OPTIONAL<BOOLEAN> =
                DITContextUseDescription._default_value_for_obsolete;
            let information!: DITContextUseInformation;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                identifier: (_el: _Element): void => {
                    identifier = $._decodeObjectIdentifier(_el);
                },
                name: (_el: _Element): void => {
                    name = $._decodeSetOf<UnboundedDirectoryString>(
                        () => _decode_UnboundedDirectoryString
                    )(_el);
                },
                description: (_el: _Element): void => {
                    description = _decode_UnboundedDirectoryString(_el);
                },
                obsolete: (_el: _Element): void => {
                    obsolete = $._decodeBoolean(_el);
                },
                information: (_el: _Element): void => {
                    information = $._decode_explicit<DITContextUseInformation>(
                        () => _decode_DITContextUseInformation
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DITContextUseDescription,
                _extension_additions_list_spec_for_DITContextUseDescription,
                _root_component_type_list_2_spec_for_DITContextUseDescription,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DITContextUseDescription(
                /* SEQUENCE_CONSTRUCTOR_CALL */ identifier,
                name,
                description,
                obsolete,
                information,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DITContextUseDescription(el);
}
/**
 * @summary Encodes a(n) DITContextUseDescription into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DITContextUseDescription, encoded as an ASN.1 Element.
 */
export function _encode_DITContextUseDescription(
    value: DITContextUseDescription,
    elGetter: $.ASN1Encoder<DITContextUseDescription>
) {
    if (!_cached_encoder_for_DITContextUseDescription) {
        _cached_encoder_for_DITContextUseDescription = function (
            value: DITContextUseDescription,
            elGetter: $.ASN1Encoder<DITContextUseDescription>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.identifier,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : $._encodeSetOf<UnboundedDirectoryString>(
                                      () => _encode_UnboundedDirectoryString,
                                      $.BER
                                  )(value.name, $.BER),
                            /* IF_ABSENT  */ value.description === undefined
                                ? undefined
                                : _encode_UnboundedDirectoryString(
                                      value.description,
                                      $.BER
                                  ),
                            /* IF_DEFAULT */ value.obsolete === undefined ||
                            $.deepEq(
                                value.obsolete,
                                DITContextUseDescription._default_value_for_obsolete
                            )
                                ? undefined
                                : $._encodeBoolean(value.obsolete, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_DITContextUseInformation,
                                $.BER
                            )(value.information, $.BER),
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
    return _cached_encoder_for_DITContextUseDescription(value, elGetter);
}

/**
 * @summary id_soa_dITContextUse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-soa-dITContextUse          OBJECT IDENTIFIER ::= {id-soa 12}
 * ```
 *
 * @constant
 */
export const id_soa_dITContextUse: OBJECT_IDENTIFIER = new _OID([12], id_soa);

/**
 * @summary dITContextUse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dITContextUse ATTRIBUTE ::= {
 *   WITH SYNTAX             DITContextUseDescription
 *   EQUALITY MATCHING RULE  objectIdentifierFirstComponentMatch
 *   USAGE                   directoryOperation
 *   ID                      id-soa-dITContextUse }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const dITContextUse: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DITContextUseDescription,
    },
    encoderFor: {
        "&Type": _encode_DITContextUseDescription,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_soa_dITContextUse /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary MatchingRuleDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MatchingRuleDescription ::= SEQUENCE {
 *   identifier        MATCHING-RULE.&id,
 *   name              SET SIZE (1..MAX) OF UnboundedDirectoryString OPTIONAL,
 *   description       UnboundedDirectoryString OPTIONAL,
 *   obsolete          BOOLEAN DEFAULT FALSE,
 *   information  [0]  UnboundedDirectoryString OPTIONAL,
 *                 -- describes the ASN.1 syntax
 *   ... }
 * ```
 *
 * @class
 */
export class MatchingRuleDescription {
    constructor(
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: OBJECT_IDENTIFIER,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<UnboundedDirectoryString[]>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<UnboundedDirectoryString>,
        /**
         * @summary `obsolete`.
         * @public
         * @readonly
         */
        readonly obsolete: OPTIONAL<BOOLEAN>,
        /**
         * @summary `information`.
         * @public
         * @readonly
         */
        readonly information: OPTIONAL<UnboundedDirectoryString>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MatchingRuleDescription
     * @description
     *
     * This takes an `object` and converts it to a `MatchingRuleDescription`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MatchingRuleDescription`.
     * @returns {MatchingRuleDescription}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof MatchingRuleDescription]: MatchingRuleDescription[_K];
            }
        >
    ): MatchingRuleDescription {
        return new MatchingRuleDescription(
            _o.identifier,
            _o.name,
            _o.description,
            _o.obsolete,
            _o.information,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `obsolete`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_obsolete() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of MatchingRuleDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MatchingRuleDescription: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "identifier",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "name",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec("description", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "obsolete",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "information",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of MatchingRuleDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MatchingRuleDescription: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of MatchingRuleDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MatchingRuleDescription: $.ComponentSpec[] = [];
let _cached_decoder_for_MatchingRuleDescription: $.ASN1Decoder<
    MatchingRuleDescription
> | null = null;
let _cached_encoder_for_MatchingRuleDescription: $.ASN1Encoder<
    MatchingRuleDescription
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MatchingRuleDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MatchingRuleDescription} The decoded data structure.
 */
export function _decode_MatchingRuleDescription(el: _Element) {
    if (!_cached_decoder_for_MatchingRuleDescription) {
        _cached_decoder_for_MatchingRuleDescription = function (
            el: _Element
        ): MatchingRuleDescription {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let identifier!: OBJECT_IDENTIFIER;
            let name: OPTIONAL<UnboundedDirectoryString[]>;
            let description: OPTIONAL<UnboundedDirectoryString>;
            let obsolete: OPTIONAL<BOOLEAN> =
                MatchingRuleDescription._default_value_for_obsolete;
            let information: OPTIONAL<UnboundedDirectoryString>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                identifier: (_el: _Element): void => {
                    identifier = $._decodeObjectIdentifier(_el);
                },
                name: (_el: _Element): void => {
                    name = $._decodeSetOf<UnboundedDirectoryString>(
                        () => _decode_UnboundedDirectoryString
                    )(_el);
                },
                description: (_el: _Element): void => {
                    description = _decode_UnboundedDirectoryString(_el);
                },
                obsolete: (_el: _Element): void => {
                    obsolete = $._decodeBoolean(_el);
                },
                information: (_el: _Element): void => {
                    information = $._decode_explicit<UnboundedDirectoryString>(
                        () => _decode_UnboundedDirectoryString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MatchingRuleDescription,
                _extension_additions_list_spec_for_MatchingRuleDescription,
                _root_component_type_list_2_spec_for_MatchingRuleDescription,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new MatchingRuleDescription(
                /* SEQUENCE_CONSTRUCTOR_CALL */ identifier,
                name,
                description,
                obsolete,
                information,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_MatchingRuleDescription(el);
}
/**
 * @summary Encodes a(n) MatchingRuleDescription into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MatchingRuleDescription, encoded as an ASN.1 Element.
 */
export function _encode_MatchingRuleDescription(
    value: MatchingRuleDescription,
    elGetter: $.ASN1Encoder<MatchingRuleDescription>
) {
    if (!_cached_encoder_for_MatchingRuleDescription) {
        _cached_encoder_for_MatchingRuleDescription = function (
            value: MatchingRuleDescription,
            elGetter: $.ASN1Encoder<MatchingRuleDescription>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.identifier,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : $._encodeSetOf<UnboundedDirectoryString>(
                                      () => _encode_UnboundedDirectoryString,
                                      $.BER
                                  )(value.name, $.BER),
                            /* IF_ABSENT  */ value.description === undefined
                                ? undefined
                                : _encode_UnboundedDirectoryString(
                                      value.description,
                                      $.BER
                                  ),
                            /* IF_DEFAULT */ value.obsolete === undefined ||
                            $.deepEq(
                                value.obsolete,
                                MatchingRuleDescription._default_value_for_obsolete
                            )
                                ? undefined
                                : $._encodeBoolean(value.obsolete, $.BER),
                            /* IF_ABSENT  */ value.information === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_UnboundedDirectoryString,
                                      $.BER
                                  )(value.information, $.BER),
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
    return _cached_encoder_for_MatchingRuleDescription(value, elGetter);
}

/**
 * @summary id_soa_matchingRules
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-soa-matchingRules          OBJECT IDENTIFIER ::= {id-soa 4}
 * ```
 *
 * @constant
 */
export const id_soa_matchingRules: OBJECT_IDENTIFIER = new _OID([4], id_soa);

/**
 * @summary matchingRules
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * matchingRules ATTRIBUTE ::= {
 *   WITH SYNTAX              MatchingRuleDescription
 *   EQUALITY MATCHING RULE   objectIdentifierFirstComponentMatch
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              matchingRuleDescription.&id
 *   LDAP-NAME                {"matchingRules"}
 *   ID                       id-soa-matchingRules }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const matchingRules: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_MatchingRuleDescription,
    },
    encoderFor: {
        "&Type": _encode_MatchingRuleDescription,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": matchingRuleDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_soa_matchingRules /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary MatchingRuleUseDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MatchingRuleUseDescription ::= SEQUENCE {
 *   identifier        MATCHING-RULE.&id,
 *   name              SET SIZE (1..MAX) OF UnboundedDirectoryString OPTIONAL,
 *   description       UnboundedDirectoryString                      OPTIONAL,
 *   obsolete          BOOLEAN                                       DEFAULT FALSE,
 *   information  [0]  SET OF ATTRIBUTE.&id,
 *   ... }
 * ```
 *
 * @class
 */
export class MatchingRuleUseDescription {
    constructor(
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: OBJECT_IDENTIFIER,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<UnboundedDirectoryString[]>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<UnboundedDirectoryString>,
        /**
         * @summary `obsolete`.
         * @public
         * @readonly
         */
        readonly obsolete: OPTIONAL<BOOLEAN>,
        /**
         * @summary `information`.
         * @public
         * @readonly
         */
        readonly information: OBJECT_IDENTIFIER[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MatchingRuleUseDescription
     * @description
     *
     * This takes an `object` and converts it to a `MatchingRuleUseDescription`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MatchingRuleUseDescription`.
     * @returns {MatchingRuleUseDescription}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof MatchingRuleUseDescription]: MatchingRuleUseDescription[_K];
            }
        >
    ): MatchingRuleUseDescription {
        return new MatchingRuleUseDescription(
            _o.identifier,
            _o.name,
            _o.description,
            _o.obsolete,
            _o.information,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `obsolete`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_obsolete() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of MatchingRuleUseDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MatchingRuleUseDescription: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "identifier",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "name",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec("description", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "obsolete",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "information",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of MatchingRuleUseDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MatchingRuleUseDescription: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of MatchingRuleUseDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MatchingRuleUseDescription: $.ComponentSpec[] = [];
let _cached_decoder_for_MatchingRuleUseDescription: $.ASN1Decoder<
    MatchingRuleUseDescription
> | null = null;
let _cached_encoder_for_MatchingRuleUseDescription: $.ASN1Encoder<
    MatchingRuleUseDescription
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MatchingRuleUseDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MatchingRuleUseDescription} The decoded data structure.
 */
export function _decode_MatchingRuleUseDescription(el: _Element) {
    if (!_cached_decoder_for_MatchingRuleUseDescription) {
        _cached_decoder_for_MatchingRuleUseDescription = function (
            el: _Element
        ): MatchingRuleUseDescription {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let identifier!: OBJECT_IDENTIFIER;
            let name: OPTIONAL<UnboundedDirectoryString[]>;
            let description: OPTIONAL<UnboundedDirectoryString>;
            let obsolete: OPTIONAL<BOOLEAN> =
                MatchingRuleUseDescription._default_value_for_obsolete;
            let information!: OBJECT_IDENTIFIER[];
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                identifier: (_el: _Element): void => {
                    identifier = $._decodeObjectIdentifier(_el);
                },
                name: (_el: _Element): void => {
                    name = $._decodeSetOf<UnboundedDirectoryString>(
                        () => _decode_UnboundedDirectoryString
                    )(_el);
                },
                description: (_el: _Element): void => {
                    description = _decode_UnboundedDirectoryString(_el);
                },
                obsolete: (_el: _Element): void => {
                    obsolete = $._decodeBoolean(_el);
                },
                information: (_el: _Element): void => {
                    information = $._decode_explicit<OBJECT_IDENTIFIER[]>(() =>
                        $._decodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MatchingRuleUseDescription,
                _extension_additions_list_spec_for_MatchingRuleUseDescription,
                _root_component_type_list_2_spec_for_MatchingRuleUseDescription,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new MatchingRuleUseDescription(
                /* SEQUENCE_CONSTRUCTOR_CALL */ identifier,
                name,
                description,
                obsolete,
                information,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_MatchingRuleUseDescription(el);
}
/**
 * @summary Encodes a(n) MatchingRuleUseDescription into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MatchingRuleUseDescription, encoded as an ASN.1 Element.
 */
export function _encode_MatchingRuleUseDescription(
    value: MatchingRuleUseDescription,
    elGetter: $.ASN1Encoder<MatchingRuleUseDescription>
) {
    if (!_cached_encoder_for_MatchingRuleUseDescription) {
        _cached_encoder_for_MatchingRuleUseDescription = function (
            value: MatchingRuleUseDescription,
            elGetter: $.ASN1Encoder<MatchingRuleUseDescription>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.identifier,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : $._encodeSetOf<UnboundedDirectoryString>(
                                      () => _encode_UnboundedDirectoryString,
                                      $.BER
                                  )(value.name, $.BER),
                            /* IF_ABSENT  */ value.description === undefined
                                ? undefined
                                : _encode_UnboundedDirectoryString(
                                      value.description,
                                      $.BER
                                  ),
                            /* IF_DEFAULT */ value.obsolete === undefined ||
                            $.deepEq(
                                value.obsolete,
                                MatchingRuleUseDescription._default_value_for_obsolete
                            )
                                ? undefined
                                : $._encodeBoolean(value.obsolete, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () =>
                                    $._encodeSetOf<OBJECT_IDENTIFIER>(
                                        () => $._encodeObjectIdentifier,
                                        $.BER
                                    ),
                                $.BER
                            )(value.information, $.BER),
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
    return _cached_encoder_for_MatchingRuleUseDescription(value, elGetter);
}

/**
 * @summary id_soa_matchingRuleUse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-soa-matchingRuleUse        OBJECT IDENTIFIER ::= {id-soa 8}
 * ```
 *
 * @constant
 */
export const id_soa_matchingRuleUse: OBJECT_IDENTIFIER = new _OID([8], id_soa);

/**
 * @summary matchingRuleUse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * matchingRuleUse ATTRIBUTE ::= {
 *   WITH SYNTAX              MatchingRuleUseDescription
 *   EQUALITY MATCHING RULE   objectIdentifierFirstComponentMatch
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              matchingRuleUseDescription.&id
 *   LDAP-NAME                {"matchingRuleUse"}
 *   ID                       id-soa-matchingRuleUse }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const matchingRuleUse: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_MatchingRuleUseDescription,
    },
    encoderFor: {
        "&Type": _encode_MatchingRuleUseDescription,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": matchingRuleUseDescription["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_soa_matchingRuleUse /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_soc_subschema
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-soc-subschema OBJECT IDENTIFIER ::= {id-soc 1}
 * ```
 *
 * @constant
 */
export const id_soc_subschema: OBJECT_IDENTIFIER = new _OID([1], id_soc);

/**
 * @summary subschema
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subschema OBJECT-CLASS ::= {
 *   KIND        auxiliary
 *   MAY CONTAIN { dITStructureRules |
 *                 nameForms |
 *                 dITContentRules |
 *                 objectClasses |
 *                 attributeTypes |
 *                 friends |
 *                 contextTypes |
 *                 dITContextUse |
 *                 matchingRules |
 *                 matchingRuleUse |
 *                 ldapSyntaxes }
 *   LDAP-NAME   {"subschema"}
 *   ID          id-soc-subschema }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const subschema: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        dITStructureRules,
        nameForms,
        dITContentRules,
        objectClasses,
        attributeTypes,
        friends,
        contextTypes,
        dITContextUse,
        matchingRules,
        matchingRuleUse,
        ldapSyntaxes,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_soc_subschema /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_soa_structuralObjectClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-soa-structuralObjectClass  OBJECT IDENTIFIER ::= {id-soa 9}
 * ```
 *
 * @constant
 */
export const id_soa_structuralObjectClass: OBJECT_IDENTIFIER = new _OID(
    [9],
    id_soa
);

/**
 * @summary structuralObjectClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * structuralObjectClass ATTRIBUTE ::= {
 *   WITH SYNTAX             OBJECT IDENTIFIER
 *   EQUALITY MATCHING RULE  objectIdentifierMatch
 *   SINGLE VALUE            TRUE
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   directoryOperation
 *   LDAP-SYNTAX             oid.&id
 *   LDAP-NAME               {"structuralObjectClass"}
 *   ID                      id-soa-structuralObjectClass }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const structuralObjectClass: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_soa_structuralObjectClass /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_soa_governingStructureRule
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-soa-governingStructureRule OBJECT IDENTIFIER ::= {id-soa 10}
 * ```
 *
 * @constant
 */
export const id_soa_governingStructureRule: OBJECT_IDENTIFIER = new _OID(
    [10],
    id_soa
);

/**
 * @summary governingStructureRule
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * governingStructureRule ATTRIBUTE ::= {
 *   WITH SYNTAX             INTEGER
 *   EQUALITY MATCHING RULE  integerMatch
 *   SINGLE VALUE            TRUE
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   directoryOperation
 *   LDAP-SYNTAX             integer.&id
 *   LDAP-NAME               {"governingStructureRule"}
 *   ID                      id-soa-governingStructureRule }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const governingStructureRule: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_soa_governingStructureRule /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* END_MODULE SchemaAdministration */
/* eslint-enable */
