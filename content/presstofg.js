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

    let isTargetButtonPressed;
    let switchTabTimeout;

    const aElements = document.getElementsByTagName("a");
    for (let i = 0; i < aElements.length; i++) {
      let aElement = aElements[i];

      aElement.addEventListener('mousedown', function(ev) {
        isTargetButtonPressed = (ev.buttons == button);
        if (isTargetButtonPressed) {
          switchTabTimeout = setTimeout(function() {
            browser.runtime.sendMessage({
              newUrl: aElement.href
            });
          }, delay);
        }
      });

      aElement.addEventListener('mouseup', function(ev) {
        if (isTargetButtonPressed) {
          ev.preventDefault();
          clearTimeout(switchTabTimeout);
        }
      });
    }
  });
})();
