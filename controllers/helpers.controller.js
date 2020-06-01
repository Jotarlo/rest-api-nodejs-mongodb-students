/** packages */
const CryptoJS = require("crypto-js");
const config = require("config");

exports.EncryptPasword = (plaintTextPassword) => {
    let cryptoKey = config.get("secretkeys").cryptokey;
    let cryptedPassword = CryptoJS.AES.encrypt(plaintTextPassword, cryptoKey).toString();
    return cryptedPassword;
};