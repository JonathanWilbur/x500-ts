/**
 * @module UsefulDefinitions
 * @summary The ASN.1 module `UsefulDefinitions`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.usefulDefinitions.9
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
    joint_iso_itu_t,
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

export type ID<> = OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_ID: $.ASN1Decoder<ID> | null = null;
let _cached_encoder_for_ID: $.ASN1Encoder<ID> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ID} The decoded data structure.
 */
export function _decode_ID(el: _Element) {
    if (!_cached_decoder_for_ID) {
        _cached_decoder_for_ID = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_ID(el);
}
/**
 * @summary Encodes a(n) ID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ID, encoded as an ASN.1 Element.
 */
export function _encode_ID(value: ID, elGetter: $.ASN1Encoder<ID>) {
    if (!_cached_encoder_for_ID) {
        _cached_encoder_for_ID = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_ID(value, elGetter);
}

/**
 * @summary id
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id ID ::= {joint-iso-itu-t registration-procedures(17) module(1) directory-defs(2)}
 * ```
 *
 * @constant
 */
export const id: ID = new _OID(
    [/* registration-procedures */ 17, /* module */ 1, /* directory-defs */ 2],
    joint_iso_itu_t
);

/**
 * @summary internet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * internet            ID ::= {iso(1) identified-organization(3) dod(6) internet(1)}
 * ```
 *
 * @constant
 */
export const internet: ID = new _OID([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
]);

/**
 * @summary intSecurity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * intSecurity         ID ::= {internet security(5)}
 * ```
 *
 * @constant
 */
export const intSecurity: ID = new _OID([/* security */ 5], internet);

/**
 * @summary ldap_enterprise
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldap-enterprise     ID ::= {internet private(4) enterprise(1)}
 * ```
 *
 * @constant
 */
export const ldap_enterprise: ID = new _OID(
    [/* private */ 4, /* enterprise */ 1],
    internet
);

/**
 * @summary ldap_openLDAP
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldap-openLDAP       ID ::= {ldap-enterprise openLDAP(4203) ldap(1)}
 * ```
 *
 * @constant
 */
export const ldap_openLDAP: ID = new _OID(
    [/* openLDAP */ 4203, /* ldap */ 1],
    ldap_enterprise
);

/**
 * @summary openLDAP_controls
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * openLDAP-controls   ID ::= {ldap-openLDAP controls(10)}
 * ```
 *
 * @constant
 */
export const openLDAP_controls: ID = new _OID(
    [/* controls */ 10],
    ldap_openLDAP
);

/**
 * @summary ldap_wall
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldap-wall           ID ::= {ldap-enterprise wahl(1466)}
 * ```
 *
 * @constant
 */
export const ldap_wall: ID = new _OID([/* wahl */ 1466], ldap_enterprise);

/**
 * @summary ldap_dynExt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldap-dynExt         ID ::= {ldap-wall 101 119}
 * ```
 *
 * @constant
 */
export const ldap_dynExt: ID = new _OID([101, 119], ldap_wall);

/**
 * @summary ds
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ds ID ::= {joint-iso-itu-t ds(5)}
 * ```
 *
 * @constant
 */
export const ds: ID = new _OID([/* ds */ 5], joint_iso_itu_t);

/**
 * @summary serviceElement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * serviceElement                           ID ::= {ds 2}
 * ```
 *
 * @constant
 */
export const serviceElement: ID = new _OID([2], ds);

/**
 * @summary attributeSyntaxVendor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeSyntaxVendor                    ID ::= {ds 5}
 * ```
 *
 * @constant
 */
export const attributeSyntaxVendor: ID = new _OID([5], ds);

/**
 * @summary attributeSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeSet                             ID ::= {ds 7}
 * ```
 *
 * @constant
 */
export const attributeSet: ID = new _OID([7], ds);

/**
 * @summary algorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * algorithm                                ID ::= {ds 8}
 * ```
 *
 * @constant
 */
export const algorithm: ID = new _OID([8], ds);

/**
 * @summary object
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * object                                   ID ::= {ds 10}
 * ```
 *
 * @constant
 */
export const object: ID = new _OID([10], ds);

/**
 * @summary port
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * port                                     ID ::= {ds 11}
 * ```
 *
 * @constant
 */
export const port: ID = new _OID([11], ds);

/**
 * @summary group
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * group                                    ID ::= {ds 16}
 * ```
 *
 * @constant
 */
export const group: ID = new _OID([16], ds);

/**
 * @summary module_
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * module                                   ID ::= {ds 1}
 * ```
 *
 * @constant
 */
export const module_: ID = new _OID([1], ds);

/**
 * @summary usefulDefinitions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * usefulDefinitions                        ID ::= {module usefulDefinitions(0) 9}
 * ```
 *
 * @constant
 */
export const usefulDefinitions: ID = new _OID(
    [/* usefulDefinitions */ 0, 9],
    module_
);

/**
 * @summary informationFramework
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * informationFramework                     ID ::= {module informationFramework(1) 9}
 * ```
 *
 * @constant
 */
export const informationFramework: ID = new _OID(
    [/* informationFramework */ 1, 9],
    module_
);

/**
 * @summary directoryAbstractService
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryAbstractService                 ID ::= {module directoryAbstractService(2) 9}
 * ```
 *
 * @constant
 */
export const directoryAbstractService: ID = new _OID(
    [/* directoryAbstractService */ 2, 9],
    module_
);

/**
 * @summary distributedOperations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * distributedOperations                    ID ::= {module distributedOperations(3) 9}
 * ```
 *
 * @constant
 */
export const distributedOperations: ID = new _OID(
    [/* distributedOperations */ 3, 9],
    module_
);

/**
 * @summary protocolObjectIdentifiers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * protocolObjectIdentifiers                ID ::= {module protocolObjectIdentifiers(4) 9}
 * ```
 *
 * @constant
 */
export const protocolObjectIdentifiers: ID = new _OID(
    [/* protocolObjectIdentifiers */ 4, 9],
    module_
);

/**
 * @summary selectedAttributeTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * selectedAttributeTypes                   ID ::= {module selectedAttributeTypes(5) 9}
 * ```
 *
 * @constant
 */
export const selectedAttributeTypes: ID = new _OID(
    [/* selectedAttributeTypes */ 5, 9],
    module_
);

/**
 * @summary selectedObjectClasses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * selectedObjectClasses                    ID ::= {module selectedObjectClasses(6) 9}
 * ```
 *
 * @constant
 */
export const selectedObjectClasses: ID = new _OID(
    [/* selectedObjectClasses */ 6, 9],
    module_
);

/**
 * @summary authenticationFramework
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * authenticationFramework                  ID ::= {module authenticationFramework(7) 9}
 * ```
 *
 * @constant
 */
export const authenticationFramework: ID = new _OID(
    [/* authenticationFramework */ 7, 9],
    module_
);

/**
 * @summary algorithmObjectIdentifiers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * algorithmObjectIdentifiers               ID ::= {module algorithmObjectIdentifiers(8) 9}
 * ```
 *
 * @constant
 */
export const algorithmObjectIdentifiers: ID = new _OID(
    [/* algorithmObjectIdentifiers */ 8, 9],
    module_
);

/**
 * @summary directoryObjectIdentifiers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryObjectIdentifiers               ID ::= {module directoryObjectIdentifiers(9) 9}
 * ```
 *
 * @constant
 */
export const directoryObjectIdentifiers: ID = new _OID(
    [/* directoryObjectIdentifiers */ 9, 9],
    module_
);

/**
 * @summary upperBounds
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * upperBounds                              ID ::= {module upperBounds(10) 9}
 * ```
 *
 * @constant
 */
export const upperBounds: ID = new _OID([/* upperBounds */ 10, 9], module_);

/**
 * @summary dap
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dap                                      ID ::= {module dap(11) 9}
 * ```
 *
 * @constant
 */
export const dap: ID = new _OID([/* dap */ 11, 9], module_);

/**
 * @summary dsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dsp                                      ID ::= {module dsp(12) 9}
 * ```
 *
 * @constant
 */
export const dsp: ID = new _OID([/* dsp */ 12, 9], module_);

/**
 * @summary distributedDirectoryOIDs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * distributedDirectoryOIDs                 ID ::= {module distributedDirectoryOIDs(13) 9}
 * ```
 *
 * @constant
 */
export const distributedDirectoryOIDs: ID = new _OID(
    [/* distributedDirectoryOIDs */ 13, 9],
    module_
);

/**
 * @summary directoryShadowOIDs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryShadowOIDs                      ID ::= {module directoryShadowOIDs(14) 9}
 * ```
 *
 * @constant
 */
export const directoryShadowOIDs: ID = new _OID(
    [/* directoryShadowOIDs */ 14, 9],
    module_
);

/**
 * @summary directoryShadowAbstractService
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryShadowAbstractService           ID ::= {module directoryShadowAbstractService(15) 9}
 * ```
 *
 * @constant
 */
export const directoryShadowAbstractService: ID = new _OID(
    [/* directoryShadowAbstractService */ 15, 9],
    module_
);

/**
 * @summary disp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * disp                                     ID ::= {module disp(16) 7}
 * ```
 *
 * @constant
 */
export const disp: ID = new _OID([/* disp */ 16, 7], module_);

/**
 * @summary dop
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dop                                      ID ::= {module dop(17) 7}
 * ```
 *
 * @constant
 */
export const dop: ID = new _OID([/* dop */ 17, 7], module_);

/**
 * @summary opBindingManagement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * opBindingManagement                      ID ::= {module opBindingManagement(18) 9}
 * ```
 *
 * @constant
 */
export const opBindingManagement: ID = new _OID(
    [/* opBindingManagement */ 18, 9],
    module_
);

/**
 * @summary opBindingOIDs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * opBindingOIDs                            ID ::= {module opBindingOIDs(19) 9}
 * ```
 *
 * @constant
 */
export const opBindingOIDs: ID = new _OID([/* opBindingOIDs */ 19, 9], module_);

/**
 * @summary hierarchicalOperationalBindings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hierarchicalOperationalBindings          ID ::= {module hierarchicalOperationalBindings(20) 9}
 * ```
 *
 * @constant
 */
export const hierarchicalOperationalBindings: ID = new _OID(
    [/* hierarchicalOperationalBindings */ 20, 9],
    module_
);

/**
 * @summary dsaOperationalAttributeTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dsaOperationalAttributeTypes             ID ::= {module dsaOperationalAttributeTypes(22) 9}
 * ```
 *
 * @constant
 */
export const dsaOperationalAttributeTypes: ID = new _OID(
    [/* dsaOperationalAttributeTypes */ 22, 9],
    module_
);

/**
 * @summary schemaAdministration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * schemaAdministration                     ID ::= {module schemaAdministration(23) 9}
 * ```
 *
 * @constant
 */
export const schemaAdministration: ID = new _OID(
    [/* schemaAdministration */ 23, 9],
    module_
);

/**
 * @summary basicAccessControl
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * basicAccessControl                       ID ::= {module basicAccessControl(24) 9}
 * ```
 *
 * @constant
 */
export const basicAccessControl: ID = new _OID(
    [/* basicAccessControl */ 24, 9],
    module_
);

/**
 * @summary directoryOperationalBindingTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryOperationalBindingTypes         ID ::= {module directoryOperationalBindingTypes(25) 9}
 * ```
 *
 * @constant
 */
export const directoryOperationalBindingTypes: ID = new _OID(
    [/* directoryOperationalBindingTypes */ 25, 9],
    module_
);

/**
 * @summary certificateExtensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificateExtensions                    ID ::= {module certificateExtensions(26) 9}
 * ```
 *
 * @constant
 */
export const certificateExtensions: ID = new _OID(
    [/* certificateExtensions */ 26, 9],
    module_
);

/**
 * @summary directoryManagement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryManagement                      ID ::= {module directoryManagement(27) 9}
 * ```
 *
 * @constant
 */
export const directoryManagement: ID = new _OID(
    [/* directoryManagement */ 27, 9],
    module_
);

/**
 * @summary enhancedSecurity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * enhancedSecurity                         ID ::= {module enhancedSecurity(28) 9}
 * ```
 *
 * @constant
 */
export const enhancedSecurity: ID = new _OID(
    [/* enhancedSecurity */ 28, 9],
    module_
);

/**
 * @summary directorySecurityExchanges
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directorySecurityExchanges               ID ::= {module directorySecurityExchanges (29) 9}
 * ```
 *
 * @constant
 */
export const directorySecurityExchanges: ID = new _OID(
    [/* directorySecurityExchanges */ 29, 9],
    module_
);

/**
 * @summary iDMProtocolSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * iDMProtocolSpecification                 ID ::= {module iDMProtocolSpecification(30) 9}
 * ```
 *
 * @constant
 */
export const iDMProtocolSpecification: ID = new _OID(
    [/* iDMProtocolSpecification */ 30, 9],
    module_
);

/**
 * @summary directoryIDMProtocols
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryIDMProtocols                    ID ::= {module directoryIDMProtocols(31) 9}
 * ```
 *
 * @constant
 */
export const directoryIDMProtocols: ID = new _OID(
    [/* directoryIDMProtocols */ 31, 9],
    module_
);

/**
 * @summary attributeCertificateDefinitions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeCertificateDefinitions          ID ::= {module attributeCertificateDefinitions(32) 9}
 * ```
 *
 * @constant
 */
export const attributeCertificateDefinitions: ID = new _OID(
    [/* attributeCertificateDefinitions */ 32, 9],
    module_
);

/**
 * @summary serviceAdministration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * serviceAdministration                    ID ::= {module serviceAdministration(33) 9}
 * ```
 *
 * @constant
 */
export const serviceAdministration: ID = new _OID(
    [/* serviceAdministration */ 33, 9],
    module_
);

/**
 * @summary ldapAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldapAttributes                           ID ::= {module ldapAttributes(34) 9}
 * ```
 *
 * @constant
 */
export const ldapAttributes: ID = new _OID(
    [/* ldapAttributes */ 34, 9],
    module_
);

/**
 * @summary commonProtocolSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * commonProtocolSpecification              ID ::= {module commonProtocolSpecification(35) 9}
 * ```
 *
 * @constant
 */
export const commonProtocolSpecification: ID = new _OID(
    [/* commonProtocolSpecification */ 35, 9],
    module_
);

/**
 * @summary oSIProtocolSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oSIProtocolSpecification                 ID ::= {module oSIProtocolSpecification(36) 9}
 * ```
 *
 * @constant
 */
export const oSIProtocolSpecification: ID = new _OID(
    [/* oSIProtocolSpecification */ 36, 9],
    module_
);

/**
 * @summary directoryOSIProtocols
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryOSIProtocols                    ID ::= {module directoryOSIProtocols(37) 9}
 * ```
 *
 * @constant
 */
export const directoryOSIProtocols: ID = new _OID(
    [/* directoryOSIProtocols */ 37, 9],
    module_
);

/**
 * @summary ldapSystemSchema
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldapSystemSchema                         ID ::= {module ldapSystemSchema(38) 9}
 * ```
 *
 * @constant
 */
export const ldapSystemSchema: ID = new _OID(
    [/* ldapSystemSchema */ 38, 9],
    module_
);

/**
 * @summary passwordPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * passwordPolicy                           ID ::= {module passwordPolicy(39) 9}
 * ```
 *
 * @constant
 */
export const passwordPolicy: ID = new _OID(
    [/* passwordPolicy */ 39, 9],
    module_
);

/**
 * @summary pkiPmiExternalDataTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkiPmiExternalDataTypes                  ID ::= {module pkiPmiExternalDataTypes(40) 9}
 * ```
 *
 * @constant
 */
export const pkiPmiExternalDataTypes: ID = new _OID(
    [/* pkiPmiExternalDataTypes */ 40, 9],
    module_
);

/**
 * @summary extensionAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * extensionAttributes                      ID ::= {module extensionAttributes(41) 9}
 * ```
 *
 * @constant
 */
export const extensionAttributes: ID = new _OID(
    [/* extensionAttributes */ 41, 9],
    module_
);

/**
 * @summary pkiPmiWrapper
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkiPmiWrapper                            ID ::= {module pkiPmiWrapper(42) 9}
 * ```
 *
 * @constant
 */
export const pkiPmiWrapper: ID = new _OID([/* pkiPmiWrapper */ 42, 9], module_);

/**
 * @summary avlManagement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * avlManagement                            ID ::= {module avlManagement(43) 9}
 * ```
 *
 * @constant
 */
export const avlManagement: ID = new _OID([/* avlManagement */ 43, 9], module_);

/**
 * @summary trustBrokerProtocol
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * trustBrokerProtocol                      ID ::= {module trustBrokerProtocol(44) 9}
 * ```
 *
 * @constant
 */
export const trustBrokerProtocol: ID = new _OID(
    [/* trustBrokerProtocol */ 44, 9],
    module_
);

/**
 * @summary objectClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * objectClass                              ID ::= {ds 6}
 * ```
 *
 * @constant
 */
export const objectClass: ID = new _OID([6], ds);

/**
 * @summary id_oc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc                                    ID ::= objectClass
 * ```
 *
 * @constant
 */
export const id_oc: ID = objectClass;

/**
 * @summary attributeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeType                            ID ::= {ds 4}
 * ```
 *
 * @constant
 */
export const attributeType: ID = new _OID([4], ds);

/**
 * @summary id_at
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at                                    ID ::= attributeType
 * ```
 *
 * @constant
 */
export const id_at: ID = attributeType;

/**
 * @summary abstractSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * abstractSyntax                           ID ::= {ds 9}
 * ```
 *
 * @constant
 */
export const abstractSyntax: ID = new _OID([9], ds);

/**
 * @summary id_as
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-as                                    ID ::= abstractSyntax
 * ```
 *
 * @constant
 */
export const id_as: ID = abstractSyntax;

/**
 * @summary matchingRule
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * matchingRule                             ID ::= {ds 13}
 * ```
 *
 * @constant
 */
export const matchingRule: ID = new _OID([13], ds);

/**
 * @summary id_mr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr                                    ID ::= matchingRule
 * ```
 *
 * @constant
 */
export const id_mr: ID = matchingRule;

/**
 * @summary nameForm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nameForm                                 ID ::= {ds 15}
 * ```
 *
 * @constant
 */
export const nameForm: ID = new _OID([15], ds);

/**
 * @summary id_nf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nf                                    ID ::= nameForm
 * ```
 *
 * @constant
 */
export const id_nf: ID = nameForm;

/**
 * @summary subentry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subentry                                 ID ::= {ds 17}
 * ```
 *
 * @constant
 */
export const subentry: ID = new _OID([17], ds);

/**
 * @summary id_sc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sc                                    ID ::= subentry
 * ```
 *
 * @constant
 */
export const id_sc: ID = subentry;

/**
 * @summary operationalAttributeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * operationalAttributeType                 ID ::= {ds 18}
 * ```
 *
 * @constant
 */
export const operationalAttributeType: ID = new _OID([18], ds);

/**
 * @summary id_oa
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oa                                    ID ::= operationalAttributeType
 * ```
 *
 * @constant
 */
export const id_oa: ID = operationalAttributeType;

/**
 * @summary operationalBinding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * operationalBinding                       ID ::= {ds 19}
 * ```
 *
 * @constant
 */
export const operationalBinding: ID = new _OID([19], ds);

/**
 * @summary id_ob
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ob                                    ID ::= operationalBinding
 * ```
 *
 * @constant
 */
export const id_ob: ID = operationalBinding;

/**
 * @summary dsaOperationalAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dsaOperationalAttribute                  ID ::= {ds 12}
 * ```
 *
 * @constant
 */
export const dsaOperationalAttribute: ID = new _OID([12], ds);

/**
 * @summary id_doa
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-doa                                   ID ::= dsaOperationalAttribute
 * ```
 *
 * @constant
 */
export const id_doa: ID = dsaOperationalAttribute;

/**
 * @summary knowledgeMatchingRule
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * knowledgeMatchingRule                    ID ::= {ds 14}
 * ```
 *
 * @constant
 */
export const knowledgeMatchingRule: ID = new _OID([14], ds);

/**
 * @summary id_kmr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-kmr                                   ID ::= knowledgeMatchingRule
 * ```
 *
 * @constant
 */
export const id_kmr: ID = knowledgeMatchingRule;

/**
 * @summary schemaObjectClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * schemaObjectClass                        ID ::= {ds 20}
 * ```
 *
 * @constant
 */
export const schemaObjectClass: ID = new _OID([20], ds);

/**
 * @summary id_soc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-soc                                   ID ::= schemaObjectClass
 * ```
 *
 * @constant
 */
export const id_soc: ID = schemaObjectClass;

/**
 * @summary schemaOperationalAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * schemaOperationalAttribute               ID ::= {ds 21}
 * ```
 *
 * @constant
 */
export const schemaOperationalAttribute: ID = new _OID([21], ds);

/**
 * @summary id_soa
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-soa                                   ID ::= schemaOperationalAttribute
 * ```
 *
 * @constant
 */
export const id_soa: ID = schemaOperationalAttribute;

/**
 * @summary administrativeRoles
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * administrativeRoles                      ID ::= {ds 23}
 * ```
 *
 * @constant
 */
export const administrativeRoles: ID = new _OID([23], ds);

/**
 * @summary id_ar
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ar                                    ID ::= administrativeRoles
 * ```
 *
 * @constant
 */
export const id_ar: ID = administrativeRoles;

/**
 * @summary accessControlAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * accessControlAttribute                   ID ::= {ds 24}
 * ```
 *
 * @constant
 */
export const accessControlAttribute: ID = new _OID([24], ds);

/**
 * @summary id_aca
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aca                                   ID ::= accessControlAttribute
 * ```
 *
 * @constant
 */
export const id_aca: ID = accessControlAttribute;

/**
 * @summary applicationContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * applicationContext                       ID ::= {ds 3}
 * ```
 *
 * @constant
 */
export const applicationContext: ID = new _OID([3], ds);

/**
 * @summary id_ac
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ac                                    ID ::= applicationContext
 * ```
 *
 * @constant
 */
export const id_ac: ID = applicationContext;

/**
 * @summary rosObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rosObject                                ID ::= {ds 25}
 * ```
 *
 * @constant
 */
export const rosObject: ID = new _OID([25], ds);

/**
 * @summary id_rosObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-rosObject                             ID ::= rosObject
 * ```
 *
 * @constant
 */
export const id_rosObject: ID = rosObject;

/**
 * @summary contract
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * contract                                 ID ::= {ds 26}
 * ```
 *
 * @constant
 */
export const contract: ID = new _OID([26], ds);

/**
 * @summary id_contract
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-contract                              ID ::= contract
 * ```
 *
 * @constant
 */
export const id_contract: ID = contract;

/**
 * @summary package_
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * package                                  ID ::= {ds 27}
 * ```
 *
 * @constant
 */
export const package_: ID = new _OID([27], ds);

/**
 * @summary id_package
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package                               ID ::= package
 * ```
 *
 * @constant
 */
export const id_package: ID = package_;

/**
 * @summary accessControlSchemes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * accessControlSchemes                     ID ::= {ds 28}
 * ```
 *
 * @constant
 */
export const accessControlSchemes: ID = new _OID([28], ds);

/**
 * @summary id_acScheme
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-acScheme                              ID ::= accessControlSchemes
 * ```
 *
 * @constant
 */
export const id_acScheme: ID = accessControlSchemes;

/**
 * @summary certificateExtension
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificateExtension                     ID ::= {ds 29}
 * ```
 *
 * @constant
 */
export const certificateExtension: ID = new _OID([29], ds);

/**
 * @summary id_ce
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce                                    ID ::= certificateExtension
 * ```
 *
 * @constant
 */
export const id_ce: ID = certificateExtension;

/**
 * @summary managementObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * managementObject                         ID ::= {ds 30}
 * ```
 *
 * @constant
 */
export const managementObject: ID = new _OID([30], ds);

/**
 * @summary id_mgt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mgt                                   ID ::= managementObject
 * ```
 *
 * @constant
 */
export const id_mgt: ID = managementObject;

/**
 * @summary attributeValueContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeValueContext                    ID ::= {ds 31}
 * ```
 *
 * @constant
 */
export const attributeValueContext: ID = new _OID([31], ds);

/**
 * @summary id_avc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-avc                                   ID ::= attributeValueContext
 * ```
 *
 * @constant
 */
export const id_avc: ID = attributeValueContext;

/**
 * @summary securityExchange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * securityExchange                         ID ::= {ds 32}
 * ```
 *
 * @constant
 */
export const securityExchange: ID = new _OID([32], ds);

/**
 * @summary id_se
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-se                                    ID ::= securityExchange
 * ```
 *
 * @constant
 */
export const id_se: ID = securityExchange;

/**
 * @summary idmProtocol
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * idmProtocol                              ID ::= {ds 33}
 * ```
 *
 * @constant
 */
export const idmProtocol: ID = new _OID([33], ds);

/**
 * @summary id_idm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-idm                                   ID ::= idmProtocol
 * ```
 *
 * @constant
 */
export const id_idm: ID = idmProtocol;

/**
 * @summary problem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * problem                                  ID ::= {ds 34}
 * ```
 *
 * @constant
 */
export const problem: ID = new _OID([34], ds);

/**
 * @summary id_pr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pr                                    ID ::= problem
 * ```
 *
 * @constant
 */
export const id_pr: ID = problem;

/**
 * @summary notification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * notification                             ID ::= {ds 35}
 * ```
 *
 * @constant
 */
export const notification: ID = new _OID([35], ds);

/**
 * @summary id_not
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-not                                   ID ::= notification
 * ```
 *
 * @constant
 */
export const id_not: ID = notification;

/**
 * @summary matchingRestriction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * matchingRestriction                      ID ::= {ds 36}
 * ```
 *
 * @constant
 */
export const matchingRestriction: ID = new _OID([36], ds);

/**
 * @summary id_mre
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mre                                   ID ::= matchingRestriction
 * ```
 *
 * @constant
 */
export const id_mre: ID = matchingRestriction;

/**
 * @summary controlAttributeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * controlAttributeType                     ID ::= {ds 37}
 * ```
 *
 * @constant
 */
export const controlAttributeType: ID = new _OID([37], ds);

/**
 * @summary id_cat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cat                                   ID ::= controlAttributeType
 * ```
 *
 * @constant
 */
export const id_cat: ID = controlAttributeType;

/**
 * @summary keyPurposes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * keyPurposes                              ID ::= {ds 38}
 * ```
 *
 * @constant
 */
export const keyPurposes: ID = new _OID([38], ds);

/**
 * @summary id_kp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-kp                                    ID ::= keyPurposes
 * ```
 *
 * @constant
 */
export const id_kp: ID = keyPurposes;

/**
 * @summary passwordQuality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * passwordQuality                          ID ::= {ds 39}
 * ```
 *
 * @constant
 */
export const passwordQuality: ID = new _OID([39], ds);

/**
 * @summary id_pq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pq                                    ID ::= passwordQuality
 * ```
 *
 * @constant
 */
export const id_pq: ID = passwordQuality;

/**
 * @summary attributeSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeSyntax                          ID ::= {ds 40}
 * ```
 *
 * @constant
 */
export const attributeSyntax: ID = new _OID([40], ds);

/**
 * @summary id_ats
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ats                                   ID ::= attributeSyntax
 * ```
 *
 * @constant
 */
export const id_ats: ID = attributeSyntax;

/**
 * @summary id_asx
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx                                   ID ::= attributeSyntax
 * ```
 *
 * @constant
 */
export const id_asx: ID = attributeSyntax;

/**
 * @summary ldap_syntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldap-syntax         ID ::= {ldap-wall 115 121 1}
 * ```
 *
 * @constant
 */
export const ldap_syntax: ID = new _OID([115, 121, 1], ldap_wall);

/**
 * @summary id_lsx
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx                                   ID ::= ldap-syntax
 * ```
 *
 * @constant
 */
export const id_lsx: ID = ldap_syntax;

/**
 * @summary ldap_dir
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldap-dir            ID ::= {internet directory(1)}
 * ```
 *
 * @constant
 */
export const ldap_dir: ID = new _OID([/* directory */ 1], internet);

/**
 * @summary ldap_x509
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldap-x509           ID ::= {ldap-dir x509(15)}
 * ```
 *
 * @constant
 */
export const ldap_x509: ID = new _OID([/* x509 */ 15], ldap_dir);

/**
 * @summary id_ldx
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ldx                                   ID ::= ldap-x509
 * ```
 *
 * @constant
 */
export const id_ldx: ID = ldap_x509;

/**
 * @summary ldap_attr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldap-attr           ID ::= {ldap-wall 101 120}
 * ```
 *
 * @constant
 */
export const ldap_attr: ID = new _OID([101, 120], ldap_wall);

/**
 * @summary id_lat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lat                                   ID ::= ldap-attr
 * ```
 *
 * @constant
 */
export const id_lat: ID = ldap_attr;

/**
 * @summary ldap_match
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldap-match          ID ::= {ldap-wall 109 114}
 * ```
 *
 * @constant
 */
export const ldap_match: ID = new _OID([109, 114], ldap_wall);

/**
 * @summary id_lmr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lmr                                   ID ::= ldap-match
 * ```
 *
 * @constant
 */
export const id_lmr: ID = ldap_match;

/**
 * @summary openLDAP_attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * openLDAP-attributes ID ::= {ldap-openLDAP attributeType(3)}
 * ```
 *
 * @constant
 */
export const openLDAP_attributes: ID = new _OID(
    [/* attributeType */ 3],
    ldap_openLDAP
);

/**
 * @summary id_oat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oat                                   ID ::= openLDAP-attributes
 * ```
 *
 * @constant
 */
export const id_oat: ID = openLDAP_attributes;

/**
 * @summary cosine
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cosine              ID ::= {itu-t(0) data(9) pss(2342) ucl(19200300) pilot(100)}
 * ```
 *
 * @constant
 */
export const cosine: ID = new _OID([
    /* itu-t */ 0,
    /* data */ 9,
    /* pss */ 2342,
    /* ucl */ 19200300,
    /* pilot */ 100,
]);

/**
 * @summary cosineAttr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cosineAttr          ID ::= {cosine pilotAttributeType(1)}
 * ```
 *
 * @constant
 */
export const cosineAttr: ID = new _OID([/* pilotAttributeType */ 1], cosine);

/**
 * @summary id_coat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-coat                                  ID ::= cosineAttr
 * ```
 *
 * @constant
 */
export const id_coat: ID = cosineAttr;

/**
 * @summary avRestriction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * avRestriction                            ID ::= {ds 41}
 * ```
 *
 * @constant
 */
export const avRestriction: ID = new _OID([41], ds);

/**
 * @summary id_avr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-avr                                   ID ::= avRestriction
 * ```
 *
 * @constant
 */
export const id_avr: ID = avRestriction;

/**
 * @summary cmsContentType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cmsContentType                           ID ::= {ds 42}
 * ```
 *
 * @constant
 */
export const cmsContentType: ID = new _OID([42], ds);

/**
 * @summary id_cmsct
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cmsct                                 ID ::= cmsContentType
 * ```
 *
 * @constant
 */
export const id_cmsct: ID = cmsContentType;

/**
 * @summary userpwdMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userpwdMatch                           ID ::= {id-ls 0}
 * ```
 *
 * @constant
 */
// export const userpwdMatch: ID = new _OID([0], id_ls);

/**
 * @summary userPwdHisoricMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userPwdHisoricMatch                    ID ::= {id-ls 1}
 * ```
 *
 * @constant
 */
// export const userPwdHisoricMatch: ID = new _OID([1], id_ls);

/**
 * @summary pwdControl
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdControl                             ID ::= {id-lc 0}
 * ```
 *
 * @constant
 */
// export const pwdControl: ID = new _OID([0], id_lc);

/**
 * @summary pwdResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdResponse                            ID ::= {id-lc 1}
 * ```
 *
 * @constant
 */
// export const pwdResponse: ID = new _OID([1], id_lc);

/**
 * @summary distributedDirectoryObjectIdentifiers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * distributedDirectoryObjectIdentifiers ID ::= {module 13}
 * ```
 *
 * @constant
 */
export const distributedDirectoryObjectIdentifiers: ID = new _OID(
    [13],
    module_
);

/**
 * @summary operationalBindingOIDs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * operationalBindingOIDs                ID ::= {module 25}
 * ```
 *
 * @constant
 */
export const operationalBindingOIDs: ID = new _OID([25], module_);

/* END_MODULE UsefulDefinitions */
/* eslint-enable */
