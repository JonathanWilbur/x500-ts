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

- [x] CertificateExtensions (1 day)
- [x] CommonProtocolSpecifications (1 hour)
- [ ] DirectoryAbstractService (2 days)
- [ ] DirectoryOperationalBindingTypes (0.25 hours)
- [ ] DirectoryOSIProtocols (0.25 hours)
- [ ] DirectoryShadowAbstractService (4 hours)
- [x] DistributedOperations (1 hour)
- [x] DSAOperationalAttributeTypes (0.5 hours)
- [ ] EnhancedSecurity (6 hours)
- [x] ExtensionAttributes (1 hour)
- [x] InformationFramework (1 hour)
- [x] LdapSystemSchema (0.5 hours)
- [ ] OperationalBindingManagement? (8 hours)
- [ ] OSIProtocolSpecification (8 hours)
- [ ] PkiPmiExternalDataTypes? (6 hours)
- [ ] PkiPmiProtocolSpecifications? (8 hours)
- [x] PkiPmiWrapper (1 hour)
- [x] PKIXImplicit93 (0.5 hours)
- [ ] SchemaAdministration (6 hours)
- [x] SelectedAttributeTypes (1 hour)
- [x] ServiceAdministration (2 hours)
- [x] UsefulDefinitions (0.5 hours)
