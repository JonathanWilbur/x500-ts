/**
 * @module SelectedObjectClasses
 * @summary The ASN.1 module `SelectedObjectClasses`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.selectedObjectClasses.9
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
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import {
    authorityRevocationList,
    cACertificate,
    certificateRevocationList,
    userPassword,
} from "./AuthenticationFramework";
import * as InformationFramework from "./InformationFramework";
import { ATTRIBUTE, NAME_FORM, OBJECT_CLASS } from "./InformationFramework";
import {
    businessCategory,
    commonName,
    contentUrl,
    description,
    destinationIndicator,
    epc,
    epcInUrn,
    facsimileTelephoneNumber,
    internationalISDNNumber,
    localityName,
    member,
    oidC,
    oidC1,
    oidC2,
    organizationalUnitName,
    organizationName,
    owner,
    physicalDeliveryOfficeName,
    postalAddress,
    postalCode,
    postOfficeBox,
    preferredDeliveryMethod,
    presentationAddress,
    registeredAddress,
    roleOccupant,
    searchGuide,
    seeAlso,
    serialNumber,
    stateOrProvinceName,
    streetAddress,
    supportedApplicationContext,
    surname,
    tagAfi,
    tagLocation,
    tagOid,
    telephoneNumber,
    telexNumber,
    title,
    uii,
    uiiFormat,
    uiiInUrn,
    uniqueMember,
    x121Address,
} from "./SelectedAttributeTypes";
import { id, id_nf, id_oc } from "./UsefulDefinitions";
export {
    authorityRevocationList,
    cACertificate,
    certificateRevocationList,
    crossCertificatePair,
    deltaRevocationList,
    supportedAlgorithms,
    userCertificate,
    userPassword,
} from "./AuthenticationFramework";
export {
    alias,
    ATTRIBUTE,
    NAME_FORM,
    OBJECT_CLASS,
    top,
} from "./InformationFramework";
export { userPwd } from "./PasswordPolicy";
export {
    businessCategory,
    commonName,
    contentUrl,
    countryName,
    description,
    destinationIndicator,
    dmdName,
    epc,
    epcInUrn,
    facsimileTelephoneNumber,
    internationalISDNNumber,
    knowledgeInformation,
    localityName,
    member,
    oidC,
    oidC1,
    oidC2,
    organizationalUnitName,
    organizationName,
    owner,
    physicalDeliveryOfficeName,
    postalAddress,
    postalCode,
    postOfficeBox,
    preferredDeliveryMethod,
    presentationAddress,
    registeredAddress,
    roleOccupant,
    searchGuide,
    seeAlso,
    serialNumber,
    stateOrProvinceName,
    streetAddress,
    supportedApplicationContext,
    surname,
    tagAfi,
    tagLocation,
    tagOid,
    telephoneNumber,
    telexNumber,
    title,
    uii,
    uiiFormat,
    uiiInUrn,
    uniqueMember,
    urnC,
    x121Address,
} from "./SelectedAttributeTypes";
export { id, id_nf, id_oc } from "./UsefulDefinitions";

/**
 * @summary id_oc_groupOfUniqueNames
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-groupOfUniqueNames       OBJECT IDENTIFIER ::= {id-oc 17}
 * ```
 *
 * @constant
 */
export const id_oc_groupOfUniqueNames: OBJECT_IDENTIFIER = new _OID(
    [17],
    id_oc
);

/**
 * @summary groupOfUniqueNames
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * groupOfUniqueNames OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {commonName |
 *                  uniqueMember}
 *   MAY CONTAIN   {description |
 *                  organizationName |
 *                  organizationalUnitName |
 *                  owner |
 *                  seeAlso |
 *                  businessCategory}
 *   LDAP-NAME     {"groupOfUniqueNames"}  -- RFC 4519
 *   ID            id-oc-groupOfUniqueNames }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const groupOfUniqueNames: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": [
        commonName,
        uniqueMember,
    ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        description,
        organizationName,
        organizationalUnitName,
        owner,
        seeAlso,
        businessCategory,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_groupOfUniqueNames /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_strongAuthenticationUser
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-strongAuthenticationUser OBJECT IDENTIFIER ::= {id-oc 15}
 * ```
 *
 * @constant
 */
export const id_oc_strongAuthenticationUser: OBJECT_IDENTIFIER = new _OID(
    [15],
    id_oc
);

/**
 * @summary strongAuthenticationUser
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * strongAuthenticationUser OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   KIND          auxiliary
 *   MUST CONTAIN  {userCertificate}
 *   LDAP-NAME     {"strongAuthenticationUser"} -- RFC 4523
 *   LDAP-DESC     {"X.521 strong authentication user"}
 *   ID            id-oc-strongAuthenticationUser }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const strongAuthenticationUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&ldapName": undefined,
    "&ldapDesc": undefined,
    "&id": id_oc_strongAuthenticationUser /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_userSecurityInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-userSecurityInformation  OBJECT IDENTIFIER ::= {id-oc 18}
 * ```
 *
 * @constant
 */
