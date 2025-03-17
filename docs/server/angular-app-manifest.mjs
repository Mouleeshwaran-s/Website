
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
    'index.csr.html': {size: 29864, hash: 'ce28a18253e988dfd127ad6ab96e6cebb13ea17a3ae89502a5e76ab90f80c901', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17259, hash: 'ae3479933c99c1c8d3cce0e91fe5c462bd5e0f126d61da971edf913b06695039', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-HBORMTZI.css': {size: 259434, hash: 'xoD1O+sQCNc', text: () => import('./assets-chunks/styles-HBORMTZI_css.mjs').then(m => m.default)}
  },
};
