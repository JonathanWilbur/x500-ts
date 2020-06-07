
// UsefulDefinitions
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";


const itu_t: number = 0;
const itu_r: number = 0;
const ccitt: number = 0;
const iso: number = 1;
const joint_iso_itu_t: number = 2;
const joint_iso_ccitt: number = 2;

export type ID = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
export const _decode_ID = __utils._decodeObjectIdentifier;
export const _encode_ID = __utils._encodeObjectIdentifier;


export const ds: ID = new asn1.ObjectIdentifier([
    /* ds */ 5,
], joint_iso_itu_t);

export const id: ID = new asn1.ObjectIdentifier([
    /* registration-procedures */ 17,
    /* module */ 1,
    /* directory-defs */ 2,
], joint_iso_itu_t);

export const internet: ID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
]);

export const ldap_dir: ID = new asn1.ObjectIdentifier([
    /* directory */ 1,
], internet);

export const intSecurity: ID = new asn1.ObjectIdentifier([
    /* security */ 5,
], internet);

export const ldap_enterprise: ID = new asn1.ObjectIdentifier([
    /* private */ 4,
    /* enterprise */ 1,
], internet);

export const ldap_openLDAP: ID = new asn1.ObjectIdentifier([
    /* openLDAP */ 4203,
    /* ldap */ 1,
], ldap_enterprise);

export const openLDAP_controls: ID = new asn1.ObjectIdentifier([
    /* controls */ 10,
], ldap_openLDAP);

export const ldap_wall: ID = new asn1.ObjectIdentifier([
    /* wahl */ 1466,
], ldap_enterprise);

// TODO: ObjectAssignment: ldap-dynExt

// TODO: ObjectAssignment: ldap-attr

// TODO: ObjectAssignment: ldap-match

// TODO: ObjectAssignment: ldap-syntax

export const cosine: ID = new asn1.ObjectIdentifier([
    /* itu-t */ 0,
    /* data */ 9,
    /* pss */ 2342,
    /* ucl */ 19200300,
    /* pilot */ 100,
]);

// TODO: ObjectAssignment: module

// TODO: ObjectAssignment: serviceElement

// TODO: ObjectAssignment: applicationContext

// TODO: ObjectAssignment: attributeType

// TODO: ObjectAssignment: attributeSyntaxVendor

// TODO: ObjectAssignment: objectClass

// TODO: ObjectAssignment: algorithm

// TODO: ObjectAssignment: abstractSyntax

// TODO: ObjectAssignment: dsaOperationalAttribute

// TODO: ObjectAssignment: matchingRule

// TODO: ObjectAssignment: knowledgeMatchingRule

// TODO: ObjectAssignment: nameForm

// TODO: ObjectAssignment: group

// TODO: ObjectAssignment: subentry

// TODO: ObjectAssignment: operationalAttributeType

// TODO: ObjectAssignment: operationalBinding

// TODO: ObjectAssignment: schemaObjectClass

// TODO: ObjectAssignment: schemaOperationalAttribute

// TODO: ObjectAssignment: administrativeRoles

// TODO: ObjectAssignment: accessControlAttribute

// TODO: ObjectAssignment: accessControlSchemes

// TODO: ObjectAssignment: certificateExtension

// TODO: ObjectAssignment: managementObject

// TODO: ObjectAssignment: attributeValueContext

// TODO: ObjectAssignment: idmProtocol

// TODO: ObjectAssignment: problem

// TODO: ObjectAssignment: notification

// TODO: ObjectAssignment: matchingRestriction

// TODO: ObjectAssignment: controlAttributeType

// TODO: ObjectAssignment: keyPurposes

// TODO: ObjectAssignment: passwordQuality

// TODO: ObjectAssignment: attributeSyntax

// TODO: ObjectAssignment: avRestriction

// TODO: ObjectAssignment: cmsContentType

export const usefulDefinitions: ID = new asn1.ObjectIdentifier([
    /* usefulDefinitions */ 0,
    8,
], module);

export const informationFramework: ID = new asn1.ObjectIdentifier([
    /* informationFramework */ 1,
    8,
], module);

export const directoryAbstractService: ID = new asn1.ObjectIdentifier([
    /* directoryAbstractService */ 2,
    8,
], module);

export const distributedOperations: ID = new asn1.ObjectIdentifier([
    /* distributedOperations */ 3,
    8,
], module);

export const selectedAttributeTypes: ID = new asn1.ObjectIdentifier([
    /* selectedAttributeTypes */ 5,
    8,
], module);

export const selectedObjectClasses: ID = new asn1.ObjectIdentifier([
    /* selectedObjectClasses */ 6,
    8,
], module);

export const authenticationFramework: ID = new asn1.ObjectIdentifier([
    /* authenticationFramework */ 7,
    8,
], module);

export const algorithmObjectIdentifiers: ID = new asn1.ObjectIdentifier([
    /* algorithmObjectIdentifiers */ 8,
    8,
], module);

export const directoryObjectIdentifiers: ID = new asn1.ObjectIdentifier([
    /* directoryObjectIdentifiers */ 9,
    8,
], module);

export const distributedDirectoryOIDs: ID = new asn1.ObjectIdentifier([
    /* distributedDirectoryOIDs */ 13,
    8,
], module);

export const directoryShadowOIDs: ID = new asn1.ObjectIdentifier([
    /* directoryShadowOIDs */ 14,
    8,
], module);

export const directoryShadowAbstractService: ID = new asn1.ObjectIdentifier([
    /* directoryShadowAbstractService */ 15,
    8,
], module);

export const opBindingManagement: ID = new asn1.ObjectIdentifier([
    /* opBindingManagement */ 18,
    8,
], module);