export const id_oc_userSecurityInformation: OBJECT_IDENTIFIER = new _OID(
    [18],
    id_oc
);

/**
 * @summary userSecurityInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userSecurityInformation OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   KIND          auxiliary
 *   MAY CONTAIN   {supportedAlgorithms}
 *   LDAP-NAME     {"userSecurityInformation"} -- RFC 4523
 *   LDAP-DESC     {"X.521 user security information"}
 *   ID            id-oc-userSecurityInformation }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const userSecurityInformation: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": undefined,
    "&ldapName": undefined,
    "&ldapDesc": undefined,
    "&id": id_oc_userSecurityInformation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_userPwdClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-userPwdClass             OBJECT IDENTIFIER ::= {id-oc 41}
 * ```
 *
 * @constant
 */
export const id_oc_userPwdClass: OBJECT_IDENTIFIER = new _OID([41], id_oc);

/**
 * @summary userPwdClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userPwdClass  OBJECT-CLASS ::= {
 *   KIND          auxiliary
 *   MAY CONTAIN   { userPwd }
 *   ID            id-oc-userPwdClass }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const userPwdClass: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": undefined,
    "&id": id_oc_userPwdClass /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_certificationAuthority
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-certificationAuthority   OBJECT IDENTIFIER ::= {id-oc 16}
 * ```
 *
 * @constant
 */
export const id_oc_certificationAuthority: OBJECT_IDENTIFIER = new _OID(
    [16],
    id_oc
);

/**
 * @summary certificationAuthority
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificationAuthority OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   KIND          auxiliary
 *   MUST CONTAIN  {cACertificate |
 *                  certificateRevocationList |
 *                  authorityRevocationList}
 *   MAY CONTAIN   {crossCertificatePair}
 *   LDAP-NAME     {"certificationAuthority"} -- RFC 4523
 *   LDAP-DESC     {"X.509 certificate authority"}
 *   ID            id-oc-certificationAuthority }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const certificationAuthority: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [
        cACertificate,
        certificateRevocationList,
        authorityRevocationList,
    ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": undefined,
    "&ldapName": undefined,
    "&ldapDesc": undefined,
    "&id": id_oc_certificationAuthority /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_certificationAuthority_V2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-certificationAuthority-V2
 *                                OBJECT IDENTIFIER ::= {id-oc 16 2}
 * ```
 *
 * @constant
 */
export const id_oc_certificationAuthority_V2: OBJECT_IDENTIFIER = new _OID(
    [16, 2],
    id_oc
);

/**
 * @summary certificationAuthority_V2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificationAuthority-V2 OBJECT-CLASS ::= {
 *   SUBCLASS OF   {certificationAuthority}
 *   KIND          auxiliary
 *   MAY CONTAIN   {deltaRevocationList}
 *   LDAP-NAME     {"certificationAuthority-V2"}
 *   LDAP-DESC     {"X.509 certificate authority, version 2"} -- RFC 4523
 *   ID            id-oc-certificationAuthority-V2 }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const certificationAuthority_V2: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": undefined,
    "&ldapName": undefined,
    "&ldapDesc": undefined,
    "&id": id_oc_certificationAuthority_V2 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_oidC1obj
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-oidC1obj                 OBJECT IDENTIFIER ::= {id-oc 35}
 * ```
 *
 * @constant
 */
export const id_oc_oidC1obj: OBJECT_IDENTIFIER = new _OID([35], id_oc);

/**
 * @summary oidC1obj
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidC1obj OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {oidC}
 *   LDAP-NAME     {"oidC1obj"}
 *   ID            id-oc-oidC1obj }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const oidC1obj: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": undefined,
    "&ldapName": undefined,
    "&id": id_oc_oidC1obj /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_oidC2obj
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-oidC2obj                 OBJECT IDENTIFIER ::= {id-oc 36}
 * ```
 *
 * @constant
 */
export const id_oc_oidC2obj: OBJECT_IDENTIFIER = new _OID([36], id_oc);

/**
 * @summary oidC2obj
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidC2obj OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {oidC}
 *   LDAP-NAME     {"oidC2obj"}
 *   ID            id-oc-oidC2obj }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const oidC2obj: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": undefined,
    "&ldapName": undefined,
    "&id": id_oc_oidC2obj /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_isoTagInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-isoTagInfo               OBJECT IDENTIFIER ::= {id-oc 38}
 * ```
 *
 * @constant
 */
export const id_oc_isoTagInfo: OBJECT_IDENTIFIER = new _OID([38], id_oc);

