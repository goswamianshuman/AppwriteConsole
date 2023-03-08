import { Dependencies } from '$lib/constants';
import { sdk, sdkForConsole } from '$lib/stores/sdk';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, parent, depends }) => {
    depends(Dependencies.DOMAINS);

    return {
        domains: await sdkForConsole.projects.listDomains(params.project)
    };
};
