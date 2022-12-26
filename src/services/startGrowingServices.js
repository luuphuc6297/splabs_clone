import { useMutation, useQueryClient } from '@tanstack/react-query';
import { StartGrowingApi } from 'pages/LandingPage/StartGrowing';
import { toast } from 'react-toastify';

const startGrowingKeys = {
    all: () => ['startGrowingServices'],
};

export const useSubmitForm = (configs) => {
    const queryClient = useQueryClient();
    return useMutation((payload) => StartGrowingApi.submitForm(payload), {
        ...configs,
        onSuccess: (...args) => {
            toast.success('Successfully.');
            queryClient.invalidateQueries([...startGrowingKeys.all()]);
            configs?.onSuccess?.(...args);
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message || err.message);
        },
    });
};
