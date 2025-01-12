
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
    'index.csr.html': {size: 29864, hash: '2a9478a75d441780d78d5cfe04e16abcf11ab67d87ee300fabd660a3ea8ede59', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17259, hash: '29c68b7017a88d13427d0b2acf8a716fdd653d88e8e60e13952860569e11cc1d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-XVFRM6MU.css': {size: 259011, hash: 'XqQzO6UYbe8', text: () => import('./assets-chunks/styles-XVFRM6MU_css.mjs').then(m => m.default)}
  },
};
