import { ObjectIdentifier } from "asn1-ts";

export { default as Accessors } from "./Accessors";
export { default as AdministrativeRole } from "./AdministrativeRole";
export { default as ApplicationContext } from "./ApplicationContext";
export { default as AssociationEstablishment } from "./AssociationEstablishment";
export { default as AssociationId } from "./AssociationId";
export { default as AuthenReasonSyntax } from "./AuthenReasonSyntax";
export { default as DSAScopeOfChainingValue } from "./DSAScopeOfChainingValue";
export { default as DSAScopeOfReferralValue } from "./DSAScopeOfReferralValue";
export { default as DirectoryInformationServiceElement } from "./DirectoryInformationServiceElement";
export { default as HOBRole } from "./HOBRole";
export { default as MgtBitString } from "./MgtBitString";
export { default as MgtBoolean } from "./MgtBoolean";
export { default as MgtCommonName } from "./MgtCommonName";
export { default as MgtGeneralizedTime } from "./MgtGeneralizedTime";
export { default as MgtInteger } from "./MgtInteger";
export { default as MgtName } from "./MgtName";
export { default as MgtOID } from "./MgtOID";
export { default as MgtOctetString } from "./MgtOctetString";
export { default as MgtPrintableString } from "./MgtPrintableString";
export { default as PeerEntityAuthenticationPolicy } from "./PeerEntityAuthenticationPolicy";
export { default as RemoteDSAList } from "./RemoteDSAList";
export { default as RequestAuthenticationPolicy } from "./RequestAuthenticationPolicy";
export { default as ResourceSyntax } from "./ResourceSyntax";
export { default as ResultAuthenticationPolicy } from "./ResultAuthenticationPolicy";
export { default as SecondaryShadows } from "./SecondaryShadows";
export { default as ShadowingRole } from "./ShadowingRole";
// export { default as SubSchema } from "./SubSchema";
export { default as SubSchemaSyntax } from "./SubSchemaSyntax";
export { default as SupportedApplicationContexts } from "./SupportedApplicationContexts";
export { default as zero } from "./zero";

