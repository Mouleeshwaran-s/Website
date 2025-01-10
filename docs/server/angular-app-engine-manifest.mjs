
export default {
  basePath: '/Website/',
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
