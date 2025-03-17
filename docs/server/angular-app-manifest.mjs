
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Website/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "redirectTo": "/Website/home",
    "route": "/Website"
  },
  {
    "renderMode": 0,
    "route": "/Website/home"
  },
  {
    "renderMode": 0,
    "route": "/Website/search"
  },
  {
    "renderMode": 0,
    "route": "/Website/collections/*"
  }
],
  assets: {
    'index.csr.html': {size: 14367, hash: '0d281f11ed9b1469718a5e39f92fe4b1f8a5080839b33af800cff31b03b7d522', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1720, hash: '0e79b398ce6b4a73d173de0c7f070b96d01837c6d0a8e9850ac74558c116da69', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5VQ5GXIT.css': {size: 259664, hash: 'MxWQq8Dir3k', text: () => import('./assets-chunks/styles-5VQ5GXIT_css.mjs').then(m => m.default)}
  },
};
