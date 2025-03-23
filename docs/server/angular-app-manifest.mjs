
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
    'index.csr.html': {size: 14058, hash: '0a669f0c9edc704085174da841bdf9560f568ec43f7b617d137eea02af5644a1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1250, hash: '67b482ccb3e005b471486cdfccdd4fa747a32f816da9341f2f1251528857e19b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WF3XSWFJ.css': {size: 260863, hash: 'Gy01uMQ2UIk', text: () => import('./assets-chunks/styles-WF3XSWFJ_css.mjs').then(m => m.default)}
  },
};
