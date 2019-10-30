import {
    ASN1Construction,
    ASN1TagClass,
    DERElement,
} from "asn1-ts";
import DSACredentials from "./DSACredentials";
import Versions from "../DirectoryAbstractService/Versions";

/**
 * `DSABindArgument  ::=  SET  {
 *   credentials  [0]  DSACredentials OPTIONAL,
 *   versions     [1]  Versions DEFAULT {v1},
 *   ... }`
 */
export default
class DSABindArgument {
    constructor (
        readonly credentials: DSACredentials | undefined,
        readonly versions: Versions,
    ) {}

    public static fromElement (value: DERElement): DSABindArgument {
        let credentials: DSACredentials | undefined = undefined;
        let versions: Versions = new Versions(true, false);
        value.set.forEach((element) => {
            if (element.tagClass !== ASN1TagClass.context) {
                return;
            }
            switch (element.tagNumber) {
            case (0): {
                credentials = element.inner;
                break;
            }
            case (1): {
                versions = Versions.fromElement(element);
                break;
            }
            default: { break; }
            }
        });

        return new DSABindArgument(
            credentials,
            versions,
        );
    }

    public toElement (): DERElement {
        let credentialsElement: DERElement | undefined = undefined;
        if (this.credentials) {
            credentialsElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                0,
                this.credentials,
            );
        }

        const versionsElement: DERElement = this.versions.toElement();
        versionsElement.tagClass = ASN1TagClass.context;
        versionsElement.tagNumber = 1;

        return DERElement.fromSet([
            credentialsElement,
            versionsElement,
        ]);
    }
}
