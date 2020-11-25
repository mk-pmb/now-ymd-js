/* -*- coding: UTF-8, tab-width: 2 -*- */
/*jslint indent: 2, maxlen: 80, node: true */
'use strict';

module.exports = (function setup(y) {

  function g(f) {
    var d = new Date(), a;
    a = (
      ((d.getFullYear() % 100) * 1e4)
      + ((d.getMonth() + 1) * 1e2)
      + d.getDate()
    );
    if (f === 't') {
      a += (
        (d.getHours() * 1e-2)
        + (d.getMinutes() * 1e-4)
        + (d.getSeconds() * 1e-6)
      );
    }
    return a;
  }

  y = function nowYmdNum() { return g(); };
  y.t = function nowYmdNumTimeFrag() { return g('t'); };

  return y;
}());
