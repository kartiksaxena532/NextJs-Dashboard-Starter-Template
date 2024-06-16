// src/utils/password.ts

import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

/**
 * Salt and hash a plain text password.
 * @param plainPassword - The plain text password to hash.
 * @returns A promise that resolves with the hashed password.
 */
export const saltAndHashPassword = async (plainPassword: string): Promise<string> => {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hashedPassword = await bcrypt.hash(plainPassword, salt);
  return hashedPassword;
};

/**
 * Compare a plain text password with a hashed password.
 * @param plainPassword - The plain text password to compare.
 * @param hashedPassword - The hashed password to compare against.
 * @returns A promise that resolves with a boolean indicating if the passwords match.
 */
export const comparePassword = async (plainPassword: string, hashedPassword: string): Promise<boolean> => {
  const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
  return isMatch;
};
