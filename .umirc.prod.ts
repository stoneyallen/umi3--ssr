export default {
    // publicPath: `//{{ publicPath }}/dp/rangers/rangers/${process.env['BUILD_VERSION']}/static/`,
    // runtimePublicPath: true,
    ssr: {},
    exportStatic: {
        extraRoutePaths: async () => {
            return Promise.resolve(['/', '/user']);
        }
    },
    // dva: {
    //     skipModelValidate: false 
    // }
}