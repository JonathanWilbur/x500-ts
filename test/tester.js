const asn1 = require("asn1-ts");
const pem = require("pem-ts");
const { _decode_Certificate } = require("../dist/node/modules/AuthenticationFramework/Certificate.ta");
const fs = require("fs");

if (process.argv.length < 3) {
    throw new Error("Too few arguments.");
}
const filePath = process.argv[2];
const fileData = fs.readFileSync(filePath, { encoding: "utf8" });
const certPem = new pem.PEMObject();
certPem.decode(fileData);
const el = new asn1.DERElement();
el.fromBytes(certPem.data);
const cert = _decode_Certificate(el);
console.log(cert.toBeSigned.subject.rdnSequence[0]);
