import WindowMock from 'window-mock';

// declare global {
//     interface Window {
//         location: any;
//     }
// }

export const ssr = process.env.__IS_SERVER ? {
    beforeRenderServer: async ({
        env,
        location,
        history,
        mode,
        context,
    }) => {
        const windowMock = new WindowMock();
        global.window = {
            location
        };
    }
} : false
