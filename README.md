# X.500 TypeScript Library

* Author: [Jonathan M. Wilbur](https://github.com/JonathanWilbur) <[jonathan@wilbur.space](mailto:jonathan@wilbur.space)>
* Copyright Year: 2020
* License: [MIT License](https://mit-license.org/)

This is based off of the 2016 X.500-series publications. The 2019 versions are
only for paying ITU members, which I am not.

## Notes

- Steps for transforming compiler output:
  - Convert these to `BigInt`:
    - `AuthenticationFramework.CertificateSerialNumber`
    - `AuthenticationFramework.AvlSerialNumber`
    - `CertificateExtensions.NumberRange`
  - Ensure DER encoding is used (at least) for these modules:
    - `AuthenticationFramework`
    - `AttributeCertificateDefinitions`
    - `CertificateExtensions`