/**
 * @summary isoTagInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * isoTagInfo OBJECT-CLASS ::= {
 *   SUBCLASS OF  { top }
 *   KIND         auxiliary
 *   MAY CONTAIN  { tagOid |
 *                  tagAfi |
 *                  uii |
 *                  uiiInUrn |
 *                  contentUrl |
 *                  tagLocation }
 *   LDAP-NAME    {"isoTagInfo"}
 *   ID           id-oc-isoTagInfo }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const isoTagInfo: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        tagOid,
        tagAfi,
        uii,
        uiiInUrn,
        contentUrl,
        tagLocation,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_isoTagInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_isoTagType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-isoTagType               OBJECT IDENTIFIER ::= {id-oc 39}
 * ```
 *
 * @constant
 */
export const id_oc_isoTagType: OBJECT_IDENTIFIER = new _OID([39], id_oc);

/**
 * @summary isoTagType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * isoTagType  OBJECT-CLASS ::= {
 *   SUBCLASS OF  { top }
 *   KIND         auxiliary
 *   MAY CONTAIN  { tagOid |
 *                  tagAfi |
 *                  uiiFormat }
 *   LDAP-NAME    {"isoTagType"}
 *   ID           id-oc-isoTagType }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const isoTagType: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        tagOid,
        tagAfi,
        uiiFormat,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_isoTagType /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_epcTagInfoObj
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-epcTagInfoObj            OBJECT IDENTIFIER ::= {id-oc 43}
 * ```
 *
 * @constant
 */
export const id_oc_epcTagInfoObj: OBJECT_IDENTIFIER = new _OID([43], id_oc);

/**
 * @summary epcTagInfoObj
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * epcTagInfoObj OBJECT-CLASS ::= {
 *   SUBCLASS OF  { top }
 *   KIND         auxiliary
 *   MAY CONTAIN  { epc |
 *                  epcInUrn |
 *                  contentUrl |
 *                  tagLocation }
 *   LDAP-NAME    {"epcTagInfoObj"}
 *   ID           id-oc-epcTagInfoObj }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const epcTagInfoObj: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        epc,
        epcInUrn,
        contentUrl,
        tagLocation,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_epcTagInfoObj /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_epcTagTypeObj
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-epcTagTypeObj            OBJECT IDENTIFIER ::= {id-oc 44}
 * ```
 *
 * @constant
 */
export const id_oc_epcTagTypeObj: OBJECT_IDENTIFIER = new _OID([44], id_oc);

/**
 * @summary epcTagTypeObj
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * epcTagTypeObj OBJECT-CLASS ::= {
 *   SUBCLASS OF  { top }
 *   KIND         auxiliary
 *   MAY CONTAIN  { uiiFormat }
 *   LDAP-NAME    {"epcTagTypeObj"}
 *   ID           id-oc-epcTagTypeObj }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const epcTagTypeObj: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": undefined,
    "&ldapName": undefined,
    "&id": id_oc_epcTagTypeObj /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_country
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-country                  OBJECT IDENTIFIER ::= {id-oc 2}
 * ```
 *
 * @constant
 */
export const id_oc_country: OBJECT_IDENTIFIER = new _OID([2], id_oc);

/**
 * @summary country
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * country OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {countryName}
 *   MAY CONTAIN   {description |
 *                  searchGuide}
 *   LDAP-NAME     {"country"}  -- RFC 4519
 *   ID            id-oc-country }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const country: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": undefined,
    "&OptionalAttributes": [
        description,
        searchGuide,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_country /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_nf_countryNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nf-countryNameForm          OBJECT IDENTIFIER ::= {id-nf 0}
 * ```
 *
 * @constant
 */
export const id_nf_countryNameForm: OBJECT_IDENTIFIER = new _OID([0], id_nf);

/**
 * @summary countryNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * countryNameForm NAME-FORM ::= {
 *   NAMES            country
 *   WITH ATTRIBUTES  {countryName}
 *   ID               id-nf-countryNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const countryNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": country /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_countryNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary LocaleAttributeSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocaleAttributeSet ATTRIBUTE ::= {localityName |
 *    stateOrProvinceName |
 *    streetAddress}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const LocaleAttributeSet: ATTRIBUTE[] = [
    localityName,
    stateOrProvinceName,
    streetAddress,
];

/**
 * @summary id_oc_locality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-locality                 OBJECT IDENTIFIER ::= {id-oc 3}
 * ```
 *
 * @constant
 */
export const id_oc_locality: OBJECT_IDENTIFIER = new _OID([3], id_oc);

/**
 * @summary locality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * locality OBJECT-CLASS ::= {
 *   SUBCLASS OF  {top}
 *   MAY CONTAIN  {description |
 *                 searchGuide |
 *                 LocaleAttributeSet |
 *                 seeAlso}
 *   LDAP-NAME    {"locality"}  -- RFC 4519
 *   ID           id-oc-locality }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const locality: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&OptionalAttributes": [
        description,
        searchGuide,
        ...LocaleAttributeSet,
        seeAlso,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_locality /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_nf_locNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nf-locNameForm              OBJECT IDENTIFIER ::= {id-nf 1}
 * ```
 *
 * @constant
 */
