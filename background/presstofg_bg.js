/*
 * presstoswitch_bg.js
 * Copyright (C) 2017 igor <igor@160R>
 *
 * Distributed under terms of the MIT license.
 */
(function() {
  'use strict';

  const browser = (chrome || browser)

  function onMessage(req) {
    browser.tabs.create({ 'url': req.newUrl});
  }
  browser.runtime.onMessage.addListener(onMessage);
})();
