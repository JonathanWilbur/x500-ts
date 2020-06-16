const asn1 = require("asn1-ts");
const pem = require("pem-ts");
const x500 = require("../dist/node/index.js");
const AuthenticationFramework = x500.AuthenticationFramework;
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
const cert = AuthenticationFramework._decode_Certificate(el);
console.log(cert.toBeSigned.subject.rdnSequence[0]);