export const id_nf_locNameForm: OBJECT_IDENTIFIER = new _OID([1], id_nf);

/**
 * @summary locNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * locNameForm NAME-FORM ::= {
 *   NAMES            locality
 *   WITH ATTRIBUTES  {localityName}
 *   ID               id-nf-locNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const locNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": locality /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_locNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_nf_sOPNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nf-sOPNameForm              OBJECT IDENTIFIER ::= {id-nf 2}
 * ```
 *
 * @constant
 */
export const id_nf_sOPNameForm: OBJECT_IDENTIFIER = new _OID([2], id_nf);

/**
 * @summary sOPNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sOPNameForm NAME-FORM ::= {
 *   NAMES            locality
 *   WITH ATTRIBUTES  {stateOrProvinceName}
 *   ID               id-nf-sOPNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const sOPNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": locality /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_sOPNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary PostalAttributeSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PostalAttributeSet ATTRIBUTE ::= {physicalDeliveryOfficeName |
 *    postalAddress |
 *    postalCode |
 *    postOfficeBox |
 *    streetAddress}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const PostalAttributeSet: ATTRIBUTE[] = [
    physicalDeliveryOfficeName,
    postalAddress,
    postalCode,
    postOfficeBox,
    streetAddress,
];

/**
 * @summary TelecommunicationAttributeSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TelecommunicationAttributeSet ATTRIBUTE ::= {facsimileTelephoneNumber |
 *    internationalISDNNumber |
 *    telephoneNumber |
 *    telexNumber |
 *    preferredDeliveryMethod |
 *    destinationIndicator |
 *    registeredAddress |
 *    x121Address}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const TelecommunicationAttributeSet: ATTRIBUTE[] = [
    facsimileTelephoneNumber,
    internationalISDNNumber,
    telephoneNumber,
    telexNumber,
    preferredDeliveryMethod,
    destinationIndicator,
    registeredAddress,
    x121Address,
];

/**
 * @summary OrganizationalAttributeSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OrganizationalAttributeSet ATTRIBUTE ::= {description |
 *    LocaleAttributeSet |
 *    PostalAttributeSet |
 *    TelecommunicationAttributeSet |
 *    businessCategory |
 *    seeAlso |
 *    searchGuide |
 *    userPassword}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const OrganizationalAttributeSet: ATTRIBUTE[] = [
    description,
    ...LocaleAttributeSet,
    ...PostalAttributeSet,
    ...TelecommunicationAttributeSet,
    businessCategory,
    seeAlso,
    searchGuide,
    userPassword,
];

/**
 * @summary id_oc_organization
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-organization             OBJECT IDENTIFIER ::= {id-oc 4}
 * ```
 *
 * @constant
 */
export const id_oc_organization: OBJECT_IDENTIFIER = new _OID([4], id_oc);

/**
 * @summary organization
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * organization OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {organizationName}
 *   MAY CONTAIN   {OrganizationalAttributeSet}
 *   LDAP-NAME     {"organization"}  -- RFC 4519
 *   ID            id-oc-organization }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const organization: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": undefined,
    "&OptionalAttributes": [
        ...OrganizationalAttributeSet,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_organization /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_nf_orgNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nf-orgNameForm              OBJECT IDENTIFIER ::= {id-nf 3}
 * ```
 *
 * @constant
 */
export const id_nf_orgNameForm: OBJECT_IDENTIFIER = new _OID([3], id_nf);

/**
 * @summary orgNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * orgNameForm NAME-FORM ::= {
 *   NAMES            organization
 *   WITH ATTRIBUTES  {organizationName}
 *   ID               id-nf-orgNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const orgNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": organization /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_orgNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_organizationalUnit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-organizationalUnit       OBJECT IDENTIFIER ::= {id-oc 5}
 * ```
 *
 * @constant
 */
export const id_oc_organizationalUnit: OBJECT_IDENTIFIER = new _OID([5], id_oc);

/**
 * @summary organizationalUnit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * organizationalUnit OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {organizationalUnitName}
 *   MAY CONTAIN   {OrganizationalAttributeSet}
 *   LDAP-NAME     {"organizationalUnit"}  -- RFC 4519
 *   ID            id-oc-organizationalUnit }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const organizationalUnit: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": undefined,
    "&OptionalAttributes": [
        ...OrganizationalAttributeSet,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_organizationalUnit /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_nf_orgUnitNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nf-orgUnitNameForm          OBJECT IDENTIFIER ::= {id-nf 4}
 * ```
 *
 * @constant
 */
