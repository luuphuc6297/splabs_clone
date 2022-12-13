// import CryptoJS from 'crypto-js';
import { ACCESS_TOKEN_KEY } from './contants';

// export const Decrypt = (ciphertext, privateKey) => {
//   var bytes = CryptoJS.AES.decrypt(ciphertext, privateKey);
//   return bytes.toString(CryptoJS.enc.Utf8);
// };

export const getAccessToken = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  if (!accessToken) return null;
  return accessToken;
};
