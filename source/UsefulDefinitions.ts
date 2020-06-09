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

export const ds: ID = new asn1.ObjectIdentifier([/* ds */ 5], joint_iso_itu_t);

export const id: ID = new asn1.ObjectIdentifier(
    [/* registration-procedures */ 17, /* module */ 1, /* directory-defs */ 2],
    joint_iso_itu_t
);

export const internet: ID = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
]);

export const ldap_dir: ID = new asn1.ObjectIdentifier(
    [/* directory */ 1],
    internet
);

export const intSecurity: ID = new asn1.ObjectIdentifier(
    [/* security */ 5],
    internet
);

export const ldap_enterprise: ID = new asn1.ObjectIdentifier(
    [/* private */ 4, /* enterprise */ 1],
    internet
);

export const ldap_openLDAP: ID = new asn1.ObjectIdentifier(
    [/* openLDAP */ 4203, /* ldap */ 1],
    ldap_enterprise
);

export const openLDAP_controls: ID = new asn1.ObjectIdentifier(
    [/* controls */ 10],
    ldap_openLDAP
);

export const ldap_wall: ID = new asn1.ObjectIdentifier(
    [/* wahl */ 1466],
    ldap_enterprise
);

export const ldap_dynExt: ID = new asn1.ObjectIdentifier([101, 119], ldap_wall);

export const cosine: ID = new asn1.ObjectIdentifier([
    /* itu-t */ 0,
    /* data */ 9,
    /* pss */ 2342,
    /* ucl */ 19200300,
    /* pilot */ 100,
]);

export const module_: ID = new asn1.ObjectIdentifier([1], ds);

export const serviceElement: ID = new asn1.ObjectIdentifier([2], ds);

export const attributeSyntaxVendor: ID = new asn1.ObjectIdentifier([5], ds);

export const algorithm: ID = new asn1.ObjectIdentifier([8], ds);

export const group: ID = new asn1.ObjectIdentifier([16], ds);

export const usefulDefinitions: ID = new asn1.ObjectIdentifier(
    [/* usefulDefinitions */ 0, 8],
    module_
);

export const informationFramework: ID = new asn1.ObjectIdentifier(
    [/* informationFramework */ 1, 8],
    module_
);

export const directoryAbstractService: ID = new asn1.ObjectIdentifier(
    [/* directoryAbstractService */ 2, 8],
    module_
);

export const distributedOperations: ID = new asn1.ObjectIdentifier(
    [/* distributedOperations */ 3, 8],
    module_
);

export const selectedAttributeTypes: ID = new asn1.ObjectIdentifier(
    [/* selectedAttributeTypes */ 5, 8],
    module_
);

export const selectedObjectClasses: ID = new asn1.ObjectIdentifier(
    [/* selectedObjectClasses */ 6, 8],
    module_
);

export const authenticationFramework: ID = new asn1.ObjectIdentifier(
    [/* authenticationFramework */ 7, 8],
    module_
);

export const algorithmObjectIdentifiers: ID = new asn1.ObjectIdentifier(
    [/* algorithmObjectIdentifiers */ 8, 8],
    module_
);

export const directoryObjectIdentifiers: ID = new asn1.ObjectIdentifier(
    [/* directoryObjectIdentifiers */ 9, 8],
    module_
);

export const distributedDirectoryOIDs: ID = new asn1.ObjectIdentifier(
    [/* distributedDirectoryOIDs */ 13, 8],
    module_
);

export const directoryShadowOIDs: ID = new asn1.ObjectIdentifier(
    [/* directoryShadowOIDs */ 14, 8],
    module_
);

export const directoryShadowAbstractService: ID = new asn1.ObjectIdentifier(
    [/* directoryShadowAbstractService */ 15, 8],
    module_
);

export const opBindingManagement: ID = new asn1.ObjectIdentifier(
    [/* opBindingManagement */ 18, 8],
    module_
);

export const opBindingOIDs: ID = new asn1.ObjectIdentifier(
    [/* opBindingOIDs */ 19, 8],
    module_
);