export const id_nf_orgUnitNameForm: OBJECT_IDENTIFIER = new _OID([4], id_nf);

/**
 * @summary orgUnitNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * orgUnitNameForm NAME-FORM ::= {
 *   NAMES            organizationalUnit
 *   WITH ATTRIBUTES  {organizationalUnitName}
 *   ID               id-nf-orgUnitNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const orgUnitNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": organizationalUnit /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_orgUnitNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_person
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-person                   OBJECT IDENTIFIER ::= {id-oc 6}
 * ```
 *
 * @constant
 */
export const id_oc_person: OBJECT_IDENTIFIER = new _OID([6], id_oc);

/**
 * @summary person
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * person OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {commonName |
 *                  surname}
 *   MAY CONTAIN   {description |
 *                  telephoneNumber |
 *                  userPassword |
 *                  seeAlso}
 *   LDAP-NAME     {"person"}  -- RFC 4519
 *   ID            id-oc-person }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const person: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": [commonName, surname] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        description,
        telephoneNumber,
        userPassword,
        seeAlso,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_person /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_nf_personNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nf-personNameForm           OBJECT IDENTIFIER ::= {id-nf 5}
 * ```
 *
 * @constant
 */
export const id_nf_personNameForm: OBJECT_IDENTIFIER = new _OID([5], id_nf);

/**
 * @summary personNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * personNameForm NAME-FORM ::= {
 *   NAMES            person
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-personNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const personNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": person /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_personNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_organizationalPerson
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-organizationalPerson     OBJECT IDENTIFIER ::= {id-oc 7}
 * ```
 *
 * @constant
 */
export const id_oc_organizationalPerson: OBJECT_IDENTIFIER = new _OID(
    [7],
    id_oc
);

/**
 * @summary organizationalPerson
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * organizationalPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF  {person}
 *   MAY CONTAIN  {LocaleAttributeSet |
 *                 PostalAttributeSet |
 *                 TelecommunicationAttributeSet |
 *                 organizationalUnitName |
 *                 title}
 *   LDAP-NAME    {"organizationalPerson"}  -- RFC 4519
 *   ID           id-oc-organizationalPerson }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const organizationalPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&OptionalAttributes": [
        ...LocaleAttributeSet,
        ...PostalAttributeSet,
        ...TelecommunicationAttributeSet,
        organizationalUnitName,
        title,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_organizationalPerson /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_nf_orgPersonNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nf-orgPersonNameForm        OBJECT IDENTIFIER ::= {id-nf 6}
 * ```
 *
 * @constant
 */
export const id_nf_orgPersonNameForm: OBJECT_IDENTIFIER = new _OID([6], id_nf);

/**
 * @summary orgPersonNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * orgPersonNameForm NAME-FORM ::= {
 *   NAMES            organizationalPerson
 *   WITH ATTRIBUTES  {commonName}
 *   AND OPTIONALLY   {organizationalUnitName}
 *   ID               id-nf-orgPersonNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const orgPersonNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": organizationalPerson /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&OptionalAttributes": undefined,
    "&id": id_nf_orgPersonNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_organizationalRole
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-organizationalRole       OBJECT IDENTIFIER ::= {id-oc 8}
 * ```
 *
 * @constant
 */
export const id_oc_organizationalRole: OBJECT_IDENTIFIER = new _OID([8], id_oc);

/**
 * @summary organizationalRole
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * organizationalRole OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {commonName}
 *   MAY CONTAIN   {description |
 *                  LocaleAttributeSet |
 *                  organizationalUnitName |
 *                  PostalAttributeSet |
 *                  preferredDeliveryMethod |
 *                  roleOccupant |
 *                  seeAlso |
 *                  TelecommunicationAttributeSet}
 *   LDAP-NAME      {"organizationalRole"}  -- RFC 4519
 *   ID            id-oc-organizationalRole }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const organizationalRole: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": undefined,
    "&OptionalAttributes": [
        description,
        ...LocaleAttributeSet,
        organizationalUnitName,
        ...PostalAttributeSet,
        preferredDeliveryMethod,
        roleOccupant,
        seeAlso,
        ...TelecommunicationAttributeSet,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_organizationalRole /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_nf_orgRoleNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nf-orgRoleNameForm          OBJECT IDENTIFIER ::= {id-nf 7}
 * ```
 *
 * @constant
 */
export const id_nf_orgRoleNameForm: OBJECT_IDENTIFIER = new _OID([7], id_nf);

/**
 * @summary orgRoleNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * orgRoleNameForm NAME-FORM ::= {
 *   NAMES            organizationalRole
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-orgRoleNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const orgRoleNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": organizationalRole /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_orgRoleNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_groupOfNames
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-groupOfNames             OBJECT IDENTIFIER ::= {id-oc 9}
 * ```
 *
 * @constant
 */
