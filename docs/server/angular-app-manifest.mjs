
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Website/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Website/home",
    "route": "/Website"
  },
  {
    "renderMode": 2,
    "route": "/Website/home"
  },
  {
    "renderMode": 2,
    "route": "/Website/search"
  },
  {
    "renderMode": 2,
    "route": "/Website/collections"
  }
],
  assets: {
    'index.csr.html': {size: 6920, hash: '7f85923ec08393058b0043c6e62d1985cb959d3727afb1461ad7863716a5092b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1128, hash: 'da2ff427f075cfd8b4a96d3249be7ff26c97626f95621002219ca7ee82c4e322', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'search/index.html': {size: 64545, hash: '2c36d9d55e8ed48b983d83d40b22a346902b1b2495b340cebe8323ce6664b11b', text: () => import('./assets-chunks/search_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 64532, hash: '61559ce5a7c89664494cbe883dfa2256eef77dc4c676edc0c1f23fb757f59632', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'collections/index.html': {size: 145108, hash: '19f82d3cce8d67dfbeced6d5ed8bfafc52cb82d4859d63f4ffab93b12c5385b8', text: () => import('./assets-chunks/collections_index_html.mjs').then(m => m.default)},
    'styles-BPBKTCVL.css': {size: 253473, hash: 'Sh7VmSTq0gk', text: () => import('./assets-chunks/styles-BPBKTCVL_css.mjs').then(m => m.default)}
  },
};