export const hierarchicalOperationalBindings: ID = new asn1.ObjectIdentifier(
    [/* hierarchicalOperationalBindings */ 20, 8],
    module_
);

export const dsaOperationalAttributeTypes: ID = new asn1.ObjectIdentifier(
    [/* dsaOperationalAttributeTypes */ 22, 8],
    module_
);

export const schemaAdministration: ID = new asn1.ObjectIdentifier(
    [/* schemaAdministration */ 23, 8],
    module_
);

export const basicAccessControl: ID = new asn1.ObjectIdentifier(
    [/* basicAccessControl */ 24, 8],
    module_
);

export const directoryOperationalBindingTypes: ID = new asn1.ObjectIdentifier(
    [/* directoryOperationalBindingTypes */ 25, 8],
    module_
);

export const certificateExtensions: ID = new asn1.ObjectIdentifier(
    [/* certificateExtensions */ 26, 8],
    module_
);

export const directoryManagement: ID = new asn1.ObjectIdentifier(
    [/* directoryManagement */ 27, 8],
    module_
);

export const enhancedSecurity: ID = new asn1.ObjectIdentifier(
    [/* enhancedSecurity */ 28, 8],
    module_
);

export const iDMProtocolSpecification: ID = new asn1.ObjectIdentifier(
    [/* iDMProtocolSpecification */ 30, 8],
    module_
);

export const directoryIDMProtocols: ID = new asn1.ObjectIdentifier(
    [/* directoryIDMProtocols */ 31, 8],
    module_
);

export const attributeCertificateDefinitions: ID = new asn1.ObjectIdentifier(
    [/* attributeCertificateDefinitions */ 32, 8],
    module_
);

export const serviceAdministration: ID = new asn1.ObjectIdentifier(
    [/* serviceAdministration */ 33, 8],
    module_
);

export const ldapAttributes: ID = new asn1.ObjectIdentifier(
    [/* ldapAttributes */ 34, 8],
    module_
);

export const commonProtocolSpecification: ID = new asn1.ObjectIdentifier(
    [/* commonProtocolSpecification */ 35, 8],
    module_
);

export const oSIProtocolSpecification: ID = new asn1.ObjectIdentifier(
    [/* oSIProtocolSpecification */ 36, 8],
    module_
);

export const directoryOSIProtocols: ID = new asn1.ObjectIdentifier(
    [/* directoryOSIProtocols */ 37, 8],
    module_
);

export const ldapSystemSchema: ID = new asn1.ObjectIdentifier(
    [/* ldapSystemSchema */ 38, 8],
    module_
);

export const passwordPolicy: ID = new asn1.ObjectIdentifier(
    [/* passwordPolicy */ 39, 8],
    module_
);

export const pkiPmiExternalDataTypes: ID = new asn1.ObjectIdentifier(
    [/* pkiPmiExternalDataTypes */ 40, 8],
    module_
);

export const extensionAttributes: ID = new asn1.ObjectIdentifier(
    [/* extensionAttributes */ 41, 8],
    module_
);

export const pkiPmiWrapper: ID = new asn1.ObjectIdentifier(
    [/* pkiPmiWrapper */ 42, 8],
    module_
);

export const avlManagement: ID = new asn1.ObjectIdentifier(
    [/* avlManagement */ 43, 8],
    module_
);

export const trustBrokerProtocol: ID = new asn1.ObjectIdentifier(
    [/* trustBrokerProtocol */ 44, 8],
    module_
);

export const objectClass: ID = new asn1.ObjectIdentifier([6], ds);

export const id_oc: ID = objectClass;

export const attributeType: ID = new asn1.ObjectIdentifier([4], ds);

export const id_at: ID = attributeType;

export const abstractSyntax: ID = new asn1.ObjectIdentifier([9], ds);

export const id_as: ID = abstractSyntax;

export const matchingRule: ID = new asn1.ObjectIdentifier([13], ds);

export const id_mr: ID = matchingRule;

export const nameForm: ID = new asn1.ObjectIdentifier([15], ds);

export const id_nf: ID = nameForm;

export const subentry: ID = new asn1.ObjectIdentifier([17], ds);

export const id_sc: ID = subentry;

