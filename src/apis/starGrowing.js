import { axiosClient } from './axiosClient';

export const startGrowingApi = {
    submitForm(data) {
        const url = '';
        return axiosClient.post(url, data);
    },
};
