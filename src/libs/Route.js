import publicRoute from '../routes/public';

const routes = [{
  path: '/public',
  file: publicRoute,
}];

export default (app) => {
  routes.forEach((router) => app.use(router.path, router.file));
};
