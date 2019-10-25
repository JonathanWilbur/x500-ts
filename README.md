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

- [ ] CertificateExtensions (1 day)
- [ ] DirectoryAbstractService (2 days)
- [ ] EnhancedSecurity (3 hours)
- [x] InformationFramework (1 hour)
- [x] LdapSystemSchema (0.5 hours)
- [ ] OperationalBindingManagement? (4 hours)
- [ ] PkiPmiExternalDataTypes? (3 hours)
- [ ] PkiPmiProtocolSpecifications? (4 hours)
- [x] PkiPmiWrapper (1 hour)
- [x] PKIXImplicit93 (0.5 hours)
- [ ] SchemaAdministration (3 hours)
- [x] SelectedAttributeTypes (1 hour)
- [x] ServiceAdministration (2 hours)
- [x] UsefulDefinitions (0.5 hours)
