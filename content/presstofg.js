/*
 * presstoswitch.js
 * Copyright (C) 2017 160R <160R@protonmail.com>
 *
 * Distributed under terms of the MIT license.
 */
(function() {
  'use strict'

  const browser = (chrome || browser);

  browser.storage.local.get(['button', 'delay'], function(res) {
    const button = res.button || 4;
    const delay = res.delay || 200;

    let isAElementPressed;
    let switchTabTimeout;

    document.body.addEventListener('mousedown', function(ev) {
      const target = ev.target
      isAElementPressed = (ev.buttons == button && target && target.nodeName == "A");
      if (isAElementPressed) {
        switchTabTimeout = setTimeout(function() {
          browser.runtime.sendMessage({
            newUrl: target.href
          });
        }, delay);
      }
    });

    document.body.addEventListener('mouseup', function(ev) {
      if (isAElementPressed) {
        ev.preventDefault();
        clearTimeout(switchTabTimeout);
      }
    });
  });
})();