export const operationalAttributeType: ID = new asn1.ObjectIdentifier([18], ds);

export const id_oa: ID = operationalAttributeType;

export const operationalBinding: ID = new asn1.ObjectIdentifier([19], ds);

export const id_ob: ID = operationalBinding;

export const dsaOperationalAttribute: ID = new asn1.ObjectIdentifier([12], ds);

export const id_doa: ID = dsaOperationalAttribute;

export const knowledgeMatchingRule: ID = new asn1.ObjectIdentifier([14], ds);

export const id_kmr: ID = knowledgeMatchingRule;

export const schemaObjectClass: ID = new asn1.ObjectIdentifier([20], ds);

export const id_soc: ID = schemaObjectClass;

export const schemaOperationalAttribute: ID = new asn1.ObjectIdentifier(
    [21],
    ds
);

export const id_soa: ID = schemaOperationalAttribute;

export const administrativeRoles: ID = new asn1.ObjectIdentifier([23], ds);

export const id_ar: ID = administrativeRoles;

export const accessControlAttribute: ID = new asn1.ObjectIdentifier([24], ds);

export const id_aca: ID = accessControlAttribute;

export const applicationContext: ID = new asn1.ObjectIdentifier([3], ds);

export const id_ac: ID = applicationContext;

export const accessControlSchemes: ID = new asn1.ObjectIdentifier([28], ds);

export const id_acScheme: ID = accessControlSchemes;

export const certificateExtension: ID = new asn1.ObjectIdentifier([29], ds);

export const id_ce: ID = certificateExtension;

export const managementObject: ID = new asn1.ObjectIdentifier([30], ds);

export const id_mgt: ID = managementObject;

export const attributeValueContext: ID = new asn1.ObjectIdentifier([31], ds);

export const id_avc: ID = attributeValueContext;

export const idmProtocol: ID = new asn1.ObjectIdentifier([33], ds);

export const id_idm: ID = idmProtocol;

export const problem: ID = new asn1.ObjectIdentifier([34], ds);

export const id_pr: ID = problem;

export const notification: ID = new asn1.ObjectIdentifier([35], ds);

export const id_not: ID = notification;

export const matchingRestriction: ID = new asn1.ObjectIdentifier([36], ds);

export const id_mre: ID = matchingRestriction;

export const controlAttributeType: ID = new asn1.ObjectIdentifier([37], ds);

export const id_cat: ID = controlAttributeType;

export const keyPurposes: ID = new asn1.ObjectIdentifier([38], ds);

export const id_kp: ID = keyPurposes;

export const passwordQuality: ID = new asn1.ObjectIdentifier([39], ds);

export const id_pq: ID = passwordQuality;

export const attributeSyntax: ID = new asn1.ObjectIdentifier([40], ds);

export const id_ats: ID = attributeSyntax;

export const id_asx: ID = attributeSyntax;

export const ldap_syntax: ID = new asn1.ObjectIdentifier(
    [115, 121, 1],
    ldap_wall
);

export const id_lsx: ID = ldap_syntax;

export const ldap_x509: ID = new asn1.ObjectIdentifier(
    [/* x509 */ 15],
    ldap_dir
);

export const id_ldx: ID = ldap_x509;

export const ldap_attr: ID = new asn1.ObjectIdentifier([101, 120], ldap_wall);

export const id_lat: ID = ldap_attr;

export const ldap_match: ID = new asn1.ObjectIdentifier([109, 114], ldap_wall);

export const id_lmr: ID = ldap_match;

export const openLDAP_attributes: ID = new asn1.ObjectIdentifier(
    [/* attributeType */ 3],
    ldap_openLDAP
);

export const id_oat: ID = openLDAP_attributes;

export const cosineAttr: ID = new asn1.ObjectIdentifier(
    [/* pilotAttributeType */ 1],
    cosine
);

export const id_coat: ID = cosineAttr;

export const avRestriction: ID = new asn1.ObjectIdentifier([41], ds);

export const id_avr: ID = avRestriction;

export const cmsContentType: ID = new asn1.ObjectIdentifier([42], ds);

export const id_cmsct: ID = cmsContentType;
