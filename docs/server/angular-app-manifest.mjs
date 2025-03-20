
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
    'index.csr.html': {size: 13970, hash: 'a72bec4e81fec5fb34ffb6d02d6ab363b185bc2954a08a45afa6beb3130c00b8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1250, hash: 'a05246c2e4b714f25cba0a52049b49838de699521191bbdddcf3a4cf48926f10', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-NUO4MMUP.css': {size: 259799, hash: 'JUNRdA9AYLk', text: () => import('./assets-chunks/styles-NUO4MMUP_css.mjs').then(m => m.default)}
  },
};
