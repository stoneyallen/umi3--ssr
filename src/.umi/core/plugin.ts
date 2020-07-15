// @ts-nocheck
import { Plugin } from '/Users/bytedance/Desktop/demos/umi3-ssr/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['patchRoutes','rootContainer','render','onRouteChange','dva','getInitialState','request',],
});
plugin.register({
  apply: require('/Users/bytedance/Desktop/demos/umi3-ssr/src/app.ts'),
  path: '/Users/bytedance/Desktop/demos/umi3-ssr/src/app.ts',
});
plugin.register({
  apply: require('/Users/bytedance/Desktop/demos/umi3-ssr/src/.umi/plugin-dva/runtime.tsx'),
  path: '/Users/bytedance/Desktop/demos/umi3-ssr/src/.umi/plugin-dva/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});

export { plugin };
