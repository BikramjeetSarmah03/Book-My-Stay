import crypto from "crypto";

export function hashPassword(password: string) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  return { salt, hash };
}

export function encryptPassword(password: string, salt: string) {
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  return hash;
}

export function comparePasswords(password: string, salt: string, hash: string) {
  const encryptedPassword = encryptPassword(password, salt);
  return hash === encryptedPassword;
}
