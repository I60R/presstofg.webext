/*
 * options.js
 * Copyright (C) 2017 igor <igor@160R>
 *
 * Distributed under terms of the MIT license.
 */
(function() {
  'use strict';

  const browser = (chrome || browser)

  function load() {
    browser.storage.local.get(['button', 'delay'], function(res) {
      document.querySelector('input[value="' + (res.button || 4) + '"]').checked = true
      document.querySelector('#delay').value = (res.delay || 200)
    });
  }

  document.addEventListener('DOMContentLoaded', load);


  function save() {
    browser.storage.local.set({
      button: document.querySelector('input[name="button"]:checked').value,
      delay: document.querySelector('#delay').value
    });
  };

  let inputs = document.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].onchange = save;
  }
})();
