// ==UserScript==
// @name         Reddit Registration Buster
// @namespace    http://xanderguzman.com/
// @version      0.1
// @description  Removes Reddit's registration nag screen and restores scrolling.
// @author       Xander Guzman <xander.guzman@xanderguzman.com>
// @match        https://www.reddit.com/
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    $("#onboarding-splash").remove();
    window.setTimeout(function (e) {
        $("body").removeClass("modal-open");
    }, 1000);
})();
