module.exports = function (app) {
  app.use('/public', require('../routes/public.js'));
};