//  Object Identifier assignments
export const id_mac = new ObjectIdentifier([2, 5, 30, 0]);
export const id_mat = new ObjectIdentifier([2, 5, 30, 1]);
export const id_moc = new ObjectIdentifier([2, 5, 30, 2]);
export const id_mnb = new ObjectIdentifier([2, 5, 30, 3]);
export const id_mp  = new ObjectIdentifier([2, 5, 30, 4]);
export const id_mpa = new ObjectIdentifier([2, 5, 30, 5]);
//  Actions
export const id_mac_useRemoteDSA = new ObjectIdentifier([2, 5, 30, 0, 0]);
export const id_mac_useHomeDSA = new ObjectIdentifier([2, 5, 30, 0, 1]);
export const id_mac_update = new ObjectIdentifier([2, 5, 30, 0, 2]);
//  Attributes
export const id_mat_accessPoint = new ObjectIdentifier([2, 5, 30, 1, 0]);
export const id_mat_masterEntries = new ObjectIdentifier([2, 5, 30, 1, 1]);
export const id_mat_copyEntries = new ObjectIdentifier([2, 5, 30, 1, 2]);
export const id_mat_loopsDetected = new ObjectIdentifier([2, 5, 30, 1, 3]);
export const id_mat_securityErrors = new ObjectIdentifier([2, 5, 30, 1, 4]);
export const id_mat_nameErrors = new ObjectIdentifier([2, 5, 30, 1, 5]);
export const id_mat_foundLocalEntries = new ObjectIdentifier([2, 5, 30, 1, 6]);
export const id_mat_referrals = new ObjectIdentifier([2, 5, 30, 1, 7]);
export const id_mat_serviceErrors = new ObjectIdentifier([2, 5, 30, 1, 8]);
export const id_mat_aliasDereferences = new ObjectIdentifier([2, 5, 30, 1, 9]);
export const id_mat_chainings = new ObjectIdentifier([2, 5, 30, 1, 10]);
export const id_mat_invalidReferences = new ObjectIdentifier([2, 5, 30, 1, 11]);
export const id_mat_unableToProceed = new ObjectIdentifier([2, 5, 30, 1, 12]);
export const id_mat_outOfScope = new ObjectIdentifier([2, 5, 30, 1, 13]);
export const id_mat_noSuchObject = new ObjectIdentifier([2, 5, 30, 1, 14]);
export const id_mat_aliasProblem = new ObjectIdentifier([2, 5, 30, 1, 15]);
export const id_mat_aliasDereferencingProblem = new ObjectIdentifier([2, 5, 30, 1, 16]);
export const id_mat_affectsMultipleDSAs = new ObjectIdentifier([2, 5, 30, 1, 17]);
export const id_mat_unavailableCriticalExtension = new ObjectIdentifier([2, 5, 30, 1, 18]);
export const id_mat_timeLimitExceeded = new ObjectIdentifier([2, 5, 30, 1, 19]);
export const id_mat_sizeLimitExceeded = new ObjectIdentifier([2, 5, 30, 1, 20]);
export const id_mat_adminLimitExceeded = new ObjectIdentifier([2, 5, 30, 1, 21]);
export const id_mat_prohibitChaining = new ObjectIdentifier([2, 5, 30, 1, 24]);
export const id_mat_readOpsProc = new ObjectIdentifier([2, 5, 30, 1, 25]);
export const id_mat_compareOpsProc = new ObjectIdentifier([2, 5, 30, 1, 26]);
export const id_mat_abandonOpsProc = new ObjectIdentifier([2, 5, 30, 1, 27]);
export const id_mat_listOpsProc = new ObjectIdentifier([2, 5, 30, 1, 28]);
export const id_mat_searchBaseOpsProc = new ObjectIdentifier([2, 5, 30, 1, 29]);
export const id_mat_search1LevelOpsProc = new ObjectIdentifier([2, 5, 30, 1, 30]);
export const id_mat_searchSubtreeOpsProc = new ObjectIdentifier([2, 5, 30, 1, 31]);
export const id_mat_addEntryOpsProc = new ObjectIdentifier([2, 5, 30, 1, 32]);
export const id_mat_removeEntryOpsProc = new ObjectIdentifier([2, 5, 30, 1, 33]);
export const id_mat_modifyEntryOpsProc = new ObjectIdentifier([2, 5, 30, 1, 34]);
export const id_mat_modifyDNOpsProc = new ObjectIdentifier([2, 5, 30, 1, 35]);
export const id_mat_chReadOpsProc = new ObjectIdentifier([2, 5, 30, 1, 36]);
export const id_mat_chCompareOpsProc = new ObjectIdentifier([2, 5, 30, 1, 37]);
export const id_mat_chAbandonOpsProc = new ObjectIdentifier([2, 5, 30, 1, 38]);
export const id_mat_chListOpsProc = new ObjectIdentifier([2, 5, 30, 1, 39]);
export const id_mat_chSearchBaseOpsProc = new ObjectIdentifier([2, 5, 30, 1, 40]);
export const id_mat_chSearch1LevelOpsProc = new ObjectIdentifier([2, 5, 30, 1, 41]);
export const id_mat_chSearchSubtreeOpsProc = new ObjectIdentifier([2, 5, 30, 1, 42]);
export const id_mat_chAddEntryOpsProc = new ObjectIdentifier([2, 5, 30, 1, 43]);
export const id_mat_chRemoveEntryOpsProc = new ObjectIdentifier([2, 5, 30, 1, 44]);
export const id_mat_chModifyEntryOpsProc = new ObjectIdentifier([2, 5, 30, 1, 45]);
export const id_mat_chModifyDNOpsProc = new ObjectIdentifier([2, 5, 30, 1, 46]);
export const id_mat_dSAScopeOfReferral = new ObjectIdentifier([2, 5, 30, 1, 47]);
export const id_mat_dSAScopeOfChaining = new ObjectIdentifier([2, 5, 30, 1, 48]);
export const id_mat_peerEntityAuthenticationPolicy = new ObjectIdentifier([2, 5, 30, 1, 49]);
export const id_mat_requestAuthenticationPolicy = new ObjectIdentifier([2, 5, 30, 1, 50]);
export const id_mat_resultAuthenticationPolicy = new ObjectIdentifier([2, 5, 30, 1, 51]);
export const id_mat_dSPAssociationEstablishment = new ObjectIdentifier([2, 5, 30, 1, 52]);
export const id_mat_dOPAssociationEstablishment = new ObjectIdentifier([2, 5, 30, 1, 53]);
export const id_mat_dISPAssociationEstablishment = new ObjectIdentifier([2, 5, 30, 1, 54]);
export const id_mat_maxDAPAssociations = new ObjectIdentifier([2, 5, 30, 1, 55]);
export const id_mat_maxDSPAssociations = new ObjectIdentifier([2, 5, 30, 1, 56]);
export const id_mat_maxDOPAssociations = new ObjectIdentifier([2, 5, 30, 1, 57]);
export const id_mat_maxDISPAssociations = new ObjectIdentifier([2, 5, 30, 1, 58]);
export const id_mat_dAPAssociationTimeout = new ObjectIdentifier([2, 5, 30, 1, 59]);
export const id_mat_dSPAssociationTimeout = new ObjectIdentifier([2, 5, 30, 1, 60]);
export const id_mat_dOPAssociationTimeout = new ObjectIdentifier([2, 5, 30, 1, 61]);
export const id_mat_dISPAssociationTimeout = new ObjectIdentifier([2, 5, 30, 1, 62]);
export const id_mat_dSAActiveAssociations = new ObjectIdentifier([2, 5, 30, 1, 63]);
export const id_mat_pagedResultsMaxIDs = new ObjectIdentifier([2, 5, 30, 1, 64]);
export const id_mat_pagedResultsTimer = new ObjectIdentifier([2, 5, 30, 1, 65]);
export const id_mat_homeDSA = new ObjectIdentifier([2, 5, 30, 1, 66]);
export const id_mat_dUATimeout = new ObjectIdentifier([2, 5, 30, 1, 68]);
export const id_mat_supportedApplicationContexts = new ObjectIdentifier([2, 5, 30, 1, 69]);
export const id_mat_reverseCredentials = new ObjectIdentifier([2, 5, 30, 1, 70]);
export const id_mat_remoteAccessPoint = new ObjectIdentifier([2, 5, 30, 1, 71]);
export const id_mat_maxInboundAssociations = new ObjectIdentifier([2, 5, 30, 1, 72]);
export const id_mat_maxOutboundAssociations = new ObjectIdentifier([2, 5, 30, 1, 73]);
export const id_mat_currentActiveAssocs = new ObjectIdentifier([2, 5, 30, 1, 74]);
export const id_mat_currentActiveInboundAssocs = new ObjectIdentifier([2, 5, 30, 1, 75]);
export const id_mat_currentActiveOutboundAssocs = new ObjectIdentifier([2, 5, 30, 1, 76]);
export const id_mat_accumAssocs = new ObjectIdentifier([2, 5, 30, 1, 77]);
export const id_mat_accumInboundAssocs = new ObjectIdentifier([2, 5, 30, 1, 78]);
export const id_mat_accumOutboundAssocs = new ObjectIdentifier([2, 5, 30, 1, 79]);
export const id_mat_accumFailedInboundAssocs = new ObjectIdentifier([2, 5, 30, 1, 80]);
export const id_mat_accumFailedOutboundAssocs = new ObjectIdentifier([2, 5, 30, 1, 81]);
export const id_mat_timeOfLastAttempt = new ObjectIdentifier([2, 5, 30, 1, 82]);
export const id_mat_timeOfLastSuccess = new ObjectIdentifier([2, 5, 30, 1, 83]);
export const id_mat_requestCounter = new ObjectIdentifier([2, 5, 30, 1, 84]);
export const id_mat_replyCounter = new ObjectIdentifier([2, 5, 30, 1, 85]);
export const id_mat_requestsFailedCounter = new ObjectIdentifier([2, 5, 30, 1, 86]);
export const id_mat_timeOfLastAccess = new ObjectIdentifier([2, 5, 30, 1, 87]);
export const id_mat_agreementID = new ObjectIdentifier([2, 5, 30, 1, 88]);
export const id_mat_agreementVersion = new ObjectIdentifier([2, 5, 30, 1, 89]);
export const id_mat_hOBRole = new ObjectIdentifier([2, 5, 30, 1, 90]);
export const id_mat_shadowingSubject = new ObjectIdentifier([2, 5, 30, 1, 91]);
export const id_mat_updateMode = new ObjectIdentifier([2, 5, 30, 1, 92]);
export const id_mat_masterAccessPoint = new ObjectIdentifier([2, 5, 30, 1, 93]);
export const id_mat_secondaryShadows = new ObjectIdentifier([2, 5, 30, 1, 94]);
export const id_mat_shadowingRole = new ObjectIdentifier([2, 5, 30, 1, 95]);
export const id_mat_lastUpdateTime = new ObjectIdentifier([2, 5, 30, 1, 96]);
export const id_mat_shadowingSchedule = new ObjectIdentifier([2, 5, 30, 1, 97]);
export const id_mat_nextUpdateTime = new ObjectIdentifier([2, 5, 30, 1, 98]);
export const id_mat_useDOP = new ObjectIdentifier([2, 5, 30, 1, 99]);
export const id_mat_accessor = new ObjectIdentifier([2, 5, 30, 1, 100]);
export const id_mat_allowedInfoService = new ObjectIdentifier([2, 5, 30, 1, 101]);
export const id_mat_applicationContextInUse = new ObjectIdentifier([2, 5, 30, 1, 102]);
export const id_mat_associationId = new ObjectIdentifier([2, 5, 30, 1, 103]);
export const id_mat_callingAETitle = new ObjectIdentifier([2, 5, 30, 1, 104]);
export const id_mat_disAllowedInfoService = new ObjectIdentifier([2, 5, 30, 1, 105]);
export const id_mat_maxEntriesReturned = new ObjectIdentifier([2, 5, 30, 1, 106]);
export const id_mat_maxTimeForResult = new ObjectIdentifier([2, 5, 30, 1, 107]);
export const id_mat_modifyDNRenameOnlyOpsProc = new ObjectIdentifier([2, 5, 30, 1, 108]);
export const id_mat_serviceDesc = new ObjectIdentifier([2, 5, 30, 1, 109]);
export const id_mat_serviceId = new ObjectIdentifier([2, 5, 30, 1, 110]);
export const id_mat_subSchema = new ObjectIdentifier([2, 5, 30, 1, 111]);
export const id_mat_sizeLimit = new ObjectIdentifier([2, 5, 30, 1, 112]);
export const id_mat_timeLimit = new ObjectIdentifier([2, 5, 30, 1, 113]);
export const id_mat_dirCustName = new ObjectIdentifier([2, 5, 30, 1, 114]);
export const id_mat_dirUserName = new ObjectIdentifier([2, 5, 30, 1, 115]);
export const id_mat_dirCustAddr = new ObjectIdentifier([2, 5, 30, 1, 116]);
export const id_mat_dMDName = new ObjectIdentifier([2, 5, 30, 1, 117]);
// 2, 5, 30, 1,-dIRQOP						OBJECT IDENTIFIER	::=	{2, 5, 30, 1, 118]);
export const id_mat_accessControlScheme = new ObjectIdentifier([2, 5, 30, 1, 119]);
export const id_mat_administrativeRole = new ObjectIdentifier([2, 5, 30, 1, 120]);
export const id_mat_aliasedEntryName = new ObjectIdentifier([2, 5, 30, 1, 121]);
export const id_mat_attributeTypes = new ObjectIdentifier([2, 5, 30, 1, 122]);
export const id_mat_collectiveExclusions = new ObjectIdentifier([2, 5, 30, 1, 123]);
export const id_mat_consumerKnowledge = new ObjectIdentifier([2, 5, 30, 1, 124]);
export const id_mat_createTimestamp = new ObjectIdentifier([2, 5, 30, 1, 125]);
export const id_mat_creatorsName = new ObjectIdentifier([2, 5, 30, 1, 126]);
export const id_mat_credentials = new ObjectIdentifier([2, 5, 30, 1, 127]);
export const id_mat_distName = new ObjectIdentifier([2, 5, 30, 1, 128]);
export const id_mat_dITContentRules = new ObjectIdentifier([2, 5, 30, 1, 129]);
export const id_mat_dITStructureRule = new ObjectIdentifier([2, 5, 30, 1, 130]);
export const id_mat_dseType = new ObjectIdentifier([2, 5, 30, 1, 131]);
export const id_mat_entryACI = new ObjectIdentifier([2, 5, 30, 1, 132]);
export const id_mat_governingSR = new ObjectIdentifier([2, 5, 30, 1, 133]);
export const id_mat_matchingRules = new ObjectIdentifier([2, 5, 30, 1, 134]);
export const id_mat_matchingRuleUse = new ObjectIdentifier([2, 5, 30, 1, 135]);
export const id_mat_modifiersName = new ObjectIdentifier([2, 5, 30, 1, 136]);
export const id_mat_modifyTimestamp = new ObjectIdentifier([2, 5, 30, 1, 137]);
export const id_mat_myAccessPoint = new ObjectIdentifier([2, 5, 30, 1, 138]);
export const id_mat_nonSpecificKnowledge = new ObjectIdentifier([2, 5, 30, 1, 139]);
export const id_mat_objectClass = new ObjectIdentifier([2, 5, 30, 1, 140]);
export const id_mat_objectClasses = new ObjectIdentifier([2, 5, 30, 1, 141]);
export const id_mat_prescriptiveACI = new ObjectIdentifier([2, 5, 30, 1, 142]);
export const id_mat_nameForms = new ObjectIdentifier([2, 5, 30, 1, 143]);
export const id_mat_specificKnowledge = new ObjectIdentifier([2, 5, 30, 1, 144]);
export const id_mat_structuralObjectClass = new ObjectIdentifier([2, 5, 30, 1, 145]);
export const id_mat_subentryACI = new ObjectIdentifier([2, 5, 30, 1, 146]);
export const id_mat_subtreeSpecification = new ObjectIdentifier([2, 5, 30, 1, 147]);
export const id_mat_superiorKnowledge = new ObjectIdentifier([2, 5, 30, 1, 148]);
export const id_mat_supplierKnowledge = new ObjectIdentifier([2, 5, 30, 1, 149]);
export const id_mat_dirCommonName = new ObjectIdentifier([2, 5, 30, 1, 150]);
//  Managed Object Classes
export const id_moc_dsa = new ObjectIdentifier([2, 5, 30, 2, 0]);
export const id_moc_dse = new ObjectIdentifier([2, 5, 30, 2, 1]);
export const id_moc_knownDSA = new ObjectIdentifier([2, 5, 30, 2, 2]);
export const id_moc_knownDUA = new ObjectIdentifier([2, 5, 30, 2, 3]);
export const id_moc_dUA = new ObjectIdentifier([2, 5, 30, 2, 4]);
export const id_moc_nHOBMO = new ObjectIdentifier([2, 5, 30, 2, 5]);
export const id_moc_hOBMO = new ObjectIdentifier([2, 5, 30, 2, 6]);
export const id_moc_shadowingAgreement = new ObjectIdentifier([2, 5, 30, 2, 7]);
export const id_moc_ULconnEnd = new ObjectIdentifier([2, 5, 30, 2, 8]);
export const id_moc_disManagedObject = new ObjectIdentifier([2, 5, 30, 2, 9]);
export const id_moc_dirCust = new ObjectIdentifier([2, 5, 30, 2, 10]);
export const id_moc_dirUser = new ObjectIdentifier([2, 5, 30, 2, 11]);
export const id_moc_dMD = new ObjectIdentifier([2, 5, 30, 2, 12]);
//  Name Bindings
export const id_mnb_dsa_name_binding = new ObjectIdentifier([2, 5, 30, 3, 0]);
export const id_mnb_dse_name_binding = new ObjectIdentifier([2, 5, 30, 3, 1]);
export const id_mnb_knownDSA_dSA_name_binding = new ObjectIdentifier([2, 5, 30, 3, 2]);
export const id_mnb_knownDUA_dSA_name_binding = new ObjectIdentifier([2, 5, 30, 3, 3]);
export const id_mnb_acseInvoc_knownDSA = new ObjectIdentifier([2, 5, 30, 3, 4]);
export const id_mnb_acseInvoc_knownDUA = new ObjectIdentifier([2, 5, 30, 3, 5]);
export const id_mnb_nHOB_name_binding = new ObjectIdentifier([2, 5, 30, 3, 6]);
export const id_mnb_hOB_name_binding = new ObjectIdentifier([2, 5, 30, 3, 7]);
export const id_mnb_shadowingAgreement_nb = new ObjectIdentifier([2, 5, 30, 3, 8]);
export const id_mnb_ULconnEnd_knownDSA = new ObjectIdentifier([2, 5, 30, 3, 9]);
export const id_mnb_ULconnEnd_knownDUA = new ObjectIdentifier([2, 5, 30, 3, 10]);
export const id_mnb_dis_Customer_name_binding = new ObjectIdentifier([2, 5, 30, 3, 11]);
export const id_mnb_knownDSA_dUA_name_binding = new ObjectIdentifier([2, 5, 30, 3, 12]);
export const id_mnb_DirCust_DMD = new ObjectIdentifier([2, 5, 30, 3, 13]);
export const id_mnb_DirUser_DirCust = new ObjectIdentifier([2, 5, 30, 3, 14]);
//  Packages
export const id_mp_dsaPackage = new ObjectIdentifier([2, 5, 30, 4, 0]);
export const id_mp_readPackage = new ObjectIdentifier([2, 5, 30, 4, 1]);
export const id_mp_comparePackage = new ObjectIdentifier([2, 5, 30, 4, 2]);
export const id_mp_abandonPackage = new ObjectIdentifier([2, 5, 30, 4, 3]);
export const id_mp_listPackage = new ObjectIdentifier([2, 5, 30, 4, 4]);
export const id_mp_searchPackage = new ObjectIdentifier([2, 5, 30, 4, 5]);
export const id_mp_addPackage = new ObjectIdentifier([2, 5, 30, 4, 6]);
export const id_mp_removePackage = new ObjectIdentifier([2, 5, 30, 4, 7]);
export const id_mp_modifyPackage = new ObjectIdentifier([2, 5, 30, 4, 8]);
export const id_mp_modifyDNPackage = new ObjectIdentifier([2, 5, 30, 4, 9]);
export const id_mp_chainedReadPackage = new ObjectIdentifier([2, 5, 30, 4, 10]);
export const id_mp_chainedComparePackage = new ObjectIdentifier([2, 5, 30, 4, 11]);
export const id_mp_chainedAbandonPackage = new ObjectIdentifier([2, 5, 30, 4, 12]);
export const id_mp_chainedListPackage = new ObjectIdentifier([2, 5, 30, 4, 13]);
export const id_mp_chainedSearchPackage = new ObjectIdentifier([2, 5, 30, 4, 14]);
export const id_mp_chainedAddPackage = new ObjectIdentifier([2, 5, 30, 4, 15]);
export const id_mp_chainedRemovePackage = new ObjectIdentifier([2, 5, 30, 4, 16]);
export const id_mp_chainedModifyPackage = new ObjectIdentifier([2, 5, 30, 4, 17]);
export const id_mp_chainedModifyDNPackage = new ObjectIdentifier([2, 5, 30, 4, 18]);
export const id_mp_dsePackage = new ObjectIdentifier([2, 5, 30, 4, 19]);
export const id_mp_knownDSAPackage = new ObjectIdentifier([2, 5, 30, 4, 20]);
export const id_mp_knownDUAPackage = new ObjectIdentifier([2, 5, 30, 4, 21]);
export const id_mp_dUAPackage = new ObjectIdentifier([2, 5, 30, 4, 22]);
export const id_mp_nHOBPackage = new ObjectIdentifier([2, 5, 30, 4, 23]);
export const id_mp_hOBPackage = new ObjectIdentifier([2, 5, 30, 4, 24]);
export const id_mp_shadowingAgreementPackage = new ObjectIdentifier([2, 5, 30, 4, 25]);
export const id_mp_ULconnEndPackage = new ObjectIdentifier([2, 5, 30, 4, 26]);
export const id_mp_disPackage = new ObjectIdentifier([2, 5, 30, 4, 27]);
export const id_mp_dcsPackage = new ObjectIdentifier([2, 5, 30, 4, 28]);
export const id_mp_dirCust = new ObjectIdentifier([2, 5, 30, 4, 29]);
export const id_mp_dirUser = new ObjectIdentifier([2, 5, 30, 4, 30]);
export const id_mp_dMD = new ObjectIdentifier([2, 5, 30, 4, 31]);
export const id_mp_dsPackage = new ObjectIdentifier([2, 5, 30, 4, 32]);
//  Parameters
export const id_mpa_nameProblem = new ObjectIdentifier([2, 5, 30, 5, 1]);
export const id_mpa_traceInformation = new ObjectIdentifier([2, 5, 30, 5, 2]);
export const id_mpa_serviceProblem = new ObjectIdentifier([2, 5, 30, 5, 3]);
export const id_mpa_entryName = new ObjectIdentifier([2, 5, 30, 5, 4]);
export const id_mpa_operation = new ObjectIdentifier([2, 5, 30, 5, 5]);
export const id_mpa_attributeProblem = new ObjectIdentifier([2, 5, 30, 5, 6]);
export const id_mpa_attributeType = new ObjectIdentifier([2, 5, 30, 5, 7]);
export const id_mpa_shadowProblem = new ObjectIdentifier([2, 5, 30, 5, 8]);
export const id_mpa_attributeValue = new ObjectIdentifier([2, 5, 30, 5, 9]);
export const id_mpa_resource = new ObjectIdentifier([2, 5, 30, 5, 10]);
export const id_mpa_authenReason = new ObjectIdentifier([2, 5, 30, 5, 11]);
export const id_mpa_updateProblem = new ObjectIdentifier([2, 5, 30, 5, 12]);
export const id_mpa_extensions = new ObjectIdentifier([2, 5, 30, 5, 15]);
export const id_mpa_aliasedRDNs = new ObjectIdentifier([2, 5, 30, 5, 16]);
export const id_mpa_aliasDereferenced = new ObjectIdentifier([2, 5, 30, 5, 17]);
export const id_mpa_referenceType = new ObjectIdentifier([2, 5, 30, 5, 18]);
export const id_mpa_operationProgress = new ObjectIdentifier([2, 5, 30, 5, 19]);
export const id_mpa_pDU = new ObjectIdentifier([2, 5, 30, 5, 20]);
export const id_mpa_opId = new ObjectIdentifier([2, 5, 30, 5, 21]);
export const id_mpa_nhob_bind_id = new ObjectIdentifier([2, 5, 30, 5, 22]);
export const id_mpa_mhob_dop_prob = new ObjectIdentifier([2, 5, 30, 5, 23]);
export const id_mpa_hob_bind_id = new ObjectIdentifier([2, 5, 30, 5, 24]);
export const id_mpa_hob_dop_prob = new ObjectIdentifier([2, 5, 30, 5, 25]);
export const id_mpa_shadowing_dop_prob = new ObjectIdentifier([2, 5, 30, 5, 26]);
export const id_mpa_opIdDN = new ObjectIdentifier([2, 5, 30, 5, 27]);