export const opBindingOIDs: ID = new asn1.ObjectIdentifier([
    /* opBindingOIDs */ 19,
    8,
], module);

export const hierarchicalOperationalBindings: ID = new asn1.ObjectIdentifier([
    /* hierarchicalOperationalBindings */ 20,
    8,
], module);

export const dsaOperationalAttributeTypes: ID = new asn1.ObjectIdentifier([
    /* dsaOperationalAttributeTypes */ 22,
    8,
], module);

export const schemaAdministration: ID = new asn1.ObjectIdentifier([
    /* schemaAdministration */ 23,
    8,
], module);

export const basicAccessControl: ID = new asn1.ObjectIdentifier([
    /* basicAccessControl */ 24,
    8,
], module);

export const directoryOperationalBindingTypes: ID = new asn1.ObjectIdentifier([
    /* directoryOperationalBindingTypes */ 25,
    8,
], module);

export const certificateExtensions: ID = new asn1.ObjectIdentifier([
    /* certificateExtensions */ 26,
    8,
], module);

export const directoryManagement: ID = new asn1.ObjectIdentifier([
    /* directoryManagement */ 27,
    8,
], module);

export const enhancedSecurity: ID = new asn1.ObjectIdentifier([
    /* enhancedSecurity */ 28,
    8,
], module);

export const iDMProtocolSpecification: ID = new asn1.ObjectIdentifier([
    /* iDMProtocolSpecification */ 30,
    8,
], module);

export const directoryIDMProtocols: ID = new asn1.ObjectIdentifier([
    /* directoryIDMProtocols */ 31,
    8,
], module);

export const attributeCertificateDefinitions: ID = new asn1.ObjectIdentifier([
    /* attributeCertificateDefinitions */ 32,
    8,
], module);

export const serviceAdministration: ID = new asn1.ObjectIdentifier([
    /* serviceAdministration */ 33,
    8,
], module);

export const ldapAttributes: ID = new asn1.ObjectIdentifier([
    /* ldapAttributes */ 34,
    8,
], module);

export const commonProtocolSpecification: ID = new asn1.ObjectIdentifier([
    /* commonProtocolSpecification */ 35,
    8,
], module);

export const oSIProtocolSpecification: ID = new asn1.ObjectIdentifier([
    /* oSIProtocolSpecification */ 36,
    8,
], module);

export const directoryOSIProtocols: ID = new asn1.ObjectIdentifier([
    /* directoryOSIProtocols */ 37,
    8,
], module);

export const ldapSystemSchema: ID = new asn1.ObjectIdentifier([
    /* ldapSystemSchema */ 38,
    8,
], module);

export const passwordPolicy: ID = new asn1.ObjectIdentifier([
    /* passwordPolicy */ 39,
    8,
], module);

export const pkiPmiExternalDataTypes: ID = new asn1.ObjectIdentifier([
    /* pkiPmiExternalDataTypes */ 40,
    8,
], module);

export const extensionAttributes: ID = new asn1.ObjectIdentifier([
    /* extensionAttributes */ 41,
    8,
], module);

export const pkiPmiWrapper: ID = new asn1.ObjectIdentifier([
    /* pkiPmiWrapper */ 42,
    8,
], module);

export const avlManagement: ID = new asn1.ObjectIdentifier([
    /* avlManagement */ 43,
    8,
], module);

export const trustBrokerProtocol: ID = new asn1.ObjectIdentifier([
    /* trustBrokerProtocol */ 44,
    8,
], module);

// TODO: ObjectAssignment: id-oc

// TODO: ObjectAssignment: id-at

// TODO: ObjectAssignment: id-as

// TODO: ObjectAssignment: id-mr

// TODO: ObjectAssignment: id-nf

// TODO: ObjectAssignment: id-sc

// TODO: ObjectAssignment: id-oa

// TODO: ObjectAssignment: id-ob

// TODO: ObjectAssignment: id-doa

// TODO: ObjectAssignment: id-kmr

// TODO: ObjectAssignment: id-soc

// TODO: ObjectAssignment: id-soa

// TODO: ObjectAssignment: id-ar

// TODO: ObjectAssignment: id-aca

// TODO: ObjectAssignment: id-ac

// TODO: ObjectAssignment: id-acScheme

// TODO: ObjectAssignment: id-ce

// TODO: ObjectAssignment: id-mgt

// TODO: ObjectAssignment: id-avc

// TODO: ObjectAssignment: id-idm

// TODO: ObjectAssignment: id-pr

// TODO: ObjectAssignment: id-not

// TODO: ObjectAssignment: id-mre

// TODO: ObjectAssignment: id-cat

// TODO: ObjectAssignment: id-kp

// TODO: ObjectAssignment: id-pq

// TODO: ObjectAssignment: id-ats

// TODO: ObjectAssignment: id-asx

// TODO: ObjectAssignment: id-lsx

export const ldap_x509: ID = new asn1.ObjectIdentifier([
    /* x509 */ 15,
], ldap_dir);

export const id_ldx: ID = ldap_x509;

// TODO: ObjectAssignment: id-lat

// TODO: ObjectAssignment: id-lmr

export const openLDAP_attributes: ID = new asn1.ObjectIdentifier([
    /* attributeType */ 3,
], ldap_openLDAP);

export const id_oat: ID = openLDAP_attributes;

export const cosineAttr: ID = new asn1.ObjectIdentifier([
    /* pilotAttributeType */ 1,
], cosine);

export const id_coat: ID = cosineAttr;

// TODO: ObjectAssignment: id-avr

// TODO: ObjectAssignment: id-cmsct

