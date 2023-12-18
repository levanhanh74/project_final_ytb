import { useMutation } from '@tanstack/react-query';

const UseMutationHook = (functionCallBack) => {
    return useMutation({
        mutationFn: functionCallBack
    });
}

export { UseMutationHook }

