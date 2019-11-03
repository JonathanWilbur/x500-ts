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
- [x] DirectoryOperationalBindingTypes
- [x] DirectoryOSIProtocols
- [ ] DirectoryShadowAbstractService (4 hours)
- [x] DistributedOperations
- [x] DSAOperationalAttributeTypes
- [ ] EnhancedSecurity (6 hours)
- [x] ExtensionAttributes
- [x] InformationFramework
- [x] LdapSystemSchema
- [ ] OperationalBindingManagement? (8 hours)
- [ ] OSIProtocolSpecification (8 hours)
- [ ] PkiPmiExternalDataTypes? (6 hours)
- [ ] PkiPmiProtocolSpecifications? (8 hours)
- [x] PkiPmiWrapper
- [x] PKIXImplicit93
- [ ] SchemaAdministration (6 hours)
- [x] SelectedAttributeTypes
- [x] ServiceAdministration
- [x] UsefulDefinitions
