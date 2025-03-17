
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
    'index.csr.html': {size: 14440, hash: 'bf0ddfdac622ee3c593c3b32df7f9cb445938721759129de54b8fec50198175a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1720, hash: '9c66214749c82eccef88985d0da67e35a2c5f281c107d6b719c5a5f2b692455e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-HOECO3UH.css': {size: 259927, hash: 'tbrJwi0vU6U', text: () => import('./assets-chunks/styles-HOECO3UH_css.mjs').then(m => m.default)}
  },
};