export const id_oc_groupOfNames: OBJECT_IDENTIFIER = new _OID([9], id_oc);

/**
 * @summary groupOfNames
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * groupOfNames OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {commonName | member}
 *   MAY CONTAIN   {description |
 *                  organizationName |
 *                  organizationalUnitName |
 *                  owner |
 *                  seeAlso |
 *                  businessCategory}
 *   LDAP-NAME     {"groupOfNames"}  -- RFC 4519
 *   ID            id-oc-groupOfNames }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const groupOfNames: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": [commonName, member] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        description,
        organizationName,
        organizationalUnitName,
        owner,
        seeAlso,
        businessCategory,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_groupOfNames /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_nf_gONNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nf-gONNameForm              OBJECT IDENTIFIER ::= {id-nf 8}
 * ```
 *
 * @constant
 */
export const id_nf_gONNameForm: OBJECT_IDENTIFIER = new _OID([8], id_nf);

/**
 * @summary gONNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * gONNameForm NAME-FORM ::= {
 *   NAMES            groupOfNames
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-gONNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const gONNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": groupOfNames /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_gONNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_residentialPerson
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-residentialPerson        OBJECT IDENTIFIER ::= {id-oc 10}
 * ```
 *
 * @constant
 */
export const id_oc_residentialPerson: OBJECT_IDENTIFIER = new _OID([10], id_oc);

/**
 * @summary residentialPerson
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * residentialPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF   {person}
 *   MUST CONTAIN  {localityName}
 *   MAY CONTAIN   {LocaleAttributeSet |
 *                  PostalAttributeSet |
 *                  preferredDeliveryMethod |
 *                  TelecommunicationAttributeSet |
 *                  businessCategory}
 *   LDAP-NAME     {"residentialPerson"}  -- RFC 4519
 *   ID            id-oc-residentialPerson }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const residentialPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": undefined,
    "&OptionalAttributes": [
        ...LocaleAttributeSet,
        ...PostalAttributeSet,
        preferredDeliveryMethod,
        ...TelecommunicationAttributeSet,
        businessCategory,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_residentialPerson /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_nf_resPersonNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nf-resPersonNameForm        OBJECT IDENTIFIER ::= {id-nf 9}
 * ```
 *
 * @constant
 */
export const id_nf_resPersonNameForm: OBJECT_IDENTIFIER = new _OID([9], id_nf);

/**
 * @summary resPersonNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * resPersonNameForm NAME-FORM ::= {
 *   NAMES            residentialPerson
 *   WITH ATTRIBUTES  {commonName}
 *   AND OPTIONALLY   {streetAddress}
 *   ID               id-nf-resPersonNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const resPersonNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": residentialPerson /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&OptionalAttributes": undefined,
    "&id": id_nf_resPersonNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_applicationProcess
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-applicationProcess       OBJECT IDENTIFIER ::= {id-oc 11}
 * ```
 *
 * @constant
 */
export const id_oc_applicationProcess: OBJECT_IDENTIFIER = new _OID(
    [11],
    id_oc
);

/**
 * @summary applicationProcess
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * applicationProcess OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {commonName}
 *   MAY CONTAIN   {description |
 *                  localityName |
 *                  organizationalUnitName |
 *                  seeAlso}
 *   LDAP-NAME     {"applicationProcess"}   -- RFC 4519
 *   ID            id-oc-applicationProcess }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const applicationProcess: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": undefined,
    "&OptionalAttributes": [
        description,
        localityName,
        organizationalUnitName,
        seeAlso,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_applicationProcess /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_nf_applProcessNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nf-applProcessNameForm      OBJECT IDENTIFIER ::= {id-nf 10}
 * ```
 *
 * @constant
 */
export const id_nf_applProcessNameForm: OBJECT_IDENTIFIER = new _OID(
    [10],
    id_nf
);

/**
 * @summary applProcessNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * applProcessNameForm NAME-FORM ::= {
 *   NAMES            applicationProcess
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-applProcessNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const applProcessNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": applicationProcess /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_applProcessNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_applicationEntity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-applicationEntity        OBJECT IDENTIFIER ::= {id-oc 12}
 * ```
 *
 * @constant
 */
export const id_oc_applicationEntity: OBJECT_IDENTIFIER = new _OID([12], id_oc);

/**
 * @summary applicationEntity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * applicationEntity OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {commonName |
 *                  presentationAddress}
 *   MAY CONTAIN   {description |
 *                  localityName |
 *                  organizationName |
 *                  organizationalUnitName |
 *                  seeAlso |
 *                  supportedApplicationContext}
 *   LDAP-NAME     {"applicationEntity"} -- RFC 2256
 *   ID            id-oc-applicationEntity }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const applicationEntity: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": [
        commonName,
        presentationAddress,
    ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        description,
        localityName,
        organizationName,
        organizationalUnitName,
        seeAlso,
        supportedApplicationContext,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_applicationEntity /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_nf_applEntityNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nf-applEntityNameForm       OBJECT IDENTIFIER ::= {id-nf 11}
 * ```
 *
 * @constant
 */
