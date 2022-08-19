'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  router.get('/', controller.home.index);
  // socket.io
  io.of('/').route('server', io.controller.io.ping);
  io.of('/').route('exchange', io.controller.nsp.exchange);
};
