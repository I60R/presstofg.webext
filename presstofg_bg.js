/*
 * presstoswitch_bg.js
 * Copyright (C) 2017 igor <igor@160R>
 *
 * Distributed under terms of the MIT license.
 */
(function() {
  'use strict';

  const browser = (chrome || browser)
  browser.runtime.onMessage.addListener(function(request) {
    console.log(request);
    browser.tabs.create({
      'url': request.newUrl
    });
  });
})();