export const id_nf_applEntityNameForm: OBJECT_IDENTIFIER = new _OID(
    [11],
    id_nf
);

/**
 * @summary applEntityNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * applEntityNameForm NAME-FORM ::= {
 *   NAMES            applicationEntity
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-applEntityNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const applEntityNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": applicationEntity /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_applEntityNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_dSA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-dSA                      OBJECT IDENTIFIER ::= {id-oc 13}
 * ```
 *
 * @constant
 */
export const id_oc_dSA: OBJECT_IDENTIFIER = new _OID([13], id_oc);

/**
 * @summary dSA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dSA OBJECT-CLASS ::= {
 *   SUBCLASS OF   {applicationEntity}
 *   MAY CONTAIN   {knowledgeInformation}
 *   LDAP-NAME     {"dSA"} -- RFC 2256
 *   ID            id-oc-dSA }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const dSA: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&OptionalAttributes": undefined,
    "&ldapName": undefined,
    "&id": id_oc_dSA /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_nf_dSANameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nf-dSANameForm              OBJECT IDENTIFIER ::= {id-nf 12}
 * ```
 *
 * @constant
 */
export const id_nf_dSANameForm: OBJECT_IDENTIFIER = new _OID([12], id_nf);

/**
 * @summary dSANameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dSANameForm NAME-FORM ::= {
 *   NAMES            dSA
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-dSANameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const dSANameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": dSA /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_dSANameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_device
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-device                   OBJECT IDENTIFIER ::= {id-oc 14}
 * ```
 *
 * @constant
 */
export const id_oc_device: OBJECT_IDENTIFIER = new _OID([14], id_oc);

/**
 * @summary device
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * device OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {commonName}
 *   MAY CONTAIN   {description |
 *                  localityName |
 *                  organizationName |
 *                  organizationalUnitName |
 *                  owner |
 *                  seeAlso |
 *                  serialNumber}
 *   LDAP-NAME      {"device"}  -- RFC 4519
 *   ID            id-oc-device }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const device: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": undefined,
    "&OptionalAttributes": [
        description,
        localityName,
        organizationName,
        organizationalUnitName,
        owner,
        seeAlso,
        serialNumber,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_device /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_nf_deviceNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nf-deviceNameForm           OBJECT IDENTIFIER ::= {id-nf 13}
 * ```
 *
 * @constant
 */
export const id_nf_deviceNameForm: OBJECT_IDENTIFIER = new _OID([13], id_nf);

/**
 * @summary deviceNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * deviceNameForm NAME-FORM ::= {
 *   NAMES            device
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-deviceNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const deviceNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": device /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_deviceNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_dmd
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-dmd                      OBJECT IDENTIFIER ::= {id-oc 20}
 * ```
 *
 * @constant
 */
export const id_oc_dmd: OBJECT_IDENTIFIER = new _OID([20], id_oc);

/**
 * @summary dMD
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dMD OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {dmdName}
 *   MAY CONTAIN   {OrganizationalAttributeSet}
 *   LDAP-NAME     {"dmd"} -- RFC 2256
 *   ID            id-oc-dmd }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const dMD: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": undefined,
    "&OptionalAttributes": [
        ...OrganizationalAttributeSet,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_dmd /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_nf_dMDNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nf-dMDNameForm              OBJECT IDENTIFIER ::= {id-nf 15}
 * ```
 *
 * @constant
 */
export const id_nf_dMDNameForm: OBJECT_IDENTIFIER = new _OID([15], id_nf);

/**
 * @summary dMDNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dMDNameForm NAME-FORM ::= {
 *   NAMES            dMD
 *   WITH ATTRIBUTES  {dmdName}
 *   ID               id-nf-dMDNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const dMDNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": dMD /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_dMDNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_oidCobj
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-oidCobj                  OBJECT IDENTIFIER ::= {id-oc 37}
 * ```
 *
 * @constant
 */
export const id_oc_oidCobj: OBJECT_IDENTIFIER = new _OID([37], id_oc);

/**
 * @summary oidCobj
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidCobj OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {oidC}
 *   LDAP-NAME     {"oidCobj"}
 *   ID            id-oc-oidCobj }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const oidCobj: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": undefined,
    "&ldapName": undefined,
    "&id": id_oc_oidCobj /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_nf_oidC1NameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nf-oidC1NameForm            OBJECT IDENTIFIER ::= {id-nf 17}
 * ```
 *
 * @constant
 */
export const id_nf_oidC1NameForm: OBJECT_IDENTIFIER = new _OID([17], id_nf);

