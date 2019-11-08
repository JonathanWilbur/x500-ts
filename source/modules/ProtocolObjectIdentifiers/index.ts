import { ObjectIdentifier } from "asn1-ts";

// ROS Objects

export const id_rosObject_dua = new ObjectIdentifier([2, 5, 25, 1]);
export const id_rosObject_directory = new ObjectIdentifier([2, 5, 25, 2]);
export const id_rosObject_dapDSA = new ObjectIdentifier([2, 5, 25, 3]);
export const id_rosObject_dspDSA = new ObjectIdentifier([2, 5, 25, 4]);
export const id_rosObject_dopDSA = new ObjectIdentifier([2, 5, 25, 7]);
export const id_rosObject_initiatingConsumerDSA = new ObjectIdentifier([2, 5, 25, 8]);
export const id_rosObject_respondingSupplierDSA = new ObjectIdentifier([2, 5, 25, 9]);
export const id_rosObject_initiatingSupplierDSA = new ObjectIdentifier([2, 5, 25, 10]);
export const id_rosObject_respondingConsumerDSA = new ObjectIdentifier([2, 5, 25, 11]);

// contracts

export const id_contract_dap = new ObjectIdentifier([2, 5, 26, 1]);
export const id_contract_dsp = new ObjectIdentifier([2, 5, 26, 2]);
export const id_contract_shadowConsumer = new ObjectIdentifier([2, 5, 26, 3]);
export const id_contract_shadowSupplier = new ObjectIdentifier([2, 5, 26, 4]);
export const id_contract_dop = new ObjectIdentifier([2, 5, 26, 5]);

// packages

export const id_package_read = new ObjectIdentifier([2, 5, 27, 1]);
export const id_package_search = new ObjectIdentifier([2, 5, 27, 2]);
export const id_package_modify = new ObjectIdentifier([2, 5, 27, 3]);
export const id_package_chainedRead = new ObjectIdentifier([2, 5, 27, 4]);
export const id_package_chainedSearch = new ObjectIdentifier([2, 5, 27, 5]);
export const id_package_chainedModify = new ObjectIdentifier([2, 5, 27, 6]);
export const id_package_shadowConsumer = new ObjectIdentifier([2, 5, 27, 7]);
export const id_package_shadowSupplier = new ObjectIdentifier([2, 5, 27, 8]);
export const id_package_operationalBindingManagement = new ObjectIdentifier([2, 5, 27, 9]);
export const id_package_dapConnection = new ObjectIdentifier([2, 5, 27, 10]);
export const id_package_dspConnection = new ObjectIdentifier([2, 5, 27, 11]);
export const id_package_dispConnection = new ObjectIdentifier([2, 5, 27, 12]);
export const id_package_dopConnection = new ObjectIdentifier([2, 5, 27, 13]);

//  application contexts

// export const id_ac_directoryAccessAC = new ObjectIdentifier([2, 5, 3, 1]);
// export const id_ac_directorySystemAC = new ObjectIdentifier([2, 5, 3, 2]);
// export const id_ac_directoryOperationalBindingManagementAC = new ObjectIdentifier([2, 5, 3, 3]);
// export const id_ac_shadowConsumerInitiatedAC = new ObjectIdentifier([2, 5, 3, 4]);
// export const id_ac_shadowSupplierInitiatedAC = new ObjectIdentifier([2, 5, 3, 5]);
// export const id_ac_reliableShadowSupplierInitiatedAC = new ObjectIdentifier([2, 5, 3, 6]);
// export const id_ac_reliableShadowConsumerInitiatedAC = new ObjectIdentifier([2, 5, 3, 7]);
// export const id_ac_shadowSupplierInitiatedAsynchronousAC = new ObjectIdentifier([2, 5, 3, 8]);
// export const id_ac_shadowConsumerInitiatedAsynchronousAC = new ObjectIdentifier([2, 5, 3, 9]);

// id-ac-directoryAccessWith2or3seAC						OBJECT IDENTIFIER	::=	{2, 5, 3, 10]);
// id-ac-directorySystemWith2or3seAC					OBJECT IDENTIFIER	::=	{2, 5, 3, 11]);
// id-ac-shadowSupplierInitiatedWith2or3seAC				OBJECT IDENTIFIER	::=	{2, 5, 3, 12]);
// id-ac-shadowConsumerInitiatedWith2or3seAC				OBJECT IDENTIFIER	::=	{2, 5, 3, 13]);
// id-ac-reliableShadowSupplierInitiatedWith2or3seAC			OBJECT IDENTIFIER	::=	{2, 5, 3, 14]);
// id-ac-reliableShadowConsumerInitiatedWith2or3seAC			OBJECT IDENTIFIER	::=	{2, 5, 3, 15]);
// id-ac-directoryOperationalBindingManagementWith2or3seAC   	OBJECT IDENTIFIER	::=	{2, 5, 3, 16]);

//  ASEs (obsolete)

//	id-ase-readASE							OBJECT IDENTIFIER	::=	{id-ase 1]);
//	id-ase-searchASE   						OBJECT IDENTIFIER	::=	{id-ase 2]);
//	id-ase-modifyASE   						OBJECT IDENTIFIER	::=	{id-ase 3]);
//	id-ase-chainedReadASE  					OBJECT IDENTIFIER	::=	{id-ase 4]);
//	id-ase-chainedSearchASE					OBJECT IDENTIFIER	::=	{id-ase 5]);
//	id-ase-chainedModifyASE					OBJECT IDENTIFIER	::=	{id-ase 6]);
//	id-ase-operationalBindingManagementASE    		OBJECT IDENTIFIER	::=	{id-ase 7]);
//	id-ase-shadowConsumerASE					OBJECT IDENTIFIER	::=	{id-ase 8]);
//	id-ase-shadowSupplierASE  					OBJECT IDENTIFIER    ::=	{id-ase 9]);

//  abstract syntaxes

// export const id_as_directoryAccessAS = new ObjectIdentifier([2, 5, 9, 1]);
// export const id_as_directorySystemAS = new ObjectIdentifier([2, 5, 9, 2]);
// export const id_as_directoryShadowAS = new ObjectIdentifier([2, 5, 9, 3]);
// export const id_as_directoryOperationalBindingManagementAS = new ObjectIdentifier([2, 5, 9, 4]);
// export const id_as_directoryReliableShadowAS = new ObjectIdentifier([2, 5, 9, 5]);
// export const id_as_reliableShadowBindingAS = new ObjectIdentifier([2, 5, 9, 6]);
// export const id_as_2or3se = new ObjectIdentifier([2, 5, 9, 7]);
