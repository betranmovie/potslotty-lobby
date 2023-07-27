import { useEffect, useState } from 'react';

export function useAsyncInitialize<T>(func: () => Promise<T>, deps: any[] = []) {
    const [stateV, setStateV] = useState<T | undefined>();
    useEffect(() => {
        (async () => {
            let be= await func()
            setStateV(be);
        })();
    }, deps);

    return stateV;
}