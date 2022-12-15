import { ACCESS_TOKEN_KEY } from './contants';

export const getAccessToken = () => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    if (!accessToken) return null;
    return accessToken;
};
