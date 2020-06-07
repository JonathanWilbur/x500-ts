
// SelectedObjectClasses
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import * as UsefulDefinitions from "./UsefulDefinitions";
import {
    authenticationFramework,
    certificateExtensions,
    id,
    id_nf,
    id_oc,
    informationFramework,
    objectClass,
    selectedAttributeTypes,
    passwordPolicy
} from "./UsefulDefinitions";

import * as InformationFramework from "./InformationFramework";
import {
    alias,
    ATTRIBUTE,
    NAME_FORM,
    OBJECT_CLASS,
    top
} from "./InformationFramework";

import * as SelectedAttributeTypes from "./SelectedAttributeTypes";
import {
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
    x121Address
} from "./SelectedAttributeTypes";

import * as AuthenticationFramework from "./AuthenticationFramework";
import {
    authorityRevocationList,
    cACertificate,
    certificateRevocationList,
    crossCertificatePair,
    deltaRevocationList,
    supportedAlgorithms,
    userCertificate,
    userPassword
} from "./AuthenticationFramework";

import * as PasswordPolicy from "./PasswordPolicy";
import {
    userPwd
} from "./PasswordPolicy";


const itu_t: number = 0;
const itu_r: number = 0;
const ccitt: number = 0;
const iso: number = 1;
const joint_iso_itu_t: number = 2;
const joint_iso_ccitt: number = 2;

// TODO: ObjectSetAssignment: TelecommunicationAttributeSet

// TODO: ObjectSetAssignment: PostalAttributeSet

// TODO: ObjectSetAssignment: LocaleAttributeSet

// TODO: ObjectSetAssignment: OrganizationalAttributeSet

// TODO: ObjectAssignment: country

// TODO: ObjectAssignment: locality

// TODO: ObjectAssignment: organization

// TODO: ObjectAssignment: organizationalUnit

// TODO: ObjectAssignment: person

// TODO: ObjectAssignment: organizationalPerson

// TODO: ObjectAssignment: organizationalRole

// TODO: ObjectAssignment: groupOfNames

// TODO: ObjectAssignment: groupOfUniqueNames

// TODO: ObjectAssignment: residentialPerson

// TODO: ObjectAssignment: applicationProcess

// TODO: ObjectAssignment: applicationEntity

// TODO: ObjectAssignment: dSA

// TODO: ObjectAssignment: device

// TODO: ObjectAssignment: strongAuthenticationUser

// TODO: ObjectAssignment: userSecurityInformation

// TODO: ObjectAssignment: userPwdClass

// TODO: ObjectAssignment: certificationAuthority

// TODO: ObjectAssignment: certificationAuthority-V2

// TODO: ObjectAssignment: dMD

// TODO: ObjectAssignment: oidC1obj

// TODO: ObjectAssignment: oidC2obj

// TODO: ObjectAssignment: oidCobj

// TODO: ObjectAssignment: oidRoot

// TODO: ObjectAssignment: oidArc

// TODO: ObjectAssignment: urnCobj

// TODO: ObjectAssignment: isoTagInfo

// TODO: ObjectAssignment: isoTagType

// TODO: ObjectAssignment: epcTagInfoObj

// TODO: ObjectAssignment: epcTagTypeObj

// TODO: ObjectAssignment: countryNameForm

// TODO: ObjectAssignment: locNameForm

// TODO: ObjectAssignment: sOPNameForm

// TODO: ObjectAssignment: orgNameForm

// TODO: ObjectAssignment: orgUnitNameForm

// TODO: ObjectAssignment: personNameForm

// TODO: ObjectAssignment: orgPersonNameForm

// TODO: ObjectAssignment: orgRoleNameForm

// TODO: ObjectAssignment: gONNameForm

// TODO: ObjectAssignment: resPersonNameForm

// TODO: ObjectAssignment: applProcessNameForm

// TODO: ObjectAssignment: applEntityNameForm

// TODO: ObjectAssignment: dSANameForm

// TODO: ObjectAssignment: deviceNameForm

// TODO: ObjectAssignment: dMDNameForm

// TODO: ObjectAssignment: oidC1NameForm

// TODO: ObjectAssignment: oidC2NameForm

// TODO: ObjectAssignment: oidCNameForm

// TODO: ObjectAssignment: urnCNameForm

// TODO: ObjectAssignment: oidRootNf

// TODO: ObjectAssignment: oidArcNf

export const id_oc_country: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_oc);

export const id_oc_locality: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], id_oc);

export const id_oc_organization: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    4,
], id_oc);

export const id_oc_organizationalUnit: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    5,
], id_oc);

export const id_oc_person: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    6,
], id_oc);

export const id_oc_organizationalPerson: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    7,
], id_oc);

export const id_oc_organizationalRole: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    8,
], id_oc);

export const id_oc_groupOfNames: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    9,
], id_oc);

export const id_oc_residentialPerson: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    10,
], id_oc);

export const id_oc_applicationProcess: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    11,
], id_oc);

export const id_oc_applicationEntity: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    12,
], id_oc);

export const id_oc_dSA: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    13,
], id_oc);

export const id_oc_device: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    14,
], id_oc);

export const id_oc_strongAuthenticationUser: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    15,
], id_oc);

export const id_oc_certificationAuthority: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    16,
], id_oc);

export const id_oc_certificationAuthority_V2: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    16,
    2,
], id_oc);

export const id_oc_groupOfUniqueNames: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    17,
], id_oc);

export const id_oc_userSecurityInformation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    18,
], id_oc);

export const id_oc_dmd: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    20,
], id_oc);

export const id_oc_oidC1obj: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    35,
], id_oc);

export const id_oc_oidC2obj: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    36,
], id_oc);

export const id_oc_oidCobj: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    37,
], id_oc);

export const id_oc_isoTagInfo: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    38,
], id_oc);

export const id_oc_isoTagType: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    39,
], id_oc);

export const id_oc_userPwdClass: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    41,
], id_oc);

export const id_oc_urnCobj: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    42,
], id_oc);

export const id_oc_epcTagInfoObj: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    43,
], id_oc);

export const id_oc_epcTagTypeObj: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    44,
], id_oc);

export const id_oidRoot: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], id);

export const id_oidArc: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    5,
], id);

export const id_nf_countryNameForm: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    0,
], id_nf);

export const id_nf_locNameForm: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_nf);

export const id_nf_sOPNameForm: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_nf);

export const id_nf_orgNameForm: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], id_nf);

export const id_nf_orgUnitNameForm: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    4,
], id_nf);

export const id_nf_personNameForm: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    5,
], id_nf);

export const id_nf_orgPersonNameForm: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    6,
], id_nf);

export const id_nf_orgRoleNameForm: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    7,
], id_nf);

export const id_nf_gONNameForm: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    8,
], id_nf);

export const id_nf_resPersonNameForm: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    9,
], id_nf);

export const id_nf_applProcessNameForm: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    10,
], id_nf);

export const id_nf_applEntityNameForm: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    11,
], id_nf);

export const id_nf_dSANameForm: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    12,
], id_nf);

export const id_nf_deviceNameForm: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    13,
], id_nf);

export const id_nf_dMDNameForm: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    15,
], id_nf);

export const id_nf_oidC1NameForm: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    17,
], id_nf);

export const id_nf_oidC2NameForm: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    18,
], id_nf);

export const id_nf_oidCNameForm: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    19,
], id_nf);

export const id_nf_urnCNameForm: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    20,
], id_nf);

export const id_oidRootNf: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    4,
], id);

export const id_oidArcNf: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    6,
], id);

