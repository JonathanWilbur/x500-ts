
// LdapSystemSchema
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import * as UsefulDefinitions from "./UsefulDefinitions";
import {
    directoryAbstractService,
    id_lat,
    id_oat,
    informationFramework,
    selectedAttributeTypes
} from "./UsefulDefinitions";
export {
    directoryAbstractService,
    id_lat,
    id_oat,
    informationFramework,
    selectedAttributeTypes
} from "./UsefulDefinitions";

import * as InformationFramework from "./InformationFramework";
import {
    ATTRIBUTE,
    DistinguishedName,
    SYNTAX_NAME,
    _decode_DistinguishedName,
    _encode_DistinguishedName
} from "./InformationFramework";
export {
    ATTRIBUTE,
    DistinguishedName,
    SYNTAX_NAME,
    _decode_DistinguishedName,
    _encode_DistinguishedName
} from "./InformationFramework";

import * as DirectoryAbstractService from "./DirectoryAbstractService";
import {
    ub_saslMechanism
} from "./DirectoryAbstractService";
export {
    ub_saslMechanism
} from "./DirectoryAbstractService";

import * as SelectedAttributeTypes from "./SelectedAttributeTypes";
import {
    directoryString,
    dn,
    ia5String,
    integer,
    ldapSyntaxDescription,
    objectIdentifierFirstComponentMatch,
    oid,
    UnboundedDirectoryString,
    DirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString
} from "./SelectedAttributeTypes";
export {
    directoryString,
    dn,
    ia5String,
    integer,
    ldapSyntaxDescription,
    objectIdentifierFirstComponentMatch,
    oid,
    UnboundedDirectoryString,
    DirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString
} from "./SelectedAttributeTypes";


const itu_t: number = 0;
const itu_r: number = 0;
const ccitt: number = 0;
const iso: number = 1;
const joint_iso_itu_t: number = 2;
const joint_iso_ccitt: number = 2;

// TODO: ObjectAssignment: namingContexts

// TODO: ObjectAssignment: altServer

// TODO: ObjectAssignment: supportedExtension

// TODO: ObjectAssignment: supportedControl

// TODO: ObjectAssignment: supportedSASLMechanisms

// TODO: ObjectAssignment: supportedLDAPVersion

// TODO: ObjectAssignment: supportedFeatures

// TODO: ObjectAssignment: ldapSyntaxes

export class LdapSyntaxDescription {
    constructor (
        readonly identifier: asn1.OBJECT_IDENTIFIER,
        readonly description: UnboundedDirectoryString | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_LdapSyntaxDescription: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("identifier", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("description", true, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_LdapSyntaxDescription: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_LdapSyntaxDescription: __utils.ComponentSpec[] = [
    
];
export const _decode_LdapSyntaxDescription = function (el: asn1.ASN1Element): LdapSyntaxDescription {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let identifier!: asn1.OBJECT_IDENTIFIER;
    let description: asn1.OPTIONAL<UnboundedDirectoryString>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "identifier": (_el: asn1.ASN1Element): void => { identifier = __utils._decodeObjectIdentifier(_el); },
        "description": (_el: asn1.ASN1Element): void => { description = _decode_UnboundedDirectoryString(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LdapSyntaxDescription,
        _extension_additions_list_spec_for_LdapSyntaxDescription,
        _root_component_type_list_2_spec_for_LdapSyntaxDescription,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LdapSyntaxDescription( /* SEQUENCE_CONSTRUCTOR_CALL */
        identifier,
        description,
        _unrecognizedExtensionsList
    );
};
export const _encode_LdapSyntaxDescription = function (value: LdapSyntaxDescription, elGetter: __utils.ASN1Encoder<LdapSyntaxDescription>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeObjectIdentifier(value.identifier, __utils.BER),
            (value.description ? _encode_UnboundedDirectoryString(value.description, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export const id_lat_namingContexts: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    5,
], id_lat);

export const id_lat_altServer: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    6,
], id_lat);

export const id_lat_supportedExtension: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    7,
], id_lat);

export const id_lat_supportedControl: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    13,
], id_lat);

export const id_lat_supportedSASLMechanisms: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    14,
], id_lat);

export const id_lat_supportedLDAPVersion: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    15,
], id_lat);

export const id_soa_ldapSyntaxes: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    16,
], id_lat);

export const id_oat_supportedFeatures: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    5,
], id_oat);

