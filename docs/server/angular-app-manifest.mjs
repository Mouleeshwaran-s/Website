
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
    'index.csr.html': {size: 29864, hash: '7ed6374f298efb86255a7170eb2bcf65b1a2ef11c9f88c1a5bc544269146469d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17259, hash: 'ffbb7f29ccf798295114c11ef94ba4a4901a0b02df47c4cf9d5f1cbd93182608', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-XVFRM6MU.css': {size: 259011, hash: 'XqQzO6UYbe8', text: () => import('./assets-chunks/styles-XVFRM6MU_css.mjs').then(m => m.default)}
  },
};
