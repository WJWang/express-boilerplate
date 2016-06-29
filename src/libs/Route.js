let routes = [
  {
    path : '/public',
    file : require('../routes/public')
  }
];

module.exports = function (app) {
  routes.forEach((router) => app.use(router.path, router.file));
};
