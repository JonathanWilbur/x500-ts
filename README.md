# X.500 Directory in TypeScript

* Author: [Jonathan M. Wilbur](https://github.com/JonathanWilbur) <[jonathan@wilbur.space](mailto:jonathan@wilbur.space)>
* Copyright Year: 2019
* License: [MIT License](https://mit-license.org/)

## Why not separate libraries for each ITU specification, such as X.509?

Almost all of the specifications within the ITU X.500 series are mutually
referential. Being mutually dependent, it made sense to combine them, even
though it will result in a more bloated codebase.

## TODO

- [ ] Serverless Commands
  - [ ] `DeserializeDistinguishedName`
  - [ ] `TestLDAPFilter`

## Development

- [x] CertificateExtensions
- [x] CommonProtocolSpecifications
- [x] DirectoryAbstractService (Mostly done)
- [x] DirectoryAccessProtocol
- [x] DirectoryIDMProtocols
- [x] DirectoryInformationShadowProtocol
- [x] DirectoryManagement
- [ ] DirectoryOperationalBindingManagementProtocol
- [x] DirectoryOperationalBindingTypes
- [x] DirectoryOSIProtocols
- [ ] DirectorySecurityExchanges
- [x] DirectoryShadowAbstractService (4 hours)
- [ ] DirectorySystemProtocol
- [x] DistributedOperations
- [x] DSAOperationalAttributeTypes
- [x] EnhancedSecurity (6 hours)
- [x] ExtensionAttributes
- [ ] HierarchicalOperationalBindings
- [ ] IDMProtocolSpecification
- [x] InformationFramework
- [x] LdapSystemSchema
- [x] OperationalBindingManagement
- [ ] OSIProtocolSpecification (8 hours)
- [ ] PkiPmiExternalDataTypes? (6 hours)
- [ ] PkiPmiProtocolSpecifications? (8 hours)
- [x] PkiPmiWrapper
- [x] PKIXImplicit93
- [ ] ProtocolObjectIdentifiers
- [x] SchemaAdministration
- [x] SelectedAttributeTypes
- [x] SelectedObjectClasses
- [x] ServiceAdministration
- [ ] SpkmGssTokens
- [x] UsefulDefinitions
