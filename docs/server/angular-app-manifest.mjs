
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
    'index.csr.html': {size: 29864, hash: '962ea876b01e384474fe420d983d6100194c7658d9fefff86cef34ded664284c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17259, hash: '31165b22b3e78e32dd5d73dc795a51308e147e5b57215d417a28ae7f4addc867', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-XVFRM6MU.css': {size: 259011, hash: 'XqQzO6UYbe8', text: () => import('./assets-chunks/styles-XVFRM6MU_css.mjs').then(m => m.default)}
  },
};
