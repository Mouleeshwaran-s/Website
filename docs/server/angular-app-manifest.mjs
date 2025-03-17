
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
    'index.csr.html': {size: 13970, hash: '23f4e03710b340dbc99f054ab8439f31ea3f19352563aed5e343525048cb2ad5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1250, hash: '5135bdd403a5f58814befd4148c9fd457b83a7a5ff3c7cf4444eb691ee082ab7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-HOECO3UH.css': {size: 259927, hash: 'tbrJwi0vU6U', text: () => import('./assets-chunks/styles-HOECO3UH_css.mjs').then(m => m.default)}
  },
};
