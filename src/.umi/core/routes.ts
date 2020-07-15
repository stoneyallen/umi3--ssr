// @ts-nocheck
import { ApplyPluginsType } from '/Users/bytedance/Desktop/demos/umi3-ssr/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": require('/Users/bytedance/Desktop/demos/umi3-ssr/src/pages/index').default,
    "exact": true
  },
  {
    "path": "/user",
    "component": require('/Users/bytedance/Desktop/demos/umi3-ssr/src/pages/user').default,
    "exact": true
  },
  {
    "path": "/product",
    "component": require('/Users/bytedance/Desktop/demos/umi3-ssr/src/pages/product').default,
    "exact": true
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