/**
 * @summary oidC1NameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidC1NameForm NAME-FORM ::= {
 *   NAMES            oidCobj
 *   WITH ATTRIBUTES  {oidC}
 *   ID               id-nf-oidC1NameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const oidC1NameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": oidCobj /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_oidC1NameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_nf_oidC2NameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nf-oidC2NameForm            OBJECT IDENTIFIER ::= {id-nf 18}
 * ```
 *
 * @constant
 */
export const id_nf_oidC2NameForm: OBJECT_IDENTIFIER = new _OID([18], id_nf);

/**
 * @summary oidC2NameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidC2NameForm NAME-FORM ::= {
 *   NAMES            oidCobj
 *   WITH ATTRIBUTES  {oidC}
 *   ID               id-nf-oidC2NameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const oidC2NameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": oidCobj /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_oidC2NameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_nf_oidCNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nf-oidCNameForm             OBJECT IDENTIFIER ::= {id-nf 19}
 * ```
 *
 * @constant
 */
export const id_nf_oidCNameForm: OBJECT_IDENTIFIER = new _OID([19], id_nf);

/**
 * @summary oidCNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidCNameForm NAME-FORM ::= {
 *   NAMES            oidCobj
 *   WITH ATTRIBUTES  {oidC}
 *   ID               id-nf-oidCNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const oidCNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": oidCobj /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_oidCNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_urnCobj
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-urnCobj                  OBJECT IDENTIFIER ::= {id-oc 42}
 * ```
 *
 * @constant
 */
export const id_oc_urnCobj: OBJECT_IDENTIFIER = new _OID([42], id_oc);

/**
 * @summary urnCobj
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * urnCobj OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  { urnC }
 *   LDAP-NAME     {"urnCobj"}
 *   ID            id-oc-urnCobj }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const urnCobj: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": undefined,
    "&ldapName": undefined,
    "&id": id_oc_urnCobj /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_nf_urnCNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nf-urnCNameForm             OBJECT IDENTIFIER ::= {id-nf 20}
 * ```
 *
 * @constant
 */
export const id_nf_urnCNameForm: OBJECT_IDENTIFIER = new _OID([20], id_nf);

/**
 * @summary urnCNameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * urnCNameForm NAME-FORM ::= {
 *   NAMES            urnCobj
 *   WITH ATTRIBUTES  {urnC}
 *   ID               id-nf-urnCNameForm }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const urnCNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": urnCobj /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_nf_urnCNameForm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oidRoot
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oidRoot                     OBJECT IDENTIFIER ::= {id 3}
 * ```
 *
 * @constant
 */
export const id_oidRoot: OBJECT_IDENTIFIER = new _OID([3], id);

/**
 * @summary oidRoot
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidRoot OBJECT-CLASS ::= {
 *   SUBCLASS OF   {alias}
 *   MUST CONTAIN  { oidC1 | oidC2 | oidC}
 *   LDAP-NAME     {"oidRoot"}
 *   ID            id-oidRoot }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const oidRoot: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": [oidC1, oidC2, oidC] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oidRoot /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oidRootNf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oidRootNf                   OBJECT IDENTIFIER ::= {id 4}
 * ```
 *
 * @constant
 */
export const id_oidRootNf: OBJECT_IDENTIFIER = new _OID([4], id);

/**
 * @summary oidRootNf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidRootNf NAME-FORM ::= {
 *   NAMES            oidRoot
 *   WITH ATTRIBUTES  {oidC1 | oidC2 | oidC}
 *   ID               id-oidRootNf }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const oidRootNf: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": oidRoot /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [oidC1, oidC2, oidC] /* OBJECT_FIELD_SETTING */,
    "&id": id_oidRootNf /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oidArc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oidArc                      OBJECT IDENTIFIER ::= {id 5}
 * ```
 *
 * @constant
 */
export const id_oidArc: OBJECT_IDENTIFIER = new _OID([5], id);

/**
 * @summary oidArc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidArc OBJECT-CLASS ::= {
 *   SUBCLASS OF   {alias}
 *   MUST CONTAIN  {oidC}
 *   LDAP-NAME     {"oidArc"}
 *   ID            id-oidArc }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const oidArc: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": undefined,
    "&ldapName": undefined,
    "&id": id_oidArc /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oidArcNf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oidArcNf                    OBJECT IDENTIFIER ::= {id 6}
 * ```
 *
 * @constant
 */
export const id_oidArcNf: OBJECT_IDENTIFIER = new _OID([6], id);

/**
 * @summary oidArcNf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidArcNf NAME-FORM ::= {
 *   NAMES            oidArc
 *   WITH ATTRIBUTES  {oidC}
 *   ID               id-oidArcNf }
 * ```
 *
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export const oidArcNf: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {},
    encoderFor: {},
    "&namedObjectClass": oidArc /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_oidArcNf /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* END_MODULE SelectedObjectClasses */
/* eslint-enable